import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageModal from "@/components/LanguageModal";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://shaktiloto.com"),
  title: {
    default: "Shakti Lotus — A path back to your universal divine essence",
    template: "%s | Shakti Lotus",
  },
  description:
    "A path back to your universal divine essence. Walking as a bridge between the earth and the spirit, awakening ancestral wisdom and creative energy with Kunti.",
  keywords: [
    "Shakti Lotus",
    "Kunti",
    "Tantric Yogini",
    "South America",
    "Asia",
    "Shakta Tantra",
    "Devi Yoga",
    "Ayurveda",
    "Divine Dance",
    "Sacred Jewelry",
    "Alchemy and Botanicals",
    "Rituals and Altars",
    "Retreats and Courses",
  ],
  authors: [{ name: "Kunti" }],
  creator: "Shakti Lotus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Shakti Lotus",
    title: "Shakti Lotus — A path back to your universal divine essence",
    description:
      "A path back to your universal divine essence. Walking as a bridge between the earth and the spirit.",
    images: [
      {
        url: "/shakti-logo-assets/shakti-loto-logo.png",
        width: 1254,
        height: 1254,
        alt: "Shakti Lotus Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shakti Lotus — A path back to your universal divine essence",
    description: "A path back to your universal divine essence.",
    images: ["/shakti-logo-assets/shakti-loto-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/shakti-logo-assets/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/shakti-logo-assets/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/shakti-logo-assets/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/shakti-logo-assets/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="sacred-bg font-body antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <LanguageModal />
        </LanguageProvider>
      </body>
    </html>
  );
}
