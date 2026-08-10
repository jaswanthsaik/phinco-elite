import emailjs from "@emailjs/browser";
import { Building2, ChevronDown, Sparkles } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

type Term = {
  title: string;
  duration: string;
  heading?: string;
  sections: { heading?: string; items: string[] }[];
};

const EMAILJS_SERVICE_ID = "service_1p7ynrp";
const EMAILJS_TEMPLATE_ID = "template_0aw959n";
const EMAILJS_PUBLIC_KEY = "d0BucBhFNX26TUOgd";

const TERMS_URL = "https://phincoelite.com/Terms%20&%20Conditions";
const PRIVACY_URL = "https://phincoelite.com/Privacy-Policy";

const COURSES = [
  "GenAI & Agentic AI Developer",
  "GenAI & Agentic AI Generalist",
  "Data Science & GenAI Developer",
  "Data Science & GenAI Generalist",
  "Services Now for Developer",
  "Services Now for Generalist",
  "Masters for Data Scientists",
  "Masters for Full Stack Developers",
];

const PROFILE_TYPES = [
  "Freshers",
  "Career Gaps & Restarters",
  "IT Working Professionals",
  "Non-IT Working Professionals",
];

const TERMS: Term[] = [
  {
    title: "Induction & Orientation",
    duration: "(3 Days)",
    sections: [
      {
        heading: "Induction + Orientation",
        items: [
          "Introduction to Data Analytics & Career Opportunities",
          "Data Analytics Career Roadmap",
          "Resume & LinkedIn Profile Optimization",
          "LMS Walkthrough & Learning Resources",
          "Setting Up Excel, SQL, Python & Power BI",
          "Program Orientation & Learning Plan",
        ],
      },
    ],
  },
  {
    title: "Advanced Excel for Data Analytics",
    duration: "(3 Weeks)",
    sections: [
      {
        heading: "Excel for Business Analytics",
        items: [
          "Excel Fundamentals & Shortcuts",
          "Functions & Formulas",
          "Lookup Functions (VLOOKUP, XLOOKUP, INDEX-MATCH)",
          "Conditional Formatting",
          "Data Cleaning & Validation",
          "Pivot Tables & Pivot Charts",
          "Power Query",
          "Interactive Dashboards",
          "AI in Excel",
          "Business Case Studies",
        ],
      },
    ],
  },
  {
    title: "SQL for Data Analytics",
    duration: "(4 Weeks)",
    sections: [
      {
        heading: "SQL & Database Management",
        items: [
          "Database Fundamentals",
          "SQL Queries",
          "Filtering & Sorting",
          "Aggregate Functions",
          "GROUP BY & HAVING",
          "Joins (Inner, Left, Right, Full)",
          "Subqueries & Nested Queries",
          "Window Functions",
          "Stored Procedures & Views",
          "Common Table Expressions (CTEs)",
          "Database Design & Normalization",
          "Query Optimization",
        ],
      },
    ],
  },
  {
    title: "Power BI for Data Analytics",
    duration: "(3 weeks)",
    sections: [
      {
        heading: "Business Intelligence & Dashboarding",
        items: [
          "Power BI Desktop & Data Import & Transformation",
          "Power Query & Data Modeling",
          "Relationships & DAX Fundamentals",
          "Interactive Dashboards, Visualizations & KPIs",
          "Power BI Service & Sharing Reports",
        ],
      },
    ],
  },
  {
    title: "Python for Data Analytics",
    duration: "(4 Weeks)",
    sections: [
      {
        heading: "Python Programming for Data Analytics",
        items: [
          "Python Fundamentals: Variables, Data Types, Control Flow, Functions",
          "Data Structures, Functions & Modules",
          "NumPy,Pandas,Data Cleaning",
          "Exploratory Data Analysis (EDA),Data Visualization,APIs,Automation Scripts",
        ],
      },
    ],
  },
  {
    title: "Statistics for Data Analytics",
    duration: "(2 Weeks)",
    sections: [
      {
        heading: "Statistics & Business Decision Making",
        items: [
          "Types of Data,Measures of Central Tendency,Measures of Dispersion",
          "Probability, Probability Distributions,Sampling Techniques, Hypothesis Testing",
          "Confidence Intervals,Correlation & Regression Analysis,",
          "A/B Testing,Business Statistics Case Studies",
        ],
      },
      // {
      //   heading: "Hadoop Ecosystem",
      //   items: [
      //     "HDFS basics, architecture, and fault-tolerant storage.",
      //     "YARN & MapReduce job execution and resource management.",
      //     "Ecosystem integration: Hive, Sqoop, and SQL/NoSQL connectivity.",
      //     "Cluster setup, configuration, scaling, and performance tuning.",
      //   ],
      // },
      // {
      //   heading: "Spark Fundamentals",
      //   items: [
      //     "Spark Basics: Core features, architecture, RDDs, DAGs, transformations & actions.",
      //     "Spark Environment Setup: SparkSession, standalone mode, YARN/Mesos cluster management.",
      //     "RDD & DataFrame Operations: Creation, transformations, actions, interoperability.",
      //     "Spark SQL: Structured data processing, SQL queries, DataFrame APIs.",
      //   ],
      // },
      // {
      //   heading: "Spark Ecosystem & Advanced Tools",
      //   items: [
      //     "Spark Streaming: Real-time pipelines, DStreams/Structured Streaming, Kafka integration.",
      //     "Spark MLlib: Feature engineering, building & training ML models, model evaluation.",
      //     "Performance Optimization: Caching, partitioning, Tungsten & Catalyst optimizer basics.",
      //     "PySpark & Integration: Using Spark with Python, connecting Spark with external data sources.",
      //   ],
      // },
    ],
  },
];

