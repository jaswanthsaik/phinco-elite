import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

export type BlogCertificationItem = {
  number: number;
  title: string;
  salary?: string;
  time?: string;
  audience?: string;
};

export type BlogContentBlock =
  | { type: "tldr"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "heading"; id: string; text: string; level?: 2 | 3 }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "certifications"; items: BlogCertificationItem[] }
  | { type: "faq"; items: { question: string; answer: string }[] }
  | { type: "callout"; text: string };

export type BlogArticleContent = {
  toc: { id: string; label: string }[];
  blocks: BlogContentBlock[];
};

export type Blog = {
  id: string;
  title: string;
  description: string;
  type: string;
  date: string;
  image: string;
  category: string;
  featured: boolean;
  author?: string;
  views?: number;
  content?: BlogArticleContent;
};

const mapBlog = (id: string, data: Record<string, any>): Blog => ({
  id,
  title: data.title || "",
  description: data.description || "",
  type: data.type || "Article",
  date: data.date?.toDate
    ? data.date.toDate().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : data.date || "",
  image: data.image || "",
  category: data.category || "",
  featured: data.featured || false,
  author: data.author || "",
  views: typeof data.views === "number" ? data.views : undefined,
  content: data.content || undefined,
});

export const getBlogs = async (): Promise<Blog[]> => {
  const snapshot = await getDocs(collection(db, "blogs"));

  return snapshot.docs.map((docSnap) => mapBlog(docSnap.id, docSnap.data()));
};

export const getBlogById = async (id: string): Promise<Blog | null> => {
  if (!id) return null;

  const snapshot = await getDoc(doc(db, "blogs", id));

  if (!snapshot.exists()) return null;

  return mapBlog(snapshot.id, snapshot.data());
};
