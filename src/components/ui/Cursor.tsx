'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 38, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 380, damping: 38, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;
    setHidden(false);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      const interactive = t.closest('a, button, [data-cursor="hover"]');
      setHover(Boolean(interactive));
    };
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseenter', onEnter);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
    };
  }, [x, y]);

  if (hidden) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-chalk-100"
          animate={{
            width: hover ? 44 : 8,
            height: hover ? 44 : 8,
            opacity: hover ? 0.85 : 1
          }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        />
      </motion.div>
    </>
  );
}
