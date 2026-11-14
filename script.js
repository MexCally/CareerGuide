"use strict";

const sectors = [
    {
        id: "technology",
        title: "Technology & IT",
        symbol: "⌘",
        description: "Build, maintain, and protect the digital tools and systems people use every day.",
        careers: [
            ["Software developer", "Design and build applications, websites, and software systems.", "Computer science, software engineering, or related study; programming and problem-solving."],
            ["Software engineer", "Design, build, test, and maintain reliable software systems for real-world use.", "Computer science, software engineering, or related study; programming, systems thinking, and testing."],
            ["Computer science", "Study the theory and practice of computing, algorithms, and systems that power software and technology.", "Computer science, mathematics, or related study; programming, algorithms, and logical reasoning."],
            ["Computer engineer", "Design and connect both the hardware and software parts of computing systems to make them work together effectively.", "Computer engineering, electrical engineering, or computer science; electronics, systems design, and embedded technologies."],
            ["Computer hardware engineer", "Design and improve the physical components that make computers and electronic systems work.", "Computer engineering, electrical engineering, or computer science; electronics, systems design, and testing."],
            ["Web developer", "Create and maintain websites and web applications.", "Web development or computer science; HTML, CSS, JavaScript, and accessibility."],
            ["Mobile app developer", "Build applications for phones, tablets, and other mobile devices.", "Software development; programming, testing, and mobile platform knowledge."],
            ["Cybersecurity analyst", "Help organisations find and reduce risks to their computer systems and information.", "Cybersecurity, IT, or computer science; networking, analysis, and security fundamentals."],
            ["Data analyst", "Turn data into findings that help teams make informed decisions.", "Data analytics, statistics, or a related field; spreadsheets, SQL, and data visualisation."],
            ["Data scientist", "Use statistics and computing to identify patterns and build data-informed solutions.", "Data science, statistics, mathematics, or computer science; analysis and programming."],
            ["Cloud engineer", "Build and support computing services delivered through cloud platforms.", "Cloud computing, IT, or computer science; networking, automation, and systems."],
            ["IT support specialist", "Help people and organisations solve hardware, software, and network problems.", "IT support or computer systems; troubleshooting, communication, and customer service."],
            ["UX/UI designer", "Design digital products that are useful, understandable, and easy to navigate.", "User experience, interaction, or visual design; research, prototyping, and communication."],
            ["AI / machine learning engineer", "Develop software that uses machine learning and other AI methods.", "Computer science, data science, or mathematics; programming, statistics, and responsible AI."]
        ]
    },
    {
        id: "healthcare",
        title: "Healthcare & Medicine",
        symbol: "＋",
        description: "Support health and wellbeing through clinical care, research, and health services.",
        careers: [
            ["Doctor", "Assess health concerns, diagnose conditions, and support treatment and prevention.", "Medical degree and supervised clinical training; science, judgement, and communication."],
            ["Nurse", "Provide patient care, monitor health, and coordinate with care teams.", "Nursing qualification and required registration; care, observation, and communication."],
            ["Pharmacist", "Support the safe and effective use of medicines.", "Pharmacy qualification and required registration; medicines knowledge and accuracy."],
            ["Dentist", "Assess and care for teeth, gums, and oral health.", "Dental degree and required registration; clinical skills and patient communication."],
            ["Physiotherapist", "Help people improve movement and recover physical function.", "Physiotherapy qualification and required registration; anatomy and rehabilitation."],
            ["Veterinary doctor", "Diagnose, treat, and prevent illness in animals while supporting their welfare and public health.", "Veterinary medicine degree and registration; animal science, clinical decision-making, and communication."],
            ["Medical laboratory scientist", "Analyse clinical samples to help diagnose and monitor health conditions.", "Medical laboratory science or related qualification; laboratory methods and accuracy."],
            ["Radiographer", "Use imaging equipment to support diagnosis and treatment.", "Radiography qualification and required registration; imaging technology and patient care."],
            ["Public health specialist", "Work with communities and organisations to improve health and prevent illness.", "Public health, epidemiology, or a related field; research and community engagement."],
            ["Occupational therapist", "Help people take part in daily activities after illness, injury, or disability.", "Occupational therapy qualification and required registration; assessment and care planning."]
        ]
    },
    {
        id: "engineering",
        title: "Engineering & Built Environment",
        symbol: "⚙",
        description: "Apply science and design to create infrastructure, products, and practical systems.",
        careers: [
            ["Civil engineer", "Plan and develop infrastructure such as roads, bridges, and water systems.", "Civil engineering; mathematics, design, and project coordination."],
            ["Mechanical engineer", "Design, test, and improve machines, products, and mechanical systems.", "Mechanical engineering; mechanics, design, and problem-solving."],
            ["Electrical engineer", "Design and maintain electrical systems, equipment, and power networks.", "Electrical engineering; circuits, mathematics, and systems."],
            ["Chemical engineer", "Develop processes that transform materials into useful products safely and efficiently.", "Chemical engineering; chemistry, process design, and safety."],
            ["Petroleum engineer", "Work on the exploration, extraction, and efficient production of oil and gas resources.", "Petroleum, chemical, or mechanical engineering; geology, fluid systems, and safety."],
            ["Aerospace engineer", "Design, develop, and test aircraft, spacecraft, and related systems.", "Aerospace or mechanical engineering; physics, design, and testing."],
            ["Biomedical engineer", "Apply engineering to medical equipment, devices, and health technologies.", "Biomedical, mechanical, or electrical engineering; biology and design."],
            ["Robotics engineer", "Design, build, and test robots and automated systems for tasks in areas such as manufacturing, healthcare, and exploration.", "Robotics, mechatronics, mechanical or electrical engineering, or computer science; programming, electronics, and control systems."],
            ["Architect", "Plan buildings and spaces around function, safety, context, and design.", "Architecture degree and required professional pathway; design, drawing, and technical knowledge."],
            ["Quantity surveyor", "Estimate and manage construction costs, contracts, and project budgets.", "Quantity surveying or construction economics; measurement and cost planning."],
            ["Urban planner", "Help shape land use, transport, housing, and public spaces.", "Urban planning, geography, or a related field; research and community consultation."]
        ]
    },
    {
        id: "business",
        title: "Business, Finance & Law",
        symbol: "▤",
        description: "Help organisations operate, manage money, serve customers, and navigate legal matters.",
        careers: [
            ["Accountant", "Prepare and review financial records to support decisions and compliance.", "Accounting, finance, or business; numeracy, accuracy, and relevant standards."],
            ["Financial analyst", "Assess financial information and communicate investment or planning insights.", "Finance, economics, accounting, or mathematics; analysis and communication."],
            ["Banking professional", "Support customers and organisations with financial products and services.", "Finance, business, or economics; customer service and financial knowledge."],
            ["Business analyst", "Understand business needs and help teams improve processes and systems.", "Business, information systems, or a related field; analysis and facilitation."],
            ["Human resources specialist", "Support recruitment, employee development, and workplace practices.", "Human resources, business, psychology, or related study; communication and organisation."],
            ["Marketing specialist", "Research audiences and plan communication that supports products or services.", "Marketing, business, or communications; research, writing, and digital tools."],
            ["Entrepreneur", "Develop and manage a business, product, or service that meets a need.", "No single required degree; business planning, resilience, and customer understanding."],
            ["Lawyer", "Advise clients and represent them in legal matters within a defined area of law.", "Law qualification and jurisdiction-specific licensing; research and advocacy."],
            ["Compliance officer", "Help an organisation understand and meet applicable rules and standards.", "Law, finance, business, or a relevant industry; attention to detail and judgement."]
        ]
    },
    {
        id: "hospitality-aviation",
        title: "Hospitality, Travel & Aviation",
        symbol: "✈",
        description: "Welcome and support guests, help people explore new places, and keep air travel operating safely.",
        careers: [
            ["Hospitality manager", "Coordinate guest services and day-to-day operations in settings such as hotels, restaurants, and resorts.", "Hospitality management, hotel operations, or business; customer service, leadership, and organisation."],
            ["Hotel manager", "Oversee hotel teams and services to create a safe, welcoming experience for guests.", "Hospitality or hotel management, business, or related experience; team leadership and problem-solving."],
            ["Event planner", "Plan and coordinate events, managing schedules, suppliers, budgets, and guest needs.", "Event management, hospitality, or business; organisation, communication, and budgeting."],
            ["Travel consultant", "Help customers plan trips by researching destinations, transport, and travel options.", "Travel and tourism, hospitality, or customer-service experience; research and communication."],
            ["Tour guide", "Lead visitors through places of interest and share accurate, engaging information about them.", "Tourism, history, or local expertise; public speaking, customer service, and relevant local permits where required."],
            ["Airline pilot", "Fly aircraft and work with the flight crew to transport passengers or cargo safely.", "Approved flight training and the licences, medical certification, and flight experience required by the aviation authority in your country."],
            ["Flight attendant", "Help keep passengers safe and comfortable before, during, and after flights.", "Airline training and any local eligibility requirements; safety awareness, teamwork, and customer service."],
            ["Air traffic controller", "Coordinate aircraft movement to help maintain safe and orderly air traffic.", "Selection and specialist training through the relevant aviation authority; concentration, communication, and decision-making."],
            ["Aircraft maintenance technician", "Inspect, maintain, and repair aircraft systems to help ensure they meet safety requirements.", "Approved aircraft maintenance training and any required licences; technical knowledge, precision, and safety practices."]
        ]
    },
    {
        id: "education-social",
        title: "Education & Social Impact",
        symbol: "◎",
        description: "Teach, guide, and support people and communities as they learn and grow.",
        careers: [
            ["Teacher", "Plan lessons and help learners develop knowledge and skills.", "Subject-area study and a recognised teaching qualification; communication and planning."],
            ["University lecturer", "Teach higher education courses and may conduct research in a specialist field.", "Relevant advanced subject qualification; teaching, research, and communication."],
            ["School counsellor", "Support learners with wellbeing, personal development, and education decisions.", "Counselling or psychology qualification and local credentials; listening and safeguarding."],
            ["Social worker", "Work with individuals and families to access support and address social needs.", "Social work qualification and required registration; assessment and advocacy."],
            ["Special education teacher", "Adapt teaching to support learners with differing needs and abilities.", "Teaching qualification with relevant special education training; inclusive practice."],
            ["Instructional designer", "Create learning materials and experiences for classrooms or online courses.", "Education, learning design, or instructional technology; writing and digital tools."],
            ["Career adviser", "Help people explore career options, learning routes, and job-search plans.", "Career development, counselling, or related study; interviewing and labour-market research."],
            ["Community development worker", "Work with communities to identify needs and organise local initiatives.", "Community development, social sciences, or relevant experience; facilitation and partnership."]
        ]
    },
    {
        id: "creative-media",
        title: "Creative, Media & Design",
        symbol: "✎",
        description: "Create visual, written, and performance-based work for audiences and communities.",
        careers: [
            ["Graphic designer", "Create visual content for brands, publications, and digital products.", "Graphic or communication design; layout, typography, and design software."],
            ["Photographer", "Create and edit images for editorial, commercial, event, or artistic work.", "Photography or relevant portfolio; composition, lighting, and client communication."],
            ["Cinematography | Editing", "Plan shots and refine footage into polished visual stories for film, digital media, and branded content.", "Media production, film studies, or portfolio experience; camera operation, editing, and storytelling."],
            ["Journalist", "Research, verify, and report information for public audiences.", "Journalism, media, or related study; interviewing, writing, and fact-checking."],
            ["Writer / editor", "Develop, revise, and prepare written content for different readers and formats.", "Writing, communications, or subject expertise; research and editing."],
            ["Animator", "Create moving images and visual stories for film, games, and digital media.", "Animation or digital arts; drawing, storytelling, and animation software."],
            ["Video editor", "Shape recorded footage, sound, and graphics into clear visual stories.", "Film, media production, or portfolio experience; editing and storytelling."],
            ["Fashion designer", "Develop clothing concepts and turn them into wearable designs or collections.", "Fashion design or portfolio; textiles, illustration, and product development."],
            ["Interior designer", "Plan interior spaces to meet practical, safety, and aesthetic needs.", "Interior design or related study; space planning, materials, and client communication."],
            ["Content strategist", "Plan useful, consistent content across digital channels and user journeys.", "Communications, marketing, or content design; writing, research, and organisation."]
        ]
    },
    {
        id: "trades",
        title: "Skilled Trades & Services",
        symbol: "⚒",
        description: "Use practical, technical, and customer-facing skills to build, maintain, and serve.",
        careers: [
            ["Electrician", "Install, inspect, and repair electrical wiring and equipment.", "Recognised trade training, apprenticeship, and local licensing; safety and diagnostics."],
            ["Plumber", "Install and maintain water, drainage, and heating systems.", "Trade qualification or apprenticeship; practical skills and safety."],
            ["Carpenter", "Build and repair structures, fittings, and products using wood and other materials.", "Trade training or apprenticeship; measurement, tools, and construction safety."],
            ["Welder", "Join metal parts using specialist tools and processes.", "Welding training and relevant certifications; precision and safety."],
            ["Automotive technician", "Inspect, diagnose, and repair vehicles and their systems.", "Automotive training or apprenticeship; diagnostics and mechanical skills."],
            ["HVAC technician", "Install and service heating, ventilation, and air conditioning systems.", "HVAC training or apprenticeship; electrical basics and safety."],
            ["Solar energy technician", "Install and maintain solar power equipment and related systems.", "Electrical or renewable energy training; installation and safety practices."],
            ["Chef", "Plan and prepare food while coordinating kitchen operations.", "Culinary training or practical experience; food safety and teamwork."]
        ]
    },
    {
        id: "science-environment",
        title: "Science, Agriculture & Environment",
        symbol: "✳",
        description: "Investigate the natural world and develop knowledge for healthier communities and environments.",
        careers: [
            ["Biologist", "Study living organisms and how they interact with their environments.", "Biology or life sciences; research, data collection, and laboratory or field methods."],
            ["Chemist", "Study substances and reactions in laboratories, industry, or research.", "Chemistry or a related degree; laboratory practice and analysis."],
            ["Environmental scientist", "Assess environmental conditions and support conservation or remediation work.", "Environmental science, ecology, or related study; fieldwork and analysis."],
            ["Geologist", "Study Earth's materials and processes for research and practical applications.", "Geology or earth sciences; field observation and data interpretation."],
            ["Veterinarian", "Assess and treat animal health and support animal welfare.", "Veterinary degree and required registration; clinical science and care."],
            ["Agricultural scientist", "Research crops, soils, livestock, and systems that support food production.", "Agriculture, agronomy, or related science; research and fieldwork."],
            ["Climate scientist", "Analyse climate data and processes to improve understanding of climate change.", "Climate science, atmospheric science, physics, or related study; modelling and statistics."],
            ["Conservation officer", "Support the protection and management of wildlife and natural habitats.", "Conservation, ecology, or environmental study; fieldwork and community engagement."]
        ]
    },
    {
        id: "public-service",
        title: "Public Service & Community",
        symbol: "⌂",
        description: "Serve the public through safety, government, diplomacy, and community programmes.",
        careers: [
            ["Police officer", "Help protect the public, respond to incidents, and uphold the law.", "Recruitment training and local eligibility requirements; judgement and communication."],
            ["Firefighter", "Respond to fires and emergencies and help reduce community risk.", "Fire service training and local requirements; fitness, teamwork, and safety."],
            ["Emergency medical technician", "Provide urgent pre-hospital care and transport when needed.", "Recognised emergency medical training and local registration; calm decision-making."],
            ["Diplomat", "Represent a government and support international relationships and negotiations.", "Often international relations, law, economics, or languages; analysis and communication."],
            ["Public policy analyst", "Research policy questions and evaluate options for public decision-makers.", "Public policy, economics, political science, or related study; research and writing."],
            ["Programme coordinator", "Organise services or projects for a public, nonprofit, or community organisation.", "Relevant programme or sector experience; planning and partnership skills."],
            ["Emergency management specialist", "Help communities prepare for, respond to, and recover from emergencies.", "Emergency management, public safety, or related study; coordination and planning."]
        ]
    }
];

