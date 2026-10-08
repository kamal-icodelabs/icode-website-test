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
  label: "Case Study - LuLocal",
  title: "The largest online community for product enthusiasts.",
  subtitle:
    "A peer-to-peer product marketplace built on Sharetribe Extended — extended with a fully custom coupon and promotions engine, discount code management, banner creation tools, and a redemption system that Sharetribe doesn't offer out of the box.",
  description: `LuLocal is a peer-to-peer marketplace for buying, selling, and renting products — connecting a community of product enthusiasts through a clean, category-driven discovery experience.
    <br/>
    <br/>
    icodelabs built the platform on Sharetribe Extended and delivered a rich custom promotions layer well beyond Sharetribe's native capability: a coupon code system, promotional listing tools, operator-controlled discount management, a coupon banner creation tool for campaigns, and a redemption engine tracking coupon usage and validity at checkout. The promotions infrastructure gives the LuLocal operator a powerful toolkit to drive demand, reward buyers, and incentivise sellers — all from within the marketplace.`,
  heroImage: "/assests/img/casestudy/lulocal/hero.webp",
  cardBgColor: "#BF5C3A",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "Sharetribe Extended has no native coupon, discount code, or promotional listing system. For LuLocal to run operator-led campaigns, seasonal promotions, and buyer incentive programmes, the entire promotions infrastructure had to be designed and built from scratch — integrated cleanly into the Sharetribe transaction flow so discounts applied correctly at checkout without breaking payment processing or seller payout calculations.",
    "The challenge was building a flexible promotions engine that gave the operator meaningful campaign control without requiring a developer every time a new promotion needed to go live.",
  ],
  link: "https://lulocal.com/",
  linklabel: "www.lulocal.com",
  color: '#BF5C3A'
};

export const imgGallery = [
  {
    row: [
      {
        img: "/assests/img/casestudy/lulocal/screen1.png",
        alt: "screen1",
        width: 688,
        height: 770,
      },
      {
        img: "/assests/img/casestudy/lulocal/screen2.png",
        alt: "screen2",
        width: 574,
        height: 770,
      },
    ],
  },
  {
    img: "/assests/img/casestudy/lulocal/screen3.png",
    alt: "screen3",
    width: 1274,
    height: 1187,
  },
  {
    img: "/assests/img/casestudy/lulocal/screen4.png",
    alt: "screen4",
    width: 1274,
    height: 1106,
  },
];

export const techStackData = {
  title: "Tech Stack",
  color: "#3A3D3A",
  info: "A peer-to-peer commerce stack — Sharetribe Extended layered with a fully custom promotions engine built on Node.js, integrated cleanly into Stripe checkout so discounts, payouts, and platform commissions stay aligned at every redemption.",
  techStack: [
    { layer: "Marketplace Platform", technology: "Sharetribe Extended" },
    { layer: "Frontend", technology: "React.js" },
    { layer: "Backend / APIs", technology: "Node.js" },
    { layer: "Payments", technology: "Stripe" },
    { layer: "Promotions Engine", technology: "Custom-built on Node.js + Sharetribe" },
    { layer: "Search & Filters", technology: "Sharetribe Native" },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Custom Coupon Code System",
    description:
      "A fully custom coupon code engine was built on top of Sharetribe's transaction flow. The operator creates coupon codes in the admin panel — configuring discount type (percentage or fixed amount), applicable listing categories, minimum order value, usage limits per code, per-user usage caps, and expiry dates. Buyers enter coupon codes at checkout and the discount is applied to the transaction before Stripe payment capture — with seller payout calculations adjusted accordingly to ensure commission integrity.",
  },
  {
    id: 2,
    title: "Promotional Listing System",
    description:
      "A promotional listing feature was built allowing the operator to designate specific listings as promoted — surfacing them in featured placement across the homepage, category pages, and search results. Promotional listings can be operator-curated (selected by the LuLocal team) or seller-purchased (sellers pay for boosted visibility). This gives the marketplace a flexible merchandising layer for driving traffic to priority listings without requiring frontend code changes.",
  },
  {
    id: 3,
    title: "Discount Code Management — Operator Dashboard",
    description:
      "A dedicated discount code management interface was built in the operator dashboard — giving the LuLocal team full control over the coupon ecosystem without developer involvement. The dashboard surfaces active codes, usage statistics per code, redemption history, and revenue impact. Codes can be created, paused, extended, or retired directly from the interface — making promotional campaign management a business operation rather than a technical one.",
  },
  {
    id: 4,
    title: "Coupon Banner Creation Tool",
    description:
      "A banner creation tool was built allowing the operator to design and publish promotional banners tied to active coupon campaigns — directly from the admin panel. Banners are configured with campaign messaging, coupon code display, visual styling, and placement targeting (homepage hero, category page header, search results). This eliminates the need for a designer or developer every time a new campaign needs visual promotion on the platform.",
  },
  {
    id: 5,
    title: "Redemption Engine — Tracking & Validation",
    description:
      "A coupon redemption engine was built to validate codes at checkout and track redemption data across the full usage lifecycle. The engine validates code eligibility in real time (expiry, usage limits, category restrictions, minimum order value), applies the discount to the transaction, records the redemption against the user and the code, and updates available usage counts — preventing overuse, double-dipping, and expired code application.",
  },
  {
    id: 6,
    title: "Buy, Sell & Rent Transaction Flows",
    description:
      "Standard Sharetribe marketplace transaction flows were configured for all three commerce modes — outright purchase, and time-based rental — giving sellers flexibility in how they list items and buyers options in how they acquire them. The coupon and promotions engine sits across all three transaction types.",
  },
];

