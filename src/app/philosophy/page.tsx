import type { Metadata } from 'next';
import PhilosophyContent from './PhilosophyContent';

export const metadata: Metadata = {
  title: 'Philosophy',
  description: 'Discover the sacred philosophy of Shakti Loto with Kunti — bridging ancestral Earth wisdom and Tantric embodiment.',
  openGraph: {
    title: 'Philosophy | Shakti Loto',
    description: 'Discover the sacred philosophy of Shakti Loto with Kunti — bridging ancestral Earth wisdom and Tantric embodiment.',
  },
};

export default function PhilosophyPage() {
  return <PhilosophyContent />;
}
