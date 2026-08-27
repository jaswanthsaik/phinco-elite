import { addDoc, collection, getDocs, query, Timestamp, where } from "firebase/firestore";
import { db } from "../src/firebase/firebaseConfig.ts";
import {
  HIGH_PAYING_CERTIFICATIONS_CONTENT,
  HIGH_PAYING_CERTIFICATIONS_META,
} from "../src/data/highPayingCertificationsArticle.ts";

const existing = await getDocs(
  query(collection(db, "blogs"), where("title", "==", HIGH_PAYING_CERTIFICATIONS_META.title))
);

if (!existing.empty) {
  console.log("Article already exists:", existing.docs[0].id);
} else {
  const ref = await addDoc(collection(db, "blogs"), {
    title: HIGH_PAYING_CERTIFICATIONS_META.title,
    description: HIGH_PAYING_CERTIFICATIONS_META.description,
    type: HIGH_PAYING_CERTIFICATIONS_META.type,
    date: Timestamp.fromDate(new Date("2026-08-25T16:01:19+05:30")),
    image: HIGH_PAYING_CERTIFICATIONS_META.image,
    category: HIGH_PAYING_CERTIFICATIONS_META.category,
    featured: HIGH_PAYING_CERTIFICATIONS_META.featured,
    author: HIGH_PAYING_CERTIFICATIONS_META.author,
    views: HIGH_PAYING_CERTIFICATIONS_META.views,
    content: HIGH_PAYING_CERTIFICATIONS_CONTENT,
  });

  console.log("Seeded blog:", ref.id);
}
