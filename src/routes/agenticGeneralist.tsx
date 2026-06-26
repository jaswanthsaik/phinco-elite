import { AgenticGeneralistHero } from "@/components/Agentic-generalist/AgenticGeneralistHero";
import { Header } from "@/components/landing/Header";
import { RealStories } from "@/components/landing/RealStories";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { TalkToTeam } from "@/components/landing/TalkToTeam";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";
import { WhyChooseLearnbay } from "@/components/landing/WhyChooseLearnbay";
import { AdmissionProcess } from "@/components/programs/agenticGeneralist/AdmissionProcess";
import { AlumniCompanies } from "@/components/programs/agenticGeneralist/AlumniCompanies";
import { CertificationCourse } from "@/components/programs/agenticGeneralist/CertificationCourse";
import { ExploreSyllabus } from "@/components/programs/agenticGeneralist/ExploreSyllabus";
import { FAQSection } from "@/components/programs/agenticGeneralist/FAQSection";
import { FeeBatchDetails } from "@/components/programs/agenticGeneralist/FeeBatchDetails";
import { IndustryProjects } from "@/components/programs/agenticGeneralist/IndustryProjects";
import { LearningToPlacement } from "@/components/programs/agenticGeneralist/LearningToPlacement";
import { MeetOurMentors } from "@/components/programs/agenticGeneralist/MeetOurMentors";
import { OthersVsLearnbayProgram } from "@/components/programs/agenticGeneralist/OthersVsLearnbayProgram";
import { PlacementSupport } from "@/components/programs/agenticGeneralist/PlacementSupport";
import { ProgrammingTools } from "@/components/programs/agenticGeneralist/ProgrammingTools";
import { SupportThatMatters } from "@/components/programs/agenticGeneralist/SupportThatMatters";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/agenticGeneralist")({
  head: () => ({
    meta: [
      { title: "Agentic for Generalists — Phinco Elite" },
      {
        name: "description",
        content:
          "Become an IBM Certified AI Professional. 250+ live hours, 30+ hands-on projects, and 1-on-1 mentor support to integrate GenAI into your career.",
      },
      { property: "og:title", content: "Agentic for Generalists — Phinco Elite" },
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
        <AgenticGeneralistHero />
        <AlumniCompanies />
        <LearningToPlacement />
        <SupportThatMatters />
        <WhyChooseLearnbay />
        <PlacementSupport />
        <RealStories />
        <MeetOurMentors />
        <IndustryProjects />
        <OthersVsLearnbayProgram />
        <ExploreSyllabus />
        <ProgrammingTools />
        <CertificationCourse />
        <FeeBatchDetails />
        <AdmissionProcess />
        <TalkToTeam />
        <FAQSection />
      </main>
      <SiteFooter />


      <a
        href="https://wa.me/917675030044"
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
