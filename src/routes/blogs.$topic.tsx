import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { TopicExpandedGrid } from "@/components/blogs/TopicList";
import { getTopicBySlug } from "@/components/blogs/topic-data";

export const Route = createFileRoute("/blogs/$topic")({
  loader: ({ params }) => {
    const section = getTopicBySlug(params.topic);
    if (!section) throw notFound();
    return section;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.topic ?? "Topic"} — Blogs` },
      {
        name: "description",
        content: `Read all ${loaderData?.topic ?? ""} articles from PHINCO Elite.`,
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center text-muted-foreground">
      Topic not found.
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center text-muted-foreground">
      {error.message}
    </div>
  ),
  component: TopicPage,
});

function TopicPage() {
  const section = Route.useLoaderData();
  const title = section.expandedTitle ?? `${section.topic} Blogs, Projects & News`;

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-brand"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blogs
        </Link>
      </div>
      <TopicExpandedGrid title={title} blogs={section.blogs} />
    </>
  );
}
