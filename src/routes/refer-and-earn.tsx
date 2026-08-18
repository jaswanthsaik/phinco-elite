import { Header } from "@/components/landing/Header";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";
import ReferAndEarn from "@/components/landing/ReferAndEarn";
import { createFileRoute } from "@tanstack/react-router";
import { FAQSection } from "@/components/programs/FAQSection";

export const Route = createFileRoute("/refer-and-earn")({
  head: () => ({
    meta: [
      { title: "Refer and Earn — Phinco Elite" },
      {
        name: "description",
        content:
          "Refer your friends to Phinco Elite and enjoy rewards, discounts, and easy referral benefits.",
      },
      { property: "og:title", content: "Refer and Earn — Phinco Elite" },
      {
        property: "og:description",
        content:
          "Share your referral link and earn rewards when your friends enroll with Phinco Elite.",
      },
    ],
  }),
  component: ReferAndEarnPage,
});

function ReferAndEarnPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ReferAndEarn />
        <FAQSection />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
