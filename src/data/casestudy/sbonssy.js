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
  label: "Case Study - Sbonssy",
  title: "Where athlete influence becomes income.",
  subtitle:
    "A fully custom three-sided affiliate engagement and management platform — connecting sports brands, athlete ambassadors, and fans through commission-based storefronts, Shopify integration, injectable tracking scripts, and automated monthly payout calculation.",
  description: `Sbonssy is a Finnish sports affiliate platform built on the belief that athletes and creators should earn directly from their influence — not through brand deals or agency contracts, but through authentic product recommendations that convert.
    <br/>
    <br/>
    icodelabs built the entire platform from scratch as a custom Next.js application — a three-sided ecosystem connecting brands (who connect their Shopify stores and set commission structures), athlete ambassadors (who build personal storefronts and share with their audiences), and fans (who discover and shop through ambassador recommendations). The platform handles the full affiliate lifecycle: Shopify product sync, click and conversion tracking via injectable scripts, commission calculation per conversion event, and automated monthly payment processing via Stripe.`,
  heroImage: "/assests/img/casestudy/sbonssy/hero.png",
  cardBgColor: "#F97316",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "Affiliate platforms look simple on the surface but are complex to engineer correctly. The core challenge was building a commission attribution engine that accurately tracks the full conversion funnel — from click to order — across multiple brands, multiple ambassadors, and multiple Shopify storefronts simultaneously. Every click needed to be attributed to the right ambassador. Every order needed to map back to the right conversion event.",
    "Commission calculations needed to handle multiple commission models (pay per click, pay per order) and aggregate correctly for monthly payout runs. And brands needed a frictionless way to connect their existing Shopify stores without rebuilding their e-commerce infrastructure — handled through injectable scripts and validated API endpoints that slot into any brand's existing website.",
  ],
  link: "https://sbonssy.com/",
  linklabel: "www.sbonssy.com",
};

export const imgGallery = [
  {
    row: [
      {
        img: "/assests/img/casestudy/sbonssy/screen1.png",
        alt: "screen1",
        width: 688,
        height: 770,
      },
      {
        img: "/assests/img/casestudy/sbonssy/screen2.png",
        alt: "screen2",
        width: 574,
        height: 770,
      },
    ],
  },
  {
    img: "/assests/img/casestudy/sbonssy/screen3.png",
    alt: "screen3",
    width: 1274,
    height: 1187,
  },
  {
    img: "/assests/img/casestudy/sbonssy/screen4.png",
    alt: "screen4",
    width: 1274,
    height: 1106,
  },
];

export const techStackData = {
  title: "Tech Stack",
  color: "#F97316",
  info: "A fully custom Next.js application — no marketplace framework — engineered around a multi-model commission attribution engine, Shopify product sync, injectable tracking scripts, and a PostgreSQL conversion ledger driving automated Stripe payouts.",
  techStack: [
    { layer: "Frontend", technology: "Next.js" },
    { layer: "Backend / APIs", technology: "Node.js" },
    { layer: "Database", technology: "PostgreSQL" },
    { layer: "Commerce Integration", technology: "Shopify API" },
    { layer: "Payments & Payouts", technology: "Stripe" },
    { layer: "Tracking", technology: "Injectable JavaScript + API Endpoints" },
    { layer: "Media", technology: "Cloudinary" },
    { layer: "Language", technology: "English + Finnish" },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Three-Sided Platform Architecture",
    description:
      "icodelabs architected Sbonssy as a three-sided platform with distinct interfaces, permissions, and workflows for each user type. Brands connect their Shopify store, set commission rates per product or category, manage ambassador relationships, and track campaign performance. Ambassadors (athletes and creators) build personal storefronts from brand product catalogues, generate affiliate links, share with their audience, and track earnings in real time. Fans discover athletes, browse their curated storefronts, and purchase products through ambassador links. Each role has its own dashboard, data visibility, and workflow — all built on a shared Next.js and PostgreSQL foundation.",
  },
  {
    id: 2,
    title: "Shopify Integration — Brand Product Sync",
    description:
      "Brands connect their Shopify stores to Sbonssy via the Shopify API. Product catalogues, pricing, inventory status, and product metadata are synced automatically — allowing ambassadors to build storefronts from live brand inventory without any manual product management. Order data flows back from Shopify into Sbonssy's commission engine when a conversion is recorded, triggering the attribution and calculation pipeline.",
  },
  {
    id: 3,
    title: "Ambassador Storefront Builder",
    description:
      "A personalised storefront system was built allowing each ambassador to curate a selection of products from connected brands into their own branded shop page. Ambassadors generate unique affiliate links per product, embed their storefront on their own channels, and drive traffic that is tracked back to their account for commission attribution. The storefront system supports multiple brands simultaneously — an ambassador can represent several sports and lifestyle brands within a single unified shop.",
  },
  {
    id: 4,
    title: "Injectable Tracking Script — Brand Site Integration",
    description:
      "A lightweight JavaScript tracking script was built that brands embed on their own websites and checkout pages. The script captures click events, session attribution, and order completion signals — passing conversion data back to Sbonssy's API endpoints in real time. This allows Sbonssy to track the full funnel from ambassador link click through to order placement on the brand's own Shopify-powered website, without requiring the brand to rebuild or migrate their e-commerce setup.",
  },
  {
    id: 5,
    title: "API Endpoints for Brand Integration & Setup Validation",
    description:
      "A suite of API endpoints was built for brand-side integration — covering tracking event ingestion, order confirmation webhooks, product catalogue sync, and commission event recording. A setup validation layer was built alongside this, giving brands a clear integration checklist and real-time validation feedback to confirm their tracking script is correctly installed and conversion events are being captured accurately before going live.",
  },
  {
    id: 6,
    title: "Commission Engine — Pay Per Click & Pay Per Order",
    description:
      "The core of the platform. A multi-model commission engine was built supporting two attribution types: Pay Per Click (ambassador earns a fixed commission for each qualified click through their affiliate link) and Pay Per Order (ambassador earns a percentage or fixed amount commission when a click converts to a completed order on the brand's Shopify store). The engine processes every click and conversion event in real time, maps each event to the correct ambassador and brand, applies the configured commission rate, and accumulates earnings in the ambassador's account ledger within PostgreSQL.",
  },
  {
    id: 7,
    title: "Monthly Payment Calculation & Stripe Payouts",
    description:
      "At the end of each commission period, the platform aggregates all confirmed conversion earnings per ambassador — netting off any refunded or cancelled orders — and calculates the final monthly payout amount. Stripe is used to process ambassador payouts, with the platform managing payout scheduling, payment records, and confirmation notifications. Brands are billed for their commission liabilities through the same Stripe infrastructure.",
  },
  {
    id: 8,
    title: "Brand & Ambassador Dashboards",
    description:
      "Dedicated dashboards were built for both sides of the marketplace. Brand dashboards show active ambassadors, campaign performance, click and conversion volumes, commission liabilities, and Shopify order attribution. Ambassador dashboards show click counts, conversion rates, earnings by brand, payout history, and real-time storefront performance — giving athletes full visibility of their income without requiring a finance background to interpret.",
  },
];

