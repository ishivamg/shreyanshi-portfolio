'use client';

import { motion } from 'framer-motion';
import { skills, tools } from '@/lib/data';
import { cn } from '@/lib/utils';

export function SkillsSection() {
  return (
    <section className="relative py-6 md:py-10">
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {skills.map((s, i) => (
          <motion.li
            key={s.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
          >
            <SkillCard name={s.name} initial={s.initial} accent={s.accent} />
          </motion.li>
        ))}
      </ul>

      <div className="mt-16 rounded-3xl border border-white/[0.06] bg-noir-900/30 p-8 md:mt-20 md:p-12">
        <p className="mb-6 text-[11px] uppercase tracking-[0.25em] text-chalk-400">
          Tools in the kit
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-3">
          {tools.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.02, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-chalk-200 transition-colors hover:border-lime-400/40 hover:text-chalk-50"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  name,
  initial,
  accent
}: {
  name: string;
  initial: string;
  accent?: boolean;
}) {
  return (
    <div className="group relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-[28px] border border-white/[0.06] bg-white/[0.025] p-6 transition-colors duration-500 hover:bg-white/[0.045]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(70% 60% at 50% 0%, rgba(204,245,0,0.18), transparent 70%)'
        }}
      />
      <div
        className={cn(
          'relative grid h-20 w-20 place-items-center rounded-2xl text-3xl font-medium',
          accent
            ? 'bg-lime-400 text-noir-950'
            : 'bg-white/[0.05] text-chalk-100 group-hover:bg-white/[0.08]'
        )}
      >
        <span className="font-display italic">{initial}</span>
      </div>
      <p className="relative mt-5 text-sm text-chalk-200">{name}</p>
    </div>
  );
}