export function ExploreSyllabus() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!agreed) {
      toast.error("Please agree to the Terms & Conditions and Privacy Policy.");
      return;
    }

    setSubmitting(true);

    const form = e.currentTarget;

    try {
      const data = new FormData(form);

      const payload = {
        full_name: String(data.get("full_name") || ""),
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || ""),
        course: String(data.get("course") || ""),
        profile_type: String(data.get("profile_type") || ""),
      };

      const configured =
        !EMAILJS_SERVICE_ID.startsWith("YOUR_") &&
        !EMAILJS_TEMPLATE_ID.startsWith("YOUR_") &&
        !EMAILJS_PUBLIC_KEY.startsWith("YOUR_");

      if (configured) {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload, {
          publicKey: EMAILJS_PUBLIC_KEY,
        });
      }

      toast.success("Thanks! Our team will reach out to you shortly.");
      form.reset();
      setAgreed(false);
    } catch (err) {
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Explore Our Industry-Aligned Curriculum
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base lg:text-lg">
            Discover a comprehensive, hands-on learning path designed to help you build in-demand skills and become job-ready.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 lg:mt-12 lg:grid-cols-[1fr_360px]">
          <div className="relative min-w-0">
            <div className="relative space-y-4 pl-10 sm:pl-14 lg:pl-16">
              <div
                aria-hidden
                className="absolute bottom-6 left-4 top-5 border-l-2 border-dashed border-slate-300 sm:left-6"
              />

              {TERMS.map((term, i) => {
                const isOpen = openIndex === i;

                return (
                  <div key={term.title} className="relative">
                    <span
                      className={`absolute -left-10 top-3 z-10 grid h-8 w-8 place-items-center rounded-full border-2 bg-white shadow-sm sm:-left-14 sm:h-10 sm:w-10 lg:-left-16 lg:h-12 lg:w-12 ${isOpen ? "border-blue-500" : "border-slate-300"
                        }`}
                    >
                      {i === 0 ? (
                        <Sparkles className="h-4 w-4 text-blue-500 sm:h-5 sm:w-5" />
                      ) : (
                        <Building2
                          className={`h-4 w-4 sm:h-5 sm:w-5 ${isOpen ? "text-blue-500" : "text-slate-500"
                            }`}
                        />
                      )}
                    </span>

                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className={`flex w-full cursor-pointer flex-col gap-2 rounded-2xl border px-4 py-4 text-left transition sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5 ${isOpen
                          ? "border-blue-400 bg-blue-50/70"
                          : "border-blue-200 bg-blue-50/30 hover:bg-blue-50"
                        }`}
                    >
                      <span className="text-sm font-semibold leading-5 text-blue-600 sm:text-base">
                        {term.title}
                      </span>

                      <span className="flex shrink-0 items-center justify-between gap-2 sm:justify-end">
                        <span className="text-xs font-semibold text-blue-600 sm:text-sm">
                          {term.duration}
                        </span>

                        <ChevronDown
                          className={`h-4 w-4 text-blue-600 transition-transform ${isOpen ? "rotate-180" : ""
                            }`}
                        />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-3 rounded-2xl bg-slate-50 px-4 py-5 sm:px-6 sm:py-6">
                        {term.sections.map((sec, si) => (
                          <div key={si} className={si > 0 ? "mt-5" : ""}>
                            {sec.heading && (
                              <h4 className="text-sm font-bold leading-6 text-slate-900 sm:text-base">
                                {sec.heading}
                              </h4>
                            )}

                            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700 sm:text-[15px]">
                              {sec.items.map((it, ii) => (
                                <li key={ii}>{it}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
              <a
                href="https://wa.me/919912104888"
                className="w-full rounded-md bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-blue-700 sm:w-auto sm:px-7 sm:text-sm"
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
              >
                Start Your Application
              </a>

              <a
                href="mailto:info@phincoelite.com"
                className="w-full rounded-md border-2 border-blue-600 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-blue-600 transition hover:bg-blue-50 sm:w-auto sm:px-7 sm:text-sm">
                Download Syllabus
              </a>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-md sm:p-6 lg:sticky lg:top-6">
            <h3 className="text-center text-lg font-bold leading-7 text-slate-900 sm:text-left">
              Free Career Consultation with an Industry{" "}
              <span className="text-blue-600">Expert</span>
            </h3>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <input
                name="full_name"
                type="text"
                required
                maxLength={100}
                placeholder="Enter your Full Name *"
                className="w-full border-0 border-b border-slate-300 bg-transparent py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-0"
              />

              <input
                name="email"
                type="email"
                required
                maxLength={255}
                placeholder="Enter your Email *"
                className="w-full border-0 border-b border-slate-300 bg-transparent py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-0"
              />

              <div className="flex items-center gap-2 border-b border-slate-300 py-3">
                <span className="shrink-0 text-sm text-slate-600">🇮🇳 +91</span>

                <input
                  name="phone"
                  type="tel"
                  required
                  maxLength={20}
                  placeholder="Phone Number"
                  className="min-w-0 flex-1 border-0 bg-transparent text-sm placeholder:text-slate-400 focus:outline-none focus:ring-0"
                />
              </div>

              <select
                name="course"
                required
                defaultValue=""
                className="w-full border-0 border-b border-slate-300 bg-transparent py-3 text-sm text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-0"
              >
                <option value="" disabled>
                  Select Course *
                </option>

                {COURSES.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>

              <select
                name="profile_type"
                required
                defaultValue=""
                className="w-full border-0 border-b border-slate-300 bg-transparent py-3 text-sm text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-0"
              >
                <option value="" disabled>
                  Profile Type *
                </option>

                {PROFILE_TYPES.map((profile) => (
                  <option key={profile} value={profile}>
                    {profile}
                  </option>
                ))}
              </select>

              <label className="flex items-start gap-2 text-[11px] leading-5 text-slate-400">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-blue-600"
                />

                <span>
                  By submitting the form, you agree to our{" "}
                  <a
                    href={TERMS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-blue-600 underline"
                  >
                    Terms and Conditions
                  </a>{" "}
                  and our{" "}
                  <a
                    href={PRIVACY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-blue-600 underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="w-full cursor-pointer rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Apply For Counselling"}
              </button>
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
}