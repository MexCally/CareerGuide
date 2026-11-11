"use strict";

const STORAGE_KEY = "careerguide.assistant.state";
const CONVERSATIONS_KEY = "careerguide.assistant.conversations";
const PENDING_CONTEXT_KEY = "careerguide.pendingContext";
const MAX_HISTORY = 12;
const MAX_USER_MESSAGE_LENGTH = 2000;
const MAX_ASSISTANT_MESSAGE_LENGTH = 10000;
const MAX_SAVED_CONVERSATIONS = 30;
const WELCOME_MESSAGE = "Hi! I can help you explore careers, compare options, identify skills to build, and think through next steps. What would you like to explore?";

const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
const chatStatus = document.getElementById("chatStatus");
const chatContext = document.getElementById("chatContext");
const conversationList = document.getElementById("conversationList");
const sendChat = document.getElementById("sendChat");
const clearChat = document.getElementById("clearChat");
const cancelEdit = document.getElementById("cancelEdit");
const suggestionButtons = [...document.querySelectorAll(".chat-suggestions button")];

let history = [];
let context = null;
let conversations = [];
let activeConversationId = "";
let editingIndex = null;
let isSending = false;
let storageWarning = "";

function validContext(value) {
    if (!value || typeof value !== "object" || Array.isArray(value)) return null;
    const text = (candidate, max) => typeof candidate === "string" ? candidate.trim().slice(0, max) : "";
    const sectors = Array.isArray(value.sectors)
        ? value.sectors.filter((sector) => typeof sector === "string").slice(0, 3).map((sector) => sector.trim().slice(0, 100))
        : [];
    const normalized = {
        career: text(value.career, 100),
        overview: text(value.overview, 400),
        study: text(value.study, 400),
        sectors
    };
    return normalized.career || normalized.sectors.length ? normalized : null;
}

function setStatus(message, state = "") {
    chatStatus.textContent = message;
    chatStatus.classList.toggle("is-error", state === "error");
    chatStatus.classList.toggle("is-loading", state === "loading");
}

function setChatStatus(message, state = "") {
    setStatus(storageWarning ? `${message} ${storageWarning}` : message, storageWarning ? "error" : state);
}

