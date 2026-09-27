import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Orbit, Compass, ExternalLink } from 'lucide-react';
import { NAV_LINKS } from '../data/mockData';

export default function Navbar({ onOpenJoinModal, gravityMode, onToggleGravity }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`w-full max-w-6xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'glass-panel-elevated py-3 px-5 sm:px-6 shadow-[0_10px_35px_rgba(0,0,0,0.6)] border-cyan-500/20'
            : 'glass-panel py-3.5 px-5 sm:px-7 border-white/10'
        } flex items-center justify-between gap-4`}
      >
        {/* Brand Emblem */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-orange-500/20 border border-cyan-400/40 flex items-center justify-center overflow-hidden group-hover:border-cyan-300 transition-colors shadow-[0_0_15px_rgba(0,242,254,0.3)]">
            <Orbit className="w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: '14s' }} />
            <div className="absolute inset-0 bg-cyan-400/10 blur-sm rounded-xl" />
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                ISTE <span className="text-cyan-400">NITH</span>
              </span>
              <span className="hidden md:inline-flex text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                NIT Hamirpur
              </span>
            </div>
            <span className="text-[11px] text-slate-400 tracking-wider uppercase font-medium">
              Students' Chapter
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200 relative group"
            >
              {link.name}
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Zero-G Mode Switcher Button */}
          <button
            onClick={onToggleGravity}
            title="Toggle Anti-Gravity Physics"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/10 hover:border-cyan-400/40 transition-all cursor-pointer group"
          >
            <Compass className={`w-3.5 h-3.5 text-cyan-400 transition-transform ${gravityMode === 'warp' ? 'rotate-180 animate-spin' : ''}`} />
            <span className="capitalize">{gravityMode} Drift</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </button>

          {/* Join CTA */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 242, 254, 0.45)' }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenJoinModal}
            className="relative inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 rounded-xl overflow-hidden shadow-[0_0_18px_rgba(0,242,254,0.3)] transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Join Community</span>
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-4 top-24 glass-panel-elevated rounded-2xl p-5 border border-cyan-500/20 shadow-2xl z-50"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-slate-200 hover:text-cyan-300 rounded-xl hover:bg-white/[0.06] transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    onToggleGravity();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between px-4 py-2 rounded-xl bg-white/[0.04] text-xs font-mono text-slate-300 border border-white/10"
                >
                  <span className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-cyan-400" />
                    Physics Mode: {gravityMode}
                  </span>
                  <span className="text-cyan-400">Switch</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenJoinModal();
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.3)]"
                >
                  <Sparkles className="w-4 h-4" />
                  Join the Community
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
