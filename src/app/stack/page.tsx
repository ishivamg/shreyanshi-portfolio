import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SkillsSection } from '@/components/sections/SkillsSection';

export const metadata: Metadata = {
  title: 'Stack',
  description:
    'The toolkit — Figma at the core, motion and prototyping for shape, analytics and brand tools for proof.'
};

export default function StackPage() {
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
          gap: 'clamp(40px, 5.56vw, 80px)',
          paddingTop: 'clamp(80px, 8.61vw, 124px)',
          paddingBottom: '80px',
          paddingLeft: '40px',
          paddingRight: '40px'
        }}
        className="stack-main"
      >
        {/* Heading */}
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
          className="stack-heading"
        >
          Sharp tools, used daily — Figma at the core, motion for feel,
          data to keep design honest
        </h2>

        <SkillsSection />
      </div>

      <Footer />

      <style>{`
        @media (max-width: 699.98px) {
          .stack-main  { padding-left: 16px !important; padding-right: 16px !important; }
          .stack-heading { max-width: 100% !important; }
        }
        @media (min-width: 700px) and (max-width: 1024.98px) {
          .stack-main  { padding-left: 24px !important; padding-right: 24px !important; }
          .stack-heading { max-width: 85% !important; }
        }
      `}</style>
    </main>
  );
}