function createConversationId() {
    return typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function normalizeHistory(items) {
    if (!Array.isArray(items)) return [];
    return items
        .filter((item) => item && (item.role === "user" || item.role === "assistant") &&
            typeof item.content === "string" && item.content.trim() &&
            item.content.length <= (item.role === "user"
                ? MAX_USER_MESSAGE_LENGTH
                : MAX_ASSISTANT_MESSAGE_LENGTH))
        .slice(-MAX_HISTORY)
        .map(({ role, content }) => ({ role, content: content.trim() }));
}

function conversationTitle(messages) {
    const firstQuestion = messages.find((message) => message.role === "user");
    if (!firstQuestion) return "New conversation";
    return firstQuestion.content.length > 54
        ? `${firstQuestion.content.slice(0, 51)}…`
        : firstQuestion.content;
}

function persistConversations() {
    if (history.length) {
        const existingIndex = conversations.findIndex((item) => item.id === activeConversationId);
        const savedConversation = {
            id: activeConversationId || createConversationId(),
            updatedAt: new Date().toISOString(),
            history,
            context
        };
        activeConversationId = savedConversation.id;
        if (existingIndex === -1) conversations.push(savedConversation);
        else conversations[existingIndex] = savedConversation;
    }

    conversations.sort((first, second) => second.updatedAt.localeCompare(first.updatedAt));
    conversations = conversations.slice(0, MAX_SAVED_CONVERSATIONS);
    try {
        localStorage.setItem(CONVERSATIONS_KEY, JSON.stringify({
            activeConversationId,
            conversations
        }));
        storageWarning = "";
        renderConversationList();
        return true;
    } catch {
        storageWarning = "This browser could not save chat history. Keep this tab open or export anything you need.";
        renderConversationList();
        return false;
    }
}

function renderConversationList() {
    conversationList.replaceChildren();
    if (!conversations.length) {
        const empty = document.createElement("p");
        empty.className = "conversation-empty";
        empty.textContent = "Your conversations will appear here.";
        conversationList.append(empty);
        return;
    }

    conversations.forEach((conversation) => {
        const row = document.createElement("div");
        row.className = "conversation-item";

        const openButton = document.createElement("button");
        openButton.type = "button";
        openButton.className = "conversation-open";
        openButton.disabled = isSending;
        openButton.setAttribute("aria-current", String(conversation.id === activeConversationId));

        const title = document.createElement("span");
        title.className = "conversation-title";
        title.textContent = conversationTitle(conversation.history);

        const date = document.createElement("span");
        date.className = "conversation-date";
        const updated = new Date(conversation.updatedAt);
        date.textContent = Number.isNaN(updated.getTime())
            ? ""
            : updated.toLocaleDateString(undefined, { month: "short", day: "numeric" });
        openButton.append(title, date);
        openButton.addEventListener("click", () => openConversation(conversation.id));

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "conversation-delete";
        deleteButton.textContent = "Delete";
        deleteButton.disabled = isSending;
        deleteButton.setAttribute("aria-label", `Delete conversation: ${conversationTitle(conversation.history)}`);
        deleteButton.addEventListener("click", () => deleteConversation(conversation.id));

        row.append(openButton, deleteButton);
        conversationList.append(row);
    });
}

function updateEditControls() {
    const isEditing = editingIndex !== null;
    cancelEdit.hidden = !isEditing;
    sendChat.firstChild.textContent = isEditing ? "Update & resend " : "Send ";
}

function beginEditing(index) {
    if (isSending || !history[index] || history[index].role !== "user") return;
    editingIndex = index;
    chatInput.value = history[index].content;
    updateEditControls();
    setChatStatus("Edit this question. Replies after it will be removed when you resend.");
    chatInput.focus();
}

function cancelEditing() {
    editingIndex = null;
    chatInput.value = "";
    updateEditControls();
    chatInput.focus();
}

function openConversation(id) {
    if (isSending) return;
    const selected = conversations.find((item) => item.id === id);
    if (!selected) return;
    activeConversationId = selected.id;
    history = [...selected.history];
    context = validContext(selected.context);
    editingIndex = null;
    updateEditControls();
    renderContext();
    renderHistory();
    renderConversationList();
    setChatStatus("Conversation reopened. Messages are saved in this browser on this device.");
}

function deleteConversation(id) {
    if (isSending) return;
    const selected = conversations.find((item) => item.id === id);
    if (!selected || !window.confirm(`Delete "${conversationTitle(selected.history)}" from this browser?`)) return;

    conversations = conversations.filter((item) => item.id !== id);
    if (activeConversationId === id) {
        const mostRecent = conversations[0];
        if (mostRecent) {
            activeConversationId = mostRecent.id;
            history = [...mostRecent.history];
            context = validContext(mostRecent.context);
        } else {
            activeConversationId = createConversationId();
            history = [];
            context = null;
        }
        editingIndex = null;
        updateEditControls();
        renderContext();
        renderHistory();
    }
    persistConversations();
    setChatStatus("Conversation deleted from this browser.");
}

function appendMessage(role, content, isError = false, messageIndex = null) {
    const message = document.createElement("div");
    message.className = `chat-message ${role === "user" ? "user-message" : "assistant-message"}${isError ? " is-error" : ""}`;
    const paragraph = document.createElement("p");
    paragraph.textContent = content;
    message.append(paragraph);
    if (role === "user" && Number.isInteger(messageIndex)) {
        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.className = "chat-edit-message";
        editButton.textContent = "Edit & resend";
        editButton.disabled = isSending;
        editButton.addEventListener("click", () => beginEditing(messageIndex));
        message.append(editButton);
    }
    chatMessages.append(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function appendTypingIndicator() {
    const indicator = document.createElement("div");
    indicator.className = "chat-message assistant-message typing-message";
    indicator.setAttribute("role", "status");
    indicator.setAttribute("aria-label", "CareerGuide is writing a reply");
    for (let index = 0; index < 3; index += 1) {
        const dot = document.createElement("span");
        dot.setAttribute("aria-hidden", "true");
        indicator.append(dot);
    }
    chatMessages.append(indicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return indicator;
}

function trimHistory() {
    history = history.slice(-MAX_HISTORY);
    if (history[0] && history[0].role === "assistant") {
        history.shift();
    }
}

function restoreState() {
    let warning = "";
    let pendingContext = null;
    try {
        const saved = localStorage.getItem(CONVERSATIONS_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed && Array.isArray(parsed.conversations)) {
                conversations = parsed.conversations
                    .filter((item) => item && typeof item.id === "string" && Array.isArray(item.history))
                    .map((item) => ({
                        id: item.id,
                        updatedAt: typeof item.updatedAt === "string" ? item.updatedAt : new Date(0).toISOString(),
                        history: normalizeHistory(item.history),
                        context: validContext(item.context)
                    }))
                    .filter((item) => item.history.length)
                    .sort((first, second) => second.updatedAt.localeCompare(first.updatedAt))
                    .slice(0, MAX_SAVED_CONVERSATIONS);
                activeConversationId = typeof parsed.activeConversationId === "string"
                    ? parsed.activeConversationId
                    : "";
            } else {
                warning = "Saved conversations could not be read. You can start a new conversation.";
            }
        }

        const pending = sessionStorage.getItem(PENDING_CONTEXT_KEY);
        if (pending) {
            pendingContext = validContext(JSON.parse(pending));
            sessionStorage.removeItem(PENDING_CONTEXT_KEY);
        }
    } catch {
        warning = "Some saved chat data could not be read. You can still start a new conversation.";
        try {
            sessionStorage.removeItem(PENDING_CONTEXT_KEY);
        } catch {
            warning = "This browser blocked saved chat access. You can still chat during this visit.";
        }
    }

    if (!pendingContext && !conversations.length) {
        try {
            const previous = sessionStorage.getItem(STORAGE_KEY);
            const parsed = previous ? JSON.parse(previous) : null;
            const previousHistory = normalizeHistory(parsed && parsed.history);
            if (previousHistory.length) {
                const migrated = {
                    id: createConversationId(),
                    updatedAt: new Date().toISOString(),
                    history: previousHistory,
                    context: validContext(parsed.context)
                };
                conversations.push(migrated);
                activeConversationId = migrated.id;
                persistConversations();
                sessionStorage.removeItem(STORAGE_KEY);
            }
        } catch {
            warning = "Your previous chat could not be migrated. You can still start a new conversation.";
        }
    }

    if (pendingContext) {
        activeConversationId = createConversationId();
        history = [];
        context = pendingContext;
    } else {
        const active = conversations.find((item) => item.id === activeConversationId) ||
            (activeConversationId ? null : conversations[0]);
        if (active) {
            activeConversationId = active.id;
            history = [...active.history];
            context = validContext(active.context);
        } else {
            activeConversationId = createConversationId();
        }
    }
    return warning;
}

function renderContext() {
    chatContext.hidden = !context;
    if (!context) {
        chatContext.textContent = "";
        return;
    }

    chatContext.textContent = context.career
        ? `Career shared for context: ${context.career}`
        : `Assessment sectors shared for context: ${context.sectors.join(", ")}`;
}

function renderHistory() {
    chatMessages.replaceChildren();
    if (!history.length) {
        appendMessage("assistant", WELCOME_MESSAGE);
        return;
    }
    history.forEach(({ role, content }, index) => appendMessage(role, content, false, index));
}

async function sendMessage(rawMessage) {
    const content = rawMessage.trim();
    if (!content || isSending) return;

    isSending = true;
    sendChat.disabled = true;
    clearChat.disabled = true;
    chatInput.disabled = true;
    suggestionButtons.forEach((button) => { button.disabled = true; });
    history.push({ role: "user", content });
    trimHistory();
    renderHistory();
    const typingIndicator = appendTypingIndicator();
    persistConversations();
    setStatus("Thinking…", "loading");

    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: history, context }),
            signal: AbortSignal.timeout(35000)
        });
        const data = await response.json().catch(() => null);
        if (!response.ok) {
            throw new Error(data && typeof data.error === "string"
                ? data.error
                : "The assistant could not respond right now. Please try again.");
        }
        const reply = data?.reply;
        if (typeof reply !== "string" || !reply.trim()) {
            throw new Error("The assistant returned an empty response. Please try again.");
        }

        history.push({ role: "assistant", content: reply.trim() });
        trimHistory();
        appendMessage("assistant", reply.trim());
        persistConversations();
        setChatStatus("AI-generated guidance. Check important study or licensing requirements with local official sources.");
    } catch (error) {
        const message = error.name === "TimeoutError" || error.name === "AbortError"
            ? "The request timed out. Please try again."
            : error instanceof TypeError
                ? "Could not reach the assistant service. Check your connection and try again."
                : error.message;
        appendMessage("assistant", message, true);
        setChatStatus(message, "error");
    } finally {
        typingIndicator.remove();
        isSending = false;
        sendChat.disabled = false;
        clearChat.disabled = false;
        chatInput.disabled = false;
        suggestionButtons.forEach((button) => { button.disabled = false; });
        chatMessages.querySelectorAll(".chat-edit-message").forEach((button) => {
            button.disabled = false;
        });
        renderConversationList();
        chatInput.focus();
    }
}

chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = chatInput.value.trim();
    if (!message || isSending) return;
    if (message.length > MAX_USER_MESSAGE_LENGTH) {
        setChatStatus("Your message must be 2,000 characters or fewer.", "error");
        return;
    }
    chatInput.value = "";
    if (editingIndex !== null) {
        history = history.slice(0, editingIndex);
        editingIndex = null;
        updateEditControls();
        renderHistory();
        persistConversations();
    }
    void sendMessage(message);
});

chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        chatForm.requestSubmit();
    }
});

suggestionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        void sendMessage(button.dataset.prompt || "");
    });
});

clearChat.addEventListener("click", () => {
    if (isSending) return;
    history = [];
    context = null;
    activeConversationId = createConversationId();
    editingIndex = null;
    updateEditControls();
    renderContext();
    renderHistory();
    persistConversations();
    setChatStatus("New conversation. Previous chats remain saved in this browser.");
    chatInput.focus();
});

const restoreWarning = restoreState();
updateEditControls();
renderContext();
renderHistory();
renderConversationList();
if (restoreWarning) setStatus(restoreWarning, "error");
else setChatStatus("Chats are saved in this browser on this device. Use Previous conversations to reopen them.");

cancelEdit.addEventListener("click", cancelEditing);
