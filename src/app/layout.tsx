import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Cursor } from '@/components/ui/Cursor';

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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen overflow-x-hidden">
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
