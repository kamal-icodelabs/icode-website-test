import HeroBanner from "@/component/HeroBanner/HeroBanner";
import dynamic from "next/dynamic";
const MarketplaceSection = dynamic(
  () => import("@/component/MarketplaceSection/MarketplaceSection"),
  {
    loading: () => (
      <div
        style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}
      />
    ),
  },
);
import css from "./LandingPage.module.css";
// CompaniesLogosCarousel pulls in Swiper (~30KB+) and sits below the hero.
// Defer it to keep Swiper out of the initial JS chunk.
const CompaniesLogosCarousel = dynamic(
  () => import("@/component/LandingPageComponents/CompaniesLogosCarousel/CompaniesLogosCarousel"),
  { loading: () => <div style={{ contentVisibility: 'auto', containIntrinsicSize: '160px' }} /> }
);
import CoreServices from "@/component/CoreServices/CoreServices";
import MarketplaceVerticals from "@/component/MarketplaceVerticals/MarketplaceVerticals";

// Dynamic imports for code splitting; SSR enabled so crawlers see the content.
const SectionCaseStudy = dynamic(
  () => import("@/component/SectionCaseStudy/SectionCaseStudy"),
  {
    loading: () => (
      <div
        style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}
      />
    ),
  },
);
const DrivingtheNextWave = dynamic(
  () =>
    import("@/component/SectionDrivingtheNextWave/SectionDrivingtheNextWave"),
  {
    loading: () => (
      <div
        style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}
      />
    ),
  },
);
const DoBusinessBetter = dynamic(
  () => import("@/component/DoBusinessBetter/DoBusinessBetter"),
  {
    loading: () => (
      <div
        style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}
      />
    ),
  },
);

const WhyChooseUs = dynamic(
  () => import("@/component/SectionWhyChooseUs/SectionWhyChooseUs"),
  {
    loading: () => (
      <div
        style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}
      />
    ),
  },
);
const SectionTechnologyWeUse = dynamic(
  () => import("@/component/SectionTechnologyWeUse/SectionTechnologyWeUse"),
  {
    loading: () => (
      <div
        style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}
      />
    ),
  },
);
const SectionHowItWork = dynamic(
  () => import("@/component/SectionLatestWorks/SectionHowItWork"),
  {
    loading: () => (
      <div
        style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}
      />
    ),
  },
);
const SectionGrowYour = dynamic(
  () => import("@/component/SectionGrowYour/SectionGrowYour"),
  {
    loading: () => (
      <div
        style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}
      />
    ),
  },
);
const SectionTestimonials = dynamic(
  () => import("@/component/SectionTestimonials/SectionTestimonials"),
  {
    loading: () => (
      <div
        style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}
      />
    ),
  },
);
const StartupsToEnterprises = dynamic(
  () => import("@/component/SectionStartup/StartupsToEnterprises"),
  {
    loading: () => (
      <div
        style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}
      />
    ),
  },
);
const SectionAIDevelopmentPartner = dynamic(
  () => import("@/component/CompaniesSlider/SectionAIDevelopmentPartner"),
  {
    loading: () => (
      <div
        style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}
      />
    ),
  },
);
const SectionResources = dynamic(
  () => import("@/component/SectionResources/SectionResources"),
  {
    loading: () => (
      <div
        style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}
      />
    ),
  },
);
const SectionContactUs = dynamic(
  () => import("@/component/SectionContactUs/SectionContactUs"),
  {
    loading: () => (
      <div
        style={{ contentVisibility: "auto", containIntrinsicSize: "600px" }}
      />
    ),
  },
);

export const revalidate = 3600;

export const metadata = {
  // PRIMARY SEO
  title:
    "Sharetribe Marketplace Development Company | AI-Augmented Delivery from $3,000 | iCodelabs",
  description:
    "iCodelabs is a Sharetribe Vetted Expert Partner with 50+ marketplace builds. Custom Sharetribe development, React Native mobile apps, and AI features. Fixed price from $3,000. 90-day bug-free guarantee. Launch in weeks, not months.",
  alternates: { canonical: "https://icodelabs.co/" },

  // KEYWORDS
  keywords: [
    "AI marketplace development",
    "Sharetribe expert",
    "Experienced Sharetribe Developers",
    "Sharetribe Marketplace Experts",
    "Sharetribe vetted partner",
    "Custom marketplace development",
    "Mobile app development",
    "React development",
    "AI-driven platforms",
    "Marketplace apps",
    "Web development company",
  ],

  // ROBOTS
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },

  // OPEN GRAPH
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sharetribe & AI Marketplace Development | iCodeLabs",
    description:
      "iCodelabs builds custom marketplaces, mobile apps, and AI-driven platforms using Sharetribe, React, and modern stacks. Trusted by 50+ global clients.",
    url: "https://icodelabs.co/",
    siteName: "iCodeLabs",
    images: [
      {
        url: "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png",
        width: 1200,
        height: 630,
        alt: "iCodeLabs — AI-powered marketplaces & apps",
        type: "image/png",
      },
    ],
  },

  // TWITTER
  twitter: {
    card: "summary_large_image",
    site: "@icodelabs",
    creator: "@icodelabs",
    title: "Sharetribe & AI Marketplace Development | iCodeLabs",
    description:
      "iCodeLabs builds custom marketplaces, mobile apps, and AI-driven platforms using Sharetribe, React, and modern stacks.",
    images: [
      "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png",
    ],
  },

  // ADDITIONAL SEO
  authors: [{ name: "iCodeLabs", url: "https://icodelabs.co" }],
  creator: "iCodeLabs",
  publisher: "iCodeLabs",

  // OTHER METADATA
  other: {
    "article:publisher": "https://www.facebook.com/icodelabs",
  },
};

export default function Home() {
  // Structured Data (JSON-LD) for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "iCodeLabs",
    url: "https://icodelabs.co",
    logo: "https://res.cloudinary.com/dwpvv68ii/image/upload/v1759140505/Group_1410089110_2_paglw7.png",
    description:
      "AI-Powered Marketplace & App Development Company specializing in Sharetribe, React, and modern tech stacks.",
    foundingDate: "2020",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "(+91) 98777-88646",
      contactType: "Customer Service",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.facebook.com/icodelabs",
      "https://twitter.com/icodelabs",
      "https://www.linkedin.com/company/icodelabs",
      "https://github.com/icodelabs",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "iCodeLabs",
    url: "https://icodelabs.co",
    description: "AI-Powered Marketplace & App Development Company",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://icodelabs.co/",
      },
    ],
  };
  return (
    <div className={css.landingContainer}>
      {/* Structured Data (JSON-LD) for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <HeroBanner />
      <CompaniesLogosCarousel />
      {/* <MarketplaceSection /> */}
      <CoreServices />
      <SectionCaseStudy />
      <DoBusinessBetter />
      <MarketplaceVerticals />
      <SectionHowItWork />
      <DrivingtheNextWave />
      {/* <WhyChooseUs /> */}
      {/* <SectionTechnologyWeUse /> */}
      <SectionTestimonials />
      <SectionGrowYour />
      {/* <StartupsToEnterprises /> */}
      {/* <SectionAIDevelopmentPartner /> */}
      <SectionResources
        showOnHomepage="true"
        usedInBlog="true"
        bg="#fff"
        blog={[]} // Empty array, will be fetched client-side if needed
        readmoreBtn={true}
        filterTypes={["Sharetribe Development", "Marketplace Development"]}
      />
      <SectionContactUs />
    </div>
  );
}
