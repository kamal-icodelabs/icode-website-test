const CANONICAL = "https://icodelabs.co/contact";
const OG_IMAGE =
  "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png";

export const metadata = {
  title: "Contact iCodelabs | Marketplace & Software Development",
  description:
    "Talk to iCodelabs about your marketplace, web, mobile, or AI project. Email, call, or book a free 30-minute discovery call with our development team.",
  alternates: { canonical: CANONICAL },
  keywords:
    "contact icodelabs, marketplace development contact, sharetribe development, web development india, get a quote",
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
    title: "Contact iCodelabs | Marketplace & Software Development",
    description:
      "Reach our team for marketplace, web, mobile, and AI development. Email, call, or book a free discovery call.",
    url: CANONICAL,
    siteName: "iCodelabs",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Contact iCodelabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact iCodelabs | Marketplace & Software Development",
    description:
      "Email, call, or book a free 30-minute discovery call with the iCodelabs development team.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact iCodelabs",
            url: CANONICAL,
            description:
              "Get in touch with iCodelabs for marketplace, web, mobile, and AI development.",
            mainEntity: {
              "@type": "Organization",
              name: "iCodelabs",
              url: "https://icodelabs.co",
              logo: "https://res.cloudinary.com/dwpvv68ii/image/upload/v1759140505/Group_1410089110_2_paglw7.png",
              email: "hello@icodelabs.co",
              address: {
                "@type": "PostalAddress",
                streetAddress: "D-176, Phase 8B, Industrial Area, Sector 74",
                addressLocality: "Sahibzada Ajit Singh Nagar",
                addressRegion: "Punjab",
                postalCode: "160055",
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "Sales",
                  email: "hello@icodelabs.co",
                  telephone: "+91-98777-88646",
                  areaServed: "Worldwide",
                  availableLanguage: ["en"],
                },
                {
                  "@type": "ContactPoint",
                  contactType: "Customer Support",
                  email: "hello@icodelabs.co",
                  telephone: "+91-83604-42703",
                  areaServed: "Worldwide",
                  availableLanguage: ["en"],
                },
                {
                  "@type": "ContactPoint",
                  contactType: "Human Resources",
                  email: "hr@icodelabs.co",
                  areaServed: "Worldwide",
                  availableLanguage: ["en"],
                },
              ],
              sameAs: [
                "https://www.linkedin.com/company/icodelabs",
                "https://twitter.com/icodelabs",
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://icodelabs.co/" },
              { "@type": "ListItem", position: 2, name: "Contact", item: CANONICAL },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
