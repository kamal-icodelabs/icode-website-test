import { sharetribeFeatureModulesData } from "@/component/helperData";

const CANONICAL = "https://icodelabs.co/services/sharetribe-extension";
const OG_IMAGE = "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png";

const parseLowPrice = (range) => {
  const match = String(range || "").match(/\$([\d,]+)/);
  return match ? Number(match[1].replace(/,/g, "")) : undefined;
};

const offerCatalogItems = Object.entries(sharetribeFeatureModulesData).flatMap(
  ([category, modules]) =>
    modules.map((module) => {
      const price = parseLowPrice(module.investment);
      return {
        "@type": "Offer",
        category,
        itemOffered: {
          "@type": "Service",
          name: module.title,
          description: module.description,
        },
        ...(price ? { price, priceCurrency: "USD" } : {}),
        ...(module.investment ? { priceSpecification: module.investment } : {}),
      };
    }),
);

export const metadata = {
  title: "Sharetribe Extension & Feature Modules | iCodelabs",
  description:
    "Add features to your existing Sharetribe marketplace — fixed-scope, fixed-price modules implemented for your setup. Browse the iCodelabs feature module catalogue.",
  alternates: { canonical: CANONICAL },
  keywords:
    "sharetribe extension, sharetribe feature modules, sharetribe plugin development, sharetribe customization, sharetribe add-ons",

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
    title: "Sharetribe Extension & Feature Modules | iCodelabs",
    description:
      "Add features to your existing Sharetribe marketplace — fixed-scope, fixed-price modules implemented for your setup.",
    url: CANONICAL,
    siteName: "iCodelabs",
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: "iCodelabs — Sharetribe Extension Services" },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sharetribe Extension & Feature Modules | iCodelabs",
    description:
      "Add features to your existing Sharetribe marketplace — fixed-scope modules implemented by Sharetribe vetted experts.",
    images: [OG_IMAGE],
  },
};

export default function SharetribeExtensionLayout({ children }) {
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
                { "@type": "ListItem", position: 2, name: "Sharetribe Extension", item: CANONICAL },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Sharetribe Extension & Feature Modules",
              serviceType: "Sharetribe Marketplace Customization",
              provider: { "@type": "Organization", name: "iCodelabs", url: "https://icodelabs.co" },
              areaServed: "Worldwide",
              url: CANONICAL,
              description:
                "Fixed-scope, fixed-price feature modules for existing Sharetribe marketplaces. Implemented by Sharetribe vetted experts.",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Sharetribe Feature Modules",
                itemListElement: offerCatalogItems,
              },
            },
          ]),
        }}
      />
      {children}
    </>
  );
}
