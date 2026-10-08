import { rentalFAQs } from "./faqData";

export const metadata = {
  // PRIMARY SEO
  title: "Rental Marketplace Development | Sharetribe Experts – iCodelabs",
  description:
    "Build a rental marketplace with Sharetribe or fully custom. Availability calendars, security deposits, damage protection, time-based pricing, and Stripe Connect split payouts. Vetted Sharetribe Expert Partner. Fixed price from $3,000. 50+ marketplace builds delivered.",
  alternates: {
    canonical: "/rental-marketplace",
  },
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
    title: "Rental Marketplace Development | Sharetribe Experts",
    description:
      "From MVP to scale: build a rental marketplace with calendars, deposits, damage fees, geo search, and AI assistance.",
    url: "https://icodelabs.co/rental-marketplace",
    siteName: "iCodelabs",
    images: [
      {
        url: "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png",
        width: 1200,
        height: 630,
        alt: "iCodelabs — Rental marketplace development",
      },
    ],
  },
  // TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Rental Marketplace Development | Sharetribe Experts",
    description:
      "Launch faster with Sharetribe or go custom. Time-based pricing, availability calendars, deposits, ID checks, AI features.",
    images: [
      "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      {/* STRUCTURED DATA: Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Rental Marketplace Development",
            url: "https://icodelabs.co/rental-marketplace",
            provider: {
              "@type": "Organization",
              name: "iCodelabs",
              url: "https://icodelabs.co",
              logo: "https://icodelabs.co/favicon.ico",
              sameAs: [
                "https://experts.sharetribe.com",
                "https://www.linkedin.com/company/icodelabs",
                "https://twitter.com/icodelabs",
              ],
            },
            serviceType: "Marketplace Development",
            areaServed: "Worldwide",
            description:
              "Custom rental marketplace development with availability calendars, deposits, damage protection, time-based pricing, and Stripe Connect payments.",
            offers: {
              "@type": "Offer",
              price: "3000",
              priceCurrency: "USD",
              description: "Rental marketplace starting from $3,000",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Rental Marketplace Features",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Time-based pricing" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Availability calendars" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Security deposits & damage fees" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "ID verification" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Geo-based search" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI chat assistant & smart suggestions" } },
              ],
            },
          }),
        }}
      />

      {/* STRUCTURED DATA: Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://icodelabs.co/" },
              { "@type": "ListItem", position: 2, name: "Rental Marketplace", item: "https://icodelabs.co/rental-marketplace" },
            ],
          }),
        }}
      />

      {/* STRUCTURED DATA: FAQPage (must match on-page FAQs) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: rentalFAQs.map((q) => ({
              "@type": "Question",
              name: q.question,
              acceptedAnswer: { "@type": "Answer", text: q.answer },
            })),
          }),
        }}
      />

      {children}
    </>
  );
}
