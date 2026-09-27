import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Trophy, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Clock, 
  ExternalLink 
} from 'lucide-react';
import FloatingElement from './FloatingElement';
import TiltCard from './TiltCard';
import { EVENTS_DATA } from '../data/mockData';

const CATEGORIES = ['All', 'Hackathons', 'Workshops', 'Social Innovation', 'Keynotes'];

export default function Events({ onSelectEvent, onOpenJoinModal, gravityMultiplier = 1 }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents = selectedCategory === 'All'
    ? EVENTS_DATA
    : EVENTS_DATA.filter(event => event.category === selectedCategory);

  return (
    <section id="initiatives" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Glow Accents */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div 
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[180px] opacity-15"
          style={{ background: 'radial-gradient(circle, #00f2fe 0%, #8b5cf6 50%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <FloatingElement duration={5 / gravityMultiplier} distance={6} delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-400/30 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                Zero-Gravity Propulsion
              </div>
            </FloatingElement>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Flagship <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">Initiatives & Events</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light mt-3">
              Explore national hackathons, global challenges, and technical masterclasses orchestrated by ISTE NIT Hamirpur.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,242,254,0.4)]'
                    : 'glass-panel text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Staggered & Floating Cards Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
        >
          <AnimatePresence>
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="h-full"
              >
                {/* Asynchronous Floating Animation */}
                <FloatingElement
                  duration={(4.8 + (index % 3) * 0.8) / gravityMultiplier}
                  distance={8 + (index % 2) * 5}
                  delay={(index % 4) * 0.25}
                  className="h-full"
                >
                  <TiltCard 
                    className="h-full"
                    onClick={() => onSelectEvent(event)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.025 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="glass-panel-elevated p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between h-full group hover:shadow-[0_20px_45px_rgba(0,242,254,0.18)]"
                    >
                      {/* Top Badges */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className={`text-[11px] font-mono font-semibold px-3 py-1 rounded-full uppercase tracking-wider bg-gradient-to-r ${event.accentColor} text-white shadow-sm`}>
                            {event.badge}
                          </span>
                          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/10">
                            {event.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                          <span>{event.title}</span>
                          <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-300 font-light line-clamp-3 leading-relaxed mb-6">
                          {event.description}
                        </p>

                        {/* Event Meta Pills */}
                        <div className="space-y-2 mb-6 text-xs text-slate-300">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-purple-400" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-amber-300 font-medium">
                            <Trophy className="w-3.5 h-3.5 text-amber-400" />
                            <span>{event.prize}</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          {event.status}
                        </span>

                        <span className="text-xs font-medium text-slate-300 group-hover:text-cyan-300 transition-colors">
                          View Protocol →
                        </span>
                      </div>
                    </motion.div>
                  </TiltCard>
                </FloatingElement>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Hackathon Callout Banner */}
        <div className="mt-14 glass-panel-elevated p-8 rounded-3xl border border-cyan-500/30 relative overflow-hidden group shadow-[0_15px_40px_rgba(0,242,254,0.15)]">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Hackathon: HACK-O-FIESTA
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
                Have a breakthrough idea that defies gravity?
              </h3>
              <p className="text-sm text-slate-300 font-light">
                Registrations for HACK-O-FIESTA 5.0 are opening soon. Form your squad, review problem statements, and compete for ₹2.5 Lakhs in grants & prizes.
              </p>
            </div>

            <button
              onClick={() => onSelectEvent(EVENTS_DATA[0])}
              className="shrink-0 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 font-heading font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:scale-105 transition-all cursor-pointer"
            >
              Inspect HACK-O-FIESTA 5.0
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
