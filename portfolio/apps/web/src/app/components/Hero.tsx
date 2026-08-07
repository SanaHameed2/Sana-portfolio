import { motion, useReducedMotion } from "framer-motion";

const FADE_UP = {
  hidden: { opacity: 0, y: 16 },
  shown: { opacity: 1, y: 0 },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  const transition = (delay = 0) => ({
    duration: reduceMotion ? 0 : 0.3,
    delay: reduceMotion ? 0 : delay,
    ease: [0.4, 0, 0.2, 1] as const,
  });

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-20"
    >
      {/* Ambient background — decorative only */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-container grid-cols-1 items-center gap-8 px-5 py-10 sm:gap-12 sm:px-8 sm:py-14 lg:grid-cols-12 lg:gap-gutter lg:px-8 lg:py-20">
        {/* Text first */}
        <div className="lg:col-span-7">
          <motion.p
            initial="hidden"
            animate="shown"
            variants={FADE_UP}
            transition={transition(0)}
            className="text-small font-medium uppercase tracking-[0.3em] text-primary"
          >
            Full Stack Engineer
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="shown"
            variants={FADE_UP}
            transition={transition(0.05)}
            className="mt-4 text-3xl font-bold leading-[1.1] text-neutral-50 sm:mt-6 sm:text-5xl lg:text-hero"
          >
            Building digital experiences that feel{" "}
            <span className="text-primary">effortless.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="shown"
            variants={FADE_UP}
            transition={transition(0.1)}
            className="mt-4 max-w-prose text-body text-neutral-200 sm:mt-6"
          >
            Hi, I'm Sana Hameed. I turn complex ideas into clean, intuitive
            interfaces people genuinely enjoy using — focused on modern
            fintech and SaaS products built with React, TypeScript and
            thoughtful UI.
          </motion.p>

          {/* ✅ BUTTONS - Mobile optimized */}
          <motion.div
            initial="hidden"
            animate="shown"
            variants={FADE_UP}
            transition={transition(0.15)}
            className="mt-6 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
          >
            <a
              href="#projects"
              className="inline-flex h-11 items-center rounded-button bg-primary px-5 text-sm font-medium text-white transition-transform duration-DEFAULT ease-DEFAULT hover:-translate-y-0.5 hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:h-12 sm:px-8 sm:text-base"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="inline-flex h-11 items-center gap-2 rounded-button border border-border bg-white/5 px-5 text-sm font-medium text-neutral-50 backdrop-blur-md transition-colors duration-DEFAULT ease-DEFAULT hover:border-border-hover hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:h-12 sm:px-8 sm:text-base"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="shown"
            variants={FADE_UP}
            transition={transition(0.2)}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-neutral-400 sm:mt-12 sm:gap-6 sm:text-sm"
          >
            <span className="inline-flex items-center gap-1.5 sm:gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
              Available for remote work
            </span>

            <span className="hidden sm:inline" aria-hidden="true">•</span>

            <span>React · TypeScript · Tailwind</span>
          </motion.div>
        </div>

        {/* Visual second — decorative illustration */}
        <motion.div
          initial={{ opacity: 0, x: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition(0.15)}
          className="relative hidden justify-center lg:col-span-5 lg:flex"
          aria-hidden="true"
        >
          <div className="relative w-full max-w-md">
            <svg viewBox="0 0 400 300" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="360" height="260" rx="16" fill="#061321" stroke="rgba(37,99,235,0.25)" strokeWidth="2" />
              <rect x="20" y="20" width="360" height="36" rx="16" fill="rgba(37,99,235,0.08)" />
              <circle cx="44" cy="38" r="6" fill="#EF4444" opacity="0.7" />
              <circle cx="64" cy="38" r="6" fill="#F59E0B" opacity="0.7" />
              <circle cx="84" cy="38" r="6" fill="#22C55E" opacity="0.7" />
              {[
                { y: 84, w: 140, o: 0.45 },
                { y: 104, w: 220, o: 0.3 },
                { y: 124, w: 180, o: 0.35 },
                { y: 144, w: 250, o: 0.25 },
                { y: 164, w: 120, o: 0.4 },
                { y: 184, w: 200, o: 0.3 },
                { y: 204, w: 160, o: 0.35 },
              ].map((r) => (
                <rect key={r.y} x="44" y={r.y} width={r.w} height="6" rx="3" fill="#2563EB" opacity={r.o} />
              ))}
            </svg>
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;