const questions = [
    {
        prompt: "Which kind of activity would you most enjoy?",
        options: [
            { text: "Building or improving digital tools and systems", sectors: ["technology", "engineering"] },
            { text: "Supporting people's health and wellbeing", sectors: ["healthcare", "education-social"] },
            { text: "Solving business, money, service, or organisational challenges", sectors: ["business", "public-service", "hospitality-aviation"] },
            { text: "Making, designing, or communicating creative ideas", sectors: ["creative-media", "trades", "education-social"] }
        ]
    },
    {
        prompt: "Which subjects or topics would you choose to learn more about?",
        options: [
            { text: "Computing, mathematics, or engineering", sectors: ["technology", "engineering", "science-environment"] },
            { text: "Biology, health, or the natural world", sectors: ["healthcare", "science-environment"] },
            { text: "Business, economics, society, law, or travel", sectors: ["business", "education-social", "public-service", "hospitality-aviation"] },
            { text: "Art, media, design, or practical making", sectors: ["creative-media", "trades", "engineering"] }
        ]
    },
    {
        prompt: "What kind of challenge sounds most satisfying?",
        options: [
            { text: "Finding why a technical system is not working", sectors: ["technology", "engineering"] },
            { text: "Helping someone through a health or personal challenge", sectors: ["healthcare", "education-social", "public-service"] },
            { text: "Finding a better way for a business or service to work", sectors: ["business", "public-service", "technology", "hospitality-aviation"] },
            { text: "Turning an idea into something people can see, use, or experience", sectors: ["creative-media", "trades", "engineering"] }
        ]
    },
    {
        prompt: "Which work setting sounds most appealing?",
        options: [
            { text: "A technology team, office, or computer lab", sectors: ["technology", "business"] },
            { text: "A clinic, hospital, or science laboratory", sectors: ["healthcare", "science-environment"] },
            { text: "A school, community organisation, public service, hotel, or airport", sectors: ["education-social", "public-service", "hospitality-aviation"] },
            { text: "A studio, workshop, construction site, or outdoors", sectors: ["creative-media", "trades", "engineering", "science-environment"] }
        ]
    },
    {
        prompt: "What would you like your work to help you do?",
        options: [
            { text: "Create useful technology or solve complex systems problems", sectors: ["technology", "engineering", "science-environment"] },
            { text: "Improve people's health, learning, or everyday lives", sectors: ["healthcare", "education-social", "public-service"] },
            { text: "Build a sustainable organisation or help people make informed decisions", sectors: ["business", "public-service", "hospitality-aviation"] },
            { text: "Express ideas, create useful things, or bring a vision to life", sectors: ["creative-media", "trades", "engineering"] }
        ]
    }
];

