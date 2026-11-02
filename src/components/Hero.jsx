import { useState, useEffect } from "react";
import profile from "../assets/image/profile.jpg";
import { personalInfo } from "../data/portfolio";

function Hero({ onOpenTerminal }) {
  const roles = [
    "Full Stack Developer",
    "Socket & Network Architect",
    "Java Systems Specialist",
    "Linux & Cyber Enthusiast",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => currentRole.slice(0, prev.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Cyber Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/95 border border-emerald-500/40 text-xs font-mono text-emerald-400 shadow-lg shadow-emerald-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>ENCRYPTED_UPLINK: ONLINE • {personalInfo.status}</span>
          </div>

          {/* Heading */}
          <div className="space-y-3 font-mono">
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-cyan-400 flex items-center gap-2">
              <span>root@portfolio:~$ whoami</span>
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-500">
                {personalInfo.name}
              </span>
            </h1>

            {/* Dynamic Typewriter Line */}
            <div className="h-10 sm:h-12 flex items-center">
              <h2 className="text-xl sm:text-3xl font-bold font-mono text-cyan-400 flex items-center gap-2">
                <span className="text-emerald-400">&gt;</span>
                <span>{displayText}</span>
                <span className="terminal-cursor"></span>
              </h2>
            </div>
          </div>

          {/* Bio Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2 font-mono">
            {/* Terminal Launcher */}
            <button
              onClick={onOpenTerminal}
              type="button"
              className="px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <span>&gt;_ Launch Terminal</span>
            </button>

            <a
              href="#projects"
              className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-cyan-400 font-semibold text-xs sm:text-sm border border-slate-700/80 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <span className="text-cyan-400">→</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Sudhir_Kumar_resume.pdf"
              className="px-4 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 font-medium text-xs sm:text-sm border border-slate-800 transition"
            >
              Resume.pdf
            </a>
          </div>

          {/* Social Links Strip */}
          <div className="pt-6 border-t border-slate-800/80 flex items-center gap-4 flex-wrap">
            <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
              UPLINK_NODES:
            </span>
            <div className="flex items-center gap-2.5 flex-wrap">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
                title="GitHub"
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
                title="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-slate-700 transition-colors"
                aria-label="Twitter X Profile"
                title="Twitter / X"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-pink-400 border border-slate-800 hover:border-slate-700 transition-colors"
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href={personalInfo.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-500 border border-slate-800 hover:border-slate-700 transition-colors"
                aria-label="Facebook Profile"
                title="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-slate-700 transition-colors"
                aria-label="Send Email"
                title="Email"
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

        {/* Right Column: Holographic Avatar & Neofetch Terminal Box */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center gap-5">
          {/* Avatar Container */}
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-2 scale-95" />

            <div className="relative bg-slate-900/90 border border-cyan-500/30 rounded-3xl p-5 backdrop-blur-xl shadow-2xl">
              <div className="relative mx-auto w-52 h-52 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border border-cyan-400/50 shadow-inner group">
                <img
                  src={profile}
                  alt={personalInfo.name}
                  fetchPriority="high"
                  loading="eager"
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>

              {/* Neofetch Mock Terminal Card */}
              <div className="mt-4 bg-slate-950 border border-slate-800/90 rounded-xl p-3.5 font-mono text-[11px] space-y-1 text-slate-300">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-slate-500 text-[10px]">
                  <span>sys_telemetry@kali-linux: ~</span>
                  <span className="text-emerald-400">● LIVE</span>
                </div>
                <div className="pt-1 grid grid-cols-2 gap-x-2 gap-y-1">
                  <div>
                    <span className="text-slate-500">OS:</span>{" "}
                    <span className="text-cyan-400">Kali / macOS</span>
                  </div>
                  <div>
                    <span className="text-slate-500">HOST:</span>{" "}
                    <span className="text-white">B.Tech '26</span>
                  </div>
                  <div>
                    <span className="text-slate-500">STACK:</span>{" "}
                    <span className="text-emerald-400">React • Node • Java</span>
                  </div>
                  <div>
                    <span className="text-slate-500">ROLE:</span>{" "}
                    <span className="text-cyan-300">Software Eng.</span>
                  </div>
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