import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const projects = [
  {
    title: 'GetItMart · Ecommerce Store',
    year: '2025 • E-COMMERCE',
    description: 'Full-stack ecommerce platform with product catalog, shopping cart, authentication, wishlist, reviews, admin panel, and dark mode.',
    highlights: [
      '40+ products from Supabase database',
      'Search, filter by category, sort by price/rating',
      'Shopping cart with drawer & quantity update',
      'User authentication (Signup/Login/Logout)',
      'Wishlist & Product reviews with ratings',
      'Admin dashboard for product & order management',
    ],
    image: '/images/getitmart.png',
    tags: ['React 18', 'Vite', 'Tailwind CSS', 'Supabase', 'Context API', 'React Router'],
    github: 'https://github.com/SanaHameed2/Getit',
    live: 'https://getit-puce.vercel.app/',
    size: 'large',
  },
  {
    title: 'Pennywise · Fintech App',
    year: '2025 • FULL-STACK FINTECH',
    description: 'Teen-focused financial literacy platform with budgeting tools, virtual cards, investment education, real-time transactions, and complete Supabase backend.',
    highlights: [
      'Supabase authentication (Email/Password, Row Level Security)',
      'Real-time PostgreSQL database for transactions',
      'Virtual cards & transaction tracking dashboard',
      'Budgeting tools & financial education resources',
      'Investment insights & savings goal tracker',
      'Dark mode & fully responsive design',
      'Deployed on Vercel with CI/CD',
    ],
    image: '/images/pennywise.png',
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel', 'PostgreSQL'],
    github: 'https://github.com/SanaHameed2/pennywise-fintech-app',
    live: 'https://pennywise-fintech-app.vercel.app/',
    size: 'small',
  },
  {
    title: 'Student Management System',
    year: '2025 • FULL-STACK APP',
    description: 'Complete student management system with CRUD operations, dark mode, attendance, grade calculator, and reports.',
    highlights: [
      'Full CRUD operations',
      'Attendance tracking',
      'Grade calculator',
      'Dark mode support',
    ],
    image: '/images/Student Management System.png',
    tags: ['React.js', 'Tailwind CSS', 'Context API', 'LocalStorage', 'React Router'],
    github: 'https://github.com/SanaHameed2/student-management-system',
    live: 'https://student-management-system-ten-mu.vercel.app/',
    size: 'medium',
  },
  {
    title: 'Mathlings · Kids Learning',
    year: '2025 • EDUCATIONAL',
    description: 'Interactive learning platform for kids with math games, animated stories, and video content.',
    highlights: [
      'Math games for kids',
      'Animated stories',
      'Video content integration',
      'Responsive design',
    ],
    image: '/images/mathlings.png',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/SanaHameed2/mathlings',
    live: 'https://sana-hameed2.github.io/mathlings/',
    size: 'large',
  },
  {
    title: 'Nexcent · Business Solutions',
    year: '2025 • BUSINESS',
    description: 'Modern business solutions platform with community management, client portal, and analytics dashboard.',
    highlights: [
      'Client management portal',
      'Analytics dashboard',
      'Community features',
      'Responsive design',
    ],
    image: '/images/nexcent.png',
    tags: ['React', 'Tailwind CSS', 'Chart.js', 'REST API'],
    github: 'https://github.com/SanaHameed2/nexcent',
    live: '#',
    size: 'medium',
  },
];

export function Projects() {
  const largeProjects = projects.filter(p => p.size === 'large');
  const smallProjects = projects.filter(p => p.size === 'small');
  const mediumProjects = projects.filter(p => p.size === 'medium');

  return (
    <section id="projects" className="relative py-28 px-4" style={{ background: 'rgba(122,178,211,0.02)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: '#7AB2D3' }}>PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#E8EDF5' }}>
            <span style={{ background: 'linear-gradient(135deg, #7AB2D3, #a8d4f0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              My Projects
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #7AB2D3, #a8d4f0)' }}></div>
          <p className="text-gray-400 mt-4">Modern web applications I've built — all code is on GitHub</p>
        </motion.div>

        {/* Row 1: Large (GetItMart) + Small (Pennywise) + Medium (Student) */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          {/* GetItMart - Large */}
          {largeProjects.filter(p => p.title.includes('GetItMart')).map((project, index) => (
            <ProjectCard key={index} project={project} className="md:col-span-2" />
          ))}
          
          {/* Pennywise - Small */}
          {smallProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          
          {/* Student Management - Medium */}
          {mediumProjects.filter(p => p.title.includes('Student')).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Row 2: Medium (Nexcent) + Large (Mathlings) */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* Nexcent - Medium */}
          {mediumProjects.filter(p => p.title.includes('Nexcent')).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          
          {/* Mathlings - Large */}
          {largeProjects.filter(p => p.title.includes('Mathlings')).map((project, index) => (
            <ProjectCard key={index} project={project} className="md:col-span-3" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, className = '' }: { project: any; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 ${className}`}
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(122,178,211,0.1)' }}
    >
      <div className="relative h-52 overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
      </div>

      <div className="p-5">
        <span className="text-xs tracking-wider" style={{ color: '#7AB2D3' }}>{project.year}</span>
        <h3 className="text-lg font-semibold mt-2 mb-2" style={{ color: '#E8EDF5' }}>{project.title}</h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="px-2 py-0.5 rounded-full text-xs" style={{ background: 'rgba(122,178,211,0.1)', color: '#7AB2D3' }}>
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm transition-all duration-300 hover:gap-2"
            style={{ color: '#7AB2D3' }}
          >
            <Github className="w-4 h-4" /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm transition-all duration-300 hover:gap-2"
            style={{ color: '#7AB2D3' }}
          >
            <ExternalLink className="w-4 h-4" /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}