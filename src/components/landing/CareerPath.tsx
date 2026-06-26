import { CheckCircle2 } from "lucide-react";
import freshersImg from "@/assets/career-freshers.png";
import growthImg from "@/assets/career-growth.jpg";

type Card = {
  tag: string;
  tagColor: string;
  tagBorder: string;
  title: string;
  bullets: string[];
  primaryLabel: string;
  secondaryLabel: string;
  image: string;
  imageAlt: string;
};

const cards: Card[] = [
  {
    tag: "Career Launch",
    tagColor: "text-[#1f8df0]",
    tagBorder: "border-[#1f8df0]",
    title: "For Freshers & Career Restarters",
    bullets: [
      "4-Month Skill Training",
      "Excel, SQL, Python, Power BI, Statistics with AI",
      "Portfolio-Ready Projects with Assured Placement Support",
    ],
    primaryLabel: "Join Now",
    secondaryLabel: "Curriculum",
    image: freshersImg,
    imageAlt: "Freshers career launch",
  },
  {
    tag: "Career Growth",
    tagColor: "text-[#c084fc]",
    tagBorder: "border-[#c084fc]",
    title: "For Non IT or IT Working Professionals",
    bullets: [
      "Excel, SQL, Python, Power BI, Statistics with AI",
      "Real-Time Case Studies",
      "Portfolio-Ready Projects with Placement with a hike of 30 to 180% on your Current CTC",
    ],
    primaryLabel: "Enroll",
    secondaryLabel: "Explore",
    image: growthImg,
    imageAlt: "Career growth for working professionals",
  },
];

export function CareerPath() {
  return (
    <section className="bg-[#eaf6ff] px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-[#0b1733] sm:text-4xl md:text-5xl">
            Choose Your Career Path in Tech
          </h2>
          <p className="mt-4 text-sm text-gray-700 sm:text-base">
            <span className="font-bold">PHINCO</span> provides expert-guided programs for{" "}
            <span className="font-bold">Freshers, Career Gaps, and Working Professionals</span> to
            launch and grow in <span className="font-bold">Data Analytics, AI, and Tech.</span>
          </p>
        </header>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {cards.map((c) => (
            <article
              key={c.title}
              className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-sm sm:grid-cols-[40%_60%]"
            >
              <div className="flex items-center justify-center bg-[#dff0fb] p-6">
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-44 w-auto object-contain sm:h-56"
                />
              </div>

              <div className="flex flex-col p-6 sm:p-8">
                <span
                  className={`inline-flex w-fit rounded-full border ${c.tagBorder} ${c.tagColor} bg-white px-4 py-1 text-xs font-semibold`}
                >
                  {c.tag}
                </span>
                <h3 className="mt-4 text-xl font-bold text-[#0b1733] sm:text-2xl">{c.title}</h3>

                <ul className="mt-4 space-y-3">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-gray-700 sm:text-[15px]">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 fill-[#1f8df0] text-white" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className={`rounded-full border ${c.tagBorder} ${c.tagColor} bg-white px-6 py-2 text-sm font-semibold transition hover:bg-[#f0f8ff]`}
                  >
                    {c.secondaryLabel}
                  </button>
                  <button
                    type="button"
                    className="rounded-full bg-[#1f8df0] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#1577d4]"
                  >
                    {c.primaryLabel}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
