'use client';

import { ReactNode } from 'react';
import {
  Brain,
  Bot,
  Code2,
  Globe,
  Database,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  tag: string;
  scope: string;
  skills: string[];
}

interface SkillsClientProps {
  heading: string;
  eyebrow?: string;
  description?: string;
  categories: SkillCategory[];
}

const iconMap: Record<string, ReactNode> = {
  'ai-ml': <Brain size={18} className="text-terracotta" />,
  'gen-ai': <Bot size={18} className="text-terracotta" />,
  languages: <Code2 size={18} className="text-terracotta" />,
  'web-backend': <Globe size={18} className="text-terracotta" />,
  'databases-cloud': <Database size={18} className="text-terracotta" />,
  'devops-tools': <Terminal size={18} className="text-terracotta" />,
};

export const SkillsClient = ({
  heading,
  description,
  categories,
}: SkillsClientProps) => {
  const totalSkills = categories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 border-t border-hairline transition-colors w-full max-w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Monograph Chapter § 04 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 sm:mb-14 border-b border-hairline gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-terracotta tracking-wider uppercase font-semibold">
              <span>§ 04 // Laboratory Matrix</span>
              <span className="text-border-hairline font-sans">·</span>
              <span className="text-text-mute font-normal">Technical Competency &amp; Tooling</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight">
              {heading}
            </h2>
          </div>

          <div className="font-mono text-xs text-text-mute md:text-right max-w-sm">
            <span className="text-text-main font-semibold block text-sm">
              {totalSkills} Benchmarked Technologies
            </span>
            <span className="leading-tight block mt-0.5">
              {description || 'Curated directory of neural frameworks, production runtimes, and data infrastructure.'}
            </span>
          </div>
        </div>

        {/* Structured 6-Domain Laboratory Matrix (All Visible, Zero Filter Tabs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="p-5 sm:p-6 rounded-lg border border-hairline bg-surface/40 dark:bg-card/40 hover:bg-surface dark:hover:bg-card hover:border-terracotta/50 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-start justify-between pb-3 mb-3.5 border-b border-hairline gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded border border-hairline bg-canvas text-terracotta flex-shrink-0">
                      {iconMap[category.id] || <Cpu size={18} className="text-terracotta" />}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-text-main group-hover:text-terracotta transition-colors leading-snug">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-terracotta font-semibold uppercase tracking-wider block">
                        {category.tag}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-text-mute px-2 py-0.5 rounded border border-hairline bg-canvas flex-shrink-0">
                    0{category.skills.length} tools
                  </span>
                </div>

                {/* Scope Definition */}
                <p className="text-xs text-text-sub font-sans leading-relaxed mb-4">
                  {category.scope}
                </p>

                {/* Monospaced Skill Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-hairline bg-canvas/80 text-[11px] font-mono text-text-main font-medium group-hover:border-hairline"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Index Footer */}
              <div className="pt-4 mt-5 border-t border-hairline/60 flex items-center justify-between text-[10px] font-mono text-text-mute uppercase tracking-wider">
                <span>Domain Index 0{index + 1}</span>
                <span>Verified Stack</span>
              </div>
            </div>
          ))}
        </div>

        {/* Core Engineering Synthesis Strip */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-lg border border-hairline bg-surface/30 dark:bg-card/30">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-4">
            <Sparkles size={14} />
            <span>Core Engineering Synthesis</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
            <div className="border-l-2 border-terracotta/70 pl-3.5 space-y-1">
              <span className="text-text-main font-semibold block text-sm">
                01 // Empirical Research
              </span>
              <p className="text-text-sub font-sans text-xs leading-relaxed">
                PyTorch, TensorFlow, multi-headed CNNs, Grad-CAM interpretability, and cyclic learning rate optimization.
              </p>
            </div>

            <div className="border-l-2 border-terracotta/70 pl-3.5 space-y-1">
              <span className="text-text-main font-semibold block text-sm">
                02 // Applied AI &amp; RAG
              </span>
              <p className="text-text-sub font-sans text-xs leading-relaxed">
                FastAPI, Groq Llama-3.3, LangChain, ChromaDB vector indexing, and soil satellite physics APIs.
              </p>
            </div>

            <div className="border-l-2 border-terracotta/70 pl-3.5 space-y-1">
              <span className="text-text-main font-semibold block text-sm">
                03 // Production Platforms
              </span>
              <p className="text-text-sub font-sans text-xs leading-relaxed">
                Next.js 15, PostgreSQL, Supabase, Upstash Redis caching, Docker containerization, and OpenTelemetry tracing.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsClient;
