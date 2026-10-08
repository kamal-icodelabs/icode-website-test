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
  label: "Case Study - FijianHost",
  title: "The rhythm of village life, lived not observed.",
  subtitle:
    "Fiji's first homestay marketplace — connecting international travellers with verified local hosts across all 14 Fijian provinces, built on Sharetribe Extended with Kovena payment gateway integration and admin-governed host verification.",
  description: `FijianHost is Fiji's first peer-to-peer homestay marketplace — connecting international travellers with vetted Fijian families offering authentic village and coastal stays across all 14 provinces of Fiji.
    <br/>
    <br/>
    Built on Sharetribe Extended, icodelabs delivered a culturally grounded marketplace with a request-to-book transaction flow, province-based proximity search, admin-controlled host verification, and Kovena — Fiji's local payment gateway — integrated as the primary payment method. The platform's mission is direct community impact: most of each booking payment flows straight to the host family, supporting rural Fijian communities through tourism rather than through resort intermediaries.`,
  heroImage: "/assests/img/casestudy/fiji/fiji-hero.webp",
  cardBgColor: "#2A6E6A",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "Building a homestay marketplace for Fiji presents a uniquely localised set of technical and operational challenges. Standard international payment gateways — Stripe, PayPal — have limited or no coverage in Fiji, making a local payment integration non-negotiable for host payouts and guest payments.",
    "The platform needed to surface stays across 14 geographically distinct provinces through a discovery experience that felt intuitive to international travellers unfamiliar with Fijian geography. And the trust dynamics of a homestay platform — where guests sleep in private family homes — required a rigorous host verification layer before any listing could go live.",
  ],
  link: "https://fijianhost.com/",
  linklabel: "www.fijianhost.com",
  color: "#3F1113",
};

export const galleryOne = [
  "/assests/img/casestudy/fiji/Frame 1984083273.webp",
  "/assests/img/casestudy/fiji/Frame 1984083276.webp",
  "/assests/img/casestudy/fiji/Frame 1984083875.webp",
];
export const galleryTwo = [
  "/assests/img/casestudy/fiji/Frame 1984083274.webp",
  "/assests/img/casestudy/fiji/Frame 1984083277.webp",
];

export const techStackData = {
  title: "Tech Stack",
  color: "#3F1113",
  info: "A Pacific Island homestay stack — Sharetribe Extended layered with Kovena's Fijian payment gateway, province-based proximity search, and operator-governed host verification — built for direct community impact across all 14 provinces.",
  techStack: [
    { layer: "Marketplace Platform", technology: "Sharetribe Extended" },
    { layer: "Frontend", technology: "React.js" },
    { layer: "Backend / APIs", technology: "Node.js" },
    { layer: "Payments", technology: "Kovena (Fijian Payment Gateway)" },
    {
      layer: "Search & Discovery",
      technology: "Sharetribe Native Proximity Search",
    },
    { layer: "Analytics", technology: "Google Tag Manager + GA4" },
    { layer: "Market", technology: "Fiji (English GB)" },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Kovena Payment Gateway Integration",
    description:
      "The most technically significant element of the build. Kovena is Fiji's local payment gateway — essential for a platform paying out to Fijian host families who cannot receive international Stripe transfers. icodelabs integrated Kovena into the Sharetribe transaction flow, replacing the standard Stripe layer with Kovena's payment processing for guest booking payments and host payouts. This makes FijianHost one of very few Sharetribe marketplaces globally built on a Pacific Island payment infrastructure — and ensures the platform's community impact model actually works in practice, with earnings reaching rural host families directly.",
  },
  {
    id: 2,
    title: "Request-to-Book Transaction Flow",
    description:
      "A request-to-book flow was configured on Sharetribe — guests select dates and submit a booking request, hosts review and approve or decline, and payment is captured only upon host confirmation. This approval-first model is appropriate for the intimate homestay context — hosts are inviting guests into their family home, and the request flow gives them full control over who they accept. It also gives the platform time to surface any guest verification flags before a booking is confirmed.",
  },
  {
    id: 3,
    title: "Province-Based Proximity Search & Discovery",
    description:
      "All 14 Fijian provinces — Ba, Bua, Cakaudrove, Kadavu, Lau, Lomaiviti, Macuata, Nadroga-Navosa, Naitasiri, Namosi, Ra, Rewa, Serua, Tailevu, and Rotuma — were configured as browsable discovery filters using Sharetribe's native proximity search with geographic bounding boxes per province. The homepage features a curated province carousel with photographic cards linking directly to province-filtered search results — making it easy for international travellers to explore Fiji by region without knowledge of local geography.",
  },
  {
    id: 4,
    title: "Admin Host Verification",
    description:
      'A mandatory admin verification workflow was built for all host registrations. New hosts submit their profile and listing for review — the FijianHost team verifies the property, confirms the host\'s identity, and approves listings before they go live. No unverified listings are visible to guests, maintaining the trust and safety standard the platform\'s "Taukei Promise" to hosts and "Vulagi Promise" to guests is built on.',
  },
  {
    id: 5,
    title: "Google Tag Manager & GA4 Analytics",
    description:
      "Google Tag Manager was integrated across the platform with GA4 configured for full conversion tracking — covering search behaviour, listing views, booking requests, and confirmation events. This gives the FijianHost operator data-driven insight into how international travellers discover and book stays, enabling ongoing optimisation of the province discovery experience and booking funnel.",
  },
];

