"use client";

import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useRef, useState } from "react";

type Story = {
  img: string;
  company: string;
  name: string;
  role: string;
  accent: string;
  youtubeUrl: string;
};

const stories: Story[] = [
  {
    img: portrait1,
    company: "JPMorganChase & Co.",
    name: "Rijul Gaur",
    role: "Data Analyst",
    accent: "#f59e0b",
    youtubeUrl: "https://www.youtube.com/watch?v=YRJbhFLLPyE",
  },
  {
    img: portrait2,
    company: "amazon",
    name: "Jaya Sinha",
    role: "Data Scientist",
    accent: "#f97316",
    youtubeUrl: "https://www.youtube.com/watch?v=9R3X0JoCLyU",
  },
  {
    img: portrait2,
    company: "Capgemini",
    name: "Mahasweta Sarkar",
    role: "Data Analytics Consultant",
    accent: "#0ea5e9",
    youtubeUrl: "https://www.youtube.com/watch?v=YRJbhFLLPyE",
  },
  {
    img: portrait3,
    company: "TheMathCompany",
    name: "Arvind K.",
    role: "Sr. Data Scientist",
    accent: "#f97316",
    youtubeUrl: "https://www.youtube.com/watch?v=9R3X0JoCLyU",
  },
  {
    img: portrait2,
    company: "Capgemini",
    name: "Mahasweta Sarkar",
    role: "Data Analytics Consultant",
    accent: "#0ea5e9",
    youtubeUrl: "https://www.youtube.com/watch?v=YRJbhFLLPyE",
  },
  {
    img: portrait1,
    company: "CENDROL",
    name: "Shubham Kumar",
    role: "Data Scientist",
    accent: "#f59e0b",
    youtubeUrl: "https://www.youtube.com/watch?v=9R3X0JoCLyU",
  },
  {
    img: portrait2,
    company: "Capgemini",
    name: "Mahasweta Sarkar",
    role: "Data Analytics Consultant",
    accent: "#0ea5e9",
    youtubeUrl: "https://www.youtube.com/watch?v=YRJbhFLLPyE",
  },
];

const ratings = [
  { score: "Top Rated", label: "LinkedIn", bg: "bg-[#eaf6fb]", emoji: "🏅" },
  { score: "4.7", label: "COURSE REPORT", bg: "bg-[#eef8ec]" },
  { score: "4.7", label: "switchup", bg: "bg-[#fff0f0]" },
  { score: "4.7", label: "Google", bg: "bg-[#edf6ff]" },
];

const testimonialVideoUrl = "https://www.youtube.com/watch?v=eautK0odE7Q&t=7s";
const testimonialVideoId = "eautK0odE7Q";

const getYoutubeEmbedUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const videoId = parsedUrl.searchParams.get("v");

    const timeValue = parsedUrl.searchParams.get("t");
    const startSeconds = timeValue
      ? Number(timeValue.replace("s", ""))
      : 0;

    return `https://www.youtube.com/embed/${videoId}?autoplay=1${
      startSeconds ? `&start=${startSeconds}` : ""
    }&rel=0`;
  } catch {
    return url;
  }
};

