import counsellor from "@/assets/counsellor.jpg";
import { AlarmClockCheck } from "lucide-react";

export function LearningToPlacement() {
  return (
    <section
      className="relative py-20 sm:py-24"
      style={{ background: "linear-gradient(to bottom, #04081c, #070d2c)" }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-3">
        {/* Title block */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            From
            <br />
            <span className="text-white">Skills to</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Placement
            </span>
          </h2>
          <p className="mt-4 text-base text-white/70">From Learning to Success, We're With You</p>
          <svg viewBox="0 0 200 12" className="mt-2 h-3 w-48">
            <path d="M0 8 Q100 -4 200 8" stroke="#facc15" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* 250+ Hours */}
        <div
          className="flex flex-col items-center justify-center rounded-2xl p-10 text-center text-white shadow-xl ring-1 ring-white/5"
          style={{ background: "linear-gradient(135deg, #3b0a1a, #1a0b16 70%)" }}
        >
          <AlarmClockCheck className="h-14 w-14 text-rose-400" strokeWidth={1.5} />
          <p className="mt-4 text-2xl font-extrabold sm:text-3xl">250+ Hours</p>
          <p className="mt-2 text-sm text-white/80 sm:text-base">Expert-Led Training</p>
        </div>

        {/* 30+ Guided */}
        <div
          className="flex flex-col items-center justify-center rounded-2xl p-10 text-center text-white shadow-xl ring-1 ring-white/5"
          style={{ background: "linear-gradient(135deg, #0d3a2b, #061a18 70%)" }}
        >
          <p className="text-3xl font-extrabold text-yellow-300 sm:text-4xl">30+ Real-World</p>
          <p className="mt-2 text-base font-medium text-white sm:text-lg">
            Projects 
            <br />
            with Expert Guidance
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {["GitHub", "OpenAI", "Python"].map((t) => (
              <span key={t} className="rounded-md bg-slate-800/80 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/10">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* IBM card */}
        {/* IBM card */}
<div
  className="flex flex-col items-center justify-center rounded-2xl p-10 text-center text-white shadow-xl ring-1 ring-white/5 lg:col-start-1 lg:row-start-2 lg:row-span-2"
  style={{ background: "linear-gradient(135deg, #5b1ab8, #3a0f8a 70%)" }}
>
  <span className="rounded bg-white/5 px-4 py-1.5 text-2xl font-extrabold tracking-widest text-white">
    NASSCOM
  </span>

  <p className="mt-5 text-xl font-extrabold text-emerald-300 sm:text-2xl">
    Become an NASSCOM
    <br />
    Certified AI
    <br />
    Professional
  </p>

  <p className="mt-4 text-sm text-white/80">
    Learn Practical Skills and 
    <br />
    Earn an Industry-Recognized Certifications
  </p>
</div>

{/* Wide projects card */}
<div
  className="rounded-2xl p-10 text-white shadow-xl ring-1 ring-white/5 lg:col-start-2 lg:row-start-2 lg:col-span-2"
  style={{ background: "linear-gradient(135deg, #1a1505, #4a3a08 70%)" }}
>
  <p className="text-xl font-extrabold leading-snug sm:text-2xl">
    Solve real AI/GenAI challenges from startups and add industry-certified projects to your portfolio.
  </p>
</div>

{/* Personalised support card with image */}
<div
  className="flex items-center gap-6 overflow-hidden rounded-2xl p-8 text-white shadow-xl ring-1 ring-white/5 lg:col-start-2 lg:row-start-3 lg:col-span-2"
  style={{ background: "linear-gradient(135deg, #1a1505, #4a3a08 70%)" }}
>
  <div className="flex-1">
    <p className="text-xl font-extrabold sm:text-2xl">
      1-on-1 <span className="text-amber-300">Personalized Mentor Support</span>
    </p>

    <p className="mt-3 text-sm text-white/85 sm:text-base">
      Clear Doubts, Get Expert Guidance,
      <br />
      and Stay Supported Throughout Your Learning Journey.
    </p>
  </div>

  <img
    src={counsellor}
    alt="Mentor"
    className="h-28 w-44 shrink-0 rounded-lg object-cover ring-1 ring-white/10 sm:h-32 sm:w-52"
    loading="lazy"
  />
</div>
      </div>
    </section>
  );
}
