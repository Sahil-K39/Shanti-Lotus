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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://shaktiloto.com"),
  title: {
    default: "Kunti Shakti Loto — Multidisciplinary Artist",
    template: "%s | Shakti Loto",
  },
  description:
    "Shakti Loto is a sacred feminine space with Kunti for Tantra, plant medicine, rituals, Ayurveda, retreats, sacred jewelry, and creative energy awakening.",
  keywords: [
    "Shakti Loto",
    "Kunti Shakti Loto",
    "tantric yogini",
    "plant medicine",
    "sacred feminine",
    "herbal alchemy",
    "Shakta Tantra",
    "Devi Yoga",
    "Ayurveda",
    "sacred jewelry",
    "retreats",
  ],
  authors: [{ name: "Kunti" }],
  creator: "Shakti Loto",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Shakti Loto",
    title: "Kunti Shakti Loto — Multidisciplinary Artist",
    description:
      "A sacred return to your divine essence through ancient plant wisdom, alchemy, Tantra, and feminine embodiment.",
    images: [
      {
        url: "/images/generated/shakti-loto-water-card-portrait.png",
        width: 1200,
        height: 630,
        alt: "Kunti Shakti Loto water ritual image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunti Shakti Loto — Multidisciplinary Artist",
    description: "A sacred return to your divine essence.",
    images: ["/images/generated/shakti-loto-water-card-portrait.png"],
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
      <body className="sacred-bg font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
