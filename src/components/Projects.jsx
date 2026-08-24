import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, Download, MessageSquare, FolderGit2 } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';

export function Projects({ onSelectProject, onDownloadCV }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'ALL (13)' },
    { id: 'e-commerce', label: 'E-COMMERCE' },
    { id: 'full-stack', label: 'FULL STACK' },
    { id: 'react', label: 'REACT' },
    { id: 'business', label: 'BUSINESS' },
    { id: 'restaurant', label: 'RESTAURANT' },
    { id: 'finance', label: 'FINANCE' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'ai', label: 'AI' },
    { id: 'game', label: 'GAME' },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.filterCategories.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-20 bg-slate-950/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 mb-4">
            Selected <span className="gradient-text">Live Projects.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore 13 verified, production-grade applications spanning specialty e-commerce, fintech engines, neural computer vision, and educational portals.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-indigo-500/30 scale-105'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col overflow-hidden group shadow-xl hover:-translate-y-1.5"
            >
              {/* Image Preview Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 cursor-pointer" onClick={() => onSelectProject(project)}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 brightness-95 group-hover:brightness-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Badge Top Left */}
                {project.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase text-white bg-slate-950/80 backdrop-blur-md border border-white/20">
                    {project.badge}
                  </span>
                )}

                {/* Number Badge Top Right */}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-sky-400 bg-slate-950/80 backdrop-blur-md border border-white/20">
                  {project.number}
                </span>

                {/* Hover Click Hint */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-semibold text-slate-200">
                  <span>Architecture & Features</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-1">
                
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    Verified Live
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-slate-100 mb-2 leading-snug group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 mb-5 leading-relaxed flex-1">
                  {project.desc}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[11px] font-semibold rounded-md bg-white/5 border border-white/10 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2.5 pt-4 border-t border-slate-800/80">
                  {/* Direct Live URL */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-indigo-500/20 transition-all hover:scale-102"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Architecture Details Modal Button */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center justify-center p-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/40 transition-all"
                    title="Inspect architecture and full feature specs"
                  >
                    <Layers className="w-4 h-4 text-sky-400" />
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Recruiter Fast Track Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-950 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for Full-Time & Contract Roles</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-2">
                Looking for a Reliable Full Stack Engineer?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Hands-on with React.js, Node.js, Express, MongoDB, MySQL & TypeScript. Quick learner with production-focused mindset, ready to contribute from day one.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <a
                href="https://wa.me/919785589164?text=Hi%20Arbaj,%20We%20are%20hiring%20and%20would%20like%20to%20schedule%20an%20interview%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Direct WhatsApp Interview</span>
              </a>

              {/* Direct Instant Download CV Button (NO POPUP) */}
              <button
                onClick={onDownloadCV}
                title="Download CV directly as PDF with clickable links"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-indigo-500/40 shadow-sm transition-all hover:scale-105 group"
              >
                <Download className="w-4 h-4 text-sky-400 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