export const fijiGallaryOne = [
  "/assests/img/casestudy/fiji/Frame 1984083269.webp",
  "/assests/img/casestudy/fiji/Frame 1984083271.webp",
  "/assests/img/casestudy/fiji/Frame 1984083272.webp",
];

export const highlightPt = [
  "Kovena Fijian payment gateway integration replacing standard Stripe — enabling local host payouts across all 14 Fijian provinces",
  "Request-to-book transaction flow with host approval before payment capture",
  "Province-based geographic discovery using Sharetribe native proximity search with bounding box configuration for all 14 Fijian provinces",
  "Admin host verification workflow — no listing goes live without operator approval",
  "Google Tag Manager + GA4 full funnel conversion tracking across search, listing view, and booking events",
  "One of very few Sharetribe marketplaces globally built on Pacific Island payment infrastructure",
];

export const caseStudyCtaCardData = {
  title: "Ready to Build Your Rental Marketplace?",
  info: "Fijianhost launched a rental marketplace for Fiji tourism — availability calendars, damage deposits, and multi-currency payments on Sharetribe. Rental is one of our strongest verticals. Fixed price from $3,000.",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
  link: "/contact",
  linkLabel: "Book a Free Call",
};

export const themeContent = {
  title: "Warm earthy tones and community typography of FijianHost",
  info: "Warm, culturally immersive, and community-first — deep earthy tones, village photography, and a typographic system that communicates belonging rather than transactional hospitality. The province carousel makes Fiji's geography feel navigable and inviting to international guests. The overall aesthetic is deliberately distinct from resort and hotel booking platforms — FijianHost is positioned as the antithesis of commercial tourism, and the design reflects that at every touchpoint.",

  colors: [
    {
      id: 1,
      name: "Dark Sienna",
      hex: "#3F1113",
      rgb: "",
      className: "darkSienna",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "Pinkish Orange",
      hex: "#FE7755",
      rgb: "",
      className: "pinkishOrange",
      large: false,
      textColor: "#fff",
    },
    {
      id: 3,
      name: "Dawn Pink",
      hex: "#F5EAE1",
      rgb: "",
      className: "coralSand",
      large: false,
      textColor: "#2A1610",
    },
    {
      id: 4,
      name: "Casal",
      hex: "#2A6E6A",
      rgb: "",
      className: "inkBlack",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 5,
      name: "Forget Me Not",
      hex: "#FDF0ED",
      rgb: "",
      className: "forestPalm",
      large: false,
      textColor: "#2A1610",
    },
  ],

  typography: {
    bgColor: "#F7F7F7",
    fontFamily: {
      label: "Instrument",
      fontVariable: "--font-instrumentsans",
      color: "#3F1113",
      primaryFontWeight: "Semi-Bold",
    },
    bigText: {
      label: "Aa",
      fontVariable: "--font-instrumentsans",
      color: "#3F1113",
    },
    secondary: {
      // fontFamily: "Inter",
      // fontWeight: "Regular",
      // fontVariable: "--font-instrumentsans",
      // color: "#FFFFFF",
      charactersColor: "#3F1113",

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

export const realStory = {
  avatar: "/assests/img/casestudy/fiji/owner.png",
  name: "FijianHost Team",
  founder: "Founding Team",
  info: `"icodelabs translated a community-impact vision into a Sharetribe marketplace that actually works in Fiji — Kovena payouts to host families, province-based discovery, and a verification layer that protects the trust at the heart of the homestay model."`,
};
