const TAGS = [
  { label: "95% industry relevance", color: "bg-orange-100 text-orange-600" },
  { label: "10+ tools and modules", color: "bg-blue-100 text-blue-600" },
  { label: "100% real-world experience", color: "bg-emerald-100 text-emerald-600" },
];

type Project = {
  num: string;
  brand: string;
  brandClass: string;
  title: string;
  description: string;
  tools: string;
  toolsClass: string;
  outcome: string;
};

const PROJECTS: Project[] = [
  {
    num: "1",
    brand: "Jp Morgan",
    brandClass: "text-black",
    title: "Loan Approval Prediction System",
    description:
      "Develop a predictive model to analyze applicant data and determine loan approval probability.",
    tools: "Python • Statistics",
    toolsClass: "bg-orange-50",
    outcome: "Build a classification model with real-world business insights.",
  },
  {
    num: "2",
    brand: "Optum",
    brandClass: "text-red-600",
    title: "Disease Prediction & Patient Analytics",
    description:
      "Analyze patient datasets and build an AI model for disease-risk prediction and healthcare insights.",
    tools: "Python • Pandas • Streamlit",
    toolsClass: "bg-blue-50",
    outcome: "Create an end-to-end predictive analytics application.",
  },
  {
    num: "3",
    brand: "Amazon",
    brandClass: "text-orange-500",
    title: "Smart Travel Recommendation System",
    description: "Create an AI-powered travel assistant for recommending destinations, hotels, and personalized travel plans.",
    tools: " Python • APIs • Streamlit",
    toolsClass: "bg-orange-50",
    outcome: "Build and deploy an intelligent GenAI travel application.",
  },
  {
    num: "4",
    brand: "NETFLIX",
    brandClass: "text-red-600",
    title: "Content Recommendation System",
    description:
      "Build a machine learning model that recommends movies and shows based on user preferences and viewing patterns.",
    tools: "Python • Pandas ",
    toolsClass: "bg-blue-50",
    outcome: "Build and deploy a personalized recommendation engine.",
  },
  {
    num: "5",
    brand: "Infosys",
    brandClass: "text-blue-600",
    title: "E-Commerce Customer Analytics & Recommendation Engine",
    description:
      "Analyze customer purchasing behavior, products, sales trends, and generate personalized recommendations.",
    tools: "Python • SQL • Power BI",
    toolsClass: "bg-orange-50",
    outcome: "Create customer segmentation and product recommendation insights.",
  },
  {
    num: "6",
    brand: "make my trip",
    brandClass: "text-red-500",
    title: "Developing Property Booking System",
    description:
      "Create a booking management system for hotels that supports user reservations and room management.",
    tools: "SQL  •  POWER BI",
    toolsClass: "bg-orange-50",
    outcome: "Implement a normalized database schema for hotels, rooms.",
  },
];

const EXPERIENCE = [
  { icon: "📚", label: "Practical Skills" },
  { icon: "📋", label: "Project Life Cycle" },
  { icon: "👥", label: "Lead a Team" },
  { icon: "🎓", label: "Industry Knowledge" },
];

export function IndustryProjects() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
          Industry{" "}
          <span className="relative inline-block">
            Projects
            <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-orange-500" />
          </span>(Opt Any 5)
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          {TAGS.map((t) => (
            <span
              key={t.label}
              className={`rounded-full px-5 py-2 text-sm font-semibold ${t.color}`}
            >
              {t.label}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <div
              key={p.num}
              className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
            >
              <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#0a1a3d] px-4 py-2 text-sm font-bold text-white">
                {p.num}
              </div>
              <div className={`text-2xl font-bold ${p.brandClass}`}>{p.brand}</div>
              <h3 className="mt-4 text-base font-bold text-blue-600">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">{p.description}</p>
              <div className={`mt-5 flex items-center justify-center gap-3 rounded-xl ${p.toolsClass} px-4 py-3 text-sm font-semibold text-gray-700`}>
                {p.tools}
              </div>
              <p className="mt-5 text-sm text-gray-700">
                <span className="font-bold text-blue-600">Outcome:</span> {p.outcome}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-r from-[#5a2a1a] via-[#3a1a3d] to-[#0a1a3d] p-6 sm:p-8">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Gain Practical Experience with
              <br />
              Real-World Projects
            </h3>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {EXPERIENCE.map((e) => (
                <div key={e.label} className="flex flex-col items-center text-center">
                  <span className="text-2xl">{e.icon}</span>
                  <span className="mt-2 text-xs font-semibold text-white sm:text-sm">{e.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-700">
          <span className="font-bold text-orange-500">Important Note:</span> The final number of quizzes, assignments, and discussions will be confirmed closer to the program start. To know more{" "}
          <a href="/" className="font-semibold text-blue-600 underline">
            check eligibility
          </a>
        </p>
      </div>
    </section>
  );
}