export function RealStories() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-[#0a1e3f] md:text-5xl">
          Real Stories, <span className="italic">Real Success</span>
        </h2>

        <p className="mt-3 text-muted-foreground">
          Discover what our learners say about us
        </p>

        {/* Carousel */}
        <div className="relative mt-12 flex items-center gap-4">
          <button
            onClick={() => handleScroll("left")}
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-400 text-white shadow-md hover:bg-slate-500 md:flex"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            ref={carouselRef}
            className="flex flex-1 gap-10 overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden"
          >
            {stories.map((s, i) => (
              <div
                key={i}
                onClick={() => setActiveVideo(s.youtubeUrl)}
                className="relative h-[280px] w-[180px] shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-neutral-800 shadow-lg"
              >
                <img
                  src={s.img}
                  alt={s.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideo(s.youtubeUrl);
                  }}
                  className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm ring-2 ring-white/70"
                >
                  <Play className="h-5 w-5 fill-white text-white" />
                </button>

                <div className="absolute inset-x-0 bottom-0 p-3">
                  <div className="mb-1 border-t border-white/20 pt-2 text-xs font-semibold text-white">
                    {s.company}
                  </div>

                  <div
                    className="text-sm font-bold"
                    style={{ color: s.accent }}
                  >
                    {s.name}
                  </div>

                  <div className="text-[11px] text-white/80">
                    {s.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => handleScroll("right")}
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-400 text-white shadow-md hover:bg-slate-500 md:flex"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Courses Top Rated Section */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px]">
          <div>
            <h3 className="text-[30px] font-extrabold leading-tight text-[#052845] md:text-[38px]">
              Courses Top Rated in:
            </h3>

            <p className="mt-2 text-base text-[#5f5148] md:text-lg">
              Discover what our learners say about us
            </p>

            <div className="mt-8 grid max-w-[500px] grid-cols-1 gap-5 sm:grid-cols-2">
              {ratings.map((r, i) => (
                <div
                  key={i}
                  className={`${r.bg} flex h-[78px] items-center justify-center gap-2 rounded-full p-6 shadow-sm`}
                >
                  {r.label === "LinkedIn" && (
                    <>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl">
                        🏅
                      </span>
                      <span className="text-[22px] font-extrabold text-black">
                        Linked
                        <span className="ml-1 rounded-sm bg-[#0a66c2] px-1 text-white">
                          in
                        </span>
                      </span>
                    </>
                  )}

                  {r.label === "COURSE REPORT" && (
                    <>
                      <span className="text-[30px] font-extrabold text-black">
                        4.7
                      </span>
                      <span className="text-xl text-orange-500">★</span>
                      <span className="rounded-sm bg-[#69b66e] px-2 py-1 text-center text-[12px] font-extrabold leading-tight text-white">
                        COURSE
                        <br />
                        REPORT
                      </span>
                    </>
                  )}

                  {r.label === "switchup" && (
                    <>
                      <span className="text-[30px] font-extrabold text-black">
                        4.7
                      </span>
                      <span className="text-xl text-orange-500">★</span>
                      <span className="flex items-center gap-2 text-[20px] font-extrabold text-[#4a3d3d]">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d71920] text-sm text-white">
                          ↯
                        </span>
                        switchup
                      </span>
                    </>
                  )}

                  {r.label === "Google" && (
                    <>
                      <span className="text-[30px] font-extrabold text-black">
                        4.7
                      </span>
                      <span className="text-xl text-orange-500">★</span>
                      <span className="text-[26px] font-medium">
                        <span className="text-[#4285F4]">G</span>
                        <span className="text-[#DB4437]">o</span>
                        <span className="text-[#F4B400]">o</span>
                        <span className="text-[#4285F4]">g</span>
                        <span className="text-[#0F9D58]">l</span>
                        <span className="text-[#DB4437]">e</span>
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Video Card */}
          <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[22px] border border-[#10aee5] bg-[#e9fbff] p-3 shadow-md" onClick={() => setActiveVideo(testimonialVideoUrl)}>
            <div className="overflow-hidden rounded-t-[14px] bg-neutral-900">
              <img
                src={`https://img.youtube.com/vi/${testimonialVideoId}/maxresdefault.jpg`}
                alt="Learner testimonial video"
                className="aspect-video h-full w-full object-cover"
              />
            </div>

            <div className="flex items-center gap-4 rounded-b-[14px] bg-[#e9fbff] pt-4">
              <div className="flex h-9 flex-1 items-center rounded-full border border-[#1fd0c5] bg-white px-6">
                <div className="h-[4px] w-full rounded-full bg-slate-300">
                  <div className="h-full w-[38%] rounded-full bg-[#ff514f]" />
                </div>
              </div>

              <button
                type="button"
                
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#55bd26] text-white transition hover:scale-105"
                aria-label="Play testimonial video"
              >
                <Play className="h-5 w-5 fill-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Popup Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-4xl rounded-md bg-white p-1 shadow-xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -right-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-white shadow-md hover:bg-sky-700"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-video w-full overflow-hidden rounded-sm bg-black">
              <iframe
                src={getYoutubeEmbedUrl(activeVideo)}
                title="Learner Success Story"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}