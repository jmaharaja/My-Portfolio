import React, { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  Film,
  Palette,
  Globe,
  MessageSquareQuote,
  Maximize2,
  X,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { soundFX } from '../utils/audio';

export const Creative: React.FC = () => {
  const { creative } = PROFILE_DATA;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-purple-400" />;
      case 'MessageSquareQuote':
        return <MessageSquareQuote className="w-5 h-5 text-neon-cyan" />;
      case 'Film':
        return <Film className="w-5 h-5 text-neon-lime" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-pink-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="creative" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Cinematic purple/magenta glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 font-mono text-xs text-purple-400 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Section 08 // Narrative Architecture & Storytelling</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            TECHNICAL THINKING. <span className="text-purple-400 text-glow-purple">CREATIVE VISION.</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base mt-3 max-w-2xl italic font-mono">
            "{creative.quote}"
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-transparent mt-4" />
        </div>

        {/* 'The Hunt' Feature Spotlight Card */}
        <div className="mb-16 rounded-3xl glass-card border border-purple-500/30 p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-purple-950/40 via-dark-900 to-black">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative Breakdown */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-semibold border border-purple-500/40 mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                <span>ORIGINAL GRAPHIC NOVEL / COMIC SERIES</span>
              </div>

              <h3 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mb-2">
                THE HUNT
              </h3>
              <p className="font-mono text-xs sm:text-sm text-neon-cyan uppercase tracking-widest mb-6 font-semibold">
                By Maharaja • Story, Script, Character & Visual Direction
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {creative.theHunt.synopsis}
              </p>

              {/* World & Narrative Elements */}
              <div className="w-full mb-6">
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-3">
                  Universe Characteristics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {creative.theHunt.elements.map((elem, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2 text-xs text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      <span>{elem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Roles */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400">Authored Roles:</span>
                {creative.theHunt.roles.map((r, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-white/5 text-[11px] font-mono text-purple-200 border border-purple-500/20"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Cinematic Visual Poster Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => {
                  soundFX.playModalOpen();
                  setLightboxOpen(true);
                }}
                className="w-full max-w-sm aspect-[3/4] rounded-2xl bg-black/70 border border-purple-500/40 p-4 flex flex-col justify-between relative overflow-hidden group cursor-pointer shadow-[0_0_40px_rgba(168,85,247,0.25)] hover:border-purple-400 hover:scale-[1.02] transition-all"
              >
                {/* Visual Backdrop with Real Comic Artwork */}
                <img
                  src={creative.theHunt.image || '/images/comic.jpg'}
                  alt="The Hunt Graphic Novel by Maharaja"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 cyber-dots opacity-20 pointer-events-none" />

                {/* Top Corner Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-purple-600/80 text-white text-[10px] font-mono font-bold tracking-wider uppercase border border-purple-400/50 backdrop-blur-md shadow-lg">
                    ORIGINAL COMIC ARTWORK
                  </span>
                  <div className="p-2 rounded-full bg-black/60 border border-white/20 text-purple-300 group-hover:text-white group-hover:bg-purple-600/80 transition-all">
                    <Maximize2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Poster Footer Note with Glassmorphism */}
                <div className="relative z-10 p-4 rounded-xl bg-black/80 border border-purple-500/30 backdrop-blur-md">
                  <h4 className="font-display font-black text-xl tracking-wider text-white uppercase drop-shadow-md">
                    THE HUNT
                  </h4>
                  <p className="font-mono text-[11px] text-purple-300 tracking-wider">
                    Written & Visualized by Maharaja
                  </p>
                  <p className="font-mono text-[10px] text-slate-400 mt-1 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-neon-cyan" />
                    <span>Click to view full original artwork</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Creative Craft */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {creative.creativePillars.map((pillar, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-purple-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-4">
                  {getPillarIcon(pillar.icon)}
                </div>
                <h4 className="font-display font-bold text-base text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comic / Artwork Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-3xl glass-panel border border-purple-500/50 p-6 md:p-8 overflow-y-auto">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full glass-panel text-slate-400 hover:text-white hover:border-white/40 transition-all"
              aria-label="Close image viewer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-semibold border border-purple-500/40">
                Original Artwork Showcase
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-2">
                The Hunt — Graphic Novel Series
              </h3>
              <p className="text-xs sm:text-sm text-neon-cyan font-mono mt-1">
                Visual Concept & Title Artwork by Maharaja
              </p>
            </div>

            {/* High-Resolution Artwork Frame */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-black/90 border border-purple-500/30 flex items-center justify-center p-2 mb-4 shadow-2xl">
              <img
                src={creative.theHunt.image || '/images/comic.jpg'}
                alt="The Hunt Full Comic Artwork"
                className="max-h-[60vh] w-auto object-contain rounded-xl shadow-2xl transition-all"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400 pt-3 border-t border-white/10">
              <span className="text-slate-300">Creator & Illustrator: <strong className="text-white">Maharaja</strong></span>
              <span className="text-purple-300 font-semibold">Universe: The Hunt Original Graphic Series</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
