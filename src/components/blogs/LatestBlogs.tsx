import { Clock, Search, User } from "lucide-react";
import { useMemo, useState } from "react";
import { TOPIC_SECTIONS } from "./topic-data";
import type { TopicBlog } from "./TopicList";
import { TopicList } from "./TopicList";

/** Flatten all blogs across topics with their parent topic label. */
const ALL_BLOGS: (TopicBlog & { topic: string })[] = TOPIC_SECTIONS.flatMap(
  (s) => s.blogs.map((b) => ({ ...b, topic: s.topic })),
);

/** Deterministic shuffle so SSR + client render the same order (no hydration mismatch). */
function shuffle<T>(arr: T[], seed = 42): T[] {
  const a = arr.slice();
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function LatestBlogs() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  // Random pick across all topics — memoised so it doesn't re-shuffle on re-render.
  const randomPicks = useMemo(() => shuffle(ALL_BLOGS).slice(0, 6), []);

  const searchResults = useMemo(() => {
    if (!q) return [];
    return ALL_BLOGS.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.topic.toLowerCase().includes(q) ||
        (b.description?.toLowerCase().includes(q) ?? false),
    );
  }, [q]);

  return (
    <div className="w-full bg-background">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-7 w-1.5 rounded-sm bg-brand" />
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Latest Blogs
          </h2>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative max-w-xl"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter search term..."
            className="w-full rounded-md border border-border bg-background px-4 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-brand"
          >
            <Search className="h-5 w-5" />
          </button>
        </form>
      </section>

      {q ? (
        <SmallCardGrid
          title={`${searchResults.length} result${searchResults.length === 1 ? "" : "s"} for "${query}"`}
          blogs={searchResults}
          emptyMessage="No blogs found."
        />
      ) : (
        <>
          <SmallCardGrid title="" blogs={randomPicks} />
          {TOPIC_SECTIONS.map((s) => (
            <TopicList
              key={s.slug}
              topic={s.topic}
              slug={s.slug}
              blogs={s.blogs}
            />
          ))}
        </>
      )}
    </div>
  );
}

/** Compact card grid used both for the "random" picks and the search results. */
function SmallCardGrid({
  title,
  blogs,
  emptyMessage,
}: {
  title?: string;
  blogs: TopicBlog[];
  emptyMessage?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-4">
      {title && (
        <h3 className="mb-6 text-lg font-semibold text-foreground">{title}</h3>
      )}
      {blogs.length === 0 ? (
        <p className="py-8 text-sm text-muted-foreground">{emptyMessage}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <SmallOverlayCard key={b.id} blog={b} />
          ))}
        </div>
      )}
    </section>
  );
}

function SmallOverlayCard({ blog }: { blog: TopicBlog }) {
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
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-background/90 text-brand">
            <User className="h-4 w-4" />
          </span>
          <div className="flex flex-col text-xs">
            <span className="font-semibold text-primary-foreground">
              {blog.author}
            </span>
            <span className="flex items-center gap-2 mt-0.5 text-primary-foreground/80">
              {blog.date}
              <span className="h-1 w-1 rounded-full bg-primary-foreground/70" />
              <Clock className="h-3 w-3" />
              {blog.readTime}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
