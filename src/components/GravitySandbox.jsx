import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Sparkles, 
  RotateCcw, 
  Zap, 
  Atom 
} from 'lucide-react';
import FloatingElement from './FloatingElement';

const GRAVITY_MODES = [
  { id: 'zero', name: 'Zero-G', value: '0.0 m/s²', multiplier: 0.6, desc: 'Deep Space Weightlessness' },
  { id: 'moon', name: 'Lunar', value: '1.62 m/s²', multiplier: 1.0, desc: 'Gentle Orbital Float' },
  { id: 'mars', name: 'Martian', value: '3.71 m/s²', multiplier: 1.5, desc: 'Dynamic Levitation' },
  { id: 'warp', name: 'Anti-G Warp', value: 'Anomaly', multiplier: 2.2, desc: 'High-Frequency Excitation' },
];

const TECH_ORBS = [
  { id: 'react', name: 'React 19 & Next.js', role: 'Spatial Web', color: 'from-cyan-400 to-blue-500', icon: 'Atom', initialX: -120, initialY: -40 },
  { id: 'ai', name: 'PyTorch & LLMs', role: 'GenAI Conclave', color: 'from-purple-400 to-pink-500', icon: 'Cpu', initialX: 130, initialY: -60 },
  { id: 'cloud', name: 'Docker & Kubernetes', role: 'DevOps Pods', color: 'from-sky-400 to-indigo-500', icon: 'Layers', initialX: -160, initialY: 60 },
  { id: 'hack', name: 'Hack-O-Fiesta', role: 'National Arena', color: 'from-orange-400 to-rose-500', icon: 'Zap', initialX: 150, initialY: 70 },
  { id: 'design', name: 'Spatial UI / UX', role: 'Pixel Lab', color: 'from-fuchsia-400 to-purple-600', icon: 'Sparkles', initialX: 0, initialY: -100 },
  { id: 'hult', name: 'Hult Prize', role: 'Global Impact', color: 'from-emerald-400 to-teal-500', icon: 'Globe', initialX: 0, initialY: 90 },
];

