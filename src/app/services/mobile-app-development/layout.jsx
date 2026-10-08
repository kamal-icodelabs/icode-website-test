export const metadata = {
  // PRIMARY SEO
  title: "Mobile App Development Company | React Native & Flutter Experts",
  description:
    "iCodeLabs designs and ships high-performing mobile apps. React Native first, Flutter where it fits. iOS & Android delivery from discovery to launch, with CI/CD, analytics, and ongoing support.",
  alternates: {
    canonical: "https://icodelabs.co/services/mobile-app-development",
    languages: {
      en: "https://icodelabs.co/services/mobile-app-development",
      "x-default": "https://icodelabs.co/services/mobile-app-development",
    },
  },
  keywords:"mobile app development company, mobile app development services, ios android app development company, custom mobile app development, react native development company, cross-platform apps, flutter app development company, startup app development",

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
    title: "Mobile App Development Company | React Native & Flutter Experts",
    description:
      "Cross-platform apps with React Native, plus Flutter where it makes sense. iOS & Android, end-to-end: UX, APIs, QA, release, and support.",
    url: "https://icodelabs.co/services/mobile-app-development",
    siteName: "iCodelabs",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png",
        width: 1200,
        height: 630,
        alt: "iCodelabs — Mobile app development (React Native & Flutter)",
      },
    ],
  },

  // TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Company | React Native & Flutter Experts",
    description:
      "React Native first, Flutter where it fits. Production-ready iOS & Android apps with modern tooling and maintenance.",
    images: [
      "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png",
    ],
    site: "@icodelabs",
    creator: "@icodelabs",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      {/* JSON-LD: Breadcrumbs + Service (consolidated in a single script) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://icodelabs.co/" },
                { "@type": "ListItem", "position": 2, "name": "Mobile App Development", "item": "https://icodelabs.co/services/mobile-app-development" }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Mobile App Development",
              serviceType: "React Native Development, Flutter Development, iOS & Android App Development",
              provider: { "@type": "Organization", name: "iCodelabs", url: "https://icodelabs.co" },
              areaServed: "Global",
              url: "https://icodelabs.co/services/mobile-app-development",
              description: "End-to-end mobile engineering: discovery, UX/UI, React Native first with optional Flutter, API integration, CI/CD, App Store/Play release, analytics, and ongoing support.",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                lowPrice: 3000,
                highPrice: 20000,
                offerCount: 3,
                availability: "https://schema.org/InStock"
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Mobile App Development Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "React Native App Development" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flutter App Development" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "App Modernization & Maintenance" } }
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "url": "https://icodelabs.co/services/mobile-app-development",
              "name": "Mobile App Development Company | React Native & Flutter Experts",
              "description": "Icodelabs designs and ships high-performing mobile apps. React Native first, Flutter where it fits. iOS & Android delivery from discovery to launch, with CI/CD, analytics, and ongoing support.",
              "inLanguage": "en-US",
              "isPartOf": {
                "@type": "WebSite",
                "@id": "https://icodelabs.co/#website",
                "name": "iCodelabs",
                "url": "https://icodelabs.co"
              },
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "url": "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png",
                "width": 1200,
                "height": 630
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does it take to develop a mobile app?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The timeline depends on the app’s complexity and features. A simple MVP may take 6–8 weeks, while feature-rich or enterprise-level apps can take 3–6 months or longer."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which technologies do you use for mobile app development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We specialize in cross-platform (React Native, Flutter) technologies, allowing us to deliver high-performance apps tailored to your business needs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I build a native or cross-platform app?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It depends on your goals. Native apps offer maximum performance and device integration. Cross-platform apps allow faster development and lower costs by sharing one codebase across iOS and Android."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does it cost to build a mobile app?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost varies depending on features, design complexity, and integrations. MVPs can start at $3,000–$5,000, while enterprise-grade apps may range from $20,000+."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you also provide backend and API development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We design and build secure, scalable backends and APIs to power your mobile app, ensuring smooth data handling, integrations, and performance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you handle app store deployment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We take care of publishing your app on the Apple App Store and Google Play Store, ensuring compliance with guidelines and smooth launches."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer post-launch support and maintenance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We provide ongoing support, updates, bug fixes, and performance optimization so your app stays secure and aligned with the latest OS versions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you develop apps for iOS, Android, or both?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes—we specialize in cross-platform development with React Native and Flutter to build high-performance apps for both iOS and Android from a single codebase, saving time and cost while delivering native-like experiences."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you ensure mobile app security and data privacy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Security is built-in from day one: secure authentication, encrypted data, compliance with GDPR/Apple/Google guidelines, regular vulnerability scans, and secure backend integrations. We conduct audits and follow best practices to protect user data and your business."
                  }
                }
              ]
            }
          ]),
        }}
      />
      {children}
    </>
  );
}
