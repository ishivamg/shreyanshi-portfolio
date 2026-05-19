'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { Magnetic } from '@/components/ui/Magnetic';
import { SkewSwap } from '@/components/ui/SkewSwap';
import { contact, socials } from '@/lib/data';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');
  const [form, setForm] = useState({ name: '', email: '', website: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const update = () => {
      const d = new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit'
      });
      setTime(d);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nWebsite: ${form.website}\n\n${form.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=Project enquiry from ${form.name}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="relative py-6 md:py-10">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <h2 className="font-display text-display-md text-balance text-chalk-50">
            Let&rsquo;s build something{' '}
            <em className="italic text-lime-300">memorable</em> together.
          </h2>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-chalk-300">
            I seek to push the limits of creativity to create high-engaging, user-friendly, and
            memorable interactive experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic strength={14}>
              <a
                href={`mailto:${contact.email}`}
                className="group inline-flex items-center gap-3 rounded-full bg-lime-400 px-6 py-3.5 text-[14px] font-medium text-noir-950 transition-colors hover:bg-lime-300"
              >
                <SkewSwap height="1.1em">Email me</SkewSwap>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
            <button
              onClick={copy}
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3.5 text-[14px] text-chalk-100 transition-colors hover:bg-white/[0.07]"
            >
              <span className="font-mono text-[13px]">{contact.email}</span>
              {copied ? (
                <Check className="h-4 w-4 text-lime-300" />
              ) : (
                <Copy className="h-4 w-4 text-chalk-400 transition-colors group-hover:text-chalk-100" />
              )}
            </button>
          </div>

          <ul className="mt-12 grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <Cell label="Phone" value={contact.phone} />
            <Cell label="Location" value={contact.location} />
            <Cell label="Status" value={contact.available} accent />
            <Cell label="Local · IST" value={time || '—'} mono />
          </ul>

          <ul className="mt-10 flex flex-wrap gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <Magnetic strength={6}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[13px] text-chalk-200 transition-colors hover:border-lime-400/40 hover:text-chalk-50"
                  >
                    <SkewSwap height="1.1em">{s.label}</SkewSwap>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={submit} className="relative md:col-span-5">
          <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.3em] text-chalk-400">New project</p>
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-lime-300">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse-soft" />
                Open
              </span>
            </div>
            <div className="space-y-4">
              <Field
                label="Your name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
              />
              <Field
                label="Your website (if exists)"
                value={form.website}
                onChange={(v) => setForm({ ...form, website: v })}
              />
              <Field
                label="How can I help?"
                textarea
                value={form.message}
                onChange={(v) => setForm({ ...form, message: v })}
              />
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-4 text-[14px] font-medium text-noir-950 transition-colors hover:bg-lime-300"
            >
              <SkewSwap height="1.1em">{sent ? 'Opening your mail…' : 'Get in touch'}</SkewSwap>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Cell({
  label,
  value,
  mono,
  accent
}: {
  label: string;
  value: string;
  mono?: boolean;
  accent?: boolean;
}) {
  return (
    <li className="bg-noir-900/40 p-5">
      <p className="text-[10px] uppercase tracking-[0.22em] text-chalk-400">{label}</p>
      <p
        className={`mt-2 text-[14px] ${mono ? 'font-mono' : ''} ${
          accent ? 'text-lime-300' : 'text-chalk-100'
        }`}
      >
        {value}
      </p>
    </li>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required,
  textarea
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const cls =
    'w-full rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 text-[14px] text-chalk-100 placeholder:text-chalk-400 outline-none transition-colors focus:border-lime-400/50 focus:bg-white/[0.05]';
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      {textarea ? (
        <textarea
          rows={4}
          required={required}
          value={value}
          placeholder={label}
          onChange={(e) => onChange(e.target.value)}
          className={cls + ' resize-none'}
        />
      ) : (
        <input
          type={type}
          required={required}
          value={value}
          placeholder={label}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
        />
      )}
    </label>
  );
}
