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
  label: "Case Study - PPS (Popseekl)",
  title: "Where fashion curation becomes commerce.",
  subtitle:
    "A three-sided commerce, editorial, and social platform — connecting visionary brands, decentralised tastemaker-curators, and conscious fashion consumers in one mobile-first ecosystem.",
  description: `PPS (formerly Popseekl) is a React Native mobile platform redefining how designer fashion is discovered, curated, and sold. Unlike traditional e-commerce, PPS operates as a three-sided ecosystem: brands connect their Shopify inventories, tastemakers build and share curated selections as independent micro-retailers, and consumers discover fashion through a hybrid of commerce, editorial content, and community engagement.
    <br/>
    <br/>
    icodelabs built and scaled the platform with a rich technical stack spanning Shopify integration, Algolia-powered search, Mux video delivery, Google Generative AI, Cloudinary media management, Mixpanel analytics, and a decentralised curation architecture — all delivered as a performant React Native app.`,
  heroImage: "/assests/img/casestudy/ppl/Laptop.webp",
  cardBgColor: "#000",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "Building a three-sided marketplace where brands, tastemakers, and consumers each have distinct roles, permissions, and interfaces — while making commerce feel social and editorial feel shoppable — required a platform architecture far more complex than a standard e-commerce app.",
    "The decentralised curation model meant tastemakers needed direct, managed access to live brand inventories without owning the fulfilment relationship. Multi-brand Shopify integration had to work seamlessly across independent brand storefronts. And the social layer — rooms, community discourse, editorial drops — had to sit natively alongside the commerce experience without one dominating the other.",
  ],
  link: "https://popseekl.com/",
  linklabel: "www.popseekl.com",
  color: "#242424",
};

export const imgGallery = [
  {
    row: [
      {
        img: "/assests/img/casestudy/pps/screen1.png",
        alt: "screen1",
        width: 688,
        height: 770,
      },
      {
        img: "/assests/img/casestudy/pps/screen2.png",
        alt: "screen2",
        width: 574,
        height: 770,
      },
    ],
  },
  {
    img: "/assests/img/casestudy/pps/screen3.png",
    alt: "screen3",
    width: 1274,
    height: 1187,
  },
  {
    img: "/assests/img/casestudy/pps/screen4.png",
    alt: "screen4",
    width: 1274,
    height: 1106,
  },
];

export const techStackData = {
  title: "Tech Stack",
  color: "#000",
  info: "An editorial-grade, culturally-aware commerce stack — bridging multi-brand Shopify inventories, decentralised curation, AI-driven discovery, and a fluid social layer in a single React Native experience.",
  techStack: [
    { layer: "Mobile App", technology: "React Native (iOS & Android)" },
    { layer: "Backend / APIs", technology: "Node.js + Express" },
    { layer: "Commerce Integration", technology: "Shopify (Multi-brand)" },
    { layer: "Search", technology: "Algolia" },
    { layer: "Video Delivery", technology: "Mux" },
    { layer: "Media Management", technology: "Cloudinary" },
    { layer: "Cloud Storage", technology: "Google Cloud Storage" },
    { layer: "AI", technology: "Google Generative AI (Gemini)" },
    { layer: "Database & Auth", technology: "Firebase + Firebase Admin" },
    { layer: "Payments", technology: "Stripe" },
    { layer: "Analytics", technology: "Mixpanel" },
    { layer: "API Layer", technology: "GraphQL" },
    { layer: "Error Monitoring", technology: "Sentry" },
    { layer: "Scheduled Jobs", technology: "Cron + Node Schedule" },
    { layer: "Authentication", technology: "JWT" },
    { layer: "Email", technology: "Nodemailer" },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Multi-Brand Shopify Integration",
    description:
      "icodelabs built a multi-brand Shopify integration layer that connects independent brand storefronts to the PPS platform. Brand inventories, product data, pricing, and availability are synced in real time — enabling PPS to operate as a multi-brand direct-to-consumer channel without owning or warehousing stock. The integration streamlines the brand-to-consumer journey, supporting fairer compensation models and reducing the environmental footprint of excess distribution handling.",
  },
  {
    id: 2,
    title: "Decentralised Tastemaker Curation System",
    description:
      "The platform's defining technical feature. Tastemakers — independent curators with their own audiences and perspectives — are given direct access to brand inventories and a set of tools to build, organise, and publish their own curated selections. Each tastemaker has their own space within the app, a personal audience, and commerce-enabled curation — bridging inspiration and transaction in a way that feels personal and scalable simultaneously. The system manages inventory access, attribution, and commission flows across all tastemaker-driven sales.",
  },
  {
    id: 3,
    title: "Algolia Search & Discovery",
    description:
      "Algolia was integrated for fast, faceted product and brand discovery across the full PPS catalogue. Search is indexed across brand, category, aesthetic, designer, and tastemaker selections — enabling the kind of culturally-aware, style-driven discovery that differentiates PPS from keyword-based fashion search.",
  },
  {
    id: 4,
    title: "Mux — Video Delivery for Editorial & Drops",
    description:
      "Mux was integrated for high-quality video streaming across editorial content, brand storytelling, and product drop announcements. Adaptive streaming ensures smooth playback across connection speeds — critical for a fashion platform where visual presentation quality directly affects conversion and brand perception.",
  },
  {
    id: 5,
    title: "Google Generative AI (Gemini) Integration",
    description:
      "Google's Generative AI was integrated to power intelligent content and curation features within the platform — supporting AI-assisted editorial generation, product tagging, and recommendation logic that helps surface culturally relevant pieces to the right consumers and tastemakers.",
  },
  {
    id: 6,
    title: "Cloudinary — Media Management at Scale",
    description:
      "Cloudinary handles all product image and media management across the multi-brand catalogue — providing transformation, optimisation, and delivery of high-resolution fashion imagery at scale. Automatic format optimisation and responsive delivery ensure the visual quality that designer fashion demands without compromising app performance.",
  },
  {
    id: 7,
    title: "Rooms & Community Discourse",
    description:
      "A social layer was built into the app allowing users to enter brand and tastemaker rooms, join conversations about fashion, exchange insights, discover new perspectives, and receive tailored recommendations. This community infrastructure transforms PPS from a shopping app into a living cultural platform — where brands can join conversations organically rather than pushing one-directional content.",
  },
  {
    id: 8,
    title: "Drops & Early Access System",
    description:
      "A drops infrastructure was built supporting limited-access product releases with early access rewards for community members. Cron jobs and Node Schedule manage timed drops, inventory gating, and notification triggers — delivering the exclusivity mechanics that drive engagement in the fashion community.",
  },
  {
    id: 9,
    title: "Stripe Payments & Commission Architecture",
    description:
      "Stripe handles all payment processing across the three-sided commerce model — managing brand payouts, tastemaker commissions, and consumer transactions within a single payment infrastructure. The commission architecture tracks tastemaker-attributed sales and automates earnings allocation across the multi-brand, multi-curator environment.",
  },
  {
    id: 10,
    title: "Mixpanel Analytics",
    description:
      "Mixpanel was integrated for granular behavioural analytics — tracking user journeys across discovery, curation, social engagement, and conversion. Event-level data gives the PPS team the insight needed to optimise the commerce-social hybrid experience and understand which tastemakers, brands, and content types drive the highest engagement and revenue.",
  },
  {
    id: 11,
    title: "Sentry — Error Monitoring",
    description:
      "Sentry was integrated across the React Native app and Node.js backend for real-time error tracking, performance monitoring, and crash reporting — ensuring platform stability across the multi-brand, multi-user commerce environment.",
  },
];

