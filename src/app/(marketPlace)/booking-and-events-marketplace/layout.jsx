import { bookingEventsFAQs } from "./faqData";

const CANONICAL = "https://icodelabs.co/booking-and-events-marketplace";
const OG_IMAGE =
  "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png";

const BOOKING_FEATURES = [
  "Real-time availability calendars",
  "Ticketing & RSVPs",
  "Calendar sync (Cronofy / Google / Outlook)",
  "Time-based pricing & discounts",
  "Geo search & filters",
  "Stripe payments & split payouts",
  "Cancellations & automated refunds",
  "Reminders & notifications",
  "AI-powered recommendations",
];

export const metadata = {
  // PRIMARY SEO
  title: "Booking & Events Marketplace Development | Sharetribe – iCodelabs",
  description:
    "Build a booking & events marketplace with calendars, ticketing, Stripe payments, cancellations, and AI recommendations. Sharetribe or custom — most builds live in 6–10 weeks.",
  keywords:
    "booking marketplace development, event marketplace development, ticketing platform, appointment booking marketplace, sharetribe booking marketplace, calendar sync",
  alternates: {
    canonical: CANONICAL,
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
    title: "Booking & Events Marketplace Development | iCodelabs",
    description:
      "Calendars, ticketing, payments, cancellations, and AI recommendations — built to scale on Sharetribe or custom.",
    url: CANONICAL,
    siteName: "iCodelabs",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Booking & events marketplace interface by iCodelabs",
      },
    ],
  },
  // TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Booking & Events Marketplace Development | iCodelabs",
    description:
      "End-to-end booking flows with ticketing, payments, and AI — on Sharetribe or custom headless.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      {/* STRUCTURED DATA: Service + OfferCatalog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${CANONICAL}#service`,
            name: "Booking & Events Marketplace Development",
            url: CANONICAL,
            description:
              "Custom booking and events marketplace development including availability calendars, time-based pricing, ticketing and RSVPs, split payments, cancellations, reminders, and AI-powered recommendations.",
            serviceType: "Marketplace Development",
            areaServed: "Worldwide",
            provider: {
              "@type": "Organization",
              name: "iCodelabs",
              url: "https://icodelabs.co",
              logo: {
                "@type": "ImageObject",
                url: "https://res.cloudinary.com/dwpvv68ii/image/upload/v1759140505/Group_1410089110_2_paglw7.png",
              },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Booking & Events Marketplace Features",
              itemListElement: BOOKING_FEATURES.map((name) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name },
              })),
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
              { "@type": "ListItem", position: 2, name: "Booking & Events Marketplace", item: CANONICAL },
            ],
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
            "@id": `${CANONICAL}#faq`,
            mainEntity: bookingEventsFAQs.map((q) => ({
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
