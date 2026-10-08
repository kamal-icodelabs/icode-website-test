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
  label: "Case Study - NowOffers",
  title: "The best deals, right where you are.",
  subtitle:
    "A full-stack Arabic-first marketplace for deals, services, and products — built on Sharetribe Extended across web, iOS, and Android with Salesforce CRM, Zoho accounts, custom ad management, and STC Pay integration for the Saudi market.",
  description: `NowOffers is a Saudi Arabian marketplace connecting consumers with local merchants offering deals, services, and products — from percentage discounts and BOGO offers to service bundles and appointment bookings.
    <br/>
    <br/>
    icodelabs built the complete platform on Sharetribe Extended, delivered across web, iOS, and Android with a rich enterprise integration layer: Salesforce CRM, Zoho accounting, Mixpanel analytics, a custom tracking dashboard, a bespoke ad management system, merchant subscription plans, and STC Pay — the Kingdom of Saudi Arabia's leading digital payment gateway. The platform operates primarily in Arabic with full English language support.`,
  // heroImage: "",
  // cardBgColor: "#FFD046",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "Building a deals and services marketplace for the Saudi market required solving several layers of complexity simultaneously. Six distinct deal types needed their own listing and transaction logic. The platform had to serve both consumers (location-based deal discovery) and merchants (booking management, offer creation, and performance tracking) — each with fundamentally different interfaces and workflows.",
    "On top of this, the client needed enterprise-grade integrations with Salesforce and Zoho, a custom ad system to monetise merchant visibility, subscription plans to gate merchant access tiers, and STC Pay as the primary payment gateway — all delivered in Arabic-first RTL across web and mobile.",
  ],
  link: "https://nowoffers.app/",
  linklabel: "www.nowoffers.app",
  color: "#FFD046",
};

export const imgGallery = [
  {
    row: [
      {
        img: "/assests/img/casestudy/nowoffers/screen1.png",
        alt: "screen1",
        width: 688,
        height: 770,
      },
      {
        img: "/assests/img/casestudy/nowoffers/screen2.png",
        alt: "screen2",
        width: 574,
        height: 770,
      },
    ],
  },
  {
    img: "/assests/img/casestudy/nowoffers/screen3.png",
    alt: "screen3",
    width: 1274,
    height: 1187,
  },
  {
    img: "/assests/img/casestudy/nowoffers/screen4.png",
    alt: "screen4",
    width: 1274,
    height: 1106,
  },
];

