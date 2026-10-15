import React from 'react';
import {
  ShieldCheck,
  Users,
  MessageSquare,
  Award,
  Sparkles,
  CheckCircle,
  Quote,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROFILE_DATA } from '../data/profile';
import { soundFX } from '../utils/audio';

export const Leadership: React.FC = () => {
  const { leadership } = PROFILE_DATA;

  const triggerConfetti = () => {
    soundFX.playSuccess();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ccff00', '#00f0ff', '#ffffff', '#a855f7'],
    });
  };

  return (
    <section id="leadership" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-lime/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-lime/10 border border-neon-lime/30 font-mono text-xs text-neon-lime uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-neon-lime" />
            <span>Section 06 // Student Representation & Governance</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            LEADERSHIP IS ABOUT <span className="text-neon-lime text-glow-lime">RESPONSIBILITY.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-lime to-transparent mt-4" />
        </div>

        {/* Master Presidential Feature Card */}
        <div className="rounded-3xl glass-panel-lime border border-neon-lime/40 p-8 md:p-12 shadow-2xl relative overflow-hidden mb-12">
          {/* Subtle Ambient Watermark */}
          <div className="absolute -right-8 -bottom-8 opacity-5 select-none pointer-events-none">
            <Award className="w-96 h-96 text-white" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column (7 cols): Leadership & Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Leadership Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neon-lime text-black font-mono font-bold text-xs mb-6 shadow-neon-lime">
                <ShieldCheck className="w-4 h-4" />
                <span>STUDENT COUNCIL LEADERSHIP</span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-4xl text-white mb-2">
                Department President
              </h3>
              <p className="font-mono text-sm sm:text-base text-neon-lime mb-6">
                Student Representation & Academic Coordination
              </p>

              {/* Presidential Statement */}
              <div className="p-6 rounded-2xl bg-black/40 border border-white/10 relative mb-6">
                <Quote className="w-8 h-8 text-neon-lime/30 absolute top-4 right-4" />
                <p className="text-slate-200 text-sm md:text-base leading-relaxed italic relative z-10 font-sans">
                  "{leadership.statement}"
                </p>
              </div>

              {/* Interactive Confetti Celebration Button */}
              <button
                onClick={triggerConfetti}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel border border-neon-lime/30 text-xs font-mono text-neon-lime hover:bg-neon-lime hover:text-black transition-all group"
              >
                <Sparkles className="w-4 h-4 text-neon-lime group-hover:text-black" />
                <span>Celebrate Department Leadership</span>
              </button>
            </div>

            {/* Right Column (5 cols): Leadership Pillars & Values */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-5 rounded-2xl bg-black/50 border border-white/10">
                <h4 className="font-display font-bold text-base text-white mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-neon-cyan" />
                  <span>Core Executive Responsibilities</span>
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {leadership.coreResponsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-neon-lime shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guiding Principles */}
              <div className="p-5 rounded-2xl bg-black/50 border border-white/10">
                <h4 className="font-display font-bold text-base text-white mb-3 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                  <span>Guiding Principles</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {leadership.values.map((val, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl glass-pill font-mono text-xs text-slate-200 border border-white/10"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
