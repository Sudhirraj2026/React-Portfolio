import { personalInfo } from "../data/portfolio";

function About() {
  const statHex = ["0x01", "0x02", "0x03", "0x04"];
  const statIcons = [
    // Graduation Cap
    (
      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
      </svg>
    ),
    // Projects Code
    (
      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    // Layers / Tech Stack
    (
      <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    // Rocket Growth
    (
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 font-mono">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/50 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4">
            [DOSSIER: DECRYPTED_PROFILE]
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            Driven by Curiosity, Grounded in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-500">
              Clean Systems
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Architecting real-world applications with modular clean code, socket networking, and algorithmic rigor.
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I am a 3rd-year <span className="text-cyan-400 font-medium font-mono">Computer Science &amp; Engineering</span> undergraduate
              from Bihar, India. My passion lies in architecting full-stack web applications, socket-based cross-platform
              solutions, and robust Java systems that solve tangible everyday problems.
            </p>

            <p className="text-slate-400 text-base leading-relaxed">
              Whether building real-time peer-to-peer file transfer engines like <strong className="text-slate-200 font-mono">QuickDrop</strong>,
              crafting responsive client applications with React and Tailwind CSS, or developing financial trading simulators
              in Java with object-oriented rigor, I thrive on writing maintainable, modular, and performant code.
            </p>

            {/* Core Pillars */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition flex items-start gap-3">
                <span className="text-lg text-emerald-400 font-mono">01_</span>
                <div>
                  <h4 className="text-sm font-semibold text-white font-mono">Rapid Full-Stack Delivery</h4>
                  <p className="text-xs text-slate-400 mt-1">From prototype to responsive, tested production apps.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition flex items-start gap-3">
                <span className="text-lg text-emerald-400 font-mono">02_</span>
                <div>
                  <h4 className="text-sm font-semibold text-white font-mono">Algorithmic Problem Solving</h4>
                  <p className="text-xs text-slate-400 mt-1">Solid foundations in Data Structures and OOP principles.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition flex items-start gap-3">
                <span className="text-lg text-emerald-400 font-mono">03_</span>
                <div>
                  <h4 className="text-sm font-semibold text-white font-mono">Network &amp; Socket Protocols</h4>
                  <p className="text-xs text-slate-400 mt-1">Experience with real-time peer sockets, CORS &amp; REST.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition flex items-start gap-3">
                <span className="text-lg text-emerald-400 font-mono">04_</span>
                <div>
                  <h4 className="text-sm font-semibold text-white font-mono">Continuous Growth Mindset</h4>
                  <p className="text-xs text-slate-400 mt-1">Always experimenting with AI, systems, and new tech.</p>
                </div>
              </div>
            </div>

            {/* Career Objective Quote */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 to-slate-900/40 border-l-4 border-emerald-400 border-t border-r border-b border-slate-800 font-mono text-xs sm:text-sm text-slate-300">
              <span className="text-emerald-400">&gt;&gt;</span> "My ambition is to contribute to high-impact engineering teams where I can write impactful code, scale distributed systems, and grow into a world-class Software Engineer."
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6 font-mono">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="group relative bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/60 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-lg shadow-black/30"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {statIcons[idx]}
                  </div>
                  <span className="text-[11px] text-emerald-400 font-bold tracking-wider">
                    {statHex[idx]}
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition-colors font-sans">
                  {stat.value}
                </h4>
                <p className="text-xs font-semibold text-slate-300 mt-2">
                  {stat.label}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
