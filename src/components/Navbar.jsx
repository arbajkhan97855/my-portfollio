import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Download, MessageSquareCode, ArrowRight } from 'lucide-react';

export function Navbar({ theme, toggleTheme, onDownloadCV }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'services', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home', id: 'hero' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#education', label: 'Education', id: 'education' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <header
          className={`pointer-events-auto w-full max-w-6xl rounded-full transition-all duration-300 flex items-center justify-between px-5 md:px-7 ${
            scrolled
              ? 'h-14 bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border-medium)] shadow-xl'
              : 'h-16 bg-[var(--bg-glass)] backdrop-blur-lg border border-[var(--border-subtle)] shadow-md'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 font-extrabold text-base md:text-lg tracking-tight group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              AK
            </div>
            <span className="font-bold text-slate-100 dark:text-slate-100 hidden sm:inline">
              ARBAJ <span className="text-sky-500 dark:text-sky-400">KHAN</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                    isActive
                      ? 'text-indigo-600 dark:text-white bg-indigo-500/15 dark:bg-indigo-500/20 border border-indigo-500/30 dark:border-indigo-500/40 font-bold'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme mode"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all hover:rotate-12 cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Direct CV Download Button (NO POPUP - Direct Instant Download) */}
            <button
              onClick={onDownloadCV}
              aria-label="Download Arbaj Khan CV PDF with clickable links"
              title="Instant Download ATS CV (PDF with clickable links)"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden md:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 transition-all"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3 h-3 text-sky-500 dark:text-sky-400" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 lg:hidden animate-in fade-in duration-200 overflow-y-auto">
          <div className="flex flex-col gap-2 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-lg font-bold py-3 px-4 rounded-xl transition-all ${
                  activeSection === link.id
                    ? 'text-white bg-gradient-to-r from-sky-500/20 to-indigo-500/20 border border-indigo-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3">
            {/* Direct CV Download in Mobile */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadCV();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-lg shadow-indigo-500/30"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (Direct PDF)</span>
            </button>

            <a
              href="https://wa.me/919785589164?text=Hi%20Arbaj,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/30"
            >
              <MessageSquareCode className="w-4 h-4" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
