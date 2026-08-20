import { createFileRoute } from "@tanstack/react-router";
import TermsConditions from "@/components/landing/Terms&Conditions";

export const Route = createFileRoute("/terms-and-conditions")({
  component: TermsConditions,
});