import React from "react";
import dynamic from "next/dynamic";
import Loading from "../../loading";
import SectionResources from "@/component/SectionResources/SectionResources";
import { bookingEventsFAQs } from "./faqData";

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
//   title: "Booking & Events Marketplace Development | iCodelabs",
//   description: "Build a scalable booking and events platform with calendars, ticketing, payments, and real-time sync. Web and mobile marketplace experts.",
//   alternates: { canonical: "/booking-and-events-marketplace" },
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
      <FAQSection data={bookingEventsFAQs} />
      <OtherVertical data={otherVerticalsData} />
      <SectionResources
        filterTypes={["Sharetribe Development", "Marketplace Development"]}
      />
    </>
  );
}

const heroData = {
  label: "Booking & Events Marketplace Development",
  title:
    "Booking & Events Marketplace Development — Calendars, Ticketing & Payments",
  content: `From venue reservations and classes to conferences and tours, we build fast, scalable platforms with Cronofy calendar sync, QR ticketing, Agora video calls, real-time availability, and Stripe split payouts. Sharetribe or fully custom. Most builds live in 5-8 weeks.`,
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
      text: "QR ticketing",
    },
    {
      tick: false,
      label: "",
      text: "Real-time availability",
    },
  ],
  usp: {
    heading: "Booking & events checklist",
    point: [
      "Real-time availability",
      "Calendar & meetings sync",
      "Ticketing & check-ins",
      "Flexible pricing & discounts",
      "Search, filters & geo",
      "Organizer & host profiles",
      "Automated notifications",
    ],
  },
  badgeImg: "/assests/img/marketplace/rental/verified-sharetribe-badge.png",
};

const marketplaceUSP = {
  section: {
    label: "WHO WE BUILD FOR",
    title: "Built for Booking & Events Organizers",
  },
  cards: [
    {
      id: 1,
      icon: "entrepreneurs",
      title: "Coaches & Consultants",
      description:
        "Schedule 1:1 sessions, group classes, and workshops with automated reminders, video integration, and payment processing.",
    },
    {
      id: 2,
      icon: "startups",
      title: "Event Hosts & Venues",
      description:
        "Manage venue bookings, capacity limits, ticket tiers, and check-ins with real-time availability and calendar sync.",
    },
    {
      id: 3,
      icon: "rental-brands",
      title: "Experience Creators",
      description:
        "Offer unique experiences, tours, and activities with flexible scheduling, group bookings, and automated notifications.",
    },
    {
      id: 4,
      icon: "peer-to-peer",
      title: "Communities & Organizations",
      description:
        "Run community events, meetups, and workshops with member-only access, recurring events, and integrated payments.",
    },
  ],
};

const marketplaceCarouseData = {
  heading: {
    label: "CORE FEATURES",
    title: "Features that Power Booking & Events Platforms",
  },
  cards: [
    {
      title: "Real-Time Availability",
      description:
        "Live calendars with hourly/daily slots, capacity rules, blackout dates, and buffer times to prevent overlaps.",
      image: "/assests/img/marketplace/Real-Time Availability.png",
    },
    {
      title: "Ticketing & Check-Ins",
      description:
        "Issue e-tickets/QR codes, scan at entry, manage tiers (VIP/General), and track attendance in real time.",
      image: "/assests/img/marketplace/Ticketing & Check-Ins.png",
    },
    {
      title: "Calendar & Meetings Sync",
      description:
        "Two-way sync with Google Calendar/Cronofy; optional video links via Zoom/Meet for virtual sessions.",
      image: "/assests/img/marketplace/Calendar & Meetings Sync.png",
    },
    {
      title: "Flexible Pricing & Discounts",
      description:
        "Per-seat, per-slot, or per-day pricing; early-bird, bundle, and promo codes; deposits and refunds.",
      image: "/assests/img/marketplace/Discount Codes.png",
    },
    {
      title: "Search, Filters & Geo",
      description:
        "Find events by category, date, price, rating, and location—plus map view for nearby options.",
      image: "/assests/img/marketplace/Search, Filters & Geo.png",
    },
    {
      title: "Organizer & Host Profiles",
      description:
        "Bios, reviews, schedules, and galleries to build credibility and help users choose confidently.",
      image: "/assests/img/marketplace/Organizer & Host Profiles.png",
    },
  ],
};

const rentalPlatformIntegrationData = {
  section: {
    label: "INTEGRATIONS",
    title: "Booking & Events Integrations",
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
      name: "Cloudinary",
      image: "/assests/logo/markeplaceIcons/cloudinary.svg",
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
      name: "Google Calendar",
      image: "/assests/logo/markeplaceIcons/gcalendar.svg",
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
    title: "AI Features for Booking & Events Platforms",
    label: "AI Features",
  },
  cards: {
    cardOne: {
      title: "Smart Slot Optimisation",
      info: "Predicts demand to suggest optimal time slots, capacities, and buffers — reducing no-shows and overlaps.",
      img: "/assests/img/marketplace/rental/Frame 1984083862.svg",
    },
    cardTwo: {
      title: "Review & Sentiment Analysis",
      info: "AI analyses event reviews to surface themes, flag issues, and help organisers improve future events.",
      img: "/assests/img/marketplace/rental/Group 1686559080.png",
    },
    cardThree: {
      title: "Dynamic Pricing & Promotions",
      info: "Adjusts pricing based on seasonality, demand, and booking pace to maximise revenue and fill rates.",
      img: "/assests/img/marketplace/rental/Frame 1984083849.svg",
    },
    cardFour: {
      title: "AI Booking Assistant",
      info: "Instant intelligent responses to attendee queries — availability, pricing, cancellation — around the clock.",
      img: "/assests/img/marketplace/rental/Frame 1984083885.png",
    },
  },
};

const MarketPlaceBuildCarouseldata = {
  section: {
    title: "A Booking & Events Platform We Built",
    label: "REAL BUILD",
  },
};

const CostCtaData = {
  section: {
    label: "PRICING",
    title: "What Does a Booking & Events Platform Cost?",
    info: "Calendar sync + ticketing + payments → Growth. Video calls + AI recommendations + advanced scheduling → Enterprise.",
  },
  ctaInfo: {
    ctaTitle: "Most booking builds: Growth ($4k) or Enterprise ($6k+)",
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
