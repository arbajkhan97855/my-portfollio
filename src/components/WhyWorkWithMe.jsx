import React from 'react';
import { ShieldCheck, Zap, Code, Users, Clock, Award } from 'lucide-react';

export function WhyWorkWithMe() {
  const points = [
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: 'Fast & Production-Ready Execution',
      desc: 'Rapid turnaround with reliable coding practices. I build web apps engineered for zero regression and high performance.',
    },
    {
      icon: <Code className="w-5 h-5 text-sky-400" />,
      title: 'Full Stack Architecture',
      desc: 'No communication disconnect between frontend and backend. I handle React UI, Express APIs, and DB schemas cohesively.',
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-400" />,
      title: 'Mentorship & Trainer Mindset',
      desc: 'As an active MERN stack trainer, I write well-documented, clean, readable code and communicate technical decisions clearly.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Commitment & Ownership',
      desc: 'I treat every project with total ownership—from requirement discovery to deployment and post-launch refinement.',
    },
    {
      icon: <Clock className="w-5 h-5 text-purple-400" />,
      title: 'Immediate Availability',
      desc: 'Available for full-time frontend/full-stack roles, freelance client contracts, and technical training consultations.',
    },
    {
      icon: <Award className="w-5 h-5 text-rose-400" />,
      title: '13+ Live Deployments',
      desc: 'Every project featured on this portfolio is live and testable. Real working software speaks louder than promises.',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Why Choose Arbaj Khan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 mb-4">
            Engineering Value & <span className="gradient-text">Work Ethic.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            What makes me a dependable development partner for tech companies, startups, agencies, and hiring managers.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col group shadow-lg"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-base font-bold text-slate-100 mb-2">
                {point.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
