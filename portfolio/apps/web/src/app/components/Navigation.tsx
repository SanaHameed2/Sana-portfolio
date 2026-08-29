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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-DEFAULT ease-DEFAULT ${
        isScrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-container items-center justify-between px-4 sm:px-6 md:h-32 md:px-8"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-2 text-neutral-50"
          onClick={closeMenu}
        >
          <img
            src="/images/logo-white.png"
            alt="Sana Hameed"
            className="block h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
          />

          <span className="whitespace-nowrap text-lg font-semibold tracking-tight sm:text-xl md:text-2xl">
            Sana Hameed
          </span>
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

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#contact"
            className="hidden h-10 items-center rounded-button bg-primary px-5 text-small font-medium text-white transition-colors duration-DEFAULT hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:inline-flex"
          >
            Let's talk
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-lg p-2 text-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.2,
            }}
            className="fixed inset-x-0 bottom-0 top-20 z-40 flex flex-col overflow-y-auto bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 py-10">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-lg font-medium text-neutral-200 transition-colors hover:text-neutral-50"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
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