export const techStackData = {
  title: "Tech Stack",
  color: "#000",
  info: "An enterprise-grade Saudi marketplace stack — Sharetribe Extended layered with Salesforce CRM, Zoho accounting, custom analytics, a bespoke ad engine, and STC Pay, all delivered Arabic-first across web, iOS, and Android.",
  techStack: [
    { layer: "Marketplace Platform", technology: "Sharetribe Extended" },
    { layer: "Frontend", technology: "React.js" },
    { layer: "Mobile", technology: "iOS + Android (React Native)" },
    { layer: "Backend / APIs", technology: "Node.js" },
    { layer: "CRM", technology: "Salesforce" },
    { layer: "Accounting", technology: "Zoho" },
    { layer: "Analytics", technology: "Mixpanel" },
    { layer: "Custom Analytics", technology: "Custom Tracking Dashboard" },
    { layer: "Advertising", technology: "Custom Ad Management System" },
    { layer: "Payments", technology: "STC Pay" },
    { layer: "Localisation", technology: "Arabic (RTL) + English" },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Six Deal Type Listing System",
    description:
      "Six distinct offer types were built as configurable listing variants within the marketplace, each with its own pricing logic and display format: Percentage Discount (e.g. 60% off a service), Amount Discount (fixed amount off the listed price), Quantity Discount (price reduction based on volume purchased), Buy One Get One Free (BOGO transaction logic), Buy One Get One Half Price (custom pricing split at checkout), and Service Bundles (packaged multi-service offerings at a combined rate). Each deal type renders with appropriate UI treatment on the consumer-facing discovery layer, and merchants configure their offer type through a structured listing creation flow.",
  },
  {
    id: 2,
    title: "Location-Based Deal & Service Discovery",
    description:
      "A location-aware search and discovery engine was built — consumers enter a service name and location (or use current location) and the platform returns nearby deals, services, and products filtered by category, budget, and proximity. The discovery layer is split into dedicated sections for Deals, Services, and Products — each with its own category taxonomy and browsing filters.",
  },
  {
    id: 3,
    title: "Salesforce CRM Integration",
    description:
      "The platform was integrated with Salesforce as the operator's CRM backbone — syncing merchant accounts, leads, subscription status, and platform activity data into Salesforce for the NowOffers sales and account management team. This gives the operator a full commercial view of their merchant base, enabling proactive account management, upsell tracking, and churn prevention at scale.",
  },
  {
    id: 4,
    title: "Zoho Accounts Integration",
    description:
      "Zoho was integrated for accounting and financial management — syncing merchant subscription billing, transaction records, and payout data into Zoho's accounting layer. This eliminates manual reconciliation between the marketplace and the operator's financial systems, maintaining clean books across a high-volume transaction environment.",
  },
  {
    id: 5,
    title: "Mixpanel Analytics Integration",
    description:
      "Mixpanel was integrated across web and mobile for granular behavioural analytics — tracking consumer journeys from deal discovery through booking and conversion, and merchant behaviour across listing creation, offer performance, and subscription engagement. Event-level data feeds both the operator's internal decision-making and the custom tracking dashboard.",
  },
  {
    id: 6,
    title: "Custom Tracking Dashboard & Analytics",
    description:
      "A bespoke analytics dashboard was built for the NowOffers operator team — surfacing platform-wide metrics beyond what Mixpanel's standard dashboards provide. This includes merchant performance tracking, deal conversion rates by category and city, consumer engagement metrics, subscription revenue analytics, and ad campaign performance — all in a single operator-facing interface.",
  },
  {
    id: 7,
    title: "Custom Ad Management System",
    description:
      "A platform-native advertising system was built allowing merchants to promote their listings to featured placement across the consumer-facing discovery layer. The ad management system gives the NowOffers operator full control over inventory, pricing, placement rules, and campaign management — creating a significant additional revenue stream beyond subscription fees and transaction commissions.",
  },
  {
    id: 8,
    title: "Merchant Subscription Plans",
    description:
      "A subscription system was built gating merchant access to platform tiers — with different plan levels unlocking listing quotas, ad credits, analytics access, and featured placement eligibility. Subscription billing is managed through the platform with Zoho integration for accounting and Salesforce for commercial tracking.",
  },
  {
    id: 9,
    title: "STC Pay Integration",
    description:
      "STC Pay — the Saudi Telecom Company's digital wallet and payment gateway, and one of the most widely used payment methods in the Kingdom of Saudi Arabia — was integrated as the primary consumer payment method. This was essential for local market adoption, given STC Pay's dominant position in Saudi digital commerce over international card-based alternatives.",
  },
  {
    id: 10,
    title: "Arabic-First RTL Platform — Web, iOS & Android",
    description:
      "The entire platform was built Arabic-first with full RTL layout rendering across web, iOS, and Android. English language support was implemented as a secondary option — with all consumer flows, merchant dashboards, listing structures, and notification content localised across both languages on all three platforms.",
  },
];

export const productGallary = [
  "/assests/img/casestudy/nowoffers/product1.png",
  "/assests/img/casestudy/nowoffers/product2.png",
  "/assests/img/casestudy/nowoffers/product3.png",
];

export const highlightPt = [
  "Six configurable deal type listing variants with distinct pricing logic and display treatment",
  "Salesforce CRM integration syncing merchant accounts, subscriptions, and platform activity",
  "Zoho accounting integration for automated billing reconciliation and financial management",
  "Mixpanel event-level analytics across web, iOS, and Android",
  "Custom operator tracking dashboard surfacing deal, merchant, and subscription performance",
  "Platform-native ad management system with featured placement inventory and campaign controls",
  "Merchant subscription tier system with plan-gated feature access",
  "STC Pay integration as primary payment gateway for the Saudi market",
  "Full Arabic RTL implementation across web, iOS, and Android with English language support",
];

