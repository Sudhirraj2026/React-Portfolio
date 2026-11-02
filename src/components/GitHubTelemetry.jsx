import { useEffect, useState } from "react";
import { personalInfo } from "../data/portfolio";

function GitHubTelemetry() {
  const [data, setData] = useState({
    repos: 7,
    followers: 0,
    lastActive: "Recently active",
    status: "CONNECTED",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubData() {
      try {
        const userRes = await fetch("https://api.github.com/users/Sudhirraj2026");
        if (!userRes.ok) throw new Error("API rate limit or network issue");
        const userData = await userRes.json();

        let lastActiveText = "Active recently";
        try {
          const eventsRes = await fetch("https://api.github.com/users/Sudhirraj2026/events?per_page=5");
          if (eventsRes.ok) {
            const events = await eventsRes.json();
            if (events && events.length > 0) {
              const lastDate = new Date(events[0].created_at);
              const diffHours = Math.round((new Date() - lastDate) / (1000 * 60 * 60));
              if (diffHours < 24) {
                lastActiveText = `${diffHours}h ago`;
              } else {
                lastActiveText = `${Math.round(diffHours / 24)}d ago`;
              }
            }
          }
        } catch {
          // Fallback gracefully
        }

        if (isMounted) {
          setData({
            repos: userData.public_repos || 7,
            followers: userData.followers || 0,
            lastActive: lastActiveText,
            status: "LIVE_SYNC",
          });
          setLoading(false);
        }
      } catch {
        if (isMounted) {
          setData({
            repos: 7,
            followers: 1,
            lastActive: "Verified",
            status: "OFFLINE_CACHE",
          });
          setLoading(false);
        }
      }
    }

    fetchGitHubData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="py-6 px-4 bg-slate-950 border-y border-slate-800/80 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Uplink Status */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-slate-400">
            GITHUB_UPLINK:{" "}
            <span className="text-emerald-400 font-semibold">
              {loading ? "INITIALIZING..." : data.status}
            </span>
          </span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-slate-400 hidden sm:inline">
            NODE: <span className="text-cyan-400">@Sudhirraj2026</span>
          </span>
        </div>

        {/* Live Counters */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500">REPOS:</span>
            <span className="text-cyan-400 font-bold">{data.repos}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-slate-500">LAST_PUSH:</span>
            <span className="text-emerald-400 font-semibold">{data.lastActive}</span>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-800 hover:border-cyan-500/50 transition flex items-center gap-1"
          >
            <span>inspect_repo</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default GitHubTelemetry;
