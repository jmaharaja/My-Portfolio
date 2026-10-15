import React from 'react';
import {
  X,
  Printer,
  Download,
  FileText,
  Mail,
  MapPin,
  HelpCircle,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { soundFX } from '../utils/audio';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, education, leadership, internship, skills, projects } = PROFILE_DATA;

  const handlePrint = () => {
    soundFX.playClick();
    window.print();
  };

  const handleDownload = () => {
    soundFX.playClick();
    const link = document.createElement('a');
    link.href = personal.resumePath;
    link.download = 'Maharaja_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl glass-panel border border-white/20 p-6 sm:p-10 shadow-2xl flex flex-col">
        {/* Modal Controls Bar (Hidden in Print) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-neon-lime" />
            <h3 className="font-display font-bold text-lg text-white">
              Resume Preview & Template
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl glass-pill text-xs font-mono text-slate-200 hover:text-white flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-4 py-1.5 rounded-xl bg-neon-lime text-black font-mono font-bold text-xs flex items-center gap-1.5 hover:bg-neon-limeBright transition-all shadow-neon-lime"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="p-1.5 rounded-full glass-panel text-slate-400 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Informational Banner on how to place actual PDF (Hidden in Print) */}
        <div className="p-4 rounded-2xl bg-neon-lime/5 border border-neon-lime/20 mb-6 text-xs font-mono text-slate-300 flex items-start gap-3 no-print">
          <HelpCircle className="w-5 h-5 text-neon-lime shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold text-neon-lime block mb-0.5">
              How to upload your customized resume PDF:
            </span>
            Place your exported PDF file as <code className="bg-black/60 px-1.5 py-0.5 rounded text-white">public/resume.pdf</code>.
            The "Download PDF" button will automatically deliver your uploaded document.
          </div>
        </div>

        {/* The Clean Printable Resume Sheet */}
        <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-2xl shadow-xl font-sans">
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-6 mb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              MAHARAJA
            </h1>
            <p className="text-sm font-semibold text-slate-700 tracking-wider uppercase mt-1">
              Final-Year M.Sc. Computer Science Student • Aspiring Software Developer
            </p>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600 mt-3 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {personal.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {personal.location}
              </span>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-blue-700 hover:underline"
              >
                <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-slate-800 hover:underline"
              >
                <GithubIcon className="w-3.5 h-3.5" /> GitHub
              </a>
            </div>
          </div>

          {/* Objective */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1 border-b border-slate-200 pb-1">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
              {personal.careerObjective}
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-slate-200 pb-1">
              Education
            </h2>
            <div className="flex flex-col gap-3">
              {education.map((edu, i) => (
                <div key={i} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <h3 className="font-bold text-slate-900">
                      {edu.degree} in {edu.specialization}
                    </h3>
                    <p className="text-xs text-slate-600">
                      {edu.institution} • {edu.location}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-slate-500 shrink-0">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Achievement */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-slate-200 pb-1">
              Leadership & Governance
            </h2>
            <div className="text-xs sm:text-sm">
              <div className="flex justify-between items-start font-semibold text-slate-900">
                <span>{leadership.role} — Student Council</span>
                <span className="text-xs font-mono text-slate-500">Student Council</span>
              </div>
              <p className="text-xs text-slate-600 italic mt-0.5 mb-2">
                {leadership.electionHighlights}
              </p>
              <ul className="list-disc list-inside text-xs text-slate-700 flex flex-col gap-1">
                {leadership.coreResponsibilities.slice(0, 3).map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Practical Internship */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-slate-200 pb-1">
              Practical Internship Experience
            </h2>
            <div className="text-xs sm:text-sm">
              <div className="flex justify-between items-start font-semibold text-slate-900">
                <span>{internship.role}</span>
                <span className="text-xs font-mono text-slate-500">{internship.period}</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">{internship.company}</p>
              <ul className="list-disc list-inside text-xs text-slate-700 flex flex-col gap-1">
                {internship.responsibilities.slice(0, 3).map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Academic & Exploratory Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-slate-200 pb-1">
              Featured Projects
            </h2>
            <div className="flex flex-col gap-3">
              {projects.slice(0, 3).map((p) => (
                <div key={p.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-slate-900">{p.title}</span>
                    <span className="text-xs font-mono text-slate-500">[{p.status}]</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">{p.shortDescription}</p>
                  <p className="text-[11px] text-slate-500 font-mono mt-1">
                    Tech: {p.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-slate-200 pb-1">
              Technical Competencies
            </h2>
            <div className="flex flex-col gap-1.5 text-xs text-slate-700">
              {skills.slice(0, 4).map((cat, i) => (
                <div key={i} className="flex">
                  <span className="font-semibold text-slate-900 w-36 shrink-0">
                    {cat.title}:
                  </span>
                  <span>{cat.skills.map((s) => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
