import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Selected work — Vasitum AI recruitment, Maven Workforce brand & UI, RESQ accident emergency alert.'
};

/**
 * Portfolio page — matches the Vexoo Framer portfolio page exactly.
 *
 * Page structure (framer-frKGA / framer-1iraz9t):
 *   Navbar
 *   main:
 *     ├── h2 heading (max-width 70%, 48px)
 *     └── Project cards grid (flex-row, 3 cards)
 *   Footer
 *
 * Layout:
 *   – background: #000
 *   – padding: 0 32px 40px  (matches framer-1iraz9t)
 *   – gap between heading and cards: 48px  (framer-12oms14)
 *   – top padding: 124px (Navbar clearance)
 */
export default function PortfolioPage() {
  return (
    <main
      style={{
        backgroundColor: '#000000',
        minHeight: '100vh',
        position: 'relative',
        overflowX: 'hidden'
      }}
    >
      {/* Noise overlay — matches Framer's tiling PNG at opacity 0.08 */}
      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '64px',
          backgroundRepeat: 'repeat',
          opacity: 0.04,
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <Navbar />

      {/* framer-1iraz9t: flex column, gap 120px, padding 0 32px 40px */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(64px, 8.33vw, 120px)',
          paddingTop: 'clamp(80px, 8.61vw, 124px)',
          paddingBottom: '40px',
          paddingLeft: '40px',
          paddingRight: '40px'
        }}
        className="portfolio-main"
      >
        {/* framer-12oms14: Title + Cards, gap 48px */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(24px, 3.33vw, 48px)',
            width: '100%'
          }}
        >
          {/* framer-15rslz: Title section */}
          <div style={{ width: '100%' }}>
            {/* h2 — Open Sauce Sans · 48px · w500 · tracking -0.02em · max-width 70% */}
            <h2
              style={{
                fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
                fontSize: 'clamp(1.625rem, 3.33vw, 3rem)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: '1.2em',
                color: '#ffffff',
                margin: 0,
                maxWidth: '70%'
              }}
              className="portfolio-heading"
            >
              Dive into a few projects that represent my most fulfilling design
              experiences
            </h2>
          </div>

          {/* framer-pbdbj7: Cards section */}
          <PortfolioGrid />
        </div>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 699.98px) {
          .portfolio-main {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .portfolio-heading {
            max-width: 100% !important;
          }
        }
        @media (min-width: 700px) and (max-width: 1024.98px) {
          .portfolio-main {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </main>
  );
}
