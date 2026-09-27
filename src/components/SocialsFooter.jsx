import React, { useState } from 'react';
import { 
  ExternalLink, 
  Heart, 
  Send, 
  MapPin, 
  Compass,
  ArrowUp,
  Radio,
  Activity
} from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import FloatingElement from './FloatingElement';
import MagneticButton from './MagneticButton';
import { sound } from '../utils/audio';
import { INSTAGRAM_POSTS, SOCIAL_LINKS } from '../data/mockData';

export default function SocialsFooter({ gravityMultiplier = 1 }) {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;

    sound.playInitiate();

    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#8a2be2', '#ff4655', '#ffffff'],
    });

    setSubscribed(true);
    setEmailInput('');
    setTimeout(() => setSubscribed(false), 4500);
  };

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="connect" className="relative pt-24 pb-12 px-4 sm:px-6 bg-[#030305] border-t border-white/10 overflow-hidden">
      {/* Background Cosmic Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div 
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[180px] opacity-20"
          style={{ background: 'radial-gradient(circle, #00f0ff 0%, #8a2be2 50%, #ff4655 100%)' }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[170px] opacity-15"
          style={{ background: 'radial-gradient(circle, #8a2be2 0%, #ff4655 50%, #00f0ff 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Instagram Flagship Section - Heavily Emphasized */}
        <div className="mb-20">
          <div className="glass-visor-elevated p-8 sm:p-12 rounded-3xl border border-cyan-500/25 relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
            {/* Subtle Neon Radial inside */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
              <div className="max-w-2xl">
                <FloatingElement duration={4 / gravityMultiplier} distance={5}>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(0,240,255,0.25)]">
                    <InstagramIcon className="w-3.5 h-3.5 text-cyan-400" />
                    OFFICIAL SOCIAL TRANSMISSION // @TEAMISTENITH
                  </div>
                </FloatingElement>

                <h2 className="font-extended font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
                  FOLLOW THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 text-glow-cyan">NEXUS REELS</span> & STORIES
                </h2>
                <p className="text-slate-300 text-sm sm:text-base font-light mt-3 leading-relaxed">
                  Real-time hackathon sprints, backstage setup, induction updates, and technical reels from the heart of NIT Hamirpur.
                </p>
              </div>

              {/* Follow Button */}
              <div className="shrink-0">
                <MagneticButton
                  href="https://www.instagram.com/teamistenith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  strength={0.25}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 text-slate-950 font-extended font-bold text-xs tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.45)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] flex items-center gap-2"
                >
                  <InstagramIcon className="w-4 h-4 text-slate-950" />
                  <span>COMMENCE FREQUENCY // @TEAMISTENITH</span>
                  <ExternalLink className="w-4 h-4 text-slate-950" />
                </MagneticButton>
              </div>
            </div>

            {/* Instagram Posts Mock Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {INSTAGRAM_POSTS.map((post, idx) => (
                <FloatingElement
                  key={post.id}
                  duration={(4.2 + idx * 0.4) / gravityMultiplier}
                  distance={6 + (idx % 2) * 3}
                  delay={idx * 0.1}
                >
                  <a
                    href="https://www.instagram.com/teamistenith/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    className="block group h-full"
                  >
                    <div className="glass-visor p-5 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between h-full group-hover:shadow-[0_10px_30px_rgba(0,240,255,0.2)]">
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                          <span className="text-cyan-400 font-semibold">{post.tag}</span>
                          <span>{post.date}</span>
                        </div>
                        <h4 className="font-extended font-bold text-sm text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-slate-300 font-light line-clamp-3 leading-relaxed">
                          {post.caption}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1.5 text-rose-400">
                          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                          {post.likes}
                        </span>
                        <span className="text-cyan-400 group-hover:underline flex items-center gap-1">
                          View Post &rarr;
                        </span>
                      </div>
                    </div>
                  </a>
                </FloatingElement>
              ))}
            </div>
          </div>
        </div>

        {/* Global Hub Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Lore (5 cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/50 flex items-center justify-center">
                <Radio className="w-5 h-5 text-cyan-300 animate-pulse" />
              </div>
              <span className="font-extended font-bold text-lg text-white">
                ISTE <span className="text-cyan-400">NITH</span>
              </span>
            </div>

            <p className="text-slate-300 text-sm font-light leading-relaxed max-w-sm mb-6">
              Indian Society for Technical Education (ISTE) Students’ Chapter at National Institute of Technology Hamirpur. Operating an anti-gravity tech nexus for creators and algorithmic thinkers.
            </p>

            <div className="space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>NIT Hamirpur, Himachal Pradesh - 177005, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-purple-400 shrink-0" />
                <span>COORDINATES: 31.7084° N, 76.5273° E // ELEV. 920M</span>
              </div>
            </div>
          </div>

          {/* Col 2: Channels (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-extended font-bold text-xs uppercase tracking-widest text-white mb-4">
              TELEMETRY CHANNELS
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    className="text-slate-300 hover:text-cyan-300 transition-colors flex items-center gap-2"
                  >
                    <span className="text-cyan-400">&gt;</span>
                    <span>{link.name} ({link.handle})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Transmit Newsletter Uplink (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="font-extended font-bold text-xs uppercase tracking-widest text-white mb-4">
              SUBSCRIBE TO MISSION DISPATCH
            </h4>
            <p className="text-slate-300 text-xs font-light mb-4 leading-relaxed">
              Receive orbital signals on upcoming national hackathons, bootcamp access keys, and guest speaker announcements.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="operative@email.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl glass-visor border border-white/10 focus:border-cyan-400/70 focus:outline-none text-xs font-mono text-white placeholder:text-slate-600 transition-colors"
                />
                <MagneticButton
                  type="submit"
                  strength={0.2}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-300 text-slate-950 font-mono text-xs font-bold shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                >
                  <Send className="w-3.5 h-3.5" />
                </MagneticButton>
              </div>
              {subscribed && (
                <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 pt-1">
                  <Activity className="w-3.5 h-3.5" />
                  Uplink established. Telemetry subscription confirmed!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Credits & Floating Back to Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} ISTE Students' Chapter NIT Hamirpur. Zero-Gravity Cyber-Nexus.
          </div>

          <div className="flex items-center gap-4">
            <MagneticButton
              onClick={scrollToTop}
              strength={0.3}
              className="px-4 py-2 rounded-xl glass-visor hover:bg-white/[0.08] text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all flex items-center gap-2"
              title="Launch to Orbit Peak"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>RETURN TO LAUNCHPAD</span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