export const productGallary = [
  "/assests/img/casestudy/pps/product1.png",
  "/assests/img/casestudy/pps/product2.png",
  "/assests/img/casestudy/pps/product3.png",
];

export const highlightPt = [
  "Three-sided marketplace architecture — brands, tastemakers, and consumers with distinct roles and permission layers",
  "Multi-brand Shopify integration syncing live inventory, pricing, and availability across independent storefronts",
  "Decentralised tastemaker curation system with commerce-enabled personal selections and commission attribution",
  "Algolia culturally-aware search and discovery across the full brand and tastemaker catalogue",
  "Mux adaptive video streaming for editorial content and product drops",
  "Google Generative AI (Gemini) for intelligent curation, tagging, and recommendation",
  "Cloudinary media management and optimisation across a multi-brand high-resolution image catalogue",
  "Drops infrastructure with timed gating, early access, and rewards via Cron and Node Schedule",
  "Mixpanel event-level analytics across the full commerce-social user journey",
  "Sentry real-time error monitoring across mobile app and backend",
];

export const caseStudyCtaCardData = {
  title: "Ready to Build Your Product Marketplace?",
  info: "PPS (formerly Popseekl) launched a React Native fashion marketplace where tastemakers curate connected Shopify inventory into shareable storefronts — with Algolia search, Mux video, and AI-assisted curation. Product and creator marketplaces start at $3,000. Fixed price. 90-day bug-free guarantee.",
  link: "/contact",
  linkLabel: "Book a Free Scoping Call",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
};

export const realStory = {
  avatar: "/assests/img/casestudy/pps/owner.svg",
  name: "PPS Team",
  founder: "Founding Team",
  info: `icodelabs built a culturally-aware commerce platform that bridges editorial, community, and shopping — at the level of technical polish a fashion-forward audience expects.`,
};

export const themeContent = {
  title: "Editorial fonts and immersive tones of PPS",
  info: "Editorial-first and culturally sharp — a dark, immersive aesthetic that positions PPS as a fashion media brand as much as a shopping platform. Typography and whitespace do the heavy lifting, letting the photography and brand storytelling lead.",
  colors: [
    {
      id: 1,
      name: "Black",
      hex: "#000000",
      rgb: "",
      className: "black",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "Mercury",
      hex: "#E6E6E6",
      rgb: "",
      className: "mercury",
      large: false,
      textColor: "#111111",
    },
    {
      id: 3,
      name: "Silver",
      hex: "#C8C8C8",
      rgb: "",
      className: "silver",
      large: false,
      textColor: "#111111",
    },
    {
      id: 4,
      name: "Romance",
      hex: "#819CE9",
      rgb: "",
      className: "romance",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 5,
      name: "Water Leaf",
      hex: "#AEE9D1",
      rgb: "",
      className: "waterLeaf",
      large: false,
      textColor: "#111111",
    },
  ],

  typography: {
    bgColor: "#F7F7F7",
    fontFamily: {
      label: "Aileron",
      fontVariable: "--font-aileron",
      color: "#111111",
      primaryFontWeight: "Bold",
    },
    bigText: {
      label: "Aa",
      fontVariable: "--font-aileron",
      color: "#000000",
    },
    secondary: {
      fontFamily: "Aileron",
      fontWeight: "Regular",
      fontVariable: "--font-aileron",
      color: "#111111",
      charactersColor: "#111111",

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
        "f",
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
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
        "+",
      ],
    },
  },
};
