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
  label: "Case Study - PromoTix Reseller",
  title: "A marketplace where ticket resellers meet their audience directly.",
  subtitle:
    "A Sharetribe-powered reseller marketplace integrated with the PromoTix ticketing ecosystem via SSO — enabling verified resellers to list and sell event tickets directly to consumers.",
  description: `PromoTix is one of the world's leading zero-fee event ticketing platforms, helping over 38,000 event creators sell tickets without the punishing service fees of Eventbrite or Ticketmaster.
    <br/>
    <br/>
    icodelabs built the PromoTix Reseller platform — a dedicated Sharetribe Extended marketplace where verified ticket resellers can list and sell tickets directly to consumers, fully integrated with the core PromoTix platform via Single Sign-On. The result is a seamless two-sided reseller ecosystem that extends PromoTix's reach beyond direct event organiser sales into a structured, marketplace-governed reseller channel.`,
  heroImage: "/assests/img/casestudy/promotix/hero.webp",
  cardBgColor: "#E5E5E5",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "PromoTix needed a reseller channel that felt native to its existing platform ecosystem — where resellers already authenticated through PromoTix's core system — without forcing users to manage separate credentials or disconnected accounts.",
    "The reseller marketplace needed to be purpose-built for ticket commerce specifically, with listing flows, transaction processes, and buyer-facing pages tailored to the event ticketing context rather than generic Sharetribe defaults.",
  ],
  link: "https://promotix.com/",
  linklabel: "www.promotix.com",
  color: '#FF6900',
};

export const techStackData = {
  title: "Tech Stack",
  color: "#232927",
  info: "A focused Sharetribe-Extended marketplace stack engineered for event ticket commerce — tightly coupled to the core PromoTix platform via SSO while remaining architecturally independent.",
  techStack: [
    { layer: "Marketplace Platform", technology: "Sharetribe Extended" },
    { layer: "Frontend", technology: "React.js" },
    { layer: "Backend / APIs", technology: "Node.js" },
    { layer: "Authentication", technology: "SSO with PromoTix core platform" },
    { layer: "Payments", technology: "Stripe (via Sharetribe)" },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Sharetribe Extended Reseller Marketplace",
    description:
      "icodelabs built the reseller platform on Sharetribe Extended — delivering a fully customised two-sided marketplace where verified PromoTix resellers can create listings for event tickets and transact directly with consumers. The platform manages the full reseller-to-buyer flow: listing creation, discovery, purchase, and transaction completion — all within a marketplace governed by PromoTix as the operator.",
  },
  {
    id: 2,
    title: "SSO Integration with PromoTix Core Platform",
    description:
      "The reseller marketplace is fully integrated with the main PromoTix platform via Single Sign-On. Resellers authenticate once through their existing PromoTix credentials and gain seamless access to the reseller marketplace without managing a separate account or login. This SSO bridge keeps the two platforms tightly coupled from a user experience perspective while remaining architecturally independent — allowing each platform to evolve without breaking the other.",
  },
  {
    id: 3,
    title: "Custom Ticket Listing Flow",
    description:
      "The Sharetribe listing flow was customised for the specific requirements of ticket resale — capturing event name, date, venue, ticket category, quantity, seat information, and pricing. The listing experience was tailored to reflect the time-sensitive, inventory-constrained nature of event tickets, distinct from standard goods or service listings.",
  },
  {
    id: 4,
    title: "Reseller-to-Consumer Transaction Process",
    description:
      "A custom transaction process was configured on Sharetribe to handle the ticket resale flow — from listing discovery and purchase intent through to payment capture and ticket delivery confirmation. The process accounts for the event-specific constraints of ticket commerce, including availability windows and event date dependencies.",
  },
  {
    id: 5,
    title: "Operator-Governed Reseller Access",
    description:
      "The PromoTix team retains full operator control over which resellers are permitted to list on the marketplace — managing reseller verification, listing approval, and platform access through the Sharetribe operator console. This ensures the reseller channel maintains the quality and trust standards PromoTix has built with its event creator community.",
  },
];

export const productGallary = [
  "/assests/img/casestudy/promotix/product1.png",
  "/assests/img/casestudy/promotix/product2.png",
  "/assests/img/casestudy/promotix/product3.png",
];

export const highlightPt = [
  "Sharetribe Extended marketplace purpose-built for the event ticket resale vertical",
  "SSO integration bridging the reseller marketplace with the core PromoTix platform — single credential access across both systems",
  "Custom ticket listing flow capturing event-specific inventory fields beyond standard Sharetribe listing defaults",
  "Operator-governed reseller verification and access control via Sharetribe console",
  "Stripe payment processing via Sharetribe for consumer-facing ticket purchases",
];

export const caseStudyCtaCardData = {
  title: "Ready to Build Your Booking or Events Marketplace?",
  info: "Promotix needed event ticketing, reseller flows, and multi-tier commission logic — all delivered on time. Booking and events marketplaces start at $3,000. Sharetribe Vetted Expert Partner.",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
  link: "/contact",
  linkLabel: "Book a Free Call",
};

export const realStory = {
  avatar: "/assests/img/casestudy/promotix/owner.svg",
  name: "PromoTix Team",
  founder: "Founding Team",
  info: `It has been a pleasure working with Jay and the rest of the team on our PromoTix Reseller platform.`,
};

export const themeContent = {
  title: "Bold typography and event-forward colours of PromoTix",
  info: "Clean, event-forward, and on-brand with the PromoTix visual identity — the reseller marketplace feels like a natural extension of the core PromoTix product rather than a separate tool. Ticket cards, event imagery, and a structured listing layout make browsing and purchasing reseller tickets as intuitive as buying directly from an event organiser.",

  colors: [
    {
      id: 1,
      name: "Light Salmon Pink",
      hex: "#FF5F05",
      rgb: "",
      className: "lightsalonpink",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "Seal Brown",
      hex: "#1F2627",
      rgb: "",
      className: "sealBrown",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 3,
      name: "Iridium",
      hex: "#7B7B7B",
      rgb: "",
      className: "iridium",
      large: false,
      textColor: "#fff",
    },
    {
      id: 5,
      name: "Peach Sorbet",
      hex: "#F8B995",
      rgb: "",
      className: "peachSorbet",
      large: false,
      textColor: "#000",
    },
     {
      id: 4,
      name: "Ceramic",
      hex: "#F3F6F9",
      rgb: "",
      className: "ceramic",
      large: false,
      textColor: "#000000",
    },
  ],

  typography: {
    bgColor: "#F7F7F7",
    fontFamily: {
      label: "Overused Grotesk",
      fontVariable: "--font-overused-grotesk",
      color: "#000",
      primaryFontWeight: "Regular",
    },
    bigText: {
      label: "Aa",
      fontVariable: "--font-overused-grotesk",
      color: "#FF5F05",
    },
    secondary: {
      // fontFamily: "Overused Grotesk",
      // fontWeight: "Regular",
      // fontVariable: "--font-overused-grotesk",
      // color: "#FFFFFF",
      charactersColor: "#000",
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
