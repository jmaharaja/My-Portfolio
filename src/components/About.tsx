import React from 'react';
import {
  Brain,
  Cpu,
  Code2,
  BookOpen,
  Terminal,
  Layers,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const About: React.FC = () => {
  const { personal } = PROFILE_DATA;

  const pillars = [
    {
      icon: <Brain className="w-6 h-6 text-neon-lime" />,
      title: "AI & Machine Learning",
      description:
        "Exploring predictive modeling, classification workflows (Random Forest, Scikit-learn), and triage systems, with curiosity toward edge offline intelligence.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-neon-cyan" />,
      title: "Software Engineering & Data",
      description:
        "Building practical backends with Python, Flask, and relational SQL / SQLite schemas, supplemented by data processing using Pandas & NumPy.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-amber-400" />,
      title: "IoT, Robotics & Hardware",
      description:
        "Tinkering with microcontrollers, Arduino, Raspberry Pi, and sensor integration to explore offline interactive voice robots and automated physical systems.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-purple-400" />,
      title: "Storytelling & 'The Hunt'",
      description:
        "Authoring original fantasy-mystery graphic fiction, bringing narrative pacing, user empathy, and cinematic composition into digital interface design.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-neon-lime uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5 text-neon-lime" />
            <span>Section 02 // Identity & Philosophy</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            MORE THAN <span className="text-neon-lime text-glow-lime">JUST CODE.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-lime to-transparent mt-4" />
        </div>

        {/* Grid: Narrative Bio (7 cols) + Architectural Pillars (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Detailed Narrative Bio */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-slate-300 leading-relaxed text-base md:text-lg">
            {personal.fullBio.map((paragraph, idx) => (
              <p
                key={idx}
                className="p-5 rounded-2xl glass-card border border-white/5 hover:border-white/15 transition-all text-slate-300"
              >
                {paragraph}
              </p>
            ))}

            {/* Quick Core Strengths Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              <div className="p-3 rounded-xl glass-panel text-center">
                <span className="font-mono text-neon-lime font-bold text-lg block">Final Year</span>
                <span className="text-xs text-slate-400 font-mono">M.Sc. Comp Science</span>
              </div>
              <div className="p-3 rounded-xl glass-panel text-center">
                <span className="font-mono text-neon-cyan font-bold text-lg block">President</span>
                <span className="text-xs text-slate-400 font-mono">Department Council</span>
              </div>
              <div className="p-3 rounded-xl glass-panel text-center col-span-2 sm:col-span-1">
                <span className="font-mono text-purple-400 font-bold text-lg block">The Hunt</span>
                <span className="text-xs text-slate-400 font-mono">Original Comic Universe</span>
              </div>
            </div>
          </div>

          {/* Right: Technical & Creative Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-3xl glass-panel border border-neon-cyan/20 mb-2">
              <h3 className="font-display font-bold text-xl text-white mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5 text-neon-cyan" />
                <span>Interdisciplinary Synergy</span>
              </h3>
              <p className="text-sm text-slate-300 leading-normal">
                How technical precision and narrative creativity reinforce one another across my work.
              </p>
            </div>

            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl glass-card border border-white/10 hover:border-neon-lime/30 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-white group-hover:text-neon-lime transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-400 mt-1.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
