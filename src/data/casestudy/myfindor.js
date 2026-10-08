import { color } from "motion";

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
  label: "Case Study - MyFindor",
  title:
    "The marketplace connecting South Asian events with the right vendors.",
  subtitle:
    "A Bark-style lead generation marketplace built specifically for South Asian weddings and events in Canada — with proximity-based lead distribution, vendor subscription plans, culture-based discovery, and a guided customer inquiry flow on Sharetribe Extended.",
  description: `MyFindor is a Canada-based vendor discovery and lead generation marketplace purpose-built for the South Asian events market — serving Punjabi, Gujarati, Bengali, Pakistani, South Indian, Nepali, Sri Lankan, and Bangladeshi communities planning weddings, birthdays, and cultural celebrations.
    <br/>
    <br/>
    Operating as a Bark.com alternative for South Asian events, icodelabs built the platform on Sharetribe Extended with MongoDB for custom operational data, proximity-based lead distribution routing customer inquiries to the nearest qualified vendors, vendor subscription plans managing marketplace access, and SendGrid for automated lead notification emails. Vendors subscribe to receive leads; customers pay nothing to inquire.`,
  heroImage: "/assests/img/casestudy/findor/Group 1686559086.webp",
  cardBgColor: "#B25F87",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "Generic event marketplaces fail South Asian families because they don't understand the cultural specificity of these celebrations — a Punjabi wedding, a Bengali reception, and a Sri Lankan ceremony have entirely different vendor requirements, traditions, and aesthetic expectations.",
    "MyFindor needed to solve two problems simultaneously: help customers find vendors who genuinely understand their culture and event style, and give vendors a qualified lead pipeline worth paying a subscription for. The platform needed proximity-based routing to ensure leads reached vendors who could actually service the customer's location — not vendors across the country — while the inquiry flow needed to capture enough cultural and event-specific detail to make every lead genuinely actionable.",
  ],
  link: "https://myfindor.com/",
  linklabel: "www.myfindor.com",
  color: "#B25F87",
};

export const imgGallery = [
  {
    row: [
      {
        img: "/assests/img/casestudy/myfindor/screen1.png",
        alt: "screen1",
        width: 688,
        height: 770,
      },
      {
        img: "/assests/img/casestudy/myfindor/screen2.png",
        alt: "screen2",
        width: 574,
        height: 770,
      },
    ],
  },
  {
    img: "/assests/img/casestudy/myfindor/screen3.png",
    alt: "screen3",
    width: 1274,
    height: 1187,
  },
  {
    img: "/assests/img/casestudy/myfindor/screen4.png",
    alt: "screen4",
    width: 1274,
    height: 1106,
  },
];

export const techStackData = {
  title: "Tech Stack",
  color: "#8D4064",
  info: "A lead generation marketplace stack — Sharetribe Extended layered with a custom proximity-based lead distribution engine on MongoDB, vendor subscription billing on Stripe, and SendGrid lifecycle email built for the South Asian events market in Canada.",
  techStack: [
    { layer: "Marketplace Platform", technology: "Sharetribe Extended" },
    { layer: "Frontend", technology: "React.js" },
    { layer: "Backend / APIs", technology: "Node.js" },
    { layer: "Database", technology: "MongoDB" },
    { layer: "Search & Discovery", technology: "Sharetribe Native" },
    { layer: "Lead Distribution", technology: "Custom Proximity-Based Engine" },
    { layer: "Email Automation", technology: "SendGrid" },
    { layer: "Payments", technology: "Stripe (Vendor Subscriptions)" },
    { layer: "Market", technology: "Canada" },
    { layer: "Language", technology: "English" },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Sharetribe Extended Vendor Marketplace",
    description:
      "icodelabs built the platform on Sharetribe Extended — configured as a lead generation and vendor discovery marketplace rather than a transactional one. There are no customer-to-vendor payments on the platform; the commercial model runs entirely on vendor subscriptions, with customers using the platform free of charge to find and inquire with event professionals.",
  },
  {
    id: 2,
    title: "Proximity-Based Lead Distribution Engine",
    description:
      "The core technical differentiator of the build. When a customer submits an event inquiry, a custom proximity-based lead distribution engine built on MongoDB identifies and ranks qualified vendors by geographic distance from the event location. Leads are routed to the nearest vendors within the relevant service category — ensuring customers receive responses from professionals who can actually attend their event, and vendors receive leads within their serviceable area rather than irrelevant inquiries from across Canada.",
  },
  {
    id: 3,
    title: "Vendor Subscription Plans",
    description:
      "Vendors access the lead pipeline through a subscription model — paying a recurring fee to receive customer inquiries matched to their service category, speciality, and location. Stripe handles subscription billing with plan management, auto-renewal, and cancellation logic built into the operator dashboard. Subscriptions gate lead access — only active subscribers receive proximity-matched inquiries — creating a clean commercial model where vendor revenue directly funds the platform.",
  },
  {
    id: 4,
    title: "Culture-Based Vendor Discovery",
    description:
      "A culture-driven browsing layer was built allowing customers to filter vendors by the South Asian community tradition their event belongs to — Punjabi, Gujarati, Bengali, Pakistani, South Indian, Nepali, Sri Lankan, and Bangladeshi. This cultural filtering layer sits on top of Sharetribe's native search, surfacing vendors who have explicitly listed experience with specific cultural traditions — a differentiator no generic Canadian event marketplace offers.",
  },
  {
    id: 5,
    title: "Guided Customer Inquiry Flow",
    description:
      "A structured inquiry flow was built capturing the event details vendors need to give a meaningful response — event type, date, location, guest count, cultural tradition, and specific service requirements. This structured data collection improves lead quality significantly compared to open-ended contact forms, reducing the back-and-forth between customers and vendors and making each lead immediately actionable.",
  },
  {
    id: 6,
    title: "Vendor Business Profiles",
    description:
      "A rich vendor profile system was built on Sharetribe — covering service categories, cultural specialities, portfolio galleries, service area, pricing tiers, and customer reviews. Profiles serve as the vendor's public marketplace presence, discoverable through category browsing and culture-based search — giving vendors long-term visibility that compounds alongside their subscription-driven lead pipeline.",
  },
  {
    id: 7,
    title: "Category-Based Marketplace Browsing",
    description:
      "Sharetribe's native search was configured across all major South Asian event vendor categories — venues, decorators, photographers, DJs, caterers, mehndi artists, bridal makeup, entertainment, and event planners. Customers can browse by category, culture, location, and event type — creating multiple discovery paths into the vendor catalogue beyond search alone.",
  },
  {
    id: 8,
    title: "SendGrid Email Automation",
    description:
      "SendGrid was integrated for all transactional communications across the lead lifecycle — new lead notifications to vendors, inquiry confirmation to customers, subscription billing alerts, and vendor onboarding sequences. Automated email keeps both sides of the marketplace informed and engaged without requiring manual operator intervention at each step.",
  },
];

