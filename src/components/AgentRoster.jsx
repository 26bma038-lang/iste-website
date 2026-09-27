import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Radio, Users } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import FloatingElement from './FloatingElement';
import MagneticButton from './MagneticButton';
import { sound } from '../utils/audio';

// High-end tactical operative roster data
const OPERATIVES = [
  {
    id: 'agent-01',
    callsign: 'VORTEX',
    name: 'Aarav Sharma',
    role: 'COMMANDER_IN_CHIEF',
    division: 'CORE_COMMAND',
    specialty: 'Distributed Infrastructure & Chapter Strategy',
    clearance: 'LEVEL_ALPHA',
    syncRate: '99.4%',
    primaryTool: 'Go / Kubernetes / System Design',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    avatarGlow: 'from-cyan-500/30 via-sky-400/20 to-transparent',
    accentBorder: 'hover:border-cyan-400 group-hover:shadow-[0_0_35px_rgba(0,240,255,0.45)]',
    badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/30',
    svgSilhouette: 'commander',
  },
  {
    id: 'agent-02',
    callsign: 'CIPHER',
    name: 'Ananya Verma',
    role: 'LEAD_ARCHITECT',
    division: 'SYSTEM_ARCHITECTS',
    specialty: 'High-Concurrency Backends & Cloud Runtimes',
    clearance: 'LEVEL_4',
    syncRate: '98.9%',
    primaryTool: 'Rust / Next.js 15 / PostgreSQL',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    avatarGlow: 'from-purple-500/30 via-fuchsia-400/20 to-transparent',
    accentBorder: 'hover:border-purple-400 group-hover:shadow-[0_0_35px_rgba(138,43,226,0.45)]',
    badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-400/30',
    svgSilhouette: 'architect',
  },
  {
    id: 'agent-03',
    callsign: 'NEURAL',
    name: 'Rohan Mehra',
    role: 'AI_SPECIALIST',
    division: 'AI_SPECIALISTS',
    specialty: 'Agentic Workflows & Multi-Modal LLMs',
    clearance: 'LEVEL_4',
    syncRate: '99.1%',
    primaryTool: 'PyTorch / LangChain / CUDA',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    avatarGlow: 'from-cyan-500/30 via-emerald-400/20 to-transparent',
    accentBorder: 'hover:border-cyan-400 group-hover:shadow-[0_0_35px_rgba(0,240,255,0.45)]',
    badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/30',
    svgSilhouette: 'ai',
  },
  {
    id: 'agent-04',
    callsign: 'AETHER',
    name: 'Priya Sen',
    role: 'CREATIVE_DIRECTOR',
    division: 'CREATIVE_OPS',
    specialty: 'Zero-G Spatial UI & Micro-interactions',
    clearance: 'LEVEL_3',
    syncRate: '97.8%',
    primaryTool: 'Figma / Framer Motion / WebGL',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    avatarGlow: 'from-rose-500/30 via-purple-400/20 to-transparent',
    accentBorder: 'hover:border-rose-400 group-hover:shadow-[0_0_35px_rgba(255,70,85,0.45)]',
    badgeColor: 'bg-rose-500/10 text-rose-300 border-rose-400/30',
    svgSilhouette: 'creative',
  },
  {
    id: 'agent-05',
    callsign: 'KINETIC',
    name: 'Devansh Thakur',
    role: 'SYS_OPERATOR',
    division: 'SYSTEM_ARCHITECTS',
    specialty: 'Competitive Coding & Graph Theory',
    clearance: 'LEVEL_3',
    syncRate: '98.5%',
    primaryTool: 'C++20 / Advanced Algorithms',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    avatarGlow: 'from-purple-500/30 via-indigo-400/20 to-transparent',
    accentBorder: 'hover:border-purple-400 group-hover:shadow-[0_0_35px_rgba(138,43,226,0.45)]',
    badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-400/30',
    svgSilhouette: 'cp',
  },
  {
    id: 'agent-06',
    callsign: 'SPECTRE',
    name: 'Ishaan Kapoor',
    role: 'SECURITY_LEAD',
    division: 'CORE_COMMAND',
    specialty: 'Exploit Research, CTF Ops & Cryptography',
    clearance: 'LEVEL_ALPHA',
    syncRate: '99.6%',
    primaryTool: 'Linux Kernel / Ghidra / Reverse Eng',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    avatarGlow: 'from-rose-500/30 via-amber-400/20 to-transparent',
    accentBorder: 'hover:border-rose-500 group-hover:shadow-[0_0_35px_rgba(255,70,85,0.5)]',
    badgeColor: 'bg-rose-500/10 text-rose-300 border-rose-400/30',
    svgSilhouette: 'security',
  },
];

