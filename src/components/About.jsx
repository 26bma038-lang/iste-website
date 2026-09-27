import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Rocket, 
  Sparkles, 
  Users, 
  ExternalLink, 
  Cpu, 
  CheckCircle2, 
  Compass, 
  Globe2 
} from 'lucide-react';
import FloatingElement from './FloatingElement';
import TiltCard from './TiltCard';
import { ABOUT_PILLARS } from '../data/mockData';

const iconMap = {
  Code2: Code2,
  Rocket: Rocket,
  Sparkles: Sparkles,
  Users: Users,
};

export default function About({ onOpenJoinModal, gravityMultiplier = 1 }) {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Spatial Glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div 
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-15"
          style={{ background: 'radial-gradient(circle, #00f2fe 0%, #3b82f6 50%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full blur-[160px] opacity-15"
          style={{ background: 'radial-gradient(circle, #a855f7 0%, #ec4899 50%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <FloatingElement duration={5 / gravityMultiplier} distance={6} delay={0.2}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-400/30 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
              <Compass className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '16s' }} />
              The Anti-Gravity Mission
            </div>
          </FloatingElement>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
            Fostering <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">Pioneers</span>, Not Just Engineers.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            The Indian Society for Technical Education (ISTE) Students’ Chapter at NIT Hamirpur is a premier techno-management community. We cultivate an ecosystem where gravity doesn’t limit your code, ideas, or aspirations.
          </p>
        </div>

        {/* Asymmetrical Floating Grid of Glassmorphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Technical Mastery (Span 7 cols) */}
          <div className="md:col-span-7">
            <FloatingElement duration={5.5 / gravityMultiplier} distance={9} delay={0.1}>
              <TiltCard className="h-full">
                <div className="glass-panel-elevated p-7 sm:p-9 rounded-3xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between h-full group hover:shadow-[0_20px_40px_rgba(0,242,254,0.15)]">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all">
                        <Code2 className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono text-cyan-300 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                        {ABOUT_PILLARS[0].stats}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {ABOUT_PILLARS[0].title}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400/90 mb-4 font-mono">
                      {ABOUT_PILLARS[0].tagline}
                    </p>
                    <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6">
                      {ABOUT_PILLARS[0].description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {ABOUT_PILLARS[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/10 group-hover:border-cyan-400/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </FloatingElement>
          </div>

          {/* Card 2: Transformative Leadership (Span 5 cols) */}
          <div className="md:col-span-5">
            <FloatingElement duration={6.2 / gravityMultiplier} distance={12} delay={0.4}>
              <TiltCard className="h-full">
                <div className="glass-panel-elevated p-7 sm:p-9 rounded-3xl border border-white/10 hover:border-purple-400/40 transition-all duration-300 flex flex-col justify-between h-full group hover:shadow-[0_20px_40px_rgba(168,85,247,0.18)]">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
                        <Rocket className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono text-purple-300 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30">
                        {ABOUT_PILLARS[1].stats}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {ABOUT_PILLARS[1].title}
                    </h3>
                    <p className="text-sm font-medium text-purple-400/90 mb-4 font-mono">
                      {ABOUT_PILLARS[1].tagline}
                    </p>
                    <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6">
                      {ABOUT_PILLARS[1].description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {ABOUT_PILLARS[1].tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/10 group-hover:border-purple-400/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </FloatingElement>
          </div>

          {/* Card 3: Social Innovation & Hult Prize (Span 5 cols) */}
          <div className="md:col-span-5">
            <FloatingElement duration={5.8 / gravityMultiplier} distance={10} delay={0.6}>
              <TiltCard className="h-full">
                <div className="glass-panel-elevated p-7 sm:p-9 rounded-3xl border border-white/10 hover:border-orange-400/40 transition-all duration-300 flex flex-col justify-between h-full group hover:shadow-[0_20px_40px_rgba(249,115,22,0.18)]">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-400/30 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all">
                        <Sparkles className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono text-orange-300 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30">
                        {ABOUT_PILLARS[2].stats}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-orange-300 transition-colors">
                      {ABOUT_PILLARS[2].title}
                    </h3>
                    <p className="text-sm font-medium text-orange-400/90 mb-4 font-mono">
                      {ABOUT_PILLARS[2].tagline}
                    </p>
                    <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6">
                      {ABOUT_PILLARS[2].description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {ABOUT_PILLARS[2].tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/10 group-hover:border-orange-400/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </FloatingElement>
          </div>

          {/* Card 4: Alumni & Mentorship (Span 7 cols) */}
          <div className="md:col-span-7">
            <FloatingElement duration={5.1 / gravityMultiplier} distance={8} delay={0.3}>
              <TiltCard className="h-full">
                <div className="glass-panel-elevated p-7 sm:p-9 rounded-3xl border border-white/10 hover:border-emerald-400/40 transition-all duration-300 flex flex-col justify-between h-full group hover:shadow-[0_20px_40px_rgba(52,211,153,0.15)]">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-all">
                        <Users className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono text-emerald-300 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                        {ABOUT_PILLARS[3].stats}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {ABOUT_PILLARS[3].title}
                    </h3>
                    <p className="text-sm font-medium text-emerald-400/90 mb-4 font-mono">
                      {ABOUT_PILLARS[3].tagline}
                    </p>
                    <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6">
                      {ABOUT_PILLARS[3].description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {ABOUT_PILLARS[3].tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/10 group-hover:border-emerald-400/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </FloatingElement>
          </div>
        </div>

        {/* Culture Quote Ribbon */}
        <div className="mt-14 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center shrink-0">
              <Globe2 className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-semibold text-white">
                "Where curiosity encounters zero friction, extraordinary ideas take flight."
              </p>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                ISTE NIT Hamirpur Ethos • Him Prabha / Annual Chronicle
              </p>
            </div>
          </div>

          <button
            onClick={onOpenJoinModal}
            className="shrink-0 px-6 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-cyan-300 border border-cyan-400/30 text-xs sm:text-sm font-mono tracking-wide transition-all cursor-pointer"
          >
            Become a Member →
          </button>
        </div>
      </div>
    </section>
  );
}
