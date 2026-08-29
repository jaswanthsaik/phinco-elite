import { useEffect, useState } from "react";
import { Link, useSearch } from "@tanstack/react-router";
import { ArrowLeft, Eye, Play, Share2, X } from "lucide-react";
import { getBlogById, type Blog, type BlogContentBlock } from "@/services/blogService";

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    let videoId = "";

    if (parsedUrl.hostname.includes("youtu.be")) {
      videoId = parsedUrl.pathname.slice(1).split("/")[0];
    } else if (parsedUrl.pathname.includes("/shorts/")) {
      videoId = parsedUrl.pathname.split("/shorts/")[1]?.split("/")[0] || "";
    } else if (parsedUrl.pathname.includes("/embed/")) {
      videoId = parsedUrl.pathname.split("/embed/")[1]?.split("/")[0] || "";
    } else {
      videoId = parsedUrl.searchParams.get("v") || "";
    }

    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
      : "";
  } catch {
    return "";
  }
}

const BlogInfo = () => {
  const search = useSearch({ from: "/BlogInfo" }) as { topic?: string };
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      const data = await getBlogById(search.topic || "");
      setBlog(data);
      setActiveSection(data?.content?.toc?.[0]?.id || "");
      setLoading(false);
    };

    fetchBlog();
  }, [search.topic]);

  useEffect(() => {
    if (!blog?.content?.toc?.length) return;

    const updateActiveSection = () => {
      const topOffset = 140;
      let nextId = blog.content?.toc[0]?.id || "";

      blog.content?.toc.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= topOffset) {
          nextId = item.id;
        }
      });

      setActiveSection(nextId);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [blog]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 96;
    const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setActiveSection(id);
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <main className="grid min-h-[60vh] place-items-center bg-background text-muted-foreground">
        Loading article...
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="grid min-h-[60vh] place-items-center bg-background px-4 text-center">
        <div>
          <h1 className="text-2xl font-bold">Article not found</h1>
          <Link to="/blogs" className="mt-4 inline-block text-primary hover:underline">
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  const toc = blog.content?.toc || [];

  return (
    <main className="bg-background px-4 py-8 font-sans text-foreground sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blogs
        </Link>

        {/* <p className="mt-6 text-sm text-muted-foreground">
          Home / Resources / {blog.category} / {blog.title}
        </p> */}

        <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight sm:text-5xl">
          {blog.title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          {blog.author ? <span>By {blog.author}</span> : null}
          <button
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 hover:bg-muted"
            onClick={copyLink}
            type="button"
          >
            <Share2 className="h-4 w-4" />
            {copied ? "Link copied" : "Share this article"}
          </button>
          <span>Last updated on {blog.date}</span>
          {blog.views ? (
            <span className="inline-flex items-center gap-1">
              <Eye className="h-4 w-4" />
              {blog.views.toLocaleString()}
            </span>
          ) : null}
        </div>

        {blog.image ? (
          blog.video ? (
            <button
              aria-label="Play video"
              className="relative mt-8 block w-full overflow-hidden rounded-xl"
              onClick={() => setActiveVideo(blog.video || null)}
              type="button"
            >
              <img
                alt={blog.title}
                className="h-56 w-full object-cover sm:h-80"
                src={blog.image}
              />
              <span className="absolute inset-0 bg-black/25" />
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-sm ring-2 ring-white/70">
                <Play className="h-6 w-6 fill-white text-white" />
              </span>
            </button>
          ) : (
            <img
              alt={blog.title}
              className="mt-8 h-56 w-full rounded-xl object-cover sm:h-80"
              src={blog.image}
            />
          )
        ) : null}

        {activeVideo ? (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-3 py-6 backdrop-blur-[2px] sm:px-6"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl overflow-visible rounded-2xl border-4 border-white bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Close video"
                className="absolute -right-3 -top-3 z-20 grid h-11 w-11 place-items-center rounded-full bg-sky-500 text-white shadow-lg transition-colors hover:bg-sky-600 sm:-right-5 sm:-top-5"
                onClick={() => setActiveVideo(null)}
                type="button"
              >
                <X className="h-7 w-7" />
              </button>
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                  referrerPolicy="strict-origin-when-cross-origin"
                  src={getYouTubeEmbedUrl(activeVideo)}
                  title={blog.title}
                />
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-10 grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          {toc.length > 0 ? (
            <aside className="h-fit lg:sticky lg:top-24">
              <nav className="rounded-xl border border-border bg-card p-5">
                <h2 className="mb-4 text-lg font-semibold">Table of Contents</h2>
                <ul className="space-y-1">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <button
                        className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                          activeSection === item.id
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                        onClick={() => scrollToSection(item.id)}
                        type="button"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          ) : null}

          <article className="min-w-0">
            {blog.content?.blocks?.map((block, index) => (
              <ContentBlock block={block} key={`${block.type}-${index}`} />
            ))}

            {!blog.content?.blocks?.length ? (
              <p className="text-lg leading-8 text-muted-foreground">{blog.description}</p>
            ) : null}
          </article>
        </div>
      </div>
    </main>
  );
};

const ContentBlock = ({ block }: { block: BlogContentBlock }) => {
  if (block.type === "tldr") {
    return (
      <blockquote className="mb-10 rounded-xl border-l-4 border-amber-400 bg-muted/60 p-6 text-lg leading-8">
        <span className="font-semibold">TL;DR: </span>
        {block.text}
      </blockquote>
    );
  }

  if (block.type === "heading") {
    const className =
      block.level === 3
        ? "mb-3 mt-8 text-xl font-bold"
        : "mb-4 mt-12 scroll-mt-28 text-2xl font-bold sm:text-3xl";

    return (
      <h2 className={className} id={block.id}>
        {block.text}
      </h2>
    );
  }

  if (block.type === "paragraph") {
    return <p className="mb-5 text-base leading-8 text-foreground/90">{block.text}</p>;
  }

  if (block.type === "list") {
    const ListTag = block.ordered ? "ol" : "ul";
    return (
      <ListTag className={`mb-8 space-y-3 pl-5 ${block.ordered ? "list-decimal" : "list-disc"}`}>
        {block.items.map((item) => (
          <li className="leading-7" key={item}>
            {item}
          </li>
        ))}
      </ListTag>
    );
  }

  if (block.type === "callout") {
    return (
      <p className="mb-8 rounded-lg border border-border bg-muted/50 p-4 text-sm leading-7 text-muted-foreground">
        {block.text}
      </p>
    );
  }

  if (block.type === "certifications") {
    return (
      <div className="mb-10 space-y-5">
        {block.items.map((item) => (
          <section className="rounded-xl border border-border bg-card p-5 shadow-sm" key={item.number}>
            <h3 className="text-xl font-semibold">
              {item.number}. {item.title}
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
              {item.salary ? (
                <li>
                  <span className="font-medium text-foreground">Salary range: </span>
                  {item.salary}
                </li>
              ) : null}
              {item.time ? (
                <li>
                  <span className="font-medium text-foreground">Time to complete: </span>
                  {item.time}
                </li>
              ) : null}
              {item.audience ? (
                <li>
                  <span className="font-medium text-foreground">Who it's for: </span>
                  {item.audience}
                </li>
              ) : null}
            </ul>
          </section>
        ))}
      </div>
    );
  }

  if (block.type === "faq") {
    return (
      <div className="mb-10 space-y-4">
        {block.items.map((item, index) => (
          <details
            className="rounded-xl border border-border bg-card p-5"
            key={item.question}
            open={index === 0}
          >
            <summary className="cursor-pointer text-lg font-semibold">
              {index + 1}. {item.question}
            </summary>
            <p className="mt-3 leading-7 text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    );
  }

  return null;
};

export default BlogInfo;
