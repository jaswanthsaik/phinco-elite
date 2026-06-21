import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";
import { useState } from "react";

const logos = [
  { name: "J.P.Morgan", img: portrait1 },
  { name: "KPMG", img: portrait2 },
  { name: "J.P.Morgan", img: portrait1 },
  { name: "AXA", img: portrait3 },
  { name: "general motors", img: portrait1 },
  { name: "KPMG", img: portrait2 },
  { name: "J.P.Morgan", img: portrait1 },
  { name: "AXA", img: portrait3 },
  { name: "DATA POEM", img: portrait2 },
];

export function IndustryLeading() {
  const scrollingLogos = [...logos, ...logos];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    course: "",
  });

  const update = (k: string, v: string) =>
    setForm((p) => ({ ...p, [k]: v }));

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0a2540] via-[#0f1a2a] to-[#3a1a0a] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_420px]">
        {/* Left Content */}
        <div className="min-w-0">
          <h2 className="inline-block max-w-full px-3 py-2 text-2xl font-bold leading-tight text-white sm:px-4 sm:text-1xl md:text-1xl">
            Get Ahead with Industry-Leading Courses
          </h2>

          <div className="mt-6 font-serif text-4xl leading-none text-[#1d6bff] sm:mt-8 sm:text-5xl">
            &ldquo;
          </div>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base">
            I had a great learning experience at Learnbay. The faculties here
            are top notch. Right from enrollment to getting a good job, they
            keep putting enormous efforts for each and every candidate. Thanks
            to all the trainers, backend team.
          </p>

          <div className="mt-5 flex items-center gap-3 sm:mt-6">
            <img
              src={portrait1}
              alt="Shravanthi"
              className="h-11 w-11 rounded-full object-cover sm:h-12 sm:w-12"
            />
            <div>
              <div className="text-sm font-semibold text-orange-400 sm:text-base">
                Shravanth A.
              </div>
              <div className="text-xs font-semibold text-[#1d6bff] sm:text-sm">
                Data Scientist @TCS
              </div>
            </div>
          </div>

          {/* Logo Marquee */}
          <div className="mt-8 w-full overflow-hidden sm:mt-10 lg:w-[90%]">
            <div className="logo-marquee flex w-max gap-3 sm:gap-4">
              {scrollingLogos.map((l, i) => (
                <div
                  key={i}
                  className="flex h-[120px] w-[95px] shrink-0 flex-col overflow-hidden rounded-xl bg-[#0a3a6b] ring-1 ring-white/10 sm:h-[150px] sm:w-[120px] lg:h-[168px] lg:w-[140px]"
                >
                  <div className="flex-1 overflow-hidden">
                    <img
                      src={l.img}
                      alt={l.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="bg-[#0a3a6b] px-1 py-1 text-center text-[9px] font-bold uppercase text-white sm:text-[10px]">
                    {l.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full max-w-md justify-self-center rounded-2xl bg-white p-5 shadow-2xl sm:p-8 lg:justify-self-end">
          <h3 className="text-xl font-bold text-[#0a1e3f] sm:text-2xl">
            Free Counselling with Experts
          </h3>

          <form
            className="mt-5 space-y-4 sm:mt-6 sm:space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Enter your Full Name *"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full border-0 border-b border-slate-200 bg-transparent py-3 text-sm outline-none focus:border-[#1d6bff]"
            />

            <input
              type="email"
              placeholder="Enter your Email *"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full border-0 border-b border-slate-200 bg-transparent py-3 text-sm outline-none focus:border-[#1d6bff]"
            />

            <div className="flex items-center gap-3 border-b border-slate-200 py-3">
              <span className="flex shrink-0 items-center gap-1 text-sm">
                <span className="text-lg">🇮🇳</span>
                <span className="text-slate-400">▾</span>
              </span>

              <input
                type="tel"
                placeholder="+91"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="min-w-0 flex-1 bg-transparent text-sm outline-none"
              />
            </div>

            <select
              value={form.experience}
              onChange={(e) => update("experience", e.target.value)}
              className="w-full border-0 border-b border-slate-200 bg-transparent py-3 text-sm text-slate-500 outline-none focus:border-[#1d6bff]"
            >
              <option value="">Work Experience *</option>
              <option>0-1 years</option>
              <option>1-3 years</option>
              <option>3-5 years</option>
              <option>5+ years</option>
            </select>

            <select
              value={form.course}
              onChange={(e) => update("course", e.target.value)}
              className="w-full border-0 border-b border-slate-200 bg-transparent py-3 text-sm text-slate-500 outline-none focus:border-[#1d6bff]"
            >
              <option value="">Select Course Preference *</option>
              <option>Data Science</option>
              <option>GenAI</option>
              <option>Cloud DevOps</option>
              <option>Business Analytics</option>
            </select>

            <p className="text-xs leading-relaxed text-slate-400">
              By submitting the form, you agree to our{" "}
              <span className="underline">Terms and Conditions</span> and our{" "}
              <span className="underline">Privacy Policy</span>
            </p>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#1d6bff] py-3 text-sm font-semibold text-white shadow-md hover:bg-[#155fd9] sm:text-base"
            >
              Apply For Counselling
            </button>
          </form>
        </div>
      </div>

      <style>
        {`
          @keyframes logoMarquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .logo-marquee {
            animation: logoMarquee 18s linear infinite;
          }

          .logo-marquee:hover {
            animation-play-state: paused;
          }

          @media (max-width: 640px) {
            .logo-marquee {
              animation-duration: 14s;
            }
          }
        `}
      </style>
    </section>
  );
}