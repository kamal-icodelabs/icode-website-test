export const navLinks = [
  { label: "Overview", id: "overview" },
  { label: "The Challenge", id: "the-challenge" },
  { label: "Tech Stack", id: "tech-stack" },
  { label: "Brand Color & Typo", id: "brand-color-typo" },
  { label: "What We Built", id: "what-we-built" },
  { label: "Technical Highlights", id: "technical-highlights" },
];

export const heroData = {
  label: "Case Study - Artrag",
  title: "Create, share, support — art.",
  subtitle:
    "A US multi-city art and handmade marketplace built on Sharetribe Extended — with three subscription tiers, tiered commission structures, admin-governed artist and gallery verification, city-specific sub-sites, legacy coupon onboarding, and a community art calendar.",
  description:
    "Artrag is a curated US marketplace connecting art lovers with independent artists, designers, and makers selling original artwork and handmade goods across paintings, sculpture, drawing, jewellery, clothing, and accessories. Built as an Etsy and Artmajeur alternative with a stronger community and city focus, icodelabs delivered the complete platform on Sharetribe Extended — three subscription tiers with differentiated commission structures, an admin-governed artist and gallery approval flow, a legacy coupon system for founder onboarding, city-specific sub-sites for Austin, New Orleans, Miami, San Francisco, and Los Angeles, medium-based artist discovery, featured gallery profiles, and a community art calendar for events and showcases.",
  // heroImage: "/assests/img/casestudy/artragat-hero.jpg",
  // cardBgColor: "#111827",
};

export const galleryImgs = [
  "/assests/img/casestudy/artragat/Group 1686559133.webp",
  "/assests/img/casestudy/artragat/Profile Page.webp",
];

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "Art marketplaces serve multiple distinct user types — independent artists, commercial galleries, and buyers — each with fundamentally different needs, interfaces, and commercial relationships with the platform. Artrag needed a tiered subscription and commission model that incentivised serious artists and galleries to upgrade while keeping the platform accessible to emerging creators.",
    "The city-specific sub-site architecture required filtering artists, galleries, listings, and events by city without running separate Sharetribe instances. And the platform needed a discovery experience modelled on Artmajeur's artist and gallery browsing — with medium-based filtering, rich artist profiles, and featured gallery pages — built entirely on Sharetribe's native infrastructure.",
  ],
  link: "https://artrag.icodestaging.in/",
  linklabel: "artrag.icodestaging.in",
  color: "#00A8D8",
};

export const techStackData = {
  title: "Tech Stack",
  color: "#00A8D8",
  info: "A curated marketplace stack built entirely on Sharetribe's native infrastructure — combining a React frontend, Node.js backend, and Stripe-powered subscriptions and tiered commissions for a multi-city US art and handmade marketplace.",
  techStack: [
    { layer: "Marketplace Platform", technology: "Sharetribe Extended" },
    { layer: "Frontend", technology: "React.js" },
    { layer: "Backend / APIs", technology: "Node.js" },
    { layer: "Payments & Subscriptions", technology: "Stripe" },
    { layer: "Search & Filters", technology: "Sharetribe Native" },
    { layer: "Market", technology: "United States (Multi-City)" },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "Three-Tier Subscription & Commission System",
    description:
      "A fully custom subscription model was built on Stripe governing three distinct user tiers, each with its own listing limits, commission rate, and feature access. The Artist Starter Plan is free with 15 artwork listings and a 30% platform commission. The Professional Artist Plan ($15/month) unlocks unlimited listings, Featured Artist placement on the homepage and city sub-sites, social promotion, and art calendar submissions at a 15% commission. The Featured Gallery Plan ($35/month) adds Featured Gallery placement, social promotion, and calendar access at a 20% commission. The tiered structure creates a direct financial incentive to upgrade — moving from Starter to Professional halves platform commission from 30% to 15%.",
  },
  {
    id: 2,
    title: "Legacy Coupon Onboarding System",
    description:
      "A custom coupon code system was built into both the Professional Artist Plan and Featured Gallery Plan signup flows, letting the Artrag operator invite a defined number of founding artists and galleries to join at no monthly charge as 'Legacy Artists' and 'Legacy Galleries.' Codes are entered at subscription checkout, overriding the monthly fee for the configured number of redemptions — enabling Artrag to seed the platform with quality supply before charging, without giving away unlimited free access.",
  },
  {
    id: 3,
    title: "Admin Artist & Gallery Verification Flow",
    description:
      "All artist and gallery applications go through a mandatory admin review before the account is activated. Applicants submit profile information, portfolio samples, and confirmation that works are original, and the Artrag team approves or declines before any listings can be published. Approved artists then upload listings freely without individual listing approval, while galleries must maintain active subscriptions to retain featured status. A 'Profile Under Review' state clearly communicates pending approval to applicants awaiting review.",
  },
  {
    id: 4,
    title: "City-Specific Sub-Site Architecture",
    description:
      "The platform was architected to support multiple city-specific sub-sites — ArtragATX (Austin), ArtragNOLA (New Orleans), ArtragSF (San Francisco), ArtragLA (Los Angeles), and ArtragMiami (Miami) — each filtering artists, galleries, listings, and calendar events by city within a single Sharetribe instance. A city selector dropdown on the main homepage routes users to the relevant sub-site, where the Artists tab shows only that city's artists and the Galleries tab surfaces both Featured Galleries (paying subscribers) and a curated City Gallery List maintained by the Artrag team regardless of subscription status.",
  },
  {
    id: 5,
    title: "Artist Discovery — Medium-Based Filtering",
    description:
      "An Artmajeur-style artist browsing page lists all approved artists with their name, bio, website, and portfolio of uploaded works. Artists can be filtered on a left-hand panel by medium — painting, sculpture, drawing, photography, digital art, jewellery, and more. Each artist profile page shows the full uploaded catalogue, bio, and website link, with an 'Add to Favourites' function for art lovers to follow the artists they discover.",
  },
  {
    id: 6,
    title: "Featured Gallery Profiles",
    description:
      "Featured Gallery profile pages were built with large hero imagery, gallery information (address, phone, website), and a full catalogue of all artwork the gallery represents — modelled on the Artmajeur gallery profile format. The Galleries tab on the homepage and city sub-sites surfaces these paid profiles in a prominent browsable grid, while the City Gallery List provides a standard directory entry (name, address, phone, website) for non-paying galleries.",
  },
  {
    id: 7,
    title: "Community Art Calendar",
    description:
      "A community art calendar was built for Professional Artist and Featured Gallery subscribers, letting them submit events, exhibitions, showcases, and openings to a shared calendar visible to all art lovers on the platform. The calendar functions both as a community engagement tool and as a subscriber benefit, giving paying artists and galleries a promotional channel beyond their listings.",
  },
  {
    id: 8,
    title: "Custom Navigation Architecture",
    description:
      "The homepage navigation was rebuilt around three primary tabs — Artwork, Artists, and Galleries — replacing Sharetribe's default category-led navigation. On city sub-sites, the Galleries tab includes a dual dropdown for Featured Galleries (paying subscribers) and the operator-curated City Gallery List. Each tab and dropdown filters content by city context when browsing a sub-site, defaulting to the full national catalogue on the main artrag.com domain.",
  },
];

