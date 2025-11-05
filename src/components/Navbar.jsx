import { useEffect, useState } from 'react';
import { FileText, Github, Linkedin } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return { id: s.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: s.id, top: Math.abs(rect.top) };
      });
      const current = offsets.sort((a, b) => a.top - b.top)[0]?.id || 'home';
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed top-3 left-1/2 -translate-x-1/2 z-40 transition-all ${scrolled ? 'backdrop-blur bg-slate-900/60 shadow-lg shadow-cyan-500/10' : 'bg-transparent' } rounded-full px-4 py-2 border border-white/10`}
      aria-label="Primary">
      <nav className="flex items-center gap-3 text-sm">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`px-3 py-1 rounded-full transition-colors ${active === s.id ? 'text-cyan-300 bg-white/5' : 'text-slate-300 hover:text-white'}`}
          >
            {s.label}
          </a>
        ))}
        <span className="mx-1 h-5 w-px bg-white/10" />
        <a href="https://github.com/Aspect022" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/5 text-slate-300 hover:text-white" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com/in/jayesh-rl-748059291" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/5 text-slate-300 hover:text-white" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href="#contact" className="ml-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-400 hover:to-indigo-400">
          <FileText size={16} />
          <span className="hidden sm:block">Resume</span>
        </a>
      </nav>
    </div>
  );
}
