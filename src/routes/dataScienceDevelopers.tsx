import { Header } from "@/components/landing/Header";
import { RealStories } from "@/components/landing/RealStories";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { TalkToTeam } from "@/components/landing/TalkToTeam";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";
import { WhyChooseLearnbay } from "@/components/landing/WhyChooseLearnbay";
import { AdmissionProcess } from "@/components/programs/dataScienceDevelopers/AdmissionProcess";
import { AlumniCompanies } from "@/components/programs/dataScienceDevelopers/AlumniCompanies";
import { CertificationCourse } from "@/components/programs/dataScienceDevelopers/CertificationCourse";
import { ExploreSyllabus } from "@/components/programs/dataScienceDevelopers/ExploreSyllabus";
import { FAQSection } from "@/components/programs/dataScienceDevelopers/FAQSection";
import { FeeBatchDetails } from "@/components/programs/dataScienceDevelopers/FeeBatchDetails";
import { IndustryProjects } from "@/components/programs/dataScienceDevelopers/IndustryProjects";
import { LearningToPlacement } from "@/components/programs/dataScienceDevelopers/LearningToPlacement";
import { MeetOurMentors } from "@/components/programs/dataScienceDevelopers/MeetOurMentors";
import { OthersVsLearnbayProgram } from "@/components/programs/dataScienceDevelopers/OthersVsLearnbayProgram";
import { PlacementSupport } from "@/components/programs/dataScienceDevelopers/PlacementSupport";
import { ProgramHero } from "@/components/programs/dataScienceDevelopers/ProgramHero";
import { ProgrammingTools } from "@/components/programs/dataScienceDevelopers/ProgrammingTools";
import { SupportThatMatters } from "@/components/programs/dataScienceDevelopers/SupportThatMatters";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dataScienceDevelopers")({
  head: () => ({
    meta: [
      { title: "Data Science & GenAI for Developers — Phinco Elite" },
      {
        name: "description",
        content:
          "Become an IBM Certified AI Professional. 250+ live hours, 30+ hands-on projects, and 1-on-1 mentor support to integrate GenAI into your career.",
      },
      { property: "og:title", content: "Data Science & GenAI for Developers — Phinco Elite" },
      {
        property: "og:description",
        content: "Industry-ready Data Science & GenAI certification with real AI projects and placement support.",
      },
    ],
  }),
  component: ProgramPage,
});

function ProgramPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProgramHero titleTop="Data Science & GenAI" titleHighlight="for Developers" />
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
