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
    name: "Rakesh Kumar",
    headline: "Senior Data Analyst at JPMorganChase",
    age: "2d",
    image: learner1,
    body: "Excited to share that I have successfully completed the Advanced Data Science program at Phinco Elite! 🎉 The hands-on projects with real industry datasets and mentorship from seasoned professionals gave me the confidence to crack interviews at top firms. Grateful to the entire faculty for their constant guidance and support throughout this journey.",
  },
  {
    name: "Arjun Mehta",
    headline: "Data Scientist | GenAI Enthusiast",
    age: "1d",
    image: learner2,
    body: "Just wrapped up my GenAI Master Program with Phinco Elite and I'm blown away by the depth of content. 🚀 From building LLM-powered apps to deploying agentic AI workflows, every module added real value. The capstone project on retrieval-augmented generation is now part of my portfolio and helped me land my dream role!",
  },
  {
    name: "Satyanarayan Mohapatra",
    headline: "Seeking the data scientist opportunities- Talk about St...",
    age: "1d",
    image: learner3,
    body: "Thrilled to announce the attainment of my Big Data Certificate! 🚀 Delving into the depths of data analytics, I've honed skills in processing, analyzing, and interpreting vast data sets.\n\nFrom harnessing Hadoop to mastering Spark, this journey has been exhilarating. Grateful for the support and guidance throughout this pursuit Silvia Priyadharshini mam Learnbay.\n\nThis certificate symbolizes a milestone in my commitment to excellence in the realm of data science. Excited to leverage these newfound skills in unlocking insights and driving impactful decisions. Onwards and upwards, ready to conquer new data frontiers! 💡",
  },
  {
    name: "Vikram Singh",
    headline: "Cloud Architect | DevOps Engineer",
    age: "3d",
    image: learner4,
    body: "Happy to share that I've earned my Cloud & DevOps certification from Phinco Elite! ☁️ The program covered everything from Kubernetes to CI/CD pipelines on AWS and Azure. The live problem-solving sessions with industry experts made all the difference. Highly recommend to anyone serious about a cloud career.",
  },
  {
    name: "Priya Sharma",
    headline: "Software Engineer @ Amazon | ex-Capgemini",
    age: "5d",
    image: learner5,
    body: "Completed my SDE Master Program at Phinco Elite and just received my offer letter from Amazon! 💛 The structured DSA roadmap, mock interviews, and personalised mentorship were game-changers. Forever grateful to my mentors who believed in me even when I doubted myself.",
  },
  {
    name: "Vikram Singh",
    headline: "Cloud Architect | DevOps Engineer",
    age: "3d",
    image: learner4,
    body: "Happy to share that I've earned my Cloud & DevOps certification from Phinco Elite! ☁️ The program covered everything from Kubernetes to CI/CD pipelines on AWS and Azure. The live problem-solving sessions with industry experts made all the difference. Highly recommend to anyone serious about a cloud career.",
  },
  {
    name: "Priya Sharma",
    headline: "Software Engineer @ Amazon | ex-Capgemini",
    age: "5d",
    image: learner5,
    body: "Completed my SDE Master Program at Phinco Elite and just received my offer letter from Amazon! 💛 The structured DSA roadmap, mock interviews, and personalised mentorship were game-changers. Forever grateful to my mentors who believed in me even when I doubted myself.",
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
    <section className="bg-white px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl rounded-3xl bg-[#dceeff] px-4 py-8 sm:px-6 sm:py-10 md:px-14 md:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold leading-tight text-[#0b0b0b] sm:text-3xl md:text-[40px]">
              <span className="text-[#b8753a]">Insider glimpses:</span>{" "}
              Click to see real conversations with our learners
            </h2>

            <div className="mt-8 flex items-center justify-center gap-2 sm:mt-10 sm:gap-4">
              <button
                aria-label="Previous learner"
                onClick={prev}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1d6c8] text-gray-700 transition hover:bg-[#e8c2b0] sm:h-10 sm:w-10"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <div className="flex min-w-0 flex-1 items-center justify-center gap-2 overflow-hidden sm:gap-4 md:w-[470px] md:flex-none">
                {getVisibleLearners().map(({ learner: l, index, position }) => {
                  const isActive = position === 0;
                  const isSide = Math.abs(position) === 1;

                  return (
                    <button
                      key={`${l.name}-${index}-${position}`}
                      onClick={() => setActive(index)}
                      aria-label={`Show conversation from ${l.name}`}
                      className={`relative shrink-0 overflow-hidden rounded-full transition-all duration-500 ease-in-out ${
                        isActive
                          ? "h-16 w-16 border-2 border-[#b8753a] opacity-100 sm:h-20 sm:w-20 md:h-24 md:w-24"
                          : isSide
                          ? "h-12 w-12 border-2 border-transparent opacity-80 hover:opacity-100 sm:h-16 sm:w-16 md:h-20 md:w-20"
                          : "h-12 w-12 border-2 border-transparent opacity-45 sm:h-16 sm:w-16 md:h-20 md:w-20"
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
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1d6c8] text-gray-700 transition hover:bg-[#e8c2b0] sm:h-10 sm:w-10"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            <a
              href="#counselling"
              className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-[#f6873b] px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#e0732a] sm:mt-10 sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
            >
              Free Career Counselling from Experts
            </a>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-[260px] sm:w-[300px] md:w-[340px]">
              <div className="rounded-[40px] bg-[#0f0f0f] p-2 shadow-2xl">
                <div className="h-[430px] overflow-hidden rounded-[34px] bg-white sm:h-[520px]">
                  <div className="mx-auto mt-2 h-1.5 w-20 rounded-full bg-gray-700/30" />

                  <div className="px-4 pt-4 sm:px-5 sm:pt-5">
                    <div className="flex items-start gap-3">
                      <img
                        src={learner.image}
                        alt={learner.name}
                        loading="lazy"
                        className="h-11 w-11 rounded-full object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <p className="truncate text-[15px] font-semibold text-gray-900">
                            {learner.name}
                          </p>

                          <button className="shrink-0 text-sm font-semibold text-[#0a66c2]">
                            + Follow
                          </button>
                        </div>

                        <p className="line-clamp-2 text-xs text-gray-600">
                          {learner.headline}
                        </p>

                        <p className="text-[11px] text-gray-500">
                          {learner.age} • 🌐
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 max-h-[300px] overflow-y-auto pr-2 text-[11px] leading-relaxed text-gray-800 whitespace-pre-line sm:max-h-[400px] sm:text-[12px]">
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