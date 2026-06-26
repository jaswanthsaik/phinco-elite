import { CheckCircle2 } from "lucide-react";

const TOOLS = [
  "synthesia",
  "Claude",
  "CURSOR",
  "deepseek",
  "windsurf",
  "GitHub Copilot",
  "Hugging Face",
  "Copilot",
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
            Work with startups and enterprises
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
          <h3 className="text-2xl font-bold text-white">Live Industry Problems</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-200">
            Work on real time problem statements of AI-driven companies.
          </p>
        </div>

        {/* Backed by Industry */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0c3a2a] via-[#0a4d36] to-[#04140e] p-8 text-center ring-1 ring-white/5">
          <h3 className="text-2xl font-bold text-yellow-300">Backed by Industry</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-200">
            Earn certificates directly recognized by companies.
          </p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mx-auto mt-6 grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#4b1d96] to-[#2e0e6b] p-8">
          <h3 className="text-2xl font-bold text-emerald-300">Master tools like:</h3>
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
          {/* Certificate mock */}
          <div className="mx-auto w-full max-w-[240px] rounded-md bg-white p-4 text-center text-slate-900 shadow-xl">
            <div className="text-xs font-bold text-orange-500">Outspokn</div>
            <div className="text-[8px] tracking-widest text-slate-400">PROUDLY PRESENTS</div>
            <div className="my-3 text-base font-extrabold">CERTIFICATE</div>
            <div className="text-[9px] uppercase tracking-wider text-slate-500">Of Achievement To</div>
            <div className="my-2 font-serif text-lg italic text-slate-800">Abhishek Gupta</div>
            <p className="text-[8px] leading-snug text-slate-500">
              For successfully completing the AI Co-Lab Experience program, demonstrating advanced
              competency and practical expertise in Artificial Intelligence and Generative AI.
            </p>
            <div className="mt-3 text-[8px] font-bold text-slate-500">AUGUST, 2025</div>
            <div className="mt-2 border-t border-slate-200 pt-2 text-[8px] text-slate-500">
              POWERED BY LEARNBAY
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-400 sm:text-2xl">
              Recruiters cannot say 'No' to this portfolio
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-200">
              {[
                "Gain practical AI experience",
                "Get startup-certified proof of work",
                "Stand out in interviews",
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