const sectorGrid = document.getElementById("sectorGrid");
const careerSearch = document.getElementById("careerSearch");
const clearSearch = document.getElementById("clearSearch");
const directoryCount = document.getElementById("directoryCount");
const searchStatus = document.getElementById("searchStatus");
const assessmentStart = document.getElementById("assessmentStart");
const questionPanel = document.getElementById("questionPanel");
const questionForm = document.getElementById("questionForm");
const assessmentResults = document.getElementById("assessmentResults");
const answerOptions = document.getElementById("answerOptions");
const questionPrompt = document.getElementById("questionPrompt");
const answerError = document.getElementById("answerError");
const backQuestion = document.getElementById("backQuestion");
const nextQuestion = document.getElementById("nextQuestion");
const progressLabel = document.getElementById("progressLabel");
const progressPercent = document.getElementById("progressPercent");
const progressTrack = document.getElementById("progressTrack");
const progressFill = document.getElementById("progressFill");
const resultTitle = document.getElementById("resultTitle");
const resultSummary = document.getElementById("resultSummary");
const resultList = document.getElementById("resultList");

const totalCareers = sectors.reduce((total, sector) => total + sector.careers.length, 0);
let activeQuestion = 0;
let activeAnswers = [];
let activeName = "";
let activeLevel = "";

