/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/shreyanshi-portfolio',
  assetPrefix: '/shreyanshi-portfolio/',

  reactStrictMode: true,

  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' }
    ]
  },

  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react']
  }
};

export default nextConfig;
