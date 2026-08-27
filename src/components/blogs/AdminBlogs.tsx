import { useState } from "react";
import { UploadCloud } from "lucide-react";
import blogData from "../../data/blogs.json";

const AdminBlogs = () => {
  const [preview, setPreview] = useState("");
  const [categories, setCategories] = useState(blogData.categories);
  const [newCategory, setNewCategory] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "Article",
    date: "",
    image: "",
    category: ""
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const handleImage = (file?: File) => {
    if (!file) return;

    const url = URL.createObjectURL(file);

    setPreview(url);
    setFormData({
      ...formData,
      image: url
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const blog = {
      title: formData.title,
      description: formData.description,
      type: formData.type,
      date: new Date(formData.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }),
      image: formData.image
    };

    const updatedCategories = [...categories];

    const category = updatedCategories.find(
      item => item.name === formData.category
    );

    if (category) {
      category.blogs.push(blog);
      category.count = category.blogs.length;
    } else {
      updatedCategories.push({
        name: formData.category,
        count: 1,
        blogs: [blog]
      });
    }

    setCategories(updatedCategories);

    localStorage.setItem(
      "blogs",
      JSON.stringify({
        ...blogData,
        categories: updatedCategories
      })
    );

    alert("Blog Added Successfully");

    setFormData({
      title: "",
      description: "",
      type: "Article",
      date: "",
      image: "",
      category: ""
    });

    setPreview("");
    setNewCategory(false);
  };

  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold">
          Add Blogs
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-lg border bg-card p-8"
        >
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Blog Title"
            className="w-full rounded-lg border px-4 py-3"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Blog Description"
            rows={5}
            className="w-full rounded-lg border px-4 py-3"
          />

          <div className="grid grid-cols-2 gap-5">
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="rounded-lg border px-4 py-3"
            >
              <option>Article</option>
              <option>Ebook</option>
              <option>Guide</option>
              <option>Report</option>
            </select>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="font-medium">
              Category
            </label>

            <select
              value={newCategory ? "new" : formData.category}
              onChange={(e) => {
                if (e.target.value === "new") {
                  setNewCategory(true);
                  setFormData({
                    ...formData,
                    category: ""
                  });
                } else {
                  setNewCategory(false);
                  setFormData({
                    ...formData,
                    category: e.target.value
                  });
                }
              }}
              className="mt-2 w-full rounded-lg border px-4 py-3"
            >
              <option value="">
                Select Category
              </option>

              {categories.map(category => (
                <option
                  key={category.name}
                  value={category.name}
                >
                  {category.name}
                </option>
              ))}

              <option value="new">
                + Create New Category
              </option>
            </select>

            {newCategory && (
              <input
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="New Category Name"
                className="mt-3 w-full rounded-lg border px-4 py-3"
              />
            )}
          </div>

          <div
            onDrop={(e) => {
              e.preventDefault();
              handleImage(e.dataTransfer.files[0]);
            }}
            onDragOver={(e) => e.preventDefault()}
            className="rounded-lg border-2 border-dashed p-8 text-center"
          >
            <UploadCloud className="mx-auto mb-3" />

            <p>
              Drag & Drop image or choose file
            </p>

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleImage(e.target.files?.[0])
              }
              className="mt-4"
            />
          </div>

          {preview && (
            <img
              src={preview}
              className="h-48 w-full rounded-lg object-cover"
            />
          )}

          <button className="w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground">
            Add Blog
          </button>
        </form>
      </div>
    </main>
  );
};

export default AdminBlogs;