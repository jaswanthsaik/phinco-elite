import { ChevronRight, Sparkles } from "lucide-react";

interface ProgramHeroProps {
  titleTop: string;
  titleHighlight: string;
  badge?: string;
  pointOne?: string;
  pointTwo?: string;
}

export function ProgramHero({
  titleTop,
  titleHighlight,
  badge = "Elevate your tech career with our programs",
  pointOne = "Learn to integrate GenAI into your existing software stack",
  pointTwo = "Build Autonomous AI Agents",
}: ProgramHeroProps) {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(to bottom, #050826, #0a0f3d 60%, #050826)" }}
    >
      {/* subtle decorative dots */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-[12%] top-[28%] h-10 w-10 text-white/30">
          <svg viewBox="0 0 40 40" fill="currentColor"><circle cx="4" cy="4" r="1.4"/><circle cx="14" cy="4" r="1.4"/><circle cx="24" cy="4" r="1.4"/><circle cx="4" cy="14" r="1.4"/><circle cx="14" cy="14" r="1.4"/><circle cx="24" cy="14" r="1.4"/></svg>
        </div>
        <div className="absolute right-[10%] top-[22%] h-12 w-12 text-white/20">
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="8" cy="8" r="3"/><circle cx="28" cy="8" r="3"/><circle cx="18" cy="26" r="3"/><path d="M11 10 L16 24 M25 10 L20 24"/></svg>
        </div>
        <div className="absolute left-[8%] bottom-[20%] h-10 w-10 text-white/25">
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="20" cy="20" r="14"/><path d="M20 6 V34 M6 20 H34"/></svg>
        </div>
        <div className="absolute right-[8%] bottom-[18%] h-12 w-12 text-white/20">
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="8" cy="20" r="3"/><circle cx="28" cy="10" r="3"/><circle cx="28" cy="30" r="3"/><path d="M11 19 L25 11 M11 21 L25 29"/></svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
          {titleTop}
          <br />
          <span className="bg-gradient-to-r from-rose-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        </h1>

        <div className="mt-8 flex justify-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-bold text-white backdrop-blur sm:text-base">
            {badge}
          </span>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 sm:gap-12 max-w-3xl mx-auto">
          <div className="flex items-start gap-4 text-left">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 shadow-lg">
              <Sparkles className="h-6 w-6 text-amber-300" />
            </span>
            <p className="text-base text-white/90 sm:text-lg">{pointOne}</p>
          </div>
          <div className="flex items-start gap-4 text-left">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg">
              <ChevronRight className="h-6 w-6 text-white" />
            </span>
            <p className="text-base text-white/90 sm:text-lg">{pointTwo}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-amber-400 sm:text-base">
              Earn Industry-Ready Certification From
            </span>
            <span className="rounded bg-white px-3 py-1 text-base font-extrabold tracking-wider text-slate-900">
              IBM
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="/contact#contactus"
          className="rounded-lg border border-white/15 bg-[#0f1535] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#161d4a] sm:text-base">
            View Roadmap
          </a>
         <a
          href="/contact#contactus"
           className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90 sm:text-base">
            Download Syllabus
          </a>
        </div>
      </div>
    </section>
  );
}
