import {
  CheckCircle2,
  Coins,
  Cpu,
  Factory,
  Headphones,
  HeartPulse,
  Landmark,
  Lightbulb,
  MapPin,
  Network,
  ShoppingBag,
  Video
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";

type Step = {
  Icon: ComponentType<{ className?: string }>;
  iconBg: string;
  title: string;
  body: ReactNode;
};

const DOMAINS = [
  { label: "Manufacturing", Icon: Factory, color: "text-orange-400" },
  { label: "Technology", Icon: Cpu, color: "text-orange-400" },
  { label: "Consulting", Icon: Network, color: "text-orange-400" },
  { label: "Healthcare", Icon: HeartPulse, color: "text-orange-400" },
  { label: "BFSI", Icon: Landmark, color: "text-orange-400" },
  { label: "Retail", Icon: ShoppingBag, color: "text-orange-400" },
];

const STEPS: Step[] = [
 {
  Icon: Lightbulb,
  iconBg: "bg-blue-600",
  title: "Training mode",
  body: (
    <div>
      <p className="max-w-[620px] text-base font-semibold leading-snug text-slate-300 sm:text-lg md:text-[22px]">
        You can choose from two flexible training modes to suit your needs and preferences:
      </p>

      <div className="mt-6 flex w-full flex-col gap-3 rounded-2xl bg-gradient-to-r from-[#3b1d10] to-[#0f0a08] px-4 py-4 ring-1 ring-white/10 sm:mt-7 sm:inline-flex sm:w-auto sm:min-w-[455px] sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:rounded-full sm:px-8">
        <span className="inline-flex items-center gap-3 text-sm font-extrabold leading-tight text-white sm:gap-4 sm:text-[16px]">
          <Video className="h-6 w-6 shrink-0 text-rose-500 sm:h-7 sm:w-7" />
          <span>
            100% Live
            <br />
            online classes
          </span>
        </span>

        <span className="inline-flex items-center gap-3 text-sm font-extrabold leading-tight text-white sm:gap-4 sm:text-[16px]">
          <MapPin className="h-6 w-6 shrink-0 text-orange-400 sm:h-7 sm:w-7" />
          <span>
            Hybrid *
            <br />
            projects
          </span>
        </span>
      </div>

      <p className="mt-6 max-w-[680px] text-xs font-semibold leading-relaxed text-white sm:mt-7 sm:text-sm sm:leading-loose">
        <span className="font-extrabold text-orange-400">*Important Note:</span>{" "}
        Hybrid mode allows learners to benefit from both flexible, remote learning and direct,
        face-to-face interaction.
      </p>
    </div>
  ),
},
  {
    Icon: Coins,
    iconBg: "bg-indigo-600",
    title: "Specialize in your Domain",
    body: (
      <div>
        <p className="max-w-[620px] text-[22px] font-semibold leading-snug text-slate-300">
          Choose from BFSI, Retail, Healthcare, and more for focused, relevant learning.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {DOMAINS.map((d) => (
            <span
              key={d.label}
              className="inline-flex items-center gap-2 rounded-full bg-[#0e1a3a] px-4 py-2 text-sm font-bold text-white ring-1 ring-white/10"
            >
              <d.Icon className={`h-4 w-4 ${d.color}`} />
              {d.label}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    Icon: Lightbulb,
    iconBg: "bg-emerald-500",
    title: "Real Projects, Real Experience",
    body: (
      <div>
        <p className="max-w-[620px] text-[22px] font-semibold leading-snug text-slate-300">
          Master data science & AI by working on 100+ real-world projects with expert guidance.
        </p>

        <div className="mt-7 inline-block rounded-xl bg-gradient-to-r from-[#1f1810] to-[#0f0a08] px-6 py-4 ring-1 ring-white/10">
          <p className="text-base font-bold text-white">
            Get project <span className="ml-4 text-orange-300">Renowened</span>
            <br />
            Certification from: <span className="text-orange-300">Industry</span>
          </p>
        </div>
      </div>
    ),
  },
  {
  Icon: Headphones,
  iconBg: "bg-orange-500",
  title: "Reach your career goals",
  body: (
    <div>
      <p className="max-w-[720px] text-[22px] font-semibold leading-snug text-slate-300">
        Advance your career with our effective Placement Support.
      </p>

      <div className="mt-7 flex flex-wrap gap-4">
        {["Placement Support", "Mock Interviews", "Resume BuildUp", "Interview calls"].map(
          (item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full bg-[#5a321f] px-4 py-2 text-sm font-bold text-white ring-1 ring-white/10"
            >
              <CheckCircle2 className="h-4 w-4 fill-emerald-500 text-emerald-500" />
              {item}
            </span>
          )
        )}
      </div>
    </div>
  ),
},
];

export function WhyChooseLearnbay() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setActiveStep(index);
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: "-25% 0px -25% 0px",
      }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#091a33] via-[#08111f] to-[#0a0a0f] py-16 sm:py-24">
      <div className="mx-auto max-w-[920px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-white">Why choose </span>
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.85)" }}
          >
            Learnbay?
          </span>
        </h2>

        <div className="mt-16 space-y-24">
          {STEPS.map((s, i) => {
            const isActive = activeStep === i;

            return (
              <div
                key={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                data-index={i}
                className={`relative grid mb-[20px] min-h-[300px] grid-cols-[90px_1fr] gap-8 transition-all duration-700 ease-out
                  ${
                    isActive
                      ? "translate-y-0 scale-100 opacity-100 blur-0"
                      : "translate-y-6 scale-[0.98] opacity-20 blur-[1px]"
                  }
                `}
              >
                <div className="relative flex flex-col items-center">
                  <div
                    className={`grid h-[74px] w-[74px] shrink-0 place-items-center rounded-lg shadow-lg transition-all duration-700 ${s.iconBg}
                      ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-40"}
                    `}
                  >
                    <s.Icon className="h-10 w-10 text-white" />
                  </div>

                  {i < STEPS.length - 1 && (
                    <div className="mt-3 flex-1">
                      <div
                        className={`h-[285px] w-px bg-gradient-to-b transition-all duration-700
                          ${
                            isActive
                              ? "from-white/70 to-white/20"
                              : "from-white/20 to-white/5"
                          }
                        `}
                      />
                      <div className="-mt-1 ml-[-4px] h-3 w-3 rotate-45 border-b border-r border-white/70" />
                    </div>
                  )}
                </div>

                <div className="pt-1">
                  <h3 className="text-[32px] font-extrabold leading-tight text-white">
                    {s.title}
                  </h3>

                  <div className="mt-5 text-base">{s.body}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}