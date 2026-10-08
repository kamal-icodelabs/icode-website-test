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
  label: "Case Study - Reparty",
  title: "A marketplace where party decor gets a second celebration.",
  subtitle:
    "Reduce. Reuse. ReParty. — A sustainable, AI-powered peer-to-peer marketplace for party decor rental and resale.",
  description:
    "ReParty is a US-based two-sided marketplace that lets party hosts buy, rent, and sell pre-loved party decor. IcodeLabs built the platform on Sharetribe Extended with deep customisation across transaction flows, AI-powered listing creation, multi-modal shipping, and intelligent search — delivering a marketplace experience far beyond Sharetribe's out-of-the-box capability.",
  heroImage: "/assests/img/casestudy/reparty/Reparty-hero.png",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    `ReParty needed to support two fundamentally different transaction
              types — outright sale and time-based rental — within a single
              marketplace.`,
    `On top of that, the client wanted AI-powered listing creation to
              lower the barrier for sellers, multi-modal shipping options,
              security deposits for rentals, and flexible cancellation policies.
              Each of these required going well beyond what Sharetribe provides
              out of the box.`,
  ],
  link: "https://letsreparty.com/",
  linklabel: "www.letsreparty.com",
};

export const imgGallery = [
  {
    row: [
      {
        img: "/assests/img/casestudy/reparty/screen1.png",
        alt: "screen1",
        width: 688,
        height: 770,
      },
      {
        img: "/assests/img/casestudy/reparty/screen2.png",
        alt: "screen2",
        width: 574,
        height: 770,
      },
    ],
  },
  {
    img: "/assests/img/casestudy/reparty/screen3.png",
    alt: "screen3",
    width: 1274,
    height: 1187,
  },
  {
    img: "/assests/img/casestudy/reparty/screen4.png",
    alt: "screen4",
    width: 1274,
    height: 1106,
  },
];

export const techStackData = {
  title: "Tech Stack",
  color: "#0075f2",
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
      layer: "Search",
      technology: "Algolia",
    },
    {
      layer: "Shipping",
      technology: "Shippo API",
    },
    {
      layer: "AI / ML",
      technology: "OpenAI API",
    },
    {
      layer: "Payments",
      technology: "Stripe (via Sharetribe)",
    },
    {
      layer: "Infrastructure",
      technology: "Docker containers deployed on AWS cloud",
    },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Dual Transaction Processes — Sale & Rental",
    description:
      "icodelabs configured two separate Sharetribe transaction processes within the same marketplace. Buyers can choose to purchase a decor item outright or rent it for a specified period. Each flow has its own booking logic, pricing rules, and post-transaction handling — all operating seamlessly from a single listing.",
  },
  {
    id: 2,
    title: "Multi-Day Rental Pricing",
    description:
      "Custom pricing logic was built to support flexible multi-day rental rates. Sellers can define per-day pricing, and the platform automatically calculates total rental cost based on the selected date range — with pricing tiers configurable per listing.",
  },
  {
    id: 3,
    title: "Security Deposit on Rentals",
    description:
      "A custom security deposit feature was implemented on top of Stripe, authorising a hold at booking time and releasing or capturing it based on item return status. This gave rental hosts confidence and brought the marketplace in line with professional rental platform standards.",
  },
  {
    id: 4,
    title: "Custom Refund & Cancellation Process",
    description:
      "A fully custom cancellation and refund policy engine was built — allowing the operator to define time-based refund windows (e.g. full refund before X days, partial after, none within Y hours). This operates independently of Sharetribe's default cancellation handling.",
  },
  {
    id: 5,
    title: "Three Shipping Methods — Shippo + Provider Shipping + Pickup",
    description:
      "icodelabs integrated Shippo to provide real-time carrier shipping rates and label generation for sellers who ship items. Alongside this, a custom provider-defined shipping option was built, letting sellers set their own delivery charges. A local pickup option was also supported — giving buyers and sellers three distinct fulfilment paths from a single checkout flow.",
  },
  {
    id: 6,
    title: "AI-Powered Listing Creation (OpenAI)",
    description:
      "The standout technical feature of the build. Sellers upload a photo of their party decor item and the OpenAI API analyses the image to automatically generate a listing title, description, suggested category, and relevant tags. This dramatically reduces listing friction and drives supply-side growth — especially for the ReParty Concierge use case.",
  },
  {
    id: 7,
    title: "AI Party Style Image Generation (OpenAI)",
    description:
      "Buyers can upload a photo of their venue or space and the platform uses OpenAI to generate a styled party inspiration image — showing how the space could look decorated. This adds an aspirational discovery layer unique to ReParty.",
  },
  {
    id: 8,
    title: "AI-Based Auto Tagging",
    description:
      "When a listing is created — whether manually or via the AI flow — OpenAI automatically assigns relevant searchable tags based on the item's description and image. This feeds directly into the Algolia search layer for accurate, intent-driven results.",
  },
  {
    id: 9,
    title: "Algolia Search with Tag-Based Filtering",
    description:
      "Sharetribe's default search was replaced with Algolia, enabling fast, faceted, tag-based search across the full decor catalogue. Buyers can filter by category, occasion, colour, style, and location — with results updating in real time.",
  },
  {
    id: 10,
    title: "Coupon Code System",
    description:
      "A custom discount and coupon code engine was built, allowing the ReParty operator to create and manage promotional codes with configurable discount types (percentage or fixed), expiry dates, and usage limits.",
  },
];

export const productGallary = [
  "/assests/img/casestudy/reparty/Frame 1984082880.png",
  "/assests/img/casestudy/reparty/Frame 1984082881.png",
  "/assests/img/casestudy/reparty/Group 1686558818.png",
];

