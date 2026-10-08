export const metadata = {
  // PRIMARY SEO
  title: "About iCodelabs | Sharetribe & AI Marketplace Builders",
  description:
    "iCodelabs is a product-focused web & mobile engineering studio. We build Sharetribe marketplaces, custom apps, and AI-enabled experiences with an agile, transparent approach.",
  alternates: {
    canonical: "https://icodelabs.co/aboutus",
    languages: {
      en: "https://icodelabs.co/aboutus",
      "x-default": "https://icodelabs.co/aboutus",
    },
  },
  keywords:
    "iCodelabs, Sharetribe development company, marketplace platform development, custom software solutions, AI development, agile software development",


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
    title: "About iCodelabs | Product-Minded Web & Mobile Engineering Team",
    description:
      "We blend speed, craftsmanship, and transparency to ship marketplaces, web, and mobile apps—plus pragmatic AI where it adds value.",
    url: "https://icodelabs.co/aboutus",
    siteName: "iCodelabs",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png",
        width: 1200,
        height: 630,
        alt: "iCodelabs team — About us",
      },
    ],
  },
  // TWITTER
  twitter: {
    card: "summary_large_image",
    title: "About iCodelabs | Product-Minded Web & Mobile Engineering Team",
    description:
      "Sharetribe experts, custom web & mobile apps, and pragmatic AI. Learn how we work and what we value.",
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
      {/* JSON-LD: AboutPage + Breadcrumbs (consolidated) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About iCodelabs",
            url: "https://icodelabs.co/aboutus",
            description:
              "iCodelabs is a product-focused engineering studio specializing in Sharetribe marketplaces, SaaS platforms, and AI-enabled web & mobile applications.",
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://icodelabs.co/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About Us",
                  item: "https://icodelabs.co/aboutus",
                },
              ],
            },
            about: {
              "@type": "Organization",
              name: "iCodelabs",
              url: "https://icodelabs.co",
              logo: "https://icodelabs.co/favicon_dark.ico", 
              areaServed: ["Global"],
              knowsAbout: [
                "Sharetribe marketplace development",
                "Custom software development", 
                "Web and mobile app development",
                "AI-powered applications",
              ],
              sameAs: [
                "https://www.linkedin.com/company/icodelabs",
                "https://twitter.com/icodelabs",
              ],
            },
            isPartOf: {
              "@type": "WebSite",
              name: "iCodelabs",
              url: "https://icodelabs.co",
            },
          }),
        }}
      />

      {children}
    </>
  );
}