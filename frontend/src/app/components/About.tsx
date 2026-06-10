import { motion } from 'motion/react';

const skills = [
  { name: 'React.js & Ecosystem', pct: 90 },
  { name: 'JavaScript (ES6+)', pct: 88 },
  { name: 'Tailwind CSS', pct: 92 },
  { name: 'Node.js / Express', pct: 80 },
  { name: 'TypeScript', pct: 75 },
  { name: 'Vite / Build Tools', pct: 85 },
];

const certs = ['React 18', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'TypeScript', 'JWT Auth', 'Context API'];

export function About() {
  return (
    <section id="about" className="relative py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: '#7AB2D3' }}>ABOUT ME</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#E8EDF5' }}>
            Front-End Developer{' '}
            <span style={{ background: 'linear-gradient(135deg, #7AB2D3, #a8d4f0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              with Design Background
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #7AB2D3, #a8d4f0)' }}></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — About text + badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl p-8 mb-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(122,178,211,0.15)', backdropFilter: 'blur(10px)' }}>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a Front-End Developer with 8+ years of Graphic Design experience. I create clean, responsive, and user-friendly websites using React, JavaScript, and Tailwind CSS. Recently built full-stack projects with Node.js, Express, and JWT authentication.
              </p>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-yellow-400 tracking-wide">★★★★★</span>
                <span className="text-gray-400 text-sm">4.9 · 40+ reviews</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {certs.map((cert) => (
                  <span
                    key={cert}
                    className="px-4 py-1.5 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: 'rgba(122,178,211,0.1)', border: '1px solid rgba(122,178,211,0.2)', color: '#a8d4f0' }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: '8+', label: 'Years Experience' },
                { number: '40+', label: 'Happy Clients' },
                { number: '20+', label: 'Projects Built' },
              ].map((stat) => (
                <div key={stat.label} className="text-center rounded-xl p-4" style={{ background: 'rgba(122,178,211,0.06)', border: '1px solid rgba(122,178,211,0.15)' }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: '#7AB2D3' }}>{stat.number}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(122,178,211,0.15)', backdropFilter: 'blur(10px)' }}
          >
            <h3 className="text-xl font-semibold mb-6" style={{ color: '#7AB2D3' }}>My Skills</h3>
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-300">{skill.name}</span>
                    <span className="text-sm" style={{ color: '#7AB2D3' }}>{skill.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.08 }}
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #7AB2D3, #a8d4f0)' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
