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
  label: "Case Study - Handyman Nomad",
  title: "Skilled hands on the move across Europe.",
  subtitle:
    "A pan-European services marketplace connecting nomadic craftsmen with customers across the EU — built on Sharetribe Extended with role-based landing pages, ad package monetisation, VAT-country commission logic, Plausible analytics, and a full blog and subscription infrastructure.",
  description: `Handyman Nomad is a pan-European marketplace connecting skilled tradespeople — plumbers, carpenters, electricians, roofers, welders, gardeners, and more — with customers and employers across the EU. The platform's defining concept is the nomadic craftsman: skilled workers who want to earn while exploring Europe, accepting room and board or salary as payment.
    <br/>
    <br/>
    icodelabs built the platform on Sharetribe Extended with an extensive layer of custom features — role-based user experiences, paid ad packages, listing analytics, report flows, VAT-aware commission logic, invoice generation, subscription management, blog infrastructure, and Plausible privacy-first analytics — making it one of the most feature-complete Sharetribe builds in icodelabs' portfolio.`,
  heroImage: "/assests/img/casestudy/handyman/hero.webp",
  cardBgColor: "#8B2B24",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "Building a pan-European skilled trades marketplace introduces complexity that domestic service platforms don't face. VAT rules differ by country and by customer type (consumer vs. business) — commission calculations had to reflect this accurately. Craftsmen listing their services across borders needed role-specific onboarding, profile structures, and homepage experiences distinct from employer-side users.",
    "The operator needed a monetisation model beyond standard Sharetribe commission — paid ad packages for boosted listing visibility, subscription plans for craftsmen, and a full invoicing view for admin. And the platform needed content marketing infrastructure — a blog system — to build organic reach across European markets.",
  ],
  link: "https://handymannomad.com/",
  linklabel: "www.handymannomad.com",
  color: "#F16319",
};

export const productGallery = [
  "/assests/img/casestudy/handyman/Frame 1984083877.webp",
  "/assests/img/casestudy/handyman/Frame 1984083878.webp",
  "/assests/img/casestudy/handyman/Frame 1984083879.webp",
  "/assests/img/casestudy/handyman/Frame 1984083880.webp",
];

export const galleryOne = [
  "/assests/img/casestudy/handyman/Listing Details Page.webp",
  "/assests/img/casestudy/handyman/Enquiry Details Page (No Form Submitted).webp",
  "/assests/img/casestudy/handyman/Search Listing.webp",
];

export const galleryTwo = [
  "/assests/img/casestudy/handyman/Group 1686559130.webp",
  "/assests/img/casestudy/handyman/Blog Details page - 2.webp",
  "/assests/img/casestudy/handyman/Group 1686559131.webp",
  "/assests/img/casestudy/handyman/Join as Handyman.webp",
];

