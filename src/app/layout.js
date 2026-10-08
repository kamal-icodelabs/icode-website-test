import "./globals.css";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import CustomQueryProvider from "./react-query/CustomQueryProvider";
import TawkChat from "@/component/TawkChat/TawkChat";
// import GoogleAdSense from "@/components/GoogleAdSense/GoogleAdSense";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";
import CalendlyTracker from "@/component/Analytics/CalendlyTracker";
import {
  Inter_Tight,
  Inter,
  Playfair_Display,
  DM_Sans,
  Space_Grotesk,
  Figtree,
  Krona_One,
  Lora,
  Montserrat,
  Instrument_Sans,
  Geist,
  Unbounded,
  Rubik,
  Poppins,
} from "next/font/google";

// Inter Tight is the body default + used in the hero. Keep its preload.
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

// All other Google fonts are below-fold or rarely used. Disable their
// <link rel="preload"> so they don't compete with the hero image for early
// bandwidth on mobile. Browser still fetches them when CSS first needs them.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

const player = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-player",
  display: "swap",
  preload: false,
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dmsans",
  display: "swap",
  preload: false,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: false,
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
  preload: false,
});
const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kronone",
  display: "swap",
  preload: false,
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lora",
  display: "swap",
  preload: false,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
  preload: false,
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrumentsans",
  display: "swap",
  preload: false,
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-unbounded",
  display: "swap",
  preload: false,
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
  preload: false,
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: false,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http")
  ? process.env.NEXT_PUBLIC_SITE_URL
  : "https://icodelabs.co";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  // Default metadata (overridden by page-specific metadata)
  title: "iCodelabs — Marketplace, App & AI Development",
  description:
    "iCodelabs builds custom marketplaces, mobile apps, and AI-driven platforms using Sharetribe, React, and modern stacks. Trusted by 50+ global clients.",

  // Keywords for SEO
  keywords: [
    "marketplace development",
    "sharetribe expert",
    "mobile app development",
    "web development",
    "AI development",
    "React development",
    "custom software development",
    "iCodelabs",
  ],

  // Author and publisher
  authors: [{ name: "iCodelabs", url: "https://icodelabs.co" }],
  creator: "iCodelabs",
  publisher: "iCodelabs",

  // Icons
  icons: {
    icon: [
      {
        url: "/favicon_dark.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon_light.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  // Manifest for PWA
  manifest: "/site.webmanifest",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph defaults
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "iCodelabs",
  },

  // Twitter defaults
  twitter: {
    card: "summary_large_image",
    site: "@icodelabs",
    creator: "@icodelabs",
  },
};

// Viewport configuration for responsive design
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${poppins.variable} ${rubik.variable} ${inter.variable} ${player.variable} ${dmSans.variable} ${lora.variable} ${spaceGrotesk.variable} ${figtree.variable} ${kronaOne.variable} ${montserrat.variable} ${instrumentSans.variable} ${unbounded.variable}`}
      style={{ "--font-arial": "Arial, sans-serif" }}
    >
      <head>
        {/* Speed up the Cal Sans stylesheet fetch — DNS + TLS handshake to
            fonts.googleapis.com / fonts.gstatic.com is a measurable LCP cost
            on cold mobile sessions. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cal+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <GoogleAnalytics />
        <CalendlyTracker />

        {/* <GoogleAdSense /> */}
        <TawkChat />

        <CustomQueryProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CustomQueryProvider>
      </body>
    </html>
  );
}
