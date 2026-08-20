import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

// Update these paths based on your project structure
import nasscomCertificate from "@/assets/certificate.jpeg";
import projectCertificate from "@/assets/Certificate.png";

type TabKey = "NASSCOM" | "project";

export function CertificationCourse() {
  const [tab, setTab] = useState<TabKey>("NASSCOM");

  const content = {
    NASSCOM: {
      title: "ISO Certificate",
      points: [
        "Earn an Industry-Recognized Certification upon successful program completion.",
        "Validate Your Data Analytics, AI & Data Science Skills with a recognized credential.",
        "Enhance Your Professional Profile and boost your credibility with top employers.",
      ],
      image: nasscomCertificate,
      alt: "NASSCOM Certificate",
    },

    project: {
      title: "Industry Project Excellence Certificate",
      points: [
        "Build Real-World Industry Projects with hands-on guidance.",
        "Earn an Industry Project Completion Certificate upon successful completion.",
        "Create a Portfolio That Impresses Recruiters with practical, job-ready projects.",
      ],
      image: projectCertificate,
      alt: "Project Certificate",
    },
  } as const;

  const active = content[tab];

  return (
    <section className="bg-white">
      {/* Heading */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl">
          Industry Recognized Certification Program
        </h2>
      </div>

      {/* Certificate Section */}
      <div className="mt-8 bg-[#2a2a2a] py-10 sm:mt-10 sm:py-12 lg:mt-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Tabs */}
          <div className="flex gap-6 overflow-x-auto border-b border-white/10 sm:gap-8">
            {(["NASSCOM", "project"] as TabKey[]).map((k) => {
              const isActive = tab === k;

              const label =
                k === "NASSCOM"
                  ? "ISO Certificate"
                  : "Project Certificate";

              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => setTab(k)}
                  className={`relative shrink-0 pb-4 text-base font-bold transition-colors sm:text-lg ${
                    isActive
                      ? "text-orange-500"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {label}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[3px] w-full bg-orange-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="mt-8 grid grid-cols-1 items-center gap-10 sm:mt-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">

            {/* Left Content */}
            <div className="w-full">
              <h3 className="relative inline-block pb-3 text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                {active.title}

                <span className="absolute bottom-0 left-0 h-[3px] w-full bg-orange-500" />
              </h3>

              <ul className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">
                {active.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-6 text-white/90 sm:text-base sm:leading-7 lg:text-lg"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-400 sm:h-6 sm:w-6" />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certificate Image */}
            <div className="flex w-full justify-center lg:justify-end">
              <div
                className="
                  relative
                  w-full
                  max-w-[680px]
                  overflow-hidden
                  rounded-xl
                  bg-white
                  shadow-2xl
                "
              >
                <div className="aspect-[1.22/1] w-full">
                  <img
                    key={active.image}
                    src={active.image}
                    alt={active.alt}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}