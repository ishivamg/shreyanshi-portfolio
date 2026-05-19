import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { experience, contact } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Resume — Shreyanshi Bhatnagar, Senior Product Designer. AI · SaaS · Fintech · Web3.'
};

const summary = [
  'End-to-end UI/UX across iOS, Android and Web',
  'Design systems built from zero — Auto Layout · Variables · Dev Mode',
  'User research, usability testing, heuristic evaluation',
  'Interaction design, motion, prototyping',
  'AI product UX — conversational flows, explainable surfaces',
  'Brand & marketing design across IG, FB, LinkedIn, email'
];

const tools = [
  'Figma',
  'FigJam',
  'Adobe XD',
  'Photoshop',
  'Illustrator',
  'After Effects',
  'Framer',
  'Mixpanel',
  'Metabase',
  'Retool',
  'Intercom',
  'Customer.io',
  'JIRA',
  'Loom',
  'Claude',
  'Midjourney',
  'Galileo AI',
  'Runway ML'
];

export default function ResumePage() {
  return (
    <PageShell
      eyebrow="05 — Resume"
      title="Resume"
      intro="A snapshot. Five years across AI, SaaS, Web3 and brand systems — research through design QA, under one hand."
      prev={{ href: '/contact', label: 'Contact' }}
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-14">
        <aside className="md:col-span-4">
          <div className="sticky top-32 space-y-6">
            <a
              href="/Shreyanshi-Bhatnagar-Resume.pdf"
              download
              className="group inline-flex w-full items-center justify-between gap-3 rounded-full bg-lime-400 px-6 py-4 text-[14px] font-medium text-noir-950 transition-colors hover:bg-lime-300"
            >
              <span>Download PDF</span>
              <Download className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:translate-y-0.5" />
            </a>

            <ul className="space-y-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5">
              <Row icon={<Mail className="h-4 w-4" />} label="Email" value={contact.email} />
              <Row icon={<Phone className="h-4 w-4" />} label="Phone" value={contact.phone} />
              <Row label="Location" value={contact.location} />
              <Row label="Status" value={contact.available} accent />
            </ul>

            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] px-5 py-4 text-[14px] text-chalk-100 transition-colors hover:bg-white/[0.05]"
            >
              <span>Start a project</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </aside>

        <article className="space-y-16 md:col-span-8 md:space-y-20">
          <Block title="Summary">
            <p className="text-[15px] leading-relaxed text-chalk-300">
              Senior Product Designer with 5+ years delivering end-to-end product design across
              fintech, AI platforms, Web3, SaaS and gaming. Built Figma design systems from zero to
              production at three companies, reducing iteration cycles by up to 40% and enabling
              async developer handoff across distributed teams. Currently building Vasi — an AI
              chatbot — solo from scratch.
            </p>
          </Block>

          <Block title="Core competencies">
            <ul className="grid grid-cols-1 gap-3 text-[14px] text-chalk-200 sm:grid-cols-2">
              {summary.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 h-px w-3 flex-none bg-lime-400" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Experience">
            <ol className="space-y-8">
              {experience.map((e, i) => (
                <li key={e.company} className="border-t border-white/[0.06] pt-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-display text-2xl text-chalk-50 md:text-3xl">{e.company}</p>
                    <p className="font-mono text-xs text-chalk-300">{e.period}</p>
                  </div>
                  <p className="mt-1 text-[13px] text-chalk-400">{e.role}</p>
                  <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-chalk-300">
                    {e.note}
                  </p>
                </li>
              ))}
            </ol>
          </Block>

          <Block title="Tools">
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[13px] text-chalk-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </Block>

          <Block title="Education">
            <p className="font-display text-xl text-chalk-100">
              Bachelor of Fine Arts (BFA) — Design (Applied Art)
            </p>
            <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-chalk-300">
              Specialisation in visual design, typography, layout, and applied art — the creative
              foundation behind every pixel-perfect interface.
            </p>
          </Block>
        </article>
      </div>
    </PageShell>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-chalk-400">{title}</p>
      {children}
    </section>
  );
}

function Row({
  icon,
  label,
  value,
  accent
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <li className="flex items-center justify-between gap-3 border-b border-white/[0.04] pb-3 last:border-b-0 last:pb-0">
      <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-chalk-400">
        {icon}
        {label}
      </span>
      <span className={`text-[13px] ${accent ? 'text-lime-300' : 'text-chalk-100'}`}>{value}</span>
    </li>
  );
}
