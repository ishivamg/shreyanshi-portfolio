'use client';

import { motion, useInView } from 'framer-motion';
import { createElement, useRef } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  delay?: number;
  stagger?: number;
  amount?: number;
  once?: boolean;
};

/**
 * Word-by-word mask reveal — each word sits inside an overflow-hidden span and
 * slides up from below. The classic cinematic opener.
 */
export function RevealText({
  text,
  className,
  as = 'h2',
  delay = 0,
  stagger = 0.06,
  amount = 0.4,
  once = true
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount, once });
  const words = text.split(' ');

  return createElement(
    as,
    { ref, className: cn('flex flex-wrap', className) },
    words.map((word, i) => (
      <span
        key={`${word}-${i}`}
        className="relative mr-[0.25em] inline-flex overflow-hidden pb-[0.12em] leading-[0.95]"
      >
        <motion.span
          className="inline-block will-change-transform"
          initial={{ y: '110%' }}
          animate={inView ? { y: '0%' } : { y: '110%' }}
          transition={{
            duration: 0.95,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * stagger
          }}
        >
          {word}
        </motion.span>
      </span>
    ))
  );
}

export function RevealLines({
  lines,
  className,
  delay = 0,
  stagger = 0.12
}: {
  lines: string[];
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });
  return (
    <div ref={ref} className={cn('space-y-1', className)}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : { y: '110%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
