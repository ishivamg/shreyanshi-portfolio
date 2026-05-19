'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/data';

export function ExperienceSection() {
  return (
    <section className="relative py-6 md:py-10">
      <ul className="flex flex-col gap-4">
        {experience.map((e, i) => (
          <motion.li
            key={e.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.025] p-6 transition-colors duration-500 hover:bg-white/[0.04] md:p-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <Mark letter={e.company.charAt(0)} />
                <div>
                  <h3 className="text-lg font-medium text-chalk-50 md:text-xl">{e.role}</h3>
                  <p className="text-[13px] text-chalk-400">{e.company}</p>
                </div>
              </div>
              <p className="font-mono text-xs text-chalk-300 md:text-sm">{e.period}</p>
            </div>
            <p className="mt-5 max-w-3xl text-[14px] leading-relaxed text-chalk-300 md:mt-6 md:text-[15px]">
              {e.note}
            </p>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-lime-400 to-transparent transition-transform duration-700 group-hover:scale-x-100"
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

function Mark({ letter }: { letter: string }) {
  return (
    <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-chalk-200 md:h-12 md:w-12">
      <span className="font-display text-lg italic">{letter}</span>
    </span>
  );
}
