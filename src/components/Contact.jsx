function Contact() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-lg font-medium">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let's Work Together
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Contact Content */}
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-gray-400 text-lg leading-8 mb-10">
            I'm always interested in learning new things, working on
            interesting projects and connecting with people in the
            software development field.
          </p>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Email */}
            <a
              href="sudhirraj983525@gmail.com"
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-1 transition duration-300"
            >
              <div className="text-3xl mb-3">📧</div>

              <h3 className="text-xl font-semibold">
                Email
              </h3>

              <p className="text-gray-400 mt-2">
                sudhirraj983525@gmail.com
              </p>
            </a>

            {/* Location */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-1 transition duration-300">
              <div className="text-3xl mb-3">📍</div>

              <h3 className="text-xl font-semibold">
                Location
              </h3>

              <p className="text-gray-400 mt-2">
                Bihar, India
              </p>
            </div>

          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-5 mt-10">

            <a
              href="https://github.com/Sudhirraj2026"
              className="border border-slate-700 px-6 py-3 rounded-xl text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              GitHub
            </a>
            <a
             href="https://www.linkedin.com/in/sudhir-kumar-962060371/"
             target="_blank"
             rel="noopener noreferrer"
             className="border border-slate-700 px-6 py-3 rounded-xl text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;