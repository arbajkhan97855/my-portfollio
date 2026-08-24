import React, { useEffect } from 'react';
import { X, ExternalLink, Check, Code2, Layers, Sparkles } from 'lucide-react';

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Preview Image */}
        <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full bg-slate-950 shrink-0">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/80 backdrop-blur-md text-slate-300 hover:text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          {project.badge && (
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-white bg-indigo-600/90 backdrop-blur-md border border-white/20 shadow-lg">
              {project.badge}
            </span>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-6">
          
          <div>
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                Verified Production
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-100 mb-2">
              {project.title}
            </h3>
            
            {project.tagline && (
              <p className="text-sm font-semibold text-indigo-400 mb-3">
                {project.tagline}
              </p>
            )}

            <p className="text-sm text-slate-300 leading-relaxed">
              {project.desc}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          {project.features && (
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Engineered Features & Architecture</span>
              </div>
              <div className="flex flex-col gap-2">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              <Code2 className="w-4 h-4 text-indigo-400" />
              <span>Technology Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-indigo-500/25 transition-all hover:scale-102"
            >
              <span>Launch Live Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
