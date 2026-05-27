'use client';

import { motion } from 'framer-motion';
import { skills, tools } from '@/lib/data';

export function SkillsSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', width: '100%' }}>

      {/* Skills grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: '16px'
        }}
        className="skills-grid"
      >
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
          >
            <SkillCard name={s.name} initial={s.initial} />
          </motion.div>
        ))}
      </div>

      {/* Tools list */}
      <div
        style={{
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '24px',
          boxShadow: 'inset 0px 1px 0px 1px rgba(255,255,255,0.06)',
          backgroundColor: 'rgba(255,255,255,0.03)',
          padding: '40px'
        }}
      >
        <p
          style={{
            fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            letterSpacing: '-0.01em',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '24px'
          }}
        >
          Tools in the kit
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {tools.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.025, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '100px',
                padding: '6px 16px',
                display: 'inline-block',
                transition: 'border-color 0.2s, color 0.2s',
                cursor: 'default'
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)';
                (e.currentTarget as HTMLElement).style.color = '#ffffff';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)';
              }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 699.98px) {
          .skills-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (min-width: 700px) and (max-width: 1024.98px) {
          .skills-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </div>
  );
}

function SkillCard({ name, initial }: { name: string; initial: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: '1',
        borderRadius: '24px',
        border: '1px solid rgba(255,255,255,0.06)',
        backgroundColor: 'rgba(255,255,255,0.025)',
        padding: '24px',
        gap: '16px',
        transition: 'background-color 0.4s, border-color 0.4s',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.045)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.025)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
      }}
    >
      {/* Initial badge */}
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '16px',
          backgroundColor: 'rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <span
          style={{
            fontFamily: '"Open Sauce Two", system-ui, sans-serif',
            fontSize: '24px',
            fontWeight: 500,
            fontStyle: 'italic',
            color: '#ffffff'
          }}
        >
          {initial}
        </span>
      </div>

      {/* Name */}
      <p
        style={{
          fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '-0.01em',
          color: 'rgba(255,255,255,0.7)',
          textAlign: 'center'
        }}
      >
        {name}
      </p>
    </div>
  );
}