const DIVISIONS = [
  'ALL_OPERATIVES',
  'CORE_COMMAND',
  'SYSTEM_ARCHITECTS',
  'AI_SPECIALISTS',
  'CREATIVE_OPS',
];

// Stylized Floating Character Hologram Cutout Component
function AgentHologram({ callsign }) {
  return (
    <div className="relative w-full h-56 sm:h-64 flex items-center justify-center overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-400/10 to-transparent opacity-60" />

      {/* Futuristic Floating Character Hologram Silhouette */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-44 h-52 flex flex-col items-center justify-center"
      >
        {/* Holographic Tactical Avatar Illustration */}
        <svg
          viewBox="0 0 200 240"
          className="w-full h-full drop-shadow-[0_0_20px_rgba(0,240,255,0.5)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cyber Visor & Headpiece */}
          <ellipse cx="100" cy="50" rx="28" ry="34" fill="#0c101c" stroke="#00f0ff" strokeWidth="2" />
          <path d="M78 45 Q100 38 122 45 Q120 60 100 62 Q80 60 78 45 Z" fill="#00f0ff" fillOpacity="0.85" filter="drop-shadow(0 0 8px #00f0ff)" />
          <line x1="84" y1="52" x2="116" y2="52" stroke="#ffffff" strokeWidth="1.5" />

          {/* Tactical Headset / Comm Ring */}
          <path d="M72 48 Q70 30 100 28 Q130 30 128 48" stroke="#8a2be2" strokeWidth="2.5" strokeDasharray="3 3" />
          <circle cx="70" cy="50" r="4" fill="#8a2be2" />
          <circle cx="130" cy="50" r="4" fill="#8a2be2" />

          {/* Neck & Tactical Collar */}
          <path d="M88 82 L112 82 L118 96 L82 96 Z" fill="#080c14" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.3" />

          {/* Tactical Torso Armour with Beveled Lines */}
          <path
            d="M60 100 L140 100 L155 180 L145 230 L55 230 L45 180 Z"
            fill="url(#bodyGrad)"
            stroke="#00f0ff"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />

          {/* Chest Cyber Core / Energy Reactor */}
          <polygon points="100,120 115,135 100,150 85,135" fill="#8a2be2" fillOpacity="0.8" stroke="#00f0ff" strokeWidth="1.5" />
          <circle cx="100" cy="135" r="4" fill="#ffffff" />

          {/* Armour Segment Lines */}
          <line x1="60" y1="130" x2="85" y2="135" stroke="#00f0ff" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="140" y1="130" x2="115" y2="135" stroke="#00f0ff" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="75" y1="170" x2="125" y2="170" stroke="#00f0ff" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 2" />

          {/* Shoulders */}
          <path d="M45 105 L25 125 L45 155" stroke="#8a2be2" strokeWidth="2" />
          <path d="M155 105 L175 125 L155 155" stroke="#8a2be2" strokeWidth="2" />

          <defs>
            <linearGradient id="bodyGrad" x1="100" y1="95" x2="100" y2="230" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0a101d" />
              <stop offset="0.6" stopColor="#070b14" />
              <stop offset="1" stopColor="#03050a" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ambient Floating Call-Sign Tag */}
        <div className="absolute -bottom-1 font-mono text-[9px] text-cyan-400 bg-black/80 px-2.5 py-0.5 rounded-full border border-cyan-400/40 tracking-widest shadow-[0_0_10px_#00f0ff]">
          {callsign}_CHASSIS
        </div>
      </motion.div>

      {/* Cyber Grid scanning line under character */}
      <div className="absolute bottom-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </div>
  );
}

