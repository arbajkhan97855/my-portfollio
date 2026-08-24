import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { RESUME_DATA } from '../utils/generatePdf';

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 mb-4">
            Professional <span className="gradient-text">Experience.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified timeline of software engineering roles, full-stack development contracts, and training programs.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 flex flex-col gap-10">
          {RESUME_DATA.experiences.map((exp, idx) => {
            const isCurrent = idx === 0;
            return (
              <div key={idx} className="relative group">
                {/* Timeline node marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                    isCurrent
                      ? 'bg-emerald-400 border-emerald-300 shadow-lg shadow-emerald-500/50 scale-110'
                      : 'bg-slate-900 border-indigo-500 group-hover:bg-indigo-500'
                  }`}
                />

                {/* Experience Card */}
                <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all shadow-xl">
                  
                  {/* Top Bar: Date & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>

                    {isCurrent && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-3 py-0.5 rounded-full border border-emerald-500/30">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        CURRENT ROLE
                      </span>
                    )}
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-100 mt-1 mb-0.5">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-indigo-400 mb-4">
                    <span>{exp.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1 text-slate-400 text-xs">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="flex flex-col gap-2">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
