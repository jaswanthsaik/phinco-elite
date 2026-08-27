import { useEffect, useState } from "react";
import { Link, useSearch } from "@tanstack/react-router";
import { getBlogs, type Blog } from "@/services/blogService";


type Category = {
  name: string;
  count: number;
  blogs: Blog[];
};

const AllBlogs = () => {
  const search = useSearch({
    from: "/blogs/all",
  }) as {
    category?: string;
  };

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();

      setBlogs(data);

      const categoryData: Category[] = Object.values(
        data.reduce((acc: any, blog: Blog) => {
          if (!acc[blog.category]) {
            acc[blog.category] = {
              name: blog.category,
              count: 0,
              blogs: [],
            };
          }

          acc[blog.category].blogs.push(blog);
          acc[blog.category].count++;

          return acc;
        }, {})
      );

      setCategories(categoryData);

      const selected =
        categoryData.find(
          (item) => item.name === search.category
        ) || categoryData[0];

      setSelectedCategory(selected);
    };

    fetchBlogs();
  }, [search.category]);

  if (!selectedCategory) {
    return null;
  }

  const categoryBlogs = selectedCategory.blogs;

  const filteredBlogs =
    selectedType === "All"
      ? categoryBlogs
      : categoryBlogs.filter(
          (blog) => blog.type === selectedType
        );

  const types = [
    "All",
    ...new Set(
      categoryBlogs.map((blog) => blog.type)
    ),
  ];

  const handleCategoryChange = (
    value: string
  ) => {
    const category = categories.find(
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

            {categories.map((category) => (
              <option
                key={category.name}
                value={category.name}
              >
                {category.name} ({category.count})
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
              All Blogs ({categoryBlogs.length})
            </button>


            <div className="mt-4 space-y-2">

              {types
                .filter(
                  (type) => type !== "All"
                )
                .map((type) => {

                  const count =
                    categoryBlogs.filter(
                      (blog) =>
                        blog.type === type
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

                <Link
                  to="/BlogInfo"
                  search={{ topic: blog.id }}
                  key={blog.id || blog.title}
                  className="grid overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md md:grid-cols-[410px_1fr]"
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

                </Link>

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