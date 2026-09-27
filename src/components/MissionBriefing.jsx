import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Code2, 
  Rocket, 
  Sparkles, 
  Users, 
  CheckCircle2, 
  Activity, 
  Compass 
} from 'lucide-react';
import FloatingElement from './FloatingElement';
import { sound } from '../utils/audio';

export default function MissionBriefing({ gravityMultiplier = 1 }) {
  const [terminalStep, setTerminalStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const terminalLogs = [
    '> OVERRIDE_GRAV: ACTIVE [0.0 m/s²] ... COORDINATES: NITH_SECTOR_01',
    '> DECRYPTING CHAPTER DIRECTIVES: 500+ INNOVATORS ENGAGED',
    '> INITIATING FLAGSHIP ARCHITECTURE: HACK-O-FIESTA 5.0 DEPLOYED',
    '> ALUMNI SATELLITE LINK: GOOGLE // MICROSOFT // UBER // ATLASSIAN',
  ];

  return (
    <section id="mission-log" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Spatial Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div 
          className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full blur-[170px] opacity-15"
          style={{ background: 'radial-gradient(circle, #00f0ff 0%, #8a2be2 50%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-10 left-0 w-[500px] h-[500px] rounded-full blur-[180px] opacity-15"
          style={{ background: 'radial-gradient(circle, #8a2be2 0%, #ff4655 40%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10">
        {/* Terminal Header "System Override" Terminal Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="glass-visor-elevated rounded-2xl border border-cyan-400/40 p-4 sm:p-5 mb-14 shadow-[0_0_35px_rgba(0,240,255,0.15)]"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_#ff4655]" />
              <div className="w-3 h-3 rounded-full bg-amber-400/80 shadow-[0_0_8px_#f59e0b]" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/80 shadow-[0_0_8px_#10b981]" />
              <span className="font-mono text-xs text-slate-300 ml-2 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                SYSTEM_OVERRIDE_TERMINAL // ISTE_CORE_V2.6
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                GRAVITY: OFF
              </span>
              <span>ACCESS: LEVEL_ALPHA</span>
            </div>
          </div>

          <div className="pt-3 font-mono text-xs sm:text-sm text-cyan-300 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-purple-400 font-bold">root@iste-nexus:~$</span>
            <span className="text-slate-100">{terminalLogs[terminalStep]}</span>
            <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block" />
          </div>
        </motion.div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <FloatingElement duration={5 / gravityMultiplier} distance={6} delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-visor border border-purple-400/40 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(138,43,226,0.3)]">
              <Compass className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '16s' }} />
              MISSION BRIEFING // ZERO-G PROTOCOL
            </div>
          </FloatingElement>

          <h2 className="font-extended font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
            SYSTEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 text-glow-cyan">OVERRIDE</span>: THE NEXUS
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            The Indian Society for Technical Education (ISTE) Students’ Chapter at NIT Hamirpur functions as a high-velocity techno-management catalyst. We dismantle traditional learning friction and launch students into orbit.
          </p>
        </div>

        {/* Asymmetrical Floating Glass Cards Layout: Drift upward into place as if gravity was just turned off */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Technical Mastery (Col Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <FloatingElement duration={5.5 / gravityMultiplier} distance={8} delay={0.2}>
              <div 
                onMouseEnter={() => sound.playHover()}
                className="glass-visor-elevated p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between h-full group hover:shadow-[0_20px_45px_rgba(0,240,255,0.2)] relative overflow-hidden"
              >
                {/* Tactical Beveled Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-400/20 to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
                      <Code2 className="w-7 h-7" />
                    </div>
                    <span className="font-mono text-xs text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30">
                      SECTOR_01 // ARCHITECTURE
                    </span>
                  </div>

                  <h3 className="font-extended font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    Technical Mastery & Deep Systems
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                    Engineered from bare metal to distributed cloud clusters. We orchestrate intensive developer bootcamps, algorithmic competitions, open-source repositories, and autonomous AI architectures.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                    {['Distributed Systems', 'Agentic AI / RAG', 'Rust & Cloud Native', 'Algorithmic Showdowns'].map((tag) => (
                      <div key={tag} className="glass-visor px-3 py-2 rounded-xl text-center text-xs font-mono text-slate-300 border border-white/5">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    12+ Annual Intensive Bootcamps
                  </span>
                  <span className="text-slate-500">SYS_VERIFIED</span>
                </div>
              </div>
            </FloatingElement>
          </motion.div>

          {/* Card 2: Transformative Leadership (Col Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <FloatingElement duration={6.2 / gravityMultiplier} distance={10} delay={0.4}>
              <div 
                onMouseEnter={() => sound.playHover()}
                className="glass-visor-elevated p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 flex flex-col justify-between h-full group hover:shadow-[0_20px_45px_rgba(138,43,226,0.2)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-400/20 to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-purple-400/10 border border-purple-400/40 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(138,43,226,0.4)] transition-all">
                      <Rocket className="w-7 h-7" />
                    </div>
                    <span className="font-mono text-xs text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/30">
                      SECTOR_02 // COMMAND
                    </span>
                  </div>

                  <h3 className="font-extended font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-purple-300 transition-colors">
                    Operational Leadership & Scale
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                    Transforming raw enthusiasm into executive precision. Our operatives command national hackathons, lead multidisciplinary brigades, and secure top-tier corporate alliances.
                  </p>

                  <div className="space-y-2 mb-6">
                    {['National Hackathon Orchestration', 'Strategic Corporate Sponsorships', '100% Student-Driven Command'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-purple-300 font-semibold">1,000+ Hackathon Participants</span>
                  <span className="text-slate-500">SCALE_CERTIFIED</span>
                </div>
              </div>
            </FloatingElement>
          </motion.div>

          {/* Card 3: Social Impact & Hult Prize (Col Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <FloatingElement duration={5.8 / gravityMultiplier} distance={9} delay={0.3}>
              <div 
                onMouseEnter={() => sound.playHover()}
                className="glass-visor-elevated p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-crimson/50 transition-all duration-300 flex flex-col justify-between h-full group hover:shadow-[0_20px_45px_rgba(255,70,85,0.2)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-rose-500/20 to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-400/40 flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,70,85,0.4)] transition-all">
                      <Sparkles className="w-7 h-7" />
                    </div>
                    <span className="font-mono text-xs text-rose-400 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-400/30">
                      SECTOR_03 // IMPACT
                    </span>
                  </div>

                  <h3 className="font-extended font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-rose-300 transition-colors">
                    Planetary Social Innovation
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                    Proud hosts of the on-campus <strong className="text-white">Hult Prize edition</strong> at NIT Hamirpur (the "Nobel Prize for Students"). We incubate ventures tackling UN Sustainable Development Goals with $1M in seed capital on the line.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-rose-400">$1,000,000 Global Fund Target</span>
                  <span className="text-slate-500">UN_ALIGNED</span>
                </div>
              </div>
            </FloatingElement>
          </motion.div>

          {/* Card 4: Alumni Satellite Link (Col Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <FloatingElement duration={6.8 / gravityMultiplier} distance={11} delay={0.5}>
              <div 
                onMouseEnter={() => sound.playHover()}
                className="glass-visor-elevated p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between h-full group hover:shadow-[0_20px_45px_rgba(0,240,255,0.2)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-400/20 to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/40 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
                      <Users className="w-7 h-7" />
                    </div>
                    <span className="font-mono text-xs text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30">
                      SECTOR_04 // SATELLITE
                    </span>
                  </div>

                  <h3 className="font-extended font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    Global Alumni Satellite Constellation
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                    Our legacy spans across Silicon Valley, Europe, and India's tech giants. Active alumni mentors at Google, Microsoft, Amazon, Uber, Atlassian, and Oracle conduct 1-on-1 mock interviews, system design teardowns, and job referrals.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Google', 'Microsoft', 'Uber', 'Amazon', 'Atlassian', 'Oracle'].map((corp) => (
                      <span key={corp} className="glass-visor px-3.5 py-1.5 rounded-lg text-xs font-mono text-cyan-300 border border-cyan-400/20">
                        {corp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-cyan-300">150+ Alumni Engineers Across the Globe</span>
                  <span className="text-slate-500">ORBIT_LINK_ACTIVE</span>
                </div>
              </div>
            </FloatingElement>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
