import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Terminal, 
  Atom, 
  ChevronDown, 
  Code2, 
  Radio 
} from 'lucide-react';
import FloatingElement from './FloatingElement';
import MagneticButton from './MagneticButton';
import { sound } from '../utils/audio';

export default function Hero({ onOpenInitiateModal, gravityMultiplier = 1 }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
    const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1

    setTilt({
      rotateX: -y * 16,
      rotateY: x * 16,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden perspective-[1200px]"
    >
      {/* Dynamic Cosmic Gradient Orbs in Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div 
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[550px] rounded-full blur-[150px] opacity-25"
          style={{ background: 'radial-gradient(circle, #00f0ff 0%, #8a2be2 50%, transparent 70%)' }}
        />
        <div 
          className="absolute top-1/2 -left-48 w-[600px] h-[600px] rounded-full blur-[170px] opacity-20"
          style={{ background: 'radial-gradient(circle, #8a2be2 0%, #ff4655 40%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-10 -right-48 w-[600px] h-[600px] rounded-full blur-[160px] opacity-15"
          style={{ background: 'radial-gradient(circle, #00f0ff 0%, #8a2be2 60%, transparent 70%)' }}
        />
      </div>

      {/* 3-4 Abstract Geometric Shapes Floating & Rotating in Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Shape 1: Floating Holographic Tesseract (Wireframe Box) */}
        <FloatingElement
          duration={7 / gravityMultiplier}
          distance={18}
          delay={0.2}
          rotateRange={8}
          className="absolute top-28 left-[6%] md:left-[10%] hidden sm:block"
        >
          <div className="relative w-28 h-28 md:w-36 md:h-36 border border-cyan-400/25 rounded-2xl p-4 blur-[0.6px] animate-pulse-glow bg-cyan-500/[0.02]">
            <div className="w-full h-full border border-cyan-300/40 rounded-xl p-3 border-dashed rotate-12 flex items-center justify-center">
              <div className="w-10 h-10 border border-cyan-400/60 rounded-lg -rotate-12 bg-cyan-400/10 shadow-[0_0_20px_#00f0ff]" />
            </div>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[9px] font-mono text-cyan-400/60 uppercase tracking-widest">
              TESSERACT_01
            </span>
          </div>
        </FloatingElement>

        {/* Shape 2: Quantum Sphere with Dual Orbit Rings */}
        <FloatingElement
          duration={8.5 / gravityMultiplier}
          distance={22}
          delay={1.2}
          rotateRange={-12}
          className="absolute top-36 right-[6%] md:right-[10%] hidden sm:block"
        >
          <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center blur-[0.4px]">
            <div className="absolute inset-0 rounded-full border border-purple-500/40 border-dashed animate-spin" style={{ animationDuration: '24s' }} />
            <div className="w-20 h-20 rounded-full border border-cyan-400/40 rotate-45 animate-spin" style={{ animationDuration: '18s' }} />
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500/40 to-cyan-400/40 blur-xs shadow-[0_0_25px_#8a2be2]" />
            <span className="absolute -bottom-3 text-[9px] font-mono text-purple-400/60 uppercase tracking-widest">
              QUANTUM_CORE
            </span>
          </div>
        </FloatingElement>

        {/* Shape 3: Code Bracket Monolith */}
        <FloatingElement
          duration={6.5 / gravityMultiplier}
          distance={16}
          delay={0.8}
          rotateRange={10}
          className="absolute bottom-28 left-[5%] md:left-[12%] hidden md:block"
        >
          <div className="glass-visor p-4 rounded-2xl border border-cyan-400/30 blur-[0.4px] shadow-[0_0_25px_rgba(0,240,255,0.2)] flex items-center gap-3">
            <Code2 className="w-7 h-7 text-cyan-400 animate-pulse" />
            <div className="font-mono text-xs text-slate-300">
              <span className="text-cyan-400">&lt;</span>
              <span className="text-purple-400">ZeroG</span>
              <span className="text-white">.elevate()</span>
              <span className="text-cyan-400"> /&gt;</span>
            </div>
          </div>
        </FloatingElement>

        {/* Shape 4: Tactical Node Polyhedron */}
        <FloatingElement
          duration={7.8 / gravityMultiplier}
          distance={20}
          delay={1.5}
          rotateRange={-14}
          className="absolute bottom-36 right-[5%] md:right-[12%] hidden md:block"
        >
          <div className="glass-visor p-4 rounded-2xl border border-purple-400/30 blur-[0.4px] shadow-[0_0_25px_rgba(138,43,226,0.2)] flex items-center gap-3">
            <Atom className="w-7 h-7 text-purple-400 animate-spin" style={{ animationDuration: '16s' }} />
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">ANTI-G FIELD</span>
              <span className="text-xs font-mono font-semibold text-white">ORBIT: NOMINAL</span>
            </div>
          </div>
        </FloatingElement>
      </div>

      {/* Main 3D Tilt Stage */}
      <motion.div
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        transition={{ type: 'spring', stiffness: 180, damping: 18, mass: 0.1 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        {/* Tactical Status Pill */}
        <FloatingElement duration={4.5 / gravityMultiplier} distance={6} delay={0.1}>
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-1.5 rounded-full glass-visor border border-cyan-400/30 text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.25)] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="tracking-widest font-semibold uppercase">
              INDIAN SOCIETY FOR TECHNICAL EDUCATION
            </span>
            <span className="text-slate-600">//</span>
            <span className="text-slate-400 font-mono">NIT HAMIRPUR CHAPTER</span>
          </div>
        </FloatingElement>

        {/* Centerpiece: Massive 3D-Like Typography "ISTE NITH" with Mouse Tilt */}
        <div className="relative mb-6 select-none" style={{ transform: 'translateZ(60px)' }}>
          {/* Back Chromatic Offset Glow */}
          <h1 
            aria-hidden="true"
            className="absolute inset-0 font-extended font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-cyan-500/20 blur-md pointer-events-none select-none"
          >
            ISTE NITH
          </h1>

          {/* Main 3D Typography */}
          <h1 className="relative font-extended font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              ISTE
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 text-glow-cyan">
              NITH
            </span>
          </h1>

          {/* Floating Subtle Tactical Sub-badge */}
          <div className="absolute -top-3 -right-2 sm:-right-8 font-mono text-[10px] sm:text-xs text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/30">
            v2.6_ZERO_G
          </div>
        </div>

        {/* Required Lore/Copy: "Defying limits. Elevating innovation." */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ transform: 'translateZ(40px)' }}
          className="mb-8"
        >
          <p className="font-extended text-lg sm:text-2xl md:text-3xl text-cyan-300 font-bold tracking-widest uppercase mb-3 text-glow-cyan">
            Defying limits. Elevating innovation.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            The premier technical society of <span className="text-white font-medium">National Institute of Technology Hamirpur</span>. 
            Forging elite engineers, autonomous AI architectures, high-impact hackathons, and spatial digital experiences in zero-gravity.
          </p>
        </motion.div>

        {/* Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          style={{ transform: 'translateZ(50px)' }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Main Glowing CTA: INITIATE SEQUENCE */}
          <MagneticButton
            onClick={() => {
              sound.playInitiate();
              onOpenInitiateModal();
            }}
            strength={0.3}
            className="w-full sm:w-auto group relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 text-slate-950 font-extended font-bold text-xs sm:text-sm shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:shadow-[0_0_45px_rgba(0,240,255,0.85)] border border-cyan-200/50 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="relative flex items-center justify-center gap-3">
              <Sparkles className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
              <span>INITIATE SEQUENCE</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </MagneticButton>

          {/* Secondary Action: Explore Mission Briefing */}
          <MagneticButton
            href="#mission-log"
            strength={0.2}
            className="w-full sm:w-auto px-7 py-4 rounded-xl glass-visor-elevated hover:bg-white/[0.08] text-white font-mono font-semibold text-xs sm:text-sm border border-white/15 hover:border-cyan-400/50 transition-all shadow-lg flex items-center justify-center gap-2 group"
          >
            <Terminal className="w-4 h-4 text-cyan-400 group-hover:text-purple-400 transition-colors" />
            <span>[ EXPLORE MISSION_LOG ]</span>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Floating Tactical Telemetry Readouts along the bottom bar */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mt-16 sm:mt-20 pt-6 border-t border-white/10 hidden md:grid grid-cols-3 gap-6 text-slate-400 text-xs font-mono">
        <div className="flex items-center gap-2.5">
          <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>ORBIT COORDINATES: <strong className="text-slate-200">31.7084° N, 76.5273° E</strong></span>
        </div>
        <div className="flex items-center justify-center gap-2.5">
          <Compass className="w-4 h-4 text-purple-400" />
          <span>STATION ELEVATION: <strong className="text-slate-200">920M (NITH CAMPUS)</strong></span>
        </div>
        <div className="flex items-center justify-end gap-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>ZERO-G PROPULSION: <strong className="text-emerald-400 uppercase">SYNCHRONIZED</strong></span>
        </div>
      </div>

      {/* Glide Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 mt-8 hidden lg:flex flex-col items-center gap-1.5 text-slate-400 text-[11px] font-mono"
      >
        <span className="tracking-widest uppercase text-cyan-400/80">DESCENT VECTOR</span>
        <ChevronDown className="w-4 h-4 text-cyan-400" />
      </motion.div>
    </section>
  );
}
