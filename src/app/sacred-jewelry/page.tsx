import type { Metadata } from "next";
import SacredJewelryContent from "./SacredJewelryContent";

export const metadata: Metadata = {
  title: "Sacred Jewelry / Shop",
  description:
    "Jewelry of the Soul by Kunti Shakti Loto: sacred adornments, ritual talismans, and devotional pieces.",
  openGraph: {
    title: "Sacred Jewelry / Shop | Shakti Loto",
    description: "Intentional adornments created as talismans for devotion, protection, beauty, and remembrance.",
  },
};

export default function SacredJewelryPage() {
  return <SacredJewelryContent />;
}
