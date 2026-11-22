'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Award,
  FileText,
  Trophy,
  Cloud,
  Briefcase,
  Eye,
  X,
  Building2,
  Calendar,
} from 'lucide-react';

interface CertificateItem {
  id: number;
  title: string;
  category: string;
  issuer: string;
  year: string;
  article?: string;
  program?: string;
  event?: string;
  position?: string;
  description: string;
  skills: string[];
}

interface CertificatesClientProps {
  heading: string;
  eyebrow?: string;
  description?: string;
  certificates: CertificateItem[];
}

const certificateImages: Record<number, string> = {
  1: '/images/certificates/IEEE_certificate.webp',
  2: '/images/certificates/SIH_certificate.webp',
  3: '/images/certificates/Merit_certificate.webp',
  4: '/images/certificates/STTP_certificate.webp',
  5: '/images/certificates/AWS_certificate.webp',
  6: '/images/certificates/Internship_certificate.webp',
  7: '/images/certificates/Xeta_Labs_certificate.webp',
};

const categoryIcon = (category: string) => {
  if (category.includes('Presentation') || category.includes('Research')) {
    return <FileText size={14} className="text-terracotta" />;
  }
  if (category.includes('Hackathon') || category.includes('Competition')) {
    return <Trophy size={14} className="text-terracotta" />;
  }
  if (category.includes('Cloud')) {
    return <Cloud size={14} className="text-terracotta" />;
  }
  if (category.includes('Internship')) {
    return <Briefcase size={14} className="text-terracotta" />;
  }
  return <Award size={14} className="text-terracotta" />;
};

export const CertificatesClient = ({
  heading,
  description,
  certificates,
}: CertificatesClientProps) => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedCert(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [selectedCert]);

  return (
    <section
      id="certificates"
      className="py-16 sm:py-24 border-t border-hairline transition-colors w-full max-w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 sm:mb-14 border-b border-hairline gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-terracotta tracking-wider uppercase font-semibold">
              <span>§ Academic Honors</span>
              <span className="text-border-hairline font-sans">·</span>
              <span className="text-text-mute font-normal">Verified Accreditations &amp; Awards</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight">
              {heading}
            </h2>
          </div>

          <div className="font-mono text-xs text-text-mute md:text-right max-w-sm">
            <span className="text-text-main font-semibold block text-sm">
              0{certificates.length} Verified Accreditations
            </span>
            <span className="leading-tight block mt-0.5">
              {description || 'IEEE presentations, hackathon awards, cloud foundations, and research merit.'}
            </span>
          </div>
        </div>

        {/* Archival Grid of All 7 Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert) => {
            const certImg = certificateImages[cert.id];

            return (
              <article
                key={cert.id}
                className="p-5 sm:p-6 rounded-lg border border-hairline bg-surface/40 dark:bg-card/40 hover:bg-surface dark:hover:bg-card hover:border-terracotta/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Category & Year Header */}
                  <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-hairline text-[11px] font-mono">
                    <span className="inline-flex items-center gap-1.5 text-terracotta font-semibold uppercase tracking-wider">
                      {categoryIcon(cert.category)}
                      <span>{cert.category}</span>
                    </span>
                    <span className="text-text-mute flex items-center gap-1">
                      <Calendar size={11} className="opacity-70" />
                      <span>{cert.year}</span>
                    </span>
                  </div>

                  {/* Document Viewport Plate */}
                  {certImg && (
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="relative aspect-[16/10] w-full overflow-hidden rounded border border-hairline bg-canvas mb-4 group/img cursor-pointer text-left block"
                      aria-label={`Inspect ${cert.title} certificate`}
                    >
                      <Image
                        src={certImg}
                        alt={`${cert.title} — ${cert.issuer}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                        className="object-cover object-center group-hover/img:scale-[1.03] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-canvas/90 backdrop-blur-md px-3 py-1.5 rounded text-xs font-mono font-medium text-text-main flex items-center gap-1.5 border border-hairline shadow-sm">
                          <Eye size={12} className="text-terracotta" />
                          <span>Inspect Document</span>
                        </span>
                      </div>
                    </button>
                  )}

                  {/* Title & Issuer */}
                  <h3 className="font-serif text-lg font-bold text-text-main group-hover:text-terracotta transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  <p className="font-mono text-xs text-text-mute font-medium mt-1 flex items-center gap-1.5">
                    <Building2 size={12} className="text-terracotta flex-shrink-0" />
                    <span className="truncate">{cert.issuer}</span>
                  </p>

                  {/* Article or Program detail */}
                  {cert.article && (
                    <p className="font-mono text-[11px] text-text-sub mt-2 border-l border-terracotta/40 pl-2 italic">
                      &ldquo;{cert.article}&rdquo;
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-xs text-text-sub font-sans leading-relaxed mt-3">
                    {cert.description}
                  </p>
                </div>

                {/* Skills Chips */}
                <div className="pt-4 mt-5 border-t border-hairline/60 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded border border-hairline bg-canvas/80 text-text-mute font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* High-Resolution Document Inspection Lightbox */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] bg-card border border-hairline rounded-lg overflow-hidden shadow-2xl p-4 sm:p-6 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-3 mb-3 border-b border-hairline gap-3">
              <div>
                <span className="text-[10px] font-mono text-terracotta uppercase tracking-wider block">
                  Verified Academic Accreditation
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-text-main">
                  {selectedCert.title}
                </h3>
                <p className="font-mono text-xs text-text-mute mt-0.5">
                  {selectedCert.issuer} · {selectedCert.year}
                </p>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded border border-hairline bg-surface hover:border-terracotta text-text-sub hover:text-text-main transition-colors cursor-pointer"
                aria-label="Close document inspection"
              >
                <X size={16} />
              </button>
            </div>

            {/* Certificate Image Frame */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[480px] w-full bg-canvas/40 rounded border border-hairline overflow-hidden flex items-center justify-center">
              {certificateImages[selectedCert.id] && (
                <Image
                  src={certificateImages[selectedCert.id]}
                  alt={selectedCert.title}
                  fill
                  className="object-contain p-2"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesClient;
