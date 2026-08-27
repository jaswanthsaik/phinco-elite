import { createFileRoute } from "@tanstack/react-router";
import BlogInfo from "@/components/blogs/BlogInfo";

export const Route = createFileRoute("/BlogInfo")({
  validateSearch: (search: Record<string, unknown>) => ({
    topic: String(search.topic ?? ""),
  }),
  head: () => ({
    meta: [{ title: "Blog — PHINCO Elite" }],
  }),
  component: BlogInfo,
});
