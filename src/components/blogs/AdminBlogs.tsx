import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import {
  HIGH_PAYING_CERTIFICATIONS_CONTENT,
  HIGH_PAYING_CERTIFICATIONS_META,
} from "@/data/highPayingCertificationsArticle";

const emptyForm = {
  title: "",
  description: "",
  date: "",
  image: "",
  category: "",
  featured: false,
  author: "",
  views: "",
  content: "",
};

const AdminBlogs = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState(false);
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    const fetchCategories = async () => {
      const snapshot = await getDocs(collection(db, "blogs"));
      const blogs = snapshot.docs.map((docSnap) => docSnap.data());
      const uniqueCategories = [
        ...new Set(blogs.map((blog: any) => blog.category).filter(Boolean)),
      ];
      setCategories(uniqueCategories);
    };

    fetchCategories();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const loadCertificationArticle = () => {
    setNewCategory(!categories.includes(HIGH_PAYING_CERTIFICATIONS_META.category));
    setFormData({
      title: HIGH_PAYING_CERTIFICATIONS_META.title,
      description: HIGH_PAYING_CERTIFICATIONS_META.description,
      date: "2026-08-25",
      image: HIGH_PAYING_CERTIFICATIONS_META.image,
      category: HIGH_PAYING_CERTIFICATIONS_META.category,
      featured: HIGH_PAYING_CERTIFICATIONS_META.featured,
      author: HIGH_PAYING_CERTIFICATIONS_META.author,
      views: String(HIGH_PAYING_CERTIFICATIONS_META.views),
      content: JSON.stringify(HIGH_PAYING_CERTIFICATIONS_CONTENT, null, 2),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.description ||
      !formData.date ||
      !formData.image ||
      !formData.category
    ) {
      alert("Please fill all required fields");
      return;
    }

    let parsedContent = undefined;
    if (formData.content.trim()) {
      try {
        parsedContent = JSON.parse(formData.content);
      } catch {
        alert("Article content must be valid JSON");
        return;
      }
    }

    await addDoc(collection(db, "blogs"), {
      title: formData.title,
      description: formData.description,
      type: "Article",
      date: Timestamp.fromDate(new Date(formData.date)),
      image: formData.image,
      category: formData.category,
      featured: formData.featured,
      author: formData.author || "",
      views: formData.views ? Number(formData.views) : 0,
      content: parsedContent || null,
    });

    alert("Blog Added Successfully");
    setFormData(emptyForm);
    setNewCategory(false);

    if (!categories.includes(formData.category)) {
      setCategories([...categories, formData.category]);
    }
  };

  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold">Add Blogs</h1>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border bg-card p-8">
          <button
            className="w-full rounded-lg border border-border py-3 font-medium hover:bg-muted"
            onClick={loadCertificationArticle}
            type="button"
          >
            Load sample article
          </button>

          <input
            className="w-full rounded-lg border px-4 py-3"
            name="title"
            onChange={handleChange}
            placeholder="Blog Title"
            required
            value={formData.title}
          />

          <textarea
            className="w-full rounded-lg border px-4 py-3"
            name="description"
            onChange={handleChange}
            placeholder="Blog Description"
            required
            rows={5}
            value={formData.description}
          />

          <input
            className="w-full rounded-lg border px-4 py-3"
            name="author"
            onChange={handleChange}
            placeholder="Author"
            value={formData.author}
          />

          <input
            className="w-full rounded-lg border px-4 py-3"
            name="views"
            onChange={handleChange}
            placeholder="Views (optional)"
            type="number"
            value={formData.views}
          />

          <input
            className="w-full rounded-lg border px-4 py-3"
            name="date"
            onChange={handleChange}
            required
            type="date"
            value={formData.date}
          />

          <input
            className="w-full rounded-lg border px-4 py-3"
            name="image"
            onChange={handleChange}
            placeholder="Image URL"
            required
            value={formData.image}
          />

          <div>
            <label className="font-medium">Category</label>
            <select
              className="mt-2 w-full rounded-lg border px-4 py-3"
              onChange={(e) => {
                if (e.target.value === "new") {
                  setNewCategory(true);
                  setFormData({
                    ...formData,
                    category: "",
                  });
                } else {
                  setNewCategory(false);
                  setFormData({
                    ...formData,
                    category: e.target.value,
                  });
                }
              }}
              required={!newCategory}
              value={newCategory ? "new" : formData.category}
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
              <option value="new">+ Create New Category</option>
            </select>

            {newCategory && (
              <input
                className="mt-3 w-full rounded-lg border px-4 py-3"
                name="category"
                onChange={handleChange}
                placeholder="New Category Name"
                required
                value={formData.category}
              />
            )}
          </div>

          <textarea
            className="w-full rounded-lg border px-4 py-3 font-mono text-sm"
            name="content"
            onChange={handleChange}
            placeholder="Article content JSON (toc + blocks)"
            rows={14}
            value={formData.content}
          />

          <div className="flex items-center gap-3">
            <input
              checked={formData.featured}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  featured: e.target.checked,
                })
              }
              type="checkbox"
            />
            <label>Featured Blog</label>
          </div>

          <button
            className="w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground"
            type="submit"
          >
            Add Blog
          </button>
        </form>
      </div>
    </main>
  );
};

export default AdminBlogs;
