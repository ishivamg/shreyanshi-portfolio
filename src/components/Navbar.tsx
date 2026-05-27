'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SkewSwap } from '@/components/ui/SkewSwap';

/**
 * Navbar — matches the Vexoo Framer navbar:
 *
 * Desktop layout (framer-mfqu82): flex-row, space-between, padding 24px
 *   Left:  ← icon (on inner pages) + Name + Role
 *   Right: City · Time | Theme dot
 *
 * Typography:
 *   – Name / Role / City / Time: Open Sauce Sans · 15–16px · weight 500 · tracking -0.02em
 */
export function Navbar() {
  const [time, setTime] = useState('');
  const [nameHovered, setNameHovered] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const update = () => {
      const d = new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      setTime(d);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      style={{ position: 'fixed', inset: '0 0 auto', zIndex: 50 }}
    >
      {/* framer-mfqu82: flex-row, space-between, padding 24px */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'clamp(16px, 1.67vw, 24px) clamp(16px, 2.22vw, 32px)'
        }}
      >
        {/* Left: ← arrow (inner pages) + Name + Role */}
        <Link
          href="/"
          onMouseEnter={() => setNameHovered(true)}
          onMouseLeave={() => setNameHovered(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            lineHeight: 1
          }}
          className="group"
        >
          {/* ← arrow icon — only on inner pages */}
          {!isHome && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '14px',
                transition: 'border-color 0.3s, color 0.3s',
                flexShrink: 0
              }}
              className="nav-back-btn"
            >
              {/* Arrow SVG matching Framer's 14×12px arrow icon */}
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden>
                <path
                  d="M5 1L1 5m0 0l4 4M1 5h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}

          {/* Name + Role — same row, large gap (Framer spec) */}
          <span
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'baseline',
              gap: '80px'
            }}
          >
            {/* Name */}
            <span
              style={{
                fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                display: 'block',
                whiteSpace: 'nowrap'
              }}
            >
              <SkewSwap height="1.2em" hovered={nameHovered}>Shreyanshi Bhatnagar</SkewSwap>
            </span>
            {/* Role — same line, same size, same color */}
            <span
              style={{
                fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                display: 'none',
                whiteSpace: 'nowrap'
              }}
              className="nav-role"
            >
              Senior Product Designer
            </span>
          </span>
        </Link>

        {/* Right: City · Time | Theme */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {/* City · Time — hidden on mobile */}
          <span
            style={{
              fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
              fontSize: '15px',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: 'rgba(255,255,255,0.6)',
              display: 'flex',
              alignItems: 'baseline',
              gap: '6px'
            }}
            className="nav-time"
          >
            <span>India</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
            <span style={{ color: '#ffffff', fontVariantNumeric: 'tabular-nums' }}>
              {time || '—'}
            </span>
          </span>

          <ThemeDot />
        </div>
      </div>

      {/* Responsive helpers */}
      <style>{`
        @media (min-width: 768px) {
          .nav-role { display: block !important; }
        }
        @media (max-width: 639.98px) {
          .nav-time { display: none !important; }
        }
        .group:hover .nav-back-btn {
          border-color: rgba(255,255,255,0.4) !important;
          color: #ffffff !important;
        }
      `}</style>
    </motion.header>
  );
}

function ThemeDot() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') setIsDark(false);
  }, []);

  const toggle = () => {
    const next = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  return (
    <button
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      type="button"
      onClick={toggle}
      title={isDark ? 'Light mode' : 'Dark mode'}
      style={{
        display: 'grid',
        placeItems: 'center',
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.2)',
        background: 'transparent',
        cursor: 'pointer',
        transition: 'border-color 0.3s',
        flexShrink: 0
      }}
    >
      {isDark ? (
        /* Sun icon — shown in dark mode, click to go light */
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <circle cx="7" cy="7" r="2.8" stroke="white" strokeWidth="1.3"/>
          <path d="M7 1v1.2M7 11.8V13M1 7h1.2M11.8 7H13M2.93 2.93l.85.85M10.22 10.22l.85.85M2.93 11.07l.85-.85M10.22 3.78l.85-.85" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      ) : (
        /* Moon icon — shown in light mode, click to go dark */
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path d="M12 8.5A5.5 5.5 0 0 1 5.5 2a5.5 5.5 0 1 0 6.5 6.5z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}
