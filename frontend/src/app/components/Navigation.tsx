import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Work', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl shadow-lg' : ''
      }`}
      style={scrolled ? { background: 'rgba(10,15,26,0.95)', borderBottom: '1px solid rgba(122,178,211,0.1)' } : {}}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="text-xl font-bold" style={{ background: 'linear-gradient(135deg, #E8EDF5, #7AB2D3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Sana<span style={{ background: 'linear-gradient(135deg, #7AB2D3, #5a9bc0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Hameed</span>
          </button>

          {/* Desktop nav - Email badge removed */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="relative group text-sm font-medium transition-colors duration-300"
                style={{ color: '#A0A8B8' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#7AB2D3')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#A0A8B8')}
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ background: '#7AB2D3' }}></span>
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 flex flex-col gap-4 border-t" style={{ borderColor: 'rgba(122,178,211,0.1)' }}>
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left py-2 text-sm font-medium"
                style={{ color: '#A0A8B8' }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}