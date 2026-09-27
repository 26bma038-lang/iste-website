import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Activity, Radio } from 'lucide-react';
import FloatingElement from './FloatingElement';
import { sound } from '../utils/audio';

// Custom CountUp hook for rapid numeric animation
function useCountUp(endValue, isVisible, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * endValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, endValue, duration]);

  return count;
}

function StatCard({ stat, index, isDashboardVisible, gravityMultiplier }) {
  const count = useCountUp(stat.numericValue, isDashboardVisible, 1600 + index * 150);

  return (
    <FloatingElement
      duration={(4.8 + index * 0.5) / gravityMultiplier}
      distance={8 + (index % 3) * 4}
      delay={index * 0.15}
    >
      <div 
        onMouseEnter={() => sound.playHover()}
        className="relative glass-visor-elevated p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group overflow-hidden hover:shadow-[0_15px_35px_rgba(0,240,255,0.18)]"
      >
        {/* Tactical Crosshair corner marks */}
        <div className="absolute top-2 left-2 text-[9px] font-mono text-cyan-400/40 select-none">+</div>
        <div className="absolute top-2 right-2 text-[9px] font-mono text-cyan-400/40 select-none">+</div>
        <div className="absolute bottom-2 left-2 text-[9px] font-mono text-cyan-400/40 select-none">+</div>
        <div className="absolute bottom-2 right-2 text-[9px] font-mono text-cyan-400/40 select-none">+</div>

        {/* Tactical Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/20">
            {stat.code}
          </span>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 group-hover:bg-cyan-400 group-hover:animate-ping" />
            LIVE_DATA
          </div>
        </div>

        {/* Rapid Counting Numeric Value */}
        <div className="font-extended font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
          <span className="text-glow-cyan">
            {stat.prefix}
            {count.toLocaleString()}
            {stat.suffix}
          </span>
        </div>

        {/* Stat Label */}
        <div className="font-tactical font-bold text-base sm:text-lg text-slate-200 tracking-wide uppercase mb-1">
          {stat.label}
        </div>

        {/* Stat Sub-detail */}
        <div className="text-xs text-slate-400 font-light">
          {stat.detail}
        </div>

        {/* Tactical Progress Meter Bar */}
        <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isDashboardVisible ? `${stat.progressPercent}%` : '0%' }}
            transition={{ duration: 1.4, delay: index * 0.15, ease: 'easeOut' }}
            className={`h-full rounded-full bg-gradient-to-r ${stat.accentGradient}`}
          />
        </div>
      </div>
    </FloatingElement>
  );
}

export default function TelemetryStats({ gravityMultiplier = 1 }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.25 });

  const STATS = [
    {
      code: 'METRIC_01',
      numericValue: 50,
      prefix: '',
      suffix: '+',
      label: 'Elite Members',
      detail: 'Core engineers, algorithmic specialists & spatial designers',
      progressPercent: 95,
      accentGradient: 'from-cyan-400 to-sky-500',
    },
    {
      code: 'METRIC_02',
      numericValue: 15,
      prefix: '',
      suffix: '+',
      label: 'Algorithmic Showdowns',
      detail: 'Intensive code sprints, ICPC battles & peer hackathons',
      progressPercent: 88,
      accentGradient: 'from-purple-400 to-pink-500',
    },
    {
      code: 'METRIC_03',
      numericValue: 10000,
      prefix: '',
      suffix: '+',
      label: 'Lines of Code',
      detail: 'Shipped across open-source web, systems & AI repositories',
      progressPercent: 98,
      accentGradient: 'from-cyan-400 to-emerald-400',
    },
    {
      code: 'METRIC_04',
      numericValue: 250000,
      prefix: '₹',
      suffix: '+',
      label: 'Prize Pool Allocated',
      detail: 'Awarded to national hackathon champions at HACK-O-FIESTA',
      progressPercent: 92,
      accentGradient: 'from-rose-500 to-amber-500',
    },
    {
      code: 'METRIC_05',
      numericValue: 15000,
      prefix: '',
      suffix: '+',
      label: 'Pan-India Reach',
      detail: 'Students, founders & innovators engaged across the nation',
      progressPercent: 90,
      accentGradient: 'from-indigo-400 to-purple-500',
    },
    {
      code: 'METRIC_06',
      numericValue: 100,
      prefix: '',
      suffix: '%',
      label: 'Student Engineered',
      detail: 'Autonomous chapter operations with zero bureaucracy',
      progressPercent: 100,
      accentGradient: 'from-cyan-400 to-teal-400',
    },
  ];

  return (
    <section id="telemetry" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[190px] opacity-15"
          style={{ background: 'radial-gradient(circle, #00f0ff 0%, #8a2be2 50%, #ff4655 100%)' }}
        />
      </div>

      <div className="relative z-10" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <FloatingElement duration={5 / gravityMultiplier} distance={6} delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-visor border border-cyan-400/40 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(0,240,255,0.25)]">
              <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              TELEMETRY & HIGH SCORES // METRICS HUD
            </div>
          </FloatingElement>

          <h2 className="font-extended font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
            CHAPTER <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 text-glow-cyan">TELEMETRY</span> LOG
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Real-time verified milestones, algorithmic impact scores, and national outreach metrics continuously streaming from the ISTE NIT Hamirpur orbital hub.
          </p>
        </div>

        {/* Dashboard Grid Container with Sweeping Laser Line Animation */}
        <div className="relative rounded-3xl p-2 sm:p-4 glass-visor border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Scanning Laser Line Animation Sweeping Across the Cards */}
          <div 
            className="pointer-events-none absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00f0ff,0_0_30px_#00f0ff] animate-laser z-20"
          />

          {/* Secondary faint laser blur sweep */}
          <div 
            className="pointer-events-none absolute left-0 right-0 h-10 bg-gradient-to-b from-cyan-400/10 to-transparent blur-md animate-laser z-10"
          />

          {/* Tactical HUD Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 mb-4 border-b border-white/10 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 text-cyan-300">
                <Activity className="w-4 h-4 text-cyan-400" />
                HUD_STREAM: ACTIVE
              </span>
              <span className="hidden sm:inline text-slate-600">//</span>
              <span className="hidden sm:inline text-slate-400">PACKET_LOSS: 0.00%</span>
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <span>PING: <strong className="text-emerald-400">12ms</strong></span>
              <span>BUFFER: <strong className="text-cyan-300">60 FPS</strong></span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-400/30">
                TELEMETRY_SYNCED
              </span>
            </div>
          </div>

          {/* 6 Grid Milestones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {STATS.map((stat, idx) => (
              <StatCard
                key={stat.code}
                stat={stat}
                index={idx}
                isDashboardVisible={isInView}
                gravityMultiplier={gravityMultiplier}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
