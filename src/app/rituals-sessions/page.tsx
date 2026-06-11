import type { Metadata } from "next";
import RitualsSessionsContent from "./RitualsSessionsContent";

export const metadata: Metadata = {
  title: "Rituals & Sessions",
  description:
    "Individual sessions, ritual spaces, feminine energy work, and spiritual integration with Kunti Shakti Loto.",
  openGraph: {
    title: "Rituals & Sessions | Shakti Loto",
    description: "Deep guidance to reconnect with your energy, release blockages, and return to your center.",
  },
};

export default function RitualsSessionsPage() {
  return <RitualsSessionsContent />;
}
