'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { contact } from '@/lib/data';

/**
 * ContactSection — exact Vexoo Framer contact page spec (framer-nd42wg).
 *
 * Card background: rgba(255,255,255,0.05) + backdrop blur(10px) + noise grain overlay
 * Input labels sit ABOVE each field (not placeholder-only)
 * Checkbox/radio: custom circle indicator
 */

const PROJECT_TYPES = [
  'UI/UX Design',
  'Mobile App Design',
  'Design System',
  'Branding & Identity'
];

const BUDGET_OPTIONS = [
  '$1k – $5k',
  '$5k – $10k',
  '$10k – $20k',
  '> $20k'
];

export function ContactSection() {
  const [projectTypes, setProjectTypes] = useState<string[]>([]);
  const [budget, setBudget] = useState('');
  const [form, setForm] = useState({ name: '', email: '', details: '' });

  const toggleType = (t: string) =>
    setProjectTypes(prev =>
      prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\n\nProject Type: ${projectTypes.join(', ')}\nBudget: ${budget}\n\nDetails:\n${form.details}`
    );
    window.location.href = `mailto:${contact.email}?subject=Project enquiry from ${form.name}&body=${body}`;
  };

  return (
    <>
      {/* ── Heading ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: '100%' }}
      >
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
          className="contact-heading"
        >
          If you prefer not to fill out forms, feel free to email me directly
          — let&apos;s talk about the next big thing!
        </h2>
      </motion.div>

      {/* ── Content row ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          width: '100%'
        }}
        className="contact-row"
      >
        {/* ── Left: Phone + Email ──────────────────────────── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            flexShrink: 0
          }}
          className="contact-left"
        >
          {/* Phone */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span
              style={{
                fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                color: 'rgba(255,255,255,0.5)',
                display: 'block'
              }}
            >
              Phone
            </span>
            <a
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              style={{
                fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: '1.3em',
                color: '#ffffff',
                textDecoration: 'none',
                display: 'block',
                whiteSpace: 'nowrap',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.6')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              {contact.phone}
            </a>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span
              style={{
                fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                color: 'rgba(255,255,255,0.5)',
                display: 'block'
              }}
            >
              Email
            </span>
            <a
              href={`mailto:${contact.email}`}
              style={{
                fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
                fontSize: 'clamp(16px, 1.53vw, 22px)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: '1.3em',
                color: '#ffffff',
                textDecoration: 'none',
                display: 'block',
                transition: 'opacity 0.2s',
                wordBreak: 'break-word'
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.6')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              {contact.email}
            </a>
          </div>
        </div>

        {/* ── Right: Frosted glass form ────────────────────── */}
        <div
          style={{
            width: '48%',
            flexShrink: 0,
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden'
          }}
          className="contact-form-box"
        >
          {/* Card base: dark semi-transparent + backdrop blur */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255,255,255,0.05)',
              boxShadow: 'inset 0px 1px 0px 1px rgba(255,255,255,0.06)',
              borderRadius: '24px'
            }}
          />
          {/* Noise grain texture overlay — matches Framer card texture */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundSize: '120px',
              opacity: 0.04,
              mixBlendMode: 'overlay',
              borderRadius: '24px',
              pointerEvents: 'none'
            }}
          />

          {/* Form content */}
          <div style={{ position: 'relative', zIndex: 1, padding: '40px' }}>
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
            >
              {/* Full Name */}
              <LabeledInput
                label="Full name"
                type="text"
                placeholder="ex. John Smith"
                value={form.name}
                onChange={v => setForm({ ...form, name: v })}
                required
              />

              {/* Email */}
              <LabeledInput
                label="Email"
                type="email"
                placeholder="hello@website.com"
                value={form.email}
                onChange={v => setForm({ ...form, email: v })}
                required
              />

              {/* Section row: Project Type + Budget */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '80px',
                  alignItems: 'flex-start'
                }}
                className="contact-section-row"
              >
                {/* What's Your Project About? */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <FieldLabel>What&apos;s Your Project About?</FieldLabel>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {PROJECT_TYPES.map(t => (
                      <CheckOption
                        key={t}
                        label={t}
                        checked={projectTypes.includes(t)}
                        onChange={() => toggleType(t)}
                      />
                    ))}
                  </div>
                </div>

                {/* Project Budget */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <FieldLabel>Project Budget</FieldLabel>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {BUDGET_OPTIONS.map(b => (
                      <RadioOption
                        key={b}
                        label={b}
                        checked={budget === b}
                        onChange={() => setBudget(b)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* More Details */}
              <LabeledTextarea
                label="More Details"
                placeholder="About your project..."
                value={form.details}
                onChange={v => setForm({ ...form, details: v })}
              />

              {/* Submit + Availability */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <button
                  type="submit"
                  style={{
                    height: '54px',
                    borderRadius: '12px',
                    minWidth: '140px',
                    padding: '0 24px',
                    alignSelf: 'flex-start',
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                >
                  Submit
                </button>

                {/* Availability */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      display: 'inline-block',
                      flexShrink: 0
                    }}
                    className="availability-dot"
                  />
                  <span
                    style={{
                      fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
                      fontSize: '14px',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                      color: 'rgba(255,255,255,0.6)'
                    }}
                  >
                    One spot available for June, 2026
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 699.98px) {
          .contact-heading { max-width: 100% !important; }
          .contact-row { flex-direction: column !important; }
          .contact-left { width: 100% !important; }
          .contact-form-box { width: 100% !important; }
          .contact-section-row { flex-direction: column !important; gap: 32px !important; }
        }
        @media (min-width: 700px) and (max-width: 1024.98px) {
          .contact-heading { max-width: 85% !important; }
          .contact-form-box { width: 55% !important; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        .availability-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }
        /* Input placeholder color */
        .cf-input::placeholder,
        .cf-textarea::placeholder {
          color: rgba(255,255,255,0.3);
        }
      `}</style>
    </>
  );
}