export default function GravitySandbox({ currentMode, setGravityMode, gravityMultiplier }) {
  const [pulseKey, setPulseKey] = useState(0);
  const [draggedCount, setDraggedCount] = useState(0);

  const handlePulse = () => {
    setPulseKey(prev => prev + 1);
  };

  return (
    <section id="zerog-lab" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[190px] opacity-20"
          style={{ background: 'radial-gradient(circle, #00f2fe 0%, #8b5cf6 50%, #f97316 100%)' }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <FloatingElement duration={5 / gravityMultiplier} distance={6}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-400/30 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
              <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
              Interactive Chamber
            </div>
          </FloatingElement>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
            The <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">Zero-G</span> Physics Chamber
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Test the anti-gravity environment. Adjust gravitational acceleration, fling floating tech orbs with your cursor, or trigger an anti-gravity propulsion wave.
          </p>
        </div>

        {/* Gravity Control Dashboard */}
        <div className="glass-panel-elevated p-6 sm:p-8 rounded-3xl border border-white/10 max-w-4xl mx-auto mb-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
                Active Gravity Field
              </div>
              <div className="font-heading font-bold text-xl sm:text-2xl text-white flex items-center gap-3">
                <span>{GRAVITY_MODES.find(m => m.id === currentMode)?.name} Field</span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {GRAVITY_MODES.find(m => m.id === currentMode)?.value}
                </span>
              </div>
            </div>

            {/* Repel Pulse & Reset Action Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePulse}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.35)] cursor-pointer"
              >
                <Zap className="w-4 h-4 text-slate-950" />
                <span>Anti-G Surge Pulse</span>
              </motion.button>

              <button
                onClick={() => setPulseKey(prev => prev + 1)}
                title="Recenter Orbs"
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mode Selector Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {GRAVITY_MODES.map((mode) => {
              const isActive = currentMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setGravityMode(mode.id)}
                  className={`p-3.5 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500/15 border-2 border-cyan-400 shadow-[0_0_25px_rgba(0,242,254,0.3)]'
                      : 'glass-panel hover:bg-white/[0.06] border border-white/10 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-heading font-bold text-sm text-white">{mode.name}</span>
                    <span className="text-[10px] font-mono text-cyan-300">{mode.value}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-light truncate">
                    {mode.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Floating Canvas / Zero-G Arena */}
        <div className="relative h-[420px] sm:h-[480px] w-full max-w-4xl mx-auto rounded-3xl glass-panel-elevated border border-cyan-500/20 overflow-hidden flex items-center justify-center shadow-[inset_0_0_60px_rgba(0,0,0,0.6)]">
          {/* Subtle Grid Coordinates Background */}
          <div className="absolute inset-0 space-grid-bg opacity-30 pointer-events-none" />

          {/* Center Orbital Ring */}
          <div className="pointer-events-none absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-cyan-400/20 border-dashed animate-spin" style={{ animationDuration: '40s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f2fe]" />
          </div>
          <div className="pointer-events-none absolute w-36 h-36 rounded-full border border-purple-400/20 animate-spin" style={{ animationDuration: '24s', animationDirection: 'reverse' }} />

          {/* Central Gravity Core Indicator */}
          <div className="pointer-events-none absolute flex flex-col items-center justify-center text-center z-0 opacity-40">
            <Atom className="w-8 h-8 text-cyan-400 animate-spin" style={{ animationDuration: '16s' }} />
            <span className="text-[10px] font-mono uppercase text-cyan-300 tracking-widest mt-1">Zero-G Core</span>
          </div>

          {/* Interactive Floating Tech Orbs */}
          {TECH_ORBS.map((orb, index) => (
            <motion.div
              key={`${orb.id}-${pulseKey}`}
              drag
              dragConstraints={{ left: -180, right: 180, top: -140, bottom: 140 }}
              dragElastic={0.2}
              whileDrag={{ scale: 1.15, cursor: 'grabbing' }}
              onDragStart={() => setDraggedCount(prev => prev + 1)}
              initial={{ 
                x: orb.initialX + (pulseKey % 2 === 0 ? 0 : (index % 2 === 0 ? 25 : -25)), 
                y: orb.initialY + (pulseKey % 2 === 0 ? 0 : (index % 3 === 0 ? 20 : -20)),
                scale: 0.8,
                opacity: 0
              }}
              animate={{ 
                x: [
                  orb.initialX, 
                  orb.initialX + (index % 2 === 0 ? 12 : -12), 
                  orb.initialX
                ],
                y: [
                  orb.initialY - (10 * gravityMultiplier), 
                  orb.initialY + (10 * gravityMultiplier), 
                  orb.initialY - (10 * gravityMultiplier)
                ],
                scale: 1,
                opacity: 1
              }}
              transition={{
                y: {
                  duration: (3.5 + (index % 3) * 0.8) / gravityMultiplier,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.2,
                },
                x: {
                  duration: (4.2 + (index % 2) * 1.1) / gravityMultiplier,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.15,
                },
                scale: { duration: 0.5 },
                opacity: { duration: 0.5 },
              }}
              className="absolute cursor-grab z-10"
            >
              <div className="glass-panel-elevated p-3 sm:p-4 rounded-2xl border border-white/20 hover:border-cyan-400/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 backdrop-blur-xl group hover:shadow-[0_0_25px_rgba(0,242,254,0.3)] transition-shadow select-none">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${orb.color} flex items-center justify-center text-white shadow-md`}>
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="text-left pr-1">
                  <div className="font-heading font-bold text-xs sm:text-sm text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                    {orb.name}
                  </div>
                  <div className="text-[10px] font-mono text-cyan-400/90 whitespace-nowrap">
                    {orb.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Interactive Hint Floating Pill */}
          <div className="absolute bottom-4 inset-x-4 flex justify-center pointer-events-none z-20">
            <div className="glass-pill px-4 py-1.5 rounded-full text-[11px] font-mono text-slate-300 flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Click & Drag orbs to test zero-gravity kinetics</span>
              {draggedCount > 0 && <span className="text-cyan-300">({draggedCount} orbs flung)</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
