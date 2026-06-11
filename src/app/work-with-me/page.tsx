import type { Metadata } from 'next';
import WorkWithMeContent from './WorkWithMeContent';

export const metadata: Metadata = {
  title: 'Work With Me',
  description: 'Explore sacred spaces to remember, heal, and awaken your creative energy through the union of mind, body, and soul with Kunti at Shakti Loto.',
  openGraph: {
    title: 'Work With Me | Shakti Loto',
    description: 'Spaces to remember, heal, and awaken your creative energy.',
  },
};

export default function WorkWithMePage() {
  return <WorkWithMeContent />;
}
