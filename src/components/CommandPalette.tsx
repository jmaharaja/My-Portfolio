import React, { useState, useEffect } from 'react';
import {
  Search,
  X,
  User,
  GraduationCap,
  Layers,
  FolderGit2,
  ShieldCheck,
  Briefcase,
  Sparkles,
  Clock,
  FileText,
  Mail,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { soundFX } from '../utils/audio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResumeModal,
}) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          soundFX.playModalOpen();
          // parent should open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { label: 'Hero / Home', icon: <User className="w-4 h-4 text-neon-lime" />, sectionId: 'hero' },
    { label: 'About Maharaja', icon: <User className="w-4 h-4 text-neon-cyan" />, sectionId: 'about' },
    { label: 'Academic Trajectory (M.Sc. CS)', icon: <GraduationCap className="w-4 h-4 text-purple-400" />, sectionId: 'education' },
    { label: 'Technical & Creative Skills', icon: <Layers className="w-4 h-4 text-neon-lime" />, sectionId: 'skills' },
    { label: 'Project Gallery (6 Projects)', icon: <FolderGit2 className="w-4 h-4 text-amber-400" />, sectionId: 'projects' },
    { label: 'Department President Leadership', icon: <ShieldCheck className="w-4 h-4 text-neon-lime" />, sectionId: 'leadership' },
    { label: 'Practical Internship Experience', icon: <Briefcase className="w-4 h-4 text-neon-cyan" />, sectionId: 'internship' },
    { label: 'Creative Storytelling & The Hunt', icon: <Sparkles className="w-4 h-4 text-purple-400" />, sectionId: 'creative' },
    { label: 'Career Milestones Timeline', icon: <Clock className="w-4 h-4 text-slate-300" />, sectionId: 'timeline' },
    { label: 'Contact & Inquiries', icon: <Mail className="w-4 h-4 text-neon-lime" />, sectionId: 'contact' },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  const jumpTo = (sectionId: string) => {
    soundFX.playClick();
    onClose();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-[250] flex items-start justify-center pt-24 px-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl rounded-2xl glass-panel border border-white/20 shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10">
          <Search className="w-4 h-4 text-neon-lime shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a section name or command..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white focus:outline-none placeholder:text-slate-500 font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 flex flex-col gap-1">
          {filtered.map((item) => (
            <button
              key={item.label}
              onClick={() => jumpTo(item.sectionId)}
              className="flex items-center justify-between p-3 rounded-xl text-left text-xs font-mono text-slate-200 hover:bg-white/10 hover:text-white transition-all group"
            >
              <div className="flex items-center gap-2.5">
                {item.icon}
                <span>{item.label}</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-neon-lime group-hover:translate-x-0.5 transition-all" />
            </button>
          ))}

          {/* Quick Action: Resume Modal */}
          <button
            onClick={() => {
              onClose();
              onOpenResumeModal();
            }}
            className="flex items-center justify-between p-3 rounded-xl text-left text-xs font-mono text-neon-lime hover:bg-neon-lime/10 transition-all border border-neon-lime/20 mt-1"
          >
            <div className="flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-neon-lime" />
              <span className="font-bold">Open Resume Preview & Download</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-white/5 bg-black/40 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigation Quick Menu</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