export const techStackData = {
  title: "Tech Stack",
  color: "#8B2B24",
  info: "A pan-European trades marketplace stack — Sharetribe Extended layered with role-based UX, ad package monetisation, VAT-aware commission logic, blog infrastructure, and Plausible privacy-first analytics across all EU markets.",
  techStack: [
    { layer: "Marketplace Platform", technology: "Sharetribe Extended" },
    { layer: "Frontend", technology: "React.js" },
    { layer: "Backend / APIs", technology: "Node.js" },
    { layer: "Payments & Subscriptions", technology: "Stripe" },
    { layer: "Analytics", technology: "Plausible Analytics" },
    { layer: "Email", technology: "Transactional Email" },
    { layer: "Market", technology: "Pan-European (German primary locale)" },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Role-Based Landing Pages & User-Specific Homepage",
    description:
      "Two completely distinct platform experiences were built — one for craftsmen (providers) and one for customers/employers — with separate signup and login flows, role-based homepage content, and onboarding sequences tailored to each user type. Craftsmen see available jobs, profile completion prompts, and subscription options. Customers see available tradespeople, posting tools, and hiring guidance. Role-based routing ensures neither user type encounters interface elements irrelevant to their journey.",
  },
  {
    id: 2,
    title: "Custom Booking Flow",
    description:
      "The standard Sharetribe booking flow was customised for the skilled trades services context — supporting both fixed-price jobs and room-and-board arrangements where craftsmen accept accommodation alongside or instead of salary. The booking flow captures job type, location, duration, and compensation type — reflecting the nomadic, project-based nature of how these engagements actually work across European markets.",
  },
  {
    id: 3,
    title: "Ad Package Selection — Stripe Integration",
    description:
      'A paid advertising system was built allowing craftsmen and employers to purchase listing boost packages via Stripe Checkout. Boosted listings appear at the top of search results and in dedicated "Featured" sections across the platform. An admin dashboard was built for managing featured listing durations, active promotions, and payment records — giving the Handyman Nomad operator a direct monetisation channel beyond commission revenue.',
  },
  {
    id: 4,
    title: "Blog Infrastructure",
    description:
      'A full blog system was built within the Sharetribe platform — with authored articles, category tagging, and a dedicated blog index page. The blog serves dual purpose: SEO content targeting European tradespeople searching for nomadic work opportunities, and platform credibility through practical guides like "EU Survival Guide for Mobile Craftsmen" and "How to Create an Attractive Job Listing." Content is managed directly by the operator without developer involvement.',
  },
  {
    id: 5,
    title: "Listing View Analytics",
    description:
      "A custom analytics layer was built tracking view counts and interaction metrics per individual listing — giving craftsmen and employers visibility into how their listings are performing. View count data is displayed directly on listing cards and detail pages, helping providers understand which listings attract attention and optimise their content accordingly.",
  },
  {
    id: 6,
    title: "Report Listings System",
    description:
      "A community-driven listing report system was built — allowing users to flag inappropriate, fraudulent, or misleading listings for operator review. Reported listings enter an admin moderation queue with report reason, reporter details, and listing context — giving the Handyman Nomad team the tools to maintain platform quality and trust across a pan-European user base.",
  },
  {
    id: 7,
    title: "VAT Commission Logic — Country & Customer Type",
    description:
      "A custom VAT-aware commission calculation engine was built — applying the correct VAT rate to platform commission charges based on the customer's country and customer type (consumer vs. registered business). This is non-trivial across pan-European markets where VAT rates, B2B exemptions, and reverse charge rules vary significantly by jurisdiction. The engine ensures Handyman Nomad's commission billing is legally compliant across all EU markets from day one.",
  },
  {
    id: 8,
    title: "Invoice Generation & Admin Subscription View",
    description:
      "An invoice generation system was built producing transaction and subscription invoices for both craftsmen and employers — downloadable from their account dashboards. A dedicated admin subscription view was built into the operator console, giving the Handyman Nomad team full visibility of active subscriptions, billing status, plan types, and renewal dates across all users.",
  },
  {
    id: 9,
    title: "Airbnb-Style Rating & Review System",
    description:
      "A custom rating and review system was built with 5-star ratings, public written comments, and role-based review permissions — reviews can only be submitted after a confirmed and completed transaction. Ratings are visible on listing cards and provider profiles, building the trust signals that a pan-European marketplace for unknown tradespeople critically depends on.",
  },
  {
    id: 10,
    title: "Inbox Customisation",
    description:
      "The Sharetribe native inbox was extended with job-specific context — message threads display the listing title and user role of each participant, conversations can be marked as Job Offer, Inquiry, or Closed, and a message subject or job ID is attached to each thread. This transforms the inbox from a generic messaging tool into a structured job management interface.",
  },
  {
    id: 11,
    title: "Curated Listing Carousels",
    description:
      "Custom listing carousels were built on the homepage pulling dynamically from the backend — Top Rated craftsmen, Popular in Your Area, and Recently Posted listings. Each carousel auto-fetches from Sharetribe's search layer using custom criteria, keeping the homepage content live, relevant, and location-aware without manual curation.",
  },
  {
    id: 12,
    title: "Map View Refinements",
    description:
      "The Sharetribe map view was customised with trade-specific custom marker icons (wrench icons for handyman listings), listing hover effects on map cards, and improved mobile UX for map-based browsing — making location-aware craftsman discovery more intuitive across both desktop and mobile.",
  },
  {
    id: 13,
    title: "Plausible Analytics Integration",
    description:
      "Plausible — a lightweight, privacy-first, GDPR-compliant analytics tool — was integrated across all public-facing pages. Page view tracking, button click events, and conversion goals were configured, giving the Handyman Nomad team actionable platform insights without the privacy compliance overhead of Google Analytics across EU markets.",
  },
];

