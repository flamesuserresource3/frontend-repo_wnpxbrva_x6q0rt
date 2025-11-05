import { motion } from 'framer-motion';
import { ExternalLink, Github, Mail } from 'lucide-react';

const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'SQL', 'C'],
  },
  {
    title: 'Frameworks & Tools',
    items: ['React', 'Next.js', 'FastAPI', 'Spring Boot', 'TensorFlow', 'Firestore', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Concepts',
    items: ['Deep Learning', 'LLMs', 'Attention', 'Quantization', 'SNNs', 'Signal Processing (EEG/ECG)'],
  },
  {
    title: 'Environments',
    items: ['IntelliJ', 'VSCode', 'PyCharm', 'Jupyter', 'Git'],
  },
];

const projects = [
  { title: 'ThreatPeek', desc: 'AI Threat Scanner', stack: ['TypeScript', 'Next.js', 'Express'], links: { demo: '#', github: '#' } },
  { title: 'HealthPredict', desc: 'Multi-Disease Prediction', stack: ['FastAPI', 'React', 'ML'], links: { demo: '#', github: '#' } },
  { title: 'Humans Care Foundation Website', desc: 'SEO-optimized Next.js + Firebase', stack: ['Next.js', 'Firebase'], links: { demo: '#', github: '#' } },
  { title: 'Java Spring Job Portal', desc: 'Full-stack job portal', stack: ['Java', 'Spring'], links: { demo: '#', github: '#' } },
  { title: 'Lecture Notes Generator', desc: 'NLP-powered generator', stack: ['Python', 'NLP'], links: { demo: '#', github: '#' } },
  { title: 'Static Orrery Simulation', desc: 'Three.js planetary model', stack: ['Three.js'], links: { demo: '#', github: '#' } },
  { title: 'AI Loan Approval Predictor', desc: 'ML classifier', stack: ['Python', 'ML'], links: { demo: '#', github: '#' } },
  { title: 'Python Text RPG Adventure', desc: 'CLI RPG', stack: ['Python'], links: { demo: '#', github: '#' } },
  { title: 'Platformer Game (Java)', desc: '2D platformer', stack: ['Java'], links: { demo: '#', github: '#' } },
  { title: 'House Price Prediction', desc: 'EDA + ML', stack: ['Python', 'Pandas'], links: { demo: '#', github: '#' } },
];

const experiences = [
  {
    org: 'WhyDigit Pvt. Ltd',
    role: 'Backend Developer Intern',
    period: 'Internship',
    details: ['Built scalable APIs', 'Optimized DB queries', 'Collaborated on microservices'],
  },
  {
    org: 'Humans Care Foundation',
    role: 'Python & ML Intern',
    period: 'Internship',
    details: ['Prototyped ML pipelines', 'Data cleaning & feature engineering'],
  },
  {
    org: 'Humans Care Foundation',
    role: 'Lead Software Developer',
    period: 'Leadership',
    details: ['Led full-stack builds', 'SEO & analytics integration'],
  },
];

const research = [
  { title: 'Spiking-Transformer Hybrid for ECG Spike Detection', goal: 'Robust spike detection with neuromorphic efficiency.' },
  { title: 'Lightweight Quantized EEGNet', goal: 'Edge-ready EEG analysis with low-power inference.' },
  { title: 'Personalized Cardio Equation for ECG Modeling', goal: 'Adaptive cardiac modeling; patent in progress.' },
];

function SectionTitle({ id, title, subtitle }) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white">{title}</h2>
      {subtitle && <p className="text-slate-300 mt-1">{subtitle}</p>}
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs mr-2 mb-2 inline-flex items-center">
      {children}
    </span>
  );
}

