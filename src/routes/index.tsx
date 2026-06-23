import { AICoLabExperience } from "@/components/landing/AICoLabExperience";
import { CertificationTrack } from "@/components/landing/CertificationTrack";
import { DomainsStrip } from "@/components/landing/DomainsStrip";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { IndustryLeading } from "@/components/landing/IndustryLeading";
import { InsiderGlimpses } from "@/components/landing/InsiderGlimpses";
import { KickstartPrograms } from "@/components/landing/KickstartPrograms";
import { MediaSpotlight } from "@/components/landing/MediaSpotlight";
import { OthersVsLearnbay } from "@/components/landing/OthersVsLearnbay";
import { RealStories } from "@/components/landing/RealStories";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { TalkToTeam } from "@/components/landing/TalkToTeam";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";
import { WhyChooseLearnbay } from "@/components/landing/WhyChooseLearnbay";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Phinco Elite" },
      {
        name: "description",
        content:
          "Advance your career with real industry projects. India's #1 project-based upskilling platform for working professionals across Data Science, GenAI, Cloud and more.",
      },
      { property: "og:title", content: "Phinco Elite" },
      {
        property: "og:description",
        content: "Master in-demand skills through industry certified programs and get hired.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <DomainsStrip />
        <CertificationTrack />
        <KickstartPrograms />
        <AICoLabExperience />
        <WhyChooseLearnbay />
        <RealStories />
        <IndustryLeading />
        <OthersVsLearnbay />
        <InsiderGlimpses />
        <MediaSpotlight />
        <TalkToTeam />
      </main>
      <SiteFooter />

      <a
        href="https://wa.me/917675030044"
        className="fixed bottom-8 right-6 z-30 flex h-[45px] w-[45px] items-center justify-center rounded-xl bg-[#00c853] shadow-lg transition hover:scale-105"
        aria-label="WhatsApp" target="_blank"
      >
        <WhatsAppFab />
      </a>
    </div>
  );
}
