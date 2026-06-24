import { Link } from "@tanstack/react-router";
import { Clock, User } from "lucide-react";

export interface TopicBlog {
  id: number | string;
  title: string;
  description?: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tag?: string;
}

interface TopicListProps {
  topic: string;
  blogs: TopicBlog[];
  /** Slug used to navigate to the full topic page when there are >3 blogs. */
  slug?: string;
}

/**
 * Reusable Topic List
 * - 1–2 blogs: stacked horizontal cards (Screen 3)
 * - 3 blogs:   2 stacked horizontal cards + 1 large vertical card (Screen 4)
 * - >3 blogs:  Screen 4 layout for the first 3 + "View More" button that
 *              navigates to /blogs/$topic showing the Screen 5 layout.
 */
export function TopicList({ topic, blogs, slug }: TopicListProps) {
  const visible = blogs.slice(0, 3);
  const hasMore = !!slug;

  return (
    <section className="w-full bg-background py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="h-7 w-1.5 rounded-sm bg-brand" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              {topic}
            </h2>
          </div>
          {hasMore ? (
            <Link
              to="/blogs/$topic"
              params={{ topic: slug! }}
              className="inline-flex items-center rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-brand/90 transition-colors"
            >
              View More
            </Link>
          ) : (
            <span className="inline-flex items-center rounded-md bg-brand/60 px-5 py-2.5 text-sm font-semibold text-primary-foreground/90 cursor-default">
              View More
            </span>
          )}
        </div>

        {visible.length <= 2 ? (
          <div className="grid grid-cols-1 gap-6">
            {visible.map((b) => (
              <HorizontalCard key={b.id} blog={b} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col gap-6">
              {visible.slice(0, 2).map((b) => (
                <HorizontalCard key={b.id} blog={b} />
              ))}
            </div>
            <FeatureCard blog={visible[2]} topic={topic} />
          </div>
        )}
      </div>
    </section>
  );
}

/** Standalone expanded grid (Screen 5) — exported for the topic detail page. */
export function TopicExpandedGrid({
  title,
  blogs,
}: {
  title: string;
  blogs: TopicBlog[];
}) {
  return (
    <section className="w-full bg-background py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-10">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <OverlayCard key={b.id} blog={b} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Sub-components ---------- */

function HorizontalCard({ blog }: { blog: TopicBlog }) {
  return (
    <a
      href="/blogs"
      className="group grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-5 rounded-xl border border-border bg-card p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="overflow-hidden rounded-lg aspect-[16/10] sm:aspect-auto sm:h-[170px]">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold leading-snug text-foreground group-hover:text-brand transition-colors">
          {blog.title}
        </h3>
        {blog.description && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
            {blog.description}
          </p>
        )}
        <AuthorRow blog={blog} className="mt-auto pt-4" />
      </div>
    </a>
  );
}

function FeatureCard({ blog, topic }: { blog: TopicBlog; topic: string }) {
  return (
    <a
      href="/blogs"
      className="group flex flex-col rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="overflow-hidden rounded-lg aspect-[16/10]">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex flex-col flex-1">
        <span className="inline-flex w-fit items-center rounded-md border border-brand/40 px-2.5 py-1 text-xs font-medium text-brand">
          {blog.tag ?? topic}
        </span>
        <h3 className="mt-3 text-lg font-bold leading-snug text-foreground group-hover:text-brand transition-colors">
          {blog.title}
        </h3>
        {blog.description && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-4">
            {blog.description}
          </p>
        )}
        <AuthorRow blog={blog} className="mt-auto pt-4" />
      </div>
    </a>
  );
}

function OverlayCard({ blog }: { blog: TopicBlog }) {
  return (
    <a
      href="/blogs"
      className="group relative overflow-hidden rounded-xl block aspect-[4/3] shadow-md"
    >
      <img
        src={blog.image}
        alt={blog.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
      <div className="relative h-full flex flex-col justify-end p-5 text-primary-foreground">
        <h3 className="text-lg font-bold leading-snug line-clamp-3 mb-4">
          {blog.title}
        </h3>
        <AuthorRow blog={blog} variant="dark" />
      </div>
    </a>
  );
}

function AuthorRow({
  blog,
  className = "",
  variant = "light",
}: {
  blog: TopicBlog;
  className?: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className={`grid h-9 w-9 place-items-center rounded-full ${
          isDark ? "bg-background/90" : "bg-muted"
        } text-brand`}
      >
        <User className="h-4 w-4" />
      </span>
      <div className="flex flex-col text-xs">
        <span
          className={`font-semibold ${
            isDark ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {blog.author}
        </span>
        <span
          className={`flex items-center gap-2 mt-0.5 ${
            isDark ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          {blog.date}
          <span
            className={`h-1 w-1 rounded-full ${
              isDark ? "bg-primary-foreground/70" : "bg-muted-foreground/60"
            }`}
          />
          <Clock className="h-3 w-3" />
          {blog.readTime}
        </span>
      </div>
    </div>
  );
}
