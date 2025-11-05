import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainSections from './components/MainSections';
import Chatbot from './components/Chatbot';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      root.style.setProperty('--px', `${x}`);
      root.style.setProperty('--py', `${y}`);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30">
      {/* Subtle dynamic background */}
      <div className="pointer-events-none fixed inset-0 [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent)]">
        <div className="absolute inset-0 opacity-60" style={{
          background: 'radial-gradient(1200px_800px_at_calc(50%+var(--px,0)*20%)_calc(30%+var(--py,0)*10%), rgba(34,211,238,0.08), transparent), radial-gradient(800px_600px_at_calc(20%+var(--px,0)*-10%)_70%, rgba(99,102,241,0.09), transparent), radial-gradient(1000px_700px_at_80%_40%, rgba(168,85,247,0.07), transparent)'
        }} />
      </div>

      <Navbar />
      <Hero />
      <MainSections />
      <Chatbot />

      <footer className="py-8 text-center text-slate-400">
        © {new Date().getFullYear()} Jayesh RL · Built with care.
      </footer>
    </div>
  );
}
