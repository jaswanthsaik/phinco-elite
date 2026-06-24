import learner1 from "@/assets/learner-1.jpg";
import learner2 from "@/assets/learner-2.jpg";
import learner3 from "@/assets/learner-3.jpg";
import learner4 from "@/assets/learner-4.jpg";
import learner5 from "@/assets/learner-5.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";
import { Header } from "@/components/landing/Header";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";
import { FAQSection } from "@/components/programs/FAQSection";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Download, Linkedin, Phone, Play } from "lucide-react";
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
        <SuccessStoriesSection />
        <AlumniTriumphSection />
        <AlumniReviewsSection />
        <RegisterCtaSection />
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
                href="#"
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
            { label: "Companies Hiring", value: "2,000+" },
            { label: "Students Placed", value: "4,500+" },
            { label: "Industry Experts", value: "1,200+" },
            { label: "Highest Package", value: "1.5 Cr" },
            { label: "Highest Salary Hike", value: "500%" },
          ].map((s) => (
            <div key={s.label} className="bg-background px-4 py-5 text-center sm:text-left">
              <p className="text-xs text-muted-foreground sm:text-sm">{s.label}</p>
              <p className="mt-1 text-xl font-extrabold text-foreground sm:text-2xl">{s.value}</p>
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
    name: "Vivek Tandale",
    role: "Data Analyst at Bain & Company",
    description:
      "A passionate learner from Haveri, Karnataka, who switched from an Associate Analyst role to pursuing his dream career in Data Science.",
    image: portrait1,
  },
  {
    name: "Sneha Reddy",
    role: "ML Engineer at Microsoft",
    description:
      "From a non-tech background to building production ML systems — Sneha's journey shows how dedication and the right guidance transform careers.",
    image: portrait2,
  },
];

function SuccessStoriesSection() {
  const [idx, setIdx] = useState(0);
  const current = successStories[idx];
  const total = successStories.length;

  return (
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
                  aria-label="Previous story"
                  onClick={() => setIdx((p) => (p - 1 + total) % total)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  aria-label="Next story"
                  onClick={() => setIdx((p) => (p + 1) % total)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground hover:bg-muted transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Right: video card */}
            <div className="relative overflow-hidden rounded-xl bg-blue-700">
              <div className="aspect-video w-full">
                <img
                  src={current.image}
                  alt={current.name}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/70 via-blue-700/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-background px-3 py-1 text-xs font-bold text-foreground">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-brand text-[10px] text-primary-foreground">P</span>
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
              <button
                aria-label="Play video"
                className="absolute inset-0 m-auto grid h-14 w-14 place-items-center rounded-full bg-neutral-900/90 text-white shadow-lg hover:scale-105 transition-transform"
              >
                <Play className="h-6 w-6 fill-current" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. ALUMNI TRIUMPH — card grid
   ============================================================ */

const alumniCards = [
  { name: "Sagarika Keshri", company: "Yoga Bar", before: "Fresher", after: "Data Analyst", photo: portrait2 },
  { name: "Sonakshi Bhatt", company: "Digit88 Technologies", before: "Patent Research Analyst", after: "Data Analyst", photo: learner1 },
  { name: "Suruchi Singh", company: "Public Sapient", before: "Fresher", after: "Data Analyst", photo: learner2 },
  { name: "Animesh Bhatt", company: "CommsCredible", before: "Software Development Engineer", after: "Data Analyst", photo: portrait1 },
  { name: "Rahul Verma", company: "Swiggy", before: "Mechanical Engineer", after: "Data Scientist", photo: learner3 },
  { name: "Priya Sharma", company: "Microsoft", before: "Accountant", after: "ML Engineer", photo: portrait3 },
  { name: "Karan Mehta", company: "Paytm", before: "Sales Executive", after: "Business Analyst", photo: learner4 },
  { name: "Anita Rao", company: "Google", before: "Teacher", after: "Cloud Engineer", photo: learner5 },
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
                  href="#"
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
    name: "Yogesh Mane",
    role: "Aspiring Data Scientist",
    photo: null,
    text:
      "In just one month of the Data Science course at Phinco Elite, I've delved into Excel basics, mastering functions like VLOOKUP and Pivot Tables. Theory seamlessly blends with hands-on practice, guided by exceptional instructors. The support has been instrumental in my progress, with a supportive community and an innovative curriculum featuring real-world assignments and dedicated doubt sessions.",
  },
  {
    name: "Varsha Jaiswal",
    role: "Aspiring Data Scientist",
    photo: learner2,
    text:
      "Joining Phinco Elite has been a transformative decision for me. Over the past three months, I have experienced exceptional management, outstanding instructors, and dedicated mentors. The support and guidance I have received have been invaluable to my growth. The instructors are not just knowledgeable but also incredibly approachable and always willing to assist, making the learning process engaging and effective.",
  },
  {
    name: "Alamelu J Mahindra",
    role: "Data Analyst",
    photo: portrait2,
    text:
      "Through completing three valuable hands-on experiences in real-world scenarios. Mentors guided me through every project and motivated me to explore tools like Power BI. The structured curriculum and continuous support from the team made the entire journey meaningful and impactful.",
  },
  {
    name: "Ravi Kumar",
    role: "ML Engineer",
    photo: portrait1,
    text:
      "The placement support team is phenomenal. From resume reviews to mock interviews, they prepared me for every round. Within weeks of finishing the program I had multiple offers to choose from.",
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

