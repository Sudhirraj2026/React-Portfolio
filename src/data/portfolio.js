export const personalInfo = {
  name: "Sudhir Kumar",
  role: "Full Stack Developer & B.Tech CSE Student",
  status: "Available for Internships & Opportunities",
  location: "Bihar, India",
  email: "sudhirraj983525@gmail.com",
  github: "https://github.com/Sudhirraj2026",
  linkedin: "https://www.linkedin.com/in/sudhir-kumar-962060371/",
  resumeUrl: "/Sudhir_Kumar_resume.pdf",
  bio: "Passionate Full Stack Developer and 3rd-year Computer Science undergraduate with hands-on experience in modern web applications, distributed socket networking, and Java systems software. Driven by problem-solving, clean architecture, and continuous learning.",
  stats: [
    { label: "B.Tech CSE Year", value: "3rd Year", sub: "Graduating 2026" },
    { label: "Projects Completed", value: "7+", sub: "Web, Systems & AI" },
    { label: "Technologies Mastered", value: "12+", sub: "Full Stack & Core CS" },
    { label: "Commitment to Growth", value: "100%", sub: "Continuous Learner" },
  ],
};

export const skillsData = [
  {
    category: "Languages & Core CS",
    description: "Foundational programming languages and computer science paradigms",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "Java", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Kotlin", level: "Intermediate" },
      { name: "HTML5 & CSS3", level: "Advanced" },
      { name: "OOP & Design", level: "Proficient" },
      { name: "Data Structures", level: "Proficient" },
    ],
  },
  {
    category: "Frontend Development",
    description: "Building responsive, accessible, and high-performance user interfaces",
    skills: [
      { name: "React 19", level: "Advanced" },
      { name: "Tailwind CSS v4", level: "Advanced" },
      { name: "Vite", level: "Proficient" },
      { name: "Responsive UI/UX", level: "Advanced" },
      { name: "Component Architecture", level: "Advanced" },
      { name: "Modern Web APIs", level: "Proficient" },
    ],
  },
  {
    category: "Backend & Systems",
    description: "Server architecture, socket networking, APIs, and file I/O pipelines",
    skills: [
      { name: "Node.js", level: "Proficient" },
      { name: "Express.js", level: "Proficient" },
      { name: "Socket.IO", level: "Proficient" },
      { name: "RESTful APIs", level: "Proficient" },
      { name: "Multer / File Uploads", level: "Proficient" },
      { name: "Java File I/O & Collections", level: "Advanced" },
    ],
  },
  {
    category: "Tools & Ecosystem",
    description: "Modern developer tooling, version control, and desktop frameworks",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "Electron", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" },
      { name: "Postman", level: "Proficient" },
      { name: "Terminal / Bash", level: "Proficient" },
    ],
  },
];

