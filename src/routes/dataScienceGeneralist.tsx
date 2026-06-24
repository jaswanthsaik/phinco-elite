import { Header } from "@/components/landing/Header";
import { RealStories } from "@/components/landing/RealStories";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { TalkToTeam } from "@/components/landing/TalkToTeam";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";
import { WhyChooseLearnbay } from "@/components/landing/WhyChooseLearnbay";
import { AdmissionProcess } from "@/components/programs/AdmissionProcess";
import { AlumniCompanies } from "@/components/programs/AlumniCompanies";
import { CertificationCourse } from "@/components/programs/CertificationCourse";
import { ExploreSyllabus } from "@/components/programs/ExploreSyllabus";
import { FAQSection } from "@/components/programs/FAQSection";
import { FeeBatchDetails } from "@/components/programs/FeeBatchDetails";
import { IndustryProjects } from "@/components/programs/IndustryProjects";
import { LearningToPlacement } from "@/components/programs/LearningToPlacement";
import { MeetOurMentors } from "@/components/programs/MeetOurMentors";
import { OthersVsLearnbayProgram } from "@/components/programs/OthersVsLearnbayProgram";
import { PlacementSupport } from "@/components/programs/PlacementSupport";
import { ProgramHero } from "@/components/programs/ProgramHero";
import { ProgrammingTools } from "@/components/programs/ProgrammingTools";
import { SupportThatMatters } from "@/components/programs/SupportThatMatters";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dataScienceGeneralist")({
  head: () => ({
    meta: [
      { title: "Data Science & GenAI for Generalist — Phinco Elite" },
      {
        name: "description",
        content:
          "Become an IBM Certified AI Professional. 250+ live hours, 30+ hands-on projects, and 1-on-1 mentor support to integrate GenAI into your career.",
      },
      { property: "og:title", content: "Data Science & GenAI for Generalist — Phinco Elite" },
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
        <ProgramHero titleTop="Data Science & GenAI" titleHighlight="for Generalist" />
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
