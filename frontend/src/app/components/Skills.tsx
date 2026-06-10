import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      category: '💻 Frontend Development',
      skills: ['HTML5 & Semantic Markup', 'CSS3 & Modern Layouts', 'JavaScript (ES6+)', 'React.js', 'Responsive Design', 'Python & MySQL'],
    },
    {
      category: '🎨 Design & UX',
      skills: ['UI/UX Principles', 'Graphic Design', 'Typography & Color Theory', 'Branding'],
    },
    {
      category: '🛠️ Tools & WordPress',
      skills: ['Git & Version Control', 'RESTful APIs', 'Figma', 'Chrome DevTools', 'Netlify', 'WordPress & WooCommerce'],
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#E8EDF5' }}>
            <span style={{ background: 'linear-gradient(135deg, #7AB2D3, #a8d4f0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #7AB2D3, #a8d4f0)' }}></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" style={{ background: 'rgba(122,178,211,0.08)' }}></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300" style={{ border: '1px solid rgba(122,178,211,0.2)' }}>
                <h3 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#E8EDF5' }}>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 rounded-lg text-sm transition-all duration-300 cursor-default"
                      style={{ background: 'rgba(122,178,211,0.1)', border: '1px solid rgba(122,178,211,0.25)', color: '#a8d4f0' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
