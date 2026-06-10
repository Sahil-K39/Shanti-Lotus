import type { Metadata } from 'next';
import PhilosophyContent from './PhilosophyContent';

export const metadata: Metadata = {
  title: 'Philosophy',
  description: 'The path of Shakti Lotus — to remember is to return to yourself. Explore the philosophy of sacred feminine wisdom, ancestral healing, and conscious embodiment.',
  openGraph: {
    title: 'Philosophy | Shakti Lotus',
    description: 'To remember is to return to yourself.',
  },
};

export default function PhilosophyPage() {
  return <PhilosophyContent />;
}
