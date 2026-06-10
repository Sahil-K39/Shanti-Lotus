import type { Metadata } from 'next';
import MentorshipContent from './MentorshipContent';

export const metadata: Metadata = {
  title: '1:1 Mentorship',
  description: 'Deep support to reconnect with your energy, release blockages, and return to your center. Individual sessions and 1:1 mentorship with Kunti.',
  openGraph: {
    title: '1:1 Mentorship | Shakti Lotus',
    description: 'Deep support to reconnect with your energy, release blockages, and return to your center.',
  },
};

export default function MentorshipPage() {
  return <MentorshipContent />;
}
