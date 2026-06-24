import { createFileRoute } from "@tanstack/react-router";
import { BlogHero } from "@/components/blogs/BlogHero";
import { LatestBlogs } from "@/components/blogs/LatestBlogs";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Our Blogs — PHINCO Elite" },
      {
        name: "description",
        content:
          "Latest articles on Data Science, AI, and career growth from PHINCO Elite.",
      },
      { property: "og:title", content: "Our Blogs — PHINCO Elite" },
      {
        property: "og:description",
        content: "Latest articles on Data Science, AI, and career growth.",
      },
      { property: "og:url", content: "https://phinco-elite.lovable.app/blogs" },
    ],
    links: [
      { rel: "canonical", href: "https://phinco-elite.lovable.app/blogs" },
    ],
  }),
  component: BlogsIndexPage,
});

function BlogsIndexPage() {
  return (
    <>
      <BlogHero />
      <LatestBlogs />
    </>
  );
}