function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
}

function careerMatches(career, sector, query) {
    if (!query) return true;
    const searchableText = [
        career[0], career[1], career[2], sector.title
    ].join(" ").toLocaleLowerCase();
    return searchableText.includes(query);
}

function renderCareerDetail(career, container) {
    const detail = createElement("div", "career-detail");
    detail.setAttribute("aria-live", "polite");

    detail.append(
        createElement("h4", "", career[0]),
        createElement("p", "", career[1])
    );

    const study = createElement("p");
    const studyLabel = createElement("strong", "", "Common study routes & skills: ");
    study.append(studyLabel, document.createTextNode(career[2]));
    const askButton = createElement("button", "context-action", "Ask AI about this career");
    askButton.type = "button";
    askButton.addEventListener("click", () => {
        openAssistantWithContext({
            career: career[0],
            overview: career[1],
            study: career[2],
            sectors: [container.closest(".sector-card").querySelector("h3").textContent]
        });
    });
    detail.append(study, askButton);
    container.replaceChildren(detail);
}

function clearCareerSelection() {
    sectorGrid.querySelectorAll(".career-chip[aria-pressed='true']").forEach((activeButton) => {
        activeButton.setAttribute("aria-pressed", "false");
    });
    sectorGrid.querySelectorAll(".sector-card.is-focused").forEach((activeCard) => {
        activeCard.classList.remove("is-focused");
    });
    sectorGrid.querySelectorAll(".career-detail-container").forEach((detailContainer) => {
        detailContainer.replaceChildren();
    });
    history.replaceState(null, "", window.location.pathname + window.location.search);
}

