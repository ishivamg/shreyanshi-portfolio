'use client';

import { motion } from 'framer-motion';

/**
 * AboutSection — matches the Vexoo Framer "About" section exactly:
 *
 * Layout (column, gap 100px, padding 0 32px):
 *   ① Title group (column, gap 80px):
 *      – h1 "About"  →  Open Sauce Two · 160px · weight 500 · tracking -0.04em · lh 1em
 *      – Bio row    →  spacer (flex:1) + bio text 70% width
 *                       Open Sauce Sans · 40px · weight 500 · tracking -0.02em · lh 1.3em
 *   ② Portrait (35% width, right-aligned, border-radius 32px, aspect-ratio 0.797846)
 */
export function AboutSection() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(48px, 6.94vw, 100px)',
        width: '100%'
      }}
    >
      {/* ① Title group */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(32px, 5.56vw, 80px)'
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60, filter: 'blur(24px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {/* Framer spec: Open Sauce Two, 160px at 1440px, 130px at 1025px, 100px at 700px */}
          <h1
            style={{
              fontFamily: '"Open Sauce Two", system-ui, sans-serif',
              fontSize: 'clamp(6.25rem, 11.1vw, 10rem)',
              fontWeight: 500,
              letterSpacing: '-0.04em',
              lineHeight: '1em',
              color: '#ffffff',
              margin: 0
            }}
          >
            About
          </h1>
        </motion.div>

        {/* Bio text — right-aligned, 70% width at desktop */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%'
          }}
        >
          <div
            style={{
              /* 70% desktop → 100% on mobile (handled via clamp-like approach) */
              width: 'min(70%, 100%)'
            }}
          >
            {/* Framer spec: Open Sauce Sans, 40px, weight 500, letter-spacing -0.02em, lh 1.3em */}
            <p
              style={{
                fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
                fontSize: 'clamp(1.375rem, 2.78vw, 2.5rem)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: '1.3em',
                color: '#ffffff',
                margin: 0
              }}
            >
              I&rsquo;m Shreyanshi &mdash; a UI/UX &amp; Product Designer who
              believes the best work lives at the intersection of clarity and
              craft. I specialise in product experiences that feel considered
              from every angle.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ② Portrait — right-aligned, 35% width, border-radius 32px */}
      {/* Framer spec: aspect-ratio 0.797846 ≈ 4:5 portrait, width 35% at desktop */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%'
        }}
      >
        <div
          style={{
            /* 35% desktop · 50% tablet (≤1025px) · 100% mobile (≤700px) */
            width: 'clamp(260px, 35%, 516px)',
            aspectRatio: '0.797846',
            borderRadius: '32px',
            overflow: 'hidden',
            position: 'relative',
            flexShrink: 0
          }}
        >
          {/* Portrait — swap this <div> for an <Image> when the real photo is ready */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(80% 60% at 20% 20%, rgba(204,245,0,0.22), transparent 55%), radial-gradient(80% 60% at 80% 80%, rgba(34,211,238,0.14), transparent 55%), linear-gradient(180deg, #111314, #07080A)'
            }}
          />
          {/* Subtle noise grain */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              opacity: 0.06,
              mixBlendMode: 'overlay'
            }}
          />
          {/* Content inside portrait placeholder */}
          <div
            style={{
              position: 'absolute',
              inset: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span
                style={{
                  fontFamily: '"Open Sauce Sans", sans-serif',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.25em',
                  color: 'rgba(255,255,255,0.4)'
                }}
              >
                Now
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: '"Open Sauce Sans", sans-serif',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.25em',
                  color: 'rgba(255,255,255,0.6)'
                }}
              >
                <span
                  style={{
                    display: 'block',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#ccf500',
                    animation: 'pulse 2.6s ease-in-out infinite'
                  }}
                />
                Designing
              </span>
            </div>
            <div>
              <p
                style={{
                  fontFamily: '"Open Sauce Two", sans-serif',
                  fontSize: 'clamp(4.5rem, 6.5vw, 7rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.04em',
                  lineHeight: '0.9em',
                  color: '#ffffff',
                  margin: '0 0 12px'
                }}
              >
                S
              </p>
              <p
                style={{
                  fontFamily: '"Open Sauce Sans", sans-serif',
                  fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2em',
                  color: 'rgba(255,255,255,0.9)',
                  margin: '0 0 8px'
                }}
              >
                Shreyanshi
              </p>
              <p
                style={{
                  fontFamily: '"Open Sauce Sans", sans-serif',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.5)',
                  margin: 0
                }}
              >
                BFA · Applied Arts · Product Designer
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
