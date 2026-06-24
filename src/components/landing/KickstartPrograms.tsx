import {
  BarChart3,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Code2,
  Download,
  FileBadge,
  GraduationCap,
  Sparkles,
  Star
} from "lucide-react";
import type { ComponentType } from "react";
import { useState } from "react";

type Category = {
  id: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
  badge?: string;
};

const CATEGORIES: Category[] = [
  { id: "popular", label: "Popular Program", Icon: Star },
  { id: "genai", label: "GEN AI & Agentic AI", Icon: Sparkles, badge: "NEW" },
  { id: "master", label: "Master Certification", Icon: GraduationCap },
  { id: "sde", label: "SDE", Icon: Code2 },
  { id: "datasci", label: "Data Sci & GenAI", Icon: BarChart3 },
  { id: "masters", label: "Master's Degree", Icon: Star },
];

type Program = {
  title: string;
  duration: string;
  cert: string;
  audience: string;
  partners: string[];
  image: string;
};

const PROGRAMS_BY_CATEGORY: Record<string, Program[]> = {
  popular: [
    {
      title: "Advanced Data Science & GenAI Master Program",
      duration: "13 Months | 4 Capstone Projects",
      cert: "Project Certification from IBM",
      audience: "Designed For Tech Professionals",
      partners: ["IBM", "Microsoft"],
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "GenAI & Agentic AI Master Certification Program",
      duration: "9 Months | 4 Capstone Projects",
      cert: "Project Certification from IBM",
      audience: "For Working Professionals",
      partners: ["IBM", "Microsoft"],
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "SDE Master Program With GenAI & Agentic AI",
      duration: "11 Months | 4 Capstone Projects",
      cert: "Project Certification from IBM",
      audience: "Designed For Tech Professionals",
      partners: ["IBM", "Microsoft"],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop",
    },
  ],

  genai: [
    {
      title: "Advanced Data Science & GenAI Master Program",
      duration: "13 Months | 4 Capstone Projects",
      cert: "Project Certification from IBM",
      audience: "Designed For Tech Professionals",
      partners: ["IBM", "Microsoft"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "GenAI & Agentic AI Master Certification Program",
      duration: "9 Months | 4 Capstone Projects",
      cert: "Project Certification from IBM",
      audience: "For Working Professionals",
      partners: ["IBM", "Microsoft"],
      image:
        "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=900&auto=format&fit=crop",
    },
    {
      title: "Applied AI Practitioner Program",
      duration: "4 Months | 2 Capstone Projects",
      cert: "Certification from IIT Patna",
      audience: "For Non-Programmers",
      partners: ["IBM"],
      image:
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=900&auto=format&fit=crop",
    },
  ],

  master: [
    {
      title: "Master Certification in Data Science",
      duration: "10 Months | 4 Capstone Projects",
      cert: "Project Certification from IBM",
      audience: "For Working Professionals",
      partners: ["IBM"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
    },
  ],

  sde: [
    {
      title: "SDE Master Program With GenAI & Agentic AI",
      duration: "11 Months | 4 Capstone Projects",
      cert: "Project Certification from IBM",
      audience: "Designed For Tech Professionals",
      partners: ["IBM", "Microsoft"],
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=900&auto=format&fit=crop",
    },
  ],

  datasci: [
    {
      title: "Advanced Data Science & GenAI Master Program",
      duration: "13 Months | 4 Capstone Projects",
      cert: "Project Certification from IBM",
      audience: "Designed For Tech Professionals",
      partners: ["IBM", "Microsoft"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
    },
  ],

  masters: [
    {
      title: "Master's Degree in AI & Data Science",
      duration: "18 Months",
      cert: "Degree Certification",
      audience: "For Graduates and Professionals",
      partners: ["IBM"],
      image:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=900&auto=format&fit=crop",
    },
  ],
};

function ProgramCard({ p }: { p: Program }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100">
      <div className="relative h-[112px] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-900/35" />

        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-xs font-bold shadow">
          {p.partners.map((partner, index) => (
            <span key={partner} className="inline-flex items-center gap-2">
              <span
                className={
                  partner === "IBM" ? "text-blue-700" : "text-slate-800"
                }
              >
                {partner}
              </span>

              {index !== p.partners.length - 1 && (
                <span className="text-slate-300">|</span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <h3 className="min-h-[56px] text-xl font-extrabold leading-tight text-black">
          {p.title}
        </h3>

        <ul className="space-y-2 text-sm text-slate-600">
          <li className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-sky-500" />
            <span>{p.duration}</span>
          </li>

          <li className="flex items-center gap-2">
            <FileBadge className="h-4 w-4 text-sky-500" />
            <span>{p.cert}</span>
          </li>

          <li className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-sky-500" />
            <span>{p.audience}</span>
          </li>
        </ul>

        <div className="flex items-center gap-4 pt-2">
          <button className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800">
            Brochure <Download className="h-3.5 w-3.5" />
          </button>

          <button className="inline-flex cursor-pointer items-center justify-center rounded-full border border-black px-5 py-2.5 text-xs font-bold text-black hover:bg-slate-50">
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}

export function KickstartPrograms() {
  const [active, setActive] = useState("popular");

  const programs = PROGRAMS_BY_CATEGORY[active] ?? [];

  return (
    <section id='programs' className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
          Kickstart your career with our programs
        </h2>

        <p className="mt-3 text-center text-base text-slate-600">
          Our programs have helped thousands launch careers in tech
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-700">
          {[
            "200-400 hours of learning",
            "Live, interactive sessions",
            "Hybrid training mode",
          ].map((f) => (
            <span key={f} className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              {f}
            </span>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
          {/* Sticky Sidebar */}
          <aside className="space-y-3 self-start lg:sticky lg:top-24">
            {CATEGORIES.map((c) => {
              const isActive = active === c.id;

              return (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#06243d] text-white shadow"
                      : "bg-white text-black shadow-sm hover:bg-slate-50"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <c.Icon
                      className={`h-5 w-5 ${
                        isActive ? "text-cyan-400" : "text-sky-500"
                      }`}
                    />

                    <span className="leading-tight">{c.label}</span>

                    {c.badge && (
                      <span className="ml-1 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-bold text-white">
                        {c.badge}
                      </span>
                    )}
                  </span>

                  <ChevronRight className="h-5 w-5" />
                </button>
              );
            })}
          </aside>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {programs.map((p) => (
              <ProgramCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}