export const productGallary = [
  "/assests/img/casestudy/myfindor/product1.png",
  "/assests/img/casestudy/myfindor/product2.png",
  "/assests/img/casestudy/myfindor/product3.png",
];

export const highlightPt = [
  "Proximity-based lead distribution engine built on MongoDB — routing customer inquiries to qualified vendors by geographic distance from the event location",
  "Vendor subscription model on Stripe gating lead access — no customer-facing payments, pure lead generation marketplace",
  "Culture-based discovery layer across 8 South Asian community traditions built on Sharetribe native search",
  "Structured guided inquiry flow capturing cultural and event-specific data to improve lead quality and vendor response rates",
  "SendGrid automated email covering the full lead lifecycle — notification, confirmation, onboarding, and billing communications",
  "Sharetribe Extended configured as a lead generation marketplace rather than a transactional one — a non-standard platform architecture",
];

export const caseStudyCtaCardData = {
  title: "Ready to Build Your Events Marketplace?",
  info: "MyFindor connects South Asian event hosts with culture-aware vendors across Canada through a proximity-based lead distribution engine, vendor subscription plans, and culture-tagged discovery. Events and vendor marketplaces start at $3,000. Fixed price. 90-day bug-free guarantee.",
  link: "/contact",
  linkLabel: "Book a Free Scoping Call",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
};

export const realStory = {
  avatar: "/assests/img/casestudy/myfindor/owner.svg",
  name: "MyFindor Team",
  founder: "Founding Team",
  info: `icodelabs translated a culturally specific vision into a working lead generation marketplace — proximity-matched leads, culture-based discovery, and a vendor subscription model that's helped MyFindor build a qualified pipeline for South Asian event professionals across Canada.`,
};

export const themeContent = {
  title:
    "Warm, celebratory tones and culturally resonant typography of MyFindor",
  info: "Warm, celebratory, and culturally resonant — a design system that balances modern marketplace usability with the emotional weight of South Asian celebrations. Rich photography, warm colour palettes, and a structured vendor card layout that communicates trust and cultural familiarity. The inquiry flow is deliberately guided and conversational — designed to feel less like a form and more like talking to a wedding planner who understands exactly what you need.",
  colors: [
    {
      id: 1,
      name: "Tulip Pink",
      hex: "#B25F87",
      rgb: "",
      className: "tulipPink",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "Oslo Grey",
      hex: "#8D8D8D",
      rgb: "",
      className: "osloGrey",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 3,
      name: "Black",
      hex: "#c79e5e",
      rgb: "",
      className: "black",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 4,
      name: "Twilight Lavender",
      hex: "#000506",
      rgb: "",
      className: "twilightLavender",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 5,
      name: "Soft Peach",
      hex: "#000506",
      rgb: "",
      className: "softPeach",
      large: false,
      textColor: "#fff",
    },
  ],

  typography: {
    bgColor: "#F7F7F7",

    fontFamily: {
      label: "Inter",
      fontVariable: "--font-inter",
      color: "#000000",
      primaryFontWeight: "Bold",
    },

    bigText: {
      label: "Aa",
      fontVariable: "--font-inter",
      color: "#B25F87",
    },

    secondary: {
      // fontFamily: "Inter",
      // fontWeight: "Regular",
      // fontVariable: "--font-inter",
      // color: "#000000",
      charactersColor: "#000000",

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
