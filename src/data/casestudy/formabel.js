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
  label: "Case Study - Formabel",
  title: "Every training, right where you need it.",
  subtitle:
    "A Belgian marketplace connecting learners with certified trainers — built for multi-day course bookings, GDPR compliance, and the professional training market.",
  description: `Formabel is a Belgian French-language marketplace for professional training and courses — connecting learners with certified trainers across a wide range of disciplines.
    <br/>
    <br/>
    Built on Sharetribe Extended and tailored for the Belgian market, iCodeLabs delivered a feature-rich platform with multi-day course scheduling, dedicated trainer and learner dashboards, a redesigned listing experience, full mobile optimisation, and strict GDPR and Belgian VAT compliance built in from the ground up.`,
  heroImage: "/assests/img/casestudy/formabel/hero.webp",
  cardBgColor: "#091E52",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "Professional training courses are fundamentally different from single-session bookings — they span multiple days, have fixed total pricing, defined participant limits, and require trainers to present detailed course content to convert learners.",
    "Formabel also operates under strict Belgian and EU regulatory requirements: GDPR cookie compliance, Belgian company number validation, and a localised payment experience. Every element of the build needed to reflect the professional, trust-heavy nature of the training market.",
  ],
  link: "https://formabel.com/",
  linklabel: "www.formabel.com",
  color: "#091E52",
};

export const techStackData = {
  title: "Tech Stack",
  color: "#1A6BFF",
  info: "Engineered for the Belgian professional training market — combining marketplace flexibility, secure payments, and full GDPR compliance.",
  techStack: [
    { layer: "Marketplace Platform", technology: "Sharetribe Extended" },
    { layer: "Frontend", technology: "React.js" },
    { layer: "Backend / APIs", technology: "Node.js" },
    { layer: "Payments", technology: "Stripe" },
    { layer: "Compliance", technology: "GDPR Cookie Consent Manager" },
    { layer: "Language", technology: "French (Belgian Market)" },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Multi-Day Course Booking & Calendar",
    description:
      "A fully custom multi-day booking system was built on Sharetribe's transaction infrastructure. Trainers define courses spanning multiple consecutive days — the entire date range is blocked as a single unit. Learners book the full course at a fixed total price, with the system treating the multi-day period as a single, non-divisible transaction. Pricing does not recalculate per day, giving trainers full control over course economics. An improved calendar UX was delivered for both listing creation and learner date selection.",
  },
  {
    id: 2,
    title: "Trainer Dashboard",
    description:
      "A dedicated trainer dashboard was built providing a full operational view: bookings overview, upcoming sessions, earnings summary, and course listings management — giving trainers everything they need to run their training business from a single screen.",
  },
  {
    id: 3,
    title: "Learner Dashboard",
    description:
      "A parallel learner dashboard was built with booked sessions, upcoming training schedule, a favourites system (save and revisit courses), and full booking history — creating a professional, account-centric experience that encourages repeat engagement.",
  },
  {
    id: 4,
    title: "Redesigned Course Listing Page",
    description:
      'The course detail page was fully redesigned to improve clarity and conversion. The new layout features training images displayed prominently at the top, a key information block (location, training duration, daily hours, maximum participants), a trainer profile section, an "About This Training" section for objectives and content, a configurable "What\'s Included" section with amenity tags (WiFi, Parking, Certificate, Course Materials, Meals, Coffee Break), and a booking section with date selection and reservation CTA.',
  },
  {
    id: 5,
    title: "Mobile Optimisation",
    description:
      "A dedicated mobile optimisation pass was delivered across all key platform pages — homepage, search and browse, course listing, and checkout. The mobile experience was rebuilt to match the professional quality of the desktop product, given that a significant proportion of Belgian learners discover and book training on mobile devices.",
  },
  {
    id: 6,
    title: "Belgian VAT / TVA Number Validation",
    description:
      "Strict validation of the Belgian company number field was built into the trainer registration flow, enforcing the exact format BE0123456789. Plain text entries, incorrect lengths, and non-BE prefixes are rejected at registration — ensuring only legitimate Belgian business entities can register as training providers.",
  },
  {
    id: 7,
    title: "GDPR Cookie Consent Manager",
    description:
      "A fully compliant GDPR cookie consent banner was implemented with Accept, Reject, and Settings options — covering Google Analytics and all third-party tracking tools used on the platform. Built to meet Belgian and EU GDPR requirements, protecting both the operator and end users from regulatory exposure.",
  },
  {
    id: 8,
    title: "Password Visibility Toggle",
    description:
      "A show/hide password toggle was implemented across all password input fields — login, registration, and password reset — improving usability on both desktop and mobile, with full accessibility compliance.",
  },
];

