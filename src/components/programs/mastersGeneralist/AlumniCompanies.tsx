import { ArrowRight } from "lucide-react";

const LOGOS_ROW1 = [
  { name: "Microsoft", style: "font-semibold text-slate-700" },
  { name: "amazon", style: "font-bold text-slate-800 italic" },
  { name: "Meta", style: "font-bold text-blue-600" },
  { name: "brillio", style: "font-extrabold text-slate-900 italic" },
  { name: "fractal", style: "font-bold text-slate-700" },
  { name: "genpact", style: "font-bold text-emerald-600" },
  { name: "Razorpay", style: "font-bold text-blue-700" },
  { name: "EY", style: "font-extrabold text-amber-500" },
];

const LOGOS_ROW2 = [
  { name: "BRIDGEi2i", style: "font-bold text-slate-700" },
  { name: "OLA", style: "font-extrabold text-slate-900" },
  { name: "Mu Sigma", style: "font-bold text-rose-700" },
  { name: "WELLS FARGO", style: "font-extrabold text-red-700" },
];

export function AlumniCompanies() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Alumni in{" "}
          <span className="bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
            350+
          </span>{" "}
          Companies, You're Next!
        </h2>

        <div className="mx-auto mt-2 h-2 w-48 sm:w-64">
          <svg viewBox="0 0 200 12" className="h-full w-full">
            <path d="M0 8 Q100 -4 200 8" stroke="#facc15" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="mt-14 grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-12 sm:grid-cols-4 lg:grid-cols-8">
          {LOGOS_ROW1.map((l) => (
            <span key={l.name} className={`text-xl ${l.style}`}>{l.name}</span>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-12 sm:grid-cols-4">
          {LOGOS_ROW2.map((l) => (
            <span key={l.name} className={`text-xl ${l.style}`}>{l.name}</span>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700 sm:text-base">
            Get personalized career report
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
