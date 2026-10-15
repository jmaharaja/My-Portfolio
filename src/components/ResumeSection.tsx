import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const handleDownload = () => {
    soundFX.playClick();
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Maharaja_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 px-4 md:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl glass-card border border-white/15 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900">
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-lime/10 border border-neon-lime/30 text-neon-lime text-xs font-mono mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Section 11 // Verified Profile Document</span>
            </div>
            <h3 className="font-display font-black text-2xl md:text-3xl text-white">
              Curriculum Vitae & Resume
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
              Inspect an interactive ATS-aligned summary or download the PDF document for recruitment review.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => {
                soundFX.playModalOpen();
                onOpenResumeModal();
              }}
              className="px-5 py-3 rounded-2xl glass-panel text-white hover:text-neon-lime hover:border-neon-lime/40 text-xs font-mono font-semibold flex items-center gap-2 transition-all"
            >
              <Eye className="w-4 h-4 text-neon-lime" />
              <span>Preview & Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-6 py-3 rounded-2xl bg-neon-lime text-black font-display font-bold text-xs tracking-wider uppercase hover:bg-neon-limeBright hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-neon-lime"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
