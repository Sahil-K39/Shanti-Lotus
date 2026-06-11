import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Begin your journey back to the sacred within. Contact Kunti at Shakti Loto for rituals, retreats, and sacred offerings.',
  openGraph: {
    title: 'Contact Kunti | Shakti Loto',
    description: 'Begin your journey back to the sacred within.',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
