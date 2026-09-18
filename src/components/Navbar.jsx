function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-cyan-400"
        >
          Sudhir Kumar
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-white font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
