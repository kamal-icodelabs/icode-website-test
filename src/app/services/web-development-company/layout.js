import { faqDataWeb } from "@/app/helpData";

const faqEntities = faqDataWeb
  .filter((q) => typeof q.answer === "string")
  .map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: { "@type": "Answer", text: q.answer },
  }));

export const metadata = {
  // PRIMARY SEO
  title: "Web Development Company | Next.js, React & Node.js – iCodelabs",
  description: "iCodelabs designs and builds fast, scalable web apps and websites using Next.js, React, Node.js, and AWS. From MVP to enterprise, we ship secure, SEO-ready products.",
  alternates: { canonical: "https://icodelabs.co/services/web-development-company" },
  keywords: "web development company, custom web app development services, ecommerce development services, next.js development services, react web development company",

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
    title: "Web Development Company | Next.js, React & Node.js – iCodelabs",
    description: "Fast, scalable web apps and websites using Next.js, React, Node.js, and AWS. MVP to enterprise with security, performance, and SEO built in.",
    url: "https://icodelabs.co/services/web-development-company",
    siteName: "iCodelabs",
    images: [
      {
        url: "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png",
        width: 1200,
        height: 630,
        alt: "iCodelabs — Web development services",
      },
    ],
  },

  // TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company | Next.js, React & Node.js – iCodelabs",
    description: "We build modern, secure, and SEO-ready web apps with Next.js, React, Node.js, and AWS.",
    images: [
      "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png",
    ],
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
                { "@type": "ListItem", "position": 2, "name": "Web Development", "item": "https://icodelabs.co/services/web-development-company" }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Web Development",
              serviceType: "Custom Web App & Website Development",
              provider: {
                "@type": "Organization",
                name: "iCodelabs",
                url: "https://icodelabs.co"
              },
              areaServed: "Global",
              url: "https://icodelabs.co/services/web-development-company",
              description: "Design and development of high-performance web apps and websites using Next.js, React, Node.js, TypeScript, and AWS. SEO-friendly, secure, and scalable.",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                lowPrice: 3000,
                highPrice: 20000,
                availability: "https://schema.org/InStock"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqEntities
            }
          ]),
        }}
      />
      {children}
    </>
  );
}