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
  ShieldAlert,
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
                className="w-full max-w-sm aspect-[3/4] rounded-2xl bg-black/70 border border-purple-500/40 p-6 flex flex-col justify-between relative overflow-hidden group cursor-pointer shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:border-purple-400 hover:scale-[1.02] transition-all"
              >
                {/* Visual Backdrop with Atmospheric Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-purple-950/40 to-transparent" />
                <div className="absolute inset-0 cyber-dots opacity-40 pointer-events-none" />

                {/* Top Corner Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 text-[10px] font-mono border border-purple-500/40">
                    CONCEPT CARD
                  </span>
                  <Maximize2 className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                </div>

                {/* Poster Center Symbol */}
                <div className="relative z-10 flex flex-col items-center text-center my-auto py-8">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                    <ShieldAlert className="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 className="font-display font-black text-3xl tracking-widest text-white uppercase">
                    THE HUNT
                  </h4>
                  <p className="font-mono text-[11px] text-purple-300 tracking-wider mt-1">
                    AN ORIGINAL COMIC UNIVERSE
                  </p>
                </div>

                {/* Poster Footer Note */}
                <div className="relative z-10 p-3 rounded-xl bg-black/60 border border-white/10 text-center">
                  <p className="font-mono text-[11px] text-slate-300">
                    Click to inspect visual concept gallery
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
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl glass-panel border border-purple-500/40 p-6 md:p-8">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full glass-panel text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono">
                Visual Conceptualization
              </span>
              <h3 className="font-display font-black text-2xl text-white mt-2">
                The Hunt — Graphic Showcase
              </h3>
            </div>

            {/* Artwork Placeholder Frame */}
            <div className="aspect-video w-full rounded-2xl bg-black/80 border border-dashed border-purple-500/40 flex flex-col items-center justify-center p-6 text-center mb-6">
              <Palette className="w-12 h-12 text-purple-400 mb-3" />
              <p className="font-display font-bold text-lg text-white mb-1">
                Visual Art & Title Poster Placeholder
              </p>
              <p className="font-mono text-xs text-slate-400 max-w-md">
                To showcase actual artwork, save image files in <span className="text-purple-300">public/images/</span> and update the references in <span className="text-neon-lime">src/data/profile.ts</span>.
              </p>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Author: Maharaja</span>
              <span>Universe: The Hunt Graphic Series</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
