export const navLinks = [
  { label: "Overview", id: "overview" },
  { label: "The Challenge", id: "the-challenge" },
  { label: "Tech Stack", id: "tech-stack" },
  { label: "Brand Color & Typo", id: "brand-color-typo" },
  { label: "What We Built", id: "what-we-built" },
  { label: "Technical Highlights", id: "technical-highlights" },
  // { label: "Testimonials", id: "testimonials" },
];

export const heroData = {
  label: "Case Study - Sihmo",
  title: "Pictures worth taking. Pay only for the ones you love.",
  subtitle:
    "A reverse-flow photography marketplace built on Sharetribe — where photographers initiate the transaction on-location, customers are invited onto the platform post-shoot, and purchase happens only after viewing watermarked previews in a private gallery.",
  description: `Sihmo is a European street and travel photography marketplace built on an entirely inverted transaction model. Rather than customers booking photographers in advance, Sihmo photographers approach people at iconic locations — canals in Amsterdam, streets in Lisbon, parks in Seoul, boulevards in Paris — take spontaneous portraits, and then invite customers onto the platform after the shoot. Customers browse their private watermarked gallery, choose a photo package, pay via Stripe, and receive instant full-resolution downloads. No pre-booking. No upfront payment. No obligation.
    <br/>
    <br/>
    icodelabs built the complete platform on Sharetribe Extended with a custom photographer-initiated session invite flow, Cloudinary photo delivery with watermarking, package-based pricing, a GDPR consent mechanism, and an admin photographer verification system behind the Sihmo Badge.`,
  // heroImage: "/assests/img/casestudy/shimo-hero.jpg",
  // cardBgColor: "#FF7C14",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "Every standard marketplace starts with the customer. They search, discover, book, pay, and receive a service. Sihmo inverts this entirely — the photographer initiates the transaction in person, the customer doesn't know the platform exists until they receive an email invite, and payment only happens after the product has already been created. This required building a completely custom transaction process on Sharetribe that begins with a photographer-created session rather than a customer booking.",
    "The platform also needed watermarked photo previews that protect the photographer's work before purchase, a GDPR-compliant consent flow for processing personal photographic data, package-based pricing rather than per-image pricing, and a trust layer — the Sihmo Badge — that signals verified, professional photographers to members of the public being approached on the street.",
  ],
  link: "https://sihmo.com/",
  linklabel: "www.sihmo.com",
  color: "#F16319",
};

export const layoutGalleryOne = ["/assests/img/casestudy/shimo/layout-r1.png"];

export const fijiProductGallery = ["", "", "", ""];

export const layoutGalleryThree = [
  "/assests/img/casestudy/shimo/layout-r3-1.png",
  "/assests/img/casestudy/shimo/layout-r3-2.png",
];

export const shimoGalleryTwo = ["", "", "", ""];

export const imgGallery = [
  {
    row: [
      {
        img: "/assests/img/casestudy/shimo/screen1.png",
        alt: "screen1",
        width: 688,
        height: 770,
      },
      {
        img: "/assests/img/casestudy/shimo/screen2.png",
        alt: "screen2",
        width: 574,
        height: 770,
      },
    ],
  },
  {
    img: "/assests/img/casestudy/shimo/screen3.png",
    alt: "screen3",
    width: 1274,
    height: 1187,
  },
  {
    img: "/assests/img/casestudy/shimo/screen4.png",
    alt: "screen4",
    width: 1274,
    height: 1106,
  },
];

export const techStackData = {
  title: "Tech Stack",
  color: "#3F1113",
  info: "A reverse-flow photography stack — Sharetribe Extended layered with photographer-initiated session invites, Cloudinary-powered watermarking and private gallery delivery, package-based Stripe checkout, and an admin-governed photographer verification system.",
  techStack: [
    { layer: "Marketplace Platform", technology: "Sharetribe Extended" },
    { layer: "Frontend", technology: "React.js" },
    { layer: "Backend / APIs", technology: "Node.js" },
    { layer: "Photo Storage & Delivery", technology: "Cloudinary" },
    { layer: "Watermarking", technology: "Cloudinary Transformations" },
    { layer: "Payments", technology: "Stripe" },
    { layer: "Market", technology: "Europe" },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Photographer-Initiated Session Invite Flow",
    description:
      "The most technically distinctive feature of the entire build — and a first-of-its-kind transaction model on Sharetribe. Instead of a customer creating a booking, the photographer creates a Session Invite directly from the platform after completing a shoot. The invite captures the customer's first name, last name, email, a personal message, and session description. The platform sends a branded email to the customer with a unique session link — bringing them onto Sihmo for the first time, often minutes after their photo was taken. This entirely replaces Sharetribe's standard listing-browse-book flow with an outbound, photographer-driven onboarding mechanism.",
  },
  {
    id: 2,
    title: "GDPR Consent Flow",
    description:
      "When a customer opens their session link for the first time, a custom GDPR consent step was built into the transaction flow — before the customer can view any photos. The consent mechanism explicitly captures the customer's agreement to have their personal photographic data processed and stored by Sihmo and the photographer, in compliance with European data protection regulations. Consent is logged against the session record. Customers who do not consent cannot proceed — protecting both the platform and the photographer from GDPR exposure across their European markets.",
  },
  {
    id: 3,
    title: "Cloudinary Photo Storage & Private Gallery Delivery",
    description:
      "All session photos are uploaded by the photographer to Cloudinary, which handles storage, optimisation, and delivery. Each customer receives access to a private gallery scoped exclusively to their session — no cross-session access, no public listing. Photos are delivered via Cloudinary's CDN at preview resolution, with watermark transformations applied automatically before serving to the customer. The gallery experience is clean and personal — customers see their photos as if in a private digital darkroom.",
  },
  {
    id: 4,
    title: "Watermarked Preview System",
    description:
      "Cloudinary's image transformation layer was used to apply automatic watermarks across all preview images served to customers before purchase. Watermarks protect the photographer's work during the browse-and-decide phase — customers can evaluate composition, expression, and quality through the watermarked previews, but cannot extract usable images without completing a purchase. On payment confirmation, full-resolution unwatermarked files are unlocked for instant download.",
  },
  {
    id: 5,
    title: "Package-Based Pricing",
    description:
      "Rather than per-image pricing, Sihmo uses a package model — customers select from tiered photo bundles (e.g. 5 photos for a fixed price). Package options are configured per photographer or per session type, giving the platform flexibility across different shoot contexts and location tiers. Stripe processes the package payment at checkout, and Cloudinary delivers the corresponding number of full-resolution downloads immediately on payment confirmation.",
  },
  {
    id: 6,
    title: "Instant Full-Resolution Download",
    description:
      "On successful Stripe payment, the customer's selected photo package is unlocked for instant download — full-resolution, unwatermarked files served directly from Cloudinary. The entire post-payment experience is designed to be immediate and frictionless — reinforcing the \"if it clicks, you have it instantly\" promise central to Sihmo's product positioning.",
  },
  {
    id: 7,
    title: "Sihmo Badge — Photographer Verification",
    description:
      "A custom admin verification workflow was built for photographer onboarding. Photographers apply to join the platform and are reviewed and approved by the Sihmo team before receiving the Sihmo Badge — a visible verification mark displayed on photographer profiles. The badge is the primary trust signal for members of the public being approached by a Sihmo photographer in a public space. Without the badge, a photographer cannot create session invites or upload photos. This verification layer is foundational to Sihmo's ability to operate a street photography business model safely and at scale across European cities.",
  },
];

