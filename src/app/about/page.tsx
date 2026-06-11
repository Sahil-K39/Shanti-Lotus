import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Kunti',
  description: 'Namaste, I am Kunti — Tantric Yogini and traveler of this Earth. Learn about the spiritual journey behind Shakti Loto.',
  openGraph: {
    title: 'About Kunti | Shakti Loto',
    description: 'Namaste, I am Kunti — Tantric Yogini and traveler of this Earth.',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
