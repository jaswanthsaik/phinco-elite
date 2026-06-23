import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";

import { Phone } from "lucide-react";

function PortraitBadge({
  src,
  tag,
  tagColor,
  className,
  sizeClass,
}: {
  src: string;
  tag: string;
  tagColor: "amber" | "emerald";
  className?: string;
  sizeClass?: string;
}) {
  const ring =
    tagColor === "amber" ? "ring-amber-400/60" : "ring-emerald-400/60";

  const chip =
    tagColor === "amber"
      ? "text-amber-300 border-amber-400/40"
      : "text-emerald-300 border-emerald-400/40";

  return (
    <div className={`absolute ${sizeClass ?? ""} ${className ?? ""}`}>
      <div
        className={`relative h-full w-full overflow-hidden rounded-full ring-3 sm:ring-4 ${ring} shadow-2xl`}
      >
        <img
          src={src}
          alt={tag}
          className="h-full w-full object-cover"
          loading="lazy"
          width={1024}
          height={1024}
        />
      </div>

      <span
        className={`absolute -bottom-3 left-1/2 max-w-[170px] -translate-x-1/2 truncate whitespace-nowrap rounded-full border ${chip} bg-[#030816]/90 px-3 py-1 text-center text-[10px] font-semibold backdrop-blur sm:max-w-none sm:text-[11px]`}
      >
        {tag}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(to bottom right, #000, #0b1235 50%, #000)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to bottom left, #3b82f608, transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 pb-8 pt-8 sm:px-6 sm:pb-10 lg:grid-cols-[56%_44%] lg:gap-0 lg:px-8">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[3.2rem] lg:leading-[1.2]">
            Advance Your Career With Real Industry Projects and{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Get Hired
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm text-white/80 sm:text-lg lg:mx-0">
            Join India's #1{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text font-semibold text-transparent">
              Project-Based Upskilling
            </span>{" "}
            Platform for Working Professionals
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href=""
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90 sm:w-auto sm:text-base"
            >
              <Phone className="h-4 w-4" />
              Get Expert Callback
            </a>

            <a
              href=""
              className="inline-flex w-full items-center justify-center rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:text-base"
            >
              Explore Courses
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-[340px] w-full max-w-[360px] sm:h-[430px] sm:max-w-[480px] lg:h-[480px] lg:max-w-[520px]">
          <PortraitBadge
            src={portrait1}
            tag="Data Scientist at KPMG"
            tagColor="amber"
            sizeClass="h-[155px] w-[155px] sm:h-[205px] sm:w-[205px] lg:h-[210px] lg:w-[210px]"
            className="left-0 top-10 sm:left-6 sm:top-8 lg:left-2 lg:top-6"
          />

          <PortraitBadge
            src={portrait2}
            tag="Mechanical Engineer to Data analyst"
            tagColor="emerald"
            sizeClass="h-[115px] w-[115px] sm:h-[145px] sm:w-[145px] lg:h-[150px] lg:w-[150px]"
            className="right-0 top-0 sm:right-4 sm:top-0 lg:right-2"
          />

          <PortraitBadge
            src={portrait3}
            tag="From non-tech to a Cloud Engineer"
            tagColor="emerald"
            sizeClass="h-[155px] w-[155px] sm:h-[195px] sm:w-[195px] lg:h-[200px] lg:w-[200px]"
            className="bottom-6 right-4 sm:bottom-8 sm:right-10 lg:bottom-6 lg:right-4"
          />
        </div>
      </div>
    </section>
  );
}