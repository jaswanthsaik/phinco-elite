import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { getBlogs, type Blog } from "@/services/blogService";

const BlogPage = () => {
  const [activeFeatured, setActiveFeatured] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const [blogs, setBlogs] = useState<any[]>([]);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  const featuredBlogs = blogs.filter(
  (blog) => blog.featured === true
);

type Category = {
  name: string;
  count: number;
  blogs: Blog[];
};

const categories: Category[] = Object.values(
  blogs.reduce((acc: any, blog: Blog) => {

    const category = blog.category;

    if (!acc[category]) {
      acc[category] = {
        name: category,
        count: 0,
        blogs: [],
      };
    }

    acc[category].blogs.push(blog);
    acc[category].count++;

    return acc;

  }, {})
);

  useEffect(() => {
  if (featuredBlogs.length <= 1) return;

  const timer = window.setInterval(() => {
    setActiveFeatured((current) =>
      (current + 1) % featuredBlogs.length
    );
  }, 2000);

  return () => window.clearInterval(timer);
}, [featuredBlogs.length]);
  
  useEffect(() => {
  const fetchBlogs = async () => {
    const data = await getBlogs();
    setBlogs(data);
  };

  fetchBlogs();
}, []);

  useEffect(() => {
    const updateActiveCategory = () => {
      const topOffset = 120;
      let nextCategory = 0;

      sectionRefs.current.forEach((section, index) => {
        if (section && section.getBoundingClientRect().top <= topOffset + 8) {
          nextCategory = index;
        }
      });

      setActiveCategory(nextCategory);
    };

    updateActiveCategory();
    window.addEventListener("scroll", updateActiveCategory, { passive: true });
    window.addEventListener("resize", updateActiveCategory);

    return () => {
      window.removeEventListener("scroll", updateActiveCategory);
      window.removeEventListener("resize", updateActiveCategory);
    };
  }, []);

 const scrollToCategory = (index: number) => {
  const section = sectionRefs.current[index];

  if (section) {
    const headerOffset = 80; // your header height
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  setActiveCategory(index);
};
const BlogCard = ({ blog }: { blog: Blog }) => (
  <Link
    to="/BlogInfo"
    search={{ topic: blog.id }}
    className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
  >
    <article>
      <img
        className="h-48 w-full object-cover"
        src={blog.image}
        alt={blog.title}
      />

      <div className="flex min-h-44 flex-1 flex-col justify-between gap-6 p-5">
        <h3 className="text-xl font-semibold leading-snug">
          {blog.title}
        </h3>

        <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
          <span className="rounded-full border border-border px-3 py-1">
            {blog.type}
          </span>

          <span>{blog.date}</span>
        </div>
      </div>
    </article>
  </Link>
);

  return (
    <main className="bg-background px-4 py-10 font-sans text-foreground sm:px-6 lg:px-10">
      <header className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Blogs</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Explore insights, tips, articles and blogs written by experts in a range of professional
          domains.
        </p>
        <div className="mx-auto mt-7 h-1 w-36 bg-amber-400" />
      </header>

      <section className="mx-auto mt-16 max-w-7xl" aria-label="Featured resources">
        <div className="overflow-hidden px-1">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${activeFeatured * (100 / (featuredBlogs.length || 1))}%)`,
              width: `${(featuredBlogs.length || 1) * 100}%`,
            }}
          >
            {featuredBlogs.map((blog) => (
              <Link
                to="/BlogInfo"
                search={{ topic: blog.id }}
                className="grid shrink-0 grid-cols-1 overflow-hidden border border-border bg-card shadow-sm sm:grid-cols-[230px_minmax(0,1fr)]"
                key={blog.id || blog.title}
                style={{ width: `${100 / (featuredBlogs.length || 1)}%` }}
              >
                <img
                  className="h-52 w-full object-cover sm:h-64"
                  src={blog.image}
                  alt={blog.title}
                />
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <span className="w-fit rounded-full border border-border px-4 py-1 text-sm text-muted-foreground">
                    {blog.type}
                  </span>
                  <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl">
                    {blog.title}
                  </h2>
                  <p className="mt-5 text-sm text-muted-foreground">Last updated on {blog.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-5 flex justify-center gap-2" aria-label="Featured resource slides">
          {featuredBlogs.map((blog, index) => (
            <button
              aria-label={`Show featured resource ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                activeFeatured === index ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              key={blog.title}
              onClick={() => setActiveFeatured(index)}
              type="button"
            />
          ))}
        </div>
      </section>

      <div className="mx-auto mt-14 grid max-w-7xl gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
        <aside className="top-4 hidden h-fit lg:sticky lg:block" aria-label="Blog categories">
          <nav className="flex flex-wrap gap-2 rounded-lg bg-muted p-2 lg:flex-col mt-[60px]">
            {categories.map((category, index) => (
              <button
                className={`rounded-md px-4 py-3 text-left text-sm font-medium transition-colors ${
                  activeCategory === index
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-background hover:text-foreground"
                } lg:w-full`}
                key={category.name}
                onClick={() => scrollToCategory(index)}
                type="button"
              >
                {category.name}
              </button>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 space-y-16">
          {categories.map((category, index) => (
            <section
              className="scroll-mt-6"
              data-index={index}
              key={category.name}
              ref={(section) => {
                sectionRefs.current[index] = section;
              }}
            >
              <div className="mb-6 mt-[60px] flex items-end justify-between gap-4 border-b border-border pb-4">
                <div>
                  <h2 className="text-2xl font-bold sm:text-3xl">{category.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{category.count} resources</p>
                </div>
                <Link
                  to="/blogs/all"
                  search={{
                    category: category.name
                  }}
                  className="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:px-5"
                  >
                  View all
                  </Link>
              </div>

              {/* Desktop */}
<div className="hidden lg:grid grid-cols-3 gap-6">
  {category.blogs.slice(0, 3).map((blog) => (
    <BlogCard key={blog.id || blog.title} blog={blog} />
  ))}
</div>

{/* Tablet */}
<div className="hidden sm:grid lg:hidden grid-cols-2 gap-6">
  {category.blogs.slice(0, 2).map((blog) => (
    <BlogCard key={blog.id || blog.title} blog={blog} />
  ))}
</div>

{/* Mobile */}
<div className="grid sm:hidden grid-cols-1 gap-6">
  {category.blogs.slice(0, 2).map((blog) => (
    <BlogCard key={blog.id || blog.title} blog={blog} />
  ))}
</div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
