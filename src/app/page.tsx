import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';

export default function HomePage() {
  return (
    <main className="relative h-[100svh] overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}
