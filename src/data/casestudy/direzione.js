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
  label: "Case Study - Direzione",
  title:
    "The digital platform where architecture, art, and creative culture converge.",
  subtitle:
    "A Next.js marketplace and editorial platform connecting artists with managers and studios — combining inquiry-based service bookings, JWT-authenticated role dashboards, Strapi-powered editorial publishing, and Cloudinary media infrastructure into one premium creative ecosystem.",
  description: `Direzione (DART) is an Italian creative marketplace empowering artists and managers to build their professional journeys — connecting artists listing services and availability with managers, studios, and creative directors seeking talent.
    <br/>
    <br/>
    icodelabs built the complete platform as a custom Next.js application with a dual layer: a fully functional two-sided marketplace with inquiry-based transaction flows, Stripe subscription billing, and JWT-authenticated role-based dashboards — layered beneath a premium editorial publishing experience powered by Strapi CMS and Cloudinary. Hosted on AWS and available in English and Italian, the platform positions itself at the intersection of a professional services marketplace and a high-end creative publication.`,
  // heroImage: "/assests/img/casestudy/direzione/hero.webp",
  // cardBgColor: "#0E0E0E",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "Building a marketplace for creative professionals is distinctly different from building one for products or standard services. Artists need to present their work immersively — portfolios, project galleries, availability windows, and service offerings — while managers and studios need to browse, evaluate, and initiate professional conversations with confidence.",
    "The platform had to simultaneously function as a credible creative publication (giving it editorial authority in the architecture and art world) and a fully operational professional services marketplace — two fundamentally different product disciplines that had to coexist within a single Next.js codebase without one compromising the other.",
  ],
  link: "https://direzione.art/",
  linklabel: "www.direzione.art",
  color: "#E67657",
};

export const techStackData = {
  title: "Tech Stack",
  color: "#E67657",
  info: "A custom Next.js stack engineered to serve both an SSR marketplace and an SSG editorial publication from a single codebase — Strapi for editorial content, Cloudinary for publication-quality media, Stripe-powered subscriptions, and JWT role-based auth on AWS.",
  techStack: [
    { layer: "Frontend", technology: "Next.js" },
    { layer: "Backend / APIs", technology: "Node.js" },
    { layer: "CMS & Publishing", technology: "Strapi (Headless CMS)" },
    { layer: "Authentication", technology: "JWT-based custom auth" },
    { layer: "Media Management", technology: "Cloudinary" },
    { layer: "Payments & Subscriptions", technology: "Stripe" },
    { layer: "Hosting & Infrastructure", technology: "AWS" },
    { layer: "Localisation", technology: "English + Italian" },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Two-Sided Creative Marketplace",
    description:
      "icodelabs built a two-sided marketplace with distinct roles for artists and managers. Artists create profiles listing their services, creative disciplines, and availability — presenting their work through portfolio galleries and project showcases. Managers and studios browse the marketplace, discover artists aligned with their creative direction, and initiate professional engagements through a structured inquiry flow.",
  },
  {
    id: 2,
    title: "Inquiry-Based Transaction Flow",
    description:
      "The transaction process was built as an inquiry-first model — appropriate for the creative services context where engagements are rarely transactional and almost always require a conversation before commitment. Managers send structured inquiries to artists, artists respond with proposals or availability confirmation, and the engagement progresses through a managed conversation flow before any financial commitment is made. This mirrors how creative professional relationships actually begin in the architecture and art world.",
  },
  {
    id: 3,
    title: "JWT-Based Role Authentication",
    description:
      "A fully custom JWT authentication system was built supporting two distinct user roles — artists and managers — each with their own registration flow, profile structure, dashboard, and platform permissions. Role-based access control governs what each user type can see and do across the marketplace, ensuring artists manage their service listings and incoming inquiries while managers control their talent discovery, saved profiles, and active engagements.",
  },
  {
    id: 4,
    title: "Stripe Subscription Model",
    description:
      "A Stripe-powered subscription system was built governing marketplace access tiers for artists and managers. Subscription plans control feature access, listing visibility, and inquiry volume — creating a recurring revenue model for the platform operator while giving serious creative professionals a clear path to premium marketplace presence.",
  },
  {
    id: 5,
    title: "Strapi Headless CMS — Editorial Publishing Layer",
    description:
      "Strapi was integrated as the headless CMS powering Direzione's editorial content layer — architecture features, design showcases, artist interviews, visual essays, and cultural commentary. Content editors publish and manage editorial pieces through Strapi's admin interface, with Next.js fetching content at build time or on-demand for fast, SEO-optimised page delivery. The editorial layer gives Direzione cultural authority in the creative world — positioning the marketplace as a destination, not just a directory.",
  },
  {
    id: 6,
    title: "Cloudinary — Creative Media Management",
    description:
      "Cloudinary handles all media management across the platform — artist portfolio imagery, editorial photography, project gallery assets, and video content. Automatic format optimisation, responsive image delivery, and transformation pipelines ensure that high-resolution creative work is presented at publication quality without compromising page performance. For a platform where visual presentation is the primary trust signal, Cloudinary's media infrastructure is foundational.",
  },
  {
    id: 7,
    title: "Next.js — SSR/SSG for Editorial + Marketplace",
    description:
      "Next.js was chosen to serve both the editorial and marketplace layers from a single codebase — with server-side rendering for dynamic marketplace pages (artist profiles, search results, inquiry flows) and static site generation for editorial content where SEO and load performance are critical. This hybrid rendering approach means editorial pages rank and load like a publication while marketplace interactions feel like a live application.",
  },
  {
    id: 8,
    title: "English & Italian Bilingual Platform",
    description:
      "Full bilingual support was implemented across all platform surfaces — marketplace listings, editorial content, authentication flows, and user dashboards — in both English and Italian. Given the platform's Italian creative heritage and international audience ambitions, bilingual delivery was built into the platform architecture from the ground up rather than retrofitted.",
  },
  {
    id: 9,
    title: "AWS Infrastructure",
    description:
      "The full platform is hosted on AWS — providing the scalability, reliability, and media delivery performance that a high-visual-fidelity creative platform demands. AWS infrastructure supports both the Next.js application layer and the Strapi CMS backend with appropriate environment separation for development, staging, and production.",
  },
];

