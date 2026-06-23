import { CheckCircle2 } from "lucide-react";

const BENEFITS = [
  "Live online interactive sessions",
  "1:1 online Doubt Session with experts",
  "Online Capstone projects",
  "Virtual Mock interviews",
];

export function FeeBatchDetails() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-4xl">
          Fee &amp; Batch Details
        </h2>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <h3 className="text-xl font-bold text-blue-600 sm:text-2xl">Live online classes</h3>

          <div className="mt-6 grid gap-8 md:grid-cols-2 md:divide-x md:divide-slate-200">
            <div className="md:pr-8">
              <p className="text-sm font-bold text-slate-900">Benefits :</p>
              <ul className="mt-4 space-y-4">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:pl-8">
              <p className="text-sm font-bold text-slate-900">Program Fee:</p>
              <p className="mt-2 text-2xl font-extrabold text-slate-700 sm:text-3xl">
                ₹ 1,20,000{" "}
                <span className="text-xs font-medium text-slate-500 sm:text-sm">+ 18% GST</span>
              </p>

              <p className="mt-8 text-xl font-extrabold text-blue-600 sm:text-2xl">
                No Cost EMI Available
              </p>

              <button
                type="button"
                className="mt-5 w-full rounded-lg bg-gradient-to-r from-slate-900 via-slate-800 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
              >
                Check EMI Options
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
