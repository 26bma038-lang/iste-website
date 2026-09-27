import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  ArrowUpRight, 
  Clock, 
  Zap 
} from 'lucide-react';
import FloatingElement from './FloatingElement';
import { sound } from '../utils/audio';

const FLIGHT_EVENTS = [
  {
    id: 'hackofiesta',
    title: 'HACK-O-FIESTA 5.0',
    category: 'Hackathons',
    type: 'Flagship Hackathon',
    badge: '36-Hour National Sprint',
    date: 'March 2026',
    status: 'UPCOMING // REGISTRATION OPEN',
    location: 'Auditorium & Virtual / NIT Hamirpur',
    prize: '₹2,50,000+ Prize Pool',
    description: 'The pinnacle hackathon of NIT Hamirpur. Over 1,000 developers, designers, and innovators unite for 36 hours of continuous zero-gravity code, AI agent sprints, and hardware prototyping.',
    highlights: [
      'FAANG & Unicorn engineers mentorship on site',
      'Special tracks: GenAI & RAG, Web3/Systems, FinTech, & Open Innovation',
      'Exclusive swags, energy drinks & late night gaming lounge',
      'Fast-track hiring & internship interviews with sponsors',
    ],
    accentBorder: 'hover:border-cyan-400 group-hover:shadow-[0_0_35px_rgba(0,240,255,0.4)]',
    badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/30',
  },
  {
    id: 'hult-prize',
    title: 'Hult Prize @ NIT Hamirpur',
    category: 'Social Innovation',
    type: 'Global Competition',
    badge: '$1M Global Challenge',
    date: 'November 2025 - January 2026',
    status: 'GLOBAL REGIONAL STAGE',
    location: 'Civil Dept Hall, NITH',
    prize: '$1,000,000 Seed Fund',
    description: 'The "Nobel Prize for Students". We host the official preliminary rounds at NIT Hamirpur, helping student founders formulate sustainable business models aimed at planetary impact.',
    highlights: [
      'Pitch deck reviews with venture capitalists & angel investors',
      'Direct pathway to Regional Summits in London, Dubai, and Nairobi',
      'Workshops on unit economics and social return on investment',
      'Mentorship from serial founders and social impact leaders',
    ],
    accentBorder: 'hover:border-rose-500 group-hover:shadow-[0_0_35px_rgba(255,70,85,0.4)]',
    badgeColor: 'bg-rose-500/10 text-rose-300 border-rose-400/30',
  },
  {
    id: 'nexus-devcamp',
    title: 'NEXUS: Web & Cloud DevCamp',
    category: 'Workshops',
    type: 'Interactive Bootcamp',
    badge: 'Hands-on Code Sprint',
    date: 'Semester Cycle',
    status: 'ACTIVE REGISTRATION',
    location: 'Computer Centre Labs, NITH',
    prize: 'Certificates & Core Team Fast-Track',
    description: 'Comprehensive 2-week developer bootcamp taking students from JavaScript and TypeScript foundations to Next.js 15, Docker, Kubernetes, and distributed edge architectures.',
    highlights: [
      'Build & deploy a full-stack production application to production',
      'Industry CI/CD pipelines, Git branching, clean architecture',
      'Peer code reviews and mentor office hours',
      'Top performers inducted directly into ISTE NITH Core Technical Team',
    ],
    accentBorder: 'hover:border-purple-400 group-hover:shadow-[0_0_35px_rgba(138,43,226,0.4)]',
    badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-400/30',
  },
  {
    id: 'neuron-ai',
    title: 'NEURON: AI & GenAI Conclave',
    category: 'Workshops',
    type: 'AI Masterclass & Hack',
    badge: 'Deep Learning & LLMs',
    date: 'October 2026',
    status: 'UPCOMING',
    location: 'Lecture Hall Complex & Online',
    prize: 'Kaggle Badges & Cloud Credits',
    description: 'Immersive crash course and hack-sprint focusing on Retrieval-Augmented Generation (RAG), Fine-Tuning LLMs, Computer Vision, and autonomous agent workflows.',
    highlights: [
      'Hands-on with PyTorch, LangChain, and Hugging Face pipelines',
      'Free high-compute GPU credits provided for all participants',
      'Real-world case studies in autonomous robotics and medicine AI',
      'Interactive Q&A with AI Research Fellows',
    ],
    accentBorder: 'hover:border-cyan-400 group-hover:shadow-[0_0_35px_rgba(0,240,255,0.4)]',
    badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/30',
  },
  {
    id: 'tech-horizon',
    title: 'Tech Horizon: Global Speaker Series',
    category: 'Keynotes',
    type: 'Distinguished Lectures',
    badge: 'Silicon Valley & Beyond',
    date: 'Monthly Series',
    status: 'REGULAR TELECAST',
    location: 'Virtual Amphitheatre & YouTube',
    prize: 'Open to All',
    description: 'Inspiring interactive fireside chats with leaders who shape modern tech. Listen to career roadmaps, cutting edge tech revelations, and post-grad journeys.',
    highlights: [
      'Past speakers from Google DeepMind, Microsoft Research, Uber',
      'Insights into higher education (MS/PhD in US, Europe)',
      'Open microphone audience Q&A session',
      'Archived recorded sessions for community members',
    ],
    accentBorder: 'hover:border-cyan-400 group-hover:shadow-[0_0_35px_rgba(0,240,255,0.4)]',
    badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/30',
  },
  {
    id: 'pixel-sprint',
    title: 'PIXEL: Spatial UI/UX Design Sprint',
    category: 'Workshops',
    type: 'Design Sprint',
    badge: 'Figma to 60fps Frontend',
    date: 'August 2026',
    status: 'UPCOMING',
    location: 'Studio Hall, NITH',
    prize: 'Creative Design Toolkit',
    description: 'Bridging the gap between aesthetics and engineering. Learn typography, spatial design, glassmorphism, micro-animations, design tokens, and user psychology.',
    highlights: [
      'Figma design systems and auto-layout mastery',
      'Crafting 60fps animations with Framer Motion',
      'Accessibility (a11y) and responsive grid principles',
      'Portfolio critique and design challenge rewards',
    ],
    accentBorder: 'hover:border-purple-400 group-hover:shadow-[0_0_35px_rgba(138,43,226,0.4)]',
    badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-400/30',
  },
];

