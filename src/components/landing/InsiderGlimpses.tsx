import learner1 from "@/assets/learner-1.jpg";
import learner2 from "@/assets/learner-2.jpg";
import learner3 from "@/assets/learner-3.jpg";
import learner4 from "@/assets/learner-4.jpg";
import learner5 from "@/assets/learner-5.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type Learner = {
  name: string;
  headline: string;
  age: string;
  image: string;
  body: string;
};

const LEARNERS: Learner[] = [
  {
    name: "Prashanth Reddy",
    headline: "Senior Data Analyst",
    age: "5d",
    image: learner1,
    body: "I recently completed the GenAI Master Program at Phinco Elite, and I must say it was a game-changer for my career. The curriculum was comprehensive, covering everything from foundational concepts to advanced applications of Generative AI. The hands-on projects allowed me to apply what I learned in real-world scenarios, and the mentorship from industry experts was invaluable. Thanks to this program, I was able to secure a position as a Senior Data Analyst at JPMorganChase, where I now get to work on cutting-edge AI projects. I highly recommend Phinco Elite to anyone looking to advance their career in AI and data science!",
  },
  {
    name: "Arun M",
    headline: "Business Analyst | Data Enthusiast",
    age: "1d",
    image: learner2,
    body: "Completed my Business Analytics Program with PHINCO ELITE.The practical training, real-world projects, and industry-focused curriculum helped me strengthen my analytics skills and build confidence.Grateful to the mentors and PHINCO ELITE team for supporting my learning journey and career growth.",
  },
  {
    name: "Ahmed S",
    headline: "Quality Analyst",
    age: "1d",
    image: learner3,
    body: "Excited to share that I have successfully completed my Data Analyst Certification.This learning journey helped me strengthen my skills in Excel, SQL, Python, Power BI, and data visualization while working on real-world analytics scenarios.Grateful to Manjunath Sir and the PHINCO ELITE team for their valuable guidance and support throughout this journey.Looking forward to applying my analytics skills to uncover insights and drive data-driven decisions.",
  },
  {
    name: "Venthan R",
    headline: "Sales to Analyst",
    age: "3d",
    image: learner4,
    body: "Happy to share my learning experience with PHINCO ELITE. The Data Analytics program helped me build strong skills in Excel, SQL, Python, Power BI, and data analysis through practical training and real-world projects. The hands-on approach, mentor guidance, and career support helped me gain confidence and improve my analytical skills. Grateful to the PHINCO ELITE team for their continuous support throughout my learning journey.",
  },
  {
    name: "Geenthika R",
    headline: "House Wife to Analyst",
    age: "5d",
    image: learner5,
    body: "Completed my Data Analytics Program at PHINCO ELITE and successfully started my journey as a Data Analyst. The structured learning approach, practical projects, and personalised mentorship helped me build confidence and develop strong analytical skills. The guidance from mentors and the support throughout the program played a key role in my career transformation. Grateful to the PHINCO ELITE team for helping me achieve this milestone.",
  },
  {
    name: "Rabbani S",
    headline: "Customer Support to Analyst",
    age: "3d",
    image: learner4,
    body: "Happy to share my journey of transitioning from Customer Support to Data Analyst with the support of PHINCO ELITE. The Data Analytics program helped me build strong skills in Excel, SQL, Python, Power BI, and data analysis through practical training and real-world projects. The structured learning, mentor guidance, and hands-on experience helped me gain confidence and prepare for opportunities in the analytics field. Grateful to the PHINCO ELITE team for supporting my career transformation journey.",
  },
  {
    name: "Shivani K",
    headline: "Finance Analyst",
    age: "5d",
    image: learner5,
    body: "Completed my Data Analytics Program at PHINCO ELITE and successfully got placed in a top company. The structured learning approach, practical projects, and personalised mentorship helped me develop strong analytical skills and build confidence. The industry-focused curriculum and continuous guidance prepared me to take on real-world challenges. Grateful to the PHINCO ELITE team for their support throughout my career journey.",
  },
];

