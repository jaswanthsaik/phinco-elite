import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

type Article = {
  outlet: string;
  outletColor: string;
  title: string;
  // date: string;
  href: string;
  target: string;
};

const ARTICLES: Article[] = [
  {
    outlet: "Hindustan Metro",
    outletColor: "#c8102e",
    title: "PHINCO ELITE Builds a Career-Ready Path from Learning to Employment",
    // date: "29th September",
    href: "https://hindustanmetro.com/phinco-elite-learn-to-hire-ojt-program-bridging-education-skills-and-employment",
    target: "_blank",
  },
  {
    outlet: "Times Release",
    outletColor: "#c8102e",
    title: "PHINCO ELITE Learn-to-Hire OJT Program: Bridging Education, Skills and Employment",
    // date: "29th September",
    href: "https://timesrelease.com/phinco-elite-learn-to-hire-ojt-program-bridging-education-skills-and-employment/?utm_source=chatgpt.com",
    target: "_blank",
  },
  {
    outlet: "Latest Tales",
    outletColor: "#c8102e",
    title: "PHINCO ELITE: Empowering Freshers to Build a Career in the IT Industry",
    // date: "29th September",
    href: "https://latesttales.in/phinco-elite-empowering-freshers-to-build-a-career-in-the-it-industry/?utm_source=chatgpt.com",
    target: "_blank",
  },
  {
    outlet: "Prime Bulletins",
    outletColor: "#ee3124",
    title: "PHINCO ELITE: Helping Non-IT Professionals Make a Structured Transition into IT",
    // date: "29th September",
    href: "https://primebulletins.com/phinco-elite-helping-non-it-professionals-make-a-structured-transition-into-it/?utm_source=chatgpt.com",
    target: "_blank",
  },
  {
    outlet: "Hindustan Hunt",
    outletColor: "#c8102e",
    title: "Restarting Your Career After a Career Gap: How PHINCO ELITE Helps Professionals Begin Again",
    // date: "29th September",
    href: "https://hindustanhunt.com/restarting-your-career-after-a-career-gap-how-phinco-elite-helps-professionals-begin-again/?utm_source=chatgpt.com",
    target: "_blank",
  },
  {
    outlet: "Daily Viewer",
    outletColor: "#c8102e",
    title: "From B.Sc, B.Com, M.Sc, M.Com, BBA or BA to an IT Career with PHINCO ELITE",
    // date: "1st August",
    href: "https://dailyviewer.in/from-b-sc-b-com-m-sc-m-com-bba-or-ba-to-an-it-career-with-phinco-elite/?utm_source=chatgpt.com",
    target: "_blank",
  },
  {
    outlet: "The Civic Journal",
    outletColor: "#ee3124",
    title: "How to Restart Your Career After a Gap With Previous Work Experience with PHINCO ELITE",
    // date: "15th March",
    href: "https://thecivicjournal.com/how-to-restart-your-career-after-a-gap-with-previous-work-experience-with-phinco-elite/?utm_source=chatgpt.com",
    target: "_blank",
  },
  {
    outlet: "Bollywood Insider",
    outletColor: "#c8102e",
    title: "From B.Tech or M.Tech to IT Specialization with PHINCO ELITE",
    // date: "20th June",
    href: "https://bollywoodinsider.in/from-b-tech-or-m-tech-to-it-specialization-with-phinco-elite/?utm_source=chatgpt.com",
    target: "_blank",
  },
  {
    outlet: "The Rising Founder",
    outletColor: "#ee3124",
    title: "Phinco Elite plans global expansion with new GenAI master programs",
    // date: "5th May",
    href: "https://therisingfounder.com/from-sales-bpo-kpo-or-customer-support-to-it-with-phinco-elite/",
    target: "_blank",
  },
  {
    outlet: "Okay Weekly",
    outletColor: "#ee3124",
    title: "From Marketing, HR, Operations, Finance or Admin to IT with PHINCO ELITE",
    // date: "15th March",
    href: "https://okayweekly.com/from-marketing-hr-operations-finance-or-admin-to-it-with-phinco-elite/?utm_source=chatgpt.com",
    target: "_blank",
  },
  {
    outlet: "UK Bulletins",
    outletColor: "#c8102e",
    title: "How to Restart Your Career After a Complete Gap Following Graduation with PHINCO ELITE",
    // date: "20th June",
    href: "https://ukbulletins.com/how-to-restart-your-career-after-a-complete-gap-following-graduation-with-phinco-elite/?utm_source=chatgpt.com",
    target: "_blank",
  },
];

export function MediaSpotlight() {
  const [page, setPage] = useState(0);
  const perPage = 4;
  const totalPages = Math.max(1, Math.ceil(ARTICLES.length / perPage));
  const start = page * perPage;
  const visible = ARTICLES.slice(start, start + perPage);

  return (
    <section className="bg-white px-4 py-10 sm:py-14">
      <div className="mx-auto w-full max-w-7xl lg:w-[calc(100%-100px)]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div>
            <p className="text-sm font-semibold text-[#1f8df0] sm:text-base">
              Featured in
            </p>
            <h2 className="mt-1 text-2xl font-extrabold text-[#0b0b0b] sm:text-3xl md:text-4xl">
              Media Spotlight
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-100 transition hover:shadow-lg sm:h-12 sm:w-12"
            >
              <ArrowLeft className="h-4 w-4 text-gray-700 sm:h-5 sm:w-5" />
            </button>

            <button
              onClick={() => setPage((p) => (p + 1) % totalPages)}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-100 transition hover:shadow-lg sm:h-12 sm:w-12"
            >
              <ArrowRight className="h-4 w-4 text-gray-700 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:mt-10 lg:grid-cols-4">
          {visible.map((a, i) => (
            <a
              key={`${a.outlet}-${i}`}
              href={a.href}
              target={a.target}
              className="group flex min-h-[220px] flex-col rounded-xl bg-white p-5 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.08)] ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-xl sm:p-6"
            >
              <div className="flex h-10 items-center sm:h-12">
                <span
                  className="text-lg font-black tracking-tight sm:text-xl"
                  style={{ color: a.outletColor }}
                >
                  {a.outlet}
                </span>
              </div>

              <h3 className="mt-5 text-base font-bold leading-snug text-[#0b0b0b] group-hover:text-[#1f8df0] sm:mt-6 sm:text-lg">
                {a.title}
              </h3>

              {/* <p className="mt-auto pt-5 text-sm text-gray-500 sm:pt-6">
                {a.date}
              </p> */}
            </a>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === page
                  ? "w-6 bg-[#1f8df0]"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}