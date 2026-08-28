import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github, Eye, Check } from 'lucide-react';
import { useState, useEffect, useId } from 'react';
import { useAnalyticsContext } from '../../context/AnalyticsContext';

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-[10px] text-primary">
    {children}
  </span>
);

// 🟢 EVA TECH - Featured Project (UI/UX Design & Development)
const featuredProject = {
  title: 'EVA TECH',
  category: 'UI/UX DESIGN & DEVELOPMENT',
  description:
    'Designed and developed a complete web presence for a local tech repair shop. This includes UI/UX design, brand identity (logo & color palette), and a fully responsive frontend built with modern tools.',
  image: '/images/eva-tech.png',
  technologies: ['React 18', 'Vite', 'Tailwind CSS', 'TypeScript', 'Figma'],
  live: 'https://www.evatechuk.com/',
  github: 'https://github.com/SanaHameed2/evatech',
  features: [
    'UI/UX design with a clean, modern, and minimal aesthetic',
    'Brand identity (Logo design, color palette, typography system)',
    'Fully responsive design (mobile-first approach)',
    'Custom page layouts for services, products, and contact',
    'Designed and developed from scratch by Sana Hameed',
  ],
  stats: { users: '500+', transactions: '1K+', uptime: '99.9%' },
};

const projects = [
  // ✅ EVA TECH - 1st
  {
    id: 'evatech',
    title: 'EVA TECH',
    year: '2026 · UI/UX Design & Development',
    category: 'ecommerce',
    description:
      'Complete UI/UX design and frontend development for a tech repair shop. Designed brand identity, responsive layouts, and custom components using React and Tailwind CSS.',
    image: '/images/eva-tech.png',
    tags: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'Figma'],
    github: 'https://github.com/SanaHameed2/evatech',
    live: 'https://www.evatechuk.com/',
  },
  // ✅ PENNYWISE - 2nd
  {
    id: 'pennywise',
    title: 'Pennywise',
    year: '2025 · Full-Stack Fintech',
    category: 'fintech',
    description:
      'Premium banking platform with glassmorphic design, virtual cards, real-time transactions, and secure authentication with Supabase.',
    image: '/images/pennywise.png',
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/SanaHameed2/pennywise-fintech-app',
    live: 'https://pennywise-fintech-app.vercel.app/',
  },
  // ✅ MEGAMART - 3rd (NEW!)
  {
    id: 'megamart',
    title: 'MegaMart',
    year: '2026 · Full-Stack E-Commerce',
    category: 'ecommerce',
    description:
      'Complete e-commerce platform with product catalog, search, category-specific brand filters, shopping cart, wishlist, checkout, admin dashboard, coupon system, and reviews.',
    image: '/images/megamart.png',
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vite'],
    github: 'https://github.com/SanaHameed2/MegaMart',
    live: 'https://megamart.vercel.app/',
  },
  // ✅ GETITMART - 4th
  {
    id: 'getitmart',
    title: 'GetItMart',
    year: '2025 · E-commerce',
    category: 'ecommerce',
    description:
      'Full-stack ecommerce platform with product catalog, shopping cart, authentication, wishlist, reviews, admin panel, and dark mode.',
    image: '/images/getitmart.png',
    tags: ['React 18', 'Vite', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/SanaHameed2/Getit',
    live: 'https://getit-puce.vercel.app/',
  },
  // ✅ STUDENT MANAGEMENT - 5th
  {
    id: 'student-management',
    title: 'Student Management System',
    year: '2025 · Full-stack app',
    category: 'educational',
    description:
      'Complete student management system with CRUD operations, dark mode, attendance, grade calculator, and reports.',
    image: '/images/student-management.png',
    tags: ['React.js', 'Tailwind CSS', 'Context API'],
    github: 'https://github.com/SanaHameed2/student-management-system',
    live: 'https://student-management-system-ten-mu.vercel.app/',
  },
  // ✅ MATHLINGS - 6th
  {
    id: 'mathlings',
    title: 'Mathlings',
    year: '2025 · Educational',
    category: 'educational',
    description:
      'Interactive learning platform for kids with math games, animated stories, and video content.',
    image: '/images/mathlings.png',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/SanaHameed2/mathlings',
    live: 'https://sanahameed2.github.io/mathlings/',
  },
  // ❌ NEXCENT - REMOVED!
];