export function InsiderGlimpses() {
  const [active, setActive] = useState(0);
  const learner = LEARNERS[active];

  const total = LEARNERS.length;

  const getLoopIndex = (index: number) => {
    return (index + total) % total;
  };

  const prev = () => {
    setActive((current) => getLoopIndex(current - 1));
  };

  const next = () => {
    setActive((current) => getLoopIndex(current + 1));
  };

  const getVisibleLearners = () => {
    const positions = [-2, -1, 0, 1, 2];

    return positions.map((position) => {
      const index = getLoopIndex(active + position);

      return {
        learner: LEARNERS[index],
        index,
        position,
      };
    });
  };

  return (
    <section className="w-full overflow-hidden bg-white px-3 py-6 sm:px-4 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-7xl rounded-2xl bg-[#dceeff] px-3 py-6 sm:rounded-3xl sm:px-6 sm:py-10 md:px-10 lg:px-14 lg:py-14">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="text-center lg:text-left">
            <h2 className="mx-auto max-w-2xl text-[24px] font-extrabold leading-tight text-[#0b0b0b] sm:text-3xl md:text-[40px] lg:mx-0">
              <span className="text-[#b8753a]">Insider glimpses:</span>{" "}
              Click to see real conversations with our learners
            </h2>

            <div className="mt-6 flex w-full items-center justify-center gap-2 sm:mt-8 sm:gap-3 lg:justify-start">
              <button
                aria-label="Previous learner"
                onClick={prev}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1d6c8] text-gray-700 transition hover:bg-[#e8c2b0] focus:outline-none focus:ring-2 focus:ring-[#b8753a] sm:h-10 sm:w-10"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <div className="flex min-w-0 max-w-[260px] flex-1 items-center justify-center gap-2 overflow-hidden sm:max-w-[430px] sm:gap-4 md:max-w-[500px] lg:flex-none">
                {getVisibleLearners().map(({ learner: l, index, position }) => {
                  const isActive = position === 0;
                  const isSide = Math.abs(position) === 1;
                  const hideOnMobile = Math.abs(position) === 2;

                  return (
                    <button
                      key={`${l.name}-${index}-${position}`}
                      onClick={() => setActive(index)}
                      aria-label={`Show conversation from ${l.name}`}
                      className={`relative shrink-0 overflow-hidden rounded-full transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#b8753a] ${
                        hideOnMobile ? "hidden sm:block" : ""
                      } ${
                        isActive
                          ? "h-14 w-14 border-2 border-[#b8753a] opacity-100 sm:h-20 sm:w-20 md:h-24 md:w-24"
                          : isSide
                          ? "h-11 w-11 border-2 border-transparent opacity-80 hover:opacity-100 sm:h-16 sm:w-16 md:h-20 md:w-20"
                          : "h-11 w-11 border-2 border-transparent opacity-45 sm:h-14 sm:w-14 md:h-16 md:w-16"
                      }`}
                    >
                      <img
                        src={l.image}
                        alt={l.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>

              <button
                aria-label="Next learner"
                onClick={next}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1d6c8] text-gray-700 transition hover:bg-[#e8c2b0] focus:outline-none focus:ring-2 focus:ring-[#b8753a] sm:h-10 sm:w-10"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            <div className="mt-7 flex justify-center sm:mt-9 lg:justify-start">
              <a
                href="/contact#contactus"
                className="inline-flex w-full max-w-sm items-center justify-center rounded-md bg-[#f6873b] px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#e0732a] sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
              >
                Free Career Counselling from Experts
              </a>
            </div>
          </div>

          <div className="flex w-full justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px]">
              <div className="rounded-[32px] bg-[#0f0f0f] p-1.5 shadow-2xl sm:rounded-[40px] sm:p-2">
                <div className="h-[390px] overflow-hidden rounded-[28px] bg-white sm:h-[500px] sm:rounded-[34px] md:h-[520px]">
                  <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-gray-700/30 sm:w-20" />

                  <div className="px-3 pt-4 sm:px-5 sm:pt-5">
                    <div className="flex items-start gap-3">
                      <img
                        src={learner.image}
                        alt={learner.name}
                        loading="lazy"
                        className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-11 sm:w-11"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <p className="truncate text-sm font-semibold text-gray-900 sm:text-[15px]">
                            {learner.name}
                          </p>

                          <button className="shrink-0 text-xs font-semibold text-[#0a66c2] sm:text-sm">
                            + Follow
                          </button>
                        </div>

                        <p className="line-clamp-2 text-[11px] text-gray-600 sm:text-xs">
                          {learner.headline}
                        </p>

                        <p className="text-[10px] text-gray-500 sm:text-[11px]">
                          {learner.age} • 🌐
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 max-h-[245px] overflow-y-auto pr-2 whitespace-pre-line text-[11px] leading-relaxed text-gray-800 sm:max-h-[350px] sm:text-xs md:max-h-[375px]">
                      {learner.body}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}