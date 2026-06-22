import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";
import { DataScienceHero } from "@/components/programs/DataScienceHero";
import { AlumniCompanies } from "@/components/programs/AlumniCompanies";
import { LearningToPlacement } from "@/components/programs/LearningToPlacement";
import { SupportThatMatters } from "@/components/programs/SupportThatMatters";
import { PlacementSupport } from "@/components/programs/PlacementSupport";
import { WhyChooseLearnbay } from "@/components/landing/WhyChooseLearnbay";
import { RealStories } from "@/components/landing/RealStories";

export const Route = createFileRoute("/programs/data-science-ai")({
  head: () => ({
    meta: [
      { title: "Data Science and GenAI Program — Phinco Elite" },
      {
        name: "description",
        content:
          "Become an IBM Certified AI Professional. 250+ live hours, 30+ hands-on projects, and 1-on-1 mentor support to integrate GenAI into your career.",
      },
      { property: "og:title", content: "Data Science and GenAI Program — Phinco Elite" },
      {
        property: "og:description",
        content: "Industry-ready Data Science & GenAI certification with real AI projects and placement support.",
      },
    ],
  }),
  component: DataScienceAIPage,
});

function DataScienceAIPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <DataScienceHero />
        <AlumniCompanies />
        <LearningToPlacement />
        <SupportThatMatters />
        <WhyChooseLearnbay />
        <PlacementSupport />
        <RealStories />
      </main>
      <SiteFooter />

      <a
        href="https://wa.me/"
        className="fixed bottom-8 right-6 z-30 flex h-[45px] w-[45px] items-center justify-center rounded-xl bg-[#00c853] shadow-lg transition hover:scale-105"
        aria-label="WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppFab />
      </a>
    </div>
  );
}
