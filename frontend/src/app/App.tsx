import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Projects } from '@/app/components/Projects';
import { Skills } from '@/app/components/Skills';
import { Contact } from '@/app/components/Contact';
import { Navigation } from '@/app/components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0A0F1A', color: '#E8EDF5' }}>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
