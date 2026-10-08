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
  label: "Case Study - She Who Wins",
  title: "Real support. In real time. From women who get it.",
  subtitle:
    "A mobile-first spiritual services marketplace built on Sharetribe — delivering live psychic readings, recorded sessions, and real-time chat through three distinct transaction flows on a single React Native platform.",
  description: `She Who Wins is a women-focused spiritual services marketplace connecting seekers with trusted psychic advisors for relationship guidance, clarity, and soul-deep support.
    <br/>
    <br/>
    icodelabs built the platform as a React Native mobile app on Sharetribe Extended — delivering three independent service types (live 1:1 readings, recorded readings, and chat-based readings) each powered by a purpose-built transaction process. The technical stack combines 100ms for ultra-low-latency live sessions, Socket.io for real-time chat, Mux for recorded reading delivery, and OneSignal for push notifications — all orchestrated around a sophisticated booking engine handling instant sessions, scheduled bookings, advisor wait times, and mid-session extensions.`,
  // heroImage: "/assests/img/casestudy/shewins/hero.png",
  // cardBgColor: "#3B1E4E",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "A spiritual services marketplace is deceptively complex to engineer. Three fundamentally different service types — live video, asynchronous recorded readings, and real-time text chat — each require their own transaction logic, delivery infrastructure, and user flow.",
    "On top of that, the live session booking model introduced layered scheduling complexity: instant bookings competing with scheduled sessions, advisor availability and wait time management, and the ability to extend a live session mid-flow without breaking the transaction. Every one of these had to work seamlessly inside a single React Native app on Sharetribe Extended.",
  ],
  link: "https://shewhowins.com/",
  linklabel: "www.shewhowins.com",
};

export const techStackData = {
  title: "Tech Stack",
  color: "#01424B",
  info: "A multi-modal marketplace stack engineered for real-time intimacy — combining ultra-low-latency live video, persistent chat, and secure recorded delivery on a single React Native + Sharetribe foundation.",
  techStack: [
    { layer: "Mobile App", technology: "React Native (iOS & Android)" },
    { layer: "Marketplace Platform", technology: "Sharetribe Extended" },
    { layer: "Backend / APIs", technology: "Node.js" },
    { layer: "Live Video / Audio", technology: "100ms" },
    { layer: "Real-Time Chat", technology: "Socket.io" },
    { layer: "Recorded Delivery", technology: "Mux" },
    { layer: "Push Notifications", technology: "OneSignal" },
    { layer: "Payments", technology: "Stripe (via Sharetribe)" },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Three Independent Transaction Processes on Sharetribe",
    description:
      "icodelabs configured three separate Sharetribe transaction processes within the same marketplace — one for each service type. Each process has its own booking flow, confirmation logic, delivery method, and post-transaction handling. Live 1:1 Readings run as instant or scheduled sessions delivered via 100ms live video/audio; Recorded Readings let advisors record and deliver a reading asynchronously via Mux; Chat-Based Readings open as a real-time text session delivered via Socket.io. Buyers select their preferred service type from the advisor's profile and enter the appropriate flow — all from within the same mobile app experience.",
  },
  {
    id: 2,
    title: "100ms — Ultra-Low-Latency Live Sessions",
    description:
      "100ms was integrated as the live video and audio infrastructure for 1:1 reading sessions. 100ms's sub-second latency is critical for the intimacy and real-time responsiveness that live psychic readings demand — where delays or buffering would directly undermine the service experience. Sessions are initiated on booking confirmation and terminated cleanly on session end, with Sharetribe transaction state updated accordingly.",
  },
  {
    id: 3,
    title: "Socket.io — Real-Time Chat Reading",
    description:
      "A fully custom real-time chat system was built using Socket.io for the chat-based reading transaction type. The chat session opens on booking confirmation, maintains a persistent real-time connection for the duration of the reading, and closes on session completion — with the full conversation archived for both advisor and seeker.",
  },
  {
    id: 4,
    title: "Mux — Recorded Reading Delivery",
    description:
      "For recorded readings, advisors record their session and upload it to the platform. Mux handles video processing, adaptive streaming, and secure delivery to the buyer post-transaction — with time-limited playback access ensuring recordings are not redistributed beyond the purchasing user.",
  },
  {
    id: 5,
    title: "Instant Booking & Scheduled Booking Engine",
    description:
      "A dual booking model was built supporting both instant sessions (connect with an available advisor immediately) and scheduled bookings (reserve a session at a future date and time). The engine manages advisor availability states across both booking types simultaneously — preventing double-booking while keeping instant availability visible to seekers browsing the platform in real time.",
  },
  {
    id: 6,
    title: "Advisor Wait Time Management",
    description:
      "Between sessions, advisor availability and estimated wait time are surfaced to seekers before booking — setting expectations for instant session requests when an advisor is finishing a prior reading. The wait time system updates dynamically based on live session state, ensuring seekers see accurate availability rather than stale calendar data.",
  },
  {
    id: 7,
    title: "Session Extension — Mid-Booking Flow",
    description:
      "One of the most technically nuanced features of the build. During a live session, both the seeker and advisor can agree to extend the reading beyond the original booked duration. The extension flow triggers an additional Stripe payment charge mid-session, updates the transaction record in Sharetribe, and extends the 100ms session time — all without interrupting the live reading in progress.",
  },
  {
    id: 8,
    title: "OneSignal Push Notifications",
    description:
      "OneSignal was integrated for targeted push notifications across the booking lifecycle — session reminders, advisor availability alerts, booking confirmations, recorded reading delivery notifications, and re-engagement prompts for seekers between sessions.",
  },
];

