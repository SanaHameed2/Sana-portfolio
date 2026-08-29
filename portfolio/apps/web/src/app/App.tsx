import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { AnalyticsProvider } from '../context/AnalyticsContext'
import { Navigation } from './components/Navigation';
import Hero from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Reviews } from './components/Reviews';
import { BackToTop } from './components/BackToTop';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Loader } from './components/Loader';
import { ProgressBar } from './components/ProgressBar';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SOCIAL_LINKS } from '@sana/shared';

function App() {
  return (
    <AnalyticsProvider>
      <div className="min-h-screen bg-background text-neutral-50 selection:bg-primary selection:text-white">
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <Loader />
        <ProgressBar />

        <Navigation />

        <main id="main">
          <ErrorBoundary>
            <Hero />
          </ErrorBoundary>

          <ErrorBoundary>
            <About />
          </ErrorBoundary>

          <ErrorBoundary>
            <section id="skills">
              <Skills />
            </section>
          </ErrorBoundary>

          <ErrorBoundary>
            <section id="projects">
              <Projects />
            </section>
          </ErrorBoundary>

          <ErrorBoundary>
            <Reviews />
          </ErrorBoundary>

          <ErrorBoundary>
            <section id="contact">
              <Contact />
            </section>
          </ErrorBoundary>
        </main>

        <footer className="border-t border-border py-8 text-center">
          <div className="mb-4 flex justify-center gap-6">
            {SOCIAL_LINKS.filter((link) => link.id !== 'portfolio').map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors duration-DEFAULT hover:text-neutral-50"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-small text-neutral-400">
            © {new Date().getFullYear()} Developed by Sana Hameed. Built with React &amp; Tailwind.
          </p>
        </footer>

        <BackToTop />
        <WhatsAppFloat />
        
        <Analytics />
        <SpeedInsights />
      </div>
    </AnalyticsProvider>
  );
}

export default App;
