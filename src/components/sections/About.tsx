import aboutData from '../../data/sections/about.json';
import {
  GraduationCap,
  Award,
  Microscope,
  MapPin,
  Sparkles,
  Compass,
  Cpu,
  Eye,
  Zap,
  Layers,
  ArrowRight,
  Heart,
  Code2,
} from 'lucide-react';
import { ReactNode } from 'react';

const pillarIconMap: Record<string, ReactNode> = {
  'pillar-1': <Cpu size={18} className="text-terracotta" />,
  'pillar-2': <Eye size={18} className="text-terracotta" />,
  'pillar-3': <Zap size={18} className="text-terracotta" />,
  'pillar-4': <Layers size={18} className="text-terracotta" />,
};

export const About = () => {
  const {
    heading,
    summary,
    academicProfile,
    interests,
    corePillars,
    timeline,
    mission,
    values,
  } = aboutData;

  return (
    <section
      id="about"
      className="py-16 sm:py-24 border-t border-hairline transition-colors w-full max-w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Monograph Chapter § 05 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 sm:mb-14 border-b border-hairline gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-terracotta tracking-wider uppercase font-semibold">
              <span>§ 05 // Research Monograph</span>
              <span className="text-border-hairline font-sans">·</span>
              <span className="text-text-mute font-normal">Academic Tenets &amp; Foundations</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight">
              {heading}
            </h2>
          </div>

          <div className="font-mono text-xs text-text-mute md:text-right max-w-sm">
            <span className="text-text-main font-semibold block text-sm">
              The Neotia University · Kolkata, India
            </span>
            <span className="leading-tight block mt-0.5">
              B.Tech CSE (AI &amp; ML) · Cumulative GPA: {academicProfile.cgpa}
            </span>
          </div>
        </div>

        {/* Narrative Summary Lead */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-sm sm:text-base md:text-lg text-text-sub leading-relaxed font-sans">
            {summary}
          </p>
        </div>

        {/* 2-Column Monograph Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Academic Registry & Mission (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Academic Registry Card */}
            <div className="p-5 sm:p-6 rounded-lg border border-hairline bg-surface/40 dark:bg-card/40">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-hairline text-xs font-mono uppercase tracking-widest text-terracotta font-semibold">
                <GraduationCap size={15} />
                <span>Academic Profile &amp; Registry</span>
              </div>

              <div className="space-y-4 font-mono text-xs divide-y divide-hairline/60">
                <div className="flex items-start justify-between gap-3 pt-2 first:pt-0">
                  <span className="text-text-mute">Institution</span>
                  <span className="text-text-main font-medium text-right">{academicProfile.institution}</span>
                </div>

                <div className="flex items-start justify-between gap-3 pt-3">
                  <span className="text-text-mute">Degree</span>
                  <span className="text-text-main font-medium text-right">{academicProfile.degree}</span>
                </div>

                <div className="flex items-start justify-between gap-3 pt-3">
                  <span className="text-text-mute">Specialization</span>
                  <span className="text-text-main font-medium text-right">{academicProfile.specialization}</span>
                </div>

                <div className="flex items-start justify-between gap-3 pt-3">
                  <span className="text-text-mute">Cumulative GPA</span>
                  <div className="flex items-center gap-2">
                    <span className="text-terracotta font-bold text-sm">{academicProfile.cgpa}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded border border-terracotta/30 bg-terracotta/10 text-terracotta font-semibold">
                      Top Decile
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3 pt-3">
                  <span className="text-text-mute">Tenure</span>
                  <span className="text-text-main font-medium">{academicProfile.batch}</span>
                </div>

                <div className="flex items-start justify-between gap-3 pt-3">
                  <span className="text-text-mute">Location</span>
                  <span className="text-text-main font-medium flex items-center gap-1">
                    <MapPin size={11} className="text-terracotta" />
                    <span>{academicProfile.location}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Engineering Mission Quote */}
            <div className="p-5 sm:p-6 rounded-lg border border-hairline bg-surface/40 dark:bg-card/40">
              <div className="flex items-center gap-1.5 pb-2 mb-3 border-b border-hairline text-xs font-mono uppercase tracking-widest text-terracotta font-semibold">
                <Compass size={14} />
                <span>Engineering Mission</span>
              </div>
              <blockquote className="font-serif text-sm sm:text-base italic text-text-main leading-relaxed border-l-2 border-terracotta/70 pl-3.5 my-2">
                &ldquo;{mission}&rdquo;
              </blockquote>
            </div>

            {/* Interests & Explorations */}
            <div className="p-5 sm:p-6 rounded-lg border border-hairline bg-surface/40 dark:bg-card/40">
              <div className="flex items-center gap-1.5 pb-2 mb-3 border-b border-hairline text-xs font-mono uppercase tracking-widest text-text-mute font-semibold">
                <Sparkles size={13} className="text-terracotta" />
                <span>Interests &amp; Explorations</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {interests.map((interest: string, i: number) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded border border-hairline bg-canvas/80 text-[11px] font-mono text-text-sub font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Pillars & Trajectory Milestones (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Core Pillars */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-terracotta font-semibold">
                <Code2 size={14} />
                <span>Core Research &amp; Engineering Pillars</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {corePillars.map((pillar: any) => (
                  <div
                    key={pillar.id}
                    className="p-4 sm:p-5 rounded-lg border border-hairline bg-surface/40 dark:bg-card/40 hover:border-terracotta/50 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-hairline">
                        <div className="p-1.5 rounded border border-hairline bg-canvas">
                          {pillarIconMap[pillar.id] || <Code2 size={16} className="text-terracotta" />}
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-text-mute px-2 py-0.5 rounded border border-hairline bg-canvas">
                          {pillar.tag}
                        </span>
                      </div>

                      <h4 className="font-serif text-base font-bold text-text-main group-hover:text-terracotta transition-colors mb-1.5">
                        {pillar.title}
                      </h4>

                      <p className="text-xs text-text-sub font-sans leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic & Research Milestones Timeline */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-widest text-terracotta font-semibold">
                <Microscope size={14} />
                <span>Academic &amp; Research Milestones</span>
              </div>

              <div className="relative pl-6 border-l border-hairline space-y-8 ml-2">
                {timeline.map((item: any, i: number) => (
                  <div key={i} className="relative group">
                    {/* Hairline Bullet */}
                    <div className="absolute -left-[30px] top-1 w-2.5 h-2.5 rounded-full bg-canvas border border-terracotta group-hover:scale-125 transition-transform" />

                    <div className="text-xs font-mono font-bold text-terracotta mb-1 flex items-center gap-1.5">
                      <span>{item.year}</span>
                      <ArrowRight size={11} className="opacity-60" />
                    </div>

                    <h4 className="font-serif text-base sm:text-lg font-bold text-text-main leading-snug">
                      {item.title}
                    </h4>

                    {item.titleSecondary && (
                      <p className="text-xs font-mono text-terracotta/90 font-medium mt-0.5">
                        {item.titleSecondary}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-text-sub font-sans leading-relaxed mt-1.5">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Guiding Principles */}
            <div className="p-5 rounded-lg border border-hairline bg-surface/30 dark:bg-card/30">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-text-mute font-semibold mb-3">
                <Heart size={13} className="text-terracotta" />
                <span>Guiding Principles</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {values.map((val: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded border border-hairline bg-canvas/80 text-text-main text-xs font-mono font-medium"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
