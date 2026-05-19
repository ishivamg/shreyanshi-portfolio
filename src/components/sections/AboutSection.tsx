'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Layers, Compass, Wand2 } from 'lucide-react';

const pillars = [
  { icon: Compass, label: 'Research & Strategy' },
  { icon: Layers, label: 'Design Systems' },
  { icon: Wand2, label: 'Motion & Interaction' },
  { icon: Sparkles, label: 'AI Product UX' }
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const orbY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={ref} className="relative overflow-hidden py-6 md:py-10">
      <motion.div
        aria-hidden
        style={{ y: orbY }}
        className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-[55vh] w-[55vh] rounded-full bg-lime-700/10 blur-[140px]"
      />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-5">
          <PortraitCard />
        </div>

        <div className="md:col-span-7">
          <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-lime-300">
            Design isn&rsquo;t just about making things look good.
          </p>
          <h2 className="font-display text-display-md text-balance text-chalk-50">
            I&rsquo;m Shreyanshi — a{' '}
            <em className="italic text-lime-300">UI/UX &amp; Product Designer</em> with five years
            turning complex ideas into intuitive, visually engaging digital products.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 text-[15px] leading-relaxed text-chalk-300 sm:grid-cols-2">
            <p>
              With a Bachelor&rsquo;s in Fine Arts (Applied Arts), I combine illustration, visual
              design, and design systems thinking to create seamless experiences across web and
              mobile.
            </p>
            <p>
              My work spans design systems, data-driven dashboards, mobile-first interfaces, and
              AI-powered experiences. Design goes beyond visuals — it&rsquo;s about crafting
              solutions that are inclusive, engaging, and aligned with real business goals.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {pillars.map((p, i) => (
              <motion.li
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
                className="group flex flex-col items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-colors duration-500 hover:bg-white/[0.05]"
              >
                <p.icon className="h-5 w-5 text-lime-300 transition-transform duration-500 group-hover:rotate-[8deg]" />
                <span className="text-[13px] text-chalk-200">{p.label}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function PortraitCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-white/[0.06] bg-white/[0.025]"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(80% 60% at 20% 20%, rgba(204,245,0,0.18), transparent 55%), radial-gradient(80% 60% at 80% 80%, rgba(34,211,238,0.10), transparent 55%), linear-gradient(180deg, #0E0F12, #07080A)'
        }}
      />
      <div className="grain absolute inset-0 opacity-60" />

      <div className="absolute inset-6 flex flex-col justify-between md:inset-8">
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.25em] text-chalk-400">Now</p>
          <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-chalk-300">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse-soft" />
            Designing Vasitum
          </p>
        </div>

        <div className="space-y-3">
          <p className="font-display text-7xl italic leading-[0.9] text-chalk-50 md:text-8xl">
            S
          </p>
          <p className="font-display text-4xl italic text-chalk-100">Shreyanshi</p>
          <p className="text-[13px] text-chalk-300">
            BFA · Applied Arts. Five years across AI, SaaS, Web3 and brand systems.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-5 text-[11px] uppercase tracking-[0.2em] text-chalk-400">
          <Cell title="Years" value="5+" />
          <Cell title="Systems" value="3" />
          <Cell title="0 → 1" value="AI" />
        </div>
      </div>
    </motion.div>
  );
}

function Cell({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <p className="text-base normal-case tracking-normal text-chalk-100">{value}</p>
      <p className="mt-1">{title}</p>
    </div>
  );
}
