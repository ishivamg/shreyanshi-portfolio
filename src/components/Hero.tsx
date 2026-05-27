'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
  TbBrandFigma,
  TbBrandFramer,
  TbBrandAdobePhotoshop,
  TbBrandAdobeXd
} from 'react-icons/tb';
import { cn } from '@/lib/utils';
import { SkewSwap } from '@/components/ui/SkewSwap';

const DEFAULT_WORD = 'Shreyanshi B.';

/** Word shown in the background when each card is hovered */
const CARD_WORDS: Record<string, string> = {
  about:     'About',
  portfolio: 'Portfolio',
  contact:   'Contact',
  resume:    'Resume',
  avatar:    'About',
  stack:     'Tools'
};

const STACK_ITEMS = [
  { label: 'Figma',      Icon: TbBrandFigma           },
  { label: 'Framer',     Icon: TbBrandFramer           },
  { label: 'Photoshop',  Icon: TbBrandAdobePhotoshop   },
  { label: 'Adobe XD',   Icon: TbBrandAdobeXd          }
];

export function Hero() {
  const [activeWord, setActiveWord] = useState(DEFAULT_WORD);

  const hover = (key: string) => setActiveWord(CARD_WORDS[key] ?? DEFAULT_WORD);
  const leave = ()            => setActiveWord(DEFAULT_WORD);

  return (
    <section
      id="top"
      className="relative isolate h-[100svh] min-h-[680px] overflow-hidden"
    >
      <Backdrop />

      <div className="absolute inset-x-0 bottom-0 px-3 pb-3 md:px-4 md:pb-4">
        <div className="relative w-full">
          <BigWord word={activeWord} />

          <div
            className="relative z-10 grid w-full gap-3 md:gap-4"
            style={{
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gridTemplateRows: 'repeat(4, minmax(0, 1fr))',
              height: 'min(720px, calc(100svh - 180px))'
            }}
          >
            <Cell href="/about"     label="About"     area="1 / 1 / 3 / 2" cardKey="about"     onHover={hover} onLeave={leave} />
            <Cell href="/portfolio" label="Portfolio" area="1 / 2 / 3 / 5" cardKey="portfolio" onHover={hover} onLeave={leave} />
            <Cell href="/contact"   label="Contact"   area="3 / 1 / 5 / 3" cardKey="contact"   onHover={hover} onLeave={leave} />
            <AvatarCell area="3 / 3 / 5 / 4" onHover={() => hover('avatar')} onLeave={leave} />
            <StackCell  area="3 / 4 / 4 / 5" onHover={() => hover('stack')}  onLeave={leave} />
            <Cell href="/resume" label="Resume" area="4 / 4 / 5 / 5" cardKey="resume" compact onHover={hover} onLeave={leave} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Backdrop ────────────────────────────────────────────────── */

function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-[20%] h-[55vh] w-[60vh] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[160px]" />
      <div className="absolute -left-32 top-1/3 h-[40vh] w-[40vh] rounded-full bg-white/[0.03] blur-[140px]" />
      <div className="grain absolute inset-0 opacity-40" />
    </div>
  );
}

/* ─── Big watermark word — swaps on card hover ────────────────── */

