import profile from "../assets/image/profile.jpg";
import { personalInfo } from "../data/portfolio";

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-cyan-400 text-lg">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-3 text-white">
            {personalInfo.name}
          </h1>

          <h2 className="text-2xl text-gray-300 mt-5">
            {personalInfo.role}
          </h2>

          <p className="text-gray-400 mt-6 leading-8 max-w-xl">
            Passionate Full Stack Developer learning React, Python,
            JavaScript and building real-world projects.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-5 flex-wrap">
            
            {/* Resume Download */}
            <a
              href="/Sudhir_Kumar_resume.pdf"
              download="Sudhir_Kumar_resume.pdf"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-semibold transition"
            >
              Download Resume
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-xl hover:bg-cyan-500 hover:text-white transition"
            >
              Contact
            </a>

          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative">
            
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-30"></div>

            <img
              src={profile}
              alt={personalInfo.name}
              className="relative w-80 h-80 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
            />

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;