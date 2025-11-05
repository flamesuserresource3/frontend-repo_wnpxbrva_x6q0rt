import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Bot, Github, Linkedin } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const roles = [
  'AI Developer',
  'Full Stack Engineer',
  'Researcher',
];

function useTyping(texts, speed = 80, pause = 1200) {
  const [i, setI] = useState(0);
  const [sub, setSub] = useState('');
  const sequence = useMemo(() => texts.map((t) => t), [texts]);

  useEffect(() => {
    let mounted = true;
    let direction = 1; // 1 typing, -1 deleting
    let idx = 0;

    const tick = () => {
      if (!mounted) return;
      const target = sequence[i % sequence.length];
      if (direction === 1) {
        setSub(target.slice(0, idx + 1));
        idx++;
        if (idx >= target.length) {
          direction = -1;
          setTimeout(tick, pause);
          return;
        }
      } else {
        setSub(target.slice(0, idx - 1));
        idx--;
        if (idx <= 0) {
          direction = 1;
          setI((v) => (v + 1) % sequence.length);
        }
      }
      setTimeout(tick, direction === 1 ? speed : speed / 2);
    };

    const t = setTimeout(tick, 300);
    return () => {
      mounted = false;
      clearTimeout(t);
    };
  }, [sequence, i, speed, pause]);

  return sub;
}

export default function Hero() {
  const typed = useTyping(roles);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/80" />

      <div className="relative z-10 container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-semibold tracking-tight text-white"
          >
            Hey, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Jayesh RL</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
            className="mt-3 text-lg sm:text-2xl text-slate-300 font-mono"
          >
            {typed ? `${typed}` : ' '}<span className="animate-pulse">▍</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            className="mt-6 text-slate-300 max-w-xl"
          >
            Building intelligent systems, exploring neural architectures, and crafting scalable backends. Calm, precise, and futuristic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.45 } }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/10">
              View Projects <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="https://github.com/Aspect022" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white">
              <Github size={16} /> GitHub
            </a>
            <a href="https://linkedin.com/in/jayesh-rl-748059291" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-cyan-200 border border-white/10">
              <Bot size={16} /> Chat With Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
