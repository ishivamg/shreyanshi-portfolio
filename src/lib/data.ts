export type Project = {
  slug: string;
  index: string;
  title: string;
  client: string;
  year: string;
  domain: string;
  summary: string;
  highlights: string[];
  outcomes: { label: string; value: string }[];
  tags: string[];
  palette: { from: string; to: string };
};

export const projects: Project[] = [
  {
    slug: 'vasitum',
    index: '01',
    title: 'Vasitum — Revamping Recruitment with AI',
    client: 'Maven Workforce',
    year: '2024 — Now',
    domain: 'AI · SaaS · Recruitment',
    summary:
      'End-to-end redesign of an AI-powered recruitment platform — recruiter dashboards, candidate screening, automated scheduling, and a conversational AI layer that orchestrates the pipeline.',
    highlights: [
      'Smart Document Collector and an AI-powered Chatbot that move recruiters through the day without tab-switching.',
      'Modernized the interface for clarity in a data-heavy workflow — gradual reveal, layered hierarchy, context-aware UI.',
      'A component-based Figma system from zero — Auto Layout, Variables, Dev Mode — so engineering ships async across time zones.',
      'Engaging journey design that lets recruiters manage 100+ concurrent pipelines without losing context.'
    ],
    outcomes: [
      { label: 'Recruiter task time', value: '−25%' },
      { label: 'Design inconsistencies', value: '−40%' },
      { label: 'Iteration cycles', value: '−30%' },
      { label: 'Feature delivery', value: '−20%' }
    ],
    tags: ['AI', 'SaaS', 'Design System'],
    palette: { from: '#CCF500', to: '#7ECC00' }
  },
  {
    slug: 'maven-workforce',
    index: '02',
    title: 'Maven Workforce — Designing Talent Discovery for Scale',
    client: 'Maven Workforce',
    year: '2024',
    domain: 'Branding · UI/UX · Web',
    summary:
      'Crafted the branding, UI/UX and responsive experience for Maven Workforce — a global recruitment platform with a modern, cohesive identity across devices.',
    highlights: [
      'Visual style and user flow tuned for trust on a high-stakes hiring product.',
      'Smooth interactions on desktop and mobile — the redesign enhances navigation, communicates intent, and elevates the mission of connecting businesses with top talent worldwide.',
      'A scalable brand system that holds up across marketing, product, and recruiter-facing surfaces.'
    ],
    outcomes: [
      { label: 'Engagement uplift', value: '+22%' },
      { label: 'Conversion lift', value: '+18%' },
      { label: 'Dev clarifications', value: '−28%' }
    ],
    tags: ['Brand', 'Responsive', 'Marketing UX'],
    palette: { from: '#7ECC00', to: '#22D3EE' }
  },
  {
    slug: 'resq',
    index: '03',
    title: 'RESQ — Accident Emergency Alert',
    client: 'Concept · Personal',
    year: '2023',
    domain: 'Mobile · Safety · 0 → 1',
    summary:
      'A life-saving application that connects people during accidents — fast communication, calm UI, and a direct line to family and emergency contacts at the worst possible moment.',
    highlights: [
      'Scans important luggage and personal items to identify the owner and immediately notifies their family or emergency contacts.',
      'Reduces critical delays in reaching out to loved ones and provides timely support when it matters most.',
      'Trust-building UI patterns: large legible type, confirmations on every irreversible action, and clear states for victims, family, and responders.'
    ],
    outcomes: [
      { label: 'Time to alert', value: '< 5s' },
      { label: 'Onboarding steps', value: '3 only' },
      { label: 'Use case', value: 'Crisis-first' }
    ],
    tags: ['Mobile', 'Safety', 'Conceptual'],
    palette: { from: '#22D3EE', to: '#CCF500' }
  }
];

export const skills = [
  { name: 'Figma', initial: 'F', accent: false },
  { name: 'Adobe XD', initial: 'Xd', accent: true },
  { name: 'Adobe Suite', initial: 'A', accent: false },
  { name: 'Sketch', initial: '◆', accent: false },
  { name: 'Framer', initial: 'Fr', accent: false },
  { name: 'Photoshop', initial: 'Ps', accent: false },
  { name: 'Miro', initial: 'M', accent: false },
  { name: 'Hotjar', initial: 'H', accent: false }
];

export const tools = [
  'Figma',
  'Framer',
  'Adobe XD',
  'After Effects',
  'Photoshop',
  'Illustrator',
  'Claude',
  'Midjourney',
  'Notion',
  'Linear',
  'Mixpanel',
  'Loom'
];

export const experience = [
  {
    company: 'Maven Workforce Inc.',
    role: 'UI/UX Designer',
    period: 'Oct 2024 — Present',
    note: 'Lead UI/UX design at Vasitum, combining creativity, strategy, and collaboration to craft intuitive, user-centred experiences. Mentor interns and work closely with marketing to enhance brand engagement through thoughtful design.'
  },
  {
    company: 'House of UGC',
    role: 'UI/UX & Graphic Designer',
    period: 'Jul 2023 — Oct 2024',
    note: 'Designed wireframes, prototypes, and user flows to communicate ideas and ensure seamless user journeys. Built style guides and design systems for consistency across platforms. Improved web performance by optimizing visuals.'
  },
  {
    company: 'Metaspace',
    role: 'UI/UX & Graphic Designer',
    period: 'Jan 2022 — Jun 2023',
    note: 'Created wireframes, prototypes, and user flows to support smooth in-game navigation. Built design systems and style guidelines for cross-platform consistency. Designed HUDs, menus, and social-media posts to engage players.'
  },
  {
    company: 'Brijbasi Art Press',
    role: 'Graphic Designer',
    period: 'Jan 2021 — Jan 2022',
    note: 'Created digital illustrations and vector graphics for print and online media. Developed artwork that aligned with brand aesthetics and enhanced visual storytelling. Delivered high-quality assets under tight deadlines.'
  }
];

export const greetings = [
  { label: 'Hey', accent: true },
  { label: 'Hola' },
  { label: 'Namaste' }
];

export const contact = {
  email: 'bhatnagarshreyanshi@gmail.com',
  phone: '+91 98211 48681',
  location: 'India',
  available: 'Available · 2026'
};

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Behance', href: 'https://www.behance.net/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Email', href: 'mailto:bhatnagarshreyanshi@gmail.com' }
];

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skill', href: '#skills' },
  { label: 'Project', href: '#projects' },
  { label: 'Creative Venture', href: '#experience' },
  { label: 'Contact Us', href: '#contact' }
];