export const productGallary = [
  "/assests/img/casestudy/lulocal/product1.png",
  "/assests/img/casestudy/lulocal/product2.png",
  "/assests/img/casestudy/lulocal/product3.png",
];

export const highlightPt = [
  "Fully custom coupon code system built on Sharetribe — percentage and fixed discounts with category targeting, usage caps, and expiry logic",
  "Promotional listing system with operator-curated and seller-purchased featured placement",
  "Operator discount code management dashboard — full campaign control without developer involvement",
  "Coupon banner creation tool for campaign visuals published directly from the admin panel",
  "Real-time redemption engine with eligibility validation, usage tracking, and double-use prevention",
  "Custom promotions layer integrated cleanly into Stripe payment capture and seller payout calculation",
];

export const caseStudyCtaCardData = {
  title: "Ready to Build Your Product Marketplace?",
  info: "LuLocal launched a peer-to-peer marketplace for buying, selling, and renting products — with a custom coupon engine, promotional listing controls, and an operator dashboard built on Sharetribe. Product marketplaces start at $3,000. Fixed price. 90-day bug-free guarantee.",
  link: "/contact",
  linkLabel: "Book a Free Scoping Call",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
};

export const realStory = {
  avatar: "/assests/img/casestudy/lulocal/owner.svg",
  name: "LuLocal Team",
  founder: "Founding Team",
  info: `icodelabs built the promotions toolkit that Sharetribe doesn't have — a coupon engine, banner builder, and operator dashboard that lets us run campaigns end-to-end without touching code.`,
};

export const themeContent = {
  title: "Warm, product-led tones and community typography of LuLocal",
  info: "Clean, community-forward, and product-led — a marketplace aesthetic that puts listings front and centre with a browsable, grid-based layout. The promotions layer is designed to feel native rather than bolted on — coupon banners, featured listings, and discount badge treatments are woven into the existing UI language without cluttering the discovery experience. The operator dashboard for coupon management prioritises clarity and speed — campaign creation in minutes, not hours.",
colors: [
  {
    id: 1,
    name: "Blaze Orange",
    hex: "#BF5C3A",
    rgb: "191, 92, 58",
    className: "blazeOrange",
    large: true,
    textColor: "#FFFFFF",
  },
  {
    id: 2,
    name: "Baltic Sea",
    hex: "#E1B23D",
    rgb: "225, 178, 61",
    className: "balticSea",
    large: false,
    textColor: "#FFFFFF",
  },
  {
    id: 3,
    name: "Star Dust",
    hex: "#E0D4C9",
    rgb: "224, 212, 201",
    className: "starDust",
    large: false,
    textColor: "#3A3D3A",
  },
  {
    id: 4,
    name: "White Lilac",
    hex: "#C4D4D2",
    rgb: "196, 212, 210",
    className: "whiteLilac",
    large: false,
    textColor: "#3A3D3A",
  },
  {
    id: 5,
    name: "Blue Koi",
    hex: "#3A3D3A",
    rgb: "58, 61, 58",
    className: "blueKoi",
    large: false,
    textColor: "#FFFFFF",
  },
],

typography: {
  bgColor: "#E7E5E5",

  fontFamily: {
    label: "Roc Grotesk Wide",
    fontVariable: "--font-roc-grotesk-heavy",
    color: "#3A3D3A",
    primaryFontWeight: "Heavy",
  },

  bigText: {
    label: "Aa",
    fontVariable: "--font-roc-grotesk-heavy",
    color: "#BF5C3A",
  },

  secondary: {
    fontFamily: "Roc Grotesk Medium",
    fontWeight: "Regular",
    fontVariable: "--font-roc-grotesk-medium",
    color: "#3A3D3A",
    charactersColor: "#3A3D3A",

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