export const highlightPt = [
  "Role-based platform architecture — distinct landing pages, signup flows, homepages, and onboarding for craftsmen and employers",
  "Custom booking flow supporting both salary and room-and-board compensation arrangements",
  "Paid ad package system with Stripe Checkout, boosted listing placement, and admin management dashboard",
  "VAT-aware commission calculation engine applying correct rates by country and customer type across EU markets",
  "Invoice generation system for transactions and subscriptions with admin subscription management view",
  "Custom listing view analytics tracking per-listing interaction metrics surfaced to providers",
  "Community listing report system with admin moderation queue",
  "Airbnb-style rating and review system with role-based post-transaction permissions",
  "Extended inbox with job ID, message classification (offer/inquiry/closed), and role/listing context display",
  "Dynamically fetched curated carousels — Top Rated, Popular in Your Area, Recently Posted",
  "Custom map markers and hover effects with improved mobile map UX",
  "Plausible privacy-first analytics with GDPR-compliant page and event tracking",
  "Blog infrastructure built within Sharetribe for operator-managed SEO content",
];

export const caseStudyCtaCardData = {
  title: "Ready to Build Your Service Marketplace?",
  info: "Handyman Nomad connects skilled tradespeople with customers across the EU — with role-based landing pages, a custom booking flow, ad-package monetisation, and VAT-aware commission logic on Sharetribe. Service marketplaces are one of our strongest verticals, from $3,000. Fixed price. 90-day bug-free guarantee.",
  link: "/contact",
  linkLabel: "Book a Free Scoping Call",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
};

export const realStory = {
  avatar: "/assests/img/casestudy/handyman-logo.png",
  name: "Handyman Nomad Team",
  founder: "Founding Team",
  info: `icodelabs built one of the most feature-complete Sharetribe platforms we've seen — role-based UX, VAT-aware commissions, ad packages, blog, analytics, the lot — all integrated cleanly so we can operate Handyman Nomad across every EU market from day one.`,
};

export const themeContent = {
  title: "Workshop tones and trade-forward typography of Handyman Nomad",
  info: "Trade-forward and European in character — bold typography, outdoor and workshop photography, and a structured layout that communicates reliability and skill. The dual-role homepage design is clean enough for first-time visitors to immediately self-identify as a craftsman or customer and proceed down the right path. The map view and carousel homepage give the platform a live, location-aware energy that generic job boards lack. The overall aesthetic positions Handyman Nomad as a trusted, professional community rather than a gig economy platform.",

  colors: [
    {
      id: 1,
      name: "Papaya Orange",
      hex: "#F16319",
      rgb: "",
      className: "papaya",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "Brown Derby",
      hex: "#502F10",
      rgb: "",
      className: "brown",
      large: false,
      textColor: "#fff",
    },
    {
      id: 3,
      name: "Vivid Auburn",
      hex: "#8B2B24",
      rgb: "",
      className: "vivid",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 4,
      name: "Deep Sea Blue",
      hex: "#005983",
      rgb: "",
      className: "deep",
      large: false,
      textColor: "#fff",
    },
    {
      id: 5,
      name: "Floral White",
      hex: "#FEF9EF",
      rgb: "",
      className: "floral",
      large: false,
      textColor: "#050203",
    },
  ],

  typography: {
    bgColor: "#F7F7F7",
    fontFamily: {
      label: "Unbounded",
      fontVariable: "--font-unbounded",
      color: "#502F10",
      primaryFontWeight: "Semi-Bold",
    },
    bigText: {
      label: "Aa",
      fontVariable: "--font-unbounded",
      color: "#F16319",
    },
    secondary: {
      fontFamily: "Geist",
      fontWeight: "Regular",
      fontVariable: "--font-geist",
      color: "#502F10",
      charactersColor: "#502F10",

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
