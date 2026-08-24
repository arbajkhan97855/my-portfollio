import React from 'react';
import { Layers, Smartphone, Server, Sparkles, Check, ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: 'Full Stack Web Applications',
      icon: <Layers className="w-6 h-6 text-sky-400" />,
      desc: 'End-to-end development of dynamic SPAs, SaaS dashboards, portal apps, and scalable web platforms with React and Node.js.',
      deliverables: [
        'Component-driven frontend architecture (React.js, Tailwind CSS)',
        'Robust REST APIs & backend logic (Node.js & Express.js)',
        'Secure authentication & session handling (JWT / OAuth)',
        'Production deployment on Vercel, Netlify, or cloud instances',
      ],
    },
    {
      title: 'E-Commerce & Digital Flagships',
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      desc: 'High-converting online storefronts, luxury brand portfolios, product customizers, and seamless digital cart & checkout flows.',
      deliverables: [
        'Interactive product discovery engines & custom filters',
        'State-managed dynamic shopping carts & order summaries',
        'Mobile-first responsive UI crafted for high conversion rates',
        'Fast page load speeds & clean SEO optimization',
      ],
    },
    {
      title: 'MERN Stack Training & Mentorship',
      icon: <Server className="w-6 h-6 text-indigo-400" />,
      desc: 'Technical coaching, live project guidance, code reviews, and structured curriculum delivery for aspiring full-stack software engineers.',
      deliverables: [
        'Hands-on full-stack projects from scratch to live hosting',
        'Python fundamentals, algorithmic logic & modern app paradigms',
        'Industry best practices: Git, debugging, API design & state logic',
        'Career interview prep and portfolio creation guidance',
      ],
    },
    {
      title: 'Responsive UI/UX Engineering',
      icon: <Smartphone className="w-6 h-6 text-emerald-400" />,
      desc: 'Pixel-perfect conversions from Figma or custom designs into blazing-fast, accessible, and responsive interfaces.',
      deliverables: [
        'Mobile, tablet, and desktop adaptive layouts',
        'Smooth micro-interactions and touch-friendly controls',
        'Dark mode / light mode theme implementations',
        'Cross-browser compatibility testing & performance tuning',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>What I Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 mb-4">
            Services & <span className="gradient-text">Core Capabilities.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Comprehensive software development, consulting, and engineering services tailored to your technical and business objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-800">
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Request this service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
