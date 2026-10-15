import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  GitBranch,
  Edit3,
  Cpu,
  GraduationCap,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const Internship: React.FC = () => {
  const { internship } = PROFILE_DATA;

  return (
    <section id="internship" className="py-24 px-4 md:px-8 relative bg-dark-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-neon-cyan uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-neon-cyan" />
            <span>Section 07 // Professional Mentorship & Practice</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            PRACTICAL <span className="text-neon-cyan text-glow-cyan">INTERNSHIP.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-transparent mt-4" />
        </div>

        {/* Master Internship Card */}
        <div className="p-8 md:p-12 rounded-3xl glass-card border border-white/15 relative overflow-hidden">
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono font-semibold">
                  {internship.status}
                </span>
                {internship.isEditablePlaceholder && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
                    <Edit3 className="w-3 h-3 text-slate-400" />
                    <span>Editable in profile.ts</span>
                  </span>
                )}
              </div>
              <h3 className="font-display font-black text-2xl md:text-3xl text-white">
                {internship.role}
              </h3>
              <p className="font-mono text-sm text-neon-lime mt-1 font-semibold">
                {internship.company}
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-neon-cyan" />
                <span>{internship.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{internship.location}</span>
              </div>
            </div>
          </div>

          {/* Overview & Trainer Mentorship */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
              <h4 className="font-display font-bold text-sm text-white mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-neon-lime" />
                <span>Practical Overview</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {internship.overview}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-neon-cyan/20">
              <h4 className="font-display font-bold text-sm text-white mb-2 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-neon-cyan" />
                <span>Trainer Mentorship & Review Feedback</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {internship.mentorGuidance}
              </p>
            </div>
          </div>

          {/* Responsibilities & Key Learnings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <GitBranch className="w-3.5 h-3.5 text-neon-lime" />
                <span>Assigned Tasks & Contributions</span>
              </h4>
              <ul className="flex flex-col gap-2.5">
                {internship.responsibilities.map((task, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-neon-lime shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyan" />
                <span>Key Takeaways & Independent Growth</span>
              </h4>
              <ul className="flex flex-col gap-2.5">
                {internship.keyLearnings.map((learning, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-2 shrink-0" />
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tools Explored */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-slate-400 mr-2">Technologies Used:</span>
            {internship.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-xl glass-pill font-mono text-xs text-slate-200 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
