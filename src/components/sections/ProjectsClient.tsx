'use client';

import Image from 'next/image';
import {
  ArrowUpRight,
  CheckCircle2,
  Activity,
  Terminal,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon } from '../common/Icons';

interface Project {
  id: number;
  title: string;
  tagline: string;
  category: string;
  status: string;
  featured: boolean;
  image: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string | null;
}

interface ProjectsClientProps {
  heading: string;
  eyebrow?: string;
  description?: string;
  projects: Project[];
}

export const ProjectsClient = ({
  heading,
  description,
  projects,
}: ProjectsClientProps) => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-24 border-t border-hairline transition-colors w-full max-w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Monograph Chapter § 02 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 sm:mb-14 border-b border-hairline gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-terracotta tracking-wider uppercase font-semibold">
              <span>§ 02 // Applied Intelligence</span>
              <span className="text-border-hairline font-sans">·</span>
              <span className="text-text-mute font-normal">Production Systems &amp; Web Architectures</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight">
              {heading}
            </h2>
          </div>

          <div className="font-mono text-xs text-text-mute md:text-right max-w-sm">
            <span className="text-text-main font-semibold block text-sm">
              0{projects.length} System Blueprints
            </span>
            <span className="leading-tight block mt-0.5">
              {description || 'Enterprise compliance, climate-smart agronomy engines, and generative AI platforms.'}
            </span>
          </div>
        </div>

        {/* Systems Dossier Stream (All 4 Projects) */}
        <div className="divide-y divide-hairline">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="py-10 sm:py-16 first:pt-0 last:pb-0 transition-colors group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Visual Viewport Plate (5 cols) */}
                  <div className={`lg:col-span-5 flex flex-col gap-2.5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative p-2 sm:p-2.5 bg-surface dark:bg-card border border-hairline rounded-lg shadow-xs group">
                      {/* Corner Registration Marks (Monograph Style) */}
                      <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-terracotta" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-terracotta" />
                      <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-terracotta" />
                      <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-terracotta" />

                      {/* Viewport Image Container */}
                      <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full overflow-hidden rounded border border-hairline bg-surface">
                        <Image
                          src={project.image}
                          alt={`${project.title} — ${project.tagline}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                          className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        />

                        {/* Status Overlay Pill */}
                        <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded bg-canvas/90 backdrop-blur-md border border-hairline text-[10px] font-mono font-medium text-text-main shadow-xs">
                          <span
                            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              project.demo ? 'bg-emerald-500 animate-pulse' : 'bg-terracotta'
                            }`}
                          />
                          <span className="truncate">{project.status}</span>
                        </div>
                      </div>

                      {/* Technical Viewport Caption */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-text-mute uppercase tracking-wider pt-2 px-1">
                        <span>SYS VIEWPORT 0{project.id}</span>
                        <span className="truncate max-w-[180px] text-right">{project.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Technical Specifications & Dossier Body (7 cols) */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      {/* Sub-header Index & Category */}
                      <div className="flex items-center gap-2 mb-2 font-mono text-xs text-text-mute">
                        <span className="font-semibold text-terracotta">
                          [SYS 0{project.id}]
                        </span>
                        <span className="text-border-hairline font-sans">·</span>
                        <span className="uppercase tracking-wider text-[11px] font-medium">
                          {project.category}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-[28px] font-bold text-text-main group-hover:text-terracotta transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs sm:text-sm text-text-mute font-medium mt-1 leading-snug">
                        {project.tagline}
                      </p>

                      {/* Narrative Prose */}
                      <p className="text-xs sm:text-sm text-text-sub leading-relaxed mt-4 font-sans">
                        {project.description}
                      </p>

                      {/* Architectural Specifications Box */}
                      <div className="mt-5 p-4 rounded-lg border border-hairline bg-surface/50 dark:bg-card/50">
                        <div className="flex items-center gap-1.5 pb-2 mb-2.5 border-b border-hairline text-[11px] font-mono uppercase tracking-widest text-text-mute font-semibold">
                          <Terminal size={12} className="text-terracotta" />
                          <span>Architectural Telemetry &amp; Capabilities</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.highlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs font-mono text-text-main min-w-0">
                              <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span className="leading-snug">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-5">
                        <span className="text-[11px] font-mono text-text-mute uppercase tracking-wider mr-1">
                          Stack:
                        </span>
                        {project.tech.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded border border-hairline bg-surface/80 dark:bg-card/80 text-text-sub font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-6 pt-4 border-t border-hairline">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-terracotta hover:bg-terracotta-hover text-white font-mono text-xs font-medium px-4 py-2 rounded-md shadow-xs transition-colors group/btn"
                        >
                          <span>Launch Live System</span>
                          <ArrowUpRight size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-surface dark:bg-card hover:bg-card border border-hairline hover:border-terracotta text-text-main hover:text-terracotta font-mono text-xs font-medium px-4 py-2 rounded-md transition-colors"
                        >
                          <GithubIcon size={14} />
                          <span>Inspect Source</span>
                          <ExternalLink size={12} className="opacity-70" />
                        </a>
                      )}

                      {!project.demo && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-text-mute py-1">
                          <Activity size={13} className="text-terracotta flex-shrink-0" />
                          <span>Research &amp; Advisory Engine</span>
                        </span>
                      )}
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsClient;