export default function MainSections() {
  return (
    <main className="relative">
      {/* About */}
      <section className="container mx-auto px-6 max-w-6xl py-20">
        <SectionTitle id="about" title="About" subtitle="AI-focused developer — B.Tech CSE (AI & ML), Dayananda Sagar University, GPA 9.45/10" />
        <div className="mt-6 grid md:grid-cols-3 gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2">
            <p className="text-slate-300 leading-relaxed">
              Passionate about building intelligent systems, research in neural architectures, and scalable backend systems. Focus areas include
              <span className="text-cyan-300"> Deep Learning</span>,
              <span className="text-indigo-300"> LLMs</span>,
              <span className="text-purple-300"> Spiking Neural Networks</span>, and
              <span className="text-blue-300"> Signal Processing</span>.
            </p>
            <div className="mt-6">
              {skillGroups.map((group) => (
                <div key={group.title} className="mb-4">
                  <h3 className="text-slate-200 text-sm mb-2">{group.title}</h3>
                  <div>
                    {group.items.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.2),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.15),transparent_40%)] animate-pulse" />
            <img src="https://avatars.githubusercontent.com/u/141786773?v=4" alt="Jayesh RL" className="relative z-10 w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition" />
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="container mx-auto px-6 max-w-6xl py-20">
        <SectionTitle id="projects" title="Projects" subtitle="Featured work showcasing breadth across AI/ML and full‑stack." />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.05 }}
              className="group relative rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="h-28 bg-gradient-to-br from-slate-900 to-slate-800" />
              <div className="p-4">
                <h3 className="text-white font-medium">{p.title}</h3>
                <p className="text-slate-300 text-sm mt-1">{p.desc}</p>
                <div className="mt-3">
                  {p.stack.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <a href={p.links.demo} className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 text-sm">
                    <ExternalLink size={14} /> Demo
                  </a>
                  <a href={p.links.github} className="inline-flex items-center gap-1 text-slate-300 hover:text-white text-sm">
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="container mx-auto px-6 max-w-6xl py-20">
        <SectionTitle id="experience" title="Experience" subtitle="Journey across internships and leadership." />
        <div className="mt-8 relative">
          <div className="absolute left-4 sm:left-20 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 to-purple-500/40" />
          <div className="space-y-8">
            {experiences.map((e, i) => (
              <motion.div key={e.org} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-12 sm:pl-28">
                <div className="absolute left-0 sm:left-16 top-2 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_24px] shadow-cyan-400/50" />
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-white font-medium">{e.role} · {e.org}</h3>
                    <span className="text-xs text-slate-300">{e.period}</span>
                  </div>
                  <ul className="mt-2 list-disc list-inside text-slate-300 text-sm">
                    {e.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="container mx-auto px-6 max-w-6xl py-20">
        <SectionTitle id="research" title="Research" subtitle="Focused explorations at the frontier." />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {research.map((r) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/40">
              <h3 className="text-white font-medium">{r.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{r.goal}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-3 text-center">
          <div className="p-4">
            <div className="text-3xl font-semibold text-white">9.45</div>
            <div className="text-slate-300 text-sm">GPA</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-semibold text-white">Top 15</div>
            <div className="text-slate-300 text-sm">Hackathon Placement</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-semibold text-white">DSUX</div>
            <div className="text-slate-300 text-sm">Tempête Leadership</div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="container mx-auto px-6 max-w-6xl py-20">
        <SectionTitle id="contact" title="Contact" subtitle="Let’s build something intelligent together." />
        <div className="mt-6 grid md:grid-cols-3 gap-8">
          <form className="md:col-span-2 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Your name" required />
              <input type="email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Email" required />
            </div>
            <input className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Subject" />
            <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Message" />
            <button type="submit" className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white">Send</button>
          </form>
          <div className="space-y-3">
            <a href="mailto:jayeshrl2005@gmail.com" className="flex items-center gap-3 text-slate-200 hover:text-white">
              <Mail size={18} /> jayeshrl2005@gmail.com
            </a>
            <a href="https://github.com/Aspect022" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-200 hover:text-white">
              <Github size={18} /> github.com/Aspect022
            </a>
            <a href="https://linkedin.com/in/jayesh-rl-748059291" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-200 hover:text-white">
              <ExternalLink size={18} /> LinkedIn Profile
            </a>
            <p className="text-slate-400 text-sm">Light background pulsation reacts subtly to cursor movement throughout the page.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
