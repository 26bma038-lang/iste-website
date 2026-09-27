import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Terminal, 
  Radio 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';
import MagneticButton from './MagneticButton';

const DIVISIONS = [
  'Web Infrastructure & Cloud Systems',
  'Competitive Programming & Algorithms',
  'AI & RAG Agentic Architecture',
  'UI/UX & Zero-G Spatial Design',
  'Cyber Security & Kernel Exploration',
  'Robotics & Hardware Telemetry',
  'Mission Operations & Corporate Alliances',
];

export default function JoinModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNo: '',
    division: DIVISIONS[0],
    statement: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [passCode] = useState(() => `NX-${Math.floor(1000 + Math.random() * 9000)}`);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playInitiate();

    confetti({
      particleCount: 120,
      spread: 85,
      origin: { y: 0.55 },
      colors: ['#00f0ff', '#8a2be2', '#ff4655', '#ffffff'],
    });

    setSubmitted(true);
  };

  const handleReset = () => {
    sound.playClick();
    setSubmitted(false);
    onClose();
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

          {!submitted ? (
            <div>
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  INITIATE_SEQUENCE // CADET_ONBOARDING
                </span>
                <span className="font-mono text-[10px] text-slate-500">
                  CODE: {passCode}
                </span>
              </div>

              <h2 className="font-extended font-bold text-2xl sm:text-3xl text-white mb-2 tracking-tight">
                JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-glow-cyan">ORBIT</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-light mb-6">
                Broadcast your transmission to the ISTE NIT Hamirpur Central Command. Step beyond standard engineering into zero-gravity innovation.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Operative Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sahil Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl glass-visor border border-white/10 focus:border-cyan-400/70 focus:outline-none text-sm text-white font-mono placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Institutional / Personal Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="cadet@nith.ac.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl glass-visor border border-white/10 focus:border-cyan-400/70 focus:outline-none text-sm text-white font-mono placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Roll No */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Roll Number / Affiliation
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="24BCS001 / Dept."
                      value={formData.rollNo}
                      onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl glass-visor border border-white/10 focus:border-cyan-400/70 focus:outline-none text-sm text-white font-mono placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  {/* Division Selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Target Orbital Division
                    </label>
                    <select
                      value={formData.division}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl glass-visor border border-white/10 focus:border-cyan-400/70 focus:outline-none text-xs sm:text-sm text-slate-200 bg-[#060814] font-mono transition-colors"
                    >
                      {DIVISIONS.map((div) => (
                        <option key={div} value={div} className="bg-[#060814] text-white">
                          {div}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Statement of Innovation */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Mission Motivation // What will you build?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your technical passion, past projects, hackathon dreams, or what limits you want to defy..."
                    value={formData.statement}
                    onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl glass-visor border border-white/10 focus:border-cyan-400/70 focus:outline-none text-xs sm:text-sm text-white font-mono placeholder:text-slate-600 transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <MagneticButton
                    type="submit"
                    strength={0.2}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 text-slate-950 font-extended font-bold text-xs sm:text-sm tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] flex items-center justify-center gap-2 border border-cyan-200/50"
                  >
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>BROADCAST SEQUENCE TRANSMISSION</span>
                    <Send className="w-4 h-4 text-slate-950" />
                  </MagneticButton>
                </div>
              </form>
            </div>
          ) : (
            /* Confirmation Terminal */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/60 mx-auto flex items-center justify-center mb-6 shadow-[0_0_30px_#00f0ff]">
                <CheckCircle2 className="w-8 h-8 text-cyan-300" />
              </div>

              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30">
                CLEARANCE GRANTED // CODE {passCode}
              </span>

              <h2 className="font-extended font-bold text-2xl sm:text-3xl text-white mt-4 mb-3">
                TRANSMISSION <span className="text-cyan-400 text-glow-cyan">RECEIVED</span>
              </h2>

              <p className="text-slate-300 text-sm max-w-md mx-auto mb-8 font-light leading-relaxed">
                Welcome to the orbit, <strong className="text-white">{formData.name || 'Cadet'}</strong>. Your credentials have been queued in the chapter induction telemetry. Join our community frequency below for deployment updates.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://discord.gg/teamistenith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 text-white font-mono text-xs border border-purple-400/40 flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(138,43,226,0.3)]"
                >
                  <Radio className="w-4 h-4 text-purple-400" />
                  <span>Connect to Discord Comms</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl glass-visor hover:bg-white/[0.08] text-slate-300 font-mono text-xs border border-white/10 transition-colors"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
