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
  label: "Case Study - DenSyte",
  title: "Where the world's rarest wildlife footage finds its next story.",
  subtitle:
    "A reverse marketplace and bidding platform connecting premium wildlife cinematographers with productions worldwide.",
  description: `DenSyte is a niche B2B/B2C marketplace for authentic wildlife, nature, and conservation stock footage. Unlike traditional stock platforms, DenSyte flips the model-buyers post what they need, and vetted cinematographers from across the world respond with proposals.
    <br/>
    <br/>
    iCodeLabs built the platform on Sharetribe Extended with fully custom bidding and review workflows, Mux-powered playback and secure delivery infrastructure, and a bespoke admin panel that extends Sharetribe's operations console.`,
  heroImage: "/assests/img/casestudy/densyte/Group 1686558818.png",
  cardBgColor: "#4A6741",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "Stock footage marketplaces typically work in one direction-browse, license, and download. DenSyte needed to reimagine this as a reverse marketplace where buyers lead with a brief and cinematographers pitch back.",
    "On top of that, listing footage from remote habitats required reliable upload and secure delivery infrastructure. iCodeLabs needed to make sure this workflow remained smooth at scale while preserving trust, review quality, and operations visibility.",
  ],
  link: "https://densyte.com/",
  linklabel: "www.densyte.com",
};

export const imgGallery = [
  {
    row: [
      {
        img: "/assests/img/casestudy/densyte/screen1.png",
        alt: "screen1",
        width: 688,
        height: 770,
      },
      {
        img: "/assests/img/casestudy/densyte/screen2.png",
        alt: "screen2",
        width: 574,
        height: 770,
      },
    ],
  },
  {
    img: "/assests/img/casestudy/densyte/screen3.png",
    alt: "screen3",
    width: 1274,
    height: 1187,
  },
  {
    img: "/assests/img/casestudy/densyte/screen4.png",
    alt: "screen4",
    width: 1274,
    height: 1106,
  },
];

export const techStackData = {
  title: "Tech Stack",
  color: "#DAA520",
  info: "The combination of usability, typography and colours creates a friendly and professional look.",
  techStack: [
    { layer: "Marketplace Platform", technology: "Sharetribe Extended" },
    { layer: "Frontend", technology: "React.js" },
    { layer: "Backend / APIs", technology: "Node.js" },
    { layer: "Video Delivery", technology: "Mux" },
    { layer: "Large File Storage", technology: "Dropbox & AWS S3" },
    { layer: "Search", technology: "Sharetribe Native" },
    { layer: "Payments", technology: "Stripe + Manual Payment Gateway" },
    { layer: "Admin", technology: "Custom Extended Console" },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Reverse Marketplace & Bidding Flow",
    description:
      "iCodeLabs built a fully custom transaction process on Sharetribe that inverts the sourcing journey. Buyers post a footage request-including species, behavior, location, technical specs, and timeline-and vetted cinematographers submit proposals with delivery plans and pricing. The buyer reviews bids, validates cinematographer profiles, and confirms through a structured escrow-style flow.",
  },
  {
    id: 2,
    title: "Mux Integration - Video Preview & Delivery",
    description:
      "Mux was integrated as the video infrastructure layer for previews and playback. Cinematographers upload footage and it is processed dynamically so buyers can review streamed clips before confirming final licenses. Ready-to-license footage can be delivered with secure signed URLs, reducing upload friction and preserving content control.",
  },
  {
    id: 3,
    title: "Dropbox & AWS S3 - Large File Handling",
    description:
      "Wildlife footage files are often several gigabytes. To ensure uninterrupted transfer and operations, iCodeLabs integrated both Dropbox and AWS S3 as delivery channels, allowing cinematographers to share large raw footage files reliably post-sale. The platform manages delivery confirmation automatically, triggering payment release upon buyer acknowledgment.",
  },
  {
    id: 4,
    title: "Custom Cinematographer Verification",
    description:
      "A bespoke verification workflow was built for the niche ecosystem of wildlife cinematography and high-value footage. Cinematographers submit profiles and field credentials that admins can review before activation, so buyers receive consistent quality and trust signals on DenSyte.",
  },
  {
    id: 5,
    title: "Custom Admin Panel - Extending Sharetribe Console",
    description:
      "Sharetribe's operator console was significantly extended with a custom admin panel called The DenSyte Team Console. This gives the DenSyte team a centralized operations layer beyond native tools-including cinematographer verification workflows, bid oversight, manual payment management, customer support insights, and dispute handling tools.",
  },
  {
    id: 6,
    title: "Manual Payment Support for Non-Stripe Countries",
    description:
      "Given deployment across remote production teams, many countries involved did not support Stripe directly. The platform includes fallback payment mechanisms for manual transfer routes, while keeping order states, escrow logic, and release flows aligned with the DenSyte ecosystem.",
  },
];

