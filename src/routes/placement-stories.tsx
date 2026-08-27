import learner1 from "@/assets/geenth.png";
import learner2 from "@/assets/rabbani.jpeg";
import learner3 from "@/assets/venthan.png";
import learner4 from "@/assets/portrait-2.jpeg";
import learner5 from "@/assets/arun.jpeg";
import learner6 from "@/assets/Prash.jpeg";
import learner7 from "@/assets/nehaaaa.png";

import portrait1 from "@/assets/rahul1t.png";
import portrait2 from "@/assets/himani (1).png";
import portrait3 from "@/assets/shalini.png";
import portrait4 from "@/assets/sanskarreel.png";
import portrait5 from "@/assets/nehaaaa.png";

import Icons1 from "@/assets/Icons1.jpeg";
import Icons2 from "@/assets/hiring-icons.jpeg";
import { Header } from "@/components/landing/Header";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";
import { FAQSection } from "@/components/programs/agenticDevelopers/FAQSection";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Download, Linkedin, Phone, Play, X } from "lucide-react";
import { useState } from "react";
import {
  FaAmazon,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiAirtel,
  SiFacebook,
  SiGoogle,
  SiPaytm,
  SiPhonepe,
  SiSwiggy,
  SiTarget,
} from "react-icons/si";
import CareerSupportSection from "@/components/landing/CareerSupportSection";
import OurHiringPartners from "@/components/landing/OurHiringPartners";
import PartnerLogosGrid from "@/components/landing/PartnerLogosGrid";
import AlumniDistribution from "@/components/landing/AlumniDistribution";
import SalaryDistribution from "@/components/landing/SalaryDistribution";
import { TalkToTeam } from "@/components/landing/TalkToTeam";


export const Route = createFileRoute("/placement-stories")({
  head: () => ({
    meta: [
      { title: "Placement Stories — Phinco Elite" },
      {
        name: "description",
        content:
          "Real placement stories from Phinco Elite alumni — career transitions, hiring partners, and inspiring reviews from learners.",
      },
      { property: "og:title", content: "Placement Stories — Phinco Elite" },
      {
        property: "og:description",
        content: "Inspiring career transitions and alumni reviews from Phinco Elite learners.",
      },
    ],
  }),
  component: PlacementStoriesPage,
});

function PlacementStoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PlacementHero />
        <AlumniDistribution />
        <SalaryDistribution />
        <SuccessStoriesSection />
        <AlumniTriumphSection />
        <AlumniReviewsSection />
        <CareerSupportSection />
        <div className="text-center mb-[30px] text-[32px] font-bold text-[#17202a]">Our Hiring Partners</div>
        <div className="flex flex-col items-center justify-center gap-32 bg-background p-3 mx-9">
        <img src={Icons2} className="h-full w-full object-cover" />
        <img src={Icons1} className="h-full w-full object-cover" />
        </div>
        {/* <OurHiringPartners /> */}
        {/* <PartnerLogosGrid /> */}
        {/* <RegisterCtaSection /> */}
      <TalkToTeam />
        <FAQSection />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}

/* ============================================================
   1. HERO — Placement Stories
   ============================================================ */

const heroLearners = [
  learner1, learner2, learner3, learner4, learner5,
  portrait1, portrait2, portrait3, learner1, learner2,
  learner3, learner4, learner5, portrait1, portrait2,
];

