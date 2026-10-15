import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const Timeline: React.FC = () => {
  const { timeline } = PROFILE_DATA;

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Leadership':
        return 'bg-neon-lime/10 text-neon-lime border-neon-lime/30';
      case 'Experience':
        return 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30';
      case 'Creative':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'Innovation':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default:
        return 'bg-white/10 text-slate-300 border-white/20';
    }
  };

  return (
    <section id="timeline" className="py-24 px-4 md:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-neon-lime uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5 text-neon-lime" />
            <span>Section 10 // Chronological Evolution</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            MILESTONES & <span className="text-neon-lime text-glow-lime">TRAJECTORY.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-lime to-transparent mt-4" />
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-6 md:pl-10 flex flex-col gap-10">
          {timeline.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-dark-950 border-2 border-neon-lime group-hover:scale-125 group-hover:bg-neon-lime transition-all duration-300 shadow-[0_0_10px_rgba(204,255,0,0.4)]" />

              {/* Card Container */}
              <div className="p-6 md:p-8 rounded-3xl glass-card border border-white/10 hover:border-white/20 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono border ${getTagColor(
                      item.tag
                    )}`}
                  >
                    {item.tag}
                  </span>
                  <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.year}</span>
                  </span>
                </div>

                <h3 className="font-display font-black text-xl md:text-2xl text-white group-hover:text-neon-lime transition-colors">
                  {item.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-neon-cyan mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
