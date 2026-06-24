import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

type Article = {
  outlet: string;
  outletColor: string;
  title: string;
  date: string;
  href: string;
};

const ARTICLES: Article[] = [
  {
    outlet: "FINANCIAL EXPRESS",
    outletColor: "#c8102e",
    title: "Learnbay achieves 300% surge; to expand workforce amidst impressive job market recognition",
    date: "12th JULY",
    href: "/",
  },
  {
    outlet: "DATAQUEST",
    outletColor: "#c8102e",
    title: "How data science can disrupt the fintech industry?",
    date: "13th January",
    href: "/",
  },
  {
    outlet: "The People Management",
    outletColor: "#c8102e",
    title: "Professional Upskilling Startup Learnbay Launches Three New Cutting-Edge Domain Courses",
    date: "2and August",
    href: "/",
  },
  {
    outlet: "YourStory",
    outletColor: "#ee3124",
    title: "How Learnbay is helping working professionals transition into data science",
    date: "15th March",
    href: "/",
  },
  {
    outlet: "Economic Times",
    outletColor: "#c8102e",
    title: "Edtech startup Learnbay raises funding to scale industry projects platform",
    date: "20th June",
    href: "/",
  },
  {
    outlet: "FINANCIAL EXPRESS",
    outletColor: "#c8102e",
    title: "Learnbay introduces domain specialisation programme for sustainable career transition",
    date: "1st August",
    href: "/",
  },
  {
    outlet: "YourStory",
    outletColor: "#ee3124",
    title: "How Learnbay is helping working professionals transition into data science",
    date: "15th March",
    href: "/",
  },
  {
    outlet: "Economic Times",
    outletColor: "#c8102e",
    title: "Edtech startup Learnbay raises funding to scale industry projects platform",
    date: "20th June",
    href: "/",
  },
  {
    outlet: "Inc42",
    outletColor: "#000",
    title: "Phinco Elite plans global expansion with new GenAI master programs",
    date: "5th May",
    href: "/",
  },
  {
    outlet: "YourStory",
    outletColor: "#ee3124",
    title: "How Learnbay is helping working professionals transition into data science",
    date: "15th March",
    href: "/",
  },
  {
    outlet: "Economic Times",
    outletColor: "#c8102e",
    title: "Edtech startup Learnbay raises funding to scale industry projects platform",
    date: "20th June",
    href: "/",
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

              <p className="mt-auto pt-5 text-sm text-gray-500 sm:pt-6">
                {a.date}
              </p>
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