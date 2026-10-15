import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { soundFX } from '../utils/audio';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const { personal } = PROFILE_DATA;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Creative', href: '#creative' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative pt-16 pb-12 px-4 md:px-8 border-t border-white/10 bg-dark-950 overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12">
        {/* Top Tier: Brand, Tagline, Quick Links, Back-to-Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/5">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-neon-lime/20 border border-neon-lime/40 flex items-center justify-center font-display font-black text-sm text-neon-lime">
                M
              </div>
              <span className="font-display font-black text-xl text-white tracking-tight">
                MAHARAJA
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono max-w-md">
              {personal.professionalHeadline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-neon-lime transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-xs font-mono text-slate-300 hover:text-neon-lime hover:border-neon-lime/40 transition-all group shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-neon-lime" />
          </button>
        </div>

        {/* Bottom Tier: Socials & Dynamic Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Maharaja. All rights reserved.</span>
            <span className="hidden sm:inline-block">•</span>
            <span className="hidden sm:inline-block text-slate-400">
              Designed with Next-Gen Cinematic Aesthetic
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-neon-lime transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-neon-cyan transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
