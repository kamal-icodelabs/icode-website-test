export const navLinks = [
  {
    label: "Overview",
    id: "overview",
  },
  {
    label: "The Challenge",
    id: "the-challenge",
  },
  {
    label: "Tech Stack",
    id: "tech-stack",
  },
  {
    label: "Brand Color & Typo",
    id: "brand-color-typo",
  },
  {
    label: "What We Built",
    id: "what-we-built",
  },
  {
    label: "Technical Highlights",
    id: "technical-highlights",
  },
  {
    label: "Testimonials",
    id: "testimonials",
  },
];

export const heroData = {
  label: "Case Study - GrooveBay",
  title: "The marketplace where vinyl finds its next listener.",
  subtitle:
    "A peer-to-peer vinyl record marketplace built for collectors, sellers, and music lovers across the Netherlands — with bidding, local shipping, and local payment built in.",
  description:
    "GrooveBay is a Dutch peer-to-peer marketplace for buying and selling vinyl records — from rare collector finds to classic albums and modern releases. Built on Sharetribe Extended, icodelabs delivered a market-ready platform with native genre filtering, a bidding transaction process, MyParcel shipping integration, iDEAL payment support, featured paid promotions, and full multi-lingual capability — tailored specifically for the Dutch and Belgian vinyl market.",
  heroImage: "/assests/img/casestudy/groove/Group 1686558817.png",
  cardBgColor: "#008080",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    `The European vinyl collector market is highly specific in its needs — local shipping
carriers, local payment methods, and a buying experience that supports both fixed-price purchases and negotiated deals. GrooveBay needed a platform that felt native to the Dutch market while running on a scalable marketplace foundation. `,
    `That meant integrating MyParcel for local parcel logistics, iDEAL for the Netherlands' dominant online payment method, and a bidding flow that lets buyers and sellers negotiate price before committing to a transaction.`,
  ],
  link: "https://groovebay.com/",
  linklabel: "www.groovebay.com",
  color: "#CB4C4E",
};

export const imgGallery = [
  {
    row: [
      {
        img: "/assests/img/casestudy/grooveBay/screen1.png",
        alt: "screen1",
        width: 688,
        height: 770,
      },
      {
        img: "/assests/img/casestudy/grooveBay/screen2.png",
        alt: "screen2",
        width: 574,
        height: 770,
      },
    ],
  },
  {
    img: "/assests/img/casestudy/grooveBay/screen3.png",
    alt: "screen3",
    width: 1274,
    height: 1187,
  },
  {
    img: "/assests/img/casestudy/grooveBay/screen4.png",
    alt: "screen4",
    width: 1274,
    height: 1106,
  },
];

export const techStackData = {
  title: "Tech Stack",
  color: "#CB4C4E",
  info: "Technologies and infrastructure used to build and scale the platform.",
  techStack: [
    {
      layer: "Marketplace Platform",
      technology: "Sharetribe Extended",
    },
    {
      layer: "Frontend",
      technology: "React.js",
    },
    {
      layer: "Backend / APIs",
      technology: "Node.js",
    },
    {
      layer: "Shipping",
      technology: "MyParcel API",
    },
    {
      layer: "Payments",
      technology: "Stripe + iDEAL",
    },
    {
      layer: "Search & Filters",
      technology: "Sharetribe Native",
    },
    {
      layer: "Localisation ",
      technology: "Multi-language (Dutch + English)",
    },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Bidding Transaction Process",
    description:
      "icodelabs built a custom bidding flow on Sharetribe Extended, allowing buyers to place offers on vinyl listings rather than purchasing at a fixed price. Sellers can accept, decline, or counter a bid — creating a negotiation layer that mirrors how vinyl collectors actually transact in the real world. This sits alongside a standard buy-now flow, giving sellers flexibility in how they list.",
  },
  {
    id: 2,
    title: "MyParcel Integration — Local Shipping for the Dutch Market",
    description:
      "MyParcel is the leading parcel logistics platform in the Netherlands, supporting carriers like PostNL and DHL. icodelabs integrated MyParcel into the GrooveBay checkout flow, enabling sellers to generate shipping labels directly from the platform, track shipments, and provide buyers with real-time delivery updates — all without leaving the marketplace.",
  },
  {
    id: 3,
    title: `Stripe + iDEAL Payment Integration`,
    description:
      `While Stripe handles the core payment infrastructure, iDEAL — the Netherlands' most widely used online payment method — was integrated as a primary checkout option. This was critical for local adoption, as a significant proportion of Dutch online shoppers prefer
iDEAL over card payments. The integration ensures GrooveBay feels like a native Dutch platform from checkout onwards.`,
  },
  {
    id: 4,
    title: `Featured Paid Promotions`,
    description:
      `A paid promotion system was built allowing sellers to boost their listings to featured placement across the marketplace homepage and search results. Sellers pay for featured status through the platform, creating an additional revenue stream for the GrooveBay
operator while giving serious sellers a tool to increase visibility for their rarest or most valuable records.`,
  },
  {
    id: 5,
    title: `Genre-Based Filtering — Sharetribe Native`,
    description:
      `Sharetribe's native custom fields and filter configuration were used to build genre-based browsing across Rock, Pop, Jazz, and other categories. This keeps the search infrastructure lean and maintainable while delivering the filtering experience vinyl
collectors expect when browsing a catalogue.`,
  },
  {
    id: 6,
    title: `Multi-Lingual Platform — Dutch & English`,
    description:
      `The platform was built with full multi-lingual support, with Dutch as the primary language for the core market and English available for international collectors and sellers. Content, UI labels, and listing flows are fully localised across both languages.`,
  },
];

