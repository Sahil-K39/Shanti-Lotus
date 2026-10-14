import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Kunti',
  description: 'Namaste, I am Kunti — Tantric Yogini and traveler of this Earth. Learn about the spiritual journey behind Shakti Lotus.',
  openGraph: {
    title: 'About Kunti | Shakti Lotus',
    description: 'Namaste, I am Kunti — Tantric Yogini and traveler of this Earth.',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
