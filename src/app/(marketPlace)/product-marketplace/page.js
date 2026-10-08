import React from "react";
import dynamic from "next/dynamic";
import Loading from "../../loading";
import SectionResources from "@/component/SectionResources/SectionResources";
import { productMarketplaceFAQs } from "./faqData";

const MarketPlaceHeroSection = dynamic(
  () =>
    import("../CommonComponents/MarketPlaceHeroSection/MarketPlaceHeroSection"),
  { loading: () => <Loading /> },
);
const MarketplaceUSPcards = dynamic(
  () => import("../CommonComponents/MarketplaceUSPcards/MarketplaceUSPcards"),
  { loading: () => <Loading /> },
);
const MarketplaceCarousel = dynamic(
  () => import("../CommonComponents/MarketplaceCarousel/MarketplaceCarousel"),
  { loading: () => <Loading /> },
);
const PlatformIntegration = dynamic(
  () => import("../CommonComponents/PlatformIntegration/PlatformIntegration"),
  { loading: () => <Loading /> },
);
const FeatureLayout = dynamic(
  () => import("../CommonComponents/FeatureLayout/FeatureLayout"),
  { loading: () => <Loading /> },
);
const MarketPlaceBuildCarousel = dynamic(
  () =>
    import("../CommonComponents/MarketPlaceBuildCarousel/MarketPlaceBuildCarousel"),
  { loading: () => <Loading /> },
);
const CostCta = dynamic(() => import("../CommonComponents/CostCta/CostCta"), {
  loading: () => <Loading />,
});
const OtherVertical = dynamic(
  () => import("../CommonComponents/OtherVertical/OtherVertical"),
  { loading: () => <Loading /> },
);

const FAQSection = dynamic(
  () => import("@/app/services/react-native/Components/FAQSection/FAQSection"),
  { loading: () => <Loading /> },
);

// NOTE: SEO metadata for this route is defined in layout.jsx to ensure a single source of truth.
// export const metadata = {
//   title: "Product Marketplace Development | Multi‑Vendor Platforms | iCodelabs",
//   description: "We build multi‑vendor product marketplaces with payments, inventory, commissions, shipping, reviews, and AI automation. Fast, scalable, and secure.",
//   alternates: { canonical: "/product-marketplace" },
// };

export const revalidate = 3600;

export default function pages() {
  return (
    <>
      <MarketPlaceHeroSection data={heroData} />
      <MarketplaceUSPcards data={marketplaceUSP} />
      <MarketplaceCarousel data={marketplaceCarouseData} />
      <PlatformIntegration data={rentalPlatformIntegrationData} />
      <FeatureLayout data={aiFeatureRentalData} />
      <MarketPlaceBuildCarousel data={MarketPlaceBuildCarouseldata} />
      <CostCta data={CostCtaData} />
      <FAQSection data={productMarketplaceFAQs} />
      <OtherVertical data={otherVerticalsData} />
      <SectionResources
        filterTypes={["Sharetribe Development", "Marketplace Development"]}
      />
    </>
  );
}

const heroData = {
  label: "Product Marketplace Development",
  title:
    "Multi-Vendor Product Marketplace Development — Sharetribe or Headless",
  content: `Multi-vendor platforms with independent seller dashboards, inventory management, Shippo shipping integration, Stripe Connect split payouts, AI product recommendations, and unified checkout. Sharetribe or custom headless stack. Most builds live in 6-10 weeks.`,
  primaryBtn: {
    btnLabel: "Get a Free Quote",
    btnLink: "https://calendly.com/jaytiwary",
    btnClass: "primaryBtn",
  },
  secondaryBtn: {
    btnLabel: "View Packages",
    btnLink: "/services/sharetribe#packagesection",
    btnClass: "secondaryBtn",
  },
  keyPoints: [
    {
      label: "",
      text: "Shippo shipping",
    },
    {
      label: "",
      text: "Multi-vendor dashboards",
    },
    {
      tick: false,
      label: "",
      text: "Split payouts",
    },
  ],
  usp: {
    heading: "Product marketplace checklist",
    point: [
      "Multi-vendor management",
      "Unified checkout",
      "Inventory & stock tracking",
      "Shippo shipping integration",
      "Commission & split payouts",
      "Discount codes",
      "AI product recommendations",
    ],
  },
  badgeImg: "/assests/img/marketplace/rental/verified-sharetribe-badge.png",
};

const marketplaceUSP = {
  section: {
    label: "WHO WE BUILD FOR",
    title: "Built for Product Marketplace Founders",
  },
  cards: [
    {
      id: 1,
      icon: "entrepreneurs",
      title: "Entrepreneurs & Niche Brands",
      description:
        "Launch a focused product marketplace — vintage goods, handmade crafts, collectibles — with seller onboarding and storefront management from day one.",
    },
    {
      id: 2,
      icon: "startups",
      title: "Artisan Communities",
      description:
        "Give artisans and makers their own branded storefronts with inventory control, commission handling, and direct customer communication.",
    },
    {
      id: 3,
      icon: "rental-brands",
      title: "Brand Aggregators",
      description:
        "Bring multiple brands under one roof with unified checkout, per-brand analytics, and tiered seller permissions and payouts.",
    },
    {
      id: 4,
      icon: "peer-to-peer",
      title: "Subscription Box Startups",
      description:
        "Build subscription-based product marketplaces with recurring billing, curated box logic, and automated fulfillment workflows.",
    },
  ],
};

