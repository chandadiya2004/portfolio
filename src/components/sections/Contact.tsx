import data from '../../data/sections/contact.json';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, ResearchGateIcon } from '../common/Icons';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 border-t border-hairline transition-colors w-full max-w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Monograph Chapter § 06 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 sm:mb-14 border-b border-hairline gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-terracotta tracking-wider uppercase font-semibold">
              <span>§ 06 // Direct Correspondence</span>
              <span className="text-border-hairline font-sans">·</span>
              <span className="text-text-mute font-normal">Scholarly &amp; Professional Inquiries</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight">
              {data.heading}
            </h2>
          </div>

          <div className="font-mono text-xs text-text-mute md:text-right max-w-sm">
            <span className="text-text-main font-semibold block text-sm">
              {data.email}
            </span>
            <span className="leading-tight block mt-0.5">
              {data.location} · Available for AI Research &amp; Engineering
            </span>
          </div>
        </div>

        {/* 2-Column Correspondence Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Inquiries & Scholarly Profiles (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-text-main">
                Direct Channels &amp; Profiles
              </h3>
              <p className="text-xs sm:text-sm text-text-sub font-sans leading-relaxed">
                {data.description}
              </p>

              {/* Direct Channels List */}
              <div className="space-y-3 font-mono text-xs pt-2">
                {/* Email */}
                <div className="p-3.5 rounded-lg border border-hairline bg-surface/50 dark:bg-card/50 flex items-center gap-3">
                  <div className="p-2 rounded border border-hairline bg-canvas text-terracotta flex-shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[10px] text-text-mute uppercase tracking-wider">Primary Email</span>
                    <a
                      href={`mailto:${data.email}`}
                      className="text-text-main hover:text-terracotta transition-colors font-medium truncate block"
                    >
                      {data.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-lg border border-hairline bg-surface/50 dark:bg-card/50 flex items-center gap-3">
                  <div className="p-2 rounded border border-hairline bg-canvas text-terracotta flex-shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[10px] text-text-mute uppercase tracking-wider">Direct Line</span>
                    <a
                      href={`tel:${data.phone}`}
                      className="text-text-main hover:text-terracotta transition-colors font-medium truncate block"
                    >
                      {data.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-lg border border-hairline bg-surface/50 dark:bg-card/50 flex items-center gap-3">
                  <div className="p-2 rounded border border-hairline bg-canvas text-terracotta flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[10px] text-text-mute uppercase tracking-wider">Geographic Base</span>
                    <span className="text-text-main font-medium block">
                      {data.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Scholarly Indices Box */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-text-mute uppercase tracking-widest block mb-2 font-semibold">
                  // Scholarly &amp; Developer Indices
                </span>
                <div className="space-y-2 font-mono text-xs">
                  <a
                    href={data.researchgate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-hairline bg-surface/40 dark:bg-card/40 hover:border-terracotta/50 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <ResearchGateIcon size={16} className="text-text-mute group-hover:text-terracotta transition-colors" />
                      <span className="text-text-main font-medium">ResearchGate Citations</span>
                    </div>
                    <ArrowUpRight size={13} className="text-text-mute group-hover:text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-hairline bg-surface/40 dark:bg-card/40 hover:border-terracotta/50 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon size={16} className="text-text-mute group-hover:text-terracotta transition-colors" />
                      <span className="text-text-main font-medium">GitHub Repositories</span>
                    </div>
                    <ArrowUpRight size={13} className="text-text-mute group-hover:text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-hairline bg-surface/40 dark:bg-card/40 hover:border-terracotta/50 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon size={16} className="text-text-mute group-hover:text-terracotta transition-colors" />
                      <span className="text-text-main font-medium">LinkedIn Professional Network</span>
                    </div>
                    <ArrowUpRight size={13} className="text-text-mute group-hover:text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Reassurance */}
            <div className="p-4 rounded-lg border border-hairline bg-surface/30 dark:bg-card/30 flex items-center gap-3 text-xs font-mono text-text-sub">
              <ShieldCheck size={16} className="text-emerald-500 flex-shrink-0" />
              <span>Available for AI research appointments, engineering roles, and conference collaborations.</span>
            </div>
          </div>

          {/* Right Column: Transmission Form (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
