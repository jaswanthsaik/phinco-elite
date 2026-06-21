import { Atom, Award, BarChart3, BrainCog, Briefcase, CheckCircle2, Clock, Database, Users } from "lucide-react";
import type { ComponentType } from "react";
import { useState } from "react";

type Filter = "top" | "working" | "domain";

type Program = {
  id: string;
  title: string;
  badge: string;
  Icon: ComponentType<{ className?: string }>;
  iconGradient: string;
  cardBg: string;
  buttonBg: string;
  bullets: [string, string];
  partners: string[];
  skills: string[];
  highlight: string;
  timeline: string;
  projects: string;
};

const PROGRAMS: Program[] = [
  {
    id: "genai",
    title: "GenAI and AgenticAI Master Certification Program",
    badge: "Work on Real AI Startup Projects",
    Icon: Atom,
    iconGradient: "from-fuchsia-500 to-indigo-500",
    cardBg: "bg-gradient-to-br from-[#5b0006] via-[#260406] to-[#070000]",
    buttonBg: "bg-[#ff7568]",
    bullets: ["Master GenAI & AgenticAI", "Domain Specialised in two industries"],
    partners: ["IBM", "Microsoft"],
    skills: ["GenAI", "AgenticAI", "LLMOps"],
    highlight: "Domain Specialised Program with Industry Project Certification",
    timeline: "9 Months Live Classes",
    projects: "10+ Real Domain Projects"
  },
  {
    id: "ds",
    title: "Data Science Master Certification Program",
    badge: "Build Production-Grade ML Systems",
    Icon: Database,
    iconGradient: "from-sky-500 to-blue-600",
    cardBg: "bg-gradient-to-br from-[#162b73] via-[#0b3e86] to-[#08265c]",
    buttonBg: "bg-[#17aeea]",
    bullets: ["Master Python, ML & MLOps", "Domain Specialised in two industries"],
    partners: ["IBM", "Microsoft"],
    skills: ["Python", "ML", "MLOps"],
    highlight: "Top-Rated Program for Working Professionals",
    timeline: "11 Months Live Classes",
    projects: "15+ Real Domain Projects"
  },
  {
    id: "ba",
    title: "Business Analytics Master Certification Program",
    badge: "Drive Decisions with Data",
    Icon: BarChart3,
    iconGradient: "from-emerald-500 to-teal-600",
    cardBg: "bg-gradient-to-br from-[#005844] via-[#004332] to-[#002d24]",
    buttonBg: "bg-[#10e0a0]",
    bullets: ["Master SQL, Tableau & PowerBI", "Capstones across BFSI & Retail"],
    partners: ["IBM", "Microsoft"],
    skills: ["SQL", "Tableau", "PowerBI"],
    highlight: "Domain Specialised Program for Working Professionals",
    timeline: "7 Months Live Classes",
    projects: "8+ Real Domain Projects"
  },
    {
    id: "ba",
    title: "Business Analytics Master Certification Program",
    badge: "Drive Decisions with Data",
    Icon: BarChart3,
    iconGradient: "from-emerald-500 to-teal-600",
    cardBg: "bg-gradient-to-br from-[#551235] via-[#253f98] to-[#092a63]",
    buttonBg: "bg-[#2ea7ff]",
    bullets: ["Master SQL, Tableau & PowerBI", "Capstones across BFSI & Retail"],
    partners: ["IBM", "Microsoft"],
    skills: ["SQL", "Tableau", "PowerBI"],
    highlight: "Domain Specialised Program for Working Professionals",
    timeline: "7 Months Live Classes",
    projects: "8+ Real Domain Projects"
  },
];

const FILTERS: { id: Filter; label: string; Icon: ComponentType<{ className?: string }>; tone: string }[] = [
  { id: "top", label: "Top-Rated Program", Icon: Award, tone: "text-orange-600 bg-orange-50 border-orange-200" },
  { id: "working", label: "For Working Professionals", Icon: Users, tone: "text-sky-600 bg-sky-50 border-sky-200" },
  { id: "domain", label: "Domain Specialization", Icon: BrainCog, tone: "text-violet-600 bg-violet-50 border-violet-200" },
];

function ProgramCard({ p }: { p: Program }) {
  return (
    <article className={`${p.cardBg} overflow-hidden rounded-3xl text-white shadow-xl ring-1 ring-white/5`}>
      <div className="flex items-center gap-4 border-b border-white/5 p-6 sm:p-8">
        <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${p.iconGradient} shadow-lg`}>
          <p.Icon className="h-7 w-7 text-white" />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold sm:text-2xl">{p.title}</h3>
          <span className="mt-2 inline-flex items-center rounded-md bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
            {p.badge}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          <p className="font-semibold text-white">Why this program</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {p.bullets.map((b) => (
              <span key={b} className="inline-flex items-center gap-2 text-white/85">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                {b}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-amber-200">
            <span className="font-semibold">Industry-Ready Certification with</span>
            {p.partners.map((partner, i) => (
              <span key={partner} className="flex items-center gap-3">
                <span className="rounded bg-white/95 px-2 py-1 text-xs font-bold text-slate-900">{partner}</span>
                {i < p.partners.length - 1 && <span className="text-white/30">|</span>}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-rose-200">Key Skills You'll Master</span>
            {p.skills.map((s) => (
              <span key={s} className="rounded-md bg-white/5 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15">
                {s}
              </span>
            ))}
          </div>

          <div className="rounded-xl bg-amber-500/10 px-4 py-3 text-sm">
            <span className="font-semibold text-amber-300">{p.highlight.split(" ").slice(0, 2).join(" ")}</span>
            <span className="text-amber-100/90"> {p.highlight.split(" ").slice(2).join(" ")}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
            <div className="flex items-center gap-3 text-sm">
              <Clock className="h-5 w-5 text-white/70" />
              <span className="text-white/70">Timeline:</span>
              <span className="font-semibold text-white">{p.timeline}</span>
            </div>
          </div>
          <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
            <div className="flex items-center gap-3 text-sm">
              <Briefcase className="h-5 w-5 text-white/70" />
              <span className="text-white/70">Projects:</span>
              <span className="font-semibold text-white">{p.projects}</span>
            </div>
          </div>
          <button className="mt-2 w-full rounded-xl cursor-pointer border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Download Brochure
          </button>
          <button className={`${p.buttonBg} w-full cursor-pointer rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 shadow-lg hover:opacity-95`}>
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}

export function CertificationTrack() {
  const [showAll, setShowAll] = useState(false);

  const visiblePrograms = showAll ? PROGRAMS : PROGRAMS.slice(0, 3);

  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand sm:text-4xl lg:text-5xl">
          Project Based Certification Track
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-muted-foreground">
          Master in-demand skills through industry certified programs.
        </p>

        {/* Non-clickable active cards */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <div
              key={f.id}
              className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold shadow-sm ring-2 ring-current/20 ${f.tone}`}
            >
              <f.Icon className="h-4 w-4" />
              {f.label}
            </div>
          ))}
        </div>

        {/* Program cards */}
        <div className="mt-10 space-y-6">
          {visiblePrograms.map((p) => (
            <ProgramCard key={p.id} p={p} />
          ))}
        </div>

        {/* View More / View Less button */}
        {PROGRAMS.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-lg border border-blue-200 bg-white px-8 py-3 text-sm font-bold text-blue-600 shadow-sm transition hover:bg-blue-50"
            >
              {showAll ? "View Less" : "View More Programs"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}