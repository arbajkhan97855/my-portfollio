import React from 'react';
import { User } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4">
              <User className="w-3.5 h-3.5" />
              <span>About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 mb-6">
              Engineering with <span className="gradient-text">Precision & Passion.</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-4">
              I am a results-driven Full Stack Developer and Technical Trainer based in Jaipur, Rajasthan. I specialize in bridging intuitive frontend user experiences with robust, scalable server architectures.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              From architecting timed online examination engines and fintech loan calculators to building high-converting luxury e-commerce stores (Brewora, Lumera, Greenora), I focus on clean code, strong typing, and modular state management.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 w-full">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-sky-500/30 transition-all">
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 mb-1">13+</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide">
                  Verified Projects
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-indigo-500/30 transition-all">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 mb-1">4+</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide">
                  Career Roles
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-purple-500/30 transition-all">
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 mb-1">100%</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide">
                  Full Stack Delivery
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Architecture Stack */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Tier 1 */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-all hover:translate-x-1 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Frontend Layer</h3>
                </div>
                <span className="text-xs text-slate-400">UI / UX & Reactive State</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'TypeScript', 'Tailwind CSS', 'JavaScript ES6+', 'HTML5', 'CSS3'].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Tier 2 */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all hover:translate-x-1 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Backend Engine</h3>
                </div>
                <span className="text-xs text-slate-400">APIs & Business Logic</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'WebSockets', 'Python'].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Tier 3 */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all hover:translate-x-1 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Data Persistence</h3>
                </div>
                <span className="text-xs text-slate-400">Relational & Document DBs</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'MySQL', 'PostgreSQL', 'Mongoose', 'Database Indexing'].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
