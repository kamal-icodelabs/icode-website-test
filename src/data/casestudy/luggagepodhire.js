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
  label: "Case Study - LuggagePodHire",
  title:
    "A marketplace where roof pod hire becomes a safer, more automated rental operation.",
  subtitle:
    "LuggagePodHire combines Sharetribe marketplace foundations with custom deposit handling, payout automation, booking reminders, and rental-specific transaction logic — built for pod owners and travellers.",
  description: `LuggagePodHire is a specialised peer-to-peer rental marketplace for luggage pods and roof-box travel equipment.
    <br/>
    <br/>
    icodelabs built the platform on Sharetribe Extended — but evolved it far beyond template defaults into a purpose-built pod-rental operating system. The platform features a custom booking transaction process, Stripe-powered security deposit flows with two distinct models for short and long hires, a MongoDB-backed operational ledger tracking all money movement, webhook-driven payment reconciliation, cron-driven provider payout automation, booking extension handling, post-rental additional fee collection, and scheduled reminder communications that keep the rental lifecycle moving from confirmation through to return.`,
  // heroImage: "",
  // cardBgColor: "#070505",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "Hiring a luggage pod is not the same as booking accommodation or purchasing a product. The platform needed to support flexible date-range booking windows, pickup and return coordination, two different deposit models for short and long hires, provider payout timing, refund handling, extension requests, and post-rental charge scenarios — all of which push well beyond Sharetribe's default booking capabilities.",
    "The codebase also needed an operational layer that could safely track money movement after checkout. That meant persisting transaction state outside Sharetribe, orchestrating Stripe events across transfers, payouts, and reversals, and scheduling customer communications at precisely the right moments in the booking lifecycle — tied to operational reality rather than static marketing sequences.",
  ],
  link: "https://luggagepodhire.com/",
  linklabel: "www.luggagepodhire.com",
  color: "#0AA9C5",
};

export const techStackData = {
  title: "Tech Stack",
  color: "#0AA9C5",
  info: "A rental-specific evolution of the Sharetribe stack — Flex SDK on the marketplace side, a custom Node.js operational backend, Stripe across the full money-movement lifecycle, and a MongoDB ledger that makes the platform a true pod-rental operating system.",
  techStack: [
    {
      layer: "Marketplace Platform",
      technology: "Sharetribe Extended + Flex SDK",
    },
    {
      layer: "Frontend",
      technology:
        "React 18, Redux Toolkit, React Router, React Final Form, SSR via @loadable/component",
    },
    {
      layer: "Backend / APIs",
      technology:
        "Node.js, Express, Passport, custom API routes, SSR server, cron workers",
    },
    {
      layer: "Payments",
      technology:
        "Stripe PaymentIntents, SetupIntents, transfers, payouts, refunds, webhook reconciliation",
    },
    { layer: "Operations Ledger", technology: "MongoDB + Mongoose" },
    { layer: "Email & Automation", technology: "SendGrid + node-cron" },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Custom Booking Flow for Pod Hire",
    description:
      "The marketplace keeps Sharetribe's booking foundation but adapts it entirely for physical equipment hire — with rental-specific transaction states, protected data handling, and UI behaviour calibrated for luggage pod rentals. Customers book over a date range, see a full cost breakdown before checkout, and move through delivery, return, and completion flows designed for physical equipment hire rather than a generic service booking template.",
  },
  {
    id: 2,
    title: "Security Deposit Logic — Two Models for Short and Long Hires",
    description:
      "A custom deposit model was implemented supporting two distinct operational modes based on hire duration. For shorter hires, the deposit is handled as a card hold — authorised at booking and released on clean return. For hires exceeding 29 days, the system shifts to an amount-charged-and-refunded model — with logic enforced in both the frontend booking UI and backend transaction event handlers to apply the correct deposit behaviour automatically based on booking length.",
  },
  {
    id: 3,
    title: "Manual and Automatic Deposit Collection Paths",
    description:
      "The platform supports both explicit customer-initiated deposit payment and automated deposit capture flows triggered later in the booking lifecycle. This gives the operator flexibility when a standard booking moves into a longer-hire scenario requiring stronger financial coverage — without forcing customers through an additional manual payment step where it can be avoided.",
  },
  {
    id: 4,
    title: "Stripe-Powered Money Movement Beyond Checkout",
    description:
      "Beyond basic checkout, the backend manages a full suite of Stripe financial operations: PaymentIntents for main bookings, SetupIntents for deposit card storage, security deposit capture and release, booking extension payments, provider transfers to connected Stripe accounts, downstream payouts, refund creation, payout reversals, and transfer reversals. This makes the system closer to a rental operations engine than a standard marketplace checkout — with every financial event tracked, reconciled, and auditable.",
  },
  {
    id: 5,
    title: "MongoDB Operations Ledger",
    description:
      "A custom MongoDB layer was built to record all marketplace transactions, transfers, payouts, refunds, deposit intents, remaining balances, and event history — giving the operator durable, retry-safe visibility into money flow outside Sharetribe's native transaction record alone. This separation of concerns is one of the project's defining architectural qualities: Sharetribe provides the marketplace primitives, while the custom MongoDB layer turns those primitives into a financial operations record with full audit history.",
  },
  {
    id: 6,
    title: "Webhook-Driven Payment Reconciliation",
    description:
      "Stripe webhooks are handled by the Node.js backend to reconcile transfer and payout reversal events in real time — updating the MongoDB ledger and triggering appropriate recovery flows when payment events occur outside the standard booking lifecycle. This ensures financial state in the platform always reflects actual Stripe state, even across failure scenarios.",
  },
  {
    id: 7,
    title: "Cron-Driven Provider Payout Automation",
    description:
      "Once provider transfers become eligible, cron-driven payout workers locate valid connected Stripe accounts, create payouts, and persist the payout outcome to the MongoDB ledger — closing the loop between customer payment, provider earnings, and back-office bookkeeping in a way the base Sharetribe template does not provide out of the box.",
  },
  {
    id: 8,
    title: "Scheduled Reminder & Recovery Email System",
    description:
      "The platform includes automated communications tied directly to booking lifecycle events — not static marketing sequences. Abandoned-booking reminder emails recover incomplete checkouts. Pickup reminders are scheduled for customers before their collection window. For long-hire bookings, return reminders are scheduled around the booking end date once deposit conditions are satisfied. All scheduling is handled via node-cron with SendGrid for transactional email delivery.",
  },
  {
    id: 9,
    title: "Extension Requests & Post-Rental Fee Handling",
    description:
      "The custom transaction event layer supports booking extensions and post-rental additional fee requests — covering late returns, extra usage periods, and damage-related outcomes that require a controlled financial path after the original booking has already been confirmed and paid. This handles the real-world edge cases that any physical equipment rental platform inevitably encounters.",
  },
  {
    id: 10,
    title: "Architecture Snapshot",
    description:
      "The frontend is a server-rendered React application using route-level data loading and hosted Sharetribe configuration assets for branding, layout, translations, access control, and listing and search configuration. The Node.js server handles SSR, secure API routes, Stripe webhooks, and operational middleware. A separate MongoDB layer stores internal transaction-state models supporting financial workflows and reminder scheduling beyond what Sharetribe tracks natively. This clean separation of concerns is the project's defining architectural quality — Sharetribe provides the marketplace primitives, the custom backend turns those primitives into a pod-rental operating system with payment orchestration, recovery flows, and service automation.",
  },
];

