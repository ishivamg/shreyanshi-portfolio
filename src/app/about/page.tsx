import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Senior Product Designer with five years across AI, SaaS, Fintech and Web3 — design systems, motion and product thinking.'
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="01 — About"
      title="About"
      intro="I'm Shreyanshi — UI/UX & Product Designer. Five years of shaping intuitive, visually engaging experiences across AI platforms, SaaS, Fintech and Web3. Below: the story, and the four teams that shaped how I work."
      next={{ href: '/portfolio', label: 'Portfolio' }}
    >
      <AboutSection />
      <div className="mt-24 md:mt-32">
        <div className="mb-10 flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-chalk-400 md:mb-14">
          <span className="h-px w-12 bg-white/20" />
          <span>Experience</span>
        </div>
        <ExperienceSection />
      </div>
    </PageShell>
  );
}
