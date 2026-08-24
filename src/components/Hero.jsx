import React from 'react';
import { ArrowRight, Download, Code2, Database, Server, CheckCircle2, Send } from 'lucide-react';

export function Hero({ onDownloadCV }) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Full Stack Developer & MERN Trainer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 text-slate-100">
              I Build <span className="gradient-text">Digital Products</span> That Make an Impact.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mb-6">
              Passionate Full Stack Developer with hands-on expertise building scalable, high-performance web applications using React.js, Node.js, and modern database architectures. Dedicated to delivering production-ready solutions with clean code and seamless user experiences.
            </p>

            {/* Tech line pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 mb-8">
              <span className="text-sky-400 font-bold">React.js</span>
              <span className="text-slate-600">•</span>
              <span className="text-indigo-400 font-bold">Node.js</span>
              <span className="text-slate-600">•</span>
              <span className="text-purple-400 font-bold">TypeScript</span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 font-bold">MongoDB</span>
              <span className="text-slate-600">•</span>
              <span className="text-amber-400 font-bold">MySQL</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              {/* Explore Projects Button */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Direct Instant Download CV Button (NO POPUP) */}
              <button
                onClick={onDownloadCV}
                title="Download CV directly as PDF with clickable links"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-indigo-500/40 shadow-sm transition-all hover:scale-105 active:scale-95 group"
              >
                <Download className="w-4 h-4 text-sky-400 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>

              {/* Direct WhatsApp CTA */}
              <a
                href="https://wa.me/919785589164?text=Hi%20Arbaj,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20full%20stack%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Full Stack Architecture Visualizer */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl relative group">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3.5 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                  System Architecture
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              </div>

              {/* Pipeline Nodes */}
              <div className="flex flex-col gap-3 relative">
                
                {/* Node 1: Client UI Layer */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/40 transition-all flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-200">Client Presentation Layer</h4>
                      <p className="text-xs text-slate-400">React.js • TypeScript • Tailwind CSS</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-sky-400 font-bold bg-sky-500/10 px-2 py-0.5 rounded-md border border-sky-500/20">
                    Active
                  </span>
                </div>

                {/* Animated Pipeline Connector */}
                <div className="h-4 flex justify-center items-center relative">
                  <div className="w-0.5 h-full bg-gradient-to-b from-sky-400 to-indigo-500 opacity-60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 absolute animate-connector-pulse" />
                </div>

                {/* Node 2: Server API Engine */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition-all flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-200">API & Server Engine</h4>
                      <p className="text-xs text-slate-400">Node.js • Express • REST Services</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    200 OK
                  </span>
                </div>

                {/* Animated Pipeline Connector */}
                <div className="h-4 flex justify-center items-center relative">
                  <div className="w-0.5 h-full bg-gradient-to-b from-indigo-500 to-purple-500 opacity-60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 absolute animate-connector-pulse" />
                </div>

                {/* Node 3: Database & Storage */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition-all flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-200">Data Persistence</h4>
                      <p className="text-xs text-slate-400">MongoDB • MySQL • PostgreSQL</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-purple-400 font-bold bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
                    Synced
                  </span>
                </div>

              </div>

              {/* Bottom live stats */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>13 Live Verified Web Apps</span>
                </span>
                <span className="font-mono text-slate-500">v2.6.4</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