export const productGallary = [
  "/assests/img/casestudy/shewins/product1.png",
  "/assests/img/casestudy/shewins/product2.png",
  "/assests/img/casestudy/shewins/product3.png",
];

export const highlightPt = [
  "Three independent Sharetribe transaction processes — live video, recorded, and chat — each with distinct delivery infrastructure and booking logic",
  "100ms integration for ultra-low-latency live 1:1 psychic reading sessions",
  "Socket.io real-time chat system with persistent session connection and post-session archiving",
  "Mux secure video delivery for recorded readings with time-limited playback access",
  "Dual booking engine supporting instant and scheduled sessions with live advisor availability management",
  "Dynamic advisor wait time surfacing based on real-time session state",
  "Mid-session extension flow triggering additional Stripe payment without interrupting the live 100ms session",
  "OneSignal push notifications across the full booking and session lifecycle",
];

export const caseStudyCtaCardData = {
  title: "Ready to Build Your Service Marketplace?",
  info: "She Who Wins delivered a women-focused spiritual services marketplace on Sharetribe with three independent transaction flows, 100ms-powered low-latency live video, and real-time Socket.io chat readings. Service marketplaces with live video start at $3,000. Fixed price. 90-day bug-free guarantee.",
  link: "/contact",
  linkLabel: "Book a Free Scoping Call",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
};

export const realStory = {
  avatar: "/assests/img/casestudy/shewins/owner.svg",
  name: "She Who Wins Team",
  founder: "Founding Team",
  info: `icodelabs translated a deeply human service into a deeply technical platform — real-time, multi-modal, and built around the trust our community of advisors and seekers depends on.`,
};

export const themeContent = {
  title: "Mystical typography and sacred tones of She Who Wins",
  info: "Warm, mystical, and feminine — deep tones, soft gradients, and an aesthetic that feels sacred without being inaccessible. The three service types each have their own visual register within the app while maintaining a cohesive brand identity.",

  colors: [
    {
      id: 1,
      name: "Sherpa Blue",
      hex: "#01424B",
      rgb: "",
      className: "sherpaBlue",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "Bondi Blue",
      hex: "#0997A7",
      rgb: "",
      className: "",
      large: false,
      textColor: "#fff",
    },
    {
      id: 3,
      name: "Grapefruit",
      hex: "#DA3211",
      rgb: "",
      className: "",
      large: false,
      textColor: "#fff",
    },
    {
      id: 4,
      name: "Dark Jungle Green",
      hex: "#1E1E1E",
      rgb: "",
      className: "",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 5,
      name: "Fuel Yellow",
      hex: "#F6A623",
      rgb: "",
      className: "",
      large: false,
      textColor: "#fff",
    },
  ],

  typography: {
    bgColor: "#F7F7F7",
    fontFamily: {
      label: "Lora",
      fontVariable: "--font-lora",
      color: "#01424B",
      primaryFontWeight: "semi-bold",
    },
    bigText: {
      label: "Aa",
      fontVariable: "--font-lora",
      color: "#01424B",
    },
    secondary: {
      fontFamily: "Inter",
      fontWeight: "Regular",
      fontVariable: "--font-inter",
      color: "#01424B",
      charactersColor: "#01424B",

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
