import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://shaktilotus.com"),
  title: {
    default: "Shakti Lotus — A Path Back to Your Universal Divine Essence",
    template: "%s | Shakti Lotus",
  },
  description:
    "Shakti Lotus is a sacred space for deep reconnection with vital energy. Awaken your feminine essence through Tantra, Yoga, Ayurveda, and sacred rituals with Kunti.",
  keywords: [
    "Shakti Lotus",
    "sacred feminine",
    "tantra",
    "yoga",
    "ayurveda",
    "spiritual wellness",
    "feminine energy",
    "kundalini",
    "meditation",
    "retreats",
    "sacred rituals",
  ],
  authors: [{ name: "Kunti" }],
  creator: "Shakti Lotus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Shakti Lotus",
    title: "Shakti Lotus — A Path Back to Your Universal Divine Essence",
    description:
      "A sacred space for deep reconnection with vital energy. Awaken your feminine essence through Tantra, Yoga, Ayurveda, and sacred rituals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shakti Lotus - Sacred Feminine Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shakti Lotus — A Path Back to Your Universal Divine Essence",
    description:
      "A sacred space for deep reconnection with vital energy.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-body antialiased bg-ivory text-textDark overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
