'use client';

import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MessageCircle, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const contactItems = [
  { Icon: Mail, label: 'Email', value: 'sana.faiza2@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sana.faiza2@gmail.com' },
  { Icon: MessageCircle, label: 'WhatsApp', value: '+92 340 2869594', href: 'https://wa.me/923402869594' },
  { Icon: Github, label: 'GitHub', value: '/SanaHameed2', href: 'https://github.com/SanaHameed2' },
  { Icon: Linkedin, label: 'LinkedIn', value: 'in/sana-hameed', href: 'https://www.linkedin.com/in/sana-hameed-68136716a' },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init('0rZsE0jWC7x6Qlz5T');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const result = await emailjs.send(
        'service_5c7weuu',
        'template_mn0p5iu',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        '0rZsE0jWC7x6Qlz5T'
      );

      if (result.status === 200 || result.text === 'OK') {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Failed to send. Please try again.');
      }
    } catch (error) {
      console.error('Email error:', error);
      setStatus('❌ Failed to send message.');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: '#7AB2D3' }}>GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#E8EDF5' }}>
            <span style={{ background: 'linear-gradient(135deg, #7AB2D3, #a8d4f0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Let's Work Together
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #7AB2D3, #a8d4f0)' }}></div>
          <p className="text-gray-400 mt-4">Looking for a Front-End Developer? Let's connect!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 space-y-6"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(122,178,211,0.15)', backdropFilter: 'blur(10px)' }}
          >
            {contactItems.map(({ Icon, label, value, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: 'rgba(122,178,211,0.1)', border: '1px solid rgba(122,178,211,0.2)' }}>
                  <Icon className="w-5 h-5" style={{ color: '#7AB2D3' }} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                  <p className="text-gray-300 group-hover:text-sky-300 transition-colors duration-300 text-sm">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(122,178,211,0.15)', backdropFilter: 'blur(10px)' }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Your Name' },
                { id: 'email', label: 'Your Email', type: 'email', placeholder: 'Your Email' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm text-gray-400 mb-1">{label}</label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    value={(formData as any)[id]}
                    onChange={handleChange}
                    required
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-gray-600 outline-none transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#7AB2D3')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-gray-600 outline-none transition-all duration-300 resize-none"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#7AB2D3')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full py-3 rounded-xl text-slate-950 font-semibold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60"
                style={{ background: 'linear-gradient(135deg, #7AB2D3, #5a9bc0)' }}
              >
                {loading ? 'Sending...' : 'Send Message'} 
                <Send className="w-4 h-4" />
              </motion.button>

              {status && <p className="text-sm text-center" style={{ color: '#7AB2D3' }}>{status}</p>}
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <p className="text-gray-500 text-sm">© 2025 Sana Hameed | Front-End Developer</p>
          <div className="flex gap-5">
            {[
              { href: 'https://github.com/SanaHameed2', Icon: Github },
              { href: 'https://www.linkedin.com/in/sana-hameed-68136716a', Icon: Linkedin },
              { href: 'https://wa.me/923402869594', Icon: MessageCircle },
              { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sana.faiza2@gmail.com', Icon: Mail },
            ].map(({ href, Icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:-translate-y-1" style={{ color: '#A0A8B8' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#7AB2D3')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#A0A8B8')}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}