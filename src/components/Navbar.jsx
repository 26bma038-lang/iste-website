import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Terminal, 
  Radio
} from 'lucide-react';
import MagneticButton from './MagneticButton';
import { sound } from '../utils/audio';

const NAV_ITEMS = [
  { name: 'MISSION_LOG', href: '#mission-log', label: '01 // BRIEFING' },
  { name: 'INITIATIVES', href: '#initiatives', label: '02 // ORBIT' },
  { name: 'TELEMETRY', href: '#telemetry', label: '03 // METRICS' },
  { name: 'ROSTER', href: '#roster', label: '04 // OPERATIVES' },
];

export default function Navbar({ onOpenInitiateModal, gravityMode, onToggleGravity }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(sound.isMuted());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) sound.playClick();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-6xl rounded-full sm:rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'glass-visor-elevated py-2.5 px-4 sm:px-6 border-cyan-400/30 shadow-[0_15px_40px_rgba(0,0,0,0.8)] neon-glow-cyan'
            : 'glass-visor py-3 px-4 sm:px-6 border-white/10'
        } flex items-center justify-between gap-2 sm:gap-4`}
      >
        {/* Brand Holographic Insignia */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus:outline-none"
          onMouseEnter={() => sound.playHover()}
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-crimson/20 border border-cyan-400/50 flex items-center justify-center overflow-hidden group-hover:border-cyan-300 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            <Radio className="w-5 h-5 text-cyan-300 group-hover:rotate-45 transition-transform" />
            <div className="absolute inset-0 bg-cyan-400/10 blur-xs rounded-xl" />
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="font-extended font-bold text-sm sm:text-base tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                ISTE <span className="text-cyan-400">NITH</span>
              </span>
              <span className="hidden xl:inline-flex text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30">
                SYS.ONLINE
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
              ZERO-G NEXUS
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map((link) => (
            <MagneticButton
              key={link.name}
              href={link.href}
              strength={0.2}
              className="px-3.5 py-1.5 text-xs font-mono font-semibold tracking-wider text-slate-300 hover:text-cyan-300 rounded-lg hover:bg-white/[0.05] transition-all relative group"
            >
              <span className="text-slate-500 group-hover:text-cyan-400/70 transition-colors">[ </span>
              {link.name}
              <span className="text-slate-500 group-hover:text-cyan-400/70 transition-colors"> ]</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full group-hover:w-2/3 transition-all duration-300 shadow-[0_0_8px_#00f0ff]" />
            </MagneticButton>
          ))}
        </div>

        {/* Tactical Controls & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Audio Telemetry Toggle */}
          <button
            onClick={handleToggleSound}
            className="p-2 rounded-xl text-slate-400 hover:text-cyan-300 hover:bg-white/[0.06] border border-white/5 hover:border-cyan-400/30 transition-all cursor-pointer"
            title={isMuted ? 'Unmute Tactical Audio' : 'Mute Tactical Audio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
          </button>

          {/* Zero-G Field Mode */}
          <button
            onClick={onToggleGravity}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/10 hover:border-cyan-400/40 transition-all cursor-pointer group"
            title="Toggle Anti-Gravity Field State"
          >
            <Compass className={`w-3.5 h-3.5 text-cyan-400 ${gravityMode === 'warp' ? 'animate-spin' : ''}`} />
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
              FIELD: <strong className="text-cyan-300">{gravityMode}</strong>
            </span>
          </button>

          {/* Glowing CTA: INITIATE SEQUENCE */}
          <MagneticButton
            onClick={() => {
              sound.playInitiate();
              onOpenInitiateModal();
            }}
            strength={0.25}
            className="relative px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-xs font-extended font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 border border-cyan-200/50 shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.8)] transition-all overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/25 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="relative flex items-center gap-1.5 sm:gap-2">
              <Sparkles className="w-3.5 h-3.5 text-slate-950 animate-pulse" />
              <span className="tracking-wider">INITIATE SEQUENCE</span>
            </div>
          </MagneticButton>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Tactical Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto fixed inset-x-4 top-20 z-50 glass-visor-elevated p-6 rounded-3xl border border-cyan-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] lg:hidden flex flex-col gap-4 max-w-lg mx-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                TACTICAL_OVERLAY_HUD
              </span>
              <span className="text-[10px] font-mono text-slate-400">STATUS: READY</span>
            </div>

            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    sound.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-400/30 text-sm font-mono text-slate-200 transition-all"
                >
                  <span className="font-semibold text-white tracking-wider">[ {link.name} ]</span>
                  <span className="text-[11px] text-slate-400 font-mono">{link.label}</span>
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  onToggleGravity();
                  sound.playClick();
                }}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/[0.04] text-xs font-mono text-slate-300 border border-white/10"
              >
                <span className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  GRAVITY REGIME:
                </span>
                <span className="text-cyan-300 font-bold uppercase">{gravityMode}</span>
              </button>

              <button
                onClick={() => {
                  sound.playInitiate();
                  setMobileMenuOpen(false);
                  onOpenInitiateModal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-300 text-slate-950 font-extended font-bold text-xs tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                INITIATE SEQUENCE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
