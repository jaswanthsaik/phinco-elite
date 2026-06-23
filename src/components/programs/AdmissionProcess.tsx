import { GitBranch, MonitorPlay, Laptop2 } from "lucide-react";
import admissionImage from "@/assets/admission-professional.jpg";

const STEPS = [
  { icon: GitBranch, label: "Evaluation Call" },
  { icon: MonitorPlay, label: "Screening Call" },
  { icon: Laptop2, label: "Block your seat" },
];

export function AdmissionProcess() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Admission Process
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Our <strong className="font-bold text-slate-900">3-step admission process</strong>{" "}
              clearly guides you through checking your{" "}
              <strong className="font-bold text-slate-900">eligibility</strong>, selecting the right
              course via expert{" "}
              <strong className="font-bold text-slate-900">counselling</strong>, and smoothly
              completing your{" "}
              <strong className="font-bold text-slate-900">enrollment</strong>. It's designed for
              simplicity and clarity.
            </p>

            {/* Steps */}
            <div className="mt-10 flex items-start justify-between gap-2 sm:justify-start sm:gap-6">
              {STEPS.map((s, i) => (
                <div key={s.label} className="flex items-start">
                  <div className="flex flex-col items-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg sm:h-16 sm:w-16">
                      <s.icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                    </span>
                    <p className="mt-3 text-center text-sm font-bold text-slate-900 sm:text-base">
                      {s.label}
                    </p>
                  </div>
                  {i < STEPS.length - 1 && (
                    <span
                      aria-hidden
                      className="mt-7 hidden h-px w-12 border-t-2 border-dashed border-slate-400 sm:mt-8 sm:block sm:w-16 md:w-20"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button
                type="button"
                className="rounded-full bg-gradient-to-r from-rose-500 to-indigo-600 px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:opacity-90 sm:text-base"
              >
                Request a Demo Class
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-sky-100 shadow-xl"
              style={{ clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)" }}
            >
              <img
                src={admissionImage}
                alt="Admission counsellor"
                width={768}
                height={896}
                loading="lazy"
                className="h-[360px] w-[300px] object-cover sm:h-[440px] sm:w-[380px] lg:h-[480px] lg:w-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
