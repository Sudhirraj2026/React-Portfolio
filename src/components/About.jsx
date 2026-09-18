function About() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-lg font-medium">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Who I Am
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Hello! I'm Sudhir Kumar 👋
            </h3>

            <p className="text-gray-400 text-lg leading-8 mb-5">
              I'm a B.Tech (CSE) 3rd Year student from Bihar, India,
              passionate about software development and modern web
              technologies.
            </p>

            <p className="text-gray-400 text-lg leading-8">
              I'm currently learning React, Python, JavaScript,
              Tailwind CSS and Full Stack Development while building
              real-world projects.
            </p>

            {/* Career Goal */}
            <div className="mt-8 border-l-4 border-cyan-400 pl-5">
              <p className="text-gray-300 leading-7">
                My goal is to continuously improve my programming and
                problem-solving skills and grow into a professional
                Software Engineer.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-5">

            {/* Card 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-1 transition duration-300">
              <h4 className="text-cyan-400 text-3xl font-bold">
                3rd
              </h4>

              <p className="text-gray-400 mt-2">
                B.Tech Year
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-1 transition duration-300">
              <h4 className="text-cyan-400 text-3xl font-bold">
                8+
              </h4>

              <p className="text-gray-400 mt-2">
                Technologies
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-1 transition duration-300">
              <h4 className="text-cyan-400 text-3xl font-bold">
                ∞
              </h4>

              <p className="text-gray-400 mt-2">
                Learning Mindset
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-1 transition duration-300">
              <h4 className="text-cyan-400 text-3xl font-bold">
                🚀
              </h4>

              <p className="text-gray-400 mt-2">
                Future Software Engineer
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
