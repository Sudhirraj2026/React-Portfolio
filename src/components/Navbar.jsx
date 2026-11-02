import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolio";

function Navbar({ onOpenTerminal, onToggleMatrix, matrixActive }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-cyan-900/40 shadow-lg shadow-black/40 py-3"
          : "bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Hacker Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-white transition focus:outline-none font-mono"
        >
          <div className="w-9 h-9 rounded-xl bg-slate-900 border border-emerald-500/60 flex items-center justify-center font-bold text-emerald-400 text-sm shadow-md shadow-emerald-500/10 group-hover:border-cyan-400 transition-colors">
            &gt;_
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                sudhir@kali:~$
              </span>
              <span className="terminal-cursor"></span>
            </div>
            <span className="block text-[10px] text-emerald-400/90 -mt-0.5 tracking-wider">
              FULL_STACK_ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 border border-slate-800 rounded-full px-4 py-1.5 backdrop-blur-md font-mono">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/80 px-3 py-1.5 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls: Terminal, Matrix, Resume */}
        <div className="hidden sm:flex items-center gap-2.5 font-mono">
          {/* Terminal Launcher Button */}
          <button
            onClick={onOpenTerminal}
            type="button"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-400 border border-emerald-500/50 hover:border-emerald-400 transition flex items-center gap-1.5 shadow-sm shadow-emerald-500/10 cursor-pointer"
            title="Open Interactive Terminal"
          >
            <span>&gt;_</span>
            <span>Terminal</span>
          </button>

          {/* Matrix FX Toggle */}
          <button
            onClick={onToggleMatrix}
            type="button"
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition flex items-center gap-1.5 cursor-pointer ${
              matrixActive
                ? "bg-cyan-950/70 border-cyan-400 text-cyan-300 shadow-sm shadow-cyan-400/20"
                : "bg-slate-900 hover:bg-slate-850 border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
            title="Toggle Matrix Background Rain"
          >
            <span>⚡</span>
            <span>Matrix FX</span>
          </button>

          <a
            href={personalInfo.resumeUrl}
            download="Sudhir_Kumar_resume.pdf"
            className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-cyan-400 border border-slate-700/80 transition flex items-center gap-1.5"
          >
            <svg
              className="w-3.5 h-3.5"
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
            CV
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={personalInfo.resumeUrl}
            download="Sudhir_Kumar_resume.pdf"
            className="sm:hidden text-xs font-medium px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300"
          >
            CV
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-6 py-6 animate-fadeIn transition-all">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900 transition flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-slate-600 text-sm">→</span>
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-800/80 flex flex-col gap-2.5 font-mono">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    handleLinkClick();
                    onOpenTerminal();
                  }}
                  className="py-2.5 px-3 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <span>&gt;_</span>
                  <span>Terminal</span>
                </button>

                <button
                  onClick={() => {
                    onToggleMatrix();
                  }}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 ${
                    matrixActive
                      ? "bg-cyan-950/70 border-cyan-400 text-cyan-300"
                      : "bg-slate-900 border-slate-800 text-slate-300"
                  }`}
                >
                  <span>⚡</span>
                  <span>Matrix {matrixActive ? "ON" : "OFF"}</span>
                </button>
              </div>

              <a
                href={personalInfo.resumeUrl}
                download="Sudhir_Kumar_resume.pdf"
                onClick={handleLinkClick}
                className="w-full py-3 rounded-xl bg-slate-900 border border-slate-700 text-center text-xs font-semibold text-slate-200 hover:text-cyan-400 transition flex items-center justify-center gap-2"
              >
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
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Resume (PDF)
              </a>

              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-center text-xs font-bold transition shadow-md shadow-emerald-500/20 font-sans"
              >
                Get In Touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
