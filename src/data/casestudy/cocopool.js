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
  label: "Case Study - CocoPool",
  title:
    "The marketplace where private spaces become unforgettable celebrations.",
  subtitle:
    "Spain's leading peer-to-peer marketplace for renting private pools, gardens, and celebration spaces by the hour — built on Sharetribe Extended with hourly booking, capacity-based search, and instant confirmation.",
  description: `CocoPool is Spain's first and leading peer-to-peer marketplace for private pool and space rentals — connecting property owners with guests looking to celebrate birthdays, baby showers, team events, barbecues, and family gatherings in unique, private settings.
    <br/>
    <br/>
    icodelabs built the platform on Sharetribe Extended with a fully customised hourly booking engine, capacity-based search, Stripe payment integration, custom cancellation and refund logic, and city-based discovery across Spain's major markets. Available in Spanish and English, CocoPool is optimised for mobile-first event discovery and instant booking confirmation.`,
  heroImage: "/assests/img/casestudy/cocopool/hero.png",
  cardBgColor: "#E9F2F1",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "Short-term leisure rentals by the hour present booking complexity that standard Sharetribe flows aren't built to handle out of the box. CocoPool needed hourly time-slot selection layered onto a calendar reservation system, capacity-based filtering so guests could find spaces matching their group size, and instant booking confirmation without a host approval step.",
    "On top of that, the platform had to handle the trust dynamics of private property access and build a supply-side onboarding flow that made listing a pool as frictionless as possible for non-technical hosts across Spain.",
  ],
  link: "https://cocopool.com/",
  linklabel: "www.cocopool.com",
};

export const imgGallery = [
  {
    row: [
      {
        img: "/assests/img/casestudy/cocopool/screen1.png",
        alt: "screen1",
        width: 688,
        height: 770,
      },
      {
        img: "/assests/img/casestudy/cocopool/screen2.png",
        alt: "screen2",
        width: 574,
        height: 770,
      },
    ],
  },
  {
    img: "/assests/img/casestudy/cocopool/screen3.png",
    alt: "screen3",
    width: 1274,
    height: 1187,
  },
  {
    img: "/assests/img/casestudy/cocopool/screen4.png",
    alt: "screen4",
    width: 1274,
    height: 1106,
  },
];

export const techStackData = {
  title: "Tech Stack",
  color: "#F4B43A",
  info: "A Mediterranean leisure-rental stack — Sharetribe Extended layered with custom hourly booking, capacity-based search, and a multilingual front end built to scale city-by-city across Spain.",
  techStack: [
    { layer: "Marketplace Platform", technology: "Sharetribe Extended" },
    { layer: "Frontend", technology: "React.js" },
    { layer: "Backend / APIs", technology: "Node.js" },
    { layer: "Payments", technology: "Stripe" },
    { layer: "Search & Filters", technology: "Sharetribe Native" },
    { layer: "Authentication", technology: "Email + Google Login" },
    { layer: "Localisation", technology: "Spanish + English" },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Hourly Booking Engine",
    description:
      "A custom hourly booking flow was built on top of Sharetribe's reservation infrastructure — allowing guests to select a date, start time, duration in hours, and group size within a single booking flow. Hosts define their available time windows and hourly pricing per space, with the system calculating total cost automatically based on hours selected. Instant booking confirmation removes the approval friction typical of short-term rental platforms, getting guests from discovery to confirmed reservation as quickly as possible.",
  },
  {
    id: 2,
    title: "Capacity-Based Search & Filtering",
    description:
      "Sharetribe's native search was configured with capacity as a core filter dimension — guests enter their group size and the platform returns only spaces with sufficient capacity. Combined with location, date, time, and space type filters, the search experience is purpose-built for how people actually plan celebrations: starting with where, when, and how many people, not with browsing an unfiltered catalogue.",
  },
  {
    id: 3,
    title: "Two Listing Types — Pools & Gardens",
    description:
      "Two distinct space categories were configured as listing types within the marketplace — pools and gardens — each with their own custom fields, amenity tags, and browsing filters. Category-driven discovery across birthdays, BBQs, baby showers, team building, family days, gender reveals, private parties, weddings, communions, and film shoots gives guests intuitive entry points into the catalogue based on their occasion type rather than just space type.",
  },
  {
    id: 4,
    title: "Custom Refund & Cancellation Engine",
    description:
      "A custom cancellation and refund policy engine was built outside Sharetribe's default transaction handling — allowing the CocoPool operator to define time-based refund windows appropriate for the leisure rental market. Guests receive full or partial refunds depending on how far in advance they cancel, giving hosts predictable income protection while maintaining a fair policy for guests who need to change plans.",
  },
  {
    id: 5,
    title: "Host Onboarding & Listing Management",
    description:
      "A streamlined host onboarding flow was built enabling property owners to create listings, upload photos, define pricing, set availability, specify house rules, and publish their space quickly without technical expertise. The listing management dashboard gives hosts full visibility of bookings, calendar availability, and earnings — all within the Sharetribe operator-extended console.",
  },
  {
    id: 6,
    title: "City-Based Discovery Architecture",
    description:
      "The platform was structured for scalable city-by-city expansion across Spain — with dedicated landing pages and location-based search entry points for Barcelona, Madrid, Valencia, Sevilla, Tarragona, and Toledo. The architecture supports adding new cities without platform changes, enabling CocoPool's supply-side growth to pace with geographic expansion.",
  },
  {
    id: 7,
    title: "Google Login + Email Authentication",
    description:
      "Both Google OAuth and standard email authentication were implemented — reducing registration friction for guests booking on mobile, where Google login significantly accelerates the path from discovery to confirmed booking.",
  },
  {
    id: 8,
    title: "Spanish + English Multi-Language Support",
    description:
      "Full multilingual support was built for both Spanish-speaking locals and international visitors — with all platform flows, listing content structures, and booking confirmations localised across both languages.",
  },
];