export const caseStudyCtaCardData = {
  title: "Ready to Build Your Service Booking Marketplace?",
  info: "NOW Offers launched a bilingual service booking marketplace for Saudi Arabia — slot-filling logic, merchant analytics, and custom payment integrations. We build for global markets. Fixed price from $3,000.",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
  link: "/contact",
  linkLabel: "Book a Free Call",
};

export const realStory = {
  avatar: "/assests/img/casestudy/nowoffers/owner.svg",
  name: "NowOffers Team",
  founder: "Founding Team",
  info: `icodelabs delivered the full NowOffers stack — six deal types, Salesforce, Zoho, ad management, and STC Pay — Arabic-first across web and mobile, exactly as the Saudi market needed.`,
};

export const themeContent = {
  title: "Bold typography and Saudi-forward colours of NowOffers",
  info: "Bold, commerce-forward, and Arabic-native — a design system built RTL from the ground up with vibrant offer cards, category-led navigation, and a deal-discovery UX that puts the best local offers front and centre. The merchant-facing dashboard balances Arabic-language clarity with data density.",

  colors: [
    {
      id: 1,
      name: "Bright Sun",
      hex: "#FFD046",
      rgb: "255, 208, 70",
      className: "brightSun",
      large: true,
      textColor: "#000000",
    },
    {
      id: 2,
      name: "Black",
      hex: "#000000",
      rgb: "0, 0, 0",
      className: "black",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 3,
      name: "Seashell",
      hex: "#EFEFF4",
      rgb: "239, 239, 244",
      className: "seashell",
      large: false,
      textColor: "#000000",
    },
    {
      id: 4,
      name: "Persian Red",
      hex: "#CF3628",
      rgb: "207, 54, 40",
      className: "persianRed",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 5,
      name: "Cream Brulee",
      hex: "#FFE7A2",
      rgb: "255, 231, 162",
      className: "creamBrulee",
      large: false,
      textColor: "#000000",
    },
  ],

  typography: {
    bgColor: "#EFEFF4",

    fontFamily: {
      label: "SF Pro",
      fontVariable: "--font-sfpro",
      color: "#1C2B4A",
      primaryFontWeight: "Bold",
    },

    bigText: {
      label: "Aa",
      fontVariable: "--font-sf-pro",
      color: "#CF3628",
    },

    secondary: {
      fontFamily: "Actor",
      fontWeight: "Regular",
      fontVariable: "--font-actor",
      color: "#1C2B4A",
      charactersColor: "#1C2B4A",

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

export const loopingScreenMobile = {
  row1: [
    "/assests/img/casestudy/nowapp/carousel/row1/1.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/2.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/3.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/4.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/5.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/6.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/7.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/8.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/9.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/10.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/12.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/13.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/14.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/15.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/16.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/17.webp",
    // repeat
    "/assests/img/casestudy/nowapp/carousel/row1/1.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/2.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/3.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/4.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/5.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/6.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/7.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/8.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/9.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/10.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/12.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/13.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/14.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/15.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/16.webp",
    "/assests/img/casestudy/nowapp/carousel/row1/17.webp",
  ],
  row2: [
    "/assests/img/casestudy/nowapp/carousel/row2/1.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/2.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/3.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/4.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/5.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/6.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/7.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/8.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/9.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/10.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/11.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/12.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/13.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/14.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/15.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/16.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/17.webp",
    // reapeat
    "/assests/img/casestudy/nowapp/carousel/row2/1.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/2.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/3.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/4.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/5.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/6.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/7.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/8.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/9.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/10.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/11.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/12.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/13.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/14.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/15.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/16.webp",
    "/assests/img/casestudy/nowapp/carousel/row2/17.webp",
  ],
};
