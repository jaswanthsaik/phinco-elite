import { CheckCircle2, XCircle } from "lucide-react";

const hiringLogos = ["J.P.Morgan", "KPMG", "Microsoft", "SAMSUNG", "BOSCH", "Deloitte.", "pwc"];

const rows = [
  { label: "Training Mode", learnbay: "100% Online & Hybrid (Online + Classroom)", others: "Only recorded class & few live online" },
  { label: "Support", learnbay: "24/7 Student Support", others: "Limited Support Hours" },
  { label: "Placement", learnbay: "100% Placement Assistance", others: "Limited Placement Support" },
  { label: "Faculty", learnbay: "Experienced Industry Professionals", others: "Academics and Trainers" },
  { label: "Real-Time Projects", learnbay: "Practice with Live Projects & Team Management", others: "Simulated Projects" },
];

export function OthersVsLearnbay() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Logos bar */}
        <div className="rounded-2xl border-2 border-sky-200 bg-white px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {hiringLogos.map((l) => (
              <span key={l} className="text-lg font-bold text-[#0a1e3f] opacity-80">
                {l}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-sm text-slate-500">Get hired at 350+ companies</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-20 text-center text-4xl font-bold text-[#0a1e3f] md:text-5xl">
          Others Vs <span className="italic">Learnbay</span>
        </h2>

        {/* Comparison */}
        <div className="mt-10 grid items-stretch gap-0 md:grid-cols-3">
          {/* Labels */}
          <div className="rounded-l-2xl bg-sky-50 p-8 md:py-10">
            <div className="space-y-12 pt-20">
              {rows.map((r) => (
                <div key={r.label} className="flex items-center justify-between">
                  <span className="text-slate-700">{r.label}</span>
                  <span className="text-slate-400">→</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learnbay column - elevated */}
          <div className="-mt-6 rounded-2xl bg-[#1a1a1a] p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-center gap-2 text-white">
              <span className="text-[#1d6bff]">☑</span>
              <span className="text-2xl font-bold">
                Learn<span className="text-[#1d6bff]">bay</span>
              </span>
            </div>
            <div className="space-y-6">
              {rows.map((r) => (
                <div key={r.label} className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm font-medium text-white">{r.learnbay}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Others */}
          <div className="rounded-r-2xl bg-slate-100 p-6 md:py-10">
            <div className="mb-6 text-2xl font-bold text-[#0a1e3f]">Others</div>
            <div className="space-y-6">
              {rows.map((r) => (
                <div key={r.label} className="flex items-start gap-3 border-b border-slate-200 pb-4 last:border-0">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
                  <span className="text-sm text-slate-700">{r.others}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
