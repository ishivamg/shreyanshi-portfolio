'use client';

import { contact } from '@/lib/data';

/**
 * Footer — exact Vexoo Framer spec (framer-6e6Vm.framer-uzyyyn):
 *
 * Structure:
 *   1px divider (rgba(255,255,255,0.16))
 *   Content row (flex-row, gap 32px, padding 48px 0):
 *     Left  (flex: 1 0 0):  Email label + email value
 *     Right (width: 60%):   2×2 grid — Phone / X · Instagram / LinkedIn
 *   Bottom bar: copyright left · "Made with Next.js" right
 *
 * Typography:
 *   Label: Open Sauce Sans · 14px · w500 · rgba(255,255,255,0.5)
 *   Value: Open Sauce Sans · 22px · w500 · tracking -0.02em · white
 */
export function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        backgroundColor: '#000000'
      }}
    >
      <div
        style={{
          width: '100%',
          padding: '0 40px'
        }}
        className="footer-inner"
      >
        {/* ── Divider ── */}
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.16)',
            marginBottom: '48px'
          }}
        />

        {/* ── Content row ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: '32px',
            width: '100%',
            marginBottom: '48px'
          }}
          className="footer-content"
        >
          {/* Left — Email (flex: 1 0 0) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              flex: '1 0 0',
              minWidth: 0
            }}
          >
            <ContactLabel>Email</ContactLabel>
            <ContactValue href={`mailto:${contact.email}`}>
              {contact.email}
            </ContactValue>
          </div>

          {/* Right — 2×2 grid (width 60%) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(50px, 1fr))',
              gridTemplateRows: 'repeat(2, min-content)',
              gap: '32px 16px',
              width: '60%',
              flexShrink: 0
            }}
            className="footer-grid"
          >
            {/* Phone */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <ContactLabel>Phone</ContactLabel>
              <ContactValue href={`tel:${contact.phone.replace(/\s/g, '')}`}>
                {contact.phone}
              </ContactValue>
            </div>

            {/* X (Twitter) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <ContactLabel>X (Twitter)</ContactLabel>
              <ContactValue href="https://x.com/" external>
                @shreyanshi
              </ContactValue>
            </div>

            {/* Instagram */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <ContactLabel>Instagram</ContactLabel>
              <ContactValue href="https://www.instagram.com/" external>
                @shreyanshi.design
              </ContactValue>
            </div>

            {/* LinkedIn */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <ContactLabel>LinkedIn</ContactLabel>
              <ContactValue href="https://www.linkedin.com/" external>
                @shreyanshi-bhatnagar
              </ContactValue>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '24px',
            paddingBottom: '32px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px'
          }}
        >
          <span
            style={{
              fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              color: 'rgba(255,255,255,0.3)'
            }}
          >
            © {new Date().getFullYear()} Shreyanshi Bhatnagar · All rights reserved
          </span>
          <span
            style={{
              fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              color: 'rgba(255,255,255,0.3)'
            }}
          >
            Made with Next.js
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 699.98px) {
          .footer-inner { padding: 0 16px !important; }
          .footer-content { flex-direction: column !important; }
          .footer-grid { width: 100% !important; grid-template-columns: repeat(1, 1fr) !important; gap: 24px !important; }
        }
        @media (min-width: 700px) and (max-width: 1024.98px) {
          .footer-inner { padding: 0 24px !important; }
          .footer-grid { width: 70% !important; }
        }
      `}</style>
    </footer>
  );
}

/* ── Sub-components ── */

function ContactLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        letterSpacing: '-0.01em',
        color: 'rgba(255,255,255,0.5)',
        display: 'block'
      }}
    >
      {children}
    </span>
  );
}

function ContactValue({
  children,
  href,
  external
}: {
  children: React.ReactNode;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{
        fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
        fontSize: 'clamp(16px, 1.53vw, 22px)',
        fontWeight: 500,
        letterSpacing: '-0.02em',
        lineHeight: '1.3em',
        color: '#ffffff',
        textDecoration: 'none',
        display: 'block',
        transition: 'opacity 0.2s'
      }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.6')}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
    >
      {children}
    </a>
  );
}
