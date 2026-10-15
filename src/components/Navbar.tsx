import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Volume2,
  VolumeX,
  FileText,
  Search,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { soundFX } from '../utils/audio';
import { PROFILE_DATA } from '../data/profile';

interface NavbarProps {
  onOpenResumeModal: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResumeModal,
  onOpenCommandPalette,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Monitor scroll progress and background transition
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 40);

      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollPos / winHeight) * 100);
      }

      // Check active section
      const sections = [
        'hero',
        'about',
        'education',
        'skills',
        'projects',
        'leadership',
        'internship',
        'creative',
        'timeline',
        'contact',
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Creative', href: '#creative' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleSoundToggle = () => {
    const nextMuted = soundFX.toggleMute();
    setIsMuted(nextMuted);
    if (!nextMuted) {
      soundFX.playClick();
    }
  };

  const scrollTo = (href: string) => {
    soundFX.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[90] bg-dark-950/40">
        <div
          className="h-full bg-gradient-to-r from-neon-lime via-neon-cyan to-neon-lime transition-all duration-150 ease-out shadow-[0_0_10px_rgba(204,255,0,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`fixed top-3 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 max-w-7xl mx-auto`}
      >
        <div
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'glass-panel shadow-glass-card border border-white/10'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#hero');
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-lime/20 to-neon-cyan/20 border border-neon-lime/40 flex items-center justify-center font-display font-black text-sm text-neon-lime group-hover:scale-105 group-hover:border-neon-lime transition-all">
              M
            </div>
            <span className="font-display font-black tracking-tight text-lg text-white group-hover:text-neon-lime transition-colors">
              MAHARAJA
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-neon-lime/10 text-neon-lime border border-neon-lime/20">
              M.Sc. CS
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-all relative ${
                    isActive
                      ? 'text-neon-lime font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-neon-lime rounded-full shadow-[0_0_8px_#ccff00]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2">
            {/* Quick Command Palette Button */}
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenCommandPalette();
              }}
              title="Quick Search & Navigation (Ctrl + K)"
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl glass-pill text-xs font-mono text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="text-[10px] bg-white/10 px-1 rounded">⌘K</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={handleSoundToggle}
              title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
              className="p-2 rounded-xl glass-pill text-slate-400 hover:text-neon-lime hover:border-neon-lime/30 transition-all"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-slate-500" />
              ) : (
                <Volume2 className="w-4 h-4 text-neon-lime" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={() => {
                soundFX.playModalOpen();
                onOpenResumeModal();
              }}
              className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-neon-lime/10 border border-neon-lime/30 text-neon-lime hover:bg-neon-lime hover:text-black font-semibold text-xs transition-all shadow-[0_0_15px_rgba(204,255,0,0.15)] group"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-xl glass-panel text-slate-200 hover:text-neon-lime transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-5 rounded-2xl glass-panel border border-white/15 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col gap-2">
              <div className="pb-3 border-b border-white/10">
                <span className="text-xs uppercase font-mono text-slate-400">Navigation</span>
              </div>
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl text-left text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-neon-lime transition-all"
                >
                  <span>{item.label}</span>
                  <Sparkles className="w-3 h-3 text-neon-lime opacity-40" />
                </button>
              ))}

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neon-lime text-black font-bold text-xs"
                >
                  <FileText className="w-4 h-4" />
                  <span>Preview & Download Resume</span>
                </button>

                <a
                  href={PROFILE_DATA.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-xl glass-pill text-xs text-slate-300 hover:text-neon-cyan"
                >
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
