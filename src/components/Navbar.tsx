'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SkewSwap } from '@/components/ui/SkewSwap';

export function Navbar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const d = new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      setTime(d);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="flex items-center justify-between px-5 pt-6 md:px-8 md:pt-7">
        <Link
          href="/"
          className="group flex items-center gap-3 leading-none md:gap-6 lg:gap-8"
        >
          <span className="text-[15px] tracking-tight text-chalk-50">
            <SkewSwap height="1.2em">Shreyanshi Bhatnagar</SkewSwap>
          </span>
          <span className="hidden text-[15px] tracking-tight text-chalk-400 md:inline-flex">
            <SkewSwap height="1.2em" groupHover={false}>
              Senior Product Designer
            </SkewSwap>
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <span className="hidden items-baseline gap-2 text-[15px] tracking-tight text-chalk-300 sm:inline-flex">
            <span>India</span>
            <span className="text-chalk-500">·</span>
            <span className="tabular-nums text-chalk-100">{time || '—'}</span>
          </span>
          <ThemeDot />
        </div>
      </div>
    </motion.header>
  );
}

function ThemeDot() {
  return (
    <button
      aria-label="Theme"
      type="button"
      className="grid h-6 w-6 place-items-center rounded-full border border-white/20 transition-colors hover:border-white/40 md:h-7 md:w-7"
    >
      <span className="block h-3.5 w-3.5 rounded-full bg-chalk-50 md:h-4 md:w-4" />
    </button>
  );
}
