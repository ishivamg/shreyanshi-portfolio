'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects, type Project } from '@/lib/data';

/**
 * PortfolioGrid — Vexoo 2-1 layout.
 *
 * Card shell (exact Framer spec):
 *   – backdrop-filter: blur(10px)
 *   – border-radius: 24px
 *   – box-shadow: inset 0px 1px 0px 1px rgba(255,255,255,0.06)
 *
 * Image area: absolute inset 16px 16px 64px, border-radius 16px
 *   → clean B&W gradient placeholder (swap for <Image> when screenshots ready)
 *
 * Title bar: bottom 0, height 64px, padding 0 20px
 *   → project name (SkewSwap) left  ·  category right (opacity 0.5)
 */

const SMALL = [projects[0], projects[1]];
const WIDE  = projects[2];

export function PortfolioGrid() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>

      {/* Row 1 — 2 equal cards */}
      <div
        style={{ display: 'flex', flexDirection: 'row', gap: '16px', width: '100%' }}
        className="pf-row-2"
      >
        {SMALL.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            style={{ flex: '1 0 0', minWidth: 0 }}
          >
            <Card project={p} wide={false} />
          </motion.div>
        ))}
      </div>

      {/* Row 2 — 1 full-width card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
      >
        <Card project={WIDE} wide={true} />
      </motion.div>

      <style>{`
        @media (max-width: 699.98px) {
          .pf-row-2 { flex-direction: column !important; gap: 12px !important; }
        }
      `}</style>
    </div>
  );
}

/* ─── Card ─────────────────────────────────────────────────── */

function Card({ project, wide }: { project: Project; wide: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        /* Framer card shell — exact spec */
        display: 'block',
        width: '100%',
        aspectRatio: wide ? '2.4' : '1.13333',
        maxHeight: wide ? '480px' : '650px',
        borderRadius: '24px',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: 'inset 0px 1px 0px 1px rgba(255, 255, 255, 0.06)',
        backgroundColor: 'rgba(255,255,255,0.03)',
        position: 'relative',
        overflow: 'hidden',
        textDecoration: 'none',
        cursor: 'pointer'
      }}
    >
      {/* ── Image area: inset 16 16 64 ── */}
      <div
        style={{
          position: 'absolute',
          top: 16, left: 16, right: 16, bottom: 64,
          borderRadius: 16,
          overflow: 'hidden'
        }}
      >
        {/* Zoom-out on hover — matches Framer's perspective scale */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            transform: hovered
              ? 'perspective(1200px) scale(1.04)'
              : 'perspective(1200px) scale(1.1)',
            transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
            willChange: 'transform'
          }}
        >
          <PlaceholderImage index={projects.indexOf(project)} wide={wide} />
        </div>
      </div>

      {/* ── Title bar: bottom 64px ── */}
      <TitleBar project={project} hovered={hovered} />
    </Link>
  );
}

/* ─── Placeholder image — pure B&W, no accent color ────────── */

function PlaceholderImage({ index, wide }: { index: number; wide: boolean }) {
  /* Three distinct dark-to-mid-gray gradients, purely monochrome */
  const gradients = [
    'linear-gradient(145deg, #222222 0%, #0e0e0e 40%, #1a1a1a 100%)',
    'linear-gradient(160deg, #1c1c1c 0%, #111111 50%, #202020 100%)',
    'linear-gradient(135deg, #181818 0%, #0a0a0a 50%, #161616 100%)'
  ];

  /* Very faint white geometric overlay — different per card */
  const overlayStyles: React.CSSProperties[] = [
    /* card 0: soft radial top-left */
    {
      background:
        'radial-gradient(ellipse 70% 60% at 20% 15%, rgba(255,255,255,0.06) 0%, transparent 65%)'
    },
    /* card 1: soft radial bottom-right */
    {
      background:
        'radial-gradient(ellipse 60% 50% at 80% 85%, rgba(255,255,255,0.06) 0%, transparent 65%)'
    },
    /* card 2 (wide): horizontal band of very faint light */
    {
      background:
        'radial-gradient(ellipse 90% 40% at 50% 40%, rgba(255,255,255,0.05) 0%, transparent 70%)'
    }
  ];

  return (
    <>
      {/* Base gradient */}
      <div style={{ position: 'absolute', inset: 0, background: gradients[index] ?? gradients[0] }} />

      {/* Faint geometric highlight */}
      <div style={{ position: 'absolute', inset: 0, ...overlayStyles[index] ?? overlayStyles[0] }} />

      {/* Very subtle grid lines — only visible at low opacity */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
      </svg>

      {/* Noise grain */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '160px',
          opacity: 0.06,
          mixBlendMode: 'overlay'
        }}
      />
    </>
  );
}

/* ─── Title bar ─────────────────────────────────────────────── */

function TitleBar({ project, hovered }: { project: Project; hovered: boolean }) {
  const shortTitle = project.title.split(' — ')[0];

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: 64,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        zIndex: 2
      }}
    >
      {/* Project name with SkewSwap animation (Framer: skewY 12deg) */}
      <div style={{ height: 24, overflow: 'hidden', position: 'relative', userSelect: 'none' }}>
        {/* Default row */}
        <span
          style={{
            display: 'block',
            fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: '24px',
            color: '#ffffff',
            whiteSpace: 'nowrap',
            transform: hovered ? 'translateY(-100%)' : 'translateY(0)',
            transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)'
          }}
        >
          {shortTitle}
        </span>
        {/* Hover row — slides up with skew */}
        <span
          style={{
            display: 'block',
            fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: '24px',
            color: '#ffffff',
            whiteSpace: 'nowrap',
            position: 'absolute',
            top: '100%',
            left: 0,
            transformOrigin: 'left center',
            transform: hovered
              ? 'translateY(-100%) skewY(0deg)'
              : 'translateY(0%) skewY(12deg)',
            transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)'
          }}
        >
          {shortTitle}
        </span>
      </div>

      {/* Category */}
      <span
        style={{
          fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
          fontSize: 16,
          fontWeight: 500,
          letterSpacing: '-0.02em',
          color: '#ffffff',
          opacity: 0.5,
          whiteSpace: 'nowrap'
        }}
      >
        {project.category}
      </span>
    </div>
  );
}
