function Projects() {
  const projects = [
    {
      title: "QuickDrop",
      descripstion:
      "A mac <=> Abdroide data share App very easy to share file {music , video, document}",
      tech: ["React", "Electron", "node.js", "Express", "Multer", "Socket.Io", "Kotlin", "CORS", "Vite"],
      github: "https://github.com/Sudhirraj2026/QuickDrop.git",
    },

    {
      title: "CodeAlpha_StockTradingPlatform",
      descripstion:
      "A Java-based console application that simulates a basic stock trading environment The platform allows users to monitor stock prices, buy and sell stocks, manage their portfolio, view trade history, and calculate portfolio profit or loss.",
      tech: ["Java", "Object-Oriented Programming (OOP)", "ArrayLis", "HashMap", "Java Collections", "File and package-free console application"],
      github: "https://github.com/Sudhirraj2026/CodeAlpha_StockTradingPlatform.git",
    },
    {
      title: "Rohit Aluminium Website",
      description:
        "A responsive business website for an aluminium and UPVC glass company with products and contact information.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Sudhirraj2026/rohit-aluminium",
    },

    {
      title: "60 Days AI Project",
      description:
        "An AI learning project created while exploring artificial intelligence, programming and practical development.",
      tech: ["Python", "AI"],
      github: "https://github.com/Sudhirraj2026/60-days-eaysclude-ai",
    },

    {
      title: "CodeAlpha FAQ Chatbot",
      description:
        "A Python-based FAQ chatbot that provides answers to frequently asked questions.",
      tech: ["Python", "Chatbot"],
      github: "https://github.com/Sudhirraj2026/CodeAlpha_FAQ_Chatbot",
    },

    {
      title: "CodeAlpha Translation Tool",
      description:
        "A Python-based translation tool created during the CodeAlpha internship.",
      tech: ["Python"],
      github: "https://github.com/Sudhirraj2026/CodeAlpha_TranslationTool",
    },
    {
      title: "CodeAlpha_StudentGradeTracker",
      descripstion:
      "Student Grade Tracker is a Java application that allows users to add, view, search, update, and delete student records.The application also calculates the average marks and identifies the highest and lowest scores. It automatically assigns grades and displays whether a student has passed or failed.Student data is stored in a text file so that the records remain available even after closing the application.",
      tech: ["Java", "Java Collections (ArrayList)", "File Handling", "Object-Oriented Programming (OOP)", "Exception Handling", "Scanner for user input"],
      github: "https://github.com/Sudhirraj2026/CodeAlpha_StudentGradeTracker.git",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-lg font-medium">
            My Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            What I've Built
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >

              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-6">
                <span className="text-2xl">💻</span>
              </div>

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-7 text-cyan-400 hover:text-white transition font-semibold"
              >
                View on GitHub →
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;