export const productGallary = [
  "/assests/img/casestudy/grooveBay/Frame 1984082880.png",
  "/assests/img/casestudy/grooveBay/Frame 1984082881.png",
  "/assests/img/casestudy/grooveBay/Group 1686558818.png",
];

export const highlightPt = [
  `Custom bidding and negotiation transaction process on Sharetribe alongside
fixed-price buy-now`,
  `MyParcel API integration for local Dutch carrier shipping, label generation, and
tracking`,
  `Stripe + iDEAL integration delivering the Netherlands' preferred payment method
at checkout`,
  `Paid featured listing promotion system with operator-controlled placement`,
  `Sharetribe native genre filters configured for vinyl-specific browsing`,
  `Full Dutch/English multi-lingual support across all platform surfaces`,
];


export const caseStudyCtaCardData = {
  title: "Ready to Build Your Marketplace?",
  info: "Groovebay launched in 5 weeks — custom design, Stripe split payouts, and a community built around a shared passion. We build product and collectibles marketplaces from $3,000. Fixed price, no surprises.",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
  link: "/contact",
  linkLabel: "Book a Free Call",
};

export const realStory = {
  avatar: "/assests/img/casestudy/grooveBay/owner.svg",
  name: "Marcus Rivera",
  founder: "Founder & CEO, GrooveBay",
  info: `GrooveBay has transformed how independent artists connect with fans. Our performers report a 300% increase in reach compared to physical-only shows, and the virtual tipping feature has become a game-changer for artist income. We're building the future of live music.`,
};

export const themeContent = {
  title: "Modern fonts and dynamic colours of Groovbay",
  info: "Bold, music-forward, and tactile — warm tones, vinyl-inspired graphic elements, and a layout that puts record artwork front and centre. The aesthetic feels authentic to the collector community while remaining accessible to casual buyers discovering vinyl for the first time.",

  colors: [
    {
      id: 1,
      name: "Faded Red",
      hex: "#CB4C4E",
      rgb: "",
      className: "fadedRed",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "Deep Aqua",
      hex: "#008080",
      rgb: "",
      className: "electricTeal",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 3,
      name: "Baltic Sea",
      hex: "#1A1A1A",
      rgb: "",
      className: "balticSea",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 4,
      name: "Dark Orange",
      hex: "#FF9000",
      rgb: "",
      className: "darkOrange",
      large: false,
      textColor: "#fff",
    },
    {
      id: 5,
      name: "Floral White",
      hex: "#FFF9F2",
      rgb: "",
      className: "floralWhite",
      large: false,
      textColor: "#1A1A1A",
    },
  ],

  typography: {
    bgColor: "#F9F8F6",
    fontFamily: {
      label: "Host Grotesk",
      fontVariable: "--font-space-grotesk",
      color: "#28282B",
      primaryFontWeight: "Bold",
    },
    bigText: {
      label: "Aa",
      color: "#CD5C5C",
      fontVariable: "--font-space-grotesk",
    },
    secondary: {
      fontFamily: "Figtree",
      fontVariable: "--font-figtree",
      fontWeight: "Regular",
      color: "#28282B",
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
