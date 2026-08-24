import React from 'react';
import { Code2, Server, Database, Wrench, CheckCircle2 } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code2 className="w-5 h-5 text-sky-400" />,
      color: 'border-sky-500/20 group-hover:border-sky-500/40',
      badgeBg: 'bg-sky-500/10 text-sky-400',
      skills: [
        { name: 'React.js', level: 'Advanced' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'JavaScript (ES6+)', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'HTML5 & CSS3', level: 'Expert' },
        { name: 'Responsive UI/UX', level: 'Expert' },
      ],
    },
    {
      title: 'Backend Engineering',
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      color: 'border-indigo-500/20 group-hover:border-indigo-500/40',
      badgeBg: 'bg-indigo-500/10 text-indigo-400',
      skills: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'RESTful API Design', level: 'Advanced' },
        { name: 'Authentication & JWT', level: 'Intermediate' },
        { name: 'Python Basics', level: 'Intermediate' },
        { name: 'Server Deployment', level: 'Intermediate' },
      ],
    },
    {
      title: 'Database Architecture',
      icon: <Database className="w-5 h-5 text-purple-400" />,
      color: 'border-purple-500/20 group-hover:border-purple-500/40',
      badgeBg: 'bg-purple-500/10 text-purple-400',
      skills: [
        { name: 'MongoDB & Mongoose', level: 'Advanced' },
        { name: 'MySQL Relational DB', level: 'Advanced' },
        { name: 'PostgreSQL', level: 'Intermediate' },
        { name: 'Schema Modeling', level: 'Advanced' },
        { name: 'Query Optimization', level: 'Intermediate' },
        { name: 'CRUD Operations', level: 'Expert' },
      ],
    },
    {
      title: 'Tools & Best Practices',
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      color: 'border-emerald-500/20 group-hover:border-emerald-500/40',
      badgeBg: 'bg-emerald-500/10 text-emerald-400',
      skills: [
        { name: 'Git & GitHub', level: 'Advanced' },
        { name: 'Postman API Testing', level: 'Advanced' },
        { name: 'Chrome DevTools', level: 'Expert' },
        { name: 'Vite & Build Tools', level: 'Advanced' },
        { name: 'Netlify & Vercel Deploy', level: 'Advanced' },
        { name: 'Performance Tuning', level: 'Advanced' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 mb-4">
            Skills & <span className="gradient-text">Core Technologies.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified programming languages, web frameworks, databases, and developer utilities in my daily production workflow.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl bg-slate-900/90 border ${cat.color} hover:bg-slate-900 transition-all duration-300 flex flex-col group shadow-xl`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {cat.icon}
                </div>
                <h3 className="text-base font-bold text-slate-200">{cat.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-all text-xs font-semibold"
                  >
                    <div className="flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-md">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
