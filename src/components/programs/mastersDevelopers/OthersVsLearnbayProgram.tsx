import { CheckCircle2, ShieldCheck, XCircle } from "lucide-react";

const FEATURES = [
  "Access to Live Classes",
  "Class Type",
  "Domain Specializations",
  "Project Certificates",
  "Learning Mode",
  "Project Mentorship",
];

const LEARNBAY = [
  "3-Year Flexi Pass",
  "Live, Mentor-Led, Interactive",
  "BFSI, Healthcare, Supply Chain, Manufacturing, HR, Project Management",
  "Issued by Learnbay and leading MNCs & unicorn startups",
  "Hybrid (Online + Classroom Project Sessions)",
  "Dedicated Project Mentor",
];

const OTHERS = [
  "Usually Limited (6-12 months)",
  "Mostly Recorded Sessions",
  "No domain specification, Courses are Limited or Generalized",
  "No project certificate",
  "Primarily Online with larger number of student",
  "General Doubt Sessions or Not at all",
];

export function OthersVsLearnbayProgram() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
          Others Vs Learnbay
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-[1fr_1.2fr_1.2fr] md:items-start md:gap-0">
          {/* Feature column */}
          <div className="hidden md:block md:pt-24">
            <h3 className="text-xl font-bold text-[#0a1a5d]">Feature</h3>
            <ul className="mt-8 space-y-9">
              {FEATURES.map((f) => (
                <li key={f} className="border-b border-gray-200 pb-3 text-sm font-medium text-gray-700">
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Learnbay column */}
          <div className="relative rounded-2xl bg-[#0a1a5d] p-6 text-white shadow-xl sm:p-8 md:rounded-r-none">
            <div className="absolute -top-4 left-6 grid h-9 w-9 place-items-center rounded-md bg-red-600 text-white shadow-md">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="mt-2 text-2xl font-bold">
              <span className="text-blue-300">Learn</span>bay
            </div>
            <h3 className="mt-2 text-lg font-semibold">MasterTrack Certification</h3>
            <ul className="mt-6 space-y-5">
              {LEARNBAY.map((item, i) => (
                <li key={i} className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-b-0">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <div className="min-w-0">
                    <p className="md:hidden text-xs font-semibold uppercase tracking-wide text-blue-300">
                      {FEATURES[i]}
                    </p>
                    <p className="text-sm font-medium">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Others column */}
          <div className="rounded-2xl bg-blue-50 p-6 sm:p-8 md:rounded-l-none">
            <h3 className="text-xl font-bold text-[#0a1a5d]">Other Program</h3>
            <ul className="mt-6 space-y-5 md:mt-12">
              {OTHERS.map((item, i) => (
                <li key={i} className="flex items-start gap-3 border-b border-gray-200 pb-4 last:border-b-0">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <div className="min-w-0">
                    <p className="md:hidden text-xs font-semibold uppercase tracking-wide text-[#0a1a5d]">
                      {FEATURES[i]}
                    </p>
                    <p className="text-sm font-medium text-gray-700">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
