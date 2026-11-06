export type Entry = {
    id?: string;
    title: string;
    meta: string;
    summary: string;
    linkedinDescription?: string;
    projectDescription?: string;
    href?: string;
    linkLabel?: string;
};
export const site = {
    name: "Aiden Lim",
    url: "https://aidenlim.vercel.app",
    linkedin: "https://www.linkedin.com/in/aidenlim26w/",
    title: "Aiden Lim | SISHK AI Club & Board of AI Integration",
    description: "Aiden Lim is the Founder and President of the SISHK AI Club and Chair of the Board of AI Integration.",
};
export const profile = {
    location: "Hong Kong",
    club: "SISHK AI Club", clubRole: "Founder and President",
    board: "Board of AI Integration", boardRole: "Chair",
    headline: "Founder & President @ SISHK AI Club | Chair, Board of AI Integration | Co-Founder @ Timelit",
    introduction: "I build software for school communities, lead student teams, and learn by making things.",
    about: "I’m an IBDP student at Singapore International School (Hong Kong). My work connects software development with community leadership, from starting the AI Club to helping students and staff shape the tools our school uses. I’m building my foundations in backend engineering, with the aim of becoming a technical founder.",
    // Verbatim descriptions from the signed-in LinkedIn profile, reviewed 6 November 2026.
    linkedinDescription: `Aiden Lim is an IBDP student and developer at Singapore International School (Hong Kong), founder and president of the SISHK AI Club, and chair of the SISHK Board of AI Integration. He builds software for school communities and leads the student teams that build it.

As Founder and President of the SISHK AI Club, he has grown it since February 2026 into the school’s largest student organisation: 80+ members and a 17-person executive committee across the Technical, Logistics, Media, Projects and Finance departments. His presentation to the Board of Governors led to the club being written into the school’s AI implementation roadmap and given a dedicated budget, and the club is coordinating initiatives with various external organisations such as HKU AIMED.

He is leading the build of the SISHK Software Ecosystem, a suite of in-house apps for the school’s day-to-day operations. He set up the school's official Board of AI Integration, where house, council and committee leaders decide what gets built, and the Projects Department, which designs, ships and maintains each app. The first, SISHK Scheduling, which he built as lead developer, handles teacher consultations, room booking and substitute cover, and runs on the school’s official domain.

Before this, he founded Timelit (2025–2026), an AI-powered scheduling app, where he led development and strategy and raised HKD 32,000 in seed funding. As a management trainee intern at E-Services Group in Shenzhen, he built and deployed an internal AI chatbot that cut staff search time by over 70%. He also built a Python trading simulator in which 15 bots, each running its own quantitative strategy, trade through a shared matching engine.

He is now training as a backend engineer (data structures and algorithms, databases, Django) with the aim of becoming a technical founder, and is one of 16 students in RevisionDojo’s first Brand Ambassador cohort.`,
};
export const schedulingDescription = `- Developed a full-stack scheduling platform for Singapore International School (Hong Kong), combining student consultations, staff meetings, room bookings and teacher cover management.
- Built scheduling logic that coordinates timetables, personal calendars, holidays and room restrictions, with database safeguards against simultaneous double bookings.
- Created cover recommendations ranked by department and workload, with teaching-limit warnings and approval workflows.
- Integrated Google Calendar invitations and responses, automated reminders, delivery retries and email fallbacks.
- Designed an interactive, mobile-friendly calendar with adjustable bookings and automatically refreshing availability.
- Implemented role-based access, privacy controls, consultation analytics, automated backups and deployment rollback.
- Supported the application with nearly **1,000 automated test functions**.
- **Stack:** Python, FastAPI, PostgreSQL, JavaScript, HTMX, Google APIs and Docker.`;