export const highlightPt = [
  `Two independent transaction processes (sale + rental) coexisting in a single
Sharetribe marketplace`,
  `OpenAI integration for image-to-listing generation — a first-of-its-kind feature in
Sharetribe marketplaces`,
  `Shippo API integration with real-time rate calculation and label generation`,
  `Custom Stripe security deposit flow (authorise-hold-release pattern)`,
  `Algolia replacing native Sharetribe search with AI-fed tag indexing`,
  `Custom cancellation and refund policy engine outside Sharetribe's default
transaction flow`,
];

export const loopingScreen = {
  row1: [
    "/assests/img/casestudy/reparty/otherspages/image 342.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-3.png",
    "/assests/img/casestudy/reparty/otherspages/image 343.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-2.png",
    "/assests/img/casestudy/reparty/otherspages/Group 1410089090.png",
    "/assests/img/casestudy/reparty/otherspages/image 342.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-3.png",
    "/assests/img/casestudy/reparty/otherspages/image 343.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-2.png",
    "/assests/img/casestudy/reparty/otherspages/Group 1410089090.png",
  ],

  row2: [
    "/assests/img/casestudy/reparty/otherspages/image 344.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-1.png",
    "/assests/img/casestudy/reparty/otherspages/image 345.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12.png",
    "/assests/img/casestudy/reparty/otherspages/image 344.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-1.png",
    "/assests/img/casestudy/reparty/otherspages/image 345.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12.png",
  ],

  row3: [
    "/assests/img/casestudy/reparty/otherspages/image 346.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-5.png",
    "/assests/img/casestudy/reparty/otherspages/image 347.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-6.png",
    "/assests/img/casestudy/reparty/otherspages/Group 1410089090.png",
    "/assests/img/casestudy/reparty/otherspages/image 346.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-5.png",
    "/assests/img/casestudy/reparty/otherspages/image 347.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-6.png",
    "/assests/img/casestudy/reparty/otherspages/Group 1410089090.png",
    "/assests/img/casestudy/reparty/otherspages/image 346.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-5.png",
    "/assests/img/casestudy/reparty/otherspages/image 347.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-6.png",
    "/assests/img/casestudy/reparty/otherspages/Group 1410089090.png",
  ],

  row4: [
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-7.png",
    "/assests/img/casestudy/reparty/otherspages/image 348.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-8.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-9.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-10.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-11.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-12.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-7.png",
    "/assests/img/casestudy/reparty/otherspages/image 348.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-8.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-9.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-10.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-11.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-12.png",
  ],
  row5: [
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-13.png",
    "/assests/img/casestudy/reparty/otherspages/image 349.png",
    "/assests/img/casestudy/reparty/otherspages/image 350.png",
    "/assests/img/casestudy/reparty/otherspages/image 351.png",
    "/assests/img/casestudy/reparty/otherspages/iphone mockups12-13.png",
    "/assests/img/casestudy/reparty/otherspages/image 349.png",
    "/assests/img/casestudy/reparty/otherspages/image 350.png",
    "/assests/img/casestudy/reparty/otherspages/image 351.png",
  ],
};

export const caseStudyCtaCardData = {
  title: "Ready to Build Your Rental or Resale Marketplace?",
  info: "ReParty combined buy, sell, and rent flows in one marketplace — custom design, Stripe Connect, and a brand that matched their mission. Rental and product marketplaces start at $3,000. 90-day bug-free guarantee.",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
  link: "/contact",
  linkLabel: "Book a Free Call",
};

export const realStory = {
  avatar: "/assests/img/casestudy/reparty/owner.svg",
  name: "Jill Biancardi",
  founder: "Founder, Letsreparty",
  info: `Finally, a marketplace just for parties. I've been waiting for
            something like this — it makes party planning so much easier."
            "Everything I needed for my event in one place — and for way less
            than buying new."`,
};

export const themeContent = {
  title: "Modern fonts and dynamic colours of Reparty",
  info: "Editorial and aspirational — Playfair Display paired with DM Sans, a palette of blush, black, and warm neutrals. Photography-led layouts that feel more like a lifestyle brand than a classifieds marketplace.",

  colors: [
    {
      id: 1,
      name: "Mirage",
      hex: "#222222",
      rgb: "",
      className: "mirage",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "Light Rose",
      hex: "#F9C6C9",
      rgb: "",
      className: "lightRose",
      large: false,
      textColor: "#0B1B35",
    },
    {
      id: 3,
      name: "Pavlova",
      hex: "#DBC59E",
      rgb: "",
      className: "pavlova",
      large: false,
      textColor: "#0B1B35",
    },
    {
      id: 4,
      name: "Desert Storm",
      hex: "#F9F8F6",
      rgb: "",
      className: "desertStorm",
      large: false,
      textColor: "#0B1B35",
    },
    {
      id: 5,
      name: "Clam Shell",
      hex: "#D6B5A7",
      rgb: "",
      className: "clamShell",
      large: false,
      textColor: "#FFFFFF",
    },
  ],

  typography: {
    bgColor: "#F9F8F6",
    fontFamily: {
      label: "Playfair Display",
      fontVariable: "--font-player",
      color: "#001730",
      primaryFontWeight: "Medium",
    },
    bigText: {
      label: "Aa",
      color: "#001730",
      fontVariable: "--font-player",
    },
    secondary: {
      fontFamily: "DM Sans",
      fontVariable: "--font-dmsans",
      fontWeight: "Regular",
      color: "#001730",
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