export default function AgentRoster({ gravityMultiplier = 1 }) {
  const [selectedDivision, setSelectedDivision] = useState('ALL_OPERATIVES');

  const filteredOperatives = selectedDivision === 'ALL_OPERATIVES'
    ? OPERATIVES
    : OPERATIVES.filter((op) => op.division === selectedDivision);

  return (
    <section id="roster" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div 
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full blur-[190px] opacity-15"
          style={{ background: 'radial-gradient(circle, #8a2be2 0%, #00f0ff 50%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <FloatingElement duration={5 / gravityMultiplier} distance={6} delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-visor border border-purple-400/40 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(138,43,226,0.3)]">
              <Users className="w-3.5 h-3.5 text-purple-400" />
              THE ROSTER // TACTICAL AGENT SELECT
            </div>
          </FloatingElement>

          <h2 className="font-extended font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
            AGENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 text-glow-cyan">SELECT</span> DOSSIER
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Zero circular headshots. Meet the commanders, system architects, and neural engineers piloting ISTE NIT Hamirpur into deep space.
          </p>
        </div>

        {/* Division Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
          {DIVISIONS.map((div) => {
            const active = selectedDivision === div;
            return (
              <MagneticButton
                key={div}
                onClick={() => {
                  sound.playClick();
                  setSelectedDivision(div);
                }}
                strength={0.2}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold tracking-wider transition-all cursor-pointer ${
                  active
                    ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.45)]'
                    : 'glass-visor text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                [ {div} ]
              </MagneticButton>
            );
          })}
        </div>

        {/* Tactical Agent Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredOperatives.map((op, index) => (
              <motion.div
                key={op.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <FloatingElement
                  duration={(5.2 + (index % 3) * 0.6) / gravityMultiplier}
                  distance={8 + (index % 2) * 4}
                  delay={index * 0.12}
                >
                  <div
                    onMouseEnter={() => sound.playHover()}
                    className={`group relative glass-visor-elevated rounded-3xl border border-white/10 ${op.accentBorder} transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden shadow-2xl h-full`}
                  >
                    {/* Top Status Banner */}
                    <div className="flex items-center justify-between gap-2 mb-2 pb-3 border-b border-white/10 font-mono text-[10px]">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                        {op.callsign} // {op.clearance}
                      </span>
                      <span className="text-cyan-300">SYNC: {op.syncRate}</span>
                    </div>

                    {/* Character Hologram Cutout (Suspended inside card) */}
                    <div className="my-2">
                      <AgentHologram type={op.svgSilhouette} callsign={op.callsign} />
                    </div>

                    {/* Agent Details */}
                    <div>
                      {/* Rank / Role */}
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${op.badgeColor}`}>
                          {op.role}
                        </span>
                      </div>

                      {/* Operative Full Name */}
                      <h3 className="font-extended font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                        {op.name}
                      </h3>

                      {/* Specialty */}
                      <p className="text-slate-300 text-xs font-light mt-1 mb-4 leading-relaxed">
                        {op.specialty}
                      </p>

                      {/* Primary Stack */}
                      <div className="glass-visor p-2.5 rounded-xl border border-white/5 mb-5 font-mono text-[11px] text-slate-300 flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span className="truncate">{op.primaryTool}</span>
                      </div>
                    </div>

                    {/* Holographic Social Buttons: Appear smoothly on hover */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="font-mono text-[11px] text-slate-500 group-hover:text-cyan-400/80 transition-colors">
                        STATUS: DEPLOYED
                      </span>

                      <div className="flex items-center gap-2">
                        <MagneticButton
                          href={op.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          strength={0.2}
                          className="w-8 h-8 rounded-lg glass-visor hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/50 transition-all flex items-center justify-center hover:shadow-[0_0_12px_#00f0ff]"
                          title="Operative GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </MagneticButton>

                        <MagneticButton
                          href={op.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          strength={0.2}
                          className="w-8 h-8 rounded-lg glass-visor hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 border border-white/10 hover:border-rose-400/50 transition-all flex items-center justify-center hover:shadow-[0_0_12px_#ff4655]"
                          title="Operative LinkedIn"
                        >
                          <LinkedinIcon className="w-4 h-4" />
                        </MagneticButton>
                      </div>
                    </div>
                  </div>
                </FloatingElement>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
