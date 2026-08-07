import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@sana/shared';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-DEFAULT ease-DEFAULT ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-container items-center justify-between px-4 sm:px-6 md:h-32 md:px-8"
      >
        {/* LOGO & NAME: Responsive sizing */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 font-semibold tracking-tight text-neutral-50"
        >
          <img 
            src="/images/logo-white.png" 
            alt="Sana Hameed Logo" 
            className="h-12 w-12 object-contain sm:h-16 sm:w-16 md:h-20 md:w-20" 
          />
          <span className="text-lg sm:text-xl md:text-2xl -ml-[1px]">Sana Hameed</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-small text-neutral-200 transition-colors duration-DEFAULT hover:text-neutral-50 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-DEFAULT hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden h-10 items-center rounded-button bg-primary px-5 text-small font-medium text-white transition-colors duration-DEFAULT hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:inline-flex"
          >
            Let's talk
          </a>

          <button
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen((v) => !v)}
            className="p-2 text-neutral-50 md:hidden focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col bg-background/95 backdrop-blur-xl md:hidden overflow-y-auto"
          >
            <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 py-10">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-neutral-200 transition-colors hover:text-neutral-50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-3 inline-flex h-10 w-full max-w-[200px] items-center justify-center rounded-button bg-primary px-6 text-small font-medium text-white shadow-md"
              >
                Let's talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}