export const experience: {
    organisation: string;
    id?: string;
    entries: Entry[];
}[] = [
    { organisation: "SISHK AI Club", id: "ai-club", entries: [
            { title: "Founder & President", meta: "Feb 2026 – Present · Full-time · Hong Kong · On-site", summary: "I grew a student AI community to 80+ members, secured school support, and lead its educational programmes and project teams.", linkedinDescription: `Spearheading global AI educational programs, scaling membership to 80+ members and securing dedicated institutional funding.

Partnered directly with school leadership to advance campus-wide AI literacy, hosting internal workshops and cross-school initiatives.

Directly oversee the Technical, Logistics, Media and Administration departments and the Project Division.

Board of Governors: Presented the club's plan to the school's Board of Governors; the Chairman endorsed it.` },
            { id: "scheduling", projectDescription: schedulingDescription, title: "Product Lead, SISHK Scheduling", meta: "Sep 2026 – Present · Full-time · Hong Kong SAR · On-site", summary: "I lead a school booking system for consultations, shared free periods, rooms, and substitute cover." },
            { title: "Project Department", meta: "Oct 2026 – Present · Full-time · Hong Kong SAR · On-site", summary: "I set up a team of 25 student engineers to build tools around the school’s needs." },
        ] },
    { organisation: "Singapore International School (Hong Kong)", id: "board", entries: [
            { title: "Chair, Board of AI Integration", meta: "Oct 2026 – Present · Hong Kong SAR · On-site", summary: "I bring student leaders and staff together to shape school software and turn their feedback into improvements.", linkedinDescription: `I helped establish and now chair the Board of AI Integration at Singapore International School (Hong Kong). The Board brings together student leaders from houses, councils and committees, as well as staff, to shape how software developed by the SISHK AI Club is being implemented across the school.

I lead discussions on how the tools fit into everyday school life and bring student and staff feedback directly to the AI Club Project Department, so the team can make changes as projects roll out.` },
        ] },
    { organisation: "General Learning (YC F24)", entries: [
            { title: "RevisionDojo Brand Ambassador", meta: "Oct 2026 – Present · Part-time · Hong Kong SAR · On-site", summary: "Selected from hundreds of applicants as one of 16 students in RevisionDojo’s first-ever Brand Ambassador cohort. RevisionDojo is an IB revision platform built by General Learning (YC F24)." },
        ] },
    { organisation: "E-Services Group (ESG)", entries: [
            { title: "Management Intern", meta: "Jul 2025 – Aug 2025 · Internship · Shenzhen, Guangdong, China · On-site", summary: "I designed and deployed an internal WeCom AI chatbot under engineering supervision to help staff retrieve company information.", linkedinDescription: `Custom AI Chatbot Deployment: Independently designed and deployed an enterprise-grade AI chatbot onto enterprise WeCom, trained on internal data—including financial records, promotional materials, and company documentation—under engineering supervision.

Security & Performance Optimisation: Consistently delivering high-accuracy responses with average query response times under 3 seconds.

Workflow Acceleration: Enhanced cross-departmental operations by accelerating new hire onboarding and streamlining daily internal data retrieval workflows.` },
        ] },
    { organisation: "Timelit", id: "timelit", entries: [
            { title: "Co-Founder & Chief Strategy Officer", meta: "Jun 2025 – Aug 2026 · Full-time · Hong Kong · On-site", summary: "I led strategy and development for an AI scheduling app and raised HKD 32,000 in seed funding.", linkedinDescription: `Built an AI-powered scheduling and productivity application integrating machine learning models and AI agents to optimise focus blocks and daily user workflows.

Raised HKD 32,000 in early seed funding and recruited a high-profile advisory board to guide strategic growth and product development.

Developed and executed early user testing programs, driving continuous feature iteration and algorithmic refinement toward public launch.

Engineered core AI capabilities to analyse individual work habits, eliminate friction and procrastination, and generate adaptive smart schedules.`, href: "https://timelit.base44.app/", linkLabel: "Visit Timelit" },
        ] },
    { organisation: "Independent Study", entries: [
            { title: "Software Engineering (Backend)", meta: "Nov 2026 – Present · Part-time · Hong Kong SAR", summary: "Following Code with Mosh’s backend developer roadmap: Python (OOP), then data structures & algorithms, databases (MySQL, MongoDB) and Django." },
            { title: "Machine Learning", meta: "Jun 2025 – Oct 2026", summary: "I studied the mathematics behind machine learning and completed DeepLearning.AI’s mathematics specialisation.", linkedinDescription: "Self-study, ~3–5 hours/week, on the mathematical foundations of machine learning. Completed the DeepLearning.AI Mathematics for ML & Data Science specialisation (linear algebra, calculus, probability & statistics). Started the Stanford Online ML Specialisation before moving to software engineering.\n\nSkills: Linear Algebra, Calculus, Probability & Statistics, NumPy, Pandas, Matplotlib, Data preprocessing" },
        ] },
    { organisation: "Singapore Selects", entries: [
            { title: "Forward", meta: "Jul 2023 – Present · Seasonal · Singapore · Hybrid", summary: "Represent the Singapore Ice Hockey Association. Part of the Unified National Training Program (UNTP).", linkedinDescription: "Represent the Singapore Ice Hockey Association. Part of the Unified National Training Program (UNTP)." },
        ] },
];
export const education: Entry[] = [
    { title: "IGCSE", meta: "Singapore International School (Hong Kong) · Aug 2024 – Jun 2026", summary: "9 Distinctions (A*/A) + 1 B (Chinese)", linkedinDescription: "Activities and societies: AI Club (Founder & President), Football U14 & U16 Team, Audio-Visual Committee (2 years), Flag Raiser & Announcements Speaker (2 years)." },
    { title: "IBDP", meta: "Singapore International School (Hong Kong) · Aug 2026 – Jun 2028", summary: "HL: Mathematics: Analysis and Approaches, Computer Science, Economics\nSL: Digital Society, English Language & Literature, Spanish Ab Initio" },
];
export const certificates = [
    { title: "Mathematics for Machine Learning and Data Science Specialization", credential: "7N0SW774QVSQ", kind: "specialization" },
    { title: "Probability & Statistics for Machine Learning & Data Science", credential: "ZMF9YUR4IWAX", kind: "records" },
    { title: "Calculus for Machine Learning and Data Science", credential: "AVAS1CG3TPBT", kind: "records" },
    { title: "Linear Algebra for Machine Learning and Data Science", credential: "6UPYEQFYGZX9", kind: "records" },
];
export const projects: Entry[] = [
    { title: "HFT Trading Simulator — Python3 (DSA, OOP)", meta: "Jun 2026 · Independent Study", summary: "I built a simulated exchange where 15 autonomous trading bots test different strategies through a shared matching engine.", linkedinDescription: "Programmed 15 autonomous bots executing distinct quantitative strategies with custom entry/exit logic. Engineered a matching engine where bots trade exclusively with each other. Built a hybrid pricing engine blending 80% real market data with 20% bot transaction volume to simulate real-time price impact.", href: "https://github.com/aidenlim26/hft_trading_simulator", linkLabel: "View source on GitHub" },
];
export const awards: Entry[] = [
    { title: "Gold Award - United Nations World Youth Painting Competition 2026", meta: "UNESCO · Jul 2026", summary: "My painting explored the theme Peaceful Homeland.", linkedinDescription: "Theme: Peaceful Homeland" },
    { title: "Gold Award - London Youth Art Competition Finals 2025", meta: "British Art and Education Group · Jul 2025", summary: "My painting was exhibited at Iconic Images Gallery in London.", linkedinDescription: "Painting exhibited in Iconic Images Gallery, London. 1,550+ applicants. Theme: A riot of blossoms" },
    { title: "Academic Excellence", meta: "Singapore International School (Hong Kong) · Aug 2026", summary: "Recognised for my IGCSE results.", linkedinDescription: "Academic Excellence Award for achieving 9 distinctions in the June 2026 CAIE-IGCSE examinations." },
];