export const highlightPt = [
  "Custom multi-day course booking on Sharetribe — full date range blocked as a single non-divisible transaction",
  "Dedicated trainer and learner dashboards built beyond Sharetribe's default profile pages",
  "Fully redesigned course listing page with configurable amenity tags and structured content blocks",
  "Belgian VAT/TVA number validation with strict BE format enforcement at registration",
  "GDPR-compliant cookie consent manager covering all third-party tracking",
  "Full mobile optimisation pass across homepage, search, listing, and checkout flows",
  "Stripe payment integration with Belgian market configuration",
];

export const caseStudyCtaCardData = {
  title: "Ready to Build Your Training Marketplace?",
  info: "Formabel launched a French-language training marketplace for Belgium — with multi-day course scheduling, trainer and learner dashboards, GDPR-compliant flows, and Belgian VAT validation on Sharetribe. Education and training marketplaces start at $3,000. Fixed price. 90-day bug-free guarantee.",
  link: "/contact",
  linkLabel: "Book a Free Scoping Call",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
};

export const realStory = {
  avatar: "/assests/img/blank-placeholder.svg",
  name: "Formabel Team",
  founder: "Founding Team",
  info: `iCodeLabs helped us launch a Belgian training marketplace that learners and trainers can trust — multi-day bookings, GDPR compliance, and local market fit, all delivered end-to-end.`,
};

export const themeContent = {
  title: "Modern fonts and dynamic colours of Formabel",
  info: "A crisp blue-led palette and a clean geometric type system give Formabel a trustworthy, professional feel. The lighter background tones keep the interface airy while the navy accents preserve clarity across course-heavy layouts.",

  colors: [
    {
      id: 1,
      name: "Clear Blue",
      hex: "#1A6BFF",
      rgb: "",
      className: "clearBlue",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "Downriver",
      hex: "#0F2A66",
      rgb: "",
      className: "downriver",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 3,
      name: "Catskill White",
      hex: "#EEF5FF",
      rgb: "",
      className: "catskillWhite",
      large: false,
      textColor: "#0F2A66",
    },
    {
      id: 4,
      name: "Mirage",
      hex: "#111725",
      rgb: "",
      className: "mirage",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 5,
      name: "Pale Blue Lily",
      hex: "#DAEAFF",
      rgb: "",
      className: "paleBlueLily",
      large: false,
      textColor: "#0F2A66",
    },
  ],

  typography: {
    bgColor: "#EEF5FF",
    fontFamily: {
      label: "Host Grotesk",
      fontVariable: "--font-hostGrotesk",
      color: "#091E52",
      primaryFontWeight: "Demi",
    },
    bigText: {
      label: "Aa",
      fontVariable: "--font-hostGrotesk",
      color: "#091E52",
    },
    secondary: {
      fontFamily: "Inter Tight",
      fontWeight: "Regular",
      fontVariable: "--font-inter-tight",
      color: "#091E52",
      charactersColor: "#091E52",
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

export const verticalCarousel = [
  "/assests/img/casestudy/formabel/marque/1.webp",
  "/assests/img/casestudy/formabel/marque/2.webp",
  "/assests/img/casestudy/formabel/marque/3.webp",
  "/assests/img/casestudy/formabel/marque/4.webp",
];
