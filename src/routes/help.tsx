import { createFileRoute } from "@tanstack/react-router";
import HelpSupport from "@/components/landing/Help";

export const Route = createFileRoute("/help")({
  component: HelpSupport,
});