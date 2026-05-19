'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '@/lib/data';
import { cn } from '@/lib/utils';

export function ProjectsSection() {
  return (
    <section className="relative py-6 md:py-10">
      <ul className="flex flex-col gap-20 md:gap-32">
        {projects.map((p, i) => (
          <ProjectRow key={p.slug} project={p} flip={i % 2 === 1} />
        ))}
      </ul>
    </section>
  );
}

function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  const ref = useRef<HTMLLIElement>(null);
  const [hover, setHover] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-14"
    >
      <div className={cn('md:col-span-6', flip && 'md:order-2')}>
        <motion.div style={{ y }} className="will-change-transform">
          <Visual project={project} />
        </motion.div>
      </div>

      <div className={cn('md:col-span-6', flip && 'md:order-1')}>
        <p className="font-display text-7xl text-chalk-300 md:text-8xl">{project.index}</p>
        <h3 className="mt-4 font-display text-display-md text-balance text-chalk-50">
          {project.title}
        </h3>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-chalk-300">
          {project.summary}
        </p>

        <ul className="mt-8 space-y-3 border-t border-white/[0.06] pt-6">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-4 text-[14px] leading-relaxed text-chalk-200">
              <span className="mt-1.5 h-px w-4 flex-none bg-lime-400/70" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-chalk-300"
            >
              {t}
            </span>
          ))}
          <span className="ml-auto inline-flex items-center gap-2 text-[12px] text-chalk-400">
            <span
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-500 ease-expo',
                hover && 'border-lime-400 bg-lime-400 text-noir-950'
              )}
            >
              <ArrowUpRight
                className={cn(
                  'h-4 w-4 transition-transform duration-500 ease-expo',
                  hover && '-translate-y-0.5 translate-x-0.5'
                )}
              />
            </span>
            <span>{project.client} · {project.year}</span>
          </span>
        </div>
      </div>
    </motion.li>
  );
}

function Visual({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-white/[0.06] md:aspect-[5/6]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${project.palette.from}22, transparent 60%), radial-gradient(120% 80% at 0% 0%, ${project.palette.to}26, transparent 60%), linear-gradient(180deg, #0E0F12, #07080A)`
        }}
      />
      <div className="grain absolute inset-0 opacity-60" />

      <div className="absolute inset-6 flex flex-col justify-between md:inset-8">
        <div className="flex items-start justify-between">
          <span className="rounded-full border border-white/10 bg-noir-900/60 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-chalk-300 backdrop-blur-md">
            {project.client}
          </span>
          <span
            className="h-3 w-3 rounded-full"
            style={{
              background: project.palette.from,
              boxShadow: `0 0 20px ${project.palette.from}`
            }}
          />
        </div>

        <MockUI project={project} />

        <div className="flex items-end justify-between">
          <p className="max-w-[55%] font-display text-xl text-chalk-100 md:text-2xl">
            {project.domain}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-chalk-400">
            {project.index} / {String(projects.length).padStart(2, '0')}
          </p>
        </div>
      </div>
    </div>
  );
}

function MockUI({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-7 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="ml-3 text-[10px] uppercase tracking-[0.2em] text-chalk-400">
            {project.domain}
          </span>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-2/3 rounded-full bg-white/15" />
          <div className="h-2 w-5/6 rounded-full bg-white/10" />
          <div className="h-2 w-1/2 rounded-full bg-white/10" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-14 rounded-lg border border-white/10 bg-white/[0.03]" />
          ))}
        </div>
      </div>
      <div className="col-span-5 space-y-3">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
          <p className="text-[10px] uppercase tracking-[0.2em] text-chalk-400">Impact</p>
          <p className="mt-2 font-display text-3xl text-chalk-100">{project.outcomes[0]?.value}</p>
          <p className="mt-1 text-[11px] text-chalk-400">{project.outcomes[0]?.label}</p>
        </div>
        <div
          className="rounded-2xl border border-white/10 p-4 backdrop-blur-md"
          style={{
            background: `linear-gradient(135deg, ${project.palette.from}33, ${project.palette.to}22)`
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-chalk-200">Result</p>
          <p className="mt-2 font-display text-xl text-chalk-100">
            {project.outcomes[1]?.value ?? project.outcomes[0]?.value}
          </p>
        </div>
      </div>
    </div>
  );
}
