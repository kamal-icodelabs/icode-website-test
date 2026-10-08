const CANONICAL = "https://icodelabs.co/custom-marketplace-development";
const OG_IMAGE = "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png";

export const metadata = {
  title: "Custom Marketplace Development | Built From Scratch | iCodeLabs",
  description:
    "When off-the-shelf platforms can't fit your business model — iCodelabs builds fully custom marketplaces with bespoke transaction logic, AI features, and scale-ready architecture. Fixed-price proposals.",
  alternates: { canonical: CANONICAL },
  keywords:
    "custom marketplace development, B2B marketplace development, two-sided marketplace, AI marketplace platform, mobile-first marketplace, custom marketplace software, marketplace platform development",

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
    title: "Custom Marketplace Development | Built From Scratch | iCodeLabs",
    description:
      "When off-the-shelf platforms can't fit your business model — iCodelabs builds fully custom marketplaces with bespoke transaction logic, AI features, and scale-ready architecture.",
    url: CANONICAL,
    siteName: "iCodelabs",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "iCodelabs — Custom Marketplace Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom Marketplace Development | Built From Scratch | iCodeLabs",
    description:
      "iCodelabs builds fully custom marketplaces from scratch — bespoke transaction logic, AI features, fixed-price proposals.",
    images: [OG_IMAGE],
  },
};

export default function CustomMarketplaceLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://icodelabs.co/" },
                { "@type": "ListItem", position: 2, name: "Custom Marketplace Development", item: CANONICAL },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Custom Marketplace Development",
              serviceType: "Custom Marketplace Platform Development",
              provider: {
                "@type": "Organization",
                name: "iCodelabs",
                url: "https://icodelabs.co",
              },
              areaServed: "Worldwide",
              url: CANONICAL,
              description:
                "Fully custom marketplace platforms built from scratch — bespoke transaction logic, AI features, scale-ready architecture. For business models that exceed off-the-shelf platforms.",
            },
          ]),
        }}
      />
      {children}
    </>
  );
}
