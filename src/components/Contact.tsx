import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  Phone,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROFILE_DATA } from '../data/profile';
import { soundFX } from '../utils/audio';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const { personal } = PROFILE_DATA;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);

  const handleCopyEmail = () => {
    soundFX.playClick();
    navigator.clipboard.writeText(personal.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playClick();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, Message).');
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setErrorMsg('');
    setSuccessMsg(true);
    soundFX.playSuccess();

    // Trigger celebration confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ccff00', '#00f0ff', '#ffffff'],
    });

    // Formulate pre-filled mailto fallback
    const subjectEncoded = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Hi Maharaja,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${personal.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Open user's email client
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 900);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-neon-lime uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-neon-lime" />
            <span>Section 12 // Direct Communication</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            GET IN <span className="text-neon-lime text-glow-lime">TOUCH.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3 max-w-xl">
            Currently open to entry-level IT roles, software development opportunities, and collaborative technology initiatives.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-lime to-transparent mt-4" />
        </div>

        {/* Contact Layout: Left Details (5 cols) & Right Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Primary Email Card with Quick Copy */}
            <div className="p-6 rounded-3xl glass-card border border-white/15">
              <span className="text-xs font-mono text-slate-400 block mb-1">
                Direct Email Inquiries
              </span>
              <p className="font-mono text-base sm:text-lg text-white font-semibold mb-4 break-all">
                {personal.email}
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 rounded-xl bg-neon-lime/10 border border-neon-lime/30 text-neon-lime text-xs font-mono font-semibold flex items-center gap-2 hover:bg-neon-lime hover:text-black transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personal.email}`}
                  className="p-2 rounded-xl glass-pill text-slate-300 hover:text-white"
                  title="Open mail client"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location & Phone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl glass-card border border-white/10">
                <MapPin className="w-5 h-5 text-neon-cyan mb-2" />
                <span className="text-[11px] font-mono text-slate-400 block">Location</span>
                <span className="text-sm font-semibold text-white">{personal.location}</span>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-white/10">
                <Phone className="w-5 h-5 text-neon-lime mb-2" />
                <span className="text-[11px] font-mono text-slate-400 block">Phone</span>
                <span className="text-xs font-semibold text-slate-200">{personal.phone}</span>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="p-6 rounded-3xl glass-card border border-white/15">
              <span className="text-xs font-mono text-slate-400 block mb-4">
                Verified Social & Code Profiles
              </span>
              <div className="flex flex-col gap-3">
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-neon-cyan/40 hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-neon-cyan" />
                    <div>
                      <span className="font-semibold text-sm text-white group-hover:text-neon-cyan transition-colors block">
                        LinkedIn
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        /in/maharaja-j-jmr555
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-neon-lime/40 hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-neon-lime" />
                    <div>
                      <span className="font-semibold text-sm text-white group-hover:text-neon-lime transition-colors block">
                        GitHub
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        /jmaharaja
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/15">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to dispatch an email inquiry directly to Maharaja.
              </p>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center gap-2 mb-6">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {successMsg && (
                <div className="p-4 rounded-xl bg-neon-lime/10 border border-neon-lime/40 text-neon-lime text-xs font-mono flex items-center gap-2 mb-6">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>
                    Thank you! Launching your default email client with your message pre-filled.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-neon-lime transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-neon-lime transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Opportunity
                  </label>
                  <input
                    type="text"
                    placeholder="Entry-Level Role / Project Collaboration / Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-neon-lime transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-neon-lime transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] font-mono text-slate-500">
                    * Direct client-side dispatch via verified email client.
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-neon-lime text-black font-display font-bold text-xs tracking-wider uppercase hover:bg-neon-limeBright hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-neon-lime"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
