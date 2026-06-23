import { Building2, ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";

type Term = {
  title: string;
  duration: string;
  heading?: string;
  sections: { heading?: string; items: string[] }[];
};

const TERMS: Term[] = [
  {
    title: "Induction & Orientation",
    duration: "(3 Days)",
    sections: [
      {
        heading: "Induction + Orientation",
        items: [
          "Overview Of AI, Generative AI, And Agentic AI",
          "Career Paths And Role Mapping For AI Professionals",
          "LinkedIn Profile Optimization For AI & Tech Hiring",
          "Using Python Colab For Hands-On Learning",
          "Learning Workflow, Tools, And Program Onboarding",
        ],
      },
    ],
  },
  {
    title: "Term 1 – Python for GenAI",
    duration: "(1.5 Months)",
    sections: [
      {
        heading: "Python Foundations",
        items: [
          "Python syntax, data types, control flow, and functions",
          "Object-oriented programming and modules",
          "File handling, error handling, and best practices",
          "NumPy and Pandas for data manipulation",
          "Matplotlib and Seaborn for visualization",
        ],
      },
    ],
  },
  {
    title: "Term 2 – Foundation for GenAI",
    duration: "(2 Months)",
    sections: [
      {
        heading: "Statistics & Machine Learning",
        items: [
          "Probability, statistics, and hypothesis testing",
          "Supervised and unsupervised learning algorithms",
          "Feature engineering and model evaluation",
          "Deep learning fundamentals with TensorFlow & PyTorch",
          "Neural networks, CNNs, and RNNs",
        ],
      },
    ],
  },
  {
    title: "Term 3 – Generative AI",
    duration: "(1.5 Months)",
    sections: [
      {
        heading: "GenAI Tools & Frameworks",
        items: [
          "Large Language Models (LLMs) architecture",
          "Prompt engineering and fine-tuning",
          "LangChain, RAG, and vector databases",
          "Building GenAI applications with OpenAI APIs",
          "Image generation with Midjourney and Stable Diffusion",
        ],
      },
    ],
  },
  {
    title: "Term 4 – Agentic AI",
    duration: "(15 Days)",
    sections: [
      {
        heading: "Autonomous AI Agents",
        items: [
          "AutoGPT and agent frameworks",
          "Multi-agent systems and orchestration",
          "Tool use, planning, and reasoning",
          "Deploying production-grade AI agents",
        ],
      },
    ],
  },
  {
    title: "Term 5 – Big Data & Distributed Systems",
    duration: "(1 Month)",
    sections: [
      {
        items: [
          "Big Data & Distributed Systems: Big Data concepts, distributed architecture, Hadoop master–slave structure.",
          "HDFS Operations: File storage model, directories, manipulation commands, permissions, quotas.",
          "MapReduce Framework: Mapper–reducer flow, shuffle/sort, architecture, real-world use cases.",
          "Core Hadoop Components: YARN resource management, Hadoop ecosystem overview, Hive, Pig, HBase, Sqoop.",
        ],
      },
      {
        heading: "Hadoop Ecosystem",
        items: [
          "HDFS basics, architecture, and fault-tolerant storage.",
          "YARN & MapReduce job execution and resource management.",
          "Ecosystem integration: Hive, Sqoop, and SQL/NoSQL connectivity.",
          "Cluster setup, configuration, scaling, and performance tuning.",
        ],
      },
      {
        heading: "Spark Fundamentals",
        items: [
          "Spark Basics: Core features, architecture, RDDs, DAGs, transformations & actions.",
          "Spark Environment Setup: SparkSession, standalone mode, YARN/Mesos cluster management.",
          "RDD & DataFrame Operations: Creation, transformations, actions, interoperability.",
          "Spark SQL: Structured data processing, SQL queries, DataFrame APIs.",
        ],
      },
      {
        heading: "Spark Ecosystem & Advanced Tools",
        items: [
          "Spark Streaming: Real-time pipelines, DStreams/Structured Streaming, Kafka integration.",
          "Spark MLlib: Feature engineering, building & training ML models, model evaluation.",
          "Performance Optimization: Caching, partitioning, Tungsten & Catalyst optimizer basics.",
          "PySpark & Integration: Using Spark with Python, connecting Spark with external data sources.",
        ],
      },
    ],
  },
];

export function ExploreSyllabus() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Explore our Syllabus
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base lg:text-lg">
            Curriculum is specifically engineered to meet the expectations of
            leading tech companies
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 lg:mt-12 lg:grid-cols-[1fr_360px]">
          {/* Syllabus accordion */}
          <div className="relative min-w-0">
            <div className="relative space-y-4 pl-10 sm:pl-14 lg:pl-16">
              {/* Vertical dashed line */}
              <div
                aria-hidden
                className="absolute bottom-6 left-4 top-5 border-l-2 border-dashed border-slate-300 sm:left-6"
              />

              {TERMS.map((term, i) => {
                const isOpen = openIndex === i;

                return (
                  <div key={term.title} className="relative">
                    {/* Timeline icon */}
                    <span
                      className={`absolute -left-10 top-3 z-10 grid h-8 w-8 place-items-center rounded-full border-2 bg-white shadow-sm sm:-left-14 sm:h-10 sm:w-10 lg:-left-16 lg:h-12 lg:w-12 ${
                        isOpen ? "border-blue-500" : "border-slate-300"
                      }`}
                    >
                      {i === 0 ? (
                        <Sparkles className="h-4 w-4 text-blue-500 sm:h-5 sm:w-5" />
                      ) : (
                        <Building2
                          className={`h-4 w-4 sm:h-5 sm:w-5 ${
                            isOpen ? "text-blue-500" : "text-slate-500"
                          }`}
                        />
                      )}
                    </span>

                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className={`flex w-full cursor-pointer flex-col gap-2 rounded-2xl border px-4 py-4 text-left transition sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5 ${
                        isOpen
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
                          className={`h-4 w-4 text-blue-600 transition-transform ${
                            isOpen ? "rotate-180" : ""
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
              <button className="w-full rounded-md bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-blue-700 sm:w-auto sm:px-7 sm:text-sm">
                Start Your Application
              </button>

              <button className="w-full rounded-md border-2 border-blue-600 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-blue-600 transition hover:bg-blue-50 sm:w-auto sm:px-7 sm:text-sm">
                Download Syllabus
              </button>
            </div>
          </div>

          {/* Consultation form */}
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-md sm:p-6 lg:sticky lg:top-6">
            <h3 className="text-center text-lg font-bold leading-7 text-slate-900 sm:text-left">
              Free Consultation with{" "}
              <span className="text-blue-600">Expert</span>
            </h3>

            <form className="mt-5 space-y-4">
              <input
                type="text"
                placeholder="Enter your Full Name *"
                className="w-full border-0 border-b border-slate-300 bg-transparent py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-0"
              />

              <input
                type="email"
                placeholder="Enter your Email *"
                className="w-full border-0 border-b border-slate-300 bg-transparent py-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-0"
              />

              <div className="flex items-center gap-2 border-b border-slate-300 py-3">
                <span className="shrink-0 text-sm text-slate-600">🇮🇳 +91</span>

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="min-w-0 flex-1 border-0 bg-transparent text-sm placeholder:text-slate-400 focus:outline-none focus:ring-0"
                />
              </div>

              <select
                className="w-full border-0 border-b border-slate-300 bg-transparent py-3 text-sm text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-0"
                defaultValue=""
              >
                <option value="" disabled>
                  Work Experience *
                </option>
                <option>0-1 years</option>
                <option>1-3 years</option>
                <option>3-5 years</option>
                <option>5+ years</option>
              </select>

              <p className="text-[11px] leading-5 text-slate-400">
                By submitting the form, you agree to our Terms and Conditions
                and our Privacy Policy.
              </p>

              <button
                type="button"
                className="w-full cursor-pointer rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-700"
              >
                Apply For Counselling
              </button>
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
}