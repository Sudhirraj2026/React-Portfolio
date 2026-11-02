import profile from "../assets/image/profile.jpg";
import { personalInfo } from "../data/portfolio";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-wider uppercase text-cyan-400">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                {personalInfo.name}
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center gap-2 flex-wrap">
              <span>Full Stack Developer</span>
              <span className="text-cyan-400/60">•</span>
              <span className="text-slate-400">Software Engineer</span>
              <span className="text-cyan-400/60">•</span>
              <span className="text-slate-400">B.Tech CSE '26</span>
            </h2>
          </div>

          {/* Bio Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Sudhir_Kumar_resume.pdf"
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-cyan-400 font-semibold text-sm border border-slate-700/80 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 shadow-sm"
            >
              <svg
                className="w-4 h-4 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="px-5 py-3.5 rounded-xl text-slate-400 hover:text-white font-medium text-sm hover:bg-slate-900/60 transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links Strip */}
          <div className="pt-6 border-t border-slate-800/80 flex items-center gap-4 flex-wrap">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Connect:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-slate-700 transition-colors"
                aria-label="Send Email"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image & Floating Highlights */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-3 scale-95" />

            {/* Profile Card Container */}
            <div className="relative bg-slate-900/80 border border-slate-800/90 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-inner group">
                <img
                  src={profile}
                  alt={personalInfo.name}
                  fetchPriority="high"
                  loading="eager"
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-3 -right-3 sm:-right-4 bg-slate-900/95 border border-slate-700/90 px-3.5 py-2 rounded-xl shadow-lg backdrop-blur-md flex items-center gap-2">
                <span className="text-base">🚀</span>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Focus</p>
                  <p className="text-xs font-semibold text-cyan-400">Full Stack & Systems</p>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-3 sm:-left-4 bg-slate-900/95 border border-slate-700/90 px-3.5 py-2 rounded-xl shadow-lg backdrop-blur-md flex items-center gap-2">
                <span className="text-base">🎓</span>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Undergraduate</p>
                  <p className="text-xs font-semibold text-slate-200">B.Tech CSE '26</p>
                </div>
              </div>

              {/* Floating Badge 3: Bottom Right */}
              <div className="absolute -bottom-4 -right-2 sm:-right-3 bg-slate-900/95 border border-slate-700/90 px-3.5 py-2 rounded-xl shadow-lg backdrop-blur-md flex items-center gap-2">
                <span className="text-base">⚡</span>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Shipped</p>
                  <p className="text-xs font-semibold text-emerald-400">7+ Real Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;