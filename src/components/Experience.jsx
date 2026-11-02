import { experienceData } from "../data/portfolio";

function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-4">
            Background & Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Education &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Experience
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Academic foundations combined with practical software internship delivery.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-slate-800 before:to-slate-900">
          {experienceData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className="relative flex items-center justify-between md:justify-normal group"
              >
                {/* Timeline Node Dot */}
                <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-md shadow-cyan-500/20 flex items-center justify-center z-20 group-hover:scale-110 group-hover:border-cyan-300 transition-transform">
                  {item.type === "education" ? (
                    <span className="text-base">🎓</span>
                  ) : (
                    <span className="text-base">💼</span>
                  )}
                </div>

                {/* Timeline Card */}
                <div
                  className={`w-full sm:w-[calc(50%-2.5rem)] ml-14 sm:ml-0 ${
                    isEven ? "sm:mr-auto sm:text-left" : "sm:ml-auto sm:text-left"
                  }`}
                >
                  <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-6 sm:p-7 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-black/20 hover:-translate-y-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400">
                        {item.period}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        📍 {item.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                      {item.role}
                    </h3>

                    <p className="text-sm font-semibold text-cyan-400/90 mb-3">
                      {item.organization}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.badges.map((badge) => (
                        <span
                          key={badge}
                          className="text-xs px-2.5 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
