import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, CheckCircle2, Orbit } from 'lucide-react';
import confetti from 'canvas-confetti';

const DOMAINS = [
  'Web & App Development',
  'AI / Machine Learning & Data Science',
  'UI/UX & Spatial Design',
  'Event Management & Logistics',
  'Corporate Relations & Sponsorships',
  'Media, Photography & Video Editing',
];

export default function JoinModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNo: '',
    year: '1st Year',
    domain: DOMAINS[0],
    statement: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#00f2fe', '#8b5cf6', '#f97316', '#3b82f6', '#ffffff']
    });
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
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
          className="relative w-full max-w-xl glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-10 max-h-[92vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                  <Orbit className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">
                  Orbit Induction 2026
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
                Enter Zero-Gravity with <span className="text-cyan-400">ISTE NITH</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light mb-6">
                Join NIT Hamirpur's foremost technical society. Fill in your details to be notified about recruitment rounds and informal mixers.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sahil Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Student Email (@nith.ac.in)</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="roll@nith.ac.in"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 font-mono text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Roll Number & Dept</label>
                    <input
                      type="text"
                      required
                      value={formData.rollNo}
                      onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                      placeholder="e.g. 24BCSE042 (CSE)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 font-mono text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Academic Year</label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                    >
                      <option value="1st Year">1st Year (Freshers)</option>
                      <option value="2nd Year">2nd Year (Sophomores)</option>
                      <option value="3rd Year">3rd Year (Juniors)</option>
                      <option value="Dual Degree / PG">Dual Degree / PG</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Primary Domain of Passion</label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                  >
                    {DOMAINS.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Why do you want to join ISTE NITH?</label>
                  <textarea
                    rows={3}
                    value={formData.statement}
                    onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                    placeholder="Tell us what you're excited to learn, build, or organize in zero-gravity..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 font-heading font-bold text-sm shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:scale-102 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Transmit Application</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center text-cyan-400 mx-auto mb-4 shadow-[0_0_30px_rgba(0,242,254,0.4)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                Transmission Acknowledged!
              </h3>
              <p className="text-sm text-slate-300 font-light max-w-sm mx-auto mb-6">
                Thank you, <span className="text-cyan-300 font-medium">{formData.name}</span>. Your application for <span className="text-white font-medium">{formData.domain}</span> has been broadcast to the ISTE NITH Core Executive team.
              </p>

              <div className="glass-panel p-4 rounded-xl border border-white/10 max-w-sm mx-auto mb-6 text-xs text-slate-400">
                Check your student inbox at <span className="text-cyan-300 font-mono">{formData.email}</span> for orientation schedules.
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-mono tracking-wide transition-colors cursor-pointer"
              >
                Return to Campus Portal
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