const marketplaceCarouseData = {
  heading: {
    label: "CORE FEATURES",
    title: "Features that Power Product Marketplaces",
  },
  cards: [
    {
      title: "Multi-Vendor Management",
      description:
        "Onboard and manage multiple sellers with independent dashboards for inventory, orders, and payouts.",
      image: "/assests/img/marketplace/Multi-Vendor Management.png",
    },
    {
      title: "Unified Checkout",
      description:
        "Single checkout experience across multiple vendors — cart consolidation, shipping calculation, and split payment at checkout.",
      image: "/assests/img/marketplace/Unified Checkout.png",
    },
    {
      title: "Inventory Management",
      description:
        "Stock-level tracking, low-inventory alerts, variant management (size, color), and automated sold-out handling.",
      image: "/assests/img/marketplace/Inventory Management.png",
    },
    {
      title: "Discount Codes & Promotions",
      description:
        "Platform-wide or seller-specific discount codes, seasonal offers, bundle pricing, and promotional campaigns.",
      image: "/assests/img/marketplace/Discount Codes.png",
    },
    {
      title: "Shipping Integration",
      description:
        "Shippo integration for real-time shipping rates, label generation, carrier tracking, and automated delivery updates.",
      image: "/assests/img/marketplace/Shipping Integration.png",
    },
    {
      title: "Commission & Split Payouts",
      description:
        "Automated Stripe Connect commission splits between platform and sellers, with configurable rates per seller tier.",
      image: "/assests/img/marketplace/Commission Handling.png",
    },
  ],
};

const rentalPlatformIntegrationData = {
  section: {
    label: "INTEGRATIONS",
    title: "Product Marketplace Integrations",
    description:
      "Connect seamlessly with tools and systems you already use to streamline operations, automate workflows, and enhance overall efficiency.",
  },
  integrations: [
    {
      name: "Stripe",
      image: "/assests/logo/markeplaceIcons/Stripe.svg",
    },
    {
      name: "Shippo",
      image: "/assests/img/marketplace/rental/icons/shippo.svg",
    },
    {
      name: "Cloudinary",
      image: "/assests/logo/markeplaceIcons/cloudinary.svg",
    },
    {
      name: "Algolia",
      image: "/assests/logo/markeplaceIcons/algolia.svg",
    },
    {
      name: "SendGrid",
      image: "/assests/logo/markeplaceIcons/sendgrid.svg",
    },
    {
      name: "OneSignal",
      image: "/assests/logo/markeplaceIcons/onesignal.svg",
    },
    {
      name: "Mixpanel",
      image: "/assests/logo/markeplaceIcons/mixpanel.svg",
    },
    {
      name: "Voucherify",
      image: "/assests/img/marketplace/rental/icons/voucherify.svg",
    },
  ],
  cta: {
    ctaTitle: "Ready to build your marketplace?",
    subInfo: "Talk to our team. Free scoping call. No commitment.",
    linkLabel: "Book a Free call",
    link: "/contact",
  },
};

const aiFeatureRentalData = {
  heading: {
    title: "AI Features for Product Marketplaces",
    label: "AI Features",
  },
  cards: {
    cardOne: {
      title: "AI Product Recommendations",
      info: "Personalised suggestions based on browsing history, purchase behaviour, and current trends.",
      img: "/assests/img/marketplace/rental/Frame 1984083858.svg",
    },
    cardTwo: {
      title: "Automated Review Moderation",
      info: "AI flags spam, duplicate, and policy-violating reviews before they publish.",
      img: "/assests/img/marketplace/rental/Frame 1984083841 2.svg",
    },
    cardThree: {
      title: "Demand Forecasting",
      info: "Predict inventory needs to avoid stockouts, overstocking, and optimise supply chain planning.",
      img: "/assests/img/marketplace/rental/Frame 1984083849.svg",
    },
    cardFour: {
      title: "AI Chatbot for Sales & Support",
      info: "Instant responses on product details, stock availability, and order status — reducing support tickets.",
      img: "/assests/img/marketplace/rental/Frame 1984083886 (1).svg",
    },
  },
};

const MarketPlaceBuildCarouseldata = {
  section: {
    title: "A Product Marketplace We Built",
    label: "REAL BUILD",
  },
};

const CostCtaData = {
  section: {
    label: "PRICING",
    title: "What Does a Product Marketplace Cost?",
    info: "Multi-vendor + checkout + Shippo → Growth. Custom commission tiers + AI recommendations + subscription billing → Enterprise.",
  },
  ctaInfo: {
    ctaTitle: "Most product builds: Growth ($4k) or Enterprise ($6k+)",
    btn1Label: "Book a Free Call",
    btn1Link: "https://calendly.com/jaytiwary",
    btn2Label: "See full pricing",
    btn2Link: "/services/sharetribe#packagesection",
  },
};

const otherVerticalsData = {
  section: {
    label: "OTHER VERTICALS",
    title: "Also Building a Different Type of Marketplace?",
  },
};
