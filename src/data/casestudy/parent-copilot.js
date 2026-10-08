export const navLinks = [
  { label: "Overview", id: "overview" },
  { label: "The Challenge", id: "the-challenge" },
  { label: "Tech Stack", id: "tech-stack" },
  { label: "Brand Color & Typo", id: "brand-color-typo" },
  { label: "What We Built", id: "what-we-built" },
  { label: "Technical Highlights", id: "technical-highlights" },
  { label: "Testimonials", id: "testimonials" },
];

export const heroData = {
  label: "Case Study - Parent Co-Pilot",
  title: "Parenting. Without the chaos.",
  subtitle:
    "A full-stack AI co-parenting assistant built on a custom RAG pipeline — helping separated parents navigate legal documents, high-conflict communication, and emotional stress through intelligent, context-aware guidance.",
  description: `Parent Co-Pilot is an AI-powered co-parenting assistant designed for separated and divorced parents navigating custody arrangements, legal agreements, and high-conflict communication.
    <br/>
    <br/>
    icodelabs built the complete platform — a React Native mobile app, a Next.js web application, and an embeddable AI widget for family lawyer websites — all powered by a sophisticated Retrieval-Augmented Generation (RAG) pipeline built on LangChain, OpenAI GPT-4, and Weaviate. The platform enables parents to upload their legal parenting plans and receive personalised, document-grounded AI guidance — a technically demanding build combining mobile development, vector search, NLP sentiment analysis, and real-time push notifications across a multi-framework AI stack.`,
  // heroImage: "/assests/img/casestudy/parent-copilot/hero.png",
  // cardBgColor: "#3B5BDB",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "Co-parenting platforms typically offer static tools — calendars, messaging, expense trackers. Parent Co-Pilot needed something fundamentally different: an AI that could read a parent's actual legal parenting agreement and provide personalised, document-grounded responses about custody schedules, visitation rules, and legal obligations.",
    "This required a full RAG pipeline — ingesting legal documents, chunking and embedding them into a vector store, and retrieving contextually relevant passages to ground every AI response in the user's specific legal reality rather than generic advice. Simultaneously, the platform needed NLP-driven conflict analysis, real-time SMS/email communication tools, emotional support features, and a B2B embeddable widget for family lawyers — all delivered across mobile and web.",
  ],
  link: "https://parentcopilot.com/",
  linklabel: "www.parentcopilot.com",
  color: "#FF5A5F",
};

export const imgGallery = [
  {
    row: [
      {
        img: "/assests/img/casestudy/parent-copilot/screen1.png",
        alt: "screen1",
        width: 688,
        height: 770,
      },
      {
        img: "/assests/img/casestudy/parent-copilot/screen2.png",
        alt: "screen2",
        width: 574,
        height: 770,
      },
    ],
  },
  {
    img: "/assests/img/casestudy/parent-copilot/screen3.png",
    alt: "screen3",
    width: 1274,
    height: 1187,
  },
  {
    img: "/assests/img/casestudy/parent-copilot/screen4.png",
    alt: "screen4",
    width: 1274,
    height: 1106,
  },
];

