import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { SkillsSection } from '@/components/sections/SkillsSection';

export const metadata: Metadata = {
  title: 'Stack',
  description:
    'The toolkit — Figma at the core, motion and prototyping for shape, analytics and brand tools for proof.'
};

export default function StackPage() {
  return (
    <PageShell
      eyebrow="03 — Stack"
      title="Stack"
      intro="Sharp tools, used daily. Figma at the core for design and system work. Framer and After Effects for motion. Mixpanel, Metabase and Hotjar to keep design honest with data."
      prev={{ href: '/portfolio', label: 'Portfolio' }}
      next={{ href: '/contact', label: 'Contact' }}
    >
      <SkillsSection />
    </PageShell>
  );
}
