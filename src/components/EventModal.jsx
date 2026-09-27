import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Calendar, 
  MapPin, 
  Trophy, 
  Sparkles, 
  CheckCircle2, 
  Terminal 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';
import MagneticButton from './MagneticButton';

export default function EventModal({ event, onClose, onOpenJoinModal }) {
  if (!event) return null;

  const handleRegisterInterest = () => {
    sound.playInitiate();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#8a2be2', '#ffffff', '#ff4655'],
    });

    setTimeout(() => {
      onClose();
      onOpenJoinModal();
    }, 450);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 320 }}
          className="relative w-full max-w-2xl glass-visor-elevated rounded-3xl p-6 sm:p-8 border border-cyan-400/40 shadow-[0_0_60px_rgba(0,240,255,0.25)] z-10 max-h-[92vh] overflow-y-auto no-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Tactical Status Pill */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              EVENT_DOSSIER // {event.id?.toUpperCase()}
            </span>
            <span className="font-mono text-[10px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-400/30">
              {event.status || 'VERIFIED'}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-extended font-bold text-2xl sm:text-3xl text-white mb-2">
            {event.title}
          </h2>

          {/* Quick Metrics Banner */}
          <div className="flex flex-wrap gap-4 py-3 my-4 border-y border-white/10 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-1.5 text-amber-400">
              <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{event.prize}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
              <span>{event.location}</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              Mission Directive & Scope
            </h4>
            <p className="text-sm text-slate-200 font-light leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Highlights */}
          {event.highlights && (
            <div className="mb-8">
              <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-3">
                Key Protocol Highlights
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {event.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="glass-visor p-3 rounded-xl border border-white/5 flex items-start gap-2.5 text-xs font-mono text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <MagneticButton
              onClick={handleRegisterInterest}
              strength={0.2}
              className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 text-slate-950 font-extended font-bold text-xs tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>TRANSMIT PARTICIPATION REQUEST</span>
            </MagneticButton>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl glass-visor hover:bg-white/[0.08] text-slate-300 font-mono text-xs border border-white/10 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
