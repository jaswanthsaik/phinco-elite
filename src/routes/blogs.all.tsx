import { createFileRoute } from "@tanstack/react-router";
import AllBlogs from "@/components/blogs/AllBlogs";

export const Route = createFileRoute("/blogs/all")({
  head: () => ({
    meta: [{ title: "All Blogs — PHINCO Elite" }],
  }),
  component: AllBlogs,
});