export const highlightPt = [
  "Completely inverted Sharetribe transaction process — photographer-initiated Session Invite replaces standard customer booking flow",
  "Custom session invite engine generating unique per-customer gallery access links delivered via email",
  "GDPR consent step built into the transaction flow — consent logged before any photo access is granted",
  "Cloudinary watermark transformation layer applied automatically to all preview images before serving",
  "Package-based pricing with Stripe checkout unlocking full-resolution Cloudinary downloads on payment",
  "Instant full-resolution photo delivery on payment confirmation — no manual fulfilment step",
  "Admin-governed photographer verification with Sihmo Badge required before session invite capability is activated",
  "Private per-session gallery architecture — zero cross-session data access",
];

export const realStory = {
  avatar: "/assests/img/casestudy/Sihmo_logo.png",
  name: "Sophie",
  founder: "Customer — Paris",
  info: `I hesitated at first — a stranger taking photos? But the Sihmo badge, the private gallery and the fair, transparent pricing won me over. Best portrait of me in years.`,
};

export const caseStudyCtaCardData = {
  title: "Ready to Build Your Service Marketplace?",
  info: "Sihmo inverted the photography booking model — photographers approach travellers, capture spontaneous portraits, then invite them onto Sharetribe to pick favourites from a watermarked Cloudinary gallery. We build service marketplaces with custom transaction flows from $3,000. Fixed price. 90-day bug-free guarantee.",
  link: "/contact",
  linkLabel: "Book a Free Scoping Call",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
};

export const themeContent = {
  title: "Editorial typography and minimal tones of Sihmo",
  info: "Clean, editorial, and light-touch — a platform that gets out of the way and lets the photography do the talking. The private gallery experience is minimal and personal, echoing a digital darkroom rather than a shopping cart. The homepage leads with authenticity — real testimonials from real moments captured in Amsterdam, Lisbon, Seoul, and Paris — positioning Sihmo as the antithesis of posed, pre-booked portrait photography. The Sihmo Badge and transparent pricing are foregrounded in the UX because trust is the entire product in a marketplace where the photographer finds you, not the other way around.",

  colors: [
    {
      id: 1,
      name: "Pumpkin Orange",
      hex: "#FF6713",
      rgb: "",
      className: "editorialInk",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "Dark Blue Grey",
      hex: "#223A46",
      rgb: "",
      className: "softSlate",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 3,
      name: "Sunglow",
      hex: "#FFC930",
      rgb: "",
      className: "highlightAmber",
      large: false,
      textColor: "#1A1A1F",
    },
    {
      id: 4,
      name: "Jungle Green",
      hex: "#31A38D",
      rgb: "",
      className: "paperCream",
      large: false,
      textColor: "#fff",
    },
    {
      id: 5,
      name: "Early Dawn",
      hex: "#FFFAEA",
      rgb: "",
      className: "mistGrey",
      large: false,
      textColor: "#1A1A1F",
    },
  ],

  typography: {
    bgColor: "#F7F7F7",
    fontFamily: {
      label: "Rubik",
      fontVariable: "--font-rubik",
      color: "#223A46",
      primaryFontWeight: "Semi-Bold",
    },
    bigText: {
      label: "Aa",
      fontVariable: "--font-rubik",
      color: "#FF6713",
    },
    secondary: {
      // fontFamily: "Inter",
      // fontWeight: "Regular",
      fontVariable: "--font-rubik",
      color: "#223A46",
      charactersColor: "#223A46",

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
