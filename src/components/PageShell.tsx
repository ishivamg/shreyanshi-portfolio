'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { RevealText } from '@/components/ui/RevealText';
import { Magnetic } from '@/components/ui/Magnetic';

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
  children: React.ReactNode;
};

export function PageShell({ eyebrow, title, intro, prev, next, children }: Props) {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <header className="relative overflow-hidden px-4 pb-12 pt-32 md:px-8 md:pb-20 md:pt-40">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[40vh] w-[80vw] -translate-x-1/2 rounded-full bg-lime-400/[0.06] blur-[160px]" />
          <div className="grain absolute inset-0 opacity-40" />
        </div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mb-8 flex items-center justify-between gap-6"
          >
            <Magnetic strength={8}>
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] text-chalk-200 transition-colors hover:bg-white/[0.08] hover:text-chalk-50"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-500 ease-expo group-hover:-translate-x-0.5" />
                Home
              </Link>
            </Magnetic>
            <span className="text-[11px] uppercase tracking-[0.3em] text-chalk-400">
              {eyebrow}
            </span>
          </motion.div>

          {/* Framer spec: Open Sauce Two / weight 500 / letter-spacing -0.04em / line-height 1em */}
          <RevealText
            as="h1"
            text={title}
            className="font-display text-[clamp(3.25rem,10vw,9rem)] leading-[1em] text-chalk-50"
            style={{ fontWeight: 500, letterSpacing: '-0.04em' }}
            stagger={0.04}
          />

          {intro && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="mt-10 max-w-2xl text-[15px] leading-relaxed text-chalk-300 md:text-[16px]"
            >
              {intro}
            </motion.p>
          )}
        </div>
      </header>

      <div className="container px-4 md:px-8">{children}</div>

      <nav className="container mt-24 flex flex-col gap-3 border-t border-white/[0.06] px-4 py-12 sm:flex-row sm:items-center sm:justify-between md:mt-32 md:px-8">
        {prev ? (
          <Link
            href={prev.href}
            className="group inline-flex items-center gap-3 text-[14px] text-chalk-200 transition-colors hover:text-chalk-50"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:-translate-x-1" />
            <span>
              <span className="block text-[11px] uppercase tracking-[0.25em] text-chalk-400">
                Previous
              </span>
              <span className="font-display text-xl">{prev.label}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={next.href}
            className="group inline-flex items-center gap-3 text-right text-[14px] text-chalk-200 transition-colors hover:text-chalk-50"
          >
            <span>
              <span className="block text-[11px] uppercase tracking-[0.25em] text-chalk-400">
                Next
              </span>
              <span className="font-display text-xl">{next.label}</span>
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        )}
      </nav>

      <Footer />
    </main>
  );
}
