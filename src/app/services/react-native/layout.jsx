const CANONICAL = "https://icodelabs.co/services/react-native";
const OG_IMAGE =
  "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png";

export const metadata = {
  title: "React Native Mobile App Development Services & Company",
  description:
    "Boost your mobile presence with top-tier React Native app development services. iCode Labs is a trusted react native mobile application development company for scalable solutions.",
  alternates: { canonical: CANONICAL },
  keywords:
    "react native app development company, react native app development services, react native app development react native development services, react native mobile app development, react native development agency, react native app developer, native app development",
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
    title: "React Native Mobile App Development Services — iCodelabs",
    description:
      "Scalable React Native mobile apps for iOS & Android by iCodelabs — marketplace-ready features, secure APIs, modern UI.",
    url: CANONICAL,
    siteName: "iCodelabs",
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: "iCodelabs — React Native Mobile App Development" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Native Mobile App Development Services — iCodelabs",
    description:
      "Scalable React Native mobile apps for iOS & Android — marketplace-ready features, modern UI.",
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
            name: "React Native Mobile App Development",
            serviceType: "React Native, iOS & Android App Development",
            url: CANONICAL,
            description:
              "Scalable React Native mobile apps for iOS & Android by iCodelabs — marketplace-ready features, secure APIs, modern UI.",
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