export const productGallary = [
  "/assests/img/casestudy/cocopool/product1.png",
  "/assests/img/casestudy/cocopool/product2.png",
  "/assests/img/casestudy/cocopool/product3.png",
];

export const highlightPt = [
  "Custom hourly booking engine on Sharetribe — time-slot selection, hourly pricing, and instant confirmation",
  "Capacity-based search filtering ensuring guests find spaces matching their group size",
  "Two listing types (pools and gardens) with occasion-based category discovery across 13 celebration types",
  "Custom refund and cancellation policy engine with time-based refund window logic",
  "City-based discovery architecture supporting scalable expansion across Spanish markets",
  "Google Login + email authentication reducing mobile booking friction",
  "Full Spanish and English multilingual platform implementation",
  "Stripe payment integration with marketplace-standard host payout flows",
];

export const caseStudyCtaCardData = {
  title: "Ready to Build Your Rental Marketplace?",
  info: "CocoPool launched Spain's first peer-to-peer marketplace for private pool and event-space rentals — built on Sharetribe with an hourly booking engine, capacity-based search, and a custom refund engine for partial cancellations. Rental is one of our strongest verticals, with marketplaces starting at $3,000. Fixed price. 90-day bug-free guarantee.",
  link: "/contact",
  linkLabel: "Book a Free Scoping Call",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
};

export const realStory = {
  avatar: "/assests/img/casestudy/cocopool/owner.svg",
  name: "CocoPool Team",
  founder: "Founding Team",
  info: `icodelabs translated a Mediterranean leisure idea into a real marketplace — hourly bookings, instant confirmations, and a host onboarding flow that's let us scale CocoPool city-by-city across Spain.`,
};

export const themeContent = {
  title: "Mediterranean tones and celebratory typography of CocoPool",
  info: "Vibrant, summer-forward, and celebration-ready — a design system combining bold Mediterranean colour palettes, lifestyle photography, and spacious layouts that make private spaces feel aspirational and discoverable. The overall aesthetic communicates warmth, trust, and the feeling of a perfect day spent somewhere special.",

  colors: [
    {
      id: 1,
      name: "Pool Teal",
      hex: "#18AA98",
      rgb: "",
      className: "poolTeal",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "Sun Gold",
      hex: "#F4B43A",
      rgb: "",
      className: "sunGold",
      large: false,
      textColor: "#0B3F39",
    },
    {
      id: 3,
      name: "Sand",
      hex: "#F7EEDB",
      rgb: "",
      className: "sand",
      large: false,
      textColor: "#0B3F39",
    },
    {
      id: 4,
      name: "Deep Lagoon",
      hex: "#0B3F39",
      rgb: "",
      className: "deepLagoon",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 5,
      name: "Coral",
      hex: "#EF6C57",
      rgb: "",
      className: "coral",
      large: false,
      textColor: "#FFFFFF",
    },
  ],

  typography: {
    bgColor: "#f7f7f7",
    fontFamily: {
      label: "Arial",
      fontVariable: "--font-arial",
      color: "#19191A",
      primaryFontWeight: "Medium",
    },
    bigText: {
      label: "Aa",
      fontVariable: "--font-arial",
      color: "#F4B43A",
    },
    secondary: {
      fontFamily: "Inter",
      fontWeight: "Regular",
      fontVariable: "--font-inter",
      color: "#19191A",
      charactersColor: "#19191A",

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
