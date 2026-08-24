import React from 'react';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../utils/generatePdf';

export function Education() {
  return (
    <section id="education" className="py-20 bg-slate-950/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 mb-4">
            Education & <span className="gradient-text">Certifications.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal education credentials, graduation achievements, and professional IT qualifications.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {RESUME_DATA.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/30 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20">
                    {edu.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-indigo-400 mb-3">
                  {edu.school}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  {edu.location}
                </span>
                <span className="text-emerald-400 font-semibold">Completed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Card */}
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider mb-0.5">
                Official Certification
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-200">
                Rajasthan State Certificate in Information Technology (RS-CIT)
              </h4>
              <p className="text-xs text-slate-400">
                State-recognized IT certification validating computing proficiency, database fundamentals, and digital applications.
              </p>
            </div>
          </div>
          
          <div className="shrink-0 self-end sm:self-center">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Verified
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
