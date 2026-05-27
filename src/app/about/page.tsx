import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AboutSection } from '@/components/sections/AboutSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { AboutTicker } from '@/components/sections/AboutTicker';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Senior Product Designer with five years across AI, SaaS, Fintech and Web3 — design systems, motion and product thinking.'
};

/**
 * About page — matches Vexoo "About" page pixel-for-pixel.
 *
 * Page structure (framer-BFQiQ / framer-3tqnmu):
 *   Navbar
 *   ├── About section     (h1 + bio text + portrait)
 *   ├── Testimonials      (3-col grid)
 *   ├── Experience        (row-based, no cards)
 *   └── Footer
 *
 * Page layout:
 *   – background: #000 (dark mode)
 *   – max-width: 1440px, centred
 *   – top padding matches Framer's --uefbev variable: 124px 0px 80px 0px
 *   – section gap: 150px at desktop, 100px at tablet, 64px at mobile
 */
export default function AboutPage() {
  return (
    <main
      style={{
        backgroundColor: '#000000',
        minHeight: '100vh',
        position: 'relative',
        overflowX: 'hidden'
      }}
    >
      {/* Subtle background noise pattern (Framer uses a tiling PNG at opacity 0.08) */}
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

      {/* Navbar — fixed at top */}
      <Navbar />

      {/* Page content — centred, max 1440px */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          /* Framer --uefbev: 124px top, 20px horizontal, 80px bottom */
          paddingTop: 'clamp(80px, 8.61vw, 124px)',
          paddingBottom: '80px',
          paddingLeft: '40px',
          paddingRight: '40px',
          /* Gap between sections: 150px desktop, 100px tablet, 64px mobile */
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(64px, 10.4vw, 150px)'
        }}
      >
        {/* ① About — heading + bio + portrait */}
        <AboutSection />

        {/* ② Testimonials — 3-col grid */}
        <TestimonialsSection />

        {/* ③ Experience — row-based list */}
        <ExperienceSection />
      </div>

      {/* ④ Ticker — Vexoo-style scrolling marquee before footer */}
      <AboutTicker />

      <Footer />
    </main>
  );
}