const heroCompanies = [
  { name: "Swiggy", icon: SiSwiggy, bg: "bg-white", iconClass: "text-orange-500" },
  { name: "Facebook", icon: SiFacebook, bg: "bg-white", iconClass: "text-blue-600" },
  { name: "DS", initials: "DS", bg: "bg-blue-900", iconClass: "text-white" },
  { name: "Airtel", icon: SiAirtel, bg: "bg-white", iconClass: "text-red-600" },
  { name: "Paytm", icon: SiPaytm, bg: "bg-white", iconClass: "text-blue-500" },
  { name: "Google", icon: SiGoogle, bg: "bg-white", iconClass: "text-blue-500" },
  { name: "Microsoft", icon: FaMicrosoft, bg: "bg-white", iconClass: "text-neutral-900" },
  { name: "Target", icon: SiTarget, bg: "bg-white", iconClass: "text-red-500" },
  { name: "Disney", icon: SiTarget, bg: "bg-white", iconClass: "text-neutral-900" },
  { name: "PhonePe", icon: SiPhonepe, bg: "bg-white", iconClass: "text-purple-600" },
  { name: "Amazon", icon: FaAmazon, bg: "bg-white", iconClass: "text-neutral-900" },
  { name: "Teachmint", initials: "Tm", bg: "bg-sky-500", iconClass: "text-white" },
];

