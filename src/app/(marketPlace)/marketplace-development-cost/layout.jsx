import { marketplaceCostFAQs } from "./faqData";

const CANONICAL = "https://icodelabs.co/marketplace-development-cost";
const OG_IMAGE =
  "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png";

const PRICING_TIERS = [
  {
    name: "Lean Marketplace Build",
    description: "One flow, one platform, custom design. Web or mobile. ~2 weeks.",
    price: 3000,
  },
  {
    name: "Full Marketplace Build",
    description: "Multi-flow, scheduling, payments, search.",
    price: 4000,
  },
  {
    name: "Pro Marketplace Build",
    description: "AI features, complex integrations, web + mobile.",
    price: 6000,
  },
];

export const metadata = {
  title: "Marketplace Development Cost in 2026 — Real Pricing & Timelines | iCodelabs",
  description:
    "How much does it cost to build a marketplace in 2026? Real pricing from a team that has built 50+. Sharetribe builds from $3,000. Custom marketplace platforms from $8,000. Fixed pricing, no surprises. Free scoping call.",
  keywords:
    "marketplace development cost, sharetribe marketplace cost, custom marketplace pricing, marketplace MVP cost, marketplace development pricing, marketplace timeline",
  alternates: {
    canonical: CANONICAL,
  },
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
  openGraph: {
    type: "website",
    title: "Marketplace Development Cost 2026 | Real Pricing & Timelines",
    description:
      "Sharetribe vs custom marketplace costs. Pricing tiers ($3k–$6k+), 2–14 week delivery, and ongoing monthly costs — based on 50+ builds.",
    url: CANONICAL,
    siteName: "iCodelabs",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "iCodelabs — Marketplace Development Cost in 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketplace Development Cost 2026 | Real Pricing & Timelines",
    description:
      "Sharetribe vs custom pricing, timelines, and ongoing costs — based on 50+ marketplace builds.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      {/* STRUCTURED DATA: WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Marketplace Development Cost in 2026",
            url: CANONICAL,
            description:
              "Real pricing, timelines, and ongoing costs for marketplace development — Sharetribe and custom — based on 50+ builds.",
            inLanguage: "en-US",
            publisher: {
              "@type": "Organization",
              name: "iCodelabs",
              url: "https://icodelabs.co",
            },
          }),
        }}
      />

      {/* STRUCTURED DATA: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://icodelabs.co/" },
              { "@type": "ListItem", position: 2, name: "Marketplace Development Cost", item: CANONICAL },
            ],
          }),
        }}
      />

      {/* STRUCTURED DATA: Service + AggregateOffer + OfferCatalog (pricing tiers) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Marketplace Development",
            serviceType: "Marketplace Platform Development",
            url: CANONICAL,
            description:
              "Sharetribe-based and fully custom marketplace development, from MVP to enterprise. Fixed-price tiers from $3,000.",
            provider: {
              "@type": "Organization",
              name: "iCodelabs",
              url: "https://icodelabs.co",
            },
            areaServed: "Worldwide",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: 3000,
              highPrice: 6000,
              offerCount: PRICING_TIERS.length,
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Marketplace Build Tiers",
              itemListElement: PRICING_TIERS.map((t) => ({
                "@type": "Offer",
                name: t.name,
                price: t.price,
                priceCurrency: "USD",
                itemOffered: {
                  "@type": "Service",
                  name: t.name,
                  description: t.description,
                },
              })),
            },
          }),
        }}
      />

      {/* STRUCTURED DATA: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: marketplaceCostFAQs.map((q) => ({
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
