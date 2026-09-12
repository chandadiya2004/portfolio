'use client';

import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Clock,
  Building2,
} from 'lucide-react';

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  type: string;
  category?: string;
  description: string;
  highlights: string[];
  skills: string[];
}

interface ExperienceClientProps {
  heading: string;
  eyebrow?: string;
  description?: string;
  experiences: ExperienceItem[];
}

export const ExperienceClient = ({
  heading,
  description,
  experiences,
}: ExperienceClientProps) => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-24 border-t border-hairline transition-colors w-full max-w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Monograph Chapter § 03 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 sm:mb-14 border-b border-hairline gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-terracotta tracking-wider uppercase font-semibold">
              <span>§ 03 // Career Trajectory</span>
              <span className="text-border-hairline font-sans">·</span>
              <span className="text-text-mute font-normal">Research Appointments &amp; Tenures</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight">
              {heading}
            </h2>
          </div>

          <div className="font-mono text-xs text-text-mute md:text-right max-w-sm">
            <span className="text-text-main font-semibold block text-sm">
              0{experiences.length} Verified Appointments
            </span>
            <span className="leading-tight block mt-0.5">
              {description || 'NIT Durgapur · Xetalabs · Webel · DataSpace Academy'}
            </span>
          </div>
        </div>

        {/* Continuous Chronological Ledger (All 4 Appointments Uninterrupted) */}
        <div className="divide-y divide-hairline">
          {experiences.map((exp, index) => (
            <article
              key={exp.id}
              className="py-8 sm:py-12 first:pt-0 last:pb-0 transition-colors group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                
                {/* Left Marginalia: Tenure Gutter (3 cols) */}
                <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start gap-3 flex-wrap">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xs text-text-mute font-semibold">
                      [0{index + 1}]
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-terracotta">
                      {exp.duration}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5 font-mono text-[11px]">
                    <span className="inline-flex items-center gap-1.5 w-fit px-2 py-0.5 rounded border border-hairline bg-surface dark:bg-card text-text-sub font-medium">
                      <Clock size={11} className="text-terracotta flex-shrink-0" />
                      <span>{exp.period}</span>
                    </span>

                    <div className="text-text-mute flex items-center gap-1">
                      <Building2 size={11} className="opacity-70 flex-shrink-0" />
                      <span className="truncate">{exp.type}</span>
                    </div>

                    <div className="text-text-mute flex items-center gap-1">
                      <MapPin size={11} className="opacity-70 flex-shrink-0" />
                      <span className="truncate">{exp.location}</span>
                    </div>

                    {exp.category && (
                      <span className="text-[10px] font-mono text-text-mute uppercase tracking-wider mt-1">
                        Domain: {exp.category}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Dossier Body: Role, Organization, Accomplishments & Skills (9 cols) */}
                <div className="lg:col-span-9 flex flex-col">
                  
                  {/* Role Title & Host Institution */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-text-main group-hover:text-terracotta transition-colors leading-snug">
                    {exp.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-text-mute font-medium mt-1">
                    {exp.company}
                  </p>

                  {/* Narrative Scope */}
                  <p className="text-xs sm:text-sm text-text-sub leading-relaxed mt-3 font-sans">
                    {exp.description}
                  </p>

                  {/* Bulleted Contributions Ledger */}
                  <div className="mt-4 p-4 rounded-lg border border-hairline bg-surface/50 dark:bg-card/50">
                    <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-text-mute font-semibold pb-2 mb-2.5 border-b border-hairline">
                      Key Deliverables &amp; Research Focus
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-text-main">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 min-w-0">
                          <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applied Tooling Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-4">
                    <span className="text-[11px] font-mono text-text-mute uppercase tracking-wider mr-1">
                      Applied Tooling:
                    </span>
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded border border-hairline bg-surface/80 dark:bg-card/80 text-text-sub font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceClient;