function selectCareer(career, card, button) {
    const isAlreadySelected = button.getAttribute("aria-pressed") === "true";

    if (isAlreadySelected) {
        clearCareerSelection();
        return;
    }

    clearCareerSelection();
    button.setAttribute("aria-pressed", "true");
    card.classList.add("is-focused");
    renderCareerDetail(career, card.querySelector(".career-detail-container"));
    history.replaceState(null, "", `#${card.id}`);
    card.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
}

function renderSectors() {
    const query = careerSearch.value.trim().toLocaleLowerCase();
    const matchingSectors = sectors.map((sector) => ({
        sector,
        careers: sector.careers.filter((career) => careerMatches(career, sector, query))
    })).filter((group) => group.careers.length > 0);

    sectorGrid.replaceChildren();
    clearSearch.hidden = query.length === 0;

    const shownCount = matchingSectors.reduce((total, group) => total + group.careers.length, 0);
    directoryCount.textContent = query
        ? `${shownCount} ${shownCount === 1 ? "career" : "careers"} in ${matchingSectors.length} ${matchingSectors.length === 1 ? "sector" : "sectors"}`
        : `${totalCareers} careers across ${sectors.length} sectors`;

    if (query) {
        searchStatus.textContent = shownCount
            ? `Showing matches for “${careerSearch.value.trim()}”. Select a career to jump to its sector.`
            : `No careers found for “${careerSearch.value.trim()}”. Try a different search.`;
    } else {
        searchStatus.textContent = "Select any career to see its overview and common study routes.";
    }

    if (matchingSectors.length === 0) {
        sectorGrid.append(createElement("p", "empty-state", "No matches yet. Try a career name, sector, skill, or study area."));
        return;
    }

    matchingSectors.forEach(({ sector, careers: visibleCareers }) => {
        const card = createElement("article", "sector-card");
        card.id = `sector-${sector.id}`;
        card.dataset.sectorId = sector.id;

        const header = createElement("div", "sector-card-header");
        const symbol = createElement("span", "sector-symbol", sector.symbol);
        symbol.setAttribute("aria-hidden", "true");
        const heading = createElement("div");
        heading.append(
            createElement("h3", "", sector.title),
            createElement("p", "", `${visibleCareers.length} ${visibleCareers.length === 1 ? "career" : "careers"}`)
        );
        header.append(symbol, heading);

        const description = createElement("p", "sector-description", sector.description);
        const careerList = createElement("div", "career-list");
        careerList.setAttribute("aria-label", `Careers in ${sector.title}`);
        const detailContainer = createElement("div", "career-detail-container");

        visibleCareers.forEach((career) => {
            const button = createElement("button", "career-chip", career[0]);
            button.type = "button";
            button.setAttribute("aria-pressed", "false");
            button.addEventListener("click", () => selectCareer(career, card, button));
            careerList.append(button);
        });

        card.append(header, description, careerList, detailContainer);
        sectorGrid.append(card);
    });
}

