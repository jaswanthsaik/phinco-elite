import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";

export const Route = createFileRoute("/blogs")({
  component: BlogsLayout,
});

function BlogsLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
