export interface ProjectItem {
  id: string;
  title: string;
  tagline?: string;
  category: 'AI & ML' | 'Full-Stack' | 'IoT & Robotics' | 'Creative';
  shortDescription: string;
  problemStatement: string;
  proposedSolution: string;
  status: 'Concept' | 'In Exploration' | 'Under Development' | 'Prototype Ready';
  technologies: string[];
  contribution: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  isSpecialCreative?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    description?: string;
    level?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  specialization: string;
  status: string;
  institution: string;
  period: string;
  location: string;
  coursework: string[];
  isEditablePlaceholder: boolean;
}

export interface InternshipItem {
  role: string;
  company: string;
  period: string;
  location: string;
  status: string;
  overview: string;
  mentorGuidance: string;
  responsibilities: string[];
  technologies: string[];
  keyLearnings: string[];
  isEditablePlaceholder: boolean;
}

export interface LeadershipItem {
  role: string;
  context: string;
  selectionMethod: string;
  electionHighlights: string;
  coreResponsibilities: string[];
  values: string[];
  statement: string;
}

export interface CreativeItem {
  id: string;
  title: string;
  type: string;
  synopsis: string;
  elements: string[];
  roles: string[];
  status: string;
  image?: string;
}

export interface ProfileData {
  personal: {
    name: string;
    styledName: string;
    availability: string;
    professionalHeadline: string;
    heroHeadline: string;
    bioIntro: string;
    fullBio: string[];
    careerObjective: string;
    location: string;
    email: string;
    phone: string;
    githubUrl: string;
    linkedinUrl: string;
    profilePhoto: string;
    profilePhotoFallback: string;
    resumePath: string;
  };
  education: EducationItem[];
  leadership: LeadershipItem;
  internship: InternshipItem;
  skills: SkillCategory[];
  projects: ProjectItem[];
  creative: {
    heading: string;
    quote: string;
    description: string;
    theHunt: CreativeItem;
    creativePillars: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  timeline: {
    year: string;
    title: string;
    subtitle: string;
    tag: string;
    description: string;
  }[];
}

export const PROFILE_DATA: ProfileData = {
  personal: {
    name: "Maharaja",
    styledName: "MAHARAJA",
    availability: "OPEN TO LEARNING OPPORTUNITIES & ENTRY-LEVEL IT ROLES",
    professionalHeadline: "Computer Science | Software Development | AI | Creative Technology",
    heroHeadline: "BUILDING WHAT'S NEXT.",
    bioIntro: "I'm Maharaja, a final-year M.Sc. Computer Science student passionate about software development, Artificial Intelligence, Machine Learning, IoT, robotics, cybersecurity, and creative digital experiences. I enjoy turning ambitious ideas into practical solutions while continuously learning and improving.",
    fullBio: [
      "As a final-year M.Sc. Computer Science postgraduate, my journey bridges deep technical curiosity with creative storytelling. From architectural thinking in software and machine learning models to exploring embedded systems and IoT, I treat every technology as a medium to build meaningful, human-centered systems.",
      "My technical exploration spans Python, Flask, SQL, data science pipelines with Pandas & NumPy, AI classification frameworks, and hardware experimentation with Arduino & Raspberry Pi. I have built academic and exploratory prototypes ranging from healthcare digitalization architectures to offline assistant robotics concepts.",
      "Beyond programming, I served as Department President for my department. That leadership experience sharpened my ability to listen to student concerns, communicate with clarity, coordinate faculty-student dialogues, and lead with accountability.",
      "Simultaneously, my creative writing—exemplified by 'The Hunt', my original fantasy-mystery comic universe—informs my approach to UI/UX and product architecture: every interface must tell an intuitive story, every workflow must respect the user's journey, and code should be as structured as a well-crafted narrative."
    ],
    careerObjective: "To begin my professional career in the IT industry by applying my knowledge of computer science, programming, and software development to solve real-world problems. I aim to continuously enhance my technical skills, gain practical industry experience, and contribute to innovative projects in software development, Artificial Intelligence, and emerging technologies while growing as a skilled and responsible IT professional.",
    location: "Tamil Nadu, India",
    email: "maharaja.cs.dev@gmail.com", // [EDITABLE PLACEHOLDER: Update with your primary email]
    phone: "+91 • Available upon inquiry", // [EDITABLE: Optional phone number]
    githubUrl: "https://github.com/jmaharaja",
    linkedinUrl: "https://www.linkedin.com/in/maharaja-j-jmr555",
    profilePhoto: "/images/profile.jpeg",
    profilePhotoFallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    resumePath: "/resume.pdf"
  },

  education: [
    {
      degree: "Master of Science (M.Sc.)",
      specialization: "Computer Science",
      status: "Final Year Student",
      institution: "[Your College / University Name]", // [EDITABLE PLACEHOLDER: Insert your college name]
      period: "2023 - 2025 (Expected Completion)", // [EDITABLE: Update start and expected graduation year]
      location: "[City / Campus Location]", // [EDITABLE: Insert city]
      coursework: [
        "Advanced Data Structures & Algorithms",
        "Artificial Intelligence & Machine Learning",
        "Database Management Systems & SQL",
        "Software Engineering & Architecture",
        "Computer Networks & Cybersecurity Concepts",
        "Internet of Things (IoT) & Embedded Systems"
      ],
      isEditablePlaceholder: true
    },
    {
      degree: "Bachelor of Science (B.Sc.)",
      specialization: "Computer Science / Allied Studies",
      status: "Graduated",
      institution: "[Undergraduate College / University Name]", // [EDITABLE PLACEHOLDER: Insert UG college]
      period: "[Start Year] - [Graduation Year]", // [EDITABLE]
      location: "[City, State]", // [EDITABLE]
      coursework: [
        "Core Programming in Python & C/C++",
        "Object Oriented Programming (OOP)",
        "Relational Databases & SQL",
        "Web Technologies (HTML, CSS, JS)"
      ],
      isEditablePlaceholder: true
    }
  ],

  leadership: {
    role: "Department President",
    context: "Student Council Leadership",
    selectionMethod: "Elected Department President",
    electionHighlights: "Elected by fellow students to represent the department, entrusted to lead student initiatives and foster constructive faculty-student dialogue.",
    coreResponsibilities: [
      "Represented student voices, concerns, and academic initiatives before faculty and department heads.",
      "Facilitated constructive communication and transparent coordination between peers, student teams, and professors.",
      "Organized department symposiums, technical seminars, and collaborative academic activities.",
      "Fostered an inclusive, respectful, and high-energy department environment grounded in fairness and accountability."
    ],
    values: [
      "Student Trust & Accountability",
      "Empathetic Communication",
      "Constructive Faculty Dialogue",
      "Collaborative Problem Solving"
    ],
    statement: "Leadership is about responsibility and student trust. Serving as Department President taught me how to listen actively, mediate objectively, coordinate diverse groups toward shared goals under real-world deadlines, and lead with accountability."
  },

  internship: {
    role: "Software / IT Intern",
    company: "[Host Company / Organization Name]", // [EDITABLE PLACEHOLDER: Insert company name]
    period: "[Internship Duration, e.g., June - August 2024]", // [EDITABLE PLACEHOLDER]
    location: "[Location / Remote / Hybrid]", // [EDITABLE PLACEHOLDER]
    status: "Completed Practical Exposure",
    overview: "Engaged in hands-on practical exposure, translating academic programming foundations into real-world software tasks under structured professional mentorship.",
    mentorGuidance: "Worked under direct trainer guidance, receiving structured code reviews, constructive corrections, and actionable feedback that rapidly improved my debugging discipline and independent problem-solving skills.",
    responsibilities: [
      "Executed assigned technical tasks, scripts, and feature components based on project requirements.",
      "Implemented trainer feedback and iteratively refined code quality, syntax standards, and documentation.",
      "Engaged in independent research to troubleshoot errors and verify edge cases before submission.",
      "Collaborated respectfully with team members to ensure deliverables aligned with milestone expectations."
    ],
    technologies: [
      "Python",
      "Web Technologies (HTML/CSS/JS)",
      "Database & SQL Basics",
      "Version Control / Git Basics"
    ],
    keyLearnings: [
      "Handling iterative mentor reviews with adaptability and professional diligence.",
      "Transitioning from theoretical code to maintainable, readable industry practices.",
      "Conducting structured self-testing and root-cause analysis when encountering software bugs."
    ],
    isEditablePlaceholder: true
  },

  skills: [
    {
      title: "Programming & Web",
      iconName: "Code2",
      skills: [
        { name: "Python", description: "Scripting, OOP, data processing, backend logic" },
        { name: "Flask", description: "RESTful web services, lightweight web application backends" },
        { name: "JavaScript", description: "Interactive frontend dynamics, DOM APIs, event handling" },
        { name: "HTML5", description: "Semantic markup, accessibility, modern web structure" },
        { name: "CSS3", description: "Responsive layouts, Flexbox, Grid, custom animations" },
        { name: "Node.js (Explored)", description: "Backend runtime basics, server concepts" }
      ]
    },
    {
      title: "Database & Data Engineering",
      iconName: "Database",
      skills: [
        { name: "SQL", description: "Relational database querying, joins, constraints, triggers" },
        { name: "SQLite", description: "Embedded relational database architecture & lightweight storage" },
        { name: "MySQL (Explored)", description: "Relational schema design, normalization principles" },
        { name: "MongoDB (Explored)", description: "NoSQL document collections, JSON data storage concepts" },
        { name: "Pandas", description: "Dataframe manipulation, data cleaning, tabular analysis" },
        { name: "NumPy", description: "Vectorized arrays, numerical computing, linear operations" }
      ]
    },
    {
      title: "AI & Machine Learning",
      iconName: "BrainCircuit",
      skills: [
        { name: "Scikit-Learn", description: "Classification pipelines, data preprocessing, model evaluation" },
        { name: "Random Forest", description: "Ensemble learning, decision tree aggregation, feature importance" },
        { name: "AI Workflow Concepts", description: "Feature engineering, dataset splitting, training & inference" },
        { name: "Triage AI Concepts", description: "Categorization heuristics for severity and priority ranking" },
        { name: "Offline LLM / SLM Concepts", description: "Exploration of locally hosted AI models without cloud dependence" }
      ]
    },
    {
      title: "IoT, Robotics & Systems",
      iconName: "Cpu",
      skills: [
        { name: "IoT Concepts", description: "Sensor-to-microcontroller interfaces, automation architectures" },
        { name: "Arduino", description: "Microcontroller programming, GPIO control, analog/digital sensors" },
        { name: "Raspberry Pi", description: "Single-board computer setup, Linux GPIO interaction, Python interfacing" },
        { name: "Sensors & Automation", description: "Ultrasonic, temperature, IR sensors, servo and motor actuation" },
        { name: "Offline Assistant Architecture", description: "Local voice synthesis, STT, and direct hardware command execution" }
      ]
    },
    {
      title: "Creative Storytelling & Design",
      iconName: "Sparkles",
      skills: [
        { name: "Story & Narrative Writing", description: "Plot structuring, world-building lore, dramatic pacing" },
        { name: "Dialogue & Script Writing", description: "Character voice, subtext, natural conversation flow" },
        { name: "Comic Development", description: "Panel pacing, cinematic framing, visual narrative beats" },
        { name: "Visual Direction & Concepting", description: "Hero & villain aesthetics, ancient-world fantasy concept design" },
        { name: "Poster & Title-Card Design", description: "Typographic mood, atmospheric composition, visual branding" },
        { name: "UI/UX Experience Exploration", description: "User-centric layout, micro-interactions, responsive design" }
      ]
    }
  ],

  projects: [
    {
      id: "penguin-hospital",
      title: "Penguin Hospital",
      tagline: "AI-Assisted Smart Healthcare Digitalization System",
      category: "AI & ML",
      shortDescription: "An AI-assisted hospital management project concept designed to digitalize clinical operations and connect patient registration, vital-sign monitoring, AI triage, doctors, nurses, laboratory, pharmacy, and billing into a unified workflow.",
      problemStatement: "Traditional hospital operations often face data fragmentation, delayed critical patient identification at triage, and bottlenecks between nursing staff, lab technicians, and pharmacy dispensaries.",
      proposedSolution: "Penguin Hospital provides an end-to-end digital architecture where incoming patient vitals are analyzed to categorize urgency (Critical, Medium, Normal) while role-specific dashboards streamline clinical actions.",
      status: "Concept",
      technologies: ["Python", "Flask", "SQL", "HTML", "CSS", "JavaScript", "Pandas", "NumPy", "Scikit-Learn"],
      contribution: [
        "Conceptualized the comprehensive role-based workflow across Reception, Triage, Doctor, Nurse, Lab, and Pharmacy.",
        "Architected relational database schemas in SQL to connect patient encounters with vitals and diagnostic logs.",
        "Formulated the Scikit-learn Random Forest triage classification concept based on vital signs (Heart Rate, SpO2, Systolic BP).",
        "Designed accessible web interfaces for healthcare workers to minimize cognitive load during emergency intake."
      ],
      highlights: [
        "Patient registration & digital records management",
        "Vital-sign tracking & trend inspection",
        "Critical, Medium, and Normal triage stratification",
        "Interconnected Doctor, Nurse, Laboratory, and Pharmacy workflows",
        "Audit trail concept for patient admission-to-discharge journey"
      ],
      githubUrl: "https://github.com/jmaharaja",
      liveUrl: undefined,
      image: "/images/project-hospital.svg"
    },
    {
      id: "offline-ai-robot",
      title: "Offline AI Assistant Robot",
      tagline: "Voice-Enabled Local Interactive Hardware Companion",
      category: "IoT & Robotics",
      shortDescription: "An exploratory project to develop an interactive, voice-enabled robot that converses with users, answers inquiries using local AI capabilities, and connects to a computer to execute automated tasks without internet dependency.",
      problemStatement: "Most modern smart assistants rely entirely on continuous cloud connectivity and external API servers, introducing privacy vulnerabilities, latency issues, and complete dysfunction in offline or bandwidth-constrained environments.",
      proposedSolution: "An offline-first companion running on single-board computer architecture (such as Raspberry Pi) equipped with local speech recognition, an embedded compact language model, and hardware actuator control.",
      status: "In Exploration",
      technologies: ["Python", "Raspberry Pi", "Arduino", "Local AI / SLM", "Speech Recognition", "Sensors", "Hardware Actuators"],
      contribution: [
        "Researched local speech-to-text (STT) and text-to-speech (TTS) engines compatible with low-power single-board computers.",
        "Prototyped sensor-integration logic to trigger conversational listening when a user approaches the robot.",
        "Designed the hardware-to-PC bridging interface enabling the assistant to send keyboard/system macros locally.",
        "Architected an offline-first fallback pipeline to ensure core assistant commands operate without internet access.",
      ],
      highlights: [
        "Privacy-preserving local inference without cloud telemetry",
        "Embedded microphone & speaker audio pipeline",
        "Proximity and orientation sensors for interactive presence",
        "Direct computer task triggering via local script execution",
        "Low-latency response cycle engineered for localized automation"
      ],
      githubUrl: "https://github.com/jmaharaja",
      liveUrl: undefined,
      image: "/images/project-robot.svg"
    },
    {
      id: "project-hub",
      title: "Project Hub",
      tagline: "Academic Final-Year Resource & Repository Platform",
      category: "Full-Stack",
      shortDescription: "A college-focused collaborative platform concept for sharing final-year project documentation, source archives, reviews, and faculty evaluations in an organized digital ecosystem.",
      problemStatement: "Final-year college students and faculty frequently struggle with disorganized project submissions, missing documentation standards, lost project reports, and redundant project duplication across departments.",
      proposedSolution: "A structured role-based portal where Students can submit synopsis, progress reports, and code repositories, while Staff and Admins review milestones, approve topics, and maintain a searchable departmental archive.",
      status: "Concept",
      technologies: ["Node.js", "MySQL", "HTML5", "CSS3", "JavaScript", "Express Concepts"],
      contribution: [
        "Defined the multi-role privilege structure (Admin, Staff, Student) to protect submission authenticity.",
        "Drafted database schemas in MySQL for project metadata, student group rosters, and faculty review scores.",
        "Designed clean user interfaces prioritizing clear submission deadlines and automated documentation checklists."
      ],
      highlights: [
        "Role-based authentication & dashboard routing",
        "Centralized project report & synopsis archive",
        "Faculty milestone grading and feedback commentary",
        "Department-wide searchable project repository to prevent topic duplication"
      ],
      githubUrl: "https://github.com/jmaharaja",
      liveUrl: undefined,
      image: "/images/project-hub.svg"
    },
    {
      id: "vaanga-pesalam",
      title: "Vaanga Pesalam",
      tagline: "Naangalum English Pesuvom — Cinema-Inspired Spoken English Platform",
      category: "Full-Stack",
      shortDescription: "A movie-inspired conversational English-learning platform concept designed to help regional college students practice spoken English through relatable cinema scenes, funny everyday situations, and professional interview mockups.",
      problemStatement: "Many students understand grammar theoretically but hesitate to speak English due to fear of judgment, lack of conversational practice, and dry, intimidating textbooks.",
      proposedSolution: "Vaanga Pesalam gamifies spoken English using popular regional cinema memes, relatable daily dialogues (ordering food, asking directions, college debates), and interview role-play with AI-assisted pronunciation feedback.",
      status: "Concept",
      technologies: ["JavaScript", "HTML5", "CSS3", "Python / Flask (Backend Concept)", "Speech Synthesis"],
      contribution: [
        "Created the creative concept and pedagogical framework pairing memorable cinema dialogue tropes with conversational English.",
        "Curated practical real-world scenarios: campus interviews, client calls, casual cafeteria chatter, and public speaking.",
        "Designed interactive voice-prompts allowing users to record, replay, and compare phrases against natural speech models."
      ],
      highlights: [
        "Scenario-based contextual learning modules",
        "Relatable humor reducing language intimidation",
        "Step-by-step interview readiness dialogue packs",
        "Student-friendly, high-energy interactive interface"
      ],
      githubUrl: "https://github.com/jmaharaja",
      liveUrl: undefined,
      image: "/images/project-english.svg"
    },
    {
      id: "bharatserve",
      title: "BharatServe",
      tagline: "Hyperlocal Skilled Utility Service Discovery Platform",
      category: "Full-Stack",
      shortDescription: "A localized community service directory concept enabling residents to seamlessly discover, contact, and review verified service professionals including plumbers, electricians, technicians, and mechanics.",
      problemStatement: "Finding trusted, nearby utility technicians in suburban and semi-urban localities often depends on word-of-mouth, resulting in unreliable rates, untracked availability, and safety concerns.",
      proposedSolution: "A lightweight directory utilizing geo-tagged document collections in MongoDB to match homeowners with available, rated local service providers instantly.",
      status: "Concept",
      technologies: ["MongoDB", "JavaScript", "HTML5", "CSS3", "REST API Concepts"],
      contribution: [
        "Modeled flexible NoSQL document schemas in MongoDB to accommodate varied provider categories, hours, and geo-locations.",
        "Formulated the provider verification checklist and transparent rating/review calculation formula.",
        "Developed mobile-responsive search UI focusing on one-click phone dialing and instant neighborhood filtering."
      ],
      highlights: [
        "Location-based provider discovery",
        "Detailed provider portfolios with specialization tags",
        "Community rating and review credibility metrics",
        "Direct contact routing without middleman commissions"
      ],
      githubUrl: "https://github.com/jmaharaja",
      liveUrl: undefined,
      image: "/images/project-serve.svg"
    },
    {
      id: "the-hunt",
      title: "The Hunt — Original Comic Project",
      tagline: "An Original Fantasy-Mystery Graphic Universe by Maharaja",
      category: "Creative",
      shortDescription: "An expansive original fantasy-mystery comic universe created, written, and visually directed by Maharaja, blending ancient-world mythos, complex moral dilemmas, visual symbolism, and cinematic storytelling.",
      problemStatement: "Conventional digital portfolios strictly showcase dry code; 'The Hunt' proves that technical engineering and high-order creative storytelling stem from the same root: system design, pacing, and human empathy.",
      proposedSolution: "A multi-chapter graphic story complete with original character arcs, distinct hero/antagonist philosophies, panel narrations, and moody visual concept title-cards.",
      status: "Under Development",
      technologies: ["Creative Writing", "Panel Scripting", "Character Architecture", "Visual Direction", "Digital Presentation"],
      contribution: [
        "Authored the complete storyline, ancient lore, and overarching mystery plotline.",
        "Created complex character profiles with distinctive philosophies, moral conflicts, and dialogue voices.",
        "Paced panel-by-panel script breakdowns specifying shot angles, lighting keys, and dramatic visual tension.",
        "Designed promotional title cards, cinematic posters, and visual aesthetic guides."
      ],
      highlights: [
        "Rich ancient-world fantasy setting with original mythology",
        "Nuanced villain and hero dynamics challenging binary morality",
        "Cinematic title-card typography and dramatic visual atmosphere",
        "Seamless integration of creative storytelling with user experience thinking"
      ],
      githubUrl: "https://github.com/jmaharaja",
      liveUrl: undefined,
      image: "/images/comic.jpg",
      isSpecialCreative: true
    }
  ],

  creative: {
    heading: "TECHNICAL THINKING. CREATIVE VISION.",
    quote: "Code builds the machine; story breathes life into the experience. The same mind that structures databases and trains AI models weaves intricate fictional universes.",
    description: "I believe that the best software engineers are fundamentally great storytellers: they understand human motives, design intuitive paths through complex worlds, and obsess over every small detail.",
    theHunt: {
      id: "the-hunt-special",
      title: "The Hunt",
      type: "Original Fantasy-Mystery Comic Series",
      synopsis: "Set in a forgotten age where ancient kingdoms crumble under the weight of forgotten oaths, 'The Hunt' follows an enigmatic tracker pursuing a truth that threatens to shatter the moral order of the realm.",
      elements: [
        "Ancient Lore & Mythological Worldbuilding",
        "Complex Anti-Heroes & Philosophical Antagonists",
        "Cinematic Panel Pacing & Dramatic Tension",
        "Visual Contrast: Shadow, Torchlight & Ancient Stone"
      ],
      roles: [
        "Original Story & Universe Creator",
        "Scriptwriter & Dialogue Author",
        "Visual & Aesthetic Director",
        "Title-Card & Promotional Concept Designer"
      ],
      status: "In Active Creative Production",
      image: "/images/comic.jpg"
    },
    creativePillars: [
      {
        title: "World & Lore Building",
        description: "Designing self-consistent worlds with histories, rules, and distinct cultures, mirroring architectural system design in software engineering.",
        icon: "Globe"
      },
      {
        title: "Dialogue & Human Psychology",
        description: "Crafting distinct conversational voices that feel authentic, relatable, and emotionally grounded.",
        icon: "MessageSquareQuote"
      },
      {
        title: "Cinematic Visual Direction",
        description: "Applying principles of lighting, framing, composition, and emotional rhythm to both comic panels and digital UI/UX design.",
        icon: "Film"
      },
      {
        title: "Title & Poster Design",
        description: "Exploring bold typography, atmospheric color grades, and iconic emblems that immediately convey mood and intrigue.",
        icon: "Palette"
      }
    ]
  },

  timeline: [
    {
      year: "2024 - 2025",
      title: "Final-Year M.Sc. Computer Science",
      subtitle: "Advanced Computing, AI/ML & Project Synthesis",
      tag: "Academic",
      description: "Deepening focus in machine learning algorithms, database optimization, distributed systems, and developing the Penguin Hospital healthcare digitalization architecture."
    },
    {
      year: "2024",
      title: "Elected Department President",
      subtitle: "Student Council Leadership & Representation",
      tag: "Leadership",
      description: "Elected by fellow students to represent department interests, foster student-faculty dialogue, organize academic activities, and uphold student responsibility."
    },
    {
      year: "2024",
      title: "Software / IT Practical Internship",
      subtitle: "Hands-on Industry Exposure & Mentorship",
      tag: "Experience",
      description: "Completed assigned software tasks under direct trainer guidance, receiving structured code reviews, troubleshooting bugs, and adopting disciplined coding habits."
    },
    {
      year: "2023 - 2024",
      title: "The Hunt — Graphic Comic Universe",
      subtitle: "Original Worldbuilding & Scriptwriting",
      tag: "Creative",
      description: "Wrote lore, character profiles, dialogue scripts, and directed visual concept art for 'The Hunt' original fantasy-mystery series."
    },
    {
      year: "2023",
      title: "Robotics & Offline Assistant Exploration",
      subtitle: "Hardware & Local AI Interfacing",
      tag: "Innovation",
      description: "Explored Arduino, Raspberry Pi, sensors, and offline voice interaction models to understand edge automation without cloud reliance."
    },
    {
      year: "2020 - 2023",
      title: "Undergraduate Computer Science Foundation",
      subtitle: "B.Sc. Studies & Core Foundations",
      tag: "Academic",
      description: "Built strong foundations in Python, C/C++, SQL databases, data structures, algorithms, and web technologies."
    }
  ]
};
