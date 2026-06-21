import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";

import {
  Phone
} from "lucide-react";

function PortraitBadge({
  src,
  tag,
  tagColor,
  className,
  size = 180,
}: {
  src: string;
  tag: string;
  tagColor: "amber" | "emerald";
  className?: string;
  size?: number;
}) {
  const ring =
    tagColor === "amber" ? "ring-amber-400/60" : "ring-emerald-400/60";

  const chip =
    tagColor === "amber"
      ? "text-amber-300 border-amber-400/40"
      : "text-emerald-300 border-emerald-400/40";

  return (
    <div
      className={`absolute ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <div
        className={`relative h-full w-full overflow-hidden rounded-full ring-4 ${ring} shadow-2xl`}
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
        className={`absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border ${chip} bg-[#030816]/90 px-3 py-1 text-[11px] font-semibold backdrop-blur`}
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

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-8 pb-1 pt-8 lg:grid-cols-[56%_44%] lg:gap-0">
        <div>
          <h1 className="text-[3.2rem] font-extrabold leading-[1.2] tracking-tight">
            Advance Your Career With Real Industry Projects and{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Get Hired
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
            Join India's #1{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text font-semibold text-transparent">
              Project-Based Upskilling
            </span>{" "}
            Platform for Working Professionals
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href=""
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90 sm:text-base"
            >
              <Phone className="h-4 w-4" />
              Get Expert Callback
            </a>

            <a
              href=""
              className="inline-flex items-center rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base"
            >
              Explore Courses
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[480px]">
          <PortraitBadge
            src={portrait1}
            tag="Data Scientist at KPMG"
            tagColor="amber"
            size={210}
            className="left-2 top-6 sm:left-6"
          />

          <PortraitBadge
            src={portrait2}
            tag="Mechanical Engineer to Data analyst"
            tagColor="emerald"
            size={150}
            className="right-2 top-0 sm:right-4"
          />

          <PortraitBadge
            src={portrait3}
            tag="From non-tech to a Cloud Engineer"
            tagColor="emerald"
            size={200}
            className="right-4 bottom-6 sm:right-10"
          />
        </div>
      </div>
    </section>
  );
}