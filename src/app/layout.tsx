import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

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
    default: "Shakti Loto — Site Offline",
    template: "%s | Shakti Loto",
  },
  description: "The Shakti Loto website is temporarily offline.",
  keywords: ["Shakti Loto", "Kunti Shakti Loto"],
  authors: [{ name: "Kunti" }],
  creator: "Shakti Loto",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Shakti Loto",
    title: "Shakti Loto — Site Offline",
    description: "The Shakti Loto website is temporarily offline.",
    images: [
      {
        url: "/images/generated/shakti-loto-water-card-portrait-hq.png",
        width: 1200,
        height: 630,
        alt: "Kunti Shakti Loto water ritual image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shakti Loto — Site Offline",
    description: "The Shakti Loto website is temporarily offline.",
    images: ["/images/generated/shakti-loto-water-card-portrait-hq.png"],
  },
  robots: {
    index: false,
    follow: false,
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
        {children}
      </body>
    </html>
  );
}