function updateQuestion() {
    const question = questions[activeQuestion];
    questionPrompt.textContent = question.prompt;
    answerOptions.replaceChildren();
    answerError.hidden = true;

    question.options.forEach((option, index) => {
        const label = createElement("label", "answer-option");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "assessmentAnswer";
        input.value = String(index);
        input.checked = activeAnswers[activeQuestion] === index;
        input.addEventListener("change", () => {
            activeAnswers[activeQuestion] = index;
            answerError.hidden = true;
        });
        label.append(input, createElement("span", "", option.text));
        answerOptions.append(label);
    });

    const current = activeQuestion + 1;
    const percent = Math.round((current / questions.length) * 100);
    progressLabel.textContent = `Question ${current} of ${questions.length}`;
    progressPercent.textContent = `${percent}%`;
    progressTrack.setAttribute("aria-valuenow", String(current));
    progressFill.style.width = `${percent}%`;
    backQuestion.hidden = activeQuestion === 0;
    nextQuestion.replaceChildren(document.createTextNode(activeQuestion === questions.length - 1 ? "See my ideas " : "Next "));
    const nextArrow = createElement("span", "", "→");
    nextArrow.setAttribute("aria-hidden", "true");
    nextQuestion.append(nextArrow);
    questionPrompt.focus();
}

