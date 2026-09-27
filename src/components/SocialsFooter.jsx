import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  ExternalLink, 
  Heart, 
  Sparkles, 
  Send, 
  MapPin, 
  Compass,
  ArrowUp
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, GithubIcon, DiscordIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import FloatingElement from './FloatingElement';
import TiltCard from './TiltCard';
import { INSTAGRAM_POSTS, SOCIAL_LINKS } from '../data/mockData';

export default function SocialsFooter({ onOpenJoinModal, gravityMultiplier = 1 }) {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;

    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#00f2fe', '#8b5cf6', '#f97316', '#ffffff']
    });

    setSubscribed(true);
    setEmailInput('');
    setTimeout(() => setSubscribed(false), 4500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="connect" className="relative pt-24 pb-12 px-4 sm:px-6 bg-[#04060c] border-t border-white/10 overflow-hidden">
      {/* Background Cosmic Atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div 
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[180px] opacity-20"
          style={{ background: 'radial-gradient(circle, #00f2fe 0%, #8b5cf6 50%, #f97316 100%)' }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[170px] opacity-15"
          style={{ background: 'radial-gradient(circle, #e1306c 0%, #fd1d1d 50%, #fcb045 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Instagram Flagship Section - Heavily Emphasized */}
        <div className="mb-20">
          <div className="glass-panel-elevated p-8 sm:p-12 rounded-3xl border border-pink-500/25 relative overflow-hidden shadow-[0_25px_60px_rgba(225,48,108,0.15)]">
            {/* Subtle Neon Radial inside */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
              <div className="max-w-2xl">
                <FloatingElement duration={4 / gravityMultiplier} distance={5}>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-orange-500/20 border border-pink-400/40 text-xs font-mono text-pink-300 uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                    <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                    Official Social Feed • @teamistenith
                  </div>
                </FloatingElement>

                <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-3">
                  Follow Our Orbit on <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-amber-400 bg-clip-text text-transparent">Instagram</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  Experience the pulse of ISTE NIT Hamirpur. From hackathon hype reels and campus workshops to winner reveals and late-night tech sprints.
                </p>
              </div>

              {/* Direct Follow Instagram Button */}
              <motion.a
                href="https://www.instagram.com/teamistenith/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(225, 48, 108, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-heading font-bold text-base shadow-[0_0_25px_rgba(225,48,108,0.4)] transition-all cursor-pointer shrink-0"
              >
                <InstagramIcon className="w-5 h-5 text-white" />
                <span>Follow @teamistenith</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </motion.a>
            </div>

            {/* Instagram Posts / Reels Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {INSTAGRAM_POSTS.map((post, idx) => (
                <FloatingElement
                  key={post.id}
                  duration={(4.5 + idx * 0.6) / gravityMultiplier}
                  distance={7 + (idx % 2) * 4}
                  delay={idx * 0.15}
                >
                  <a
                    href="https://www.instagram.com/teamistenith/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="glass-panel p-5 rounded-2xl border border-white/10 group-hover:border-pink-500/40 transition-all duration-300 h-full flex flex-col justify-between group-hover:shadow-[0_10px_25px_rgba(225,48,108,0.2)]">
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                          <span className="font-mono text-pink-400">{post.tag}</span>
                          <span className="text-[11px]">{post.date}</span>
                        </div>
                        <h4 className="font-heading font-bold text-base text-white group-hover:text-pink-300 transition-colors mb-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-slate-300 font-light line-clamp-3 leading-relaxed mb-4">
                          "{post.caption}"
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400 flex items-center gap-1.5">
                          <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/30" />
                          {post.likes}
                        </span>
                        <span className="text-pink-400 group-hover:translate-x-1 transition-transform">
                          View Post →
                        </span>
                      </div>
                    </div>
                  </a>
                </FloatingElement>
              ))}
            </div>
          </div>
        </div>

        {/* Orbiting / Playfully Floating Social Ecosystem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          {/* Left Column: Brand & Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.3)]">
                <Compass className="w-6 h-6 animate-spin" style={{ animationDuration: '20s' }} />
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                  ISTE <span className="text-cyan-400">NITH</span>
                </span>
                <p className="text-xs text-slate-400 font-mono">
                  Students' Chapter • NIT Hamirpur (HP)
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Empowering innovators, developers, and leaders to transcend limitations. An active technical student chapter committed to engineering excellence, social impact, and zero-gravity creativity.
            </p>

            <div className="flex items-start gap-2.5 text-xs text-slate-400 font-mono pt-2">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                National Institute of Technology Hamirpur, Anu, Hamirpur, Himachal Pradesh 177005, India
              </span>
            </div>
          </div>

          {/* Right Column: Orbiting / Floating Social Icons */}
          <div className="lg:col-span-7">
            <div className="text-center lg:text-left mb-6">
              <h4 className="font-heading font-bold text-xl text-white">
                Orbiting Channels & Networks
              </h4>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Hover to interact with our gravitational field
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* Instagram */}
              <FloatingElement duration={4.2 / gravityMultiplier} distance={8} delay={0.1}>
                <a
                  href="https://www.instagram.com/teamistenith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-pink-500/50 flex flex-col items-center text-center group hover:shadow-[0_0_25px_rgba(236,72,153,0.3)] transition-all block cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-400/30 flex items-center justify-center text-pink-400 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:to-pink-500 group-hover:text-white transition-all mb-3">
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-bold text-sm text-white group-hover:text-pink-300">Instagram</span>
                  <span className="text-[11px] font-mono text-slate-400 mt-0.5">@teamistenith</span>
                </a>
              </FloatingElement>

              {/* LinkedIn */}
              <FloatingElement duration={5.1 / gravityMultiplier} distance={10} delay={0.3}>
                <a
                  href="https://www.linkedin.com/company/iste-nith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-blue-500/50 flex flex-col items-center text-center group hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all block cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all mb-3">
                    <LinkedinIcon className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-bold text-sm text-white group-hover:text-blue-300">LinkedIn</span>
                  <span className="text-[11px] font-mono text-slate-400 mt-0.5">ISTE NITH</span>
                </a>
              </FloatingElement>

              {/* Discord */}
              <FloatingElement duration={4.7 / gravityMultiplier} distance={9} delay={0.5}>
                <a
                  href="https://discord.gg/teamistenith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-indigo-500/50 flex flex-col items-center text-center group hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all block cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all mb-3">
                    <DiscordIcon className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-bold text-sm text-white group-hover:text-indigo-300">Discord</span>
                  <span className="text-[11px] font-mono text-slate-400 mt-0.5">Orbit Server</span>
                </a>
              </FloatingElement>

              {/* GitHub */}
              <FloatingElement duration={5.4 / gravityMultiplier} distance={8} delay={0.2}>
                <a
                  href="https://github.com/iste-nith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-4 rounded-2xl border border-white/10 hover:border-cyan-500/50 flex flex-col items-center text-center group hover:shadow-[0_0_25px_rgba(0,242,254,0.3)] transition-all block cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all mb-3">
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-bold text-sm text-white group-hover:text-cyan-300">GitHub</span>
                  <span className="text-[11px] font-mono text-slate-400 mt-0.5">iste-nith</span>
                </a>
              </FloatingElement>
            </div>
          </div>
        </div>

        {/* Dispatch Signals / Newsletter Subscription */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 mb-16 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Zero-Gravity Radar
          </div>
          <h4 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
            Receive Transmissions & Event Announcements
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 font-light mb-6">
            Get pinged when hackathon registrations open, workshop seats drop, or induction drives begin.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your student email..."
              className="flex-1 px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors font-mono"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:scale-105 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Subscribe</span>
            </button>
          </form>

          {subscribed && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-xs font-mono text-cyan-300"
            >
              ✨ Welcome to orbit! You are now locked into the ISTE NITH transmission frequency.
            </motion.div>
          )}
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} ISTE Students' Chapter, NIT Hamirpur. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/teamistenith/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              Instagram
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="https://www.linkedin.com/company/iste-nith/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-600">•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Ascend to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
