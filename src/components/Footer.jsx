import React from 'react';
import { Heart, Download, MessageSquareCode, ArrowUp } from 'lucide-react';
import { RESUME_DATA } from '../utils/generatePdf';

export function Footer({ onDownloadCV }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-12 pb-8 border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-3 font-extrabold text-lg text-slate-100 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-xs shadow-md shadow-indigo-500/30">
                AK
              </div>
              <span>
                ARBAJ <span className="text-sky-400">KHAN</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-4">
              Full Stack Software Developer & Technical Trainer specializing in React.js, Node.js, Express, MongoDB, and modern UI engineering.
            </p>
            <div className="flex items-center gap-3">
              {/* Direct CV Download (NO POPUP) */}
              <button
                onClick={onDownloadCV}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-500 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </button>

              <a
                href="https://wa.me/919785589164"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all"
              >
                <MessageSquareCode className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-xs mb-1">
              Quick Navigation
            </h4>
            {['#hero', '#about', '#skills', '#experience', '#projects', '#services', '#education', '#contact'].map((href) => (
              <a
                key={href}
                href={href}
                className="text-slate-400 hover:text-slate-200 capitalize transition-colors"
              >
                {href.replace('#', '')}
              </a>
            ))}
          </div>

          {/* Col 3: Direct Contact */}
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-xs mb-1">
              Connect Directly
            </h4>
            <span className="text-slate-300 font-semibold">{RESUME_DATA.phone}</span>
            <span className="text-slate-300 break-all">{RESUME_DATA.email}</span>
            <span className="text-slate-400">{RESUME_DATA.location}</span>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="flex items-center gap-1 text-slate-500">
            <span>© {new Date().getFullYear()} Arbaj Khan. Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>in React & Tailwind CSS.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
