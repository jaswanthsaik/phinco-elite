import { createFileRoute } from "@tanstack/react-router";
import PrivacyPolicy from "@/components/landing/PrivacyPolicy";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
});