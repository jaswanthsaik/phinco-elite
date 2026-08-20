import { createFileRoute } from "@tanstack/react-router";
import RefundPolicy from "@/components/landing/RefundPolicy";

export const Route = createFileRoute("/return-and-refund-policy")({
  component: RefundPolicy,
});