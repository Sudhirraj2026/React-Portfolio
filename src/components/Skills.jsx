import { skillsData } from "../data/portfolio";

function Skills() {
  const categoryHeaders = [
    "01_LANGUAGES_&_CORE_CS",
    "02_INTERFACE_&_FRONTEND",
    "03_SYSTEMS_&_NETWORKING",
    "04_RECON_&_DEV_TOOLS",
  ];

  const categoryIcons = [
    // Languages & Core CS
    (
      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    // Frontend
    (
      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    // Backend & Systems
    (
      <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    // Tools & Ecosystem
    (
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 font-mono">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/50 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4">
            [PAYLOADS: ACTIVE_VECTORS]
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            Technical Vector{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-500">
              Matrix
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-4 max-w-2xl mx-auto">
            // Full-stack web infrastructure, socket network engines, and object-oriented systems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Categories Grid (2x2) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 font-mono">
          {skillsData.map((category, idx) => (
            <div
              key={category.category}
              className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-7 backdrop-blur-sm hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-black/20"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                    {categoryIcons[idx]}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-400 tracking-wider">
                      [{categoryHeaders[idx]}]
                    </span>
                    <h3 className="text-base font-bold text-white tracking-tight mt-0.5">
                      {category.category}
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] text-slate-500 hidden sm:inline">SYS_LOADED</span>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-400 hover:bg-slate-900 text-slate-200 text-xs font-medium transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                    <span>{skill.name}</span>
                    <span className="text-[9px] text-slate-500 group-hover:text-cyan-400 transition-colors uppercase">
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

export default Skills;