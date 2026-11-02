import { useState } from "react";
import { projectsData } from "../data/portfolio";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [copiedId, setCopiedId] = useState(null);

  const categories = [
    { label: "All", flag: "--all" },
    { label: "Full Stack", flag: "--full-stack" },
    { label: "Java & Systems", flag: "--java-systems" },
    { label: "AI & Python", flag: "--ai-lab" },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const getCategoryCount = (category) => {
    if (category === "All") return projectsData.length;
    return projectsData.filter((p) => p.category === category).length;
  };

  const handleCopyClone = (id, githubUrl) => {
    navigator.clipboard.writeText(`git clone ${githubUrl}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden font-mono">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/50 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4">
            [DEPLOYMENTS: CODEBASE_INDEX]
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            Production Modules &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-500">
              Repositories
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-4 max-w-2xl mx-auto">
            // High-throughput socket sharing engines, responsive client platforms, and algorithmic Java systems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Filter Tabs in Terminal Flag Format */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const count = getCategoryCount(cat.label);
            const isActive = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => setSelectedCategory(cat.label)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25 font-bold"
                    : "bg-slate-900/90 hover:bg-slate-850 text-slate-300 border border-slate-800 hover:border-slate-700"
                }`}
              >
                <span>{cat.flag}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-slate-950 text-emerald-400 font-bold"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-slate-950 border rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 shadow-2xl shadow-black/40 flex flex-col justify-between ${
                project.featured
                  ? "border-emerald-500/50 hover:border-emerald-400"
                  : "border-slate-800 hover:border-cyan-500/50"
              }`}
            >
              {/* Terminal Window Top Bar */}
              <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 font-mono text-[11px] text-slate-400 hidden sm:inline">
                    {project.id}.sh
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {project.featured && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/50 text-emerald-400 uppercase">
                      ★ FEATURED
                    </span>
                  )}
                  <span className="text-[10px] text-cyan-400 font-mono">
                    [{project.category}]
                  </span>
                </div>
              </div>

              {/* Main Card Content */}
              <div className="p-6 sm:p-7">
                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors font-sans">
                  {project.title}
                </h3>
                <p className="text-xs text-emerald-400 font-mono mt-1 mb-3">
                  // {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-sans">
                  {project.description}
                </p>

                {/* Engineering Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-5 bg-slate-900/70 rounded-xl p-3.5 border border-slate-800/90 space-y-1.5 font-mono">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                      &gt;&gt; ARCHITECTURE_SPECS:
                    </p>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-xs text-slate-300 flex items-start gap-2 font-sans"
                        >
                          <span className="text-cyan-400 shrink-0 mt-0.5 font-mono">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Quick Git Clone Snippet with 1-click copy */}
                <div className="mb-5 flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400 overflow-hidden">
                  <span className="truncate text-slate-300">
                    <span className="text-emerald-400">$</span> git clone {project.github}
                  </span>
                  <button
                    onClick={() => handleCopyClone(project.id, project.github)}
                    type="button"
                    className="shrink-0 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-white transition cursor-pointer"
                    title="Copy git clone command"
                  >
                    {copiedId === project.id ? (
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    ) : (
                      "Copy"
                    )}
                  </button>
                </div>
              </div>

              {/* Card Footer: Tech Stack + Links */}
              <div className="p-6 sm:p-7 pt-0">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 mb-5 border-t border-slate-800/80">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/60 text-slate-200 hover:text-emerald-400 text-xs font-semibold transition flex items-center justify-center gap-2 group/btn"
                >
                  <svg className="w-4 h-4 fill-current text-slate-400 group-hover/btn:text-emerald-400 transition" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>view_source_code()</span>
                  <span className="text-slate-500 group-hover/btn:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;