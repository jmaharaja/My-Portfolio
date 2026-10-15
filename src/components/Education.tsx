import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Edit3, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const Education: React.FC = () => {
  const { education } = PROFILE_DATA;

  return (
    <section id="education" className="py-24 px-4 md:px-8 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-neon-cyan uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-neon-cyan" />
            <span>Section 03 // Academic Foundation</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            ACADEMIC <span className="text-neon-cyan text-glow-cyan">TRAJECTORY.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-transparent mt-4" />
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl glass-card border border-white/10 hover:border-neon-cyan/40 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Corner Watermark */}
              <div className="absolute top-4 right-4 text-[42px] font-display font-black text-white/[0.03] select-none pointer-events-none">
                0{index + 1}
              </div>

              <div>
                {/* Degree & Status */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono font-medium">
                    {item.status}
                  </span>
                  {item.isEditablePlaceholder && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
                      <Edit3 className="w-3 h-3 text-slate-400" />
                      <span>Configurable in profile.ts</span>
                    </span>
                  )}
                </div>

                <h3 className="font-display font-black text-2xl md:text-3xl text-white mb-1">
                  {item.degree}
                </h3>
                <p className="font-mono text-sm text-neon-lime mb-4">
                  {item.specialization}
                </p>

                {/* Institution & Period Metadata */}
                <div className="flex flex-col gap-2 mb-6 p-4 rounded-2xl bg-black/30 border border-white/5 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-neon-cyan shrink-0" />
                    <span className="font-semibold text-white">{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-neon-cyan" />
                    <span>Core Coursework & Studies</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl glass-pill text-xs font-mono text-slate-200 border border-white/5 hover:border-neon-cyan/30 transition-colors flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-neon-cyan opacity-70" />
                        <span>{course}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
