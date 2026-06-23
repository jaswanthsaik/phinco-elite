import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type Category =
  | "Course-Related"
  | "Payments and Scholarships"
  | "Capstone and Real-time Projects"
  | "Certifications"
  | "Job Assistance"
  | "Mentorships"
  | "Support";

const CATEGORIES: Category[] = [
  "Course-Related",
  "Payments and Scholarships",
  "Capstone and Real-time Projects",
  "Certifications",
  "Job Assistance",
  "Mentorships",
  "Support",
];

const FAQS: Record<Category, { q: string; a: string }[]> = {
  "Course-Related": [
    {
      q: "What is the duration of this Program?",
      a: "The Generative AI and Data Science program runs for approximately 8 months of structured live learning, plus extended access for revisions.",
    },
    {
      q: "Who is this course designed for?",
      a: "Working professionals, freshers, and career switchers looking to build a strong career in Data Science and Generative AI.",
    },
    {
      q: "Are the classes live or recorded?",
      a: "All sessions are live and interactive. Recordings are made available for revision.",
    },
  ],
  "Payments and Scholarships": [
    {
      q: "What is the cost of this Program?",
      a: "The Generative AI and data science course costs ₹1,20,000 + 18% GST.",
    },
    {
      q: "Can I pay in installments for the course?",
      a: "Yes, No Cost EMI options are available. You can split the fee into easy monthly installments.",
    },
    {
      q: "What is the refund policy for the online master's in data science and AI program at Learnbay?",
      a: "A full refund is available within the first 7 days of the program, subject to terms and conditions.",
    },
  ],
  "Capstone and Real-time Projects": [
    {
      q: "How many projects will I work on?",
      a: "You'll work on 30+ hands-on projects, including capstone projects across domains like BFSI, Healthcare, and Retail.",
    },
    {
      q: "Are the projects based on real datasets?",
      a: "Yes, every project uses real-world datasets sourced from industry partners.",
    },
  ],
  Certifications: [
    {
      q: "What certificate will I receive?",
      a: "You'll receive an IBM Course Completion Certificate plus a Project Completion Certificate from Learnbay.",
    },
    {
      q: "Is the certificate globally recognized?",
      a: "Yes, the IBM certificate is internationally recognized across the IT industry.",
    },
  ],
  "Job Assistance": [
    {
      q: "Do you provide placement support?",
      a: "Yes, we provide 100% placement assistance including resume building, mock interviews, and referrals to 350+ hiring partners.",
    },
    {
      q: "What is the average salary hike for alumni?",
      a: "Our alumni report an average salary hike of 150% after program completion.",
    },
  ],
  Mentorships: [
    {
      q: "Who will mentor me during the program?",
      a: "Industry experts from companies like Microsoft, Amazon, Meta, and EY mentor learners throughout the program.",
    },
    {
      q: "Will I get 1:1 mentorship?",
      a: "Yes, you get dedicated 1:1 doubt-clearing and career guidance sessions.",
    },
  ],
  Support: [
    {
      q: "Is there technical support available?",
      a: "Yes, our support team is available 7 days a week via chat, email, and call.",
    },
    {
      q: "Can I revisit the course content after completion?",
      a: "Yes, you'll get the 3-year Flexi Pass to revisit live cohorts and recordings.",
    },
  ],
};

export function FAQSection() {
  const [category, setCategory] = useState<Category>("Payments and Scholarships");
  const [openIndex, setOpenIndex] = useState<number>(0);

  const items = FAQS[category];

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
            Everything you need to know about the course and curriculum.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:grid-cols-[230px_1fr] lg:grid-cols-[280px_1fr] lg:gap-8">
          {/* Categories */}
          <aside className="md:border-r md:border-slate-200 md:pr-4">
            <div className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 md:mx-0 md:flex-col md:gap-1 md:overflow-visible md:px-0 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {CATEGORIES.map((c) => {
                const isActive = c === category;

                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => {
                      setCategory(c);
                      setOpenIndex(0);
                    }}
                    className={`shrink-0 snap-start whitespace-nowrap rounded-full border px-4 py-2.5 text-left text-sm font-medium transition md:w-full md:whitespace-normal md:rounded-lg md:border-0 md:px-4 md:py-3 ${
                      isActive
                        ? "border-blue-600 bg-blue-50 text-blue-600 md:bg-transparent md:font-bold md:ring-1 md:ring-blue-100"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 md:hover:bg-slate-50"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Questions */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm md:border-0 md:shadow-none">
            {items.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={item.q}
                  className="border-b border-slate-200 last:border-b-0"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full items-start justify-between gap-4 px-4 py-5 text-left sm:px-5 md:px-0"
                  >
                    <span className="text-sm font-bold leading-6 text-slate-900 sm:text-base">
                      {item.q}
                    </span>

                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50">
                      {isOpen ? (
                        <Minus className="h-4 w-4 text-blue-600" />
                      ) : (
                        <Plus className="h-4 w-4 text-blue-600" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="px-4 pb-5 pr-14 text-sm leading-6 text-slate-600 sm:px-5 sm:text-base md:px-0 md:pr-12">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}