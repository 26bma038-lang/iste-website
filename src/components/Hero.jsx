import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Terminal, 
  Cpu, 
  Atom, 
  Layers, 
  Activity,
  Code2,
  ChevronDown
} from 'lucide-react';
import FloatingElement from './FloatingElement';
import { HERO_STATS } from '../data/mockData';

export default function Hero({ onOpenJoinModal, gravityMultiplier = 1 }) {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Dynamic Cosmic Gradient Orbs in Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Cyan Ambient Glow */}
        <div 
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-25"
          style={{ background: 'radial-gradient(circle, #00f2fe 0%, #4facfe 50%, transparent 70%)' }}
        />
        {/* Purple Depth Glow */}
        <div 
          className="absolute top-1/3 -left-32 w-[550px] h-[550px] rounded-full blur-[160px] opacity-20"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, #d946ef 50%, transparent 70%)' }}
        />
        {/* Orange Accent Ambient */}
        <div 
          className="absolute bottom-10 -right-24 w-[500px] h-[500px] rounded-full blur-[150px] opacity-15"
          style={{ background: 'radial-gradient(circle, #f97316 0%, #fbbf24 60%, transparent 70%)' }}
        />
      </div>

      {/* Freely Floating Abstract Geometric Shapes & Tech Glyphs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Floating Ring / Torus */}
        <FloatingElement 
          duration={6 / gravityMultiplier} 
          distance={18} 
          delay={0.2} 
          rotateRange={12} 
          className="absolute top-24 left-[8%] md:left-[12%] hidden sm:block"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-cyan-400/30 border-dashed p-2 shadow-[0_0_25px_rgba(0,242,254,0.25)] flex items-center justify-center backdrop-blur-xs">
            <div className="w-8 h-8 rounded-full bg-cyan-400/10 border border-cyan-300/40 animate-pulse" />
          </div>
        </FloatingElement>

        {/* Floating Circuit Node (Terminal Glyph) */}
        <FloatingElement 
          duration={5.2 / gravityMultiplier} 
          distance={15} 
          delay={1} 
          rotateRange={-8}
          className="absolute top-36 right-[8%] md:right-[14%] hidden sm:block"
        >
          <div className="glass-panel p-3 rounded-2xl border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center gap-2">
            <Terminal className="w-5 h-5 text-purple-400" />
            <span className="font-mono text-xs text-purple-200">zeroG.init()</span>
          </div>
        </FloatingElement>

        {/* Floating Octahedron / Polyhedron */}
        <FloatingElement 
          duration={7 / gravityMultiplier} 
          distance={22} 
          delay={1.6} 
          rotateRange={16} 
          className="absolute bottom-32 left-[6%] md:left-[15%] hidden md:block"
        >
          <div className="relative w-14 h-14 border border-orange-500/30 rotate-45 rounded-xl bg-orange-500/5 backdrop-blur-xs shadow-[0_0_25px_rgba(249,115,22,0.25)] flex items-center justify-center">
            <Cpu className="w-6 h-6 text-orange-400 -rotate-45" />
          </div>
        </FloatingElement>

        {/* Floating Atom / Quantum Core */}
        <FloatingElement 
          duration={5.8 / gravityMultiplier} 
          distance={16} 
          delay={0.8} 
          rotateRange={-10} 
          className="absolute bottom-40 right-[6%] md:right-[13%] hidden md:block"
        >
          <div className="glass-panel p-3 rounded-2xl border border-cyan-400/30 shadow-[0_0_25px_rgba(0,242,254,0.2)] flex items-center gap-2">
            <Atom className="w-6 h-6 text-cyan-300 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Orbit Status</span>
              <span className="text-xs font-semibold text-white">Weightless</span>
            </div>
          </div>
        </FloatingElement>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Floating Badge Header */}
        <FloatingElement duration={4 / gravityMultiplier} distance={6} delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyan-400/30 text-xs sm:text-sm font-mono text-cyan-300 shadow-[0_0_20px_rgba(0,242,254,0.2)] mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="tracking-wide">National Institute of Technology Hamirpur</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">ESTD. Chapter</span>
          </div>
        </FloatingElement>

        {/* Hero Title: Large, Bold, Glowing Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] sm:leading-[1.05] text-white mb-6"
        >
          <span className="block drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]">
            Innovate.
          </span>
          <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,242,254,0.4)]">
            Create.
          </span>
          <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-300 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_45px_rgba(168,85,247,0.45)]">
            Elevate.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-10"
        >
          <span className="font-semibold text-white">Indian Society for Technical Education</span> at{' '}
          <span className="text-cyan-300 font-medium">NIT Hamirpur</span>. Fostering technical
          brilliance, spatial thinking, and entrepreneurial leadership in a zero-gravity environment.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Main Glowing CTA Button: Join the Community */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(0, 242, 254, 0.6)' }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 font-heading font-bold text-base sm:text-lg shadow-[0_0_25px_rgba(0,242,254,0.45)] transition-all cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Sparkles className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span>Join the Community</span>
            <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Secondary CTA: Explore Flagship Events */}
          <a
            href="#initiatives"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl glass-panel-elevated hover:bg-white/[0.08] text-white font-medium text-base border border-white/15 hover:border-cyan-400/40 transition-all shadow-lg"
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Flagship Initiatives</span>
          </a>
        </motion.div>
      </div>

      {/* Floating Key Stats Grid - Asymmetrical floating levitation */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mt-20 sm:mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {HERO_STATS.map((stat, idx) => (
            <FloatingElement
              key={stat.label}
              duration={(4.5 + idx * 0.7) / gravityMultiplier}
              distance={10 + (idx % 2) * 5}
              delay={idx * 0.2}
              rotateRange={idx % 2 === 0 ? 1.5 : -1.5}
            >
              <div className="glass-panel-elevated p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(0,242,254,0.15)] text-center sm:text-left">
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300 mb-1 group-hover:drop-shadow-[0_0_12px_rgba(0,242,254,0.5)] transition-all">
                  {stat.value}
                </div>
                <div className="font-semibold text-sm sm:text-base text-slate-200 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 font-light">
                  {stat.sub}
                </div>
              </div>
            </FloatingElement>
          ))}
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 mt-14 hidden md:flex flex-col items-center gap-2 text-slate-400 text-xs font-mono"
      >
        <span className="tracking-widest uppercase text-[11px]">Glide to Explore</span>
        <ChevronDown className="w-4 h-4 text-cyan-400" />
      </motion.div>
    </section>
  );
}