export const productGallary = [
  "/assests/img/casestudy/direzione/product1.png",
  "/assests/img/casestudy/direzione/product2.png",
  "/assests/img/casestudy/direzione/product3.png",
];

export const highlightPt = [
  "Custom Next.js application combining SSR marketplace pages with SSG editorial content from a single codebase",
  "Two-sided marketplace with JWT role-based authentication — distinct artist and manager flows, dashboards, and permissions",
  "Inquiry-based transaction flow appropriate for professional creative services engagement",
  "Stripe subscription billing governing marketplace access tiers for artists and managers",
  "Strapi headless CMS powering the editorial publishing layer with structured content types for architecture, design, and art features",
  "Cloudinary media pipeline delivering publication-quality portfolio and editorial imagery with automatic optimisation",
  "AWS hosting with environment-separated deployment for the Next.js app and Strapi backend",
  "Full English and Italian bilingual implementation across marketplace and editorial surfaces",
];

export const caseStudyCtaCardData = {
  title: "Ready to Build Your Creative Marketplace?",
  info: "Direzione (DART) connects Italian artists with managers, studios, and creative directors through inquiry-based transactions, a Strapi-powered editorial layer, and a Next.js frontend. We build talent and creative marketplaces from $3,000. Fixed price. 90-day bug-free guarantee.",
  link: "/contact",
  linkLabel: "Book a Free Scoping Call",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
};

export const realStory = {
  avatar: "/assests/img/casestudy/direzione/direzione_logo.png",
  name: "Direzione Team",
  founder: "Founding Team",
  info: `icodelabs built Direzione as both a marketplace and a publication — a creative platform with the editorial authority of a magazine and the operational depth of a professional services marketplace.`,
};

export const themeContent = {
  title: "Editorial typography and monochromatic tones of Direzione",
  info: "Editorial minimalism meets premium marketplace clarity — elegant typography, monochromatic layouts, structured grids, and cinematic whitespace create a reading and browsing experience inspired by contemporary architecture and art publications.",

  colors: [
    {
      id: 1,
      name: "Sunrise Orange",
      hex: "#E67657",
      rgb: "",
      className: "editorialBlack",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "London Hue",
      hex: "#C0A2B8",
      rgb: "",
      className: "antiqueGold",
      large: false,
      textColor: "#fff",
    },
    {
      id: 3,
      name: "Moonstone Blue",
      hex: "#5FAABD",
      rgb: "",
      className: "marble",
      large: false,
      textColor: "#fff",
    },
    {
      id: 4,
      name: "Navy",
      hex: "#061C3D",
      rgb: "",
      className: "ash",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 5,
      name: "Light Grey",
      hex: "#D9D9D9",
      rgb: "",
      className: "stone",
      large: false,
      textColor: "#0E0E0E",
    },
  ],

  typography: {
    bgColor: "#e7e7e7",
    fontFamily: {
      label: "Inter",
      fontVariable: "--font-inter",
      color: "#333333",
      primaryFontWeight: "Bold",
    },
    bigText: {
      label: "Aa",
      fontVariable: "--font-inter",
      color: "#E67657",
    },
    secondary: {
      // fontFamily: "Inter",
      // fontWeight: "Regular",
      fontVariable: "--font-inter",
      color: "#333333",
      charactersColor: "#333333",

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
