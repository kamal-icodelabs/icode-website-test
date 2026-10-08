const CANONICAL = "https://icodelabs.co/services/digital-marketing";
const OG_IMAGE =
  "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png";

export const metadata = {
  title: "Best Digital Marketing Services & Company | SEO Expert | SMO | PPC",
  description:
    "Elevate your business (brand) with our expert digital marketing services & company. As the best marketing agency, we specialize in SEO, PPC, Google Ads, PPC, social media, local SEO, ecommerce SEO and more.",
  alternates: { canonical: CANONICAL },
  keywords:
    "digital marketing company, digital marketing agency digital marketing services, seo services, social media services social media marketing services, online marketing agency,best seo company, free seo audit, google ads agency,digital marketing expert",
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
    title: "Digital Marketing Services | SEO, PPC, Social — iCodelabs",
    description:
      "SEO, PPC, social media, and local/ecommerce SEO services from iCodelabs — built to scale alongside your product.",
    url: CANONICAL,
    siteName: "iCodelabs",
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: "iCodelabs — Digital Marketing Services" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | SEO, PPC, Social — iCodelabs",
    description:
      "SEO, PPC, social, and local/ecommerce SEO services from iCodelabs.",
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
            "@type": "Service",
            name: "Digital Marketing Services",
            serviceType: "Digital Marketing, SEO, PPC, Social Media",
            url: CANONICAL,
            description:
              "SEO, PPC, social media, and local/ecommerce SEO services from iCodelabs — built to scale alongside your product.",
            provider: {
              "@type": "Organization",
              name: "iCodelabs",
              url: "https://icodelabs.co",
            },
            areaServed: "Worldwide",
          }),
        }}
      />
      {children}
    </>
  );
}