export const highlightPt = [
  "Three-tier subscription model on Stripe with differentiated commission rates (30% / 15% / 20%) per plan",
  "Legacy coupon code system for founder artist and gallery onboarding with configurable redemption limits",
  "Admin artist and gallery verification workflow with a 'Profile Under Review' state before any listing can go live",
  "City-specific sub-site architecture filtering artists, galleries, listings, and calendar events by city within a single Sharetribe instance",
  "Artmajeur-style artist discovery with medium-based left-panel filtering across all approved artists",
  "Featured Gallery profile pages with hero imagery and a full represented-artist catalogue",
  "Dual gallery tab dropdown — Featured Galleries (subscribers) plus operator-curated City Gallery List",
  "Community art calendar gated to Professional Artist and Featured Gallery plan subscribers",
  "Custom three-tab navigation (Artwork, Artists, Galleries) replacing Sharetribe's default homepage structure",
];

export const caseStudyCtaCardData = {
  title: "Ready to Build Your Art Marketplace?",
  info: "Artrag launched a multi-city art and handmade marketplace on Sharetribe with three subscription tiers, tiered commissions, admin verification, and city-specific sub-sites. If you're building a curated marketplace, we've done it before. Fixed price from $3,000. 90-day bug-free guarantee.",
  link: "/contact",
  linkLabel: "Book a Free Scoping Call",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
};

export const themeContent = {
  title: "Curatorial typography and gallery tones of Artrag",
  info: "Gallery-quality and community-forward — a clean white canvas aesthetic that puts artwork front and centre, with structured grid layouts, large hero imagery on gallery profiles, and a typographic system that feels curatorial rather than commercial. Each city sub-site gains its own identity within the broader Artrag brand, while Featured Artists and Featured Galleries sections stay visually distinct from standard listings.",

  colors: [
    {
      id: 1,
      name: "Pumpkin Orange",
      hex: "#00A8D8",
      rgb: "",
      className: "pumpkin",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "Dark Blue Grey",
      hex: "#20304D",
      rgb: "",
      className: "darkblue",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 3,
      name: "Sunglow",
      hex: "#F9F5F2",
      rgb: "",
      className: "canvasWhite",
      large: false,
      textColor: "#111827",
    },
    {
      id: 4,
      name: "Jungle Green",
      hex: "#FF9798",
      rgb: "",
      className: "stone",
      large: false,
      textColor: "#fff",
    },
    {
      id: 5,
      name: "Early Dawn",
      hex: "#FAF9F5",
      rgb: "",
      className: "slate",
      large: false,
      textColor: "#111827",
    },
  ],

  typography: {
    bgColor: "#F7F7F7",
    fontFamily: {
      label: "Instrument Sans",
      fontVariable: "--font-instrumentsans",
      color: "#20304D",
      primaryFontWeight: "Bold",
    },
    bigText: {
      label: "Aa",
      fontVariable: "--font-instrumentsans",
      color: "#00A8D8",
    },
    secondary: {
      // fontFamily: "Inter Tight",
      // fontWeight: "Regular",
      fontVariable: "--font-instrumentsans",
      color: "#20304D",
      charactersColor: "#20304D",
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
