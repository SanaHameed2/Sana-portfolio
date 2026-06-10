import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Facebook, MessageCircle, ChevronDown } from 'lucide-react';

const slidingWords = ['React 18', 'Vite', 'Tailwind CSS', 'Node.js', 'TypeScript', 'JWT Auth'];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % slidingWords.length);
        setVisible(true);
      }, 200);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Glowing orbs — brand blue */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse" style={{ background: 'rgba(122,178,211,0.2)' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse" style={{ background: 'rgba(122,178,211,0.12)', animationDelay: '1s' }}></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-8" style={{ color: '#E8EDF5' }}>
            <span>Building </span>
            <span style={{ background: 'linear-gradient(135deg, #7AB2D3, #a8d4f0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              responsive &amp; modern
            </span>
            <br />
            <span>web experiences with </span>
            <span
              className="inline-block min-w-[140px] border-r-2 transition-opacity duration-200"
              style={{ color: '#7AB2D3', borderColor: '#7AB2D3', opacity: visible ? 1 : 0 }}
            >
              {slidingWords[wordIndex]}
            </span>
          </h1>

          <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
            Front-End Developer with 8 years of Graphic Design experience. I build clean, fast, and user-friendly websites.
          </p>

          {/* Role badge - Open for work - UPDATED */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-10 text-sm" style={{ background: 'rgba(122,178,211,0.08)', border: '1px solid rgba(122,178,211,0.2)', color: '#a8d4f0' }}>
            💼 Open for Front-End Developer roles (Onsite and Remote)
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center mb-12">
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sana.faiza2@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg text-slate-950 font-semibold transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #7AB2D3, #5a9bc0)', boxShadow: '0 8px 20px rgba(122,178,211,0.3)' }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              style={{ border: '1.5px solid rgba(122,178,211,0.5)', color: '#E8EDF5', background: 'transparent' }}
            >
              View Projects
            </motion.a>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['React 18', 'JavaScript ES6+', 'Vite', 'Tailwind CSS', 'Express.js', 'TypeScript', 'JWT Auth', 'React Router', 'Context API'].map((tech) => (
              <span key={tech} className="px-4 py-1.5 rounded-full text-sm border border-white/5 bg-white/[0.03] text-gray-300 hover:-translate-y-0.5 transition-transform duration-300">
                {tech}
              </span>
            ))}
          </div>

          {/* Social links */}
          <div className="flex gap-5 justify-center">
            {[
              { href: 'https://github.com/SanaHameed2', Icon: Github },
              { href: 'https://www.linkedin.com/in/sana-hameed-68136716a', Icon: Linkedin },
              { href: 'https://www.facebook.com/share/15pzPzA9dhn/', Icon: Facebook },
              { href: 'https://wa.me/923402869594', Icon: MessageCircle },
              { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sana.faiza2@gmail.com', Icon: Mail },
            ].map(({ href, Icon }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ border: '1px solid rgba(122,178,211,0.3)', background: 'rgba(15,23,42,0.5)', color: '#7AB2D3' }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDown className="w-8 h-8 animate-bounce" style={{ color: '#7AB2D3' }} />
        </motion.div>
      </div>
    </section>
  );
}