'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const WORDMARK = 'Shreyanshi B.';

const STACK_ITEMS = ['Fg', 'Fr', 'Ps', 'Xd'];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate h-[100svh] min-h-[680px] overflow-hidden"
    >
      <Backdrop />

      <div className="absolute inset-x-0 bottom-0 px-3 pb-3 md:px-4 md:pb-4">
        <div className="relative w-full">
          <BigWord word={WORDMARK} />

          <div
            className="relative z-10 grid w-full gap-3 md:gap-4"
            style={{
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gridTemplateRows: 'repeat(4, minmax(0, 1fr))',
              height: 'min(720px, calc(100svh - 180px))'
            }}
          >
            <Cell href="/about" label="About" area="1 / 1 / 3 / 2" />
            <Cell href="/portfolio" label="Portfolio" area="1 / 2 / 3 / 5" />
            <Cell href="/contact" label="Contact" area="3 / 1 / 5 / 3" />
            <AvatarCell area="3 / 3 / 5 / 4" />
            <StackCell area="3 / 4 / 4 / 5" />
            <Cell href="/resume" label="Resume" area="4 / 4 / 5 / 5" compact />
          </div>
        </div>
      </div>
    </section>
  );
}

function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-[20%] h-[55vh] w-[60vh] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[160px]" />
      <div className="absolute -left-32 top-1/3 h-[40vh] w-[40vh] rounded-full bg-lime-700/10 blur-[140px]" />
      <div className="grain absolute inset-0 opacity-40" />
    </div>
  );
}

function BigWord({ word }: { word: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-full z-0 flex translate-y-1/2 justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60, filter: 'blur(28px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="whitespace-nowrap text-center font-display leading-[0.86] text-chalk-50"
        style={{
          fontSize: 'clamp(5rem, 16vw, 16rem)',
          letterSpacing: '-0.045em',
          textShadow:
            '0 60px 90px rgba(255,255,255,0.18), 0 30px 50px rgba(255,255,255,0.12), 0 10px 30px rgba(255,255,255,0.08)',
          maskImage:
            'linear-gradient(180deg, black 58%, rgba(0,0,0,0.55) 78%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(180deg, black 58%, rgba(0,0,0,0.55) 78%, transparent 100%)'
        }}
      >
        {word}
      </motion.h1>
    </div>
  );
}

type CellProps = {
  href: string;
  label: string;
  area: string;
  compact?: boolean;
};

function Cell({ href, label, area, compact }: CellProps) {
  return (
    <Link
      href={href}
      style={{ gridArea: area }}
      className={cn(
        'group relative flex flex-col justify-end overflow-hidden rounded-[28px] border border-white/[0.05] bg-noir-900/80 backdrop-blur-md transition-colors duration-500 hover:bg-noir-800/85',
        compact ? 'p-5 md:p-6' : 'p-6 md:p-8'
      )}
    >
      <CardSheen />
      <div className="relative flex items-end justify-between">
        <h3
          className={cn(
            'font-display text-chalk-50',
            compact ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'
          )}
        >
          {label}
        </h3>
        <ArrowUpRight
          className={cn(
            '-rotate-45 text-chalk-400 transition-all duration-500 ease-expo group-hover:rotate-0 group-hover:text-chalk-50',
            compact ? 'h-4 w-4' : 'h-5 w-5'
          )}
        />
      </div>
    </Link>
  );
}

function AvatarCell({ area }: { area: string }) {
  return (
    <Link
      href="/about"
      style={{ gridArea: area }}
      className="group relative overflow-hidden rounded-[28px] border border-white/[0.05]"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 100% at 30% 20%, rgba(204,245,0,0.18), transparent 55%), radial-gradient(100% 80% at 80% 80%, rgba(34,211,238,0.10), transparent 55%), linear-gradient(180deg, #0E0F12, #050507)'
        }}
      />
      <div aria-hidden className="grain absolute inset-0 opacity-50" />
      <CardSheen />

      <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative"
        >
          <span
            className="block font-display italic leading-[0.85] text-chalk-50"
            style={{ fontSize: 'clamp(4rem, 5.5vw, 6.5rem)' }}
          >
            S
          </span>
          <span
            aria-hidden
            className="absolute inset-0 -z-10 blur-2xl"
            style={{
              background:
                'radial-gradient(50% 50% at 50% 50%, rgba(204,245,0,0.35), transparent 70%)'
            }}
          />
        </motion.div>
        <p className="mt-3 font-display text-xl italic text-chalk-100 md:text-2xl">
          Shreyanshi
        </p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-chalk-400">
          Hey · Hola · Namaste
        </p>
      </div>
    </Link>
  );
}

function StackCell({ area }: { area: string }) {
  return (
    <Link
      href="/stack"
      style={{ gridArea: area }}
      className="group relative overflow-hidden rounded-[28px] border border-white/[0.05] bg-noir-900/80 p-3 backdrop-blur-md transition-colors duration-500 hover:bg-noir-800/85 md:p-3.5"
    >
      <CardSheen />
      <div className="relative grid h-full grid-cols-2 grid-rows-2 gap-2">
        {STACK_ITEMS.map((label, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 + i * 0.06 }}
            className={cn(
              'flex items-center justify-center rounded-xl border border-white/[0.05]',
              i === 1 ? 'bg-lime-400 text-noir-950' : 'bg-white/[0.04] text-chalk-100'
            )}
          >
            <span className="font-display text-xl italic md:text-2xl">{label}</span>
          </motion.div>
        ))}
      </div>
    </Link>
  );
}

function CardSheen() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-[inherit]"
      style={{
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0) 40%)',
        mask: 'linear-gradient(black, transparent 60%)',
        WebkitMask: 'linear-gradient(black, transparent 60%)'
      }}
    />
  );
}
