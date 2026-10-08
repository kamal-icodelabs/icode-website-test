import { caseStudyContent } from "@/component/helperData";

const CANONICAL = "https://icodelabs.co/casestudy";
const SITE_URL = "https://icodelabs.co";
const OG_IMAGE = "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png";

const caseStudyListItems = caseStudyContent
  .filter((c) => c?.title && c?.link)
  .map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: c.title,
      description: c.description,
      url: `${SITE_URL}${c.link}`,
      image: c.image ? `${SITE_URL}${c.image}` : undefined,
    },
  }));

export const metadata = {
  title: "Marketplace Case Studies — Real Builds by iCodelabs",
  description:
    "Browse 20+ marketplace, mobile, and AI case studies from iCodelabs — rentals, services, bookings, eCommerce, and B2B. See what we've built and why founders choose us.",
  alternates: { canonical: CANONICAL },
  keywords:
    "marketplace case studies, sharetribe case studies, marketplace portfolio, mobile app case studies, icodelabs portfolio",

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
    title: "Marketplace Case Studies — Real Builds by iCodelabs",
    description:
      "20+ marketplaces, mobile apps, and AI platforms delivered by iCodelabs — rentals, services, bookings, eCommerce, and B2B.",
    url: CANONICAL,
    siteName: "iCodelabs",
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: "iCodelabs — Marketplace Case Studies" },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Marketplace Case Studies — Real Builds by iCodelabs",
    description: "20+ marketplace, mobile, and AI platforms delivered by iCodelabs.",
    images: [OG_IMAGE],
  },
};

export default function CaseStudyListingLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://icodelabs.co/" },
              { "@type": "ListItem", position: 2, name: "Case Studies", item: CANONICAL },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "iCodelabs Marketplace Case Studies",
            url: CANONICAL,
            numberOfItems: caseStudyListItems.length,
            itemListElement: caseStudyListItems,
          }),
        }}
      />
      {children}
    </>
  );
}
