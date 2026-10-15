import React, { useState } from 'react';
import {
  Sparkles,
  FileText,
  ChevronRight,
  ShieldCheck,
  Cpu,
  GraduationCap,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { soundFX } from '../utils/audio';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const { personal } = PROFILE_DATA;
  const [imageError, setImageError] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 15, y: -y * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollTo = (id: string) => {
    soundFX.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-lime/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[450px] h-[450px] bg-neon-cyan/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headlines & Editorial Presentation (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neon-lime/10 border border-neon-lime/30 text-neon-lime text-xs font-mono font-medium mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-lime opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-lime" />
            </span>
            <span className="tracking-wider uppercase">{personal.availability}</span>
          </div>

          {/* Name Display */}
          <div className="mb-2">
            <p className="font-mono text-xs md:text-sm tracking-[0.25em] text-neon-cyan uppercase font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{personal.professionalHeadline}</span>
            </p>
            <h1 className="font-display font-black text-5xl sm:text-7xl xl:text-8xl tracking-tighter text-white mt-1 leading-[0.95] drop-shadow-[0_0_35px_rgba(204,255,0,0.3)]">
              MAHARAJA
            </h1>
          </div>

          {/* Hero Main Headline */}
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-slate-200 mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            {personal.heroHeadline}
          </h2>

          {/* Supporting Introduction */}
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-normal mb-8">
            {personal.bioIntro}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {/* Explore Work */}
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3.5 rounded-2xl bg-neon-lime text-black font-display font-bold text-sm tracking-wide shadow-neon-lime hover:bg-neon-limeBright hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
            >
              <span>Explore My Work</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* About Me */}
            <button
              onClick={() => scrollTo('about')}
              className="px-6 py-3.5 rounded-2xl glass-card text-white hover:text-neon-cyan hover:border-neon-cyan/40 font-display font-semibold text-sm tracking-wide transition-all"
            >
              About Me
            </button>

            {/* Resume Button */}
            <button
              onClick={() => {
                soundFX.playModalOpen();
                onOpenResumeModal();
              }}
              className="px-5 py-3.5 rounded-2xl glass-pill text-slate-200 hover:text-neon-lime hover:border-neon-lime/30 font-mono text-xs flex items-center gap-2 transition-all"
            >
              <FileText className="w-4 h-4 text-neon-lime" />
              <span>Resume PDF</span>
            </button>
          </div>

          {/* Social Proof & Profiles */}
          <div className="flex items-center gap-5 pt-4 border-t border-white/10 w-full max-w-xl">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Connect:</span>
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-neon-lime font-mono transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-neon-cyan font-mono transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Column: Prominent Portrait Frame with 3D Tilt (5 Cols) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div
            className="relative perspective-1000 w-full max-w-md cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
          >
            {/* Outer Rotating Cyber Ring */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-neon-lime/30 via-neon-cyan/20 to-transparent blur-md opacity-70 animate-pulse" />

            {/* Tilt Frame Container */}
            <div
              className="relative rounded-3xl p-3 bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/20 backdrop-blur-xl shadow-glass-elevated transition-transform duration-200 ease-out"
              style={{
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Photo Box */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-dark-900 border border-white/10 group">
                {/* Profile Image with Fallback */}
                <img
                  src={imageError ? personal.profilePhotoFallback : personal.profilePhoto}
                  alt="Maharaja - Computer Science Student & Developer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                />

                {/* Subtle Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-80" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-panel border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-white text-sm">Maharaja</p>
                      <p className="text-[11px] font-mono text-neon-lime">M.Sc. Computer Science</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-neon-lime/20 text-neon-lime text-[10px] font-mono border border-neon-lime/30">
                      PRESIDENT
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Department President */}
              <div
                className="absolute -top-4 -left-4 px-3.5 py-2 rounded-xl glass-panel-lime shadow-lg flex items-center gap-2 border border-neon-lime/40 animate-float"
                style={{ transform: 'translateZ(30px)' }}
              >
                <ShieldCheck className="w-4 h-4 text-neon-lime" />
                <span className="font-mono text-xs font-semibold text-slate-100">
                  Department President
                </span>
              </div>

              {/* Floating Badge 2: AI & Robotics */}
              <div
                className="absolute -bottom-4 -right-4 px-3.5 py-2 rounded-xl glass-panel-cyan shadow-lg flex items-center gap-2 border border-neon-cyan/40 animate-float-reverse"
                style={{ transform: 'translateZ(40px)' }}
              >
                <Cpu className="w-4 h-4 text-neon-cyan" />
                <span className="font-mono text-xs font-semibold text-slate-100">
                  AI & Robotics
                </span>
              </div>

              {/* Floating Badge 3: Academic */}
              <div
                className="hidden sm:flex absolute top-1/2 -right-6 px-3 py-1.5 rounded-xl glass-panel shadow-md items-center gap-1.5 border border-white/15"
                style={{ transform: 'translateZ(20px)' }}
              >
                <GraduationCap className="w-3.5 h-3.5 text-slate-300" />
                <span className="font-mono text-[11px] text-slate-300">Final Year</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <button
          onClick={() => scrollTo('about')}
          className="flex flex-col items-center gap-1.5 group"
          aria-label="Scroll to About Me section"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 group-hover:text-neon-lime transition-colors">
            SCROLL TO EXPLORE
          </span>
          <div className="w-5 h-8 rounded-full border border-slate-600 flex justify-center p-1 group-hover:border-neon-lime transition-colors">
            <div className="w-1.5 h-2 bg-neon-lime rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