function startAssessment(event) {
    event.preventDefault();
    activeName = document.getElementById("studentName").value.trim();
    activeLevel = document.getElementById("studentLevel").selectedOptions[0].textContent;
    activeQuestion = 0;
    activeAnswers = Array(questions.length).fill(null);
    assessmentStart.hidden = true;
    assessmentResults.hidden = true;
    questionPanel.hidden = false;
    updateQuestion();
    questionPanel.scrollIntoView({ behavior: "smooth", block: "center" });
}

function showResults() {
    const scores = new Map(sectors.map((sector) => [sector.id, 0]));

    activeAnswers.forEach((answerIndex, questionIndex) => {
        const option = questions[questionIndex].options[answerIndex];
        option.sectors.forEach((sectorId) => scores.set(sectorId, scores.get(sectorId) + 1));
    });

    const ranked = sectors
        .map((sector, index) => ({ sector, score: scores.get(sector.id), index }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score || a.index - b.index)
        .slice(0, 3);

    questionPanel.hidden = true;
    assessmentResults.hidden = false;
    resultTitle.textContent = `${activeName ? `${activeName}, here` : "Here"} are a few places to start`;
    resultSummary.textContent = `These sectors most often matched your interests. Your current stage is ${activeLevel}; check local qualification and training routes as you explore.`;
    resultList.replaceChildren();

    ranked.forEach(({ sector, score }, index) => {
        const item = createElement("article", "result-item");
        const rank = createElement("span", "result-rank", String(index + 1));
        rank.setAttribute("aria-hidden", "true");
        const info = createElement("div");
        info.append(
            createElement("h4", "", sector.title),
            createElement("p", "", sector.description)
        );
        const scoreLabel = createElement("span", "result-score", `${score} of ${questions.length} answers`);
        item.append(rank, info, scoreLabel);

        const link = document.createElement("a");
        link.className = "button button-outline";
        link.href = `#sector-${sector.id}`;
        link.textContent = "Explore sector";
        link.addEventListener("click", () => {
            const group = sectorGrid.querySelector(`[data-sector-id="${sector.id}"]`);
            if (!group) return;
            group.classList.add("is-focused");
            window.setTimeout(() => group.classList.remove("is-focused"), 1800);
        });
        info.append(link);
        const askButton = createElement("button", "context-action", "Discuss with AI");
        askButton.type = "button";
        askButton.addEventListener("click", () => {
            openAssistantWithContext({
                career: "",
                overview: "",
                study: "",
                sectors: ranked.map((result) => result.sector.title)
            });
        });
        info.append(askButton);
        resultList.append(item);
    });

    progressTrack.setAttribute("aria-valuenow", String(questions.length));
    assessmentResults.scrollIntoView({ behavior: "smooth", block: "center" });
}

careerSearch.addEventListener("input", renderSectors);
clearSearch.addEventListener("click", () => {
    careerSearch.value = "";
    renderSectors();
    careerSearch.focus();
});

assessmentStart.addEventListener("submit", startAssessment);
questionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = questionForm.querySelector("input[name='assessmentAnswer']:checked");
    if (!selected) {
        answerError.hidden = false;
        answerOptions.querySelector("input")?.focus();
        return;
    }

    activeAnswers[activeQuestion] = Number(selected.value);
    if (activeQuestion === questions.length - 1) {
        showResults();
        return;
    }

    activeQuestion += 1;
    updateQuestion();
    questionPrompt.focus?.();
});

backQuestion.addEventListener("click", () => {
    if (activeQuestion === 0) return;
    activeQuestion -= 1;
    updateQuestion();
});

document.getElementById("restartAssessment").addEventListener("click", () => {
    assessmentResults.hidden = true;
    questionPanel.hidden = true;
    assessmentStart.hidden = false;
    assessmentStart.reset();
    activeAnswers = [];
    activeName = "";
    activeLevel = "";
    document.getElementById("studentName").focus();
});

function openAssistantWithContext(context) {
    try {
        sessionStorage.setItem("careerguide.pendingContext", JSON.stringify(context));
    } catch {
        window.alert("The assistant will open without career context because this browser could not store it for the next page.");
    }
    window.location.assign("assistant.html");
}

renderSectors();
