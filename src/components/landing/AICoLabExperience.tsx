import { CheckCircle2 } from "lucide-react";
import Certificate from "@/assets/Certificate.png";

const TOOLS = [
 "Copilot",
  "synthesia",
  "GitHub Copilot",
  "Hugging Face",
  "deepseek",
  "Claude",
  "windsurf",
  "CURSOR",
  
];

export function AICoLabExperience() {
  return (
    <section className="relative bg-[#0a0a1f] py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {/* Title cell */}
        <div className="rounded-2xl p-6">
          <h2 className="text-4xl font-extrabold leading-tight">
            <span className="text-yellow-400">Virtual AI Co-Lab</span>
            <br />
            <span className="text-orange-400">Experience</span>
          </h2>
          <p className="mt-4 max-w-xs text-sm text-slate-300">
            Work with leading startups and global enterprises
          </p>
          <svg
            className="mt-2 h-3 w-40 text-yellow-400"
            viewBox="0 0 160 12"
            fill="none"
          >
            <path
              d="M2 8 C 40 2, 120 2, 158 8"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Live Industry Problems */}
        <div className="rounded-2xl bg-gradient-to-br from-[#3a0c1c] via-[#5b0f2a] to-[#1a0410] p-8 text-center ring-1 ring-white/5">
          <h3 className="text-2xl font-bold text-white">Real-World Industry Projects</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-200">
            Solve real business challenges with AI-driven projects and hands-on industry experience.
          </p>
        </div>

        {/* Backed by Industry */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0c3a2a] via-[#0a4d36] to-[#04140e] p-8 text-center ring-1 ring-white/5">
          <h3 className="text-2xl font-bold text-yellow-300">Industry-Recognized Certifications</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-200">
            Earn certifications valued by leading companies to strengthen your career prospects.
          </p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mx-auto mt-6 grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#4b1d96] to-[#2e0e6b] p-8">
          <h3 className="text-2xl font-bold text-emerald-300">Learn In-Demand Tools:</h3>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {TOOLS.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white px-4 py-2 text-center text-xs font-bold text-slate-900 shadow"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid items-center gap-6 rounded-2xl bg-[#08080d] p-6 ring-1 ring-amber-500/20 sm:grid-cols-[260px_1fr] sm:p-8">
         
          <div className="mx-auto w-full max-w-[260px]">

     <img
              src={Certificate}
              alt="Portfolio Preview"
      width={260}
      height={340}
      className="w-full rounded-xl shadow-2xl ring-1 ring-orange-500/20 object-cover"
            />

  </div>

          <div>
            <h3 className="text-xl font-bold text-orange-400 sm:text-2xl">
              Build a Portfolio Recruiters Can't Ignore
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-200">
              {[
                "Showcase real-world AI projects",
                "Earn industry-recognized certification",
                "Impress recruiters with practical skills",
              ].map((i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
