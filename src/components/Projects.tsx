import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Maximize2,
  X,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Terminal,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import type { ProjectItem } from '../data/profile';
import { soundFX } from '../utils/audio';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const { projects } = PROFILE_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'AI & ML', 'IoT & Robotics', 'Full-Stack', 'Creative'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const getStatusBadge = (status: ProjectItem['status']) => {
    switch (status) {
      case 'Concept':
        return {
          bg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
          dot: 'bg-blue-400',
        };
      case 'In Exploration':
        return {
          bg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
          dot: 'bg-amber-400',
        };
      case 'Under Development':
        return {
          bg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
          dot: 'bg-purple-400',
        };
      case 'Prototype Ready':
        return {
          bg: 'bg-neon-lime/10 text-neon-lime border-neon-lime/30',
          dot: 'bg-neon-lime',
        };
      default:
        return {
          bg: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
          dot: 'bg-slate-400',
        };
    }
  };

  const openModal = (proj: ProjectItem) => {
    soundFX.playModalOpen();
    setActiveModalProject(proj);
  };

  const closeModal = () => {
    soundFX.playClick();
    setActiveModalProject(null);
  };

  return (
    <section id="projects" className="py-24 px-4 md:px-8 relative bg-dark-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-neon-lime uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-neon-lime" />
            <span>Section 05 // Engineered Works & Concepts</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            PROJECT <span className="text-neon-lime text-glow-lime">GALLERY.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3 max-w-2xl">
            A verified portfolio of AI healthcare workflows, offline robotics architecture, academic portals, and original graphic narrative projects.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-lime to-transparent mt-4" />
        </div>

        {/* Category Filters */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const statusConfig = getStatusBadge(project.status);
            const isComic = project.isSpecialCreative;

            return (
              <div
                key={project.id}
                className={`rounded-3xl glass-card flex flex-col justify-between overflow-hidden group transition-all duration-300 ${
                  isComic
                    ? 'border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]'
                    : 'border-white/10 hover:border-neon-lime/40'
                }`}
              >
                {/* Project Header Banner / Preview Graphic */}
                <div
                  className={`h-44 w-full relative p-6 flex flex-col justify-between overflow-hidden ${
                    isComic
                      ? 'bg-gradient-to-br from-purple-950/70 via-dark-900 to-black'
                      : 'bg-gradient-to-br from-slate-900 via-dark-900 to-black'
                  }`}
                >
                  {/* Background Image if available (e.g., Comic Artwork) */}
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-35 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                    />
                  )}

                  {/* Subtle Grid / Pattern in Banner */}
                  <div className="absolute inset-0 cyber-dots opacity-40 pointer-events-none" />

                  {/* Corner Category & Status */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-mono border flex items-center gap-1.5 backdrop-blur-md ${statusConfig.bg}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${statusConfig.dot}`} />
                      <span>{project.status}</span>
                    </span>

                    <span className="font-mono text-xs text-slate-400">
                      #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title & Tagline in banner */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-2">
                      {isComic && <Sparkles className="w-4 h-4 text-purple-400" />}
                      <h3
                        className={`font-display font-black text-xl text-white group-hover:text-neon-lime transition-colors ${
                          isComic ? 'group-hover:text-purple-300' : ''
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>
                    {project.tagline && (
                      <p className="text-xs font-mono text-slate-400 truncate mt-0.5">
                        {project.tagline}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Short Description */}
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 5).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 rounded-lg bg-white/5 text-[11px] font-mono text-slate-500">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => openModal(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-neon-lime hover:underline group-hover:text-neon-limeBright"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Deep Dive & Specs</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on GitHub"
                          className="p-2 rounded-lg glass-pill text-slate-400 hover:text-white hover:border-white/20 transition-all"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live Demo"
                          className="p-2 rounded-lg glass-pill text-neon-cyan hover:border-neon-cyan/40 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expandable Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-white/20 p-6 md:p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-full glass-panel text-slate-400 hover:text-white hover:border-white/30 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-neon-lime/10 border border-neon-lime/30 text-neon-lime text-xs font-mono">
                  {activeModalProject.status}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                  {activeModalProject.category}
                </span>
              </div>
              <h3 className="font-display font-black text-2xl md:text-4xl text-white">
                {activeModalProject.title}
              </h3>
              {activeModalProject.tagline && (
                <p className="font-mono text-sm text-neon-cyan mt-1">
                  {activeModalProject.tagline}
                </p>
              )}
            </div>

            {/* Modal Body Breakdown */}
            <div className="flex flex-col gap-6 text-sm text-slate-300">
              {/* Optional Project Featured Image (e.g. The Hunt Comic Artwork) */}
              {activeModalProject.image && (
                <div className="w-full max-h-72 rounded-2xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center p-2 shadow-xl">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    className="max-h-64 w-auto object-contain rounded-xl shadow-lg"
                  />
                </div>
              )}

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-red-500/20">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-red-400 flex items-center gap-1.5 mb-2">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Problem Statement</span>
                  </h4>
                  <p className="leading-relaxed text-slate-300">
                    {activeModalProject.problemStatement}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-neon-lime/20">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-neon-lime flex items-center gap-1.5 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Proposed Solution</span>
                  </h4>
                  <p className="leading-relaxed text-slate-300">
                    {activeModalProject.proposedSolution}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Explored & Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl glass-pill font-mono text-xs text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contributions */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-neon-lime" />
                  <span>My Engineering & Architecture Contribution</span>
                </h4>
                <ul className="flex flex-col gap-2">
                  {activeModalProject.contribution.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-lime mt-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
                  <span>Key Workflow Highlights</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.highlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0" />
                      <span className="text-xs text-slate-200">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Screenshot Placeholder Note */}
              <div className="p-4 rounded-2xl bg-white/5 border border-dashed border-white/20 text-xs font-mono text-slate-400 flex items-center justify-between">
                <div>
                  <span className="text-white font-semibold block mb-0.5">
                    Screenshot Placeholder Active
                  </span>
                  <span>Add project screenshot to public/images/ and link in profile.ts</span>
                </div>
                <HelpCircle className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Modal Footer Links */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Maharaja Portfolio • Architecture Review
              </span>

              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-neon-lime text-black font-mono font-bold text-xs flex items-center gap-2 hover:bg-neon-limeBright transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
