# CareerGuide

CareerGuide is a local career-exploration site with a five-question assessment and a Gemini-powered chat assistant.

## Run locally

1. Revoke any Gemini key shown in a screenshot or previously shared, then create a new key in Google AI Studio.
2. Copy `.env.example` to `.env.local` in this folder and replace the placeholder with your new key. Never put the key in HTML or browser JavaScript.
3. Open PowerShell in this folder and run:

   ```powershell
   py server.py
   ```

   If `py` is not recognized, run `python server.py` instead. Python's standard library is used; no Python packages need to be installed.
4. Open `http://127.0.0.1:5000` in your browser. Use this address instead of VS Code Live Server or a `file://` page; those do not run the chat API.
5. To stop the local server, focus its PowerShell window and press `Ctrl+C`.

The local Python server serves the website and handles `POST /api/chat`. It reads `GEMINI_API_KEY` from `.env.local`, sends the chat request to Google from the server, and returns the reply to the browser. The key is not sent to the browser. User messages are limited to 2,000 characters; longer AI replies are allowed in the conversation history. If you change `.env.local`, stop and restart `py server.py`.

If the chat fails, read the specific status message shown beneath it. The local API reports common issues separately: invalid API key, unavailable model, quota limit, network error, or missing setup. The default model is `gemini-3.5-flash-lite`, Google's recommended Flash-Lite option for new projects. If it is unavailable to your key, choose a model enabled for that key in Google AI Studio and set `GEMINI_MODEL` in `.env.local` to its exact model ID. Restart the server after changing settings.

## Deploy on Render

1. Push this project to GitHub. Keep `.env` and `.env.local` out of the repository; `.env.example` contains only a placeholder.
2. In Render, create a **Web Service** connected to the repository. Set the runtime to **Python** and the start command to `python server.py`. The `requirements.txt` file documents that no third-party packages are required.
3. In the service's **Environment** settings, add `GEMINI_API_KEY` with your Gemini API key. Optionally add `GEMINI_MODEL` to override the default model. Do not commit these values to GitHub.
4. Deploy and open the HTTPS `onrender.com` URL assigned to the service. The site and `/api/chat` run on the same origin; the server accepts same-origin HTTP or HTTPS requests, including the Render URL.

The server binds to `0.0.0.0` and uses Render's `PORT` environment variable. The browser calls `/api/chat` with a relative URL, so the same frontend code works locally and on the deployed host. The API does not enable cross-origin access to other websites.

## What the assistant does

The assistant can discuss career exploration, skills, study routes, comparisons, and next steps. The **AI career guide** link opens `assistant.html`; career-detail and assessment-result actions can also open it with selected public page context. Assessment answers and the name entered in the assessment are not sent to the assistant.

Chat conversations are saved in this browser on this device, so you can reopen them from **Previous conversations** after closing and reopening the browser. The archive stores the 30 most recent conversations and up to 12 messages per conversation. Use **Edit & resend** on a question to replace it; later messages in that conversation are removed because they followed the original question. Delete chats individually with **Delete**. This local browser history is not synchronized to other devices and is removed if browser site data is cleared. Messages are sent to Google Gemini to generate replies. The assistant gives AI-generated career guidance, not human advice or a validated career assessment. Avoid sharing sensitive information, and verify important education or licensing requirements with official local sources.

Gemini model availability, terms, and request quotas can vary. Check current limits and terms in [Google AI Studio](https://aistudio.google.com/rate-limit) and the [Gemini API documentation](https://ai.google.dev/gemini-api/docs) before relying on it.