export const productGallary = [
  "/assests/img/casestudy/densyte/Frame 1984082880.png",
  "/assests/img/casestudy/densyte/Frame 1984082881.png",
  "/assests/img/casestudy/densyte/Group 1686558818.png",
];

export const highlightPt = [
  "Fully custom reverse marketplace with a bidding transaction process on Sharetribe",
  "Mux integration for adaptive video streaming, previews, and secure delivery",
  "Admin-managed cinematographer verification built outside Sharetribe's default user flow",
  "Extended operator console with custom admin tooling beyond Sharetribe native features",
  "Hybrid payment system supporting Stripe and manual bank transfers for global reach",
];

export const caseStudyCtaCardData = {
  title: "Ready to Build Your B2B Marketplace?",
  info: "DenSyte flipped the stock-footage model into a reverse marketplace where buyers post briefs and vetted cinematographers bid — with Mux-powered video previews, watermarked delivery, and Sharetribe-driven transactions. We design custom transaction flows for niche B2B marketplaces from $3,000. Fixed price. 90-day bug-free guarantee.",
  link: "/contact",
  linkLabel: "Book a Free Scoping Call",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
};

export const realStory = {
  avatar: "/assests/img/casestudy/densyte/owner.png",
  name: "DenSyte Team",
  founder: "Founding Team",
  info: `Working with iCodeLabs helped us transform a complex idea into a reliable global platform for wildlife footage sourcing, verification, and delivery.`,
};

export const themeContent = {
  title: "Modern fonts and dynamic colours of DenSyte",
  info: "Dark, cinematic, and premium - the aesthetic matches the content. Deep jungle tones + yellow accents create a bold visual language while preserving the system clarity needed for high-stakes asset exchange.",

  colors: [
    {
      id: 1,
      name: "Jungle Green",
      hex: "#1E3A2E",
      rgb: "",
      className: "jungleGreen",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "Mineral Green",
      hex: "#4B7141",
      rgb: "",
      className: "mineralGreen",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 3,
      name: "Orange Gold",
      hex: "#DAA520",
      rgb: "",
      className: "orangeGold",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 4,
      name: "Black Pearl",
      hex: "#111827",
      rgb: "",
      className: "blackPearl",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 5,
      name: "Gun Powder",
      hex: "#414652",
      rgb: "",
      className: "gunPowder",
      large: false,
      textColor: "#FFFFFF",
    },
  ],

  typography: {
    bgColor: "#111827",
    fontFamily: {
      label: "Playfair Display",
      fontVariable: "--font-player",
      color: "#FFFFFF",
      primaryFontWeight:'Medium',
    },
    bigText: {
      label: "Aa",
      fontVariable: "--font-player",
      color: "#DAA520",
    },
    secondary: {
      fontFamily: "Inter",
      fontWeight: "Regular",
      fontVariable: "--font-inter-tight",
      color: "#FFFFFF",
      charactersColor:"#fff",

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
