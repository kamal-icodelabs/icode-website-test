import { productMarketplaceFAQs } from "./faqData";

const CANONICAL = "https://icodelabs.co/product-marketplace";
const OG_IMAGE =
  "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png";

const PRODUCT_FEATURES = [
  "Multi-Vendor Management",
  "Unified Checkout",
  "Inventory Management",
  "Discount Codes & Promotions",
  "Shipping Integration",
  "Commission & Split Payouts",
  "Product Reviews",
  "Return & Dispute System",
  "Mobile-First Design",
];

export const metadata = {
  // PRIMARY SEO
  title: "Product Marketplace Development | Multi-Vendor & Headless – iCodelabs",
  description:
    "Launch a scalable multi-vendor product marketplace with iCodelabs. Vendor onboarding, catalog, split payments, shipping, and AI search — on Sharetribe or custom headless.",
  keywords:
    "product marketplace development, multi-vendor marketplace, sharetribe product marketplace, headless commerce, split payments, vendor onboarding",
  alternates: {
    canonical: "/product-marketplace",
  },
  // ROBOTS
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  // OPEN GRAPH
  openGraph: {
    type: "website",
    title: "Product Marketplace Development | Multi-Vendor & Headless",
    description:
      "Launch and scale your multi-vendor product marketplace with expert development from iCodelabs.",
    url: CANONICAL,
    siteName: "iCodelabs",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Multi-vendor product marketplace by iCodelabs",
      },
    ],
  },
  // TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Product Marketplace Development | Multi-Vendor & Headless",
    description: "Vendor tools, inventory, payments, and AI search — built for scale.",
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
            name: "Product Marketplace Development",
            url: CANONICAL,
            description:
              "Custom multi-vendor product marketplace development with Sharetribe or headless stacks (React, Node.js). Vendor onboarding, catalog management, inventory, split payments, and AI search.",
            publisher: {
              "@type": "Organization",
              name: "iCodelabs",
              url: "https://icodelabs.co",
              logo: {
                "@type": "ImageObject",
                url: "https://res.cloudinary.com/dwpvv68ii/image/upload/v1759140505/Group_1410089110_2_paglw7.png",
              },
              sameAs: [
                "https://twitter.com/icodelabs",
                "https://www.linkedin.com/company/icodelabs/",
              ],
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
              { "@type": "ListItem", position: 2, name: "Product Marketplace", item: CANONICAL },
            ],
          }),
        }}
      />

      {/* STRUCTURED DATA: Service + OfferCatalog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Product Marketplace Development",
            serviceType: "Product Marketplace Development",
            url: CANONICAL,
            description:
              "Build a scalable multi-vendor product marketplace with iCodelabs. We deliver vendor onboarding, catalog & inventory, split payments, order flows, and AI search — on Sharetribe or a custom headless stack.",
            provider: {
              "@type": "Organization",
              name: "iCodelabs",
              url: "https://icodelabs.co",
            },
            areaServed: "Worldwide",
            category: "ProfessionalService",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Product Marketplace Features",
              itemListElement: PRODUCT_FEATURES.map((name) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name },
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
            mainEntity: productMarketplaceFAQs.map((q) => ({
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
