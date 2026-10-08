import React from "react";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";
import SectionResources from "@/component/SectionResources/SectionResources";
import { rentalFAQs } from "./faqData";

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

// NOTE: SEO metadata is now defined in layout.jsx for this route to ensure consistency.
// export const metadata = {
//   title: "Rental Marketplace Development | Web & Mobile | iCodelabs",
//   description: "Launch a high‑performance rental marketplace with time‑based pricing, availability calendars, deposits, ID verification, and secure payments.",
//   alternates: { canonical: "/rental-marketplace" },
// };

export const revalidate = 3600;

export default function page() {
  return (
    <>
      <MarketPlaceHeroSection data={heroData} />
      <MarketplaceUSPcards data={marketplaceUSP} />
      <MarketplaceCarousel data={marketplaceCarouseData} />
      <PlatformIntegration data={rentalPlatformIntegrationData} />
      <FeatureLayout data={aiFeatureRentalData} />
      <MarketPlaceBuildCarousel data={MarketPlaceBuildCarouseldata} />
      <CostCta data={CostCtaData} />
      <FAQSection data={rentalFAQs} />
      <OtherVertical data={otherVerticalsData} />
      <SectionResources
        filterTypes={["Sharetribe Development", "Marketplace Development"]}
      />
    </>
  );
}

const heroData = {
  title: "Launch a High-Performance Rental Marketplace — Fast",
  content: `Secure, scalable rental platforms for physical and digital items — time-based pricing, deposits, availability calendars, ID verification, geo search, and AI smart features. Built on Sharetribe or fully custom. Most builds live in 4-8 weeks.`,
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
      label: "50+",
      text: "Marketplaces Built",
    },
    {
      label: "90 Days",
      text: "Bug Free Guarantee",
    },
    {
      tick: true,
      label: "Vetted",
      text: "Sharetribe Vetted Developers",
    },
  ],
  usp: {
    heading: " Rental platform checklist",
    point: [
      "Time-based pricing",
      "Security deposits & damage fees",
      "Availability calendars",
      "Video calls (Agora/Zoom)",
      "Milestone & split payments",
      "Portfolio & certifications",
      "AI provider matching",
    ],
  },
  badgeImg: "/assests/img/marketplace/rental/verified-sharetribe-badge.png",
};

const marketplaceUSP = {
  section: {
    label: "WHO WE BUILD FOR",
    title: "Built for Rental Founders at Every Stage",
  },
  cards: [
    {
      id: 1,
      icon: "entrepreneurs",
      title: "Entrepreneurs Launching P2P Platforms",
      description:
        "Get to market fast — deposits, cancellations, and availability handled from day one, without building infrastructure from scratch.",
    },
    {
      id: 2,
      icon: "startups",
      title: "Startups Building Niche Rental Apps",
      description:
        "Specialized rental — tools, gear, fashion, vehicles — with pricing rules and workflows tuned to your specific item category.",
    },
    {
      id: 3,
      icon: "rental-brands",
      title: "Rental Brands Going Digital",
      description:
        "Take an existing offline rental business online — digitize inventory, automate bookings, reach customers beyond your local area.",
    },
    {
      id: 4,
      icon: "peer-to-peer",
      title: "Peer-to-Peer Communities",
      description:
        "Enable community members to rent from each other with trust — ID verification, ratings, secure deposits, in-app messaging.",
    },
  ],
};

const marketplaceCarouseData = {
  heading: {
    label: "CORE FEATURES",
    title: "Features that Power Rental Marketplace",
  },
  cards: [
    {
      title: "Time-Based Pricing",
      description:
        "Hourly, daily, or weekly rules with min/max durations, peak pricing, and seasonal rates.",
      image: "/assests/img/marketplace/rental/time based.png",
    },
    {
      title: "Availability Calendar",
      description:
        "Real-time calendars showing availability, blackout dates, and buffer times between bookings.",
      image: "/assests/img/marketplace/rental/calendar.png",
    },
    {
      title: "Security Deposit Handling",
      description:
        "Stripe-authorised holds at booking. Automated release or partial capture for damage fees post-rental.",
      image: "/assests/img/marketplace/rental/additional.png",
    },
    {
      title: "Auto-Cancellation",
      description:
        "Configurable cancellation policies with automated refund processing and enforcement.",
      image: "/assests/img/marketplace/rental/auto.png",
    },
    {
      title: "ID Verification",
      description:
        "Third-party KYC, document checks, and risk scoring at provider or renter onboarding.",
      image: "/assests/img/marketplace/ID Verification.webp",
    },
    {
      title: "Geo-Based Search",
      description:
        "Location-aware search with map view and radius filters. Renters find available items nearby.",
      image: "/assests/img/marketplace/Geo-based Search.webp",
    },
  ],
};

const rentalPlatformIntegrationData = {
  section: {
    label: "INTEGRATIONS",
    title: "Rental Platform Integrations",
    description:
      "Connect seamlessly with tools and systems you already use to streamline operations, automate workflows, and enhance overall efficiency.",
  },
  integrations: [
    {
      name: "Stripe",
      image: "/assests/img/marketplace/rental/icons/Stripe.svg",
    },
    {
      name: "Cloudinary",
      image: "/assests/img/marketplace/rental/icons/cloudinary.svg",
    },
    {
      name: "Mixpanel",
      image: "/assests/img/marketplace/rental/icons/mixpanel.svg",
    },
    {
      name: "Algolia",
      image: "/assests/img/marketplace/rental/icons/algolia.svg",
    },
    {
      name: "SendGrid",
      image: "/assests/img/marketplace/rental/icons/sendgrid.svg",
    },
    {
      name: "OneSignal",
      image: "/assests/img/marketplace/rental/icons/onesignal.svg",
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
    title: "AI Features for Rental Platforms",
    label: "AI Features",
  },
  cards: {
    cardOne: {
      title: "Predictive Demand & ROI",
      info: "Forecast rental demand, pricing trends, and ROI using AI-driven analytics.",
      img: "/assests/img/marketplace/rental/Frame 1984083898.png",
    },
    cardTwo: {
      title: "Smart Suggestions",
      info: "Personalised listing recommendations and pricing suggestions per user.",
      img: "/assests/img/marketplace/rental/Frame 1984083907.svg",
    },
    cardThree: {
      title: "Review Moderation",
      info: "Automated review quality checks, spam detection, and sentiment analysis.",
      img: "/assests/img/marketplace/rental/Frame 1984083841 2.svg",
    },
    cardFour: {
      title: "AI Chat Assistant",
      info: "Instant answers on availability, pricing, and policies — reducing support load.",
      img: "/assests/img/marketplace/rental/Frame 1984083885.png",
    },
  },
};

const MarketPlaceBuildCarouseldata = {
  section: {
    title: "A Rental Marketplace We Built",
    label: "REAL BUILD",
  },
};
const CostCtaData = {
  section: {
    label: "PRICING",
    title: "What Does a Rental Marketplace Cost?",
    info: "Deposits and booking logic → Startup. Algolia search + Cronofy calendar + mobile app → Growth. Custom transaction flows → Enterprise from $6k.",
  },
  ctaInfo: {
    ctaTitle: "Most rental builds: Startup ($3k) or Growth ($4k)",
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
