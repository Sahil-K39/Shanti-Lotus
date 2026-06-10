import type { Metadata } from 'next';
import RetreatsContent from './RetreatsContent';

export const metadata: Metadata = {
  title: 'Retreats & Courses',
  description: 'Immersive spaces for transformation, healing, movement, ritual, and remembrance. Join Kunti for sacred retreats and courses.',
  openGraph: {
    title: 'Retreats & Courses | Shakti Lotus',
    description: 'Immersive spaces for transformation, healing, movement, ritual, and remembrance.',
  },
};

export default function RetreatsPage() {
  return <RetreatsContent />;
}
