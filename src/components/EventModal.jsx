import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Trophy, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EventModal({ event, onClose, onOpenJoinModal }) {
  if (!event) return null;

  const handleRegisterInterest = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#00f2fe', '#8b5cf6', '#ffffff']
    });
    alert(`Interest recorded for ${event.title}! You will be redirected to the team channel.`);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Category */}
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-[11px] font-mono font-semibold px-3 py-1 rounded-full uppercase tracking-wider bg-gradient-to-r ${event.accentColor} text-white`}>
              {event.badge}
            </span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/10">
              {event.type}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
            {event.description}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="glass-panel p-3.5 rounded-xl border border-white/10">
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5" /> Date / Window
              </div>
              <div className="text-xs font-semibold text-white">{event.date}</div>
            </div>

            <div className="glass-panel p-3.5 rounded-xl border border-white/10">
              <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5" /> Location
              </div>
              <div className="text-xs font-semibold text-white">{event.location}</div>
            </div>

            <div className="glass-panel p-3.5 rounded-xl border border-white/10">
              <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <Trophy className="w-3.5 h-3.5" /> Rewards
              </div>
              <div className="text-xs font-semibold text-amber-300">{event.prize}</div>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-8">
            <h4 className="font-heading font-bold text-sm text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Event Highlights & Protocols:
            </h4>
            <ul className="space-y-2.5">
              {event.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modal Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
            <button
              onClick={handleRegisterInterest}
              className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:scale-102 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Confirm Registration / Interest</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3 px-5 rounded-xl glass-panel text-slate-300 hover:text-white border border-white/10 text-sm font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
