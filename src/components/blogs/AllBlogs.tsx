import { useState } from "react";
import { useSearch } from "@tanstack/react-router";
import blogData from "../../data/blogs.json";

const AllBlogs = () => {
const search = useSearch({
  from: "/blogs/all",
}) as {
  category?: string;
};

  const defaultCategory =
    blogData.categories.find(
      (item) => item.name === search.category
    ) || blogData.categories[0];

  const [selectedCategory, setSelectedCategory] =
    useState(defaultCategory);

  const [selectedType, setSelectedType] = useState("All");

  const blogs = selectedCategory.blogs || [];

  const filteredBlogs =
    selectedType === "All"
      ? blogs
      : blogs.filter((blog) => blog.type === selectedType);

  const types = [
    "All",
    ...new Set(blogs.map((blog) => blog.type)),
  ];

  const handleCategoryChange = (value: string) => {
    const category = blogData.categories.find(
      (item) => item.name === value
    );

    if (category) {
      setSelectedCategory(category);
      setSelectedType("All");
    }
  };

  return (
    <main className="bg-background px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <select
            value={selectedCategory.name}
            onChange={(e) =>
              handleCategoryChange(e.target.value)
            }
            className="w-full max-w-md rounded-lg border border-border bg-background px-4 py-3 font-medium outline-none"
          >
            {blogData.categories.map((category) => (
              <option
                key={category.name}
                value={category.name}
              >
                {category.name}
              </option>
            ))}
          </select>

          <a
            href="/blogs"
            className="rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Back to Blogs
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">

          <aside className="h-fit rounded-lg bg-muted p-5">
            <button
              onClick={() => setSelectedType("All")}
              className={`w-full border-l-4 border-primary px-4 py-3 text-left font-semibold ${
                selectedType === "All"
                  ? "bg-background"
                  : ""
              }`}
            >
              All Blogs ({blogs.length})
            </button>

            <div className="mt-4 space-y-2">
              {types
                .filter((type) => type !== "All")
                .map((type) => {
                  const count = blogs.filter(
                    (blog) => blog.type === type
                  ).length;

                  return (
                    <button
                      key={type}
                      onClick={() =>
                        setSelectedType(type)
                      }
                      className={`w-full rounded-md px-4 py-3 text-left ${
                        selectedType === type
                          ? "bg-background font-semibold"
                          : "hover:bg-background"
                      }`}
                    >
                      {type} ({count})
                    </button>
                  );
                })}
            </div>
          </aside>

          <section className="grid grid-cols-1 gap-6">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <article
                  key={blog.title}
                  className="grid overflow-hidden rounded-lg border border-border bg-card shadow-sm md:grid-cols-[410px_1fr]"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-56 w-full object-cover"
                  />

                  <div className="flex flex-col justify-between p-6">
                    <div>
                      <h2 className="line-clamp-2 text-2xl font-bold">
                        {blog.title}
                      </h2>

                      <p className="mt-5 text-muted-foreground">
                        {blog.description}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between text-sm text-muted-foreground">
                      <span className="rounded-full border px-4 py-1">
                        {blog.type}
                      </span>

                      <span>
                        Last updated on {blog.date}
                      </span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p className="text-muted-foreground">
                No blogs found
              </p>
            )}
          </section>

        </div>
      </div>
    </main>
  );
};

export default AllBlogs;