function BigWord({ word }: { word: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-full z-0 flex translate-y-1/2 justify-center"
    >
      <AnimatePresence mode="popLayout">
        <motion.h1
          key={word}
          initial={{ opacity: 0, y: 50, filter: 'blur(24px)' }}
          animate={{ opacity: 1, y: 0,  filter: 'blur(0px)'  }}
          exit={{    opacity: 0, y: -30, filter: 'blur(20px)' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="whitespace-nowrap text-center font-display leading-[1em] text-chalk-50"
          style={{
            fontSize: 'clamp(3.5rem, 10.5vw, 10.5rem)',
            fontWeight: 500,
            letterSpacing: '-0.04em',
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
      </AnimatePresence>
    </div>
  );
}

/* ─── Cell — navigable bento card ────────────────────────────── */

type CellProps = {
  href: string;
  label: string;
  area: string;
  cardKey: string;
  compact?: boolean;
  onHover: (key: string) => void;
  onLeave: () => void;
};

function Cell({ href, label, area, cardKey, compact, onHover, onLeave }: CellProps) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect();
        setSpotlight({
          x: ((e.clientX - r.left) / r.width)  * 100,
          y: ((e.clientY - r.top)  / r.height) * 100
        });
      }}
      onMouseEnter={() => { setHovered(true);  onHover(cardKey); }}
      onMouseLeave={() => { setHovered(false); onLeave(); }}
      style={{
        gridArea: area,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: 'inset 0px 1px 0px 1px rgba(255, 255, 255, 0.06)',
        transform: hovered ? 'scale(1.012)' : 'scale(1)',
        transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)'
      }}
      className={cn(
        'group relative flex flex-col justify-end overflow-hidden rounded-[32px]',
        compact ? 'p-6' : 'p-8'
      )}
    >
      {/* 8% black overlay — Framer spec: no bg-color, just this subtle overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          backgroundColor: '#000000', opacity: 0.08,
          pointerEvents: 'none'
        }}
      />

      {/* Cursor spotlight */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.07) 0%, transparent 55%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s',
          pointerEvents: 'none'
        }}
      />

      <div className="relative flex items-end justify-between">
        {/* Label — 18px SkewSwap, matches Framer spec exactly */}
        <span
          style={{
            fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: '#ffffff'
          }}
        >
          <SkewSwap height="1.3em" hovered={hovered}>{label}</SkewSwap>
        </span>

        {/* Arrow — always ↗, only color changes on hover (Framer: fixed rotate(-45deg)) */}
        <ArrowUpRight
          style={{ width: compact ? 16 : 20, height: compact ? 16 : 20 }}
          className={cn(
            'transition-colors duration-500',
            hovered ? 'text-chalk-50' : 'text-chalk-400'
          )}
        />
      </div>
    </Link>
  );
}

/* ─── Avatar cell ─────────────────────────────────────────────── */

function AvatarCell({ area, onHover, onLeave }: { area: string; onHover: () => void; onLeave: () => void }) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="/about"
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect();
        setSpotlight({
          x: ((e.clientX - r.left) / r.width)  * 100,
          y: ((e.clientY - r.top)  / r.height) * 100
        });
      }}
      onMouseEnter={() => { setHovered(true);  onHover(); }}
      onMouseLeave={() => { setHovered(false); onLeave(); }}
      style={{
        gridArea: area,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: 'inset 0px 1px 0px 1px rgba(255, 255, 255, 0.06)',
        transform: hovered ? 'scale(1.012)' : 'scale(1)',
        transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)'
      }}
      className="group relative overflow-hidden rounded-[32px]"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 100% at 30% 20%, rgba(255,255,255,0.08), transparent 55%), radial-gradient(100% 80% at 80% 80%, rgba(255,255,255,0.04), transparent 55%), linear-gradient(180deg, #0E0F12, #050507)'
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none',
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.08) 0%, transparent 55%)`,
          opacity: hovered ? 1 : 0, transition: 'opacity 0.4s'
        }}
      />

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
            style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.2), transparent 70%)' }}
          />
        </motion.div>
        <p className="mt-3 font-display text-xl italic text-chalk-100 md:text-2xl">Shreyanshi</p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-chalk-400">
          Hey · Hola · Namaste
        </p>
      </div>
    </Link>
  );
}

/* ─── Stack cell ──────────────────────────────────────────────── */

function StackCell({ area, onHover, onLeave }: { area: string; onHover: () => void; onLeave: () => void }) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="/stack"
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect();
        setSpotlight({
          x: ((e.clientX - r.left) / r.width)  * 100,
          y: ((e.clientY - r.top)  / r.height) * 100
        });
      }}
      onMouseEnter={() => { setHovered(true);  onHover(); }}
      onMouseLeave={() => { setHovered(false); onLeave(); }}
      style={{
        gridArea: area,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: 'inset 0px 1px 0px 1px rgba(255, 255, 255, 0.06)',
        transform: hovered ? 'scale(1.012)' : 'scale(1)',
        transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)'
      }}
      className="group relative overflow-hidden rounded-[32px] p-3 md:p-3.5"
    >
      {/* 8% black overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          backgroundColor: '#000000', opacity: 0.08,
          pointerEvents: 'none'
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none',
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.07) 0%, transparent 55%)`,
          opacity: hovered ? 1 : 0, transition: 'opacity 0.4s'
        }}
      />

      <div className="relative grid h-full grid-cols-2 grid-rows-2 gap-2">
        {STACK_ITEMS.map(({ label, Icon }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 + i * 0.06 }}
            title={label}
            className="flex items-center justify-center rounded-xl border border-white/[0.05] bg-white/[0.04] text-chalk-100"
          >
            <Icon size={28} strokeWidth={1.4} />
          </motion.div>
        ))}
      </div>
    </Link>
  );
}
