import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { ProjectsSection } from '@/components/sections/ProjectsSection';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Selected work — Vasitum AI recruitment, Maven Workforce brand & UI, RESQ accident emergency alert.'
};

export default function PortfolioPage() {
  return (
    <PageShell
      eyebrow="02 — Portfolio"
      title="Portfolio"
      intro="Three end-to-end products. Each shipped under one design hand — challenge, thinking, decisions, outcomes."
      prev={{ href: '/about', label: 'About' }}
      next={{ href: '/stack', label: 'Stack' }}
    >
      <ProjectsSection />
    </PageShell>
  );
}
