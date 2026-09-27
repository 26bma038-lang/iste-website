import React, { useState } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionBriefing from './components/MissionBriefing';
import TelemetryStats from './components/TelemetryStats';
import ActiveOrbit from './components/ActiveOrbit';
import FlightPath from './components/FlightPath';
import AgentRoster from './components/AgentRoster';
import GravitySandbox from './components/GravitySandbox';
import SocialsFooter from './components/SocialsFooter';
import EventModal from './components/EventModal';
import JoinModal from './components/JoinModal';
import { Compass } from 'lucide-react';
import { sound } from './utils/audio';

const MODE_MULTIPLIERS = {
  zero: 0.65,
  moon: 1.0,
  mars: 1.45,
  warp: 2.1,
};

export default function App() {
  const [gravityMode, setGravityMode] = useState('zero');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [initiateModalOpen, setInitiateModalOpen] = useState(false);

  const gravityMultiplier = MODE_MULTIPLIERS[gravityMode] || 1.0;

  const handleToggleGravity = () => {
    sound.playClick();
    const modes = ['zero', 'moon', 'mars', 'warp'];
    const nextIdx = (modes.indexOf(gravityMode) + 1) % modes.length;
    setGravityMode(modes[nextIdx]);
  };

  return (
    <div className="relative min-h-screen bg-[#030305] text-slate-100 overflow-x-hidden space-grid-bg selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. Interactive Zero-G Stardust & Data Node Canvas */}
      <ParticleCanvas />

      {/* 2. The Orbital HUD (Floating Detached Pill Navbar) */}
      <Navbar
        onOpenInitiateModal={() => setInitiateModalOpen(true)}
        gravityMode={gravityMode}
        onToggleGravity={handleToggleGravity}
      />

      {/* Main Semantic Architecture */}
      <main className="relative z-10">
        {/* Section 1: The Launchpad (Hero with 3D Mouse Tilt Typography & Floating Geometries) */}
        <Hero
          onOpenInitiateModal={() => setInitiateModalOpen(true)}
          gravityMultiplier={gravityMultiplier}
        />

        {/* Section 2: Mission Briefing (System Override Terminal with Asymmetrical Floating Cards) */}
        <MissionBriefing
          onOpenInitiateModal={() => setInitiateModalOpen(true)}
          gravityMultiplier={gravityMultiplier}
        />

        {/* Section 3: Telemetry & High Scores (Stats Grid with Rapid Count-Up & Scanning Laser Line) */}
        <TelemetryStats
          gravityMultiplier={gravityMultiplier}
        />

        {/* Section 4: Active Orbit (Horizontally Scrolling Track of Levitating Domain Cards) */}
        <ActiveOrbit
          onOpenInitiateModal={() => setInitiateModalOpen(true)}
          gravityMultiplier={gravityMultiplier}
        />

        {/* Section 5: The Flight Path (Vertical Roadmap with Glowing Pulsing Neon Tether) */}
        <FlightPath
          onSelectEvent={(evt) => setSelectedEvent(evt)}
          gravityMultiplier={gravityMultiplier}
        />

        {/* Section 6: The Roster (Tactical Agent Select Screen with Tall Cards & Floating Cutouts) */}
        <AgentRoster
          gravityMultiplier={gravityMultiplier}
        />

        {/* Section 7: The Anti-Gravity Chamber / Tech Lab */}
        <GravitySandbox
          currentMode={gravityMode}
          setGravityMode={setGravityMode}
          gravityMultiplier={gravityMultiplier}
        />
      </main>

      {/* Tactical Comms Footer & Instagram Nexus */}
      <SocialsFooter
        onOpenInitiateModal={() => setInitiateModalOpen(true)}
        gravityMultiplier={gravityMultiplier}
      />

      {/* Floating Tactical Field Switcher Pill at Bottom Left */}
      <div className="fixed bottom-5 left-5 z-40 hidden sm:block">
        <button
          onClick={handleToggleGravity}
          className="glass-visor px-3.5 py-2 rounded-xl border border-white/10 hover:border-cyan-400/50 text-xs font-mono text-slate-300 flex items-center gap-2.5 shadow-xl hover:bg-white/[0.08] transition-all cursor-pointer group"
          title="Click to alternate gravitational regime"
        >
          <Compass className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-90 transition-transform" />
          <span>FIELD: <strong className="text-cyan-300 uppercase">{gravityMode}</strong></span>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        </button>
      </div>

      {/* Modals */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onOpenJoinModal={() => {
          setSelectedEvent(null);
          setInitiateModalOpen(true);
        }}
      />

      <JoinModal
        isOpen={initiateModalOpen}
        onClose={() => setInitiateModalOpen(false)}
      />
    </div>
  );
}
