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
  label: "Case Study - UbiTennis",
  title: "Fantasy tennis, engineered for the serious fan.",
  subtitle:
    "A full React Native redevelopment of a FlutterFlow app — delivering a sophisticated fantasy tennis platform with dynamic pricing algorithms, a virtual coin economy, and season-long social leagues for ATP tournaments worldwide.",
  description: `UbiTennis is an Italian tennis media and data platform with a passionate, knowledgeable fanbase. iCodeLabs was brought in to fully redevelop the UbiTennis mobile app — migrating from FlutterFlow to React Native while preserving and extending the existing Firebase backend.
    <br/>
    <br/>
    The centrepiece of the redevelopment is a fully API-driven Fantasy Tennis feature covering all ATP tournaments, complete with a dynamic tier and pricing engine, a UbiCoin virtual economy, automated withdrawal management, a gamified scoring system, and persistent season-long social leagues.`,
  // heroImage: "/assests/img/blank-placeholder.svg",
  // cardBgColor: "#0F172A",
};

export const caseStudyData = {
  title: "The Challenge",
  info: [
    "The client had a functional FlutterFlow app but needed a scalable, maintainable, and feature-extensible mobile product that FlutterFlow's constraints couldn't deliver. iCodeLabs migrated the entire app to React Native — preserving the existing Firebase backend while making targeted backend changes to support the new Fantasy Tennis feature set.",
    "The fantasy system itself required significant algorithmic engineering: a dynamic tier and pricing model that auto-adapts to every ATP tournament's entry list, an automated withdrawal and replacement engine, a virtual coin economy, and a season-long league architecture — all driven by live ATP API data with zero manual operator intervention.",
  ],
  link: "https://ubitennis.com/",
  linklabel: "www.ubitennis.com",
  color: "#1C820A",
};

export const techStackData = {
  title: "Tech Stack",
  color: "#1C820A",
  info: "A React Native rebuild over an extended Firebase backend, driven end-to-end by the ATP API — engineered to run the entire fantasy economy without manual operator intervention.",
  techStack: [
    { layer: "Mobile App", technology: "React Native" },
    { layer: "Original Platform", technology: "FlutterFlow (migrated from)" },
    { layer: "Backend", technology: "Firebase" },
    {
      layer: "Data Source",
      technology: "ATP API (live tournament & match data)",
    },
    { layer: "Economy", technology: "UbiCoin virtual currency engine" },
    {
      layer: "Architecture",
      technology: "API-driven, minimal manual management",
    },
  ],
};

export const whatwebuild = [
  {
    id: 1,
    title: "FlutterFlow → React Native Migration",
    description:
      "The full UbiTennis mobile app was redeveloped in React Native, replacing the FlutterFlow codebase while retaining the existing Firebase backend. Backend modifications were made to support the new Fantasy Tennis data architecture, new API integrations, and the UbiCoin economy layer — with full data migration ensuring existing users experienced no disruption.",
  },
  {
    id: 2,
    title: "ATP API Integration — Fully Automated Tournament Data",
    description:
      "The platform is driven entirely by live ATP API data — requiring zero manual tournament management by the operator. The system pulls tournament IDs, names, categories, start and end dates, official entry lists, ATP ranking snapshots at team-open time, real-time match results, and match statistics (aces, duration, sets) — all automatically, for every ATP tournament across 250s, 500s, Masters 1000s, Slams, and the Finals.",
  },
  {
    id: 3,
    title: "Dynamic Tier & Pricing Algorithm",
    description:
      "A sophisticated dynamic pricing engine was built to prevent all-top-player teams and ensure genuine strategic variety across every tournament. The algorithm takes the full entry list, sorts players by ATP ranking, and auto-assigns them to six tiers relative to that specific tournament's field. Pricing within each tier follows a power curve formula — Price = round(minPrice + (maxPrice - minPrice) * (1 - x)^2.2) — producing fair, differentiated prices that adapt automatically to whether the tournament is a 32-player ATP 250 or a 128-player Grand Slam. No manual price updates are ever required.",
  },
  {
    id: 4,
    title: "Fantasy Team Creation & Locking",
    description:
      "Users build a 6-player team within a 100-credit budget, selecting at least one player from each tier. Teams open 3–5 days before the tournament and lock automatically at the first match. Post-lock, teams are frozen — withdrawal management handles player changes automatically without user intervention.",
  },
  {
    id: 5,
    title: "Automated Withdrawal Management",
    description:
      "A fully automated withdrawal engine handles player withdrawals at every stage of the tournament lifecycle. Before lock, withdrawals are detected via API, the user is notified, the player is auto-removed, and credits are refunded for replacement. After lock but before a match, the system automatically replaces the withdrawn player with the next available ranked player — or the closest-price alternative if none is available. During a match, the withdrawn player scores zero with no replacement.",
  },
  {
    id: 6,
    title: "Gamified Scoring System with Automatic Bonuses",
    description:
      "A structured points system awards base points by round (1 point for R128/R64 through to 13 for the Final) with five automatic API-driven bonuses: Upset Bonus (+3 for beating a player ranked 15+ places higher), Fast Win (+2 for winning in under 60 minutes), Sharpshooter (+2 for 10+ aces), Ruthless (+2 for a 6–0 set), and Straight Sets (+1 for a 2-set win outside Slams). All bonuses are computed automatically from live match statistics.",
  },
  {
    id: 7,
    title: "UbiCoin Virtual Economy",
    description:
      "Unused budget credits (up to 10 per tournament) convert automatically to UbiCoin at a 1:1 rate. Users also earn UbiCoin through daily quizzes and achievements. UbiCoin can be spent on tactical advantages — Spy Mode (8 coins: see an opponent's team before lock), Quiz Second Chance (3 coins), and exclusive badges, avatars, and profile titles. UbiCoin never buy points — maintaining competitive integrity while rewarding engagement.",
  },
  {
    id: 8,
    title: "Daily Quiz Engine",
    description:
      "A daily quiz feature was built with a 15-second per-question timer, automatic question locking on timeout, and topics covering daily ATP matches, historical tennis trivia, and player stats. Correct answers reward 3–5 UbiCoin, with a one-time second-chance option costing 3 UbiCoin.",
  },
  {
    id: 9,
    title: "Season-Long Social Leagues",
    description:
      'Leagues are created once and persist for the full ATP season (January–December). Public leagues are open to all; private leagues use invite codes. Each tournament generates a fresh league ranking while the season total accumulates across all tournaments. Tie-breakers are resolved by tournament points, upset count, credits spent, and team creation timestamp — in that order. Members who don\'t participate in a tournament receive 0 points and a "Did not participate" badge.',
  },
  {
    id: 10,
    title: "Multi-Tier Ranking Architecture",
    description:
      "Three parallel ranking systems were built: a global tournament ranking across all users, a per-league tournament ranking computed on read, and a persistent global UbiCoin ranking tracking virtual currency accumulation across the season.",
  },
];

