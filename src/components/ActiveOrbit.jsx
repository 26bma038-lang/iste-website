import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Code2, 
  Sparkles, 
  Layout, 
  ShieldAlert, 
  Cpu, 
  ChevronLeft, 
  ChevronRight, 
  Orbit, 
  ArrowUpRight,
  Terminal
} from 'lucide-react';
import FloatingElement from './FloatingElement';
import MagneticButton from './MagneticButton';
import { sound } from '../utils/audio';

const DOMAINS = [
  {
    id: 'web-infra',
    title: 'Web Infrastructure',
    tagline: 'Distributed Systems & Cloud Scale',
    description: 'Architecting resilient distributed microservices, edge pipelines, serverless runtimes, and high-performance full-stack web applications.',
    icon: Server,
    color: 'cyan',
    accentBorder: 'hover:border-cyan-400 group-hover:shadow-[0_0_35px_rgba(0,240,255,0.4)]',
    badgeClass: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/30',
    tags: ['Next.js 15', 'Go & Rust', 'Docker & K8s', 'Distributed DBs', 'GraphQL'],
    metrics: '99.99% UPTIME SPEC',
  },
  {
    id: 'algo-cp',
    title: 'Competitive Programming',
    tagline: 'Algorithmic Mastery & Speed',
    description: 'Mastering asymptotic efficiency, advanced dynamic programming, tree decomposition, and high-stakes algorithmic showdowns for ICPC and beyond.',
    icon: Code2,
    color: 'purple',
    accentBorder: 'hover:border-purple-400 group-hover:shadow-[0_0_35px_rgba(138,43,226,0.4)]',
    badgeClass: 'bg-purple-500/10 text-purple-300 border-purple-400/30',
    tags: ['C++20 STL', 'Graph Theory', 'DP & Trees', 'Codeforces Battles', 'ICPC Regional'],
    metrics: 'O(1) COMPLEXITY GOAL',
  },
  {
    id: 'ai-rag',
    title: 'AI & RAG Architecture',
    tagline: 'Autonomous Agents & LLMs',
    description: 'Deploying Retrieval-Augmented Generation pipelines, fine-tuned transformer architectures, vector embeddings, and autonomous agent orchestration.',
    icon: Sparkles,
    color: 'cyan',
    accentBorder: 'hover:border-cyan-400 group-hover:shadow-[0_0_35px_rgba(0,240,255,0.4)]',
    badgeClass: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/30',
    tags: ['PyTorch', 'LangChain', 'Vector Search', 'Agentic Workflows', 'CUDA'],
    metrics: 'SUB-SECOND INFERENCE',
  },
  {
    id: 'spatial-design',
    title: 'UI/UX & Spatial Design',
    tagline: 'Zero-Gravity Tactical Visor',
    description: 'Forging immersive cyber-nexus aesthetics, 60fps micro-animations, glassmorphism design systems, and seamless spatial human-computer interfaces.',
    icon: Layout,
    color: 'purple',
    accentBorder: 'hover:border-purple-400 group-hover:shadow-[0_0_35px_rgba(138,43,226,0.4)]',
    badgeClass: 'bg-purple-500/10 text-purple-300 border-purple-400/30',
    tags: ['Framer Motion', 'Figma Systems', 'Tactical Glass', 'Accessibility', 'Spatial UI'],
    metrics: '60 FPS BUTTER-SMOOTH',
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security & Systems',
    tagline: 'Binary Analysis & Defense',
    description: 'Reverse engineering, memory vulnerability exploration, cryptographic protocols, kernel interception, and national Capture The Flag warfare.',
    icon: ShieldAlert,
    color: 'crimson',
    accentBorder: 'hover:border-rose-500 group-hover:shadow-[0_0_35px_rgba(255,70,85,0.45)]',
    badgeClass: 'bg-rose-500/10 text-rose-300 border-rose-400/30',
    tags: ['Kernel Security', 'Reverse Eng.', 'CTF Defense', 'Zero-Day Audits', 'Cryptography'],
    metrics: 'ZERO EXPLOIT TOLERANCE',
  },
  {
    id: 'hardware-iot',
    title: 'Robotics & Hardware IoT',
    tagline: 'Embedded Telemetry & ROS',
    description: 'Fusing physical hardware with computational intelligence. Autonomous quadcopters, microcontroller firmware, real-time sensor telemetry, and ROS 2 robotics nodes.',
    icon: Cpu,
    color: 'cyan',
    accentBorder: 'hover:border-cyan-400 group-hover:shadow-[0_0_35px_rgba(0,240,255,0.4)]',
    badgeClass: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/30',
    tags: ['ROS 2', 'Embedded C/C++', 'ESP32 / ARM', 'Drone Avionics', 'Sensor Telemetry'],
    metrics: 'REAL-TIME SENSOR SYNC',
  },
];

