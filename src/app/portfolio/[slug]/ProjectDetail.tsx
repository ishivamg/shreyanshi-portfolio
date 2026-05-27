'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import type { Project } from '@/lib/data';

export function ProjectDetail({ project }: { project: Project }) {
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
        className="project-main"
      >
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          {/* Index + Category */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.4)', letterSpacing: '-0.01em' }}>
              {project.index}
            </span>
            <span style={{ width: '1px', height: '12px', backgroundColor: 'rgba(255,255,255,0.15)' }} />
            <span style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.4)', letterSpacing: '-0.01em' }}>
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
              fontSize: 'clamp(2rem, 4.17vw, 4rem)',
              fontWeight: 500, letterSpacing: '-0.03em',
              lineHeight: '1.1em', color: '#ffffff',
              margin: 0, maxWidth: '80%'
            }}
            className="project-title"
          >
            {project.title}
          </h1>

          {/* Meta row */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', flexWrap: 'wrap' }}>
            <MetaItem label="Client" value={project.client} />
            <MetaItem label="Year"   value={project.year}   />
            <MetaItem label="Domain" value={project.domain} />
          </div>
        </motion.div>

        {/* ── Hero image ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{
            width: '100%', aspectRatio: '2.2', maxHeight: '540px',
            borderRadius: '24px', overflow: 'hidden', position: 'relative',
            backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
            boxShadow: 'inset 0px 1px 0px 1px rgba(255,255,255,0.06)',
            backgroundColor: 'rgba(255,255,255,0.03)'
          }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #161616 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 50% at 50% 30%, rgba(255,255,255,0.06) 0%, transparent 65%)' }} />
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id={`pg-${project.slug}`} width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
            <rect width="100%" height="100%" fill={`url(#pg-${project.slug})`}/>
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: 'clamp(2rem, 8vw, 8rem)', fontWeight: 500, letterSpacing: '-0.04em', color: 'rgba(255,255,255,0.06)' }}>
              {project.title.split(' — ')[0]}
            </span>
          </div>
        </motion.div>

        {/* ── Body ── */}
        <div
          style={{ display: 'flex', flexDirection: 'row', gap: '80px', alignItems: 'flex-start' }}
          className="project-body"
        >
          {/* Left */}
          <div style={{ flex: '1 0 0', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '56px' }}>
            <Section title="Overview">
              <p style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '18px', fontWeight: 400, lineHeight: '1.6em', color: 'rgba(255,255,255,0.75)', margin: 0 }}>
                {project.summary}
              </p>
            </Section>

            <Section title="Highlights">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {project.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span style={{ width: '24px', height: '1px', backgroundColor: 'rgba(255,255,255,0.25)', flexShrink: 0, marginTop: '12px' }} />
                    <p style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '1.6em', color: 'rgba(255,255,255,0.7)', margin: 0 }}>{h}</p>
                  </div>
                ))}
              </div>
            </Section>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tags.map(t => (
                <span key={t} style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '-0.01em', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '5px 14px' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Outcomes */}
          <div style={{ width: '280px', flexShrink: 0 }} className="project-outcomes">
            <Section title="Outcomes">
              <div>
                {project.outcomes.map((o, i) => (
                  <div key={i} style={{ padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <span style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', fontWeight: 500, letterSpacing: '-0.03em', color: '#ffffff', display: 'block', lineHeight: 1 }}>
                      {o.value}
                    </span>
                    <span style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.45)', display: 'block', marginTop: '6px' }}>
                      {o.label}
                    </span>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>

        {/* ── Back ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '40px' }}>
          <Link
            href="/portfolio"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '15px', fontWeight: 500, letterSpacing: '-0.01em', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
            className="back-link"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden>
              <path d="M6 1L1 6m0 0l5 5M1 6h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All projects
          </Link>
        </div>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 699.98px) {
          .project-main     { padding-left: 16px !important; padding-right: 16px !important; }
          .project-title    { max-width: 100% !important; }
          .project-body     { flex-direction: column !important; gap: 48px !important; }
          .project-outcomes { width: 100% !important; }
        }
        @media (min-width: 700px) and (max-width: 1024.98px) {
          .project-main     { padding-left: 24px !important; padding-right: 24px !important; }
          .project-outcomes { width: 220px !important; }
        }
        .back-link:hover { color: #ffffff !important; }
      `}</style>
    </main>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <span style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.4)' }}>{label}</span>
      <span style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '15px', fontWeight: 500, letterSpacing: '-0.01em', color: '#ffffff' }}>{value}</span>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <span style={{ fontFamily: '"Open Sauce Sans", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, letterSpacing: '-0.01em', color: 'rgba(255,255,255,0.5)' }}>{title}</span>
      {children}
    </div>
  );
}
