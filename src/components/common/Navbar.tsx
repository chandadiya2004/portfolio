'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
  id: string;
}

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const { theme, toggleTheme } = useTheme();

  const navLinks: NavLink[] = [
    { label: 'Research', href: '#research', id: 'research' },
    { label: 'Systems', href: '#projects', id: 'projects' },
    { label: 'Trajectory', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = [
        'home',
        'research',
        'projects',
        'experience',
        'skills',
        'about',
        'certificates',
        'contact',
      ];

      // Near top of document
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      // Near bottom of document
      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection('contact');
        return;
      }

      // Viewport probe line at Y = 180px
      const probeY = 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= probeY && rect.bottom > probeY) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? 'bg-canvas/92 backdrop-blur-md border-hairline shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
          : 'bg-canvas/80 backdrop-blur-sm border-hairline'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand & Monograph Identifier */}
        <a
          href="#home"
          onClick={() => setActiveSection('home')}
          className="flex items-center gap-3 group cursor-pointer select-none flex-shrink-0"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-hairline bg-surface dark:bg-card flex items-center justify-center p-1 group-hover:border-terracotta transition-colors">
            <Image
              src="/images/logo.png"
              alt="Diya Chanda"
              width={32}
              height={32}
              priority
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-text-main group-hover:text-terracotta transition-colors">
                Diya Chanda
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse"
                title="Available for AI Research & Engineering"
              />
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-text-mute tracking-wider uppercase font-medium">
              AI Researcher &amp; ML Engineer
            </span>
          </div>
        </a>

        {/* Desktop Monograph Navigation Indices (>= 1024px) */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center justify-center flex-1 mx-6"
        >
          <ul className="flex items-center gap-1 xl:gap-2">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setActiveSection(link.id)}
                    className={`relative px-3 py-2 text-xs font-mono transition-colors inline-flex items-center gap-1.5 select-none cursor-pointer group ${
                      isActive
                        ? 'text-terracotta font-semibold'
                        : 'text-text-sub hover:text-text-main font-normal'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-mono transition-colors ${
                        isActive
                          ? 'text-terracotta'
                          : 'text-text-mute group-hover:text-terracotta/70'
                      }`}
                    >
                      §0{idx + 1}
                    </span>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 inset-x-3 h-[2px] bg-terracotta rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Right Action Cluster (>= 1024px) */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          {/* Quick Curriculum Vitae Link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Diya_Chanda_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-hairline hover:border-terracotta bg-surface dark:bg-card text-text-main hover:text-terracotta text-xs font-mono font-medium transition-colors group"
          >
            <span>CV</span>
            <ArrowUpRight
              size={13}
              className="text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>

          <div className="w-px h-4 bg-border-hairline" />

          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-md border border-hairline hover:border-terracotta bg-surface dark:bg-card text-text-sub hover:text-text-main transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun size={15} className="text-amber-400" />
            ) : (
              <Moon size={15} className="text-terracotta" />
            )}
          </button>
        </div>

        {/* Mobile & Tablet Actions Cluster (< 1024px) */}
        <div className="flex items-center gap-2 lg:hidden flex-shrink-0">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Diya_Chanda_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-hairline bg-surface dark:bg-card text-text-main text-xs font-mono font-medium"
          >
            <span>CV</span>
            <ArrowUpRight size={12} className="text-terracotta" />
          </a>

          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-md border border-hairline bg-surface dark:bg-card text-text-sub hover:text-text-main transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun size={15} className="text-amber-400" />
            ) : (
              <Moon size={15} className="text-terracotta" />
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md border border-hairline bg-surface dark:bg-card text-text-main hover:border-terracotta transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Full-Bleed Navigation Drawer */}
      {open && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-hairline bg-canvas/98 backdrop-blur-xl px-5 py-6 transition-all shadow-xl animate-fadeIn max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="text-[10px] font-mono text-text-mute uppercase tracking-widest mb-3 px-2">
            Table of Contents
          </div>
          <ul className="flex flex-col text-sm font-mono divide-y divide-hairline">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.id);
                      setOpen(false);
                    }}
                    className={`flex items-center justify-between py-3.5 px-2 transition-colors ${
                      isActive
                        ? 'text-terracotta font-semibold'
                        : 'text-text-sub hover:text-text-main'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-text-mute font-mono">
                        §0{idx + 1}
                      </span>
                      <span>{link.label}</span>
                    </div>
                    <span className="text-xs text-text-mute">→</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="pt-5 mt-4 border-t border-hairline">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Diya_Chanda_Resume.pdf"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md border border-terracotta bg-terracotta/10 text-terracotta hover:bg-terracotta hover:text-white font-medium text-xs font-mono transition-colors"
            >
              <span>Download Curriculum Vitae (PDF)</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
