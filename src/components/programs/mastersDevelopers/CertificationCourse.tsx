import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

type TabKey = "ibm" | "project";

export function CertificationCourse() {
  const [tab, setTab] = useState<TabKey>("ibm");

  const content = {
    ibm: {
      title: "Course Completion Certificate from IBM",
      points: [
        "Complete your training with the internationally recognized certificate.",
        "Validate your Data Science & AI skills with IBM Course Completion Certificate.",
        "Get acknowledged in IT sector by adding IBM Certificate to your profile.",
      ],
      brand: "IBM",
    },
    project: {
      title: "Industry Project Completion Certificate",
      points: [
        "Earn a project certificate after completing real-world industry projects.",
        "Showcase your hands-on AI and Data Science expertise to recruiters.",
        "Boost your portfolio with verifiable, project-based credentials.",
      ],
      brand: "Project",
    },
  } as const;

  const active = content[tab];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 pt-20">
        <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-4xl">
          Industry Recognized Certification Course
        </h2>
      </div>

      <div className="mt-12 bg-[#2a2a2a] py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* Tabs */}
          <div className="flex flex-wrap gap-8 border-b border-white/10">
            {(["ibm", "project"] as TabKey[]).map((k) => {
              const isActive = tab === k;
              const label = k === "ibm" ? "IBM Certificate" : "Project Certificate";
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => setTab(k)}
                  className={`relative pb-3 text-base font-bold transition sm:text-lg ${
                    isActive ? "text-orange-500" : "text-white/80 hover:text-white"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-orange-500" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="relative inline-block pb-2 text-xl font-bold text-white sm:text-2xl">
                {active.title}
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-orange-500" />
              </h3>
              <ul className="mt-8 space-y-5">
                {active.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-white/90 sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock certificate */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-md bg-white p-6 shadow-2xl">
                <div className="flex items-start justify-between">
                  <span className="text-2xl font-extrabold tracking-tight text-blue-700">
                    {active.brand === "IBM" ? "IBM" : "★"}
                  </span>
                  <div className="grid h-12 w-12 grid-cols-3 gap-0.5">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <span key={i} className="bg-slate-800" />
                    ))}
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-xs italic text-slate-500">This is to certify that</p>
                  <p className="mt-2 text-lg font-bold text-slate-900">Your Name</p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    has completed all courses in the learning path
                  </p>
                  <p className="mt-3 text-base font-bold text-slate-800">
                    Data Science And AI Certification
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-[10px] text-slate-500">
                    <p>Powered by IBM Developer Skills Network</p>
                    <p>Issued by Learnbay Data Science And AI</p>
                  </div>
                  <p className="mt-4 text-[10px] text-slate-500">Issued on June 23, 2020</p>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div className="h-10 w-10 grid grid-cols-3 gap-0.5">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <span key={i} className="bg-slate-800" />
                    ))}
                  </div>
                  <div className="h-10 w-10 grid grid-cols-3 gap-0.5">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <span key={i} className="bg-slate-800" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
