import Image from 'next/image';
import heroData from '../../data/sections/hero.json';
import researchData from '../../data/sections/research.json';
import projectsData from '../../data/sections/projects.json';
import { ArrowUpRight, ArrowDownRight, FileDown, BookOpen, Award, FolderGit2, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, ResearchGateIcon } from '../common/Icons';

export const Hero = () => {
  const papersCount = researchData.papers.length;
  const projectsCount = projectsData.projects.length;

  const socials = heroData.socials || {
    github: 'https://github.com/chandadiya2004',
    linkedin: 'https://www.linkedin.com/in/diya-chanda2004/',
    researchgate: 'https://www.researchgate.net/profile/Diya-Chanda',
  };

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 transition-colors w-full max-w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Monograph Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* Left Column: Monograph Narrative & Credentials (7 cols lg, 8 cols xl) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            
            {/* Monograph Chapter & Availability Marker */}
            <div className="flex flex-wrap items-center gap-2 mb-3.5 sm:mb-4">
              <span className="text-[11px] font-mono text-terracotta tracking-wider uppercase font-semibold">
                § 00 // Monograph 2026
              </span>
              <span className="text-border-hairline font-sans text-xs">·</span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface dark:bg-card border border-hairline text-[10px] sm:text-[11px] font-mono text-text-sub">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span>Available for AI Research &amp; Engineering</span>
              </div>
            </div>

            {/* Editorial Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-text-main leading-[1.02] mb-2.5">
              {heroData.name}
            </h1>

            {/* Disciplines & Academic Stance */}
            <p className="font-mono text-xs sm:text-[13px] text-text-sub mb-4 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-terracotta font-medium">B.Tech CSE (AI &amp; ML)</span>
              <span className="text-border-hairline font-sans">|</span>
              <span>The Neotia University (9.48 CGPA)</span>
              <span className="text-border-hairline font-sans">|</span>
              <span className="text-text-main font-medium">IEEE &amp; Springer Author</span>
            </p>

            {/* Editorial Serif Quotation / Stance */}
            <div className="border-l-2 border-terracotta/70 pl-4 sm:pl-5 my-2.5 sm:my-3 py-1">
              <p className="text-sm sm:text-base md:text-lg text-text-main font-serif italic leading-snug">
                &ldquo;Bridging empirical deep learning research with production systems engineering—specializing in explainable AI, multi-task vision architectures, and grounded RAG pipelines.&rdquo;
              </p>
            </div>

            {/* Technical Narrative Prose */}
            <p className="text-xs sm:text-[13px] text-text-sub leading-relaxed max-w-2xl my-3 sm:my-4">
              {heroData.description}
            </p>

            {/* Primary Action Suite */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1 mb-5 sm:mb-6">
              <a
                href="#research"
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-hover text-white font-mono text-xs font-medium px-4 py-2.5 rounded-md shadow-xs transition-colors group"
              >
                <span>Read Selected Research</span>
                <ArrowDownRight size={14} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-surface dark:bg-card hover:bg-card border border-hairline hover:border-terracotta text-text-main hover:text-terracotta font-mono text-xs font-medium px-4 py-2.5 rounded-md transition-colors"
              >
                <span>Inspect Applied Systems</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={heroData.resumeUrl || '/resume.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                download="Diya_Chanda_Resume.pdf"
                className="inline-flex items-center gap-1.5 bg-surface dark:bg-card hover:bg-card border border-hairline hover:border-terracotta text-text-sub hover:text-terracotta font-mono text-xs font-medium px-3.5 py-2.5 rounded-md transition-colors"
              >
                <FileDown size={14} className="text-terracotta" />
                <span>Curriculum Vitae</span>
              </a>
            </div>

            {/* Quick Scholarly Directories */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-text-sub pt-0.5">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-text-mute font-semibold">
                Scholarly Indices:
              </span>
              <a
                href={socials.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-text-sub hover:text-terracotta transition-colors group"
              >
                <ResearchGateIcon size={14} className="text-text-mute group-hover:text-terracotta transition-colors" />
                <span>ResearchGate</span>
              </a>
              <span className="text-border-hairline font-sans">·</span>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-text-sub hover:text-terracotta transition-colors group"
              >
                <GithubIcon size={14} className="text-text-mute group-hover:text-terracotta transition-colors" />
                <span>GitHub</span>
              </a>
              <span className="text-border-hairline font-sans">·</span>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-text-sub hover:text-terracotta transition-colors group"
              >
                <LinkedinIcon size={14} className="text-text-mute group-hover:text-terracotta transition-colors" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Photographic Plate & Dossier Ledger (Aligned with Left Column Height) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-2.5 w-full max-w-[260px] sm:max-w-[280px] lg:max-w-[270px] xl:max-w-[280px] mx-auto lg:ml-auto">
            
            {/* Photographic Plate with Archival Registration Marks */}
            <div className="relative p-2 bg-surface dark:bg-card border border-hairline rounded-lg shadow-xs group">
              {/* Corner Registration Marks (Monograph Style) */}
              <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-terracotta" />
              <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-terracotta" />
              <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-terracotta" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-terracotta" />

              {/* Framed Square Portrait Image (Full Head & Face Unclipped) */}
              <div className="relative aspect-square w-full overflow-hidden rounded border border-hairline bg-canvas/50">
                <Image
                  src="/images/profile-square.png"
                  alt="Diya Chanda — AI Researcher & Machine Learning Engineer"
                  fill
                  priority
                  sizes="280px"
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Plate Caption */}
              <div className="flex items-center justify-between text-[10px] font-mono text-text-mute uppercase tracking-wider pt-2 px-0.5">
                <span>Plate 01 // Diya Chanda</span>
                <span>Kolkata, IN</span>
              </div>
            </div>

            {/* Structured Dossier Ledger */}
            <div className="border border-hairline rounded-lg p-2.5 sm:p-3 bg-surface/60 dark:bg-card/60 font-mono text-[11px] divide-y divide-hairline">
              <div className="flex justify-between items-center py-1">
                <span className="text-text-mute">Seat</span>
                <span className="text-text-main font-medium text-right truncate ml-2">The Neotia Univ.</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-text-mute">CGPA</span>
                <span className="text-terracotta font-semibold">9.48 / 10.0</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-text-mute">Papers</span>
                <span className="text-text-main font-medium">4 (IEEE &amp; Springer)</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-text-mute">Focus</span>
                <span className="text-text-main font-medium text-right truncate ml-2">XAI · Vision · RAG</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Monograph Telemetry Rule & Benchmark Strip */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-hairline">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            <a
              href="#research"
              className="p-4 rounded-lg border border-hairline bg-surface/40 dark:bg-card/40 hover:bg-surface hover:border-terracotta/50 transition-all group"
            >
              <div className="flex items-center gap-2 mb-1">
                <BookOpen size={16} className="text-terracotta" />
                <span className="font-serif text-2xl sm:text-3xl font-bold text-text-main group-hover:text-terracotta transition-colors">
                  0{papersCount}
                </span>
              </div>
              <p className="text-xs font-mono text-text-sub font-medium">
                Published Papers
              </p>
              <span className="text-[10px] font-mono text-text-mute block mt-0.5">
                IEEE ICRITO &amp; Springer LNNS
              </span>
            </a>

            <div className="p-4 rounded-lg border border-hairline bg-surface/40 dark:bg-card/40">
              <div className="flex items-center gap-2 mb-1">
                <Award size={16} className="text-terracotta" />
                <span className="font-serif text-2xl sm:text-3xl font-bold text-text-main">
                  9.48
                </span>
              </div>
              <p className="text-xs font-mono text-text-sub font-medium">
                Academic CGPA
              </p>
              <span className="text-[10px] font-mono text-text-mute block mt-0.5">
                The Neotia University
              </span>
            </div>

            <div className="p-4 rounded-lg border border-hairline bg-surface/40 dark:bg-card/40">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles size={16} className="text-terracotta" />
                <span className="font-serif text-2xl sm:text-3xl font-bold text-text-main">
                  99%
                </span>
              </div>
              <p className="text-xs font-mono text-text-sub font-medium">
                Diagnostic Accuracy
              </p>
              <span className="text-[10px] font-mono text-text-mute block mt-0.5">
                Multi-Headed CNN + Grad-CAM
              </span>
            </div>

            <a
              href="#projects"
              className="p-4 rounded-lg border border-hairline bg-surface/40 dark:bg-card/40 hover:bg-surface hover:border-terracotta/50 transition-all group"
            >
              <div className="flex items-center gap-2 mb-1">
                <FolderGit2 size={16} className="text-terracotta" />
                <span className="font-serif text-2xl sm:text-3xl font-bold text-text-main group-hover:text-terracotta transition-colors">
                  0{projectsCount}+
                </span>
              </div>
              <p className="text-xs font-mono text-text-sub font-medium">
                Engineered Systems
              </p>
              <span className="text-[10px] font-mono text-text-mute block mt-0.5">
                Full-Stack RAG &amp; Vision
              </span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
