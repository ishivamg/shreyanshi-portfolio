'use client';

import { Marquee } from '@/components/ui/Marquee';

/**
 * AboutTicker — matches the Vexoo "Ticker" section between Experience and Footer.
 *
 * Framer spec (framer-s43ql8):
 *   – height: 96px
 *   – overflow: hidden
 *   – text: repeated label in Open Sauce Sans · 38px · weight 500 · tracking -0.02em
 *   – direction: left (continuous scroll)
 *   – separator: "·" dot between items
 */

const TICKER_ITEMS = [
  'Senior Product Designer',
  'UI · UX · Systems',
  'Available for Work',
  'India · Remote',
  'AI · Fintech · SaaS · Web3'
];

export function AboutTicker() {
  return (
    <div
      style={{
        width: '100%',
        height: '96px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        marginBottom: '0'
      }}
    >
      <Marquee speed={38} direction="left">
        {TICKER_ITEMS.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '32px',
              fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
              fontSize: 'clamp(1.375rem, 2.64vw, 2.375rem)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: '1em',
              color: '#ffffff',
              whiteSpace: 'nowrap'
            }}
          >
            {item}
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>–</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
