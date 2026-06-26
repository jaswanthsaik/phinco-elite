import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

type Mentor = {
  name: string;
  company: string;
  companyClass: string;
  initials: string;
  bg: string;
};

const MENTORS: Mentor[] = [
  { name: "Disha Jindgar", company: "Walmart", companyClass: "text-[#0071ce]", initials: "DJ", bg: "bg-amber-100" },
  { name: "Disha M.", company: "Just Eat Takeaway", companyClass: "text-orange-500", initials: "DM", bg: "bg-amber-100" },
  { name: "Tammanna V.", company: "Walmart", companyClass: "text-[#0071ce]", initials: "TV", bg: "bg-amber-100" },
  { name: "Mohit S.", company: "kyndryl", companyClass: "text-[#ff462d]", initials: "MS", bg: "bg-amber-100" },
  { name: "Priya K.", company: "Amazon", companyClass: "text-orange-500", initials: "PK", bg: "bg-amber-100" },
  { name: "Rohit A.", company: "Microsoft", companyClass: "text-blue-600", initials: "RA", bg: "bg-amber-100" },
  { name: "Tammanna V.", company: "Walmart", companyClass: "text-[#0071ce]", initials: "TV", bg: "bg-amber-100" },
  { name: "Mohit S.", company: "kyndryl", companyClass: "text-[#ff462d]", initials: "MS", bg: "bg-amber-100" },
  { name: "Priya K.", company: "Amazon", companyClass: "text-orange-500", initials: "PK", bg: "bg-amber-100" },
];

const CARDS_PER_DOT = 4;

export function MeetOurMentors() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const totalDots = Math.ceil(MENTORS.length / CARDS_PER_DOT);

  const scrollToDot = (dotIndex: number) => {
    const el = scrollerRef.current;
    if (!el) return;

    const safeDotIndex = Math.max(0, Math.min(dotIndex, totalDots - 1));
    const targetCardIndex = safeDotIndex * CARDS_PER_DOT;
    const targetCard = el.children[targetCardIndex] as HTMLElement | undefined;

    if (targetCard) {
      el.scrollTo({
        left: targetCard.offsetLeft,
        behavior: "smooth",
      });
    }

    setActiveDot(safeDotIndex);
  };

  const scroll = (dir: "left" | "right") => {
    if (dir === "left") {
      scrollToDot(activeDot - 1);
    } else {
      scrollToDot(activeDot + 1);
    }
  };

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;

    // Important: when reaching end, force last dot active
    if (el.scrollLeft >= maxScrollLeft - 5) {
      setActiveDot(totalDots - 1);
      return;
    }

    let nearestDot = 0;
    let nearestDistance = Infinity;

    for (let i = 0; i < totalDots; i++) {
      const cardIndex = i * CARDS_PER_DOT;
      const card = el.children[cardIndex] as HTMLElement | undefined;

      if (!card) continue;

      const distance = Math.abs(el.scrollLeft - card.offsetLeft);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestDot = i;
      }
    }

    setActiveDot(nearestDot);
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
          Meet Our{" "}
          <span className="relative inline-block">
            Mentors
            <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-orange-500" />
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-gray-600 sm:text-base">
          Guiding You Every Step of the Way Towards Professional Excellence
        </p>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous mentors"
            disabled={activeDot === 0}
            className="absolute -left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 text-gray-400 shadow-md hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-40 sm:block"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next mentors"
            disabled={activeDot === totalDots - 1}
            className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 text-gray-400 shadow-md hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-40 sm:block"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollerRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {MENTORS.map((m, index) => (
              <div
                key={`${m.name}-${index}`}
                className="w-[85%] shrink-0 snap-start sm:w-[48%] md:w-[31%] lg:w-[23.5%]"
              >
                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div
                      className={`grid h-20 w-20 shrink-0 place-items-center rounded-xl ${m.bg} text-xl font-bold text-gray-700`}
                    >
                      {m.initials}
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-bold text-gray-900">
                        {m.name}
                      </h3>

                      <p className={`mt-1 truncate text-sm font-bold ${m.companyClass}`}>
                        {m.company}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-gray-700">
                    Elevate Your Profile: Boost your career prospects
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToDot(index)}
                aria-label={`Go to mentor group ${index + 1}`}
                className={`h-2 w-2 rounded-full transition ${
                  activeDot === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}