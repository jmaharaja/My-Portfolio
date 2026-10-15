# 🌌 MAHARAJA — Next-Gen Cinematic Developer Portfolio

A production-quality, award-winning personal developer portfolio and interactive digital experience built for **Maharaja**, final-year M.Sc. Computer Science student, elected Department President, and aspiring software developer.

Designed with a high-end combination of Apple-inspired minimalism, movie title cinematic pacing, interactive Three.js 3D space, glassmorphism, and neon lime/cyan accents.

---

## ⚡ Quick Start

The development server is already active and running locally at:
👉 **[http://127.0.0.1:5173/](http://127.0.0.1:5173/)**

To launch or stop the server manually at any time:

```bash
# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

---

## 📸 Profile Portrait Image Configuration

Your portrait image is already installed and visible on the website:
- **Active Image Path**: `public/images/profile.jpeg` (also preserved in `IMG/Profile.jpeg`)
- **How to update or replace with a new photograph**:
  1. Simply copy your new portrait image file and rename it to `profile.jpeg`.
  2. Paste it into the `public/images/` folder (replacing `public/images/profile.jpeg`).
  3. The website will automatically update the hero section with your new photo!
  4. If your image has a different name or extension (e.g. `my-photo.png`), open `src/data/profile.ts` and update line 96:
     ```typescript
     profilePhoto: "/images/my-photo.png",
     ```

---

## 📄 Resume PDF Configuration

- **Active Resume Location**: `public/resume.pdf`
- **How to provide your customized resume**:
  1. Export your resume as a `.pdf` file.
  2. Save or replace it as `public/resume.pdf`.
  3. The **"Download Resume"** button on the hero, resume section, and command palette will immediately deliver your real resume to recruiters!
  4. The in-page **"Preview & Print"** button provides an instant ATS-style interactive preview with `Ctrl + P` print formatting.

---

## 🛠️ Central Profile Data (`src/data/profile.ts`)

All personal information, links, education, skills, projects, leadership, and timeline data are centralized in a single typed configuration file: **[`src/data/profile.ts`](file:///c:/Users/pappu/OneDrive/Pictures/Desktop/Portfolio/src/data/profile.ts)**.

### 1. Update Name, Email & Social Links
In `src/data/profile.ts`, under `personal`:
```typescript
personal: {
  name: "Maharaja",
  email: "your.real.email@example.com", // <-- Update your email
  phone: "+91 98765 43210",              // <-- Optional phone number
  githubUrl: "https://github.com/jmaharaja",
  linkedinUrl: "https://www.linkedin.com/in/maharaja-j-jmr555",
  location: "Tamil Nadu, India",
}
```

### 2. Update College Name & Graduation Dates
In `src/data/profile.ts`, under `education`:
```typescript
education: [
  {
    degree: "Master of Science (M.Sc.)",
    specialization: "Computer Science",
    status: "Final Year Student",
    institution: "Insert Your University Name", // <-- Update college name
    period: "2023 - 2025",
    location: "City, State",
    coursework: [ ... ]
  }
]
```

### 3. Update Internship Experience
In `src/data/profile.ts`, under `internship`:
```typescript
internship: {
  role: "Software / IT Intern",
  company: "Your Host Company Name",          // <-- Update company name
  period: "June 2024 - August 2024",           // <-- Update duration
  location: "Location / Remote",
  overview: "...",
  mentorGuidance: "...",
  responsibilities: [ ... ],
  technologies: [ ... ],
  keyLearnings: [ ... ]
}
```

### 4. Add or Edit Projects
In `src/data/profile.ts`, under `projects`:
Each project includes:
- `title`, `tagline`, `category` (`'AI & ML' | 'Full-Stack' | 'IoT & Robotics' | 'Creative'`)
- `status` (`'Concept' | 'In Exploration' | 'Under Development' | 'Prototype Ready'`)
- `problemStatement`, `proposedSolution`, `technologies`, `contribution`, `highlights`
- `githubUrl`, `liveUrl`, `image`

### 5. Update Department President Information
In `src/data/profile.ts`, under `leadership`:
- `role`: "Department President"
- `context`: Student council election
- `selectionMethod`: Elected Department President
- `statement`: Leadership philosophy quote
- `coreResponsibilities` & `values`

---

## 🎨 Theme, Colors & Animation Customization

- **Colors**: Configured in `tailwind.config.js`:
  - Primary Accent: Neon Lime (`#ccff00`)
  - Secondary Accent: Electric Cyan (`#00f0ff`)
  - Background: Deep Black (`#030508`) & Midnight Navy (`#070a11`)
- **Sound Effects**: Synthesized via Web Audio API in `src/utils/audio.ts` (toggle sound on/off with the volume button in the navbar).
- **Navigation Shortcuts**: Press `Ctrl + K` or `⌘K` anywhere on desktop to launch the quick Command Palette.
- **Accessibility**: Automatically respects `prefers-reduced-motion` and disables the custom desktop cursor on touch/mobile devices.

---

## 🚀 Key Features Built

1. **Interactive 3D Particle Constellation**: Three.js background with dynamic connecting lines and mouse-reactive rotation (graceful 2D canvas fallback).
2. **Cinematic Opening Title Sequence**: Glowing initial "M", animated laser progress bar, and instant "Skip Intro" option.
3. **Hero Section with 3D Tilt**: Interactive portrait frame with depth perspective, rotating cyber ring, and floating glass status cards.
4. **All 13 Comprehensive Sections**:
   - Section 1: Hero
   - Section 2: About Me (*"MORE THAN JUST CODE."*)
   - Section 3: Academic Trajectory (M.Sc. CS Final Year)
   - Section 4: Technical Skills (No artificial percentages, categorized interactive cards)
   - Section 5: Complete Project Showcase (6 projects with expandable Deep Dive modal)
   - Section 6: Leadership & Department President (*"LEADERSHIP IS ABOUT RESPONSIBILITY."* with confetti celebration)
   - Section 7: Practical Internship (Trainer feedback, code reviews, and assigned tasks)
   - Section 8: Creative Side (*"The Hunt"* comic series, scriptwriting, and artwork lightbox)
   - Section 9: Career Objective (Verified quotation statement)
   - Section 10: Milestones & Trajectory Timeline
   - Section 11: Resume Section & ATS Preview Modal with Print layout
   - Section 12: Direct Contact Form with Mailto fallback & one-click email copy
   - Section 13: Footer with auto-updating copyright & back-to-top
5. **Command Palette (`Ctrl + K`)**: Quick jump to any section with keyboard navigation.
6. **Web Audio Synthesizer**: Click, hover, and modal tones without external audio assets.
7. **Responsive & Mobile Ready**: Tested for desktop, tablet, and mobile layouts.
