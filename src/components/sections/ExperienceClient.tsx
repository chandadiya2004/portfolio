'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  Building2,
  Brain,
  Server,
  ShieldCheck,
  Clock,
  ChevronRight,
  ChevronLeft,
  Code2,
  Layers,
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

const categoryIcon = (category?: string, size = 16) => {
  if (!category) return <Briefcase size={size} className="text-terracotta" />;
  if (category.toLowerCase().includes('ai') || category.toLowerCase().includes('deep')) {
    return <Brain size={size} className="text-terracotta" />;
  }
  if (category.toLowerCase().includes('backend')) {
    return <Server size={size} className="text-terracotta" />;
  }
  if (category.toLowerCase().includes('security') || category.toLowerCase().includes('cyber')) {
    return <ShieldCheck size={size} className="text-terracotta" />;
  }
  return <Briefcase size={size} className="text-terracotta" />;
};

export const ExperienceClient = ({
  heading,
  eyebrow,
  description,
  experiences,
}: ExperienceClientProps) => {
  const [activeId, setActiveId] = useState<number>(experiences[0]?.id ?? 1);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const activeIndex = useMemo(
    () => experiences.findIndex((exp) => exp.id === activeId),
    [experiences, activeId]
  );

  const activeExperience = experiences[activeIndex] || experiences[0];

  const prevExperience = activeIndex > 0 ? experiences[activeIndex - 1] : null;
  const nextExperience =
    activeIndex < experiences.length - 1 ? experiences[activeIndex + 1] : null;

  const goToPrev = () => {
    if (prevExperience) setActiveId(prevExperience.id);
  };

  const goToNext = () => {
    if (nextExperience) setActiveId(nextExperience.id);
  };

  const isInitialMount = useRef(true);

  // Keep mobile tab centered horizontally within tabsContainerRef ONLY after user switches activeId
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const activeTabEl = document.getElementById(`mobile-tab-${activeId}`);
    const container = tabsContainerRef.current;
    if (activeTabEl && container) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeTabEl.getBoundingClientRect();
      const offset =
        tabRect.left - containerRect.left - container.clientWidth / 2 + activeTabEl.clientWidth / 2;
      container.scrollBy({ left: offset, behavior: 'smooth' });
    }
  }, [activeId]);

  // Touch swipe support on mobile/tablet dossier card
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;

    // Detect horizontal swipe with minimum threshold and horizontal dominance
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
      if (deltaX > 0 && nextExperience) {
        goToNext();
      } else if (deltaX < 0 && prevExperience) {
        goToPrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Keyboard navigation for tabs
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      goToNext();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      goToPrev();
    }
  };

  return (
    <section
      id="experience"
      className="py-12 sm:py-20 lg:py-24 px-2.5 sm:px-6 border-t border-border-subtle transition-colors w-full max-w-full overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full min-w-0">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 lg:mb-14 px-1">
          <p className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Briefcase size={13} className="sm:w-[14px] sm:h-[14px] flex-shrink-0" />
            <span>{eyebrow || 'Professional Trajectory'}</span>
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-3 sm:mb-4 break-words">
            {heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-3 sm:mb-5" />
          {description && (
            <p className="text-text-sub text-xs sm:text-base leading-relaxed text-center sm:text-justify max-w-2xl mx-auto px-1">
              {description}
            </p>
          )}
        </div>

        {/* Quick Verified Appointments Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-surface/70 border border-border-subtle mb-4 sm:mb-6">
          <span className="text-[11px] sm:text-xs font-mono text-text-sub flex items-center gap-1.5 min-w-0">
            <Clock size={13} className="text-terracotta flex-shrink-0" />
            <span className="truncate">{experiences.length} Verified Appointments</span>
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono font-medium text-terracotta bg-terracotta/10 px-2 py-0.5 rounded-md flex-shrink-0">
            2024 — 2026
          </span>
        </div>

        {/* =====================================================================
           MOBILE / TABLET ROLE SWITCHER (< lg)
           Touch-friendly horizontal snap pills with instant dossier feedback below
           ===================================================================== */}
        <div className="lg:hidden mb-4 sm:mb-6">
          <div className="flex items-center justify-between gap-2 mb-2 px-0.5">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-text-mute font-semibold flex items-center gap-1.5">
              <Layers size={12} className="text-terracotta" />
              <span>Select Appointment</span>
            </span>
            <span className="text-[10px] font-mono text-terracotta">
              {activeIndex + 1} of {experiences.length}
            </span>
          </div>

          <div
            ref={tabsContainerRef}
            role="tablist"
            aria-label="Experience Roles"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className="flex items-stretch gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-1 px-1 no-scrollbar snap-x snap-mandatory focus:outline-none"
          >
            {experiences.map((exp) => {
              const isActive = exp.id === activeId;
              return (
                <button
                  key={exp.id}
                  id={`mobile-tab-${exp.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${exp.id}`}
                  onClick={() => setActiveId(exp.id)}
                  className={`flex-shrink-0 snap-start text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer min-w-[200px] xs:min-w-[230px] sm:min-w-[260px] md:flex-1 relative ${
                    isActive
                      ? 'bg-card border-terracotta shadow-sm ring-1 ring-terracotta/30'
                      : 'bg-card/60 dark:bg-card/40 border-border-subtle hover:border-border hover:bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-terracotta font-medium px-2 py-0.5 rounded bg-surface border border-border-subtle">
                      {categoryIcon(exp.category, 12)}
                      <span className="truncate">{exp.period}</span>
                    </span>
                    <span className="text-[10px] font-mono text-text-mute">
                      {exp.duration}
                    </span>
                  </div>

                  <h4
                    className={`font-serif text-xs sm:text-sm font-bold truncate transition-colors ${
                      isActive ? 'text-text-main dark:text-white' : 'text-text-sub'
                    }`}
                  >
                    {exp.title}
                  </h4>

                  <p className="text-[11px] font-mono text-text-mute truncate mt-0.5">
                    {exp.company}
                  </p>

                  {/* Active bottom bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-terracotta rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
           RESPONSIVE MASTER-DETAIL WORKSPACE
           Desktop (lg): 5 cols Left Rail | 7 cols Right Dossier
           Mobile (<lg): 12 cols Full-width Dossier directly below the role switcher
           ========================================================================= */}
        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-start w-full min-w-0">
          {/* =====================================================================
             DESKTOP ROLE CARDS LIST (Hidden on mobile/tablet, 5 Cols on Desktop)
             ===================================================================== */}
          <div
            role="tablist"
            aria-label="Professional Experience Roles"
            className="hidden lg:flex lg:col-span-5 flex-col gap-3 w-full"
          >
            {experiences.map((exp) => {
              const isActive = exp.id === activeId;
              return (
                <button
                  key={exp.id}
                  id={`tab-${exp.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${exp.id}`}
                  onClick={() => setActiveId(exp.id)}
                  className={`w-full text-left p-4 sm:p-5 pl-5 sm:pl-6 rounded-2xl border transition-all duration-200 cursor-pointer relative group ${
                    isActive
                      ? 'bg-card border-terracotta/70 shadow-md ring-1 ring-terracotta/25'
                      : 'bg-card/60 dark:bg-card/40 border-border-subtle hover:border-border hover:bg-card hover:shadow-xs'
                  }`}
                >
                  {/* Active Edge Indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-terracotta rounded-r-full" />
                  )}

                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-terracotta font-medium px-2.5 py-0.5 rounded-md bg-surface border border-border-subtle">
                      {categoryIcon(exp.category, 13)}
                      <span>{exp.duration}</span>
                    </span>

                    <span className="text-[10px] font-mono text-text-mute px-2 py-0.5 rounded bg-surface/80 border border-border-subtle">
                      {exp.period}
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-base sm:text-lg font-bold leading-snug transition-colors ${
                      isActive
                        ? 'text-text-main dark:text-white'
                        : 'text-text-main group-hover:text-terracotta'
                    }`}
                  >
                    {exp.title}
                  </h3>

                  <p className="text-xs font-mono text-text-sub mt-1.5 flex items-center gap-1.5 truncate">
                    <Building2 size={12} className="text-terracotta flex-shrink-0" />
                    <span className="truncate">{exp.company}</span>
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-text-mute pt-2.5 border-t border-border-subtle/50">
                    <span className="flex items-center gap-1 min-w-0 pr-2">
                      <MapPin size={11} className="text-text-mute flex-shrink-0" />
                      <span className="truncate">{exp.location}</span>
                    </span>

                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-mono transition-colors flex-shrink-0 ${
                        isActive
                          ? 'text-terracotta font-semibold'
                          : 'text-text-mute group-hover:text-terracotta'
                      }`}
                    >
                      <span>{isActive ? 'Active' : 'Details'}</span>
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-terracotta/15 text-terracotta'
                            : 'bg-surface/80 text-text-mute group-hover:bg-terracotta/10 group-hover:text-terracotta'
                        }`}
                      >
                        <ChevronRight
                          size={13}
                          className={`transition-transform duration-200 ${
                            isActive ? 'translate-x-0.5' : 'group-hover:translate-x-0.5'
                          }`}
                        />
                      </span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* =====================================================================
             DOSSIER CARD (Mobile: 12 Cols | Desktop: 7 Cols Sticky)
             ===================================================================== */}
          <div className="col-span-12 lg:col-span-7 w-full min-w-0 lg:sticky lg:top-24">
            <div
              id={`panel-${activeExperience.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeExperience.id}`}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="bg-card border border-border-subtle rounded-2xl p-3.5 sm:p-6 lg:p-7 shadow-sm transition-all duration-200 relative overflow-hidden w-full min-w-0 select-text"
            >
              {/* Top Banner Meta Bar - Responsive for all mobile screens & edge devices */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3.5 mb-4 sm:mb-5 border-b border-border-subtle min-w-0">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="p-1.5 sm:p-2 rounded-xl bg-surface border border-border-subtle text-terracotta flex-shrink-0">
                    {categoryIcon(activeExperience.category, 15)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-text-mute block font-semibold truncate">
                      {activeExperience.type}
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono text-terracotta font-medium truncate block">
                      {activeExperience.category}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-mono bg-surface border border-border-subtle text-text-sub px-2.5 sm:px-3 py-1 rounded-full self-start sm:self-auto flex-shrink-0 max-w-full">
                  <Calendar size={11} className="text-terracotta flex-shrink-0" />
                  <span>{activeExperience.duration}</span>
                  <span className="text-text-mute">·</span>
                  <span className="text-terracotta font-semibold">
                    {activeExperience.period}
                  </span>
                </div>
              </div>

              {/* Title & Organization Header */}
              <div className="mb-4 sm:mb-5 min-w-0">
                <h3 className="font-serif text-lg sm:text-2xl md:text-3xl font-bold text-text-main dark:text-white leading-snug mb-1.5 break-words">
                  {activeExperience.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1 text-xs sm:text-sm font-mono text-text-sub min-w-0">
                  <span className="flex items-center gap-1.5 text-text-main dark:text-stone-200 font-semibold break-words min-w-0">
                    <Building2 size={13} className="text-terracotta flex-shrink-0" />
                    <span className="break-words">{activeExperience.company}</span>
                  </span>
                  <span className="text-text-mute hidden sm:inline">·</span>
                  <span className="flex items-center gap-1 text-text-mute text-[11px] sm:text-xs">
                    <MapPin size={12} className="flex-shrink-0" />
                    <span>{activeExperience.location}</span>
                  </span>
                </div>
              </div>

              {/* Executive Summary Narrative */}
              <div className="mb-4 sm:mb-5 p-3 sm:p-4 rounded-xl bg-surface/60 border border-border-subtle min-w-0">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-text-mute font-semibold block mb-1">
                  Tenure Scope &amp; Executive Summary
                </span>
                <p className="font-serif text-xs sm:text-sm md:text-base text-text-main dark:text-stone-100 leading-relaxed text-left sm:text-justify break-words">
                  "{activeExperience.description}"
                </p>
              </div>

              {/* Key Technical Contributions & Deliverables */}
              <div className="mb-4 sm:mb-6 min-w-0">
                <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-terracotta font-semibold mb-2.5 sm:mb-3 flex items-center gap-1.5 flex-wrap">
                  <Sparkles size={12} className="sm:w-[13px] sm:h-[13px] flex-shrink-0" />
                  <span className="break-words">Key Technical Accomplishments &amp; Deliverables</span>
                </h4>

                <ul className="space-y-2 sm:space-y-2.5 min-w-0">
                  {activeExperience.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-xl bg-surface/30 border border-border-subtle/60 hover:border-terracotta/30 transition-colors min-w-0"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-emerald-500 mt-0.5 flex-shrink-0 sm:w-[15px] sm:h-[15px]"
                      />
                      <span className="text-[11px] sm:text-xs md:text-sm text-text-sub dark:text-stone-200 leading-relaxed break-words min-w-0">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Domain Competencies Applied */}
              <div className="mb-4 sm:mb-6 min-w-0">
                <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-text-mute font-semibold mb-2 sm:mb-2.5 flex items-center gap-1.5">
                  <Code2 size={12} className="text-terracotta sm:w-[13px] sm:h-[13px] flex-shrink-0" />
                  <span>Technologies &amp; Competencies</span>
                </h4>

                <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 min-w-0">
                  {activeExperience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-lg bg-surface border border-border-subtle text-text-main dark:text-stone-200 text-[10px] sm:text-xs font-mono font-medium hover:border-terracotta/40 hover:text-terracotta transition-colors shadow-xs break-words"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* ===================================================================
                 MOBILE / TABLET BOTTOM THUMB NAVIGATION (< lg)
                 Allows users to swipe/tap between appointments seamlessly with thumb
                 =================================================================== */}
              <div className="flex lg:hidden items-center justify-between pt-3.5 border-t border-border-subtle gap-2 min-w-0 mt-2">
                <button
                  onClick={goToPrev}
                  disabled={!prevExperience}
                  aria-label="Previous Appointment"
                  className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium transition-all min-h-[44px] cursor-pointer flex-shrink-0 ${
                    prevExperience
                      ? 'bg-surface hover:bg-card border border-border text-text-main active:scale-95'
                      : 'opacity-40 cursor-not-allowed bg-surface/40 border border-border-subtle text-text-mute'
                  }`}
                >
                  <ChevronLeft size={15} />
                  <span className="hidden xs:inline">Prev</span>
                </button>

                {/* Step Dots Indicator */}
                <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    {experiences.map((exp) => (
                      <button
                        key={exp.id}
                        onClick={() => setActiveId(exp.id)}
                        aria-label={`Switch to role ${exp.id}: ${exp.title}`}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          exp.id === activeId
                            ? 'w-5 sm:w-6 bg-terracotta'
                            : 'w-2 bg-border hover:bg-terracotta/40'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-text-mute font-medium ml-1">
                    {activeIndex + 1} / {experiences.length}
                  </span>
                </div>

                <button
                  onClick={goToNext}
                  disabled={!nextExperience}
                  aria-label="Next Appointment"
                  className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium transition-all min-h-[44px] cursor-pointer flex-shrink-0 ${
                    nextExperience
                      ? 'bg-terracotta text-white shadow-xs hover:bg-terracotta-hover active:scale-95'
                      : 'opacity-40 cursor-not-allowed bg-surface/40 border border-border-subtle text-text-mute'
                  }`}
                >
                  <span className="hidden xs:inline">Next</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceClient;
