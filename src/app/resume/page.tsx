import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { experience, contact } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume — Shreyanshi Bhatnagar, Senior Product Designer.'
};

const summary = [
  'End-to-end UI/UX across iOS, Android and Web',
  'Design systems built from zero — Auto Layout · Variables · Dev Mode',
  'User research, usability testing, heuristic evaluation',
  'Interaction design, motion, prototyping',
  'AI product UX — conversational flows, explainable surfaces',
  'Brand & marketing design across IG, FB, LinkedIn, email'
];

const toolsList = [
  'Figma', 'FigJam', 'Adobe XD', 'Photoshop', 'Illustrator',
  'After Effects', 'Framer', 'Mixpanel', 'Metabase', 'Retool',
  'Intercom', 'Customer.io', 'JIRA', 'Loom', 'Claude', 'Midjourney',
  'Galileo AI', 'Runway ML'
];

export default function ResumePage() {
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
          position: 'fixed', inset: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '64px', backgroundRepeat: 'repeat',
          opacity: 0.04, pointerEvents: 'none', zIndex: 0
        }}
      />

      <Navbar />

      <div
        style={{
          position: 'relative', zIndex: 1, width: '100%',
          display: 'flex', flexDirection: 'column',
          gap: 'clamp(48px, 5.56vw, 80px)',
          paddingTop: 'clamp(80px, 8.61vw, 124px)',
          paddingBottom: '80px',
          paddingLeft: '40px', paddingRight: '40px'
        }}
        className="resume-main"
      >
        {/* Heading */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <h2
            style={{
              fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
              fontSize: 'clamp(1.625rem, 3.33vw, 3rem)',
              fontWeight: 500, letterSpacing: '-0.02em',
              lineHeight: '1.2em', color: '#ffffff', margin: 0, maxWidth: '60%'
            }}
            className="resume-heading"
          >
            Five years shipping design across AI, SaaS, Web3 and brand
          </h2>
          {/* Download button */}
          <a
            href="/Shreyanshi-Bhatnagar-Resume.pdf"
            download
            className="resume-dl-btn"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              height: '48px', padding: '0 24px', borderRadius: '12px',
              backgroundColor: '#ffffff', color: '#000000', textDecoration: 'none',
              fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
              fontSize: '15px', fontWeight: 500, letterSpacing: '-0.01em',
              flexShrink: 0, transition: 'opacity 0.2s'
            }}
          >
            Download PDF
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M7 1v8M3 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Content */}
        <div
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '64px' }}
          className="resume-content"
        >
          {/* Left sidebar */}
          <div style={{ width: '240px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '32px' }} className="resume-sidebar">
            <ContactBlock label="Email"    value={contact.email}    href={`mailto:${contact.email}`} />
            <ContactBlock label="Phone"    value={contact.phone}    href={`tel:${contact.phone.replace(/\s/g, '')}`} />
            <ContactBlock label="Location" value={contact.location} />
            <ContactBlock label="Status"   value={contact.available} />
          </div>

          {/* Main content */}
          <div style={{ flex: '1 0 0', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '56px' }}>

            {/* Summary */}
            <ResumeBlock title="Summary">
              <p style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '1.6em', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                Senior Product Designer with 5+ years delivering end-to-end product design across
                AI, SaaS, Web3 and brand systems. Built Figma design systems from zero to production
                at three companies, reducing iteration cycles by up to 40% and enabling async
                developer handoff across distributed teams.
              </p>
            </ResumeBlock>

            {/* Core competencies */}
            <ResumeBlock title="Core competencies">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }} className="resume-skills-grid">
                {summary.map(s => (
                  <div key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ width: '16px', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)', flexShrink: 0, marginTop: '11px' }} />
                    <span style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: '1.5em', color: 'rgba(255,255,255,0.7)' }}>{s}</span>
                  </div>
                ))}
              </div>
            </ResumeBlock>

            {/* Experience */}
            <ResumeBlock title="Experience">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                {experience.map((e, i) => (
                  <div
                    key={e.company}
                    style={{
                      paddingTop: '28px', paddingBottom: '28px',
                      borderTop: '1px solid rgba(255,255,255,0.08)'
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginBottom: '4px' }}>
                      <span style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: 'clamp(1rem, 1.53vw, 22px)', fontWeight: 500, letterSpacing: '-0.02em', color: '#ffffff' }}>{e.company}</span>
                      <span style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '13px', fontWeight: 400, color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap' }}>{e.period}</span>
                    </div>
                    <p style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.5)', marginBottom: '12px' }}>{e.role}</p>
                    <p style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: '1.6em', color: 'rgba(255,255,255,0.6)', margin: 0 }}>{e.note}</p>
                  </div>
                ))}
              </div>
            </ResumeBlock>

            {/* Tools */}
            <ResumeBlock title="Tools">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {toolsList.map(t => (
                  <span
                    key={t}
                    className="resume-tool"
                    style={{
                      fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
                      fontSize: '13px', fontWeight: 500, letterSpacing: '-0.01em',
                      color: 'rgba(255,255,255,0.65)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '100px', padding: '5px 14px',
                      display: 'inline-block', transition: 'border-color 0.2s, color 0.2s'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </ResumeBlock>

            {/* Education */}
            <ResumeBlock title="Education">
              <p style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: 'clamp(1rem, 1.53vw, 22px)', fontWeight: 500, letterSpacing: '-0.02em', color: '#ffffff', margin: '0 0 8px' }}>
                Bachelor of Fine Arts (BFA) — Design (Applied Art)
              </p>
              <p style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: '1.6em', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                Specialisation in visual design, typography, layout, and applied art — the creative
                foundation behind every pixel-perfect interface.
              </p>
            </ResumeBlock>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        .resume-dl-btn:hover      { opacity: 0.85; }
        .resume-contact-link:hover { opacity: 0.6; }
        .resume-tool:hover        { border-color: rgba(255,255,255,0.3) !important; color: #ffffff !important; }
        @media (max-width: 699.98px) {
          .resume-main    { padding-left: 16px !important; padding-right: 16px !important; }
          .resume-heading { max-width: 100% !important; }
          .resume-content { flex-direction: column !important; gap: 40px !important; }
          .resume-sidebar { width: 100% !important; flex-direction: row !important; flex-wrap: wrap !important; gap: 24px !important; }
          .resume-skills-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 700px) and (max-width: 1024.98px) {
          .resume-main    { padding-left: 24px !important; padding-right: 24px !important; }
          .resume-heading { max-width: 80% !important; }
          .resume-sidebar { width: 180px !important; }
        }
      `}</style>
    </main>
  );
}

function ResumeBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <span style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, letterSpacing: '-0.01em', color: 'rgba(255,255,255,0.5)' }}>{title}</span>
      {children}
    </div>
  );
}

function ContactBlock({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <span style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.4)', display: 'block' }}>{label}</span>
      {href ? (
        <a href={href} className="resume-contact-link" style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '15px', fontWeight: 500, letterSpacing: '-0.01em', color: '#ffffff', textDecoration: 'none', transition: 'opacity 0.2s' }}>
          {value}
        </a>
      ) : (
        <span style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '15px', fontWeight: 500, letterSpacing: '-0.01em', color: '#ffffff' }}>{value}</span>
      )}
    </div>
  );
}
