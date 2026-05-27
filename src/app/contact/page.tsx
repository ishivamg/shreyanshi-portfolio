import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Open to senior product design roles, founding design opportunities, and selective freelance.'
};

/**
 * Contact page — matches the Vexoo Framer contact page exactly.
 *
 * Page structure (framer-nd42wg):
 *   Navbar
 *   main:
 *     ├── h2 heading (max-width 70%, 48px)
 *     └── Content row — Left: phone+email · Right: frosted glass form
 *   Footer
 *
 * Layout:
 *   – background: #000
 *   – padding: 0 40px (same as About / Portfolio)
 *   – gap between sections: 80px
 *   – top padding: 124px (Navbar clearance)
 */
export default function ContactPage() {
  return (
    <main
      style={{
        backgroundColor: '#000000',
        minHeight: '100vh',
        position: 'relative',
        overflowX: 'hidden'
      }}
    >
      {/* Noise overlay */}
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

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '80px',
          paddingTop: 'clamp(80px, 8.61vw, 124px)',
          paddingBottom: '80px',
          paddingLeft: '40px',
          paddingRight: '40px'
        }}
        className="contact-main"
      >
        <ContactSection />
      </div>

      <Footer />

      <style>{`
        @media (max-width: 699.98px) {
          .contact-main {
            padding-left: 16px !important;
            padding-right: 16px !important;
            gap: 48px !important;
          }
        }
        @media (min-width: 700px) and (max-width: 1024.98px) {
          .contact-main {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </main>
  );
}
