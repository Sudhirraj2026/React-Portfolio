function Skills() {
  const skills = [
    "Python",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-lg font-medium">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Technologies I Use
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-200">
                {skill}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;