export const productGallary = [
  "/assests/img/casestudy/luggagepodhire/product1.png",
  "/assests/img/casestudy/luggagepodhire/product2.png",
  "/assests/img/casestudy/luggagepodhire/product3.png",
];

export const highlightPt = [
  "Sharetribe Extended evolved into a vertical rental-specific platform with custom booking states and transaction behaviour",
  "Dual security deposit model — card-hold pattern for short hires, charge-and-refund for hires exceeding 29 days",
  "Full Stripe orchestration layer: PaymentIntents, SetupIntents, transfers, payouts, refunds, reversals, and webhook reconciliation",
  "MongoDB operations ledger tracking remaining balances, transfers, payouts, refunds, and full audit history outside Sharetribe",
  "Cron-driven provider payout automation with connected Stripe account targeting and ledger persistence",
  "Scheduled lifecycle email system — abandoned booking recovery, pickup reminders, and return reminders tied to booking operational state",
  "Extension request and post-rental additional fee flows supporting real-world hire edge cases",
  "Hosted-asset architecture for runtime Sharetribe configuration, branding, translations, and listing/search settings",
];

export const caseStudyCtaCardData = {
  title: "Ready to Build Your Rental Marketplace?",
  info: "LuggagePodHire built a peer-to-peer roof-pod rental marketplace with a two-model security deposit engine, a MongoDB ledger, and Stripe-orchestrated payouts running on scheduled cron. Rental marketplaces start at $3,000. Fixed price. 90-day bug-free guarantee.",
  link: "/contact",
  linkLabel: "Book a Free Scoping Call",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
};

export const realStory = {
  avatar: "/assests/img/casestudy/image 1185.svg",
  name: "LuggagePodHire Team",
  founder: "Founding Team",
  info: `icodelabs evolved Sharetribe into a real pod-rental operating system — dual deposit logic, a Stripe and MongoDB-backed ledger, automated payouts, and lifecycle reminders that keep every hire moving from confirmation to return.`,
};

export const themeContent = {
  title: "Trust-led typography and travel-ready tones of LuggagePodHire",
  info: "Utility-led and trust-focused — the product experience prioritises clarity over ornament. Date-led booking flows, explicit deposit disclosures, action-oriented transaction states, and operational messaging that reduces uncertainty for both travellers and pod owners.",

  colors: [
    {
      id: 1,
      name: "Cerulean",
      hex: "#0AA9C5",
      rgb: "",
      className: "cerulean",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "Moonstone Blue",
      hex: "#68AABF",
      rgb: "",
      className: "moonstoneBlue",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 3,
      name: "Black",
      hex: "#050203",
      rgb: "",
      className: "black",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 4,
      name: "London Hue",
      hex: "#B0A2B9",
      rgb: "",
      className: "londonHue",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 5,
      name: "Alabaster",
      hex: "#0AA9C5",
      rgb: "",
      className: "alabaster",
      large: false,
      textColor: "#0AA9C5",
    },
  ],

  typography: {
    bgColor: "#F5F5F5",
    fontFamily: {
      label: "Inter",
      fontVariable: "--font-inter",
      color: "#050203",
      primaryFontWeight: "Semi-Bold",
    },
    bigText: {
      label: "Aa",
      fontVariable: "--font-inter",
      color: "#0AA9C5",
    },
    secondary: {
      fontFamily: "Inter",
      fontWeight: "Regular",
      fontVariable: "--font-inter",
      color: "#050203",
      charactersColor: "#050203",

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
