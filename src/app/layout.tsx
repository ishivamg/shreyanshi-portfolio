import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';

export const metadata: Metadata = {
  metadataBase: new URL('https://shreyanshi.design'),
  title: {
    default: 'Shreyanshi Bhatnagar — Senior Product Designer',
    template: '%s · Shreyanshi Bhatnagar'
  },
  description:
    'Senior Product Designer crafting cinematic, motion-first experiences across AI, Fintech, SaaS, and Web3. End-to-end product design, design systems, and UX strategy.',
  keywords: [
    'Product Designer',
    'AI Product Design',
    'Design Systems',
    'SaaS UX',
    'Web3 Design',
    'Fintech UX',
    'Figma',
    'Portfolio'
  ],
  authors: [{ name: 'Shreyanshi Bhatnagar' }],
  creator: 'Shreyanshi Bhatnagar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Shreyanshi Bhatnagar — Senior Product Designer',
    description:
      'AI · Fintech · SaaS · Web3 · Design Systems. Five years building end-to-end product experiences.',
    siteName: 'Shreyanshi Bhatnagar',
    images: [{ url: '/og.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreyanshi Bhatnagar — Senior Product Designer',
    description: 'Senior Product Designer · AI · Fintech · SaaS · Web3'
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: '#070708',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        {/* Prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}` }} />
        {/* Preconnect to the Framer CDN that hosts Open Sauce fonts */}
        <link rel="preconnect" href="https://framerusercontent.com" crossOrigin="anonymous" />
        {/* Preload the two most critical font weights (display heading + body medium) */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://framerusercontent.com/assets/MuNMZGWeNhX5Gys174fgd0zrnbE.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://framerusercontent.com/assets/O2R7AhA6wjBk0GHLJl0N8fqxN0.woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="relative min-h-screen overflow-x-hidden">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
