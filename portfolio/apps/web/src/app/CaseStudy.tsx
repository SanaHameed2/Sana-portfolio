// src/app/CaseStudy.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Play, Github, ExternalLink, 
  ShieldCheck, Zap, Globe, Database, Activity, Code2 
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function CaseStudy({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-[#FF7F50]/20">
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF7F50]/10 blur-[120px] rounded-full pointer-events-none z-0" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
        
        {/* Back Button */}
        <button 
          onClick={onBack} 
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-10 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        {/* Hero Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF7F50]/20 bg-[#FF7F50]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7F50] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#FF7F50] font-bold">Case Study</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Building <span className="text-[#FF7F50]">Pennywise</span>: A Production-Grade Fintech App
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A deep dive into the architecture, engineering challenges, and solutions behind a modern digital banking experience.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="https://www.youtube.com/watch?v=J4wbLWFqNXs" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-[#FF7F50] text-black font-bold text-sm flex items-center gap-2 hover:bg-[#ff8f66] transition-all">
              <Play className="w-4 h-4 fill-black" /> Watch Demo
            </a>
            <a href="https://github.com/SanaHameed2/pennywise-fintech-app" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 font-bold text-sm flex items-center gap-2 hover:bg-white/10 transition-all">
              <Github className="w-4 h-4" /> View Source
            </a>
          </div>
        </motion.div>

        {/* The Challenge */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 bg-[#0d0d12] border border-white/5 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Activity className="text-[#FF7F50] w-6 h-6" /> The Problem
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Traditional banking apps in Pakistan often lack modern UI/UX, offer zero clarity on spending, and have clunky transfer workflows. Users want a premium, seamless, and secure digital banking experience without the friction of outdated systems.
          </p>
        </motion.section>

        {/* Engineering Challenges (Grid) */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Key Engineering Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-[#0d0d12] border border-white/5 p-6 rounded-2xl hover:border-[#FF7F50]/30 transition-all">
              <ShieldCheck className="w-8 h-8 text-[#FF7F50] mb-4" />
              <h3 className="text-lg font-bold mb-2">PWA & Service Worker Cache</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                <strong>The Bug:</strong> Users were stuck on the offline fallback page due to aggressive service worker caching.<br/><br/>
                <strong>The Fix:</strong> Debugged via Chrome DevTools, updated Vite PWA Workbox config, and implemented a robust cache-busting strategy.
              </p>
            </div>

            <div className="bg-[#0d0d12] border border-white/5 p-6 rounded-2xl hover:border-[#FF7F50]/30 transition-all">
              <Zap className="w-8 h-8 text-[#FF7F50] mb-4" />
              <h3 className="text-lg font-bold mb-2">Bundle Size Optimization</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                <strong>The Bug:</strong> Initial JS bundle was 594kB, causing slow load times.<br/><br/>
                <strong>The Fix:</strong> Implemented React.lazy() and Vite manual chunking, reducing the main bundle by <strong>90% down to 37kB</strong>.
              </p>
            </div>

            <div className="bg-[#0d0d12] border border-white/5 p-6 rounded-2xl hover:border-[#FF7F50]/30 transition-all">
              <Globe className="w-8 h-8 text-[#FF7F50] mb-4" />
              <h3 className="text-lg font-bold mb-2">Urdu RTL & Accessibility</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                <strong>The Bug:</strong> Complex dashboard broke in Right-to-Left layout with poor contrast.<br/><br/>
                <strong>The Fix:</strong> Used Tailwind logical properties (ms-, me-), dynamic dir="rtl", and fixed contrast, achieving a <strong>100 Lighthouse A11y score</strong>.
              </p>
            </div>

            <div className="bg-[#0d0d12] border border-white/5 p-6 rounded-2xl hover:border-[#FF7F50]/30 transition-all">
              <Code2 className="w-8 h-8 text-[#FF7F50] mb-4" />
              <h3 className="text-lg font-bold mb-2">CI/CD & E2E Testing</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                <strong>The Bug:</strong> Zero-downtime deployments were risky without automated checks.<br/><br/>
                <strong>The Fix:</strong> Wrote Playwright E2E tests (login & transfer) and set up GitHub Actions to run tests automatically on every push.
              </p>
            </div>

          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 bg-[#0d0d12] border border-white/5 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Database className="text-[#FF7F50] w-6 h-6" /> The Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase (PostgreSQL)', 'Supabase Auth', 'Realtime WebSockets', 'Playwright', 'GitHub Actions', 'Vercel'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Results */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#FF7F50]">The Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-[#0d0d12] border border-white/5 p-6 rounded-2xl">
              <p className="text-3xl font-black text-white">100</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">A11y Score</p>
            </div>
            <div className="bg-[#0d0d12] border border-white/5 p-6 rounded-2xl">
              <p className="text-3xl font-black text-white">91</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">SEO Score</p>
            </div>
            <div className="bg-[#0d0d12] border border-white/5 p-6 rounded-2xl">
              <p className="text-3xl font-black text-white">90%</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Bundle Reduced</p>
            </div>
            <div className="bg-[#0d0d12] border border-white/5 p-6 rounded-2xl">
              <p className="text-3xl font-black text-white">100%</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Tests Passing</p>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-white/10">
          <h3 className="text-2xl font-bold mb-4">Want to see it in action?</h3>
          <a href="https://pennywise-fintech-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all">
            Explore Live App <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}