export const productGallary = [
  "/assests/img/casestudy/sbonssy/product1.png",
  "/assests/img/casestudy/sbonssy/product2.png",
  "/assests/img/casestudy/sbonssy/product3.png",
];

export const highlightPt = [
  "Fully custom Next.js + Node.js + PostgreSQL platform — no marketplace framework, built from scratch",
  "Shopify API integration for live product sync and order-based conversion attribution across multiple brand storefronts",
  "Injectable JavaScript tracking script capturing click and conversion events on brand websites with zero Shopify migration required",
  "API endpoint suite for brand integration with real-time setup validation and webhook-based order confirmation",
  "Multi-model commission engine supporting pay per click and pay per order attribution simultaneously",
  "PostgreSQL-based conversion ledger tracking every click, order, and commission event per ambassador per brand",
  "Automated monthly payout calculation with Stripe ambassador disbursements and brand billing",
  "Three-sided role architecture with dedicated dashboards for brands, ambassadors, and fan discovery",
];

export const caseStudyCtaCardData = {
  title: "Ready to Build Your Marketplace?",
  info: "Sbonssy started on Sharetribe and grew into a fully custom platform as their model evolved. We helped architect both journeys. We'll give you honest advice on which approach fits your stage — and build it either way.",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
  link: "/contact",
  linkLabel: "Book a Free Call",
};

export const realStory = {
  avatar: "/assests/img/casestudy/sbonssy/sbonssy.webp",
  name: "Iiro",
  founder: "Sbonssy",
  info: "As a non-technical founder, working with Jay and the iCodeLabs team has been absolutely invaluable for building Sbonssy. We started on Sharetribe, but iCodeLabs helped us pivot to a fully custom platform. More than developers, they were true partners shaping the product, solving complex problems, and guiding the right decisions. Simply put, Sbonssy exists today because of them.",
};

export const themeContent = {
  title: "Sports-forward typography and high-contrast tones of Sbonssy",
  info: "Sports-forward and performance-oriented — a clean, high-contrast design system that puts ambassador storefronts and brand partnerships at the centre. The ambassador profile and storefront pages feel personal and authentic rather than corporate, reflecting the platform's core belief that genuine athlete recommendations are more valuable than polished advertising.",

  colors: [
    {
      id: 1,
      name: "Papaya Orange",
      hex: "#F26915",
      rgb: "",
      className: "sbonssyOrange",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "Dark Sienna",
      hex: "#390A21",
      rgb: "",
      className: "ink",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 3,
      name: "Black",
      hex: "#000000",
      rgb: "",
      className: "black",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 4,
      name: "Pale Canary",
      hex: "#f9fd99",
      rgb: "",
      className: "paleCanary",
      large: false,
      textColor: "#111827",
    },
    {
      id: 5,
      name: "Seashell",
      hex: "#f1f1f1",
      rgb: "",
      className: "seashell",
      large: false,
      textColor: "#111827",
    },
  ],

  typography: {
    bgColor: "#F7F7F7",
    fontFamily: {
      label: "Sunset Gothic Pro",
      fontVariable: "--font-sunset-gothic-pro",
      color: "#390A21",
      primaryFontWeight: "Regular",
    },
    bigText: {
      label: "Aa",
      fontVariable: "--font-sunset-gothic-pro",
      color: "#F26915",
    },
    secondary: {
      // fontFamily: "Inter Tight",
      // fontWeight: "Regular",
      // fontVariable: "--font-inter-tight",
      // color: "#FFFFFF",
      charactersColor: "#390A21",
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
