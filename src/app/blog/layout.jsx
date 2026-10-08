const OG_IMAGE =
  "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png";
const LOGO_IMAGE =
  "https://res.cloudinary.com/dwpvv68ii/image/upload/v1759140505/Group_1410089110_2_paglw7.png";

export const metadata = {
  // PRIMARY SEO
  title: "iCodelabs Blog | Marketplaces, Web, Mobile & AI Insights",
  description:
    "Fresh tutorials and opinions from iCodelabs on marketplace apps, React Native, Flutter, Sharetribe, AI features, and product delivery.",
  alternates: {
    canonical: "https://icodelabs.co/blog",
    languages: {
      en: "https://icodelabs.co/blog",
      "x-default": "https://icodelabs.co/blog",
    },
    types: {
      "application/rss+xml": [
        { url: "https://icodelabs.co/blog/rss.xml", title: "iCodelabs Blog RSS" },
      ],
    },
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
    title: "iCodelabs Blog",
    description: "Articles on marketplaces, mobile, web, and AI from the iCodelabs team.",
    url: "https://icodelabs.co/blog",
    siteName: "iCodelabs",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "iCodelabs Blog",
      },
    ],
  },
  // TWITTER
  twitter: {
    card: "summary_large_image",
    title: "iCodelabs Blog",
    description: "Marketplaces, mobile, web, and AI—by practitioners, for builders.",
    images: [OG_IMAGE],
    site: "@icodelabs",
    creator: "@icodelabs",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      {/* JSON-LD: Blog publication. BreadcrumbList is emitted per-page so the
          article pages can extend it to Home → Blog → [Article Title]. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "iCodelabs Blog",
            url: "https://icodelabs.co/blog",
            description:
              "Insights on marketplace development, React Native, Flutter, Sharetribe, and AI features.",
            publisher: {
              "@type": "Organization",
              name: "iCodelabs",
              url: "https://icodelabs.co",
              logo: { "@type": "ImageObject", url: LOGO_IMAGE },
              sameAs: [
                "https://www.linkedin.com/company/icodelabs",
                "https://twitter.com/icodelabs",
              ],
            },
          }),
        }}
      />
      {children}
    </>
  );
}
