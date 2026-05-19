# Shreyanshi Bhatnagar — Portfolio

A cinematic, motion-first portfolio for a Senior Product Designer working across
AI, Fintech, SaaS and Web3. Built to feel like the work it presents:
Apple/Linear/Raycast-level polish, calm motion, premium spacing rhythm.

## Stack

- **Next.js 15** (App Router) · TypeScript
- **Tailwind CSS** with a custom token system (noir / chalk / ember)
- **Framer Motion** for reveal staggers, magnetic interactions, scroll-bound parallax
- **Lenis** for buttery smooth scroll
- **Geist** + **Instrument Serif** typography (loaded via Google Fonts)
- **lucide-react** for hairline iconography

No GSAP required — every scroll choreography is built with Framer Motion's
`useScroll` + `useTransform`, which keeps the bundle lean.

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build       # production build
npm run start       # serve the build
npm run type-check  # strict TS pass
```

## Folder structure

```
src/
  app/
    layout.tsx          # fonts, metadata, smooth scroll, cursor
    page.tsx            # single-page composition
    globals.css         # tokens, grain, gradients, base resets
  components/
    Navbar.tsx          # glass pill nav, scroll-aware, mobile sheet
    Hero.tsx            # parallax scene, line-by-line mask reveal
    Marquee-strip.tsx   # infinite tag marquee (CSS-cheap)
    About.tsx           # narrative + floating "now" card
    SelectedWork.tsx    # hover-reveal project list with magnetic CTA
    CaseStudies.tsx     # long-form sticky case studies w/ mock UI
    Metrics.tsx         # impact grid, viewport-stagger
    Process.tsx         # six-step process w/ scroll-bound progress line
    Experience.tsx      # career timeline
    Capabilities.tsx    # four pillars + tool chips
    Testimonials.tsx    # quote cards
    ContactCTA.tsx      # email copy, social links, IST clock
    Footer.tsx          # parallax wordmark
    SmoothScroll.tsx    # Lenis bootstrapping + anchor handling
    ui/
      Cursor.tsx        # mix-blend cursor with hover expansion
      Magnetic.tsx      # pointer-attractive wrapper
      RevealText.tsx    # word & line mask reveals
      Marquee.tsx       # generic infinite scroller
      Badge.tsx         # pill with pulse dot
  lib/
    data.ts             # projects, experience, metrics, process content
    utils.ts            # cn(), easing tokens
```

## Content map

All copy in [src/lib/data.ts](src/lib/data.ts) is derived from the attached
resume. Each project follows the same shape (`challenge → approach → outcomes`)
so adding a fifth case is a single object insertion.

## Motion language

- **Words** open via `overflow:hidden` + `translateY(110%) → 0` with `[0.16, 1, 0.3, 1]` easing — the cinematic "rise" used by Vexoo, Linear, etc.
- **Sections** parallax via `useScroll` targeting the section itself (so transforms are scoped, not page-global).
- **Process** has a scroll-bound progress line — a `scaleY` motion value driven by the section's `scrollYProgress`.
- **Hover** uses spring-damped magnetic offsets, never linear translations.
- All motion respects `prefers-reduced-motion` (Lenis is skipped, transforms degrade gracefully).

## Performance

- All animation components are client-scoped (`'use client'`) and tree-shake
  cleanly from server components.
- Framer Motion + Lucide are added to `optimizePackageImports` so unused
  exports are stripped at build time.
- Lenis runs in a single `requestAnimationFrame` loop and is destroyed on unmount.
- Fonts are loaded via `<link rel="preconnect">` to keep first paint sharp.

## Deploy

Ready for Vercel — `npm run build` produces a standard Next 15 output. Set
`NEXT_TELEMETRY_DISABLED=1` if you want clean logs.

## Next steps (optional)

- Split case studies into `/work/[slug]` route group (data shape is already ready).
- Add an MDX layer for long-form case writing.
- Wire up a real `/og.png` route via `next/og`.
- Add `analytics` provider of choice (Vercel Analytics drops in cleanly).