export default function ActiveOrbit({ gravityMultiplier = 1 }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    sound.playClick();
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="initiatives" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div 
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[180px] opacity-15"
          style={{ background: 'radial-gradient(circle, #00f0ff 0%, #8a2be2 50%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10">
        {/* Section Header with Left / Right Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <FloatingElement duration={5 / gravityMultiplier} distance={6} delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-visor border border-cyan-400/40 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(0,240,255,0.25)]">
                <Orbit className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '14s' }} />
                ACTIVE ORBIT // DOMAINS & INITIATIVES
              </div>
            </FloatingElement>

            <h2 className="font-extended font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              TACTICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 text-glow-cyan">DOMAINS</span> IN ORBIT
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light mt-3">
              Explore our core technical divisions operating in zero-gravity. Hover to reveal crisp telemetry, engineering stacks, and specifications.
            </p>
          </div>

          {/* Navigation Scroll Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <MagneticButton
              onClick={() => scroll('left')}
              strength={0.25}
              className="w-12 h-12 rounded-xl glass-visor-elevated hover:bg-white/[0.08] text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-center shadow-lg"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </MagneticButton>

            <MagneticButton
              onClick={() => scroll('right')}
              strength={0.25}
              className="w-12 h-12 rounded-xl glass-visor-elevated hover:bg-white/[0.08] text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-center shadow-lg"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </MagneticButton>
          </div>
        </div>

        {/* Horizontally Scrolling Track of Levitating Domain Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-4 px-1 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {DOMAINS.map((domain, index) => {
            const IconComponent = domain.icon;
            return (
              <div
                key={domain.id}
                className="w-[320px] sm:w-[380px] shrink-0 snap-start"
              >
                <FloatingElement
                  duration={(5 + (index % 3) * 0.8) / gravityMultiplier}
                  distance={8 + (index % 2) * 5}
                  delay={index * 0.18}
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    onMouseEnter={() => sound.playHover()}
                    className={`group relative h-full glass-visor-elevated p-7 rounded-3xl border border-white/10 ${domain.accentBorder} transition-all duration-300 flex flex-col justify-between cursor-pointer`}
                  >
                    {/* Top Section */}
                    <div>
                      {/* Top Bar with Icon & Status */}
                      <div className="flex items-center justify-between gap-4 mb-6">
                        {/* Glowing Crisp Tech Icon: Becomes crystal clear with glowing aura on hover */}
                        <div className="relative w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-cyan-400/60 flex items-center justify-center transition-all duration-300 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]">
                          <IconComponent className="w-7 h-7 text-slate-300 group-hover:text-cyan-300 transition-colors" />
                          <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 group-hover:bg-cyan-400/15 blur-sm transition-all" />
                        </div>

                        <span className={`font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border ${domain.badgeClass}`}>
                          {domain.metrics}
                        </span>
                      </div>

                      {/* Domain Titles */}
                      <div className="font-mono text-xs text-slate-400 tracking-wider uppercase mb-1">
                        {domain.tagline}
                      </div>
                      <h3 className="font-extended font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {domain.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                        {domain.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {domain.tags.map((tag) => (
                          <span
                            key={tag}
                            className="glass-visor px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 border border-white/5 group-hover:border-white/15 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        ACCESS SQUAD LOGS
                      </span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </motion.div>
                </FloatingElement>
              </div>
            );
          })}
        </div>

        {/* Scroll Progress Affordance Notice */}
        <div className="mt-4 flex items-center justify-between text-slate-500 font-mono text-xs px-2">
          <span>&larr; SWIPE / DRAG HORIZONTALLY &rarr;</span>
          <span>6 ACTIVE ORBITAL DIVISIONS</span>
        </div>
      </div>
    </section>
  );
}
