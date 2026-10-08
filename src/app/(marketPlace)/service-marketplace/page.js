import React from "react";
import dynamic from "next/dynamic";
import Loading from "../../loading";
import SectionResources from "@/component/SectionResources/SectionResources";
import { serviceMarketplaceFAQs } from "./faqData";

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
//   title: "Service Marketplace Development | Booking, Payments, Reviews | iCodelabs",
//   description:
//     "We build service marketplaces with booking calendars, provider profiles, split payments, reviews, and AI features. Web and mobile apps, built to scale.",
//   alternates: { canonical: "/service-marketplace" },
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
      <FAQSection data={serviceMarketplaceFAQs} />
      <OtherVertical data={otherVerticalsData} />
      <SectionResources
        filterTypes={["Sharetribe Development", "Marketplace Development"]}
      />
    </>
  );
}

const heroData = {
  label: "Service Marketplace Development",
  title: "Service Marketplace Development for Booking, Payments & Reviews",
  content: `Connect customers with professionals — local services to virtual coaching — through seamless booking, Cronofy calendar sync, milestone payments, video calls, and AI-powered matching. Sharetribe or fully custom. Most builds live in 5-8 weeks.`,
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
      text: "Cronofy calendar sync",
    },
    {
      label: "",
      text: "Agora video calls",
    },
    {
      tick: false,
      label: "",
      text: "Milestone payments",
    },
  ],
  usp: {
    heading: "Service platform checklist",
    point: [
      "Multi-step provider onboarding",
      "Real-time booking calendar",
      "Cronofy calendar sync",
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
    title: "Built for Service Marketplace Founders",
  },
  cards: [
    {
      id: 1,
      icon: "entrepreneurs",
      title: "Entrepreneurs Launching On-Demand Platforms",
      description:
        "Build a scalable marketplace connecting customers with service providers — from home repairs to personal coaching — with smooth booking and payment flows.",
    },
    {
      id: 2,
      icon: "startups",
      title: "Startups Building Niche Service Apps",
      description:
        "Pet grooming, virtual tutoring, wellness consulting — solutions tailored to unique business models with advanced scheduling and provider vetting.",
    },
    {
      id: 3,
      icon: "rental-brands",
      title: "Agencies Digitising Services",
      description:
        "Transform traditional agency operations into digital marketplaces that simplify scheduling, payments, and service delivery.",
    },
    {
      id: 4,
      icon: "peer-to-peer",
      title: "Skill-Sharing Communities",
      description:
        "Enable communities to share skills and services with secure communication, scheduling, transparent transactions, and review systems.",
    },
  ],
};

const marketplaceCarouseData = {
  heading: {
    label: "CORE FEATURES",
    title: "Features that Power Service Marketplaces",
  },
  cards: [
    {
      title: "Multi-Step Provider Onboarding",
      description:
        "Guided listing creation with descriptions, pricing, availability, certifications, and portfolio uploads — step by step.",
      image: "/assests/img/marketplace/Multi-step Service Creation.png",
    },
    {
      title: "Booking Calendar",
      description:
        "Real-time scheduling with clear availability slots, buffer times, and recurring bookings. Cronofy and Google Calendar sync.",
      image: "/assests/img/marketplace/Booking Calendar.png",
    },
    {
      title: "Dynamic Pricing",
      description:
        "Hourly, per-session, or package-based pricing. Deposits, milestone payments, and split payouts via Stripe Connect.",
      image: "/assests/img/marketplace/Dynamic Pricing.png",
    },
    // {
    //   title: "Video Call Integration",
    //   description:
    //     "Agora or Zoom video sessions embedded in the booking flow — for coaching, tutoring, and virtual services.",
    //   image: "/assests/img/marketplace/Video Call Integration.png",
    // },
    {
      title: "Provider Profiles",
      description:
        "Detailed pages with bios, skills, certifications, portfolio, response rate, and verified reviews.",
      image: "\/assests/img/marketplace/Provider Profiles.webp",
    },
    {
      title: "Cancellation Policies",
      description:
        "Configurable cancellation rules — different policies per provider — with automated refunds and notifications.",
      image: "/assests/img/marketplace/Cancellation Policies.png",
    },
  ],
};

const rentalPlatformIntegrationData = {
  section: {
    label: "INTEGRATIONS",
    title: "Service Platform Integrations",
    description:
      "Connect seamlessly with tools and systems you already use to streamline operations, automate workflows, and enhance overall efficiency.",
  },
  integrations: [
    {
      name: "Cronofy",
      image: "/assests/logo/markeplaceIcons/cronofy.svg",
    },
    {
      name: "Agora",
      image: "/assests/logo/markeplaceIcons/agora.svg",
    },
    {
      name: "Stripe",
      image: "/assests/logo/markeplaceIcons/stripe.svg",
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
      name: "Algolia",
      image: "/assests/logo/markeplaceIcons/algolia.svg",
    },
    {
      name: "Google Calendar",
      image: "/assests/logo/markeplaceIcons/gcalendar.svg",
    },
    {
      name: "Zoom",
      image: "/assests/logo/markeplaceIcons/zoom.svg",
    },
    {
      name: "PostHog",
      image: "/assests/logo/markeplaceIcons/posthog.svg",
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
    title: "AI Features for Service Marketplaces",
    label: "AI Features",
  },
  cards: {
    cardOne: {
      img: "/assests/img/marketplace/rental/Frame 1984083829.svg",
      title: "Smart Provider Matching",
      info: "AI matches customers with the best provider based on skills, availability, ratings, and past performance.",
    },
    cardTwo: {
      title: "NLP Review Analysis",
      info: "Natural language processing on reviews to surface themes, flag issues, and report provider quality trends.",
      img: "/assests/img/marketplace/rental/Group 1686559080.png",
    },
    cardThree: {
      title: "AI Reminder Bot",
      info: "Intelligent automated reminders for upcoming bookings, payments, and follow-ups — reducing no-shows.",
      img: "/assests/img/marketplace/rental/Frame 1984083841.svg",
    },
    cardFour: {
      title: "AI Chatbot Support",
      info: "Instant responses to customer queries — availability, pricing, cancellation policies — 24/7.",
      img: "/assests/img/marketplace/rental/Frame 1984083885.png",
    },
  },
};

const MarketPlaceBuildCarouseldata = {
  section: {
    title: "A Service Marketplace We Built",
    label: "REAL BUILD",
  },
};

const CostCtaData = {
  section: {
    label: "PRICING",
    title: "What Does a Service Marketplace Cost?",
    info: "Booking calendar, Cronofy sync, milestone payments, and provider profiles → Growth. Agora video + AI matching + mobile app → Enterprise from $6k.",
  },
  ctaInfo: {
    ctaTitle: "Most service builds: Growth ($4k)",
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