const categories = ['all', 'fintech', 'ecommerce', 'educational'];

function AnimatedCounter({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? end : 0);

  useEffect(() => {
    if (reduceMotion) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, reduceMotion]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function ProjectImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative h-full w-full overflow-hidden">
      {!loaded && <div className="absolute inset-0 animate-pulse bg-surface" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-DEFAULT`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState('all');
  const reduceMotion = useReducedMotion();
  const countId = useId();
  const { trackEvent } = useAnalyticsContext();
  
  const filteredProjects = projects.filter((p) => filter === 'all' || p.category === filter);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: reduceMotion ? 0 : 0.4, delay },
  });

  // Track project interactions
  const handleProjectClick = (projectName: string, projectId: string, type: 'live' | 'github' | 'card') => {
    trackEvent('project_click', {
      project_name: projectName,
      project_id: projectId,
      click_type: type,
      category: projects.find(p => p.id === projectId)?.category || 'unknown'
    });
  };

  const handleFilterChange = (category: string) => {
    trackEvent('project_filter', {
      filter_category: category,
      previous_filter: filter
    });
    setFilter(category);
  };

  // Track featured project view
  useEffect(() => {
    trackEvent('project_view', {
      project_name: featuredProject.title,
      project_type: 'featured',
      category: 'ecommerce'
    });
  }, []);

  return (
    <div className="mx-auto max-w-container px-8 py-section-mobile md:py-section-tablet lg:py-section-desktop">
      <p className="text-small font-medium uppercase tracking-[0.3em] text-primary">Featured Projects</p>
      <h2 className="mt-4 text-3xl font-bold text-neutral-50 sm:text-section-heading">Selected work</h2>

      {/* Featured project - EVA TECH */}
      <div className="mt-16 grid gap-8 md:grid-cols-5">
        <div className="flex flex-col md:col-span-3">
          <span className="font-mono text-small text-primary">{featuredProject.category}</span>
          <h3 className="mt-2 text-3xl font-bold text-neutral-50 sm:text-4xl">{featuredProject.title}</h3>
          <p className="mt-4 max-w-prose text-body text-neutral-200">{featuredProject.description}</p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {featuredProject.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-small text-neutral-200">
                <Check size={16} className="shrink-0 text-success" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <dl className="mt-6 flex gap-6 rounded-2xl border border-border bg-surface/60 p-4">
            <div>
              <dd className="text-2xl font-bold text-primary">{featuredProject.stats.users}</dd>
              <dt className="text-xs text-neutral-400">Active Users</dt>
            </div>
            <div className="border-l border-border pl-6">
              <dd className="text-2xl font-bold text-primary">{featuredProject.stats.transactions}</dd>
              <dt className="text-xs text-neutral-400">Transactions</dt>
            </div>
            <div className="border-l border-border pl-6">
              <dd className="text-2xl font-bold text-primary">{featuredProject.stats.uptime}</dd>
              <dt className="text-xs text-neutral-400">Uptime</dt>
            </div>
          </dl>

          <div className="mb-8 mt-6 flex flex-wrap gap-4">
            <a
              href={featuredProject.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleProjectClick(featuredProject.title, 'evatech-featured', 'live')}
              className="inline-flex h-button items-center gap-2 rounded-button bg-primary px-6 font-medium text-white transition-colors duration-DEFAULT hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Eye size={18} aria-hidden="true" /> Live Demo
            </a>
            <a
              href={featuredProject.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleProjectClick(featuredProject.title, 'evatech-featured', 'github')}
              className="inline-flex h-button items-center gap-2 rounded-button border border-border px-6 font-medium text-neutral-200 transition-colors duration-DEFAULT hover:border-border-hover hover:text-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Github size={18} aria-hidden="true" /> GitHub
            </a>
          </div>

          <div className="mt-auto flex flex-wrap gap-2">
            {featuredProject.technologies.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center md:col-span-2">
          <div className="h-[420px] w-full overflow-hidden rounded-card border border-border bg-surface/60">
            <ProjectImage src={featuredProject.image} alt={`${featuredProject.title} preview`} className="h-full w-full object-contain" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        {...fadeUp()}
        className="mb-16 mt-16 grid grid-cols-1 gap-8 rounded-card border border-border bg-surface/60 p-8 md:grid-cols-3"
      >
        {[
          { end: 40, label: 'Clients Served' },
          { end: 8, label: 'Years in Design' },
          { end: 2, label: 'Years in Development' },
        ].map((s, i) => (
          <div key={s.label} className={`text-center ${i > 0 ? 'md:border-l md:border-border' : ''}`}>
            <div className="text-4xl font-bold text-primary">
              <AnimatedCounter end={s.end} suffix="+" duration={2} />
            </div>
            <p className="mt-2 text-small text-neutral-400">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by category">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            aria-pressed={filter === cat}
            className={`rounded-full px-4 py-2 text-small capitalize transition-colors duration-DEFAULT focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              filter === cat ? 'bg-primary text-white' : 'bg-white/5 text-neutral-200 hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        key={filter}
        initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.3 }}
        className="grid gap-8 md:grid-cols-2"
      >
        {filteredProjects.map((p, i) => (
          <article
            key={p.title}
            className="group relative rounded-card border border-border bg-surface/40 p-6 transition-colors duration-DEFAULT hover:border-border-hover hover:bg-surface/60"
          >
            {i === 0 && filter === 'all' && (
              <span className="absolute right-4 top-4 z-10 rounded-full bg-primary px-2 py-1 text-xs text-white">
                Featured
              </span>
            )}

            <div className="mb-4 aspect-video overflow-hidden rounded-2xl bg-surface">
              <ProjectImage src={p.image} alt={`${p.title} preview`} className="h-full w-full object-cover" />
            </div>

            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-card-title text-neutral-50">{p.title}</h3>
                <span className="text-xs uppercase tracking-widest text-neutral-400">{p.year}</span>
              </div>
              <div className="flex shrink-0 gap-2">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${p.title} live demo`}
                  onClick={() => handleProjectClick(p.title, p.id, 'live')}
                  className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-medium text-white transition-colors duration-DEFAULT hover:bg-primary-hover"
                >
                  <Eye size={14} aria-hidden="true" /> Demo
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${p.title} source on GitHub`}
                  onClick={() => handleProjectClick(p.title, p.id, 'github')}
                  className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-2 text-xs text-neutral-200 transition-colors duration-DEFAULT hover:border-border-hover hover:text-neutral-50"
                >
                  <Github size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
            <p className="mb-4 text-small text-neutral-200">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </article>
        ))}

        {filteredProjects.length === 0 && (
          <p className="col-span-2 py-12 text-center text-neutral-400">
            No projects found in this category.
          </p>
        )}
      </motion.div>

      <p className="mt-8 text-center text-small text-neutral-400" aria-live="polite" id={countId}>
        Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
      </p>

      <div className="mt-8 text-center">
        <a
          href="https://github.com/SanaHameed2"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackEvent('social_click', {
              platform: 'github',
              location: 'projects_section',
              action: 'view_all_projects'
            });
          }}
          className="inline-flex h-button items-center gap-2 rounded-button bg-primary px-8 font-medium text-white transition-colors duration-DEFAULT hover:bg-primary-hover"
        >
          View all projects on GitHub <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}