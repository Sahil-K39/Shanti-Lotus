import type { Metadata } from "next";
import RitualsSessionsContent from "./RitualsSessionsContent";

export const metadata: Metadata = {
  title: "Rituals & Sessions",
  description:
    "Individual sessions, ritual spaces, feminine energy work, and spiritual integration with Kunti at Shakti Lotus.",
  openGraph: {
    title: "Rituals & Sessions | Shakti Lotus",
    description: "Deep guidance to reconnect with your energy, release blockages, and return to your center.",
  },
};

export default function RitualsSessionsPage() {
  return <RitualsSessionsContent />;
}
