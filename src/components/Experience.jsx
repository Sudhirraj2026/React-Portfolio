import { experienceData } from "../data/portfolio";

function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden font-mono">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/40 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4 shadow-md shadow-emerald-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            [EXECUTION_LOG: TIMELINE_TELEMETRY]
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            Education &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
              Execution History
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-2xl mx-auto font-mono">
            // Thread logs: Academic computer science foundations & verified software engineering internship deliveries.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-10 relative before:absolute before:inset-0 before:left-5 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-cyan-500 before:to-slate-900">
          {experienceData.map((item, index) => {
            const isEven = index % 2 === 0;
            const pid = index === 0 ? "PID_2026" : "PID_2024";
            const memAddr = index === 0 ? "0x00A1_CSE" : "0x00B2_INTERN";
            const status = index === 0 ? "THREAD_ACTIVE (IN_PROGRESS)" : "PROCESS_EXIT_0 (VERIFIED)";

            return (
              <div
                key={item.id}
                className="relative flex items-center justify-between md:justify-normal group"
              >
                {/* Timeline Node Dot */}
                <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-slate-950 border-2 border-emerald-400 shadow-lg shadow-emerald-500/20 flex items-center justify-center z-20 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-cyan-500/40 transition-all duration-300">
                  <span className="text-emerald-400 font-bold text-xs">
                    {index === 0 ? ">_" : "#"}
                  </span>
                </div>

                {/* Timeline Card */}
                <div
                  className={`w-full sm:w-[calc(50%-2.5rem)] ml-14 sm:ml-0 ${
                    isEven ? "sm:mr-auto sm:text-left" : "sm:ml-auto sm:text-left"
                  }`}
                >
                  <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-black/40 hover:-translate-y-1">
                    {/* Terminal Header Bar */}
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4 text-[11px] text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                        <span className="w-2 h-2 rounded-full bg-amber-500/80"></span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
                        <span className="text-emerald-400 font-semibold ml-1.5">[{pid}]</span>
                      </div>
                      <span className="text-cyan-400/90 font-mono text-[10px]">{memAddr}</span>
                    </div>

                    <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-300">
                        {item.period}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        📍 {item.location}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-1 font-sans">
                      {item.role}
                    </h3>

                    <p className="text-xs font-semibold text-cyan-400 mb-3">
                      @ {item.organization}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4 font-sans">
                      {item.description}
                    </p>

                    {/* Status Pill */}
                    <div className="mb-4 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span className="text-slate-400 font-mono">{status}</span>
                    </div>

                    {/* Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                      {item.badges.map((badge) => (
                        <span
                          key={badge}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition"
                        >
                          #{badge}
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