export default function FlightPath({ onSelectEvent, gravityMultiplier = 1 }) {
  return (
    <section id="flight-path" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Spatial Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[800px] rounded-full blur-[200px] opacity-15"
          style={{ background: 'radial-gradient(circle, #00f0ff 0%, #8a2be2 50%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <FloatingElement duration={5 / gravityMultiplier} distance={6} delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-visor border border-cyan-400/40 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(0,240,255,0.25)]">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              THE FLIGHT PATH // TIMELINE & ROADMAP
            </div>
          </FloatingElement>

          <h2 className="font-extended font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
            CHRONOLOGICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 text-glow-cyan">FLIGHT PATH</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Follow our trajectory through annual national hackathons, global seed challenges, and hands-on developer masterclasses orbiting NIT Hamirpur.
          </p>
        </div>

        {/* Roadmap Vertical Container with Central Glowing Tether */}
        <div className="relative">
          {/* Central Glowing Pulsing Neon Tether Axis (Zero-G Neon Wire) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[3px] rounded-full bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 animate-tether z-0">
            {/* Animated Data Stream Flow down the wire */}
            <div className="absolute inset-0 data-stream-wire opacity-80" />
          </div>

          {/* Event Nodes List */}
          <div className="space-y-12 sm:space-y-16">
            {FLIGHT_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={event.id}
                  className="relative flex flex-col md:flex-row items-center w-full"
                >
                  {/* Central Tether Data Stream Node Connector */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="relative w-8 h-8 rounded-full bg-[#030305] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_#00f0ff]">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 animate-ping" />
                      <div className="absolute w-2 h-2 rounded-full bg-cyan-400" />
                    </div>
                  </div>

                  {/* Horizontal Data Stream connecting line (desktop) */}
                  <div
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] w-[60px] bg-gradient-to-r ${
                      isEven
                        ? 'right-1/2 from-transparent to-cyan-400'
                        : 'left-1/2 from-cyan-400 to-transparent'
                    } z-10 pointer-events-none`}
                  />

                  {/* Node Content Container (Left or Right on desktop) */}
                  <div
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                      isEven ? 'md:pr-14 md:text-right' : 'md:pl-14 md:ml-auto'
                    }`}
                  >
                    <FloatingElement
                      duration={(5.5 + (index % 3) * 0.7) / gravityMultiplier}
                      distance={8 + (index % 2) * 4}
                      delay={index * 0.15}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        onClick={() => {
                          sound.playClick();
                          if (onSelectEvent) onSelectEvent(event);
                        }}
                        onMouseEnter={() => sound.playHover()}
                        className={`group cursor-pointer glass-visor-elevated p-6 sm:p-7 rounded-3xl border border-white/10 ${event.accentBorder} transition-all duration-300 shadow-xl relative overflow-hidden`}
                      >
                        {/* Event Header Status */}
                        <div
                          className={`flex flex-wrap items-center gap-2 mb-3 ${
                            isEven ? 'md:justify-end' : 'justify-start'
                          }`}
                        >
                          <span
                            className={`font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${event.badgeColor}`}
                          >
                            {event.badge}
                          </span>
                          <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-cyan-400" />
                            {event.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-extended font-bold text-xl sm:text-2xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {event.title}
                        </h3>

                        {/* Prize / Type readout */}
                        <div
                          className={`flex items-center gap-2 mb-3 text-xs font-mono font-semibold text-amber-400 ${
                            isEven ? 'md:justify-end' : 'justify-start'
                          }`}
                        >
                          <Trophy className="w-3.5 h-3.5 text-amber-400" />
                          <span>{event.prize}</span>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-sm font-light leading-relaxed mb-4">
                          {event.description}
                        </p>

                        {/* Highlights checklist */}
                        <div className="space-y-1.5 mb-5 text-xs text-slate-400 font-mono">
                          {event.highlights.slice(0, 2).map((item) => (
                            <div
                              key={item}
                              className={`flex items-center gap-2 ${
                                isEven ? 'md:justify-end' : 'justify-start'
                              }`}
                            >
                              <span className="text-cyan-400">&gt;</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* Footer Link */}
                        <div
                          className={`flex items-center gap-2 text-xs font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors ${
                            isEven ? 'md:justify-end' : 'justify-start'
                          }`}
                        >
                          <span>INSPECT DOSSIER</span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      </motion.div>
                    </FloatingElement>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