export const techStackData = {
  title: "Tech Stack",
  color: "#1E4665",
  info: "A multi-framework AI stack designed for document-grounded reasoning, real-time messaging, and cross-platform delivery — built for trust, calm, and clarity.",
  techStack: [
    { layer: "Mobile App", technology: "React Native (iOS & Android)" },
    { layer: "Web App", technology: "Next.js" },
    { layer: "Backend / APIs", technology: "Node.js + FastAPI + Uvicorn" },
    {
      layer: "AI & RAG Pipeline",
      technology:
        "LangChain, LangChain-Community, LangChain-OpenAI, LangChain-Core, LangChain-Experimental",
    },
    { layer: "Language Model", technology: "OpenAI GPT-4" },
    { layer: "Vector Database", technology: "Weaviate" },
    { layer: "Database", technology: "Supabase + Firebase" },
    { layer: "Authentication", technology: "Firebase Auth" },
    { layer: "Messaging", technology: "Twilio API + Email API" },
    { layer: "Push Notifications", technology: "OneSignal" },
    { layer: "Blogging", technology: "Ghost CMS" },
    { layer: "Internal Tooling", technology: "Streamlit" },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Full RAG Pipeline — Parenting Plan Upload & AI Analysis",
    description:
      'The technical centrepiece of the build. Parents upload their legal parenting agreements (custody schedules, visitation rules, holiday arrangements, court orders) directly into the app. icodelabs built a complete RAG pipeline using LangChain and Weaviate: documents are parsed, chunked, and embedded into Weaviate\'s vector database. When a parent asks a question — "Am I allowed to take the kids on holiday this weekend?" — the system retrieves the most relevant passages from their specific document and passes them as context to GPT-4, producing answers grounded in their actual legal agreement rather than generic AI responses. LangChain-Experimental was used for advanced document reasoning chains across complex multi-clause legal documents.',
  },
  {
    id: 2,
    title: "AI Chatbot — Coaching & Conflict Resolution",
    description:
      "A conversational AI assistant was built into the React Native app, powered by GPT-4 via LangChain. The chatbot provides real-time co-parenting coaching, conflict resolution guidance, and communication strategies — all informed by the user's uploaded parenting plan context. NLP sentiment analysis detects passive-aggressiveness, emotional triggers, and manipulation patterns in messages from an ex-partner, and the AI suggests neutral, de-escalating replies calibrated to the specific situation.",
  },
  {
    id: 3,
    title: "FastAPI + Uvicorn — Python AI Backend",
    description:
      "A dedicated Python backend was built using FastAPI and Uvicorn to handle all AI inference, RAG pipeline orchestration, document processing, and LangChain workflow execution — separate from the Node.js application backend. This dual-backend architecture keeps AI processing isolated, scalable, and independently deployable, while the Node.js layer handles all standard application logic, authentication, and API routing.",
  },
  {
    id: 4,
    title: "Pre-Drafted Email & SMS Templates — Twilio Integration",
    description:
      "A library of AI-generated, scenario-specific message templates was built for common co-parenting situations — schedule change requests, expense discussions, holiday coordination, and discipline decisions. Templates are generated by GPT-4, customisable by the parent, and sent directly via Twilio SMS or Email API integration — keeping communication structured, neutral, and legally defensible.",
  },
  {
    id: 5,
    title: "Emotional Support & Calm Mode",
    description:
      'An emotional support module was built with AI-powered daily stress management tips, mindfulness reminders, and a "Calm Mode" — a one-tap feature that instantly surfaces AI-generated coping strategies for high-stress moments. Child-centric advice features provide AI guidance on how to talk to children about separation, handle anxiety, and frame difficult situations in age-appropriate language.',
  },
  {
    id: 6,
    title: "Embeddable AI Widget for Lawyer Websites",
    description:
      "A subscription-based iframe tool was built for family lawyers to embed on their own websites. The widget provides AI-generated responses for handling high-conflict co-parenting enquiries — giving lawyers an intelligent first-response tool for prospective clients. The embeddable snippet is distributed through the Next.js web app with subscription-gated access for law firms.",
  },
  {
    id: 7,
    title: "OneSignal Push Notifications",
    description:
      "OneSignal was integrated for targeted push notifications — delivering reminders for court dates, visitation schedules, holiday arrangements, and mindfulness prompts extracted from the user's parenting plan by the RAG pipeline. Notifications are personalised based on each user's document-specific schedule.",
  },
  {
    id: 8,
    title: "Ghost CMS — Content & Blog",
    description:
      "Ghost was integrated as a headless CMS for the Parent Co-Pilot blog and resource library — providing SEO-optimised content around co-parenting, legal guidance, and emotional wellness to drive organic acquisition.",
  },
  {
    id: 9,
    title: "Supabase + Firebase — Dual Database Architecture",
    description:
      "Supabase handles structured relational data — user profiles, parenting plan metadata, subscription records, and message history. Firebase handles real-time features and authentication via Firebase Auth. Weaviate operates as the dedicated vector store for document embeddings, keeping the RAG pipeline's retrieval layer separate from application data.",
  },
];

