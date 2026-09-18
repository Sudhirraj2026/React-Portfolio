import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <main>
        {/* Home */}
        <section id="home">
          <Hero />
        </section>

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Skills */}
        <section id="skills">
          <Skills />
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