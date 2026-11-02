import { useState } from "react";
import { projectsData } from "../data/portfolio";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Full Stack",
    "Java & Systems",
    "AI & Python",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const getCategoryCount = (category) => {
    if (category === "All") return projectsData.length;
    return projectsData.filter((p) => p.category === category).length;
  };

  const projectIcons = {
    transfer: "🔄",
    building: "🏢",
    chart: "📈",
    academic: "🎓",
    brain: "🧠",
    chat: "💬",
    globe: "🌐",
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-4">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Featured Projects &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Applications
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Practical software engineering across cross-platform socket sharing, responsive web apps, algorithmic Java engines, and AI scripts.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => {
            const count = getCategoryCount(category);
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25"
                    : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-slate-950 text-cyan-400 font-bold"
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
              className={`group relative bg-slate-900/80 border rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/20 flex flex-col justify-between ${
                project.featured
                  ? "border-cyan-500/40 hover:border-cyan-400 bg-gradient-to-br from-slate-900/90 to-slate-900/50"
                  : "border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900"
              }`}
            >
              <div>
                {/* Header: Icon + Category + Featured Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {projectIcons[project.icon] || "💻"}
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    {project.featured && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/60 text-cyan-400 tracking-wide uppercase">
                        ★ Featured
                      </span>
                    )}
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-400">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-400/80 font-medium mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Architectural Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-6 bg-slate-950/60 rounded-xl p-3.5 border border-slate-800/80 space-y-1.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Engineering Highlights
                    </p>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-xs text-slate-300 flex items-start gap-2"
                        >
                          <span className="text-cyan-400 mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Footer: Tech Stack + Links */}
              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 mb-6 border-t border-slate-800/60">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-mono"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-700/80 text-slate-200 hover:text-cyan-400 text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 group/btn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>View Repository</span>
                    <span className="text-slate-500 group-hover/btn:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;