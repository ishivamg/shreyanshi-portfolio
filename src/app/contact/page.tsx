import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Open to senior product design roles, founding design opportunities, and selective freelance.'
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="04 — Contact"
      title="Contact"
      intro="Let's talk for something special. Reach out with a sentence about what you're building — replies within a day."
      prev={{ href: '/stack', label: 'Stack' }}
      next={{ href: '/resume', label: 'Resume' }}
    >
      <ContactSection />
    </PageShell>
  );
}
