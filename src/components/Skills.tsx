import React, { useState } from 'react';
import {
  Code2,
  Database,
  BrainCircuit,
  Cpu,
  Sparkles,
  Terminal,
  Layers,
  Check,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { soundFX } from '../utils/audio';

export const Skills: React.FC = () => {
  const { skills } = PROFILE_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-neon-lime" />;
      case 'Database':
        return <Database className="w-5 h-5 text-neon-cyan" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-pink-400" />;
      default:
        return <Terminal className="w-5 h-5 text-neon-lime" />;
    }
  };

  const categories = ['All', ...skills.map((s) => s.title)];

  const filteredCategories =
    selectedCategory === 'All'
      ? skills
      : skills.filter((s) => s.title === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-neon-lime uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-neon-lime" />
            <span>Section 04 // Core Competencies</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            TECHNICAL & <span className="text-neon-lime text-glow-lime">CREATIVE ARSENAL.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3 max-w-2xl">
            A comprehensive, verified breakdown of programming frameworks, data science tools, embedded hardware, and narrative craft.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-lime to-transparent mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFX.playClick();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-neon-lime text-black font-bold shadow-neon-lime'
                  : 'glass-pill text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-3xl glass-card border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {category.skills.length} Competencies
                    </span>
                  </div>
                </div>

                {/* Skill List */}
                <div className="flex flex-col gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onMouseEnter={() => soundFX.playHover()}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-neon-lime/30 hover:bg-white/[0.04] transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-sm font-semibold text-white group-hover:text-neon-lime transition-colors">
                          {skill.name}
                        </span>
                        <Check className="w-3.5 h-3.5 text-neon-lime opacity-40 group-hover:opacity-100 transition-opacity" />
                      </div>
                      {skill.description && (
                        <p className="text-xs text-slate-400 leading-relaxed font-sans">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Editable badge */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified Toolkit</span>
                <span className="hover:text-slate-300 transition-colors">Configurable</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
