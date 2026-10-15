import React, { useState, useEffect } from 'react';
import { FastForward, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<number>(0);
  const [isSkipping, setIsSkipping] = useState<boolean>(false);

  useEffect(() => {
    // Stage 1: Logo & Initial "M"
    const t1 = setTimeout(() => setPhase(1), 300);
    // Stage 2: Name Reveal & Glowing Line
    const t2 = setTimeout(() => setPhase(2), 900);
    // Stage 3: Headline & Profile Silhouette
    const t3 = setTimeout(() => setPhase(3), 1600);
    // Stage 4: Fade into main app
    const t4 = setTimeout(() => {
      handleFinish();
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const handleFinish = () => {
    setIsSkipping(true);
    soundFX.playModalOpen();
    setTimeout(() => {
      onComplete();
    }, 450);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-950 transition-all duration-700 select-none overflow-hidden ${
        isSkipping ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Cyber Grid & Radial Glows */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-lime/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Skip Button Top-Right */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={handleFinish}
          className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 text-xs font-mono tracking-wider text-slate-300 hover:text-neon-lime hover:border-neon-lime/40 transition-all group"
        >
          <span>SKIP INTRO</span>
          <FastForward className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Main Cinematic Sequence Box */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6">
        {/* Animated Initial 'M' Badge */}
        <div
          className={`transition-all duration-700 ease-out transform mb-6 ${
            phase >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-6 scale-75'
          }`}
        >
          <div className="relative w-20 h-20 flex items-center justify-center rounded-2xl glass-panel-lime p-0.5 border-glow-lime">
            <div className="w-full h-full rounded-2xl bg-dark-900/90 flex items-center justify-center overflow-hidden relative">
              <span className="font-display font-black text-4xl text-neon-lime tracking-tighter">
                M
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            </div>
          </div>
        </div>

        {/* Name Reveal */}
        <div
          className={`transition-all duration-700 ease-out transform mb-4 ${
            phase >= 2 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'
          }`}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400 font-mono mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-neon-cyan animate-pulse" />
            <span>M.Sc. Computer Science • Portfolio</span>
          </p>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-[0_0_35px_rgba(204,255,0,0.3)]">
            MAHARAJA
          </h1>
        </div>

        {/* Glowing Accent Line */}
        <div
          className={`h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent transition-all duration-700 ease-out mb-6 ${
            phase >= 2 ? 'w-48 md:w-80 opacity-100' : 'w-0 opacity-0'
          }`}
        />

        {/* Staggered Sub-headline */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="font-display text-lg md:text-xl font-bold tracking-widest text-slate-200 uppercase mb-3">
            BUILDING WHAT'S NEXT.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-lime/10 border border-neon-lime/30 text-neon-lime text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-neon-lime animate-ping" />
            <span>INITIALIZING EXPERIENCE</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar progress */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center">
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-neon-cyan to-neon-lime transition-all duration-[2600ms] ease-linear"
            style={{ width: phase >= 3 ? '100%' : phase >= 2 ? '65%' : phase >= 1 ? '30%' : '5%' }}
          />
        </div>
      </div>
    </div>
  );
};