export const projectsData = [
  {
    id: "quickdrop",
    title: "QuickDrop",
    subtitle: "Cross-Platform Mac <=> Android File Sharing Engine",
    category: "Full Stack",
    featured: true,
    description:
      "A high-speed cross-platform data sharing desktop & mobile application enabling seamless file transfer (music, high-res videos, large documents) between macOS and Android without internet dependency.",
    highlights: [
      "Real-time peer communication powered by Socket.IO and Node/Express backend",
      "High-throughput chunked file streaming with Multer and custom CORS protocol",
      "Electron desktop shell coupled with responsive React frontend and Kotlin mobile integration",
    ],
    tech: ["React", "Electron", "Node.js", "Express", "Socket.IO", "Kotlin", "Multer", "Vite"],
    github: "https://github.com/Sudhirraj2026/QuickDrop.git",
    liveDemo: null,
    icon: "transfer",
  },
  {
    id: "rohit-aluminium",
    title: "Rohit Aluminium Website",
    subtitle: "Commercial Architectural Fabrication Showcase",
    category: "Full Stack",
    featured: true,
    description:
      "A fast, modern commercial website for an architectural aluminium and UPVC glass solutions enterprise. Showcases product lines, specifications, visual galleries, and customer inquiry funnels.",
    highlights: [
      "Mobile-first responsive design optimized for speed and high conversion rates",
      "Structured product catalogs, architectural glass sections, and contact form",
      "Lightweight styling with modern CSS and vanilla interactive components",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
    github: "https://github.com/Sudhirraj2026/rohit-aluminium",
    liveDemo: null,
    icon: "building",
  },
  {
    id: "stock-trading-platform",
    title: "CodeAlpha Stock Trading Simulator",
    subtitle: "Algorithmic Java Trading & Portfolio Platform",
    category: "Java & Systems",
    featured: false,
    description:
      "A high-fidelity Java console financial simulation platform that models real-world stock market mechanics. Enables users to monitor real-time stock price fluctuations, execute buy/sell market orders, track trade histories, and compute net portfolio profit/loss.",
    highlights: [
      "Modular Object-Oriented Architecture (OOP) with robust encapsulation",
      "Fast in-memory index queries using Java Collections (HashMap, ArrayList)",
      "Dynamic capital rebalancing, transaction logging, and risk analytics",
    ],
    tech: ["Java", "OOP", "Java Collections", "HashMap", "ArrayList", "Algorithms"],
    github: "https://github.com/Sudhirraj2026/CodeAlpha_StockTradingPlatform.git",
    liveDemo: null,
    icon: "chart",
  },
  {
    id: "student-grade-tracker",
    title: "CodeAlpha Student Grade Tracker",
    subtitle: "Persistent Academic Analytics & Grade Engine",
    category: "Java & Systems",
    featured: false,
    description:
      "A complete academic performance management system that processes student records with statistical evaluations: automated class averages, highest/lowest quartile scores, passing criteria detection, and persistent file-based disk storage.",
    highlights: [
      "Disk persistence handling ensuring records remain available across sessions",
      "Robust input sanitization, custom exception boundaries, and scanner validation",
      "Automated letter grade calculation and cohort statistical breakdown",
    ],
    tech: ["Java", "File I/O", "Collections", "Exception Handling", "OOP"],
    github: "https://github.com/Sudhirraj2026/CodeAlpha_StudentGradeTracker.git",
    liveDemo: null,
    icon: "academic",
  },
  {
    id: "60-days-ai",
    title: "60 Days Applied AI Journey",
    subtitle: "Machine Learning & Neural Foundations Lab",
    category: "AI & Python",
    featured: false,
    description:
      "A comprehensive 60-day development repository documenting hands-on exploration of artificial intelligence, machine learning algorithms, prompt engineering, and real-world Python problem sets.",
    highlights: [
      "Consistent 60-day engineering sprint solving machine learning paradigms",
      "Clean Python implementations of foundational algorithms and NLP utilities",
      "Extensive documentation, code examples, and mathematical foundations",
    ],
    tech: ["Python", "Machine Learning", "AI Foundations", "Data Processing"],
    github: "https://github.com/Sudhirraj2026/60-days-eaysclude-ai",
    liveDemo: null,
    icon: "brain",
  },
  {
    id: "faq-chatbot",
    title: "CodeAlpha FAQ Automation Chatbot",
    subtitle: "Natural Query Assistant & Support Bot",
    category: "AI & Python",
    featured: false,
    description:
      "A conversational Python chatbot engineered during the CodeAlpha software internship. Employs pattern matching and text normalization algorithms to resolve customer inquiries quickly and accurately.",
    highlights: [
      "Flexible keyword matching and phrase tokenization algorithms",
      "Graceful fallback handling for out-of-domain conversational queries",
      "Lightweight, dependency-free architecture for rapid terminal execution",
    ],
    tech: ["Python", "Chatbot Architecture", "Text Processing", "CLI"],
    github: "https://github.com/Sudhirraj2026/CodeAlpha_FAQ_Chatbot",
    liveDemo: null,
    icon: "chat",
  },
  {
    id: "translation-tool",
    title: "CodeAlpha Linguistic Translation Engine",
    subtitle: "Multi-Language Processing & Translation Utility",
    category: "AI & Python",
    featured: false,
    description:
      "A modular Python utility built during the CodeAlpha internship supporting automated language translation, text script identification, and structured translation pipeline outputs.",
    highlights: [
      "Multi-target language support with automated script detection",
      "Clean command-line interface with informative status feedback",
      "Resilient error-handling for edge-case network and encoding queries",
    ],
    tech: ["Python", "Language Processing", "APIs", "CLI Tooling"],
    github: "https://github.com/Sudhirraj2026/CodeAlpha_TranslationTool",
    liveDemo: null,
    icon: "globe",
  },
];

export const experienceData = [
  {
    id: "education-btech",
    type: "education",
    role: "B.Tech in Computer Science & Engineering",
    organization: "Bachelor of Technology",
    location: "Bihar, India",
    period: "2022 - 2026 (Expected)",
    description:
      "Pursuing 3rd Year in CSE with strong emphasis on core computing fundamentals, algorithmic problem solving, software engineering principles, and distributed applications.",
    badges: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
  {
    id: "internship-codealpha",
    type: "experience",
    role: "Software Development Intern",
    organization: "CodeAlpha",
    location: "Remote Internship",
    period: "2024",
    description:
      "Completed software engineering internship delivering four full-scope software projects across Java systems programming, Python automation, and intelligent conversational tools. Practiced modern version control, code modularity, and engineering best practices.",
    badges: ["Java Systems", "Python NLP", "Algorithms", "Git & GitHub", "Software Architecture"],
  },
];
