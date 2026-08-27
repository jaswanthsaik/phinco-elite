import { createFileRoute } from "@tanstack/react-router";
import AdminBlogs from "@/components/blogs/AdminBlogs";

export const Route = createFileRoute("/adminblogs")({
  head: () => ({
    meta: [{ title: "Add Blog — PHINCO Elite" }],
  }),
  component: AdminBlogs,
});
