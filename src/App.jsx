import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseSpotlight from "./components/MouseSpotlight";
import MatrixBackground from "./components/MatrixBackground";
import HackerTerminal from "./components/HackerTerminal";
import GitHubTelemetry from "./components/GitHubTelemetry";

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isMatrixActive, setIsMatrixActive] = useState(false);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-300 relative cyber-grid">
      {/* Interactive Cyber FX Layers */}
      <MouseSpotlight />
      <MatrixBackground active={isMatrixActive} />
      <HackerTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onToggleMatrix={() => setIsMatrixActive((prev) => !prev)}
        matrixActive={isMatrixActive}
      />

      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onToggleMatrix={() => setIsMatrixActive((prev) => !prev)}
        matrixActive={isMatrixActive}
      />

      <main className="relative z-10">
        {/* Home / Hero */}
        <section id="home">
          <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        </section>

        {/* Live GitHub Telemetry Bar */}
        <GitHubTelemetry />

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Technical Skills */}
        <section id="skills">
          <Skills />
        </section>

        {/* Education & Experience */}
        <section id="experience">
          <Experience />
        </section>

        {/* Projects */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;