export const productGallary = [
  "/assests/img/casestudy/parent-copilot/product1.png",
  "/assests/img/casestudy/parent-copilot/product2.png",
  "/assests/img/casestudy/parent-copilot/product3.png",
];

export const highlightPt = [
  "Full RAG pipeline built on LangChain + Weaviate — legal documents ingested, embedded, and retrieved to ground every AI response in the user's actual parenting agreement",
  "Dual backend architecture — FastAPI/Uvicorn for AI inference and LangChain orchestration, Node.js for application logic",
  "NLP sentiment analysis detecting passive-aggressiveness, emotional triggers, and manipulation patterns in co-parenting messages",
  "LangChain-Experimental used for complex multi-clause legal document reasoning chains",
  "Twilio integration for AI-generated, scenario-specific SMS and email communication templates",
  "OneSignal push notifications personalised from RAG-extracted parenting plan schedules",
  "Embeddable iframe AI widget for family lawyer websites with subscription-gated access",
  "Ghost CMS headless integration for SEO content and resource library",
  "Supabase + Firebase dual database with Weaviate vector store — three-layer data architecture",
];

export const caseStudyCtaCardData = {
  title: "Ready to Build Your AI Product?",
  info: "Parent Co-Pilot delivered an AI-powered co-parenting assistant with a full RAG pipeline for parenting-plan analysis, a GPT-4 conflict-resolution chatbot, and a dual Next.js + Python (FastAPI) backend. We build AI-augmented products and marketplaces from $3,000. Fixed price. 90-day bug-free guarantee.",
  link: "/contact",
  linkLabel: "Book a Free Scoping Call",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
};

export const realStory = {
  avatar: "/assests/img/casestudy/parent-copilot/owner.svg",
  name: "Parent Co-Pilot Team",
  founder: "Founding Team",
  info: `icodelabs built a deeply technical AI platform that genuinely helps parents — combining a real RAG pipeline, calm conversational design, and a multi-surface delivery across mobile, web, and lawyer websites.`,
};

export const themeContent = {
  title: "Calm tones and trustworthy typography of Parent Co-Pilot",
  info: "Calm, trustworthy, and human — a design system that acknowledges the emotional weight of its users' situations without feeling clinical or legal. Soft tones, clear navigation, and a conversational UI that makes AI guidance feel supportive rather than transactional.",

  colors: [
    {
      id: 1,
      name: "Blaze Orange",
      hex: "#FF5A5F",
      rgb: "",
      className: "blazeOrange",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "Baltic Sea",
      hex: "#1E4665",
      rgb: "",
      className: "balticSea",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 3,
      name: "White Lilac",
      hex: "#D8ECF3",
      rgb: "",
      className: "whiteLilac",
      large: false,
      textColor: "#232A2B",
    },
    {
      id: 4,
      name: "Star Dust",
      hex: "#D8ECF3",
      rgb: "",
      className: "starDust",
      large: false,
      textColor: "#000",
    },
    {
      id: 5,
      name: "Blue Koi",
      hex: "#66A4CB",
      rgb: "",
      className: "blueKoi",
      large: false,
      textColor: "#FFFFFF",
    },
  ],

  typography: {
    bgColor: "#F7F7F7",
    fontFamily: {
      label: "Montserrat",
      fontVariable: "--font-montserrat",
      color: "#1E4665",
      primaryFontWeight: "Bold",
    },
    bigText: {
      label: "Aa",
      fontVariable: "--font-montserrat",
      color: "#FF5A5F",
    },
    secondary: {
      fontFamily: "Montserrat",
      fontWeight: "Regular",
      fontVariable: "--font-montserrat",
      color: "#1E4665",
      charactersColor: "#1E4665",

      characters: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "/",
        "*",
        "!",
        "~",
        "$",
        "%",
        "&",
        "(",
        ")",
        "_",
        "+",
      ],
    },
  },
};
