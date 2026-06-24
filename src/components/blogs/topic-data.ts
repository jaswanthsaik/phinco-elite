import card1 from "@/assets/blog-card-1.jpg";
import card2 from "@/assets/blog-card-2.jpg";
import type { TopicBlog } from "./TopicList";

export interface TopicSection {
  slug: string;
  topic: string;
  expandedTitle?: string;
  blogs: TopicBlog[];
}

const CLOUD_BLOGS: TopicBlog[] = [
  {
    id: "c1",
    title: "Top 15 Cloud Computing Challenging Issues and Effective Solutions",
    description:
      "Uncover solutions for the top 15 cloud computing challenges with our expert insights. Enhance efficiency and overcome hurdles in your cloud operations effortlessly.",
    author: "Abhishek Gupta",
    date: "Mar 14, 2024",
    readTime: "6.5 mins",
    image: card2,
  },
  {
    id: "c2",
    title: "Cloud Computing and Machine Learning - How These Two Become Relevant",
    description:
      "Cloud computation and machine learning technologies are used by organizations to process large amounts of data and get relevant results in real-time.",
    author: "Nivin Biswas",
    date: "Oct 25, 2022",
    readTime: "10-13 mins",
    image: card1,
  },
];

const ML_BLOGS: TopicBlog[] = [
  {
    id: "m1",
    title:
      "Role of Automated Deep Learning Algorithm For Reliable Screening of Chest Radiographs",
    description:
      "Learn how automated deep learning algorithms enhance chest radiograph screening reliability, revolutionising medical imaging interpretation. Read our blog.",
    author: "Sonalisha Mohanty",
    date: "Nov 18, 2024",
    readTime: "4.6 mins",
    image: card1,
  },
  {
    id: "m2",
    title: "Reasons to Dive into a Master's Journey in Artificial Intelligence",
    description:
      "Unlock career potential with a Master's in AI. Learn key benefits, career opportunities, and industry demands for advanced AI expertise at Learnbay.",
    author: "Nivin Biswas",
    date: "Sep 20, 2024",
    readTime: "4.5 mins",
    image: card2,
  },
  {
    id: "m3",
    title:
      "Learnbay blog banner of trending machine learning projects to elevate your skills in 2024",
    description:
      "Explore cutting-edge machine learning projects to enhance your skills in 2024. Stay ahead of the curve with these trending projects designed to elevate your skills",
    author: "Nivin Biswas",
    date: "Mar 12, 2024",
    readTime: "9 mins",
    image: card1,
    tag: "Machine Learning",
  },
  {
    id: "m4",
    title:
      "Efficient Strategies for Balancing a Full-Time Job and Pursuing a Career in Machine Learning",
    author: "Sonalisha Mohanty",
    date: "Aug 02, 2024",
    readTime: "7 mins",
    image: card2,
  },
  {
    id: "m5",
    title: "How To Increase The Accuracy Of Machine Learning Model Over 90%?",
    author: "Manas Kochar",
    date: "Jul 14, 2024",
    readTime: "6 mins",
    image: card1,
  },
  {
    id: "m6",
    title:
      "Multimodal Deep Learning | Enabling Fusion of Multiple Modalities And Deep Learning",
    author: "Manas Kochar",
    date: "Jun 10, 2024",
    readTime: "8 mins",
    image: card2,
  },
];

export const TOPIC_SECTIONS: TopicSection[] = [
  { slug: "cloud-computing", topic: "Cloud Computing", blogs: CLOUD_BLOGS },
  {
    slug: "machine-learning",
    topic: "Machine Learning",
    expandedTitle: "Machine Learning Blogs, Projects & News",
    blogs: ML_BLOGS,
  },
];

export function getTopicBySlug(slug: string) {
  return TOPIC_SECTIONS.find((s) => s.slug === slug);
}