/* ── Sub-components ──────────────────────────────────────────── */

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
        fontSize: '15px',
        fontWeight: 500,
        letterSpacing: '-0.01em',
        color: 'rgba(255,255,255,0.9)',
        display: 'block'
      }}
    >
      {children}
    </span>
  );
}

function LabeledInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required
}: {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <FieldLabel>{label}</FieldLabel>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        className="cf-input"
        style={{
          width: '100%',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '12px',
          padding: '14px 16px',
          fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
          fontSize: '15px',
          fontWeight: 400,
          color: '#ffffff',
          outline: 'none',
          boxSizing: 'border-box',
          transition: 'border-color 0.2s, background 0.2s'
        }}
        onFocus={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.24)';
          e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
        }}
        onBlur={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
          e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
        }}
      />
    </div>
  );
}

function LabeledTextarea({
  label,
  placeholder,
  value,
  onChange
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <FieldLabel>{label}</FieldLabel>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={5}
        className="cf-textarea"
        style={{
          width: '100%',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '12px',
          padding: '14px 16px',
          fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
          fontSize: '15px',
          fontWeight: 400,
          color: '#ffffff',
          outline: 'none',
          resize: 'none',
          boxSizing: 'border-box',
          transition: 'border-color 0.2s, background 0.2s'
        }}
        onFocus={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.24)';
          e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
        }}
        onBlur={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
          e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
        }}
      />
    </div>
  );
}

function CheckOption({
  label,
  checked,
  onChange
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
        userSelect: 'none'
      }}
    >
      <span
        style={{
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          border: `1px solid ${checked ? '#ffffff' : 'rgba(255,255,255,0.25)'}`,
          backgroundColor: checked ? '#ffffff' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'border-color 0.2s, background-color 0.2s'
        }}
      >
        {checked && (
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#000000',
              display: 'block'
            }}
          />
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: 'none' }} />
      <span
        style={{
          fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '-0.01em',
          color: checked ? '#ffffff' : 'rgba(255,255,255,0.55)',
          transition: 'color 0.2s',
          whiteSpace: 'nowrap'
        }}
      >
        {label}
      </span>
    </label>
  );
}

function RadioOption({
  label,
  checked,
  onChange
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
        userSelect: 'none'
      }}
    >
      <span
        style={{
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          border: `1px solid ${checked ? '#ffffff' : 'rgba(255,255,255,0.25)'}`,
          backgroundColor: checked ? '#ffffff' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'border-color 0.2s, background-color 0.2s'
        }}
      >
        {checked && (
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#000000',
              display: 'block'
            }}
          />
        )}
      </span>
      <input type="radio" checked={checked} onChange={onChange} style={{ display: 'none' }} />
      <span
        style={{
          fontFamily: '"Open Sauce Sans", system-ui, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '-0.01em',
          color: checked ? '#ffffff' : 'rgba(255,255,255,0.55)',
          transition: 'color 0.2s',
          whiteSpace: 'nowrap'
        }}
      >
        {label}
      </span>
    </label>
  );
}