function PlacementHero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_minmax(260px,420px)_1fr]">
          {/* Left: learner collage */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {heroLearners.map((src, i) => {
                const sizes = [
                  "h-10 w-10", "h-14 w-14", "h-12 w-12", "h-9 w-9", "h-11 w-11",
                  "h-12 w-12", "h-16 w-16", "h-20 w-20", "h-14 w-14", "h-10 w-10",
                  "h-11 w-11", "h-13 w-13", "h-12 w-12", "h-10 w-10", "h-9 w-9",
                ];
                return (
                  <div
                    key={i}
                    className={`${sizes[i] || "h-12 w-12"} mx-auto overflow-hidden rounded-full ring-2 ring-background shadow-sm`}
                  >
                    <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center: heading + CTAs */}
          <div className="order-1 lg:order-2 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Placement Stories
            </h1>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              Work hard with us, with dedication and commitment, and watch
              multiple opportunities grab you and transform your future!
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#stories"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-sm hover:bg-brand-dark transition-colors"
              >
                Explore Stories
              </a>
              <a
                href="/contact#contactus"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-bold text-foreground hover:bg-muted transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Brochure
              </a>
            </div>
          </div>

          {/* Right: company logos collage */}
         {/* Right: company logos collage */}
<div className="order-3 lg:order-3">
  <div className="grid grid-cols-4 gap-3 sm:gap-4">
    {heroCompanies.map((c, i) => {
      const sizes = ["h-12 w-12", "h-14 w-14", "h-16 w-16", "h-12 w-12"];
      const Icon = c.icon;

      return (
        <div
          key={c.name + i}
          title={c.name}
          className={`${sizes[i % sizes.length]} mx-auto grid place-items-center rounded-full ${c.bg} border border-border shadow-sm`}
        >
          {Icon ? (
            <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${c.iconClass}`} />
          ) : (
            <span className={`text-xs font-bold ${c.iconClass}`}>
              {c.initials}
            </span>
          )}
        </div>
      );
    })}
  </div>
</div>
        </div>

        {/* Stats strip */}
       <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
  {[
    {
      label: "Companies Hiring",
      value: "2,000+",
      bg: "bg-blue-600",
    },
    {
      label: "Students Placed",
      value: "4,500+",
      bg: "bg-emerald-600",
    },
    {
      label: "Industry Experts",
      value: "1,200+",
      bg: "bg-violet-600",
    },
    {
      label: "Highest Package",
      value: "36 LPA",
      bg: "bg-orange-500",
    },
    {
      label: "Highest Salary Hike",
      value: "500%",
      bg: "bg-rose-600",
    },
  ].map((s) => (
    <div
      key={s.label}
      className={`${s.bg} px-4 py-5 text-center sm:text-left`}
    >
      <p className="text-xs text-white sm:text-sm">
        {s.label}
      </p>

      <p className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
        {s.value}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

/* ============================================================
   2. SUCCESS STORIES — video carousel
   ============================================================ */

const successStories = [
  {
    name: "Shalini",
    role: "Digital marketing to Data Analyst",
    description:
      "A passionate learner from Haveri, Karnataka, who switched from an Digital marketing  role to pursuing his dream career in Data Science.",
    image: portrait3,
    youtubeUrl: "https://www.youtube.com/watch?v=HvdoG3X8gB8",
  },
  {
    name: "Rahul",
    role: "Career Gat to Data Analyst ",
    description:
      "A passionate learner who turned a career gap into an opportunity and successfully transitioned into a career as a Data Analyst.",
    image: portrait1,
    youtubeUrl: "https://www.youtube.com/watch?v=dyiWCACsg0E",
  },
  {
    name: "Himani",
    role: "Fresher to Data analyst",
    description:
      "A passionate learner who successfully transitioned from being a fresher to starting a promising career as a Data Analyst.",
    image: portrait2,
    youtubeUrl: "https://www.youtube.com/watch?v=IZwdiQPUoYI",
  },
  
  {
    name: "Sanskar",
    role: "Customer Support to Data Analyst",
    description:
      "A passionate learner who successfully transitioned from a Customer Support role to a promising career as a Data Analyst.",
    image: portrait4,
    youtubeUrl: "https://www.youtube.com/watch?v=cMgXp2qAb9U&t=1s",
  },
  {
    name: "Neha",
    role: "Career Gap to Data Analyst ",
    description:
      "A passionate learner who turned a career gap into an opportunity and successfully transitioned into a career as a Data Analyst.",
    image: portrait5,
    youtubeUrl: "https://www.youtube.com/watch?v=dQRCKGdh2M8",
  }
];

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);

    let videoId = "";

    if (parsedUrl.hostname.includes("youtu.be")) {
      videoId = parsedUrl.pathname.slice(1).split("/")[0];
    } else if (parsedUrl.pathname.includes("/shorts/")) {
      videoId = parsedUrl.pathname.split("/shorts/")[1]?.split("/")[0] || "";
    } else if (parsedUrl.pathname.includes("/embed/")) {
      videoId = parsedUrl.pathname.split("/embed/")[1]?.split("/")[0] || "";
    } else {
      videoId = parsedUrl.searchParams.get("v") || "";
    }

    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
      : "";
  } catch {
    return "";
  }
}

function SuccessStoriesSection() {
  const [idx, setIdx] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const current = successStories[idx];
  const total = successStories.length;

  const closeVideo = () => setActiveVideo(null);

  return (
    <>
      <section id="stories" className="bg-[oklch(0.98_0.01_240)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl md:text-4xl">
            Incredible success stories of our alumni
          </h2>

          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            With 2000+ hiring partners, and top mentors from top companies from MAANG
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-background p-5 sm:p-8">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
              {/* Left: text */}
              <div className="min-w-0">
                <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground">
                  {idx + 1}/{total}
                </span>

                <h3 className="mt-5 text-2xl font-extrabold text-foreground sm:text-3xl">
                  {current.name}
                </h3>

                <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
                  {current.description}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Previous story"
                    onClick={() => setIdx((p) => (p - 1 + total) % total)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    aria-label="Next story"
                    onClick={() => setIdx((p) => (p + 1) % total)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Right: video card */}
              <div
                onClick={() => setActiveVideo(current.youtubeUrl)}
                className="relative cursor-pointer overflow-hidden rounded-xl bg-blue-700"
              >
                <div className="aspect-video w-full">
                  <img
                    src={current.image}
                    alt={current.name}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-90"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/70 via-blue-700/40 to-transparent" />

                {/* Content */}
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 sm:p-7">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-background px-3 py-1 text-xs font-bold text-foreground">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-brand text-[10px] text-primary-foreground">
                      P
                    </span>
                    Phinco Elite
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                      {current.role}
                    </p>

                    <p className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
                      {current.name}
                    </p>
                  </div>
                </div>

                {/* Play button */}
                <button
                  type="button"
                  aria-label={`Watch ${current.name}'s success story`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideo(current.youtubeUrl);
                  }}
                  className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-sm ring-2 ring-white/70 transition-transform hover:scale-110"
                >
                  <Play className="h-6 w-6 fill-white text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-3 py-6 backdrop-blur-[2px] sm:px-6"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-6xl overflow-visible rounded-2xl border-4 border-white bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              aria-label="Close video"
              onClick={closeVideo}
              className="absolute -right-3 -top-3 z-20 grid h-11 w-11 place-items-center rounded-full bg-sky-500 text-white shadow-lg transition-colors hover:bg-sky-600 sm:-right-5 sm:-top-5"
            >
              <X className="h-7 w-7" />
            </button>

            {/* Player */}
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe
                src={getYouTubeEmbedUrl(activeVideo)}
                title={`${current.name} success story`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ============================================================
   3. ALUMNI TRIUMPH — card grid
   ============================================================ */

const alumniCards = [
  { name: "Himani", company: "Yoga Bar", before: "Fresher", after: "Data Analyst", photo: portrait2 },
  { name: "Shivani K", company: "AXA", before: "Patent Analyst", after: "Finance Analyst", photo: learner1 },
  { name: "Rabbani S", company: "Public Sapient", before: "Customer Support ", after: "Data Analyst", photo: learner2 },
  { name: "Venthan", company: "CommsCredible", before: "Sales ", after: "Data Analyst", photo: learner3 },
  { name: "Ahmed S", company: "KPMG", before: "Mechanical Engineer", after: "Data Analyst", photo: learner4 },
  { name: "Arun M", company: "General Motors", before: "Accountant", after: "Bussiness Analyst", photo: learner5 },
  { name: "Prashanth Reddy", company: "JP Morgan", before: "Data Analyst", after: "Senior Data Analyst", photo: learner6 },
  { name: "Neha", company: "Data Poem", before: "Career Gap", after: "Data Analyst", photo: learner7 },
];

function AlumniTriumphSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
          Look at our alumnis
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-foreground sm:text-3xl md:text-4xl">
          Phinco Elite's Tales of Triumph!
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {alumniCards.map((a) => (
            <article
              key={a.name}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm"
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden bg-muted">
                <img src={a.photo} alt={a.name} loading="lazy" className="h-full w-full object-cover" />
                <span className="absolute bottom-3 left-3 inline-flex items-center rounded-md bg-background px-2.5 py-1 text-[11px] font-bold text-foreground shadow">
                  {a.company}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-base font-bold text-foreground">{a.name}</h3>
                <p className="text-sm text-muted-foreground">{a.company}</p>

                <div className="mt-4 flex items-center gap-2">
                  <div className="min-w-0">
                    <span className="inline-block rounded-md bg-orange-100 px-2 py-0.5 text-[10px] font-bold uppercase text-orange-700">
                      Before
                    </span>
                    <p className="mt-1 text-xs font-semibold text-foreground">{a.before}</p>
                  </div>
                  <span className="px-1 text-muted-foreground">»</span>
                  <div className="min-w-0">
                    <span className="inline-block rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-700">
                      After
                    </span>
                    <p className="mt-1 text-xs font-semibold text-foreground">{a.after}</p>
                  </div>
                </div>

                <a
          href="/contact#contactus"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-brand bg-background px-3 py-2 text-sm font-bold text-brand hover:bg-brand/5 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. ALUMNI REVIEWS — testimonial scroller
   ============================================================ */

const reviews = [
  {
    name: "Krushitha",
    role: "Data Analyst",
    photo: null,
    text:"Phinco Elite helped me gain practical knowledge in SQL, Power BI, Excel, and Python. The hands-on projects and guidance gave me the confidence to prepare for interviews and start my journey as a Data Analyst",
  },
  {
    name: "Manish",
    role: "Business Analyst",
    photo: null,
    text:
      "The Business Analyst training at Phinco Elite helped me understand real business processes, requirement gathering, documentation, and stakeholder communication. The practical approach made learning much easier and job-focused.",
  },
  {
    name: "Samyuktha",
    role: "Finance Analyst",
    photo: null,
    text:
      "Phinco Elite helped me strengthen my analytical and financial skills through practical exercises and real-world projects. I learned how to work with data, create reports, and generate meaningful business insights.",
  },
  {
    name: "Ravi Kumar",
    role: "Career Transition",
    photo: null,
    text:
      "Coming from a different background, I was initially unsure about moving into analytics. Phinco Elite provided structured training, practical projects, mentorship, and interview support, which helped me confidently transition into an analytics career.",
  },
];

function AlumniReviewsSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Alumni Reviews
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-foreground sm:text-3xl md:text-4xl">
          Alum from Phinco Elite share their insights
        </h2>

        <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex w-max gap-5 marquee-track-left group-hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((r, i) => (
              <article
                key={`${r.name}-${i}`}
                className="shrink-0 w-[85vw] sm:w-[380px] md:w-[420px] rounded-xl border border-border bg-background p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-muted text-sm font-bold text-muted-foreground">
                    {r.photo ? (
                      <img src={r.photo} alt={r.name} loading="lazy" className="h-full w-full object-cover" />
                    ) : (
                      r.name.charAt(0)
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-bold text-foreground">{r.name}</h3>
                    <p className="truncate text-xs text-muted-foreground">{r.role}</p>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-muted/40 p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. REGISTER CTA — Data Science Course banner
   ============================================================ */

const ctaCompanies = [
  { label: "Uber", bg: "bg-neutral-900", text: "text-white" },
  { label: "a", bg: "bg-white", text: "text-orange-500" },
  { label: "q", bg: "bg-purple-600", text: "text-white" },
  { label: "∞", bg: "bg-white border border-border", text: "text-emerald-600" },
  { label: "pb", bg: "bg-white", text: "text-blue-600" },
  { label: "◉", bg: "bg-white", text: "text-amber-500" },
  { label: "Paytm", bg: "bg-white", text: "text-blue-600" },
  { label: "m", bg: "bg-pink-600", text: "text-white" },
  { label: "▲", bg: "bg-sky-500", text: "text-white" },
  { label: "G", bg: "bg-white", text: "text-blue-600" },
  { label: "zomato", bg: "bg-red-500", text: "text-white" },
];

function RegisterCtaSection() {
  return (
    <section className="bg-background px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_right,oklch(0.25_0.08_200),oklch(0.12_0.02_240)_55%,oklch(0.08_0.01_240))] px-4 py-4 sm:px-4 sm:py-4 md:py-4">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                Phinco Elite
              </p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
                Register in our Data Science Course
              </h2>
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-neutral-900 shadow-sm hover:bg-white/90 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download Brochure
                </a>
                <a
                  href="tel:+917619328498"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-bold text-white backdrop-blur hover:bg-white/10 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Talk to an Expert
                </a>
              </div>
            </div>

            {/* Right: floating company logos */}
            <div className="relative mx-auto h-[260px] w-full max-w-md sm:h-[300px]">
              {ctaCompanies.map((c, i) => {
                const positions = [
                  "top-[6%] left-[28%] h-12 w-12 sm:h-14 sm:w-14",
                  "top-[2%] left-[55%] h-10 w-10 sm:h-12 sm:w-12",
                  "top-[8%] right-[6%] h-14 w-14 sm:h-16 sm:w-16",
                  "top-[20%] right-[26%] h-10 w-10 sm:h-12 sm:w-12",
                  "top-[28%] left-[8%] h-12 w-12 sm:h-14 sm:w-14",
                  "top-[34%] left-[34%] h-9 w-9 sm:h-11 sm:w-11",
                  "top-[40%] right-[40%] h-14 w-14 sm:h-16 sm:w-16",
                  "top-[48%] right-[10%] h-12 w-12 sm:h-14 sm:w-14",
                  "bottom-[14%] left-[2%] h-10 w-10 sm:h-12 sm:w-12",
                  "bottom-[8%] left-[40%] h-12 w-12 sm:h-14 sm:w-14",
                  "bottom-[18%] right-[24%] h-12 w-12 sm:h-14 sm:w-14",
                ];
                return (
                  <div
                    key={c.label + i}
                    className={`absolute ${positions[i]} grid place-items-center rounded-full ${c.bg} ${c.text} text-[11px] font-extrabold shadow-lg ring-1 ring-white/10`}
                  >
                    {c.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}