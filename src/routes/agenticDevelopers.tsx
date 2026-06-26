import { AgenticDevelopersHero } from "@/components/Agentic-developers/AgenticDevelopersHero";
import { Header } from "@/components/landing/Header";
import { RealStories } from "@/components/landing/RealStories";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { TalkToTeam } from "@/components/landing/TalkToTeam";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";
import { WhyChooseLearnbay } from "@/components/landing/WhyChooseLearnbay";
import { AdmissionProcess } from "@/components/programs/agenticDevelopers/AdmissionProcess";
import { AlumniCompanies } from "@/components/programs/agenticDevelopers/AlumniCompanies";
import { CertificationCourse } from "@/components/programs/agenticDevelopers/CertificationCourse";
import { ExploreSyllabus } from "@/components/programs/agenticDevelopers/ExploreSyllabus";
import { FAQSection } from "@/components/programs/agenticDevelopers/FAQSection";
import { FeeBatchDetails } from "@/components/programs/agenticDevelopers/FeeBatchDetails";
import { IndustryProjects } from "@/components/programs/agenticDevelopers/IndustryProjects";
import { LearningToPlacement } from "@/components/programs/agenticDevelopers/LearningToPlacement";
import { MeetOurMentors } from "@/components/programs/agenticDevelopers/MeetOurMentors";
import { OthersVsLearnbayProgram } from "@/components/programs/agenticDevelopers/OthersVsLearnbayProgram";
import { PlacementSupport } from "@/components/programs/agenticDevelopers/PlacementSupport";
import { ProgrammingTools } from "@/components/programs/agenticDevelopers/ProgrammingTools";
import { SupportThatMatters } from "@/components/programs/agenticDevelopers/SupportThatMatters";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/agenticDevelopers")({
  head: () => ({
    meta: [
      { title: "Agentic for Developers — Phinco Elite" },
      {
        name: "description",
        content:
          "Become an IBM Certified AI Professional. 250+ live hours, 30+ hands-on projects, and 1-on-1 mentor support to integrate GenAI into your career.",
      },
      { property: "og:title", content: "Agentic for Developers — Phinco Elite" },
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
        <AgenticDevelopersHero />
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
