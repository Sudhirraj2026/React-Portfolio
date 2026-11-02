import { useState } from "react";
import { personalInfo } from "../data/portfolio";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger user's mail client with prefilled fields
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Encrypted Message from ${formData.name} via Portfolio`
    )}&body=${encodeURIComponent(
      `[SENDER_IDENTITY]: ${formData.name}\n[SENDER_UPLINK]: ${formData.email}\n\n[PAYLOAD]:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/80 font-mono">
      {/* Background ambient neon glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/40 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4 shadow-md shadow-emerald-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            [UPLINK: ENCRYPTED_CHANNEL]
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            Initiate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
              Direct Uplink
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-2xl mx-auto">
            // Open for Software Engineering roles, Full-Stack internships, and system architecture collaborations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Contact Layout: 2 Columns */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Info Cards & Networks */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-xl shadow-black/40">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4 text-[11px] text-slate-400">
                <span className="text-emerald-400 font-bold">// NETWORK_INTERFACE</span>
                <span className="text-cyan-400">PORT: 465 (TLS)</span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight font-sans mb-2">
                Direct Communication Node
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-6 font-sans">
                Have a project query, full-stack opportunity, or want to discuss network protocols, React, or Java? My channel is open 24/7.
              </p>

              {/* Email Card with 1-click copy */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">TARGET_MAIL</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition truncate block font-mono"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  title="Copy email to clipboard"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 hover:text-emerald-400 border border-slate-800 transition flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-emerald-400 text-[11px]">COPIED</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      <span className="text-[11px]">COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="mt-3 p-4 rounded-xl bg-slate-950 border border-slate-800/90 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-lg shrink-0">
                  📍
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">GEOLOCATION</span>
                  <p className="text-xs font-semibold text-white font-sans">{personalInfo.location}</p>
                  <p className="text-[10px] text-emerald-400">GLOBAL_AVAILABILITY: REMOTE &amp; ONSITE</p>
                </div>
              </div>
            </div>

            {/* Social Connectivity Grid */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-xl shadow-black/40">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>AUTHENTICATED_CHANNELS</span>
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800/90 hover:border-emerald-500/60 transition group flex items-center gap-2.5"
                >
                  <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-emerald-400 transition shrink-0" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-white group-hover:text-emerald-400 transition">GitHub</p>
                    <p className="text-[9px] text-slate-500 truncate">@Sudhirraj2026</p>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800/90 hover:border-cyan-500/60 transition group flex items-center gap-2.5"
                >
                  <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-cyan-400 transition shrink-0" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-white group-hover:text-cyan-400 transition">LinkedIn</p>
                    <p className="text-[9px] text-slate-500 truncate">Sudhir Kumar</p>
                  </div>
                </a>

                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800/90 hover:border-cyan-400/60 transition group flex items-center gap-2.5"
                >
                  <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-cyan-400 transition shrink-0" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-white group-hover:text-cyan-400 transition">Twitter (X)</p>
                    <p className="text-[9px] text-slate-500 truncate">@Sudhir_AI1</p>
                  </div>
                </a>

                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800/90 hover:border-pink-500/60 transition group flex items-center gap-2.5"
                >
                  <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-pink-400 transition shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-white group-hover:text-pink-400 transition">Instagram</p>
                    <p className="text-[9px] text-slate-500 truncate">@kali_linux.1m</p>
                  </div>
                </a>

                <a
                  href={personalInfo.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800/90 hover:border-blue-500/60 transition group flex items-center gap-2.5 col-span-2"
                >
                  <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-blue-500 transition shrink-0" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-white group-hover:text-blue-400 transition">Facebook</p>
                    <p className="text-[9px] text-slate-500 truncate">PUBLICCMD</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive CLI Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl shadow-black/50">
            {/* Terminal Window Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="text-slate-300 font-bold ml-2">guest@client:~$ ./transmit_payload.sh</span>
              </div>
              <span className="text-[10px] text-emerald-400 uppercase tracking-widest hidden sm:inline">
                STATUS: READY
              </span>
            </div>

            <p className="text-slate-400 text-xs mb-6">
              // Enter sender credentials and message payload to trigger direct encrypted mail draft.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-xs flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>[PAYLOAD_DISPATCHED]: Mail client initialized with prefilled encrypted buffers.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    &gt; sender_name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-xs transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    &gt; sender_email <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-xs transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  &gt; payload_subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Software Engineer Opportunity // Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-xs transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  &gt; payload_body <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter message details, engineering role specifications, or collaboration scope..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-xs transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer hover:shadow-cyan-500/30"
              >
                <span>[ TRANSMIT_PAYLOAD ]</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;