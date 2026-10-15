import { useState, useEffect } from 'react';
import { ParticleField } from './components/ParticleField';
import { CustomCursor } from './components/CustomCursor';
import { CinematicIntro } from './components/CinematicIntro';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Leadership } from './components/Leadership';
import { Internship } from './components/Internship';
import { Creative } from './components/Creative';
import { CareerObjective } from './components/CareerObjective';
import { Timeline } from './components/Timeline';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';

export function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Keyboard shortcut Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 overflow-x-hidden selection:bg-neon-lime selection:text-black">
      {/* Precision Custom Interactive Cursor */}
      <CustomCursor />

      {/* 3D Interactive Three.js Background Constellation Field */}
      <ParticleField />

      {/* Cinematic Intro Sequence (Skippable) */}
      {!introFinished && (
        <CinematicIntro onComplete={() => setIntroFinished(true)} />
      )}

      {/* Glassmorphic Navigation Bar */}
      <Navbar
        onOpenResumeModal={() => setResumeModalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Section 1: Hero */}
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Education */}
        <Education />

        {/* Section 4: Technical Skills */}
        <Skills />

        {/* Section 5: Complete Project Showcase (6 Projects) */}
        <Projects />

        {/* Section 6: Leadership & Department President */}
        <Leadership />

        {/* Section 7: Internship Experience */}
        <Internship />

        {/* Section 8: Creative Side & The Hunt */}
        <Creative />

        {/* Section 9: Career Objective */}
        <CareerObjective />

        {/* Section 10: Experience & Learning Timeline */}
        <Timeline />

        {/* Section 11: Resume Section */}
        <ResumeSection onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Section 12: Contact */}
        <Contact />
      </main>

      {/* Section 13: Footer */}
      <Footer />

      {/* Modals & Dialogs */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResumeModal={() => {
          setCommandPaletteOpen(false);
          setResumeModalOpen(true);
        }}
      />
    </div>
  );
}

export default App;