export const highlightPt = [
  "Full FlutterFlow → React Native redevelopment with Firebase backend migration and extension",
  "ATP API integration driving all tournament data with zero manual operator management",
  "Dynamic relative tier assignment and power-curve pricing algorithm auto-adapting to every tournament field",
  "Automated withdrawal detection and player replacement engine covering pre-lock, post-lock, and in-match scenarios",
  "API-driven scoring engine computing base points and five automatic match stat bonuses",
  "UbiCoin virtual economy with earn, spend, and conversion mechanics — fully decoupled from competitive scoring",
  "Season-persistent league architecture with per-tournament rankings and cumulative season totals",
  "Multi-tier global, league, and UbiCoin ranking systems",
];

export const caseStudyCtaCardData = {
  title: "Ready to Build Your Sports or Media Marketplace?",
  info: "UbiTennis migrated its fantasy tennis app from FlutterFlow to React Native on the existing Firebase backend, with ATP API integration for automated tournament data and a UbiCoin-powered virtual economy. We build sports, media, and content marketplaces from $3,000. Fixed price. 90-day bug-free guarantee.",
  link: "/contact",
  linkLabel: "Book a Free Scoping Call",
  stats: [
    { value: "50+", label: "Marketplaces Delivered" },
    { value: "90 Days", label: "Bug-Free Guarantee" },
    { value: "$3,000", label: "Starting Price" },
  ],
};

export const themeContent = {
  title: "Modern fonts and dynamic colours of UbiTennis",
  info: "Bold, sports-forward, and data-rich — a dark-first mobile UI with high-contrast tournament cards, dynamic player pricing displays, and a league interface that makes statistical depth feel accessible. The UbiCoin economy is given its own visual identity — reinforcing its status as a premium engagement layer separate from the core competitive experience.",

  colors: [
    {
      id: 1,
      name: "Romance",
      hex: "#1C820A",
      rgb: "",
      className: "courtNight",
      large: true,
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      name: "Butterfly Blue",
      hex: "#26ACF6",
      rgb: "",
      className: "baselineSlate",
      large: false,
      textColor: "#FFFFFF",
    },
    {
      id: 3,
      name: "Cerise Pink",
      hex: "#E83F6F",
      rgb: "",
      className: "tennisLime",
      large: false,
      textColor: "#fff",
    },
    {
      id: 4,
      name: "Pale Gold",
      hex: "#FFDF64",
      rgb: "",
      className: "ubicoinGold",
      large: false,
      textColor: "#fff",
    },
    {
      id: 5,
      name: "Dune",
      hex: "#333333",
      rgb: "",
      className: "courtMist",
      large: false,
      textColor: "#fff",
    },
  ],

  typography: {
    bgColor: "#f7f7f7",
    fontFamily: {
      label: "Unbounded",
      fontVariable: "--font-unbounded",
      color: "#333333",
      primaryFontWeight: "Bold",
    },
    bigText: {
      label: "Aa",
      fontVariable: "--font-unbounded",
      color: "#1C820A",
    },
    secondary: {
      // fontFamily: "Inter Tight",
      // fontWeight: "Regular",
      fontVariable: "--font-unbounded",
      color: "#333333",
      charactersColor: "#333333",
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
  avatar: "/assests/img/casestudy/ubitennis/ubitennis-60-newlogo.png",
  name: "UbiTennis Team",
  founder: "Founding Team",
  info: `iCodeLabs rebuilt UbiTennis from FlutterFlow to React Native and shipped a fully API-driven fantasy tennis platform — dynamic pricing, automated withdrawals, and season-long leagues, all running without manual operator intervention.`,
};
