export const metadata = {
    // PRIMARY SEO
    title: "Sharetribe Development Company | Vetted Experts for Custom Marketplaces",
    description: "Expert Sharetribe marketplace development from a Vetted Sharetribe Partner. Fixed packages from $3,000 in 2026. Web + React Native mobile + AI features in all tiers. 50+ live builds. Launch in 3–6 weeks. 90-day guarantee.",
    alternates: { canonical: "https://icodelabs.co/services/sharetribe" },
    keywords: "sharetribe experts, best sharetribe mobile apps, best sharetribe developers, best sharetribe development company, sharetribe app developer, hire sharetribe developer",

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

    // OPEN GRAPH - Optimized for social sharing
    openGraph: {
      type: "website",
      title: "Sharetribe Development Company | Vetted Experts for Custom Marketplaces",
      description: "Launch faster with iCodelabs — vetted Sharetribe experts for custom marketplace development, mobile apps, payments, bookings, and AI add-ons.",
      url: "https://icodelabs.co/services/sharetribe",
      siteName: "iCodelabs",
      images: [
        {
          url: "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png",
          width: 1200,
          height: 630,
          alt: "iCodelabs - Expert Sharetribe Marketplace Development Company",
        },
      ],
    },

    // TWITTER
    twitter: {
      card: "summary_large_image",
      title: "Sharetribe Development Company | Vetted Experts for Custom Marketplaces",
      description: "iCodelabs builds custom Sharetribe marketplaces with payments, bookings, mobile apps, and AI features.",
      images: [
        "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png",
      ],
    },
 }; 
 
 export default function RootLayout({ children }) {
   return (
    <>
      {/* JSON-LD: Google-Compliant Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            // BreadcrumbList Schema
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { 
                  "@type": "ListItem", 
                  "position": 1, 
                  "name": "Home", 
                  "item": "https://icodelabs.co/" 
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Sharetribe Development Services",
                  "item": "https://icodelabs.co/services/sharetribe"
                }
              ]
            },
            // Organization Schema (Basic - No Fake Credentials)
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "iCodelabs",
              "url": "https://icodelabs.co",
              "logo": "https://res.cloudinary.com/dwpvv68ii/image/upload/v1759140505/Group_1410089110_2_paglw7.png",
              "description": "Expert Sharetribe development company specializing in custom marketplace solutions",
              "areaServed": "Worldwide",
              "knowsAbout": [
                "Sharetribe Development", 
                "Marketplace Development", 
                "Custom Marketplace Solutions",
                "Mobile App Development",
                "Payment Integration"
              ]
            },
            // Service Schema
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Sharetribe Marketplace Development",
              "serviceType": "Custom Marketplace Development",
              "provider": {
                "@type": "Organization",
                "name": "iCodelabs",
                "url": "https://icodelabs.co"
              },
              "areaServed": "Worldwide",
              "url": "https://icodelabs.co/services/sharetribe",
              "description": "Expert Sharetribe development services including custom marketplace development, mobile apps, payment integration, booking systems, and AI features. 50+ successful projects delivered.",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "USD"
              }
            },
            // FAQ Schema (Only include if FAQs are visible on the page)
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Why choose iCodelabs for Sharetribe development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "iCodelabs is an experienced Sharetribe development company with 50+ successful marketplace projects delivered. Our team specializes in custom marketplace development, mobile apps, payment integration, and advanced features."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many Sharetribe marketplaces has iCodelabs built?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "iCodelabs has successfully delivered 50+ custom Sharetribe marketplace projects across various industries including rental marketplaces, service platforms, booking systems, and e-commerce solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What Sharetribe development services does iCodelabs offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "iCodelabs offers comprehensive Sharetribe development services including custom marketplace development, mobile app development (iOS & Android), payment gateway integration, booking system implementation, AI feature integration, custom workflows, and ongoing maintenance and support."
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