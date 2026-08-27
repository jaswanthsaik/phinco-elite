import aboutus1 from "@/assets/know.png";
import aboutus2 from "@/assets/aboutus-2.jpg";
import aboutus3 from "@/assets/aboutus-3.png";
import portrait1 from "@/assets/sriiii.jpeg";
import portrait2 from "@/assets/usha.jpeg";
import portrait3 from "@/assets/kenen.jpeg";
import AboutSection from "@/components/landing/AboutSection";
import AboutWho from "@/components/landing/aboutwho";
import DigitalSkill from "@/components/landing/digitalskill";
import DriveVision from "@/components/landing/DriveVision";
import { Header } from "@/components/landing/Header";
import HiringCompaniesSection from "@/components/landing/HiringCompaniesSection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronsUp, GraduationCap, Handshake, IdCard, Layers, Linkedin, Maximize2, TrendingUp, Users } from "lucide-react";
import Aspire from "@/components/landing/aspire";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About us — Phinco Elite" },
      { name: "description", content: "Learn about Phinco Elite — our vision, mission, core team, and placement highlights empowering aspirants to succeed." },
      { property: "og:title", content: "About us — Phinco Elite" },
      { property: "og:description", content: "Vision, mission, core team and placement highlights from Phinco Elite." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <DigitalSkill />
        <AboutWho />
        <AboutSection />
        <Aspire />
        <HiringCompaniesSection />
        <KnowledgeIsPower />
        <DriveVision />
        {/* <VisionSection />
        <MissionSection /> */}
        <CoreTeamSection />
        <PlacementHighlightsSection />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}

/* 1. Knowledge is power banner */
function KnowledgeIsPower() {
  return (
    <section className="bg-[oklch(0.97_0.02_240)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        <h1 className="text-2xl font-extrabold leading-tight text-foreground sm:text-3xl md:text-4xl lg:text-[2.5rem]">
          <span className="bg-amber-300/80 px-1 text-foreground">"Knowledge is power," - (Francis Bacon)</span>{" "}
          And we want to empower all our aspirants to succeed.
        </h1>
        <div className="flex justify-center lg:justify-end">
          <img src={aboutus1} alt="Knowledge is power" loading="lazy" width={1024} height={768} className="w-full max-w-md h-auto object-contain" />
        </div>
      </div>
    </section>
  );
}

/* 2. Vision */
function VisionSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Vision</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg max-w-md mx-auto lg:mx-0">
            To lead the industrial training sector by generating demanding professionals with future proof technical skills and knowledge.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
            <FeatureBullet icon={<IdCard className="h-5 w-5" />} text="Provide scopes to techies & non-techies all alike." color="bg-brand" />
            <FeatureBullet icon={<Layers className="h-5 w-5" />} text="Ensure an extremely personalized learning experience." color="bg-amber-400" />
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <img src={aboutus2} alt="Vision" loading="lazy" width={1024} height={768} className="w-full max-w-lg h-auto object-contain" />
        </div>
      </div>
    </section>
  );
}

/* 3. Mission */
function MissionSection() {
  return (
    <section className="bg-[oklch(0.98_0.01_240)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div className="flex justify-center">
          <img src={aboutus3} alt="Mission" loading="lazy" width={1024} height={768} className="w-full max-w-lg h-auto object-contain" />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Mission</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg max-w-md mx-auto lg:mx-0">
            Safeguarding your career, even under the most unstable job market scenario, via the acquisition of emerging technology-based unique skills.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
            <FeatureBullet icon={<Users className="h-5 w-5" />} text="Literate everyone with data science knowledge." color="bg-brand" />
            <FeatureBullet icon={<Maximize2 className="h-5 w-5" />} text="Bust the myth that only IT pros can have lucrative careers." color="bg-amber-400" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureBullet({ icon, text, color }: { icon: React.ReactNode; text: string; color: string }) {
  return (
    <div className="flex flex-col items-center sm:items-start gap-3">
      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg ${color} text-white shadow-sm`}>
        {icon}
      </span>
      <p className="text-sm font-medium text-foreground/80 text-center sm:text-left">{text}</p>
    </div>
  );
}

/* 4. Core team */
const team = [
  {
    name: "SRIKANTH K",
    role: "Founder",
    photo: portrait1,
    linkedin: "https://www.linkedin.com/in/srikanth-k-59870825b/",
    quote:
      "With over 15+ years of experience across the IT and Engineering industries,With six ventures under the PHINCO Group and Passionate about entrepreneurship and technology, Srikanth actively supports promising startups through strategic investments and encourages emerging innovations, particularly in the field of Artificial Intelligence. His vision is to create an ecosystem where innovation, technology, and entrepreneurship come together to shape the future.",
  },
  {
    name: "Prathyusha P",
    role: "Co-Founder",
    photo: portrait2,
    linkedin: "https://www.linkedin.com/in/pratyusha-p-342124156/",
    quote:
      "With over 12+ years of experience working with diverse startups and leading EdTech organizations and brings strong expertise in operations, business processes, and organizational management. As the Co-Founder of PHINCO ELITE, she plays a key role in overseeing day-to-day operations and ensuring the smooth functioning of various business activities. Her experience and strategic approach help drive efficiency, coordination, and sustainable growth across the organization.",
  },
  {
    name: "Kenen Bhandhavi",
    role: "Branch Head-Hyderabad",
    photo: portrait3,
    linkedin: "https://www.linkedin.com/in/kenen-bhandhavi-551388165/",
    quote:
      "With over 10+ years of experience in the EdTech industry, Kenen B brings extensive expertise in career guidance, candidate profiling, and team management. Having worked with top-notch companies throughout his career, he has gained valuable experience in guiding professionals toward the right career opportunities and helping them achieve their goals.",
  },
];

function CoreTeamSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <h2 className="text-center text-3xl font-extrabold text-foreground sm:text-4xl">Our Core Team</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {team.map((m) => (
            <article key={m.name} className="flex flex-col max-w-xs">
              <div className="aspect-[4/5] w-full max-w-[240px] mx-auto overflow-hidden rounded-lg bg-muted">
                <img src={m.photo} alt={m.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold">
                  <span className="text-brand">{m.name}</span>{" "}
                  <span className="text-foreground/80 font-medium">({m.role})</span>
                </h3>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                  className="grid h-7 w-7 shrink-0 place-items-center rounded bg-[#0A66C2] text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-justify">{m.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 5. Placement Highlights */
const highlights = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    label: "Highest Salary Hike",
    color: "bg-blue-100 text-blue-600 border-blue-200",
  },
  {
    icon: <ChevronsUp className="h-6 w-6" />,
    label: "Average Salary Hike",
    color: "bg-green-100 text-green-600 border-green-200",
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    label: "Hiring Partners",
    color: "bg-orange-100 text-orange-600 border-orange-200",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    label: "Careers Reshaped",
    color: "bg-purple-100 text-purple-600 border-purple-200",
  },
];

function PlacementHighlightsSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="rounded-2xl border border-brand/20 bg-background p-6 sm:p-10">
          <h2 className="text-center text-2xl font-extrabold text-foreground sm:text-3xl md:text-4xl">
            Placement Highlights
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight) => (
              <div
                key={highlight.label}
                className={`flex flex-col items-center gap-4 rounded-xl border px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${highlight.color}`}
              >
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-white/80 shadow-sm">
                  {highlight.icon}
                </span>

                <p className="text-sm font-semibold sm:text-base">
                  {highlight.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}