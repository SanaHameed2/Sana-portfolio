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
      className="relative flex min-h-screen items-center overflow-hidden bg-[#030712] pt-20 md:pt-32"
    >
      {/* Background Decorative Ambient Glow & Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-32 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[140px]" />
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-container grid-cols-1 items-center gap-8 px-5 py-10 sm:gap-12 sm:px-8 sm:py-14 lg:grid-cols-12 lg:gap-gutter lg:px-8 lg:py-20">
        <div className="lg:col-span-7">
          {/* Subtitle Pill Badge with High-Contrast Sky-400 Color */}
          <motion.div
            initial="hidden"
            animate="shown"
            variants={FADE_UP}
            transition={transition(0)}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-sky-400 uppercase backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              Full-Stack & UI Engineer
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial="hidden"
            animate="shown"
            variants={FADE_UP}
            transition={transition(0.05)}
            className="mt-4 text-3xl font-bold leading-[1.1] text-slate-100 sm:mt-6 sm:text-5xl lg:text-hero tracking-tight"
          >
            Bridging UI design with modern{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              React architecture.
            </span>
          </motion.h1>

          {/* Intro Description targeting Jobs, Upwork & Fiverr */}
          <motion.p
            initial="hidden"
            animate="shown"
            variants={FADE_UP}
            transition={transition(0.1)}
            className="mt-4 max-w-prose text-body text-slate-300 sm:mt-6 leading-relaxed"
          >
            Hi, I'm Sana Hameed. I build scalable, high-performance web applications and custom digital storefronts using React, Next.js, TypeScript, and Node.js — turning complex UI/UX designs into clean, production-ready code.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial="hidden"
            animate="shown"
            variants={FADE_UP}
            transition={transition(0.15)}
            className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <a
              href="#projects"
              className="inline-flex h-11 w-full items-center justify-center rounded-button bg-blue-600 px-6 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:h-12 sm:w-auto sm:px-8 sm:text-base"
            >
              View Featured Work
            </a>

            <a
              href="#contact"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-button border border-slate-800 bg-slate-900/50 px-6 text-sm font-medium text-slate-200 backdrop-blur-md transition-all duration-200 ease-in-out hover:border-slate-700 hover:bg-slate-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:h-12 sm:w-auto sm:px-8 sm:text-base"
            >
              Let's Talk
            </a>
          </motion.div>

          {/* Availability Status & Core Tech Stack */}
          <motion.div
            initial="hidden"
            animate="shown"
            variants={FADE_UP}
            transition={transition(0.2)}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-400 sm:mt-12 sm:gap-6 sm:text-sm"
          >
            <span className="inline-flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                aria-hidden="true"
              />
              Available for Full-Time Roles & High-Ticket Freelance
            </span>

            <span className="hidden sm:inline text-slate-600" aria-hidden="true">
              •
            </span>

            <span className="text-slate-400">React · Next.js · Node.js · TypeScript</span>
          </motion.div>
        </div>

        {/* Realistic Interactive Code Window Component */}
        <motion.div
          initial={{ opacity: 0, x: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition(0.15)}
          className="relative hidden justify-center lg:col-span-5 lg:flex"
        >
          <div className="relative w-full max-w-md rounded-xl border border-slate-800 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-xl">
            {/* Window Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] font-mono text-slate-500">engineer.tsx</span>
            </div>

            {/* Syntax Highlighted Code Content */}
            <div className="mt-3 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300">
              <p><span className="text-pink-400">const</span> <span className="text-blue-400">engineer</span> = &#123;</p>
              <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-400">'Sana Hameed'</span>,</p>
              <p className="pl-4"><span className="text-slate-400">role:</span> <span className="text-emerald-400">'Full-Stack & UI Engineer'</span>,</p>
              <p className="pl-4"><span className="text-slate-400">stack:</span> [</p>
              <p className="pl-8"><span className="text-emerald-400">'React'</span>, <span className="text-emerald-400">'Next.js'</span>, <span className="text-emerald-400">'TypeScript'</span>,</p>
              <p className="pl-8"><span className="text-emerald-400">'Node.js'</span>, <span className="text-emerald-400">'Tailwind CSS'</span></p>
              <p className="pl-4">],</p>
              <p className="pl-4"><span className="text-slate-400">focus:</span> <span className="text-emerald-400">'High Performance & Core Web Vitals'</span></p>
              <p>&#125;;</p>
              <p className="mt-2 text-slate-500">// Ready for new challenges</p>
            </div>

            {/* Ambient Background Glow behind Code Block */}
            <div className="absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-r from-blue-600/20 to-sky-500/20 opacity-50 blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;