'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
};

export function Marquee({ children, speed = 40, direction = 'left', className }: Props) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <motion.div
        className="flex w-max items-center gap-12 whitespace-nowrap"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        <div className="flex items-center gap-12">{children}</div>
        <div className="flex items-center gap-12" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
