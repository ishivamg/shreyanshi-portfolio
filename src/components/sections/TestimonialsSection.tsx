'use client';

import { motion } from 'framer-motion';
import { testimonials, type Testimonial } from '@/lib/data';

/**
 * TestimonialsSection — exact Vexoo Framer spec:
 *
 * - NO section label / header above the grid
 * - 3-col grid (framer-11fkz51), gap 32px
 * - Each card:
 *     ① Large " quotation mark at top (no border/line) — 32px w600
 *     ② Quote text — plain, NO surrounding curly quotes — 20px w500 lh 1.5em
 *     ③ Attribution on ONE line: Name (white 18px w600) + Company (gray 15px w500)
 */
export function TestimonialsSection() {
  return (
    <section
      style={{
        width: '100%'
      }}
    >
      {/* 3-col grid — framer-11fkz51 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(50px, 1fr))',
          gap: '32px'
        }}
        className="testimonials-grid"
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} testimonial={t} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 1024.98px) {
          .testimonials-grid { grid-template-columns: repeat(2, minmax(50px, 1fr)) !important; }
        }
        @media (max-width: 699.98px) {
          .testimonials-grid { grid-template-columns: repeat(1, minmax(50px, 1fr)) !important; }
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0px'
      }}
    >
      {/* ① Large opening quote mark — no border above, just the " character */}
      {/* Framer: Open Sauce Sans · 32px · weight 600 · white */}
      <span
        style={{
          fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
          fontSize: '80px',
          fontWeight: 600,
          lineHeight: 0.75,
          marginBottom: '-8px',
          color: '#ffffff',
          display: 'block'
        }}
        aria-hidden
      >
        &ldquo;
      </span>

      {/* ② Quote text — NO surrounding curly quotes, plain white text */}
      {/* Framer: Open Sauce Sans · 20px · weight 500 · lh 1.5em · color #fff */}
      <p
        style={{
          fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
          fontSize: '24px',
          fontWeight: 500,
          letterSpacing: '-0.02em',
          lineHeight: '1.4em',
          color: '#ffffff',
          margin: 0,
          flex: 1
        }}
      >
        {testimonial.quote}
      </p>

      {/* ③ Attribution — ONE LINE: Name (white w600 18px) + Company (gray w500 15px) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '8px',
          flexWrap: 'wrap'
        }}
      >
        {/* Name: Open Sauce Sans · 18px · weight 600 · white */}
        <span
          style={{
            fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
            fontSize: '18px',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: '1.2em',
            color: '#ffffff'
          }}
        >
          {testimonial.name}
        </span>
        {/* Company: Open Sauce Sans · 15px · weight 500 · gray (same line) */}
        <span
          style={{
            fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
            fontSize: '15px',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: '1.2em',
            color: 'rgba(255,255,255,0.4)'
          }}
        >
          {testimonial.company}
        </span>
      </div>
    </motion.div>
  );
}
