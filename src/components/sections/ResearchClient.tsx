'use client';

import { useState } from 'react';
import {
  BookOpen,
  ExternalLink,
  MapPin,
  Calendar,
  CheckCircle2,
  FileText,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Quote,
} from 'lucide-react';

interface Paper {
  id: number;
  title: string;
  authors: string[];
  publishedIn: string;
  conferenceLocation: string;
  date: string;
  publisher: string;
  doi?: string;
  doiLink: string;
  bookLink?: string;
  pages?: string;
  abstract: string;
  keyMetrics: string[];
}

interface ResearchClientProps {
  heading: string;
  papers: Paper[];
}

export const ResearchClient = ({ heading, papers }: ResearchClientProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleCopyCitation = (paper: Paper) => {
    const citation = `${paper.authors.join(', ')} (${paper.date.slice(-4)}). "${paper.title}." In ${paper.publishedIn}${paper.pages ? `, pp. ${paper.pages}` : ''}. ${paper.publisher}. DOI: ${paper.doi || paper.doiLink}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(paper.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section
      id="research"
      className="py-16 sm:py-24 border-t border-hairline transition-colors w-full max-w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Monograph Chapter § 01 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 sm:mb-14 border-b border-hairline gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-terracotta tracking-wider uppercase font-semibold">
              <span>§ 01 // Empirical Research</span>
              <span className="text-border-hairline font-sans">·</span>
              <span className="text-text-mute font-normal">Peer-Reviewed Bibliography</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight">
              {heading}
            </h2>
          </div>

          <div className="font-mono text-xs text-text-mute md:text-right max-w-sm">
            <span className="text-text-main font-semibold block text-sm">
              0{papers.length} Peer-Reviewed Articles
            </span>
            <span className="leading-tight block mt-0.5">
              IEEE Xplore · Springer LNNS · Explainable Deep Learning (XAI)
            </span>
          </div>
        </div>

        {/* Scholarly Bibliography Grid */}
        <div className="divide-y divide-hairline">
          {papers.map((paper, index) => {
            const isExpanded = expandedId === paper.id;
            const venueYear = paper.date.match(/\d{4}/)?.[0] || '2025';

            return (
              <article
                key={paper.id}
                className="py-8 sm:py-12 transition-colors group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  
                  {/* Left Column: Marginalia Gutter (3 cols) */}
                  <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start gap-3 flex-wrap">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-xs text-text-mute font-semibold">
                        [0{index + 1}]
                      </span>
                      <span className="font-serif text-2xl font-bold text-text-main">
                        {venueYear}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5 font-mono text-[11px]">
                      <span className="inline-flex items-center gap-1.5 w-fit px-2.5 py-0.5 rounded border border-hairline bg-surface dark:bg-card text-terracotta font-semibold uppercase tracking-wider">
                        <BookOpen size={11} />
                        <span>{paper.publisher} · {paper.publishedIn.includes('LNNS') ? 'Springer LNNS' : 'IEEE Xplore'}</span>
                      </span>

                      <div className="text-text-mute flex items-center gap-1 mt-0.5">
                        <Calendar size={11} className="opacity-70 flex-shrink-0" />
                        <span>{paper.date}</span>
                      </div>

                      <div className="text-text-mute flex items-center gap-1">
                        <MapPin size={11} className="opacity-70 flex-shrink-0" />
                        <span className="truncate">{paper.conferenceLocation}</span>
                      </div>

                      {paper.doi && (
                        <span className="text-[10px] text-text-mute truncate mt-1 pt-1 border-t border-hairline/60">
                          DOI: {paper.doi}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Title, Authors, Metrics & Inline Abstract (9 cols) */}
                  <div className="lg:col-span-9 flex flex-col">
                    
                    {/* Paper Title */}
                    <h3 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold text-text-main group-hover:text-terracotta transition-colors leading-snug">
                      {paper.title}
                    </h3>

                    {/* Venue Details */}
                    <p className="text-xs sm:text-sm font-mono text-text-sub mt-2 leading-relaxed">
                      <span className="text-text-mute uppercase tracking-wider text-[11px] font-semibold">Venue: </span>
                      <span className="text-text-main font-medium">{paper.publishedIn}</span>
                      {paper.pages ? ` (pp. ${paper.pages})` : ''}
                    </p>

                    {/* Authors List */}
                    <p className="text-xs sm:text-sm text-text-sub mt-2 leading-relaxed">
                      <span className="font-semibold text-text-mute font-mono text-[11px] uppercase tracking-wider">
                        Authors:{' '}
                      </span>
                      {paper.authors.map((author, idx) => {
                        const isDiya = author.toLowerCase().includes('diya chanda');
                        return (
                          <span key={idx}>
                            {isDiya ? (
                              <span className="font-bold text-terracotta underline decoration-terracotta/40 underline-offset-2">
                                {author}
                              </span>
                            ) : (
                              <span>{author}</span>
                            )}
                            {idx < paper.authors.length - 1 ? ', ' : ''}
                          </span>
                        );
                      })}
                    </p>

                    {/* Key Findings Chips */}
                    {paper.keyMetrics && paper.keyMetrics.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 mt-3.5">
                        <span className="text-[11px] font-mono text-text-mute font-semibold uppercase tracking-wider">
                          Key Results:
                        </span>
                        {paper.keyMetrics.map((metric, mIdx) => (
                          <span
                            key={mIdx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-hairline bg-surface/80 dark:bg-card/80 text-[11px] font-mono text-text-main font-medium"
                          >
                            <CheckCircle2 size={12} className="text-emerald-500 flex-shrink-0" />
                            <span>{metric}</span>
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Bar */}
                    <div className="flex flex-wrap items-center gap-2.5 mt-5 pt-3 border-t border-hairline/60">
                      {/* Inline Abstract Toggle */}
                      <button
                        onClick={() => toggleExpand(paper.id)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-hairline bg-surface dark:bg-card hover:border-terracotta text-text-main hover:text-terracotta text-xs font-mono font-medium transition-colors cursor-pointer"
                        aria-expanded={isExpanded}
                      >
                        <FileText size={13} className="text-terracotta" />
                        <span>{isExpanded ? 'Collapse Abstract' : 'Read Abstract'}</span>
                        {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                      </button>

                      {/* Direct DOI Publication Link */}
                      <a
                        href={paper.doiLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-hairline bg-surface dark:bg-card hover:border-terracotta text-text-sub hover:text-terracotta text-xs font-mono font-medium transition-colors"
                      >
                        <span>{paper.publisher === 'Springer' ? 'SpringerLink Chapter' : 'IEEE Xplore Article'}</span>
                        <ExternalLink size={12} />
                      </a>

                      {/* Springer Book Link (if present) */}
                      {paper.bookLink && (
                        <a
                          href={paper.bookLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-hairline bg-surface dark:bg-card hover:border-terracotta text-text-sub hover:text-terracotta text-xs font-mono font-medium transition-colors"
                        >
                          <span>Springer Book Series</span>
                          <ExternalLink size={12} />
                        </a>
                      )}

                      {/* Copy Citation Button */}
                      <button
                        onClick={() => handleCopyCitation(paper)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-hairline bg-surface dark:bg-card hover:border-terracotta text-text-sub hover:text-text-main text-xs font-mono transition-colors ml-auto cursor-pointer"
                        title="Copy IEEE citation format to clipboard"
                      >
                        {copiedId === paper.id ? (
                          <>
                            <Check size={12} className="text-emerald-500" />
                            <span className="text-emerald-500 font-medium">Citation Copied</span>
                          </>
                        ) : (
                          <>
                            <Quote size={12} className="text-text-mute" />
                            <span>Cite</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Inline Expandable Abstract Dossier */}
                    {isExpanded && (
                      <div className="mt-4 p-4 sm:p-6 rounded-lg border border-hairline bg-surface/50 dark:bg-card/50 transition-all animate-fadeIn">
                        <div className="flex items-center justify-between pb-2 mb-3 border-b border-hairline">
                          <span className="text-[11px] font-mono uppercase tracking-widest text-text-mute font-semibold">
                            Abstract &amp; Study Methodology
                          </span>
                          {paper.doi && (
                            <span className="text-[10px] font-mono text-text-mute">
                              DOI: {paper.doi}
                            </span>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-text-main leading-relaxed text-justify font-sans">
                          {paper.abstract}
                        </p>

                        {/* Citation block */}
                        <div className="mt-4 pt-3 border-t border-hairline/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-text-sub">
                          <span>
                            Citation: {paper.authors[0]} et al., {venueYear}, {paper.publisher}.
                          </span>
                          <button
                            onClick={() => handleCopyCitation(paper)}
                            className="inline-flex items-center gap-1 text-terracotta hover:underline cursor-pointer"
                          >
                            <Copy size={12} />
                            <span>{copiedId === paper.id ? 'Copied to Clipboard' : 'Copy Full Citation'}</span>
                          </button>
                        </div>
                      </div>
                    )}

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

export default ResearchClient;
