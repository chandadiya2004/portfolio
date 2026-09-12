'use client';

import { GithubIcon, LinkedinIcon, ResearchGateIcon } from './Icons';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-hairline bg-canvas text-text-mute py-12 sm:py-16 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Colophon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Scholarly Profile & Affiliation (6 cols) */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-3">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-text-main">
                Diya Chanda
              </span>
              <span className="text-xs font-mono text-terracotta tracking-wider uppercase font-medium mt-1">
                AI Researcher &amp; Machine Learning Engineer
              </span>
            </div>

            <p className="text-xs text-text-sub leading-relaxed max-w-md">
              Undergraduate researcher in the Department of Computer Science &amp; Engineering (AI &amp; ML) at The Neotia University, maintaining a 9.48 CGPA. Author of 4 peer-reviewed publications across IEEE ICRITO, IEEE COMPUTINGCON, and Springer LNNS.
            </p>

            <div className="pt-2 text-[11px] font-mono text-text-mute flex flex-col gap-1">
              <span>Institution: The Neotia University · West Bengal, India</span>
              <span>Focus: Explainable AI (XAI) · Medical Diagnostics · RAG Architectures</span>
            </div>
          </div>

          {/* Column 2: Scholarly Indices & Directory (3 cols) */}
          <div className="md:col-span-3 lg:col-span-4 flex flex-col gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-text-main font-semibold">
              // Scholarly Indices
            </span>
            <ul className="flex flex-col gap-2 text-xs font-mono">
              <li>
                <a
                  href="https://www.researchgate.net/profile/Diya-Chanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-text-sub hover:text-terracotta transition-colors group"
                >
                  <ResearchGateIcon size={14} className="text-text-mute group-hover:text-terracotta transition-colors" />
                  <span>ResearchGate Profile</span>
                  <ArrowUpRight size={12} className="text-text-mute group-hover:text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/chandadiya2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-text-sub hover:text-terracotta transition-colors group"
                >
                  <GithubIcon size={14} className="text-text-mute group-hover:text-terracotta transition-colors" />
                  <span>GitHub Repositories</span>
                  <ArrowUpRight size={12} className="text-text-mute group-hover:text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/diya-chanda2004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-text-sub hover:text-terracotta transition-colors group"
                >
                  <LinkedinIcon size={14} className="text-text-mute group-hover:text-terracotta transition-colors" />
                  <span>LinkedIn Network</span>
                  <ArrowUpRight size={12} className="text-text-mute group-hover:text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="inline-flex items-center gap-2 text-text-sub hover:text-terracotta transition-colors group"
                >
                  <span className="text-[10px] text-terracotta font-mono">§01</span>
                  <span>IEEE &amp; Springer Papers</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:diya.chanda03@gmail.com"
                  className="inline-flex items-center gap-2 text-text-sub hover:text-terracotta transition-colors"
                >
                  <span className="text-[10px] text-emerald-600 font-mono">@</span>
                  <span>diya.chanda03@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Colophon Specifications (3 cols) */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-text-main font-semibold">
              // Colophon
            </span>
            <div className="text-[11px] font-mono text-text-mute flex flex-col gap-2">
              <div>
                <span className="text-text-sub block font-medium">Typefaces</span>
                <span>Newsreader Serif · Plus Jakarta Sans · JetBrains Mono</span>
              </div>
              <div>
                <span className="text-text-sub block font-medium">Palette</span>
                <span>Warm Monograph Canvas (#FAF8F5) · Obsidian (#11100F) · Terracotta (#C25E38)</span>
              </div>
              <div>
                <span className="text-text-sub block font-medium">Stack</span>
                <span>Next.js 14 App Router · TypeScript · Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="border-t border-hairline my-8 sm:my-10" />

        {/* Bottom Colophon Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-text-mute text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Diya Chanda. Academic monograph &amp; systems dossier.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-text-sub hover:text-terracotta transition-colors group cursor-pointer"
            aria-label="Return to top of page"
          >
            <span>Top of Page</span>
            <ArrowUp
              size={13}
              className="text-terracotta group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
