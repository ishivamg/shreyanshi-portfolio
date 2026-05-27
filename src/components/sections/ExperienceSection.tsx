'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/data';

/**
 * ExperienceSection — matches the Vexoo Framer "Experience" section exactly:
 *
 * Layout: column (framer-oxfjv9), gap 48px
 * Each row (framer-nTKFT.framer-k0rlai): flex-row, gap 32px
 *   Left (flex: 1, flex-row, gap 24px):
 *     – Date:  Open Sauce Sans · 16px · weight 500 · tracking -0.02em · lh 1.4em
 *     – Position + Company column (gap 4px):
 *         Position: Open Sauce Sans · 18px · weight 500 · tracking -0.02em
 *         Company:  Open Sauce Sans · 18px · weight 500 · tracking -0.02em · opacity 0.5
 *   Right (width 40%):
 *     – Description: Open Sauce Sans · 16px · weight 500 · tracking -0.02em · lh 1.4em · opacity 0.5
 *
 * Rows separated by 1px rgba(255,255,255,0.16) dividers.
 */
export function ExperienceSection() {
  return (
    <section
      style={{
        width: '100%'
      }}
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '48px' }}
      >
        <span
          style={{
            fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
            fontSize: '18px',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: '#ffffff'
          }}
        >
          Experience
        </span>
      </motion.div>

      {/* Experience rows — column, gap 0 (dividers provide separation) */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {experience.map((e, i) => (
          <ExperienceRow key={e.company} item={e} index={i} />
        ))}
      </div>
    </section>
  );
}

function ExperienceRow({
  item,
  index
}: {
  item: (typeof experience)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
    >
      {/* Row content: flex-row, gap 32px */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '32px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}
        className="exp-row"
      >
        {/* Left: flex-row gap 24px — date + position/company */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: '24px',
            flex: 1,
            minWidth: '200px',
            flexWrap: 'wrap'
          }}
          className="exp-left"
        >
          {/* Date — flex: 1 0 0 so it expands to fill 50% of left container */}
          <span
            style={{
              fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
              fontSize: '18px',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: '1.4em',
              color: '#ffffff',
              flex: '1 0 0',
              minWidth: '1px'
            }}
          >
            {item.period}
          </span>

          {/* Position + Company: column, gap 4px — width 50% of left container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              flex: 'none',
              width: '50%',
              minWidth: '140px'
            }}
          >
            {/* Role — Open Sauce Sans · 22px · weight 500 · tracking -0.02em */}
            <span
              style={{
                fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
                fontSize: '22px',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: '1.2em',
                color: '#ffffff'
              }}
            >
              {item.role}
            </span>
            {/* Company — same but 50% opacity */}
            <span
              style={{
                fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
                fontSize: '22px',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: '1.2em',
                color: 'rgba(255,255,255,0.5)'
              }}
            >
              {item.company}
            </span>
          </div>
        </div>

        {/* Right: description — width 40%, opacity 0.5 */}
        <div
          style={{
            width: 'clamp(160px, 40%, 560px)',
            flexShrink: 0
          }}
          className="exp-right"
        >
          <p
            style={{
              fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
              fontSize: '18px',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: '1.5em',
              color: 'rgba(255,255,255,0.5)',
              margin: 0
            }}
          >
            {item.note}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
