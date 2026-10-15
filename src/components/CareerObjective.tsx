import React from 'react';
import { Target, Compass, ChevronRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { soundFX } from '../utils/audio';

export const CareerObjective: React.FC = () => {
  const { personal } = PROFILE_DATA;

  const scrollToContact = () => {
    soundFX.playClick();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 md:px-8 relative bg-dark-900/40">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl p-8 md:p-14 glass-panel border border-neon-lime/30 shadow-glass-elevated overflow-hidden text-center flex flex-col items-center">
          {/* Subtle Ambient Radial Light */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-lime/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neon-lime/10 border border-neon-lime/30 text-neon-lime text-xs font-mono font-medium mb-8">
            <Target className="w-3.5 h-3.5 text-neon-lime" />
            <span>Section 09 // Professional Vision & Mission</span>
          </div>

          {/* Quotation Headline */}
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-snug max-w-4xl mb-8">
            "{personal.careerObjective}"
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="px-6 py-3 rounded-2xl bg-neon-lime text-black font-display font-bold text-xs tracking-wider uppercase hover:bg-neon-limeBright hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-neon-lime"
            >
              <span>Connect for Opportunities</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              <Compass className="w-3.5 h-3.5 text-neon-cyan" />
              <span>Open to Entry-Level IT Roles & Graduate Programs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
