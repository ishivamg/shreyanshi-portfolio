'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { nav, socials, contact } from '@/lib/data';
import { SkewSwap } from '@/components/ui/SkewSwap';

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const y = useTransform(scrollYProgress, [0, 1], ['30%', '0%']);

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden border-t border-white/[0.06] bg-noir-900/30 pt-16"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-10 pb-14 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <p className="font-display text-4xl italic text-chalk-100">Shreyanshi</p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-chalk-400">
              Senior Product Designer
            </p>
            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-chalk-300">
              Five years building end-to-end experiences across AI, Fintech, SaaS and Web3.
              Available for senior product roles &amp; selective freelance.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-chalk-400">Navigate</p>
            <ul className="space-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="group inline-flex text-[14px] text-chalk-200 transition-colors hover:text-chalk-50"
                  >
                    <SkewSwap height="1.2em">{n.label}</SkewSwap>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-chalk-400">Reach out</p>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex text-[14px] text-chalk-200 transition-colors hover:text-chalk-50"
                  >
                    <SkewSwap height="1.2em">{s.label}</SkewSwap>
                  </a>
                </li>
              ))}
              <li className="pt-2 text-[14px] text-chalk-300">{contact.phone}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] py-6 text-[11px] uppercase tracking-[0.22em] text-chalk-400 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} · Personal · Made with Next.js</p>
          <p>{contact.email}</p>
          <a href="#top" className="transition-colors hover:text-chalk-100">
            Back to top ↑
          </a>
        </div>

        <motion.div
          aria-hidden
          style={{ y }}
          className="pointer-events-none -mb-16 select-none text-center font-display text-[clamp(5rem,24vw,24rem)] leading-[0.85] tracking-tightest md:-mb-24"
        >
          <span className="bg-gradient-to-b from-chalk-100/40 via-chalk-100/10 to-transparent bg-clip-text italic text-transparent">
            Shreyanshi
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
