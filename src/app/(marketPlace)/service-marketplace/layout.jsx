import { serviceMarketplaceFAQs } from "./faqData";

const CANONICAL = "https://icodelabs.co/service-marketplace";
const OG_IMAGE =
  "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png";

export const metadata = {
  // PRIMARY SEO
  title: "Service Marketplace Development | Sharetribe Experts – iCodelabs",
  description:
    "Launch a service marketplace with booking, Cronofy calendar sync, milestone payments, reviews, and AI matching. Sharetribe or fully custom — most builds live in 5–8 weeks.",
  keywords:
    "service marketplace development, custom service marketplace, sharetribe service marketplace, booking marketplace, on-demand services platform, TaskRabbit clone",
  alternates: {
    canonical: "/service-marketplace",
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
    title: "Service Marketplace Development | Sharetribe Experts",
    description:
      "From MVP to scale: build a service marketplace with booking calendars, milestone payments, video calls, and AI matching.",
    url: CANONICAL,
    siteName: "iCodelabs",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "iCodelabs — Service marketplace development",
      },
    ],
  },
  // TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Service Marketplace Development | Sharetribe Experts",
    description:
      "Launch faster with Sharetribe or go custom. Booking calendars, milestone payments, video calls, AI matching.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      {/* STRUCTURED DATA: WebPage + Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Service Marketplace Development",
            url: CANONICAL,
            description:
              "Build and launch custom service marketplaces with iCodelabs — powered by Sharetribe, React, and Node.js.",
            publisher: {
              "@type": "Organization",
              name: "iCodelabs",
              url: "https://icodelabs.co",
              logo: "https://res.cloudinary.com/dwpvv68ii/image/upload/v1759140505/Group_1410089110_2_paglw7.png",
              sameAs: [
                "https://twitter.com/icodelabs",
                "https://www.linkedin.com/company/icodelabs",
              ],
            },
            mainEntity: {
              "@type": "Service",
              serviceType: "Custom Service Marketplace Development",
              provider: { "@type": "Organization", name: "iCodelabs" },
              areaServed: "Worldwide",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Service Marketplace Features",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-step provider onboarding" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real-time booking calendar" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cronofy / Google Calendar sync" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video calls (Agora / Zoom)" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Milestone & split payments" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI provider matching" } },
                ],
              },
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
              { "@type": "ListItem", position: 2, name: "Service Marketplace", item: CANONICAL },
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
            mainEntity: serviceMarketplaceFAQs.map((q) => ({
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
