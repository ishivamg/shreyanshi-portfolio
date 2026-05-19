'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: 'div' | 'span';
};

export function Magnetic({ children, className, strength = 18, as = 'div' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 });
  const [hover, setHover] = useState(false);

  const Comp: typeof motion.div = as === 'span' ? (motion.span as typeof motion.div) : motion.div;

  return (
    <Comp
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = ((e.clientX - cx) / rect.width) * strength;
        const dy = ((e.clientY - cy) / rect.height) * strength;
        x.set(dx);
        y.set(dy);
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      className={cn('inline-block', className)}
      data-hover={hover}
    >
      {children}
    </Comp>
  );
}
