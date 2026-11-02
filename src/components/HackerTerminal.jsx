import { useState, useEffect, useRef } from "react";
import { personalInfo, projectsData, skillsData, experienceData } from "../data/portfolio";

function HackerTerminal({ isOpen, onClose, onToggleMatrix, matrixActive }) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "⚡ SK_OS [Version 2.6.4-kali-amd64]\nType 'help' to view available system commands.",
    },
  ]);
  const [commandIndex, setCommandIndex] = useState(-1);
  const [pastCommands, setPastCommands] = useState([]);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const rawCmd = inputVal.trim();
      const cmd = rawCmd.toLowerCase();

      if (!rawCmd) return;

      setPastCommands((prev) => [...prev, rawCmd]);
      setCommandIndex(-1);

      const newHistory = [...history, { type: "user", text: rawCmd }];

      switch (cmd) {
        case "help":
          newHistory.push({
            type: "output",
            text: `Available commands:
  whoami        - Decrypt profile telemetry and mission
  projects      - Display loaded production modules & repositories
  skills        - Print active technical vector matrix
  experience    - Print education & execution log
  socials       - Print social uplink channels
  cat resume    - Execute instant resume download
  sudo hire     - Initiate instant hire clearance protocol
  matrix        - Toggle background Matrix digital rain [currently: ${matrixActive ? "ON" : "OFF"}]
  clear         - Wipe current terminal buffer
  exit          - Close interactive terminal console`,
          });
          break;

        case "whoami":
          newHistory.push({
            type: "output",
            text: `NAME: ${personalInfo.name}
ROLE: ${personalInfo.role}
STATUS: ${personalInfo.status}
LOCATION: ${personalInfo.location}
EMAIL: ${personalInfo.email}
BIO: ${personalInfo.bio}`,
          });
          break;

        case "projects": {
          const projectList = projectsData
            .map(
              (p, idx) =>
                `[${idx + 1}] ${p.title} (${p.category})\n    ${p.description}\n    Repo: ${p.github}`
            )
            .join("\n\n");
          newHistory.push({
            type: "output",
            text: `LOADED MODULES (7):\n\n${projectList}`,
          });
          break;
        }

        case "skills": {
          const skillList = skillsData
            .map(
              (s) =>
                `>> ${s.category.toUpperCase()}:\n   ${s.skills.map((sk) => sk.name).join(" • ")}`
            )
            .join("\n\n");
          newHistory.push({
            type: "output",
            text: `ACTIVE TECH MATRIX:\n\n${skillList}`,
          });
          break;
        }

        case "experience": {
          const expList = experienceData
            .map(
              (e) =>
                `>> [${e.period}] ${e.role} @ ${e.organization}\n   ${e.description}`
            )
            .join("\n\n");
          newHistory.push({
            type: "output",
            text: `EXECUTION TRACE:\n\n${expList}`,
          });
          break;
        }

        case "socials":
          newHistory.push({
            type: "output",
            text: `UPLINK CHANNELS:
  GitHub:    ${personalInfo.github}
  LinkedIn:  ${personalInfo.linkedin}
  Twitter:   ${personalInfo.twitter}
  Instagram: ${personalInfo.instagram}
  Facebook:  ${personalInfo.facebook}
  Email:     ${personalInfo.email}`,
          });
          break;

        case "cat resume":
        case "resume": {
          const link = document.createElement("a");
          link.href = personalInfo.resumeUrl;
          link.download = "Sudhir_Kumar_resume.pdf";
          link.click();
          newHistory.push({
            type: "output",
            text: ">> [STATUS 200 OK]: Triggered download of Sudhir_Kumar_resume.pdf",
          });
          break;
        }

        case "sudo hire":
        case "sudo hire sudhir":
          newHistory.push({
            type: "success",
            text: `[ROOT ACCESS GRANTED] 🚀
Welcome aboard! Sudhir is available for Internships & Full-Time Software Engineering roles.
Uplink to inbox: mailto:${personalInfo.email}`,
          });
          break;

        case "matrix":
          onToggleMatrix();
          newHistory.push({
            type: "output",
            text: `>> Matrix Rain FX: ${!matrixActive ? "ACTIVATED ⚡" : "DEACTIVATED ❌"}`,
          });
          break;

        case "clear":
          setHistory([]);
          setInputVal("");
          return;

        case "exit":
          onClose();
          return;

        default:
          newHistory.push({
            type: "error",
            text: `zsh: command not found: ${rawCmd}. Type 'help' for command listing.`,
          });
          break;
      }

      setHistory(newHistory);
      setInputVal("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (pastCommands.length > 0) {
        const nextIndex =
          commandIndex === -1 ? pastCommands.length - 1 : Math.max(0, commandIndex - 1);
        setCommandIndex(nextIndex);
        setInputVal(pastCommands[nextIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (pastCommands.length > 0 && commandIndex !== -1) {
        const nextIndex = commandIndex + 1;
        if (nextIndex >= pastCommands.length) {
          setCommandIndex(-1);
          setInputVal("");
        } else {
          setCommandIndex(nextIndex);
          setInputVal(pastCommands[nextIndex] || "");
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-slate-950 border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden flex flex-col h-[520px]">
        {/* Terminal Titlebar */}
        <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 transition"
              title="Close terminal"
            />
            <button
              onClick={() => setHistory([])}
              className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-600 transition"
              title="Clear terminal"
            />
            <button
              onClick={onToggleMatrix}
              className="w-3.5 h-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 transition"
              title="Toggle Matrix rain"
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-cyan-400">⚡</span>
            <span>sudhir@kali-linux:~ (zsh)</span>
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 transition"
          >
            ESC
          </button>
        </div>

        {/* Terminal Content Buffer */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-5 overflow-y-auto font-mono text-xs sm:text-sm text-slate-300 space-y-3 cursor-text bg-slate-950/95"
        >
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === "user" && (
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-emerald-400 font-bold">sudhir@kali:~$</span>
                  <span className="text-white">{item.text}</span>
                </div>
              )}
              {item.type === "system" && (
                <div className="text-emerald-400/90 whitespace-pre-wrap">{item.text}</div>
              )}
              {item.type === "output" && (
                <div className="text-slate-300 whitespace-pre-wrap pl-2 border-l-2 border-slate-800">
                  {item.text}
                </div>
              )}
              {item.type === "success" && (
                <div className="text-emerald-400 font-semibold whitespace-pre-wrap pl-2 border-l-2 border-emerald-500">
                  {item.text}
                </div>
              )}
              {item.type === "error" && (
                <div className="text-red-400 whitespace-pre-wrap">{item.text}</div>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 text-cyan-400 pt-1">
            <span className="text-emerald-400 font-bold shrink-0">sudhir@kali:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent text-white outline-none border-none p-0 focus:ring-0 font-mono text-xs sm:text-sm"
              autoFocus
              spellCheck={false}
            />
          </div>

          <div ref={terminalEndRef} />
        </div>

        {/* Quick Command Help Bar at bottom */}
        <div className="bg-slate-900/70 border-t border-slate-800/80 px-4 py-2 flex items-center justify-between gap-2 overflow-x-auto text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span>Quick:</span>
            {["help", "whoami", "projects", "skills", "cat resume", "sudo hire"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  setInputVal(cmd);
                  setTimeout(() => inputRef.current?.focus(), 50);
                }}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-400 transition"
              >
                {cmd}
              </button>
            ))}
          </div>
          <span className="text-slate-500 hidden sm:inline">Press Enter to execute</span>
        </div>
      </div>
    </div>
  );
}

export default HackerTerminal;
