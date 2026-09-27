import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import GravitySandbox from './components/GravitySandbox';
import SocialsFooter from './components/SocialsFooter';
import EventModal from './components/EventModal';
import JoinModal from './components/JoinModal';
import { Compass, Sparkles } from 'lucide-react';

const MODE_MULTIPLIERS = {
  zero: 0.65,
  moon: 1.0,
  mars: 1.45,
  warp: 2.1,
};

export default function App() {
  const [gravityMode, setGravityMode] = useState('moon');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  const gravityMultiplier = MODE_MULTIPLIERS[gravityMode] || 1.0;

  const handleToggleGravity = () => {
    const modes = ['zero', 'moon', 'mars', 'warp'];
    const nextIdx = (modes.indexOf(gravityMode) + 1) % modes.length;
    setGravityMode(modes[nextIdx]);
  };

  return (
    <div className="relative min-h-screen bg-[#05070f] text-slate-100 overflow-x-hidden space-grid-bg">
      {/* Background Star / Tech Dust Sparkles */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40">
        <div className="absolute top-[15%] left-[20%] w-1.5 h-1.5 rounded-full bg-cyan-400 blur-[0.5px] animate-pulse" />
        <div className="absolute top-[35%] right-[25%] w-1 h-1 rounded-full bg-fuchsia-400 blur-[0.5px] animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[60%] left-[10%] w-2 h-2 rounded-full bg-blue-400 blur-[1px] animate-pulse" />
        <div className="absolute top-[80%] right-[15%] w-1.5 h-1.5 rounded-full bg-amber-400 blur-[0.5px] animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[45%] left-[45%] w-1 h-1 rounded-full bg-cyan-300 blur-[0.5px]" />
      </div>

      {/* Floating Header */}
      <Navbar
        onOpenJoinModal={() => setJoinModalOpen(true)}
        gravityMode={gravityMode}
        onToggleGravity={handleToggleGravity}
      />

      {/* Main Semantic Content */}
      <main className="relative z-10">
        {/* Dramatic Zero-G Hero Section */}
        <Hero
          onOpenJoinModal={() => setJoinModalOpen(true)}
          gravityMultiplier={gravityMultiplier}
        />

        {/* Asymmetrical Floating About Us Grid */}
        <About
          onOpenJoinModal={() => setJoinModalOpen(true)}
          gravityMultiplier={gravityMultiplier}
        />

        {/* Flagship Initiatives & Events */}
        <Events
          onSelectEvent={(evt) => setSelectedEvent(evt)}
          onOpenJoinModal={() => setJoinModalOpen(true)}
          gravityMultiplier={gravityMultiplier}
        />

        {/* Interactive Anti-Gravity Chamber / Tech Lab */}
        <GravitySandbox
          currentMode={gravityMode}
          setGravityMode={setGravityMode}
          gravityMultiplier={gravityMultiplier}
        />
      </main>

      {/* Visually Striking Footer heavily emphasizing Instagram */}
      <SocialsFooter
        onOpenJoinModal={() => setJoinModalOpen(true)}
        gravityMultiplier={gravityMultiplier}
      />

      {/* Floating Quick Gravity Mode Indicator Pill at Bottom Left */}
      <div className="fixed bottom-5 left-5 z-40 hidden sm:block">
        <button
          onClick={handleToggleGravity}
          className="glass-panel px-3.5 py-2 rounded-xl border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-slate-300 flex items-center gap-2.5 shadow-xl hover:bg-white/[0.08] transition-all cursor-pointer group"
          title="Click to switch gravitational field"
        >
          <Compass className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-90 transition-transform" />
          <span>Field: <strong className="text-cyan-300 uppercase">{gravityMode}</strong></span>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        </button>
      </div>

      {/* Modals */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onOpenJoinModal={() => {
          setSelectedEvent(null);
          setJoinModalOpen(true);
        }}
      />

      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
      />
    </div>
  );
}
