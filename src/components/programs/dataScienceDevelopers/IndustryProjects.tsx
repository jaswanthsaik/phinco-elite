const TAGS = [
  { label: "Industry relevance", color: "bg-orange-100 text-orange-600" },
  { label: "Data Analytics Tools & Technologies", color: "bg-blue-100 text-blue-600" },
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
    brand: "AMAZON",
    brandClass: "text-black",
    title: "Customer Churn Prediction & Retention Analytics",
    description:
      "Build an AI-powered analytics solution to identify customers likely to churn and recommend personalized retention strategies using historical customer behavior.",
    tools: "Credits: 85/100",
    toolsClass: "bg-orange-50",
    outcome: "Develop predictive churn models, customer segmentation dashboards, and retention strategy recommendations.",
  },
  {
    num: "2",
    brand: "Walmart",
    brandClass: "text-red-600",
    title: "Retail Sales Forecasting Dashboard",
    description:
      "Design an end-to-end analytics solution to forecast sales across stores, optimize inventory, and identify seasonal demand patterns.",
    tools: "Credits: 90/100",
    toolsClass: "bg-blue-50",
    outcome: "Build forecasting models, interactive sales dashboards, and inventory optimization reports.",
  },
  {
    num: "3",
    brand: "UBER",
    brandClass: "text-orange-500",
    title: "Ride Demand & Driver Performance Analytics",
    description: "Analyze ride demand, driver utilization, surge pricing, and customer behavior to improve operational efficiency.",
    tools: "Credits: 85/100",
    toolsClass: "bg-orange-50",
    outcome: "Create KPI dashboards for demand forecasting, driver productivity, and revenue optimization.",
  },
  {
    num: "4",
    brand: "NETFLIX",
    brandClass: "text-red-600",
    title: "Content Recommendation & Viewer Analytics",
    description:
      "Develop an analytics platform to study viewer engagement, content performance, and recommendation effectiveness.",
    tools: "Credits: 85/100",
    toolsClass: "bg-blue-50",
    outcome: "Build recommendation insights, audience segmentation, and content performance dashboards.",
  },
  {
    num: "5",
    brand: "SWIGGY",
    brandClass: "text-blue-600",
    title: "Restaurant Performance & Delivery Analytics",
    description:
      "Analyze restaurant performance, delivery times, and customer satisfaction to drive operational improvements.",
    tools: "Credits: 90/100",
    toolsClass: "bg-blue-50",
    outcome: "Create dashboards for performance monitoring, delivery optimization, and customer satisfaction analysis.",
  },
  {
    num: "6",
    brand: "ICICI Bank",
    brandClass: "text-red-500",
    title: "Fraud Detection & Financial Risk Analytics",
    description:
      "Build a machine learning solution to detect fraudulent transactions and monitor financial risks using transaction data.",
    tools: "Credits: 90/100",
    toolsClass: "bg-orange-50",
    outcome: "Create fraud detection models, risk scoring dashboards, and real-time financial monitoring reports.",
  },
];

const EXPERIENCE = [
  { icon: "📚", label: "Practical Knowledge" },
  { icon: "📋", label: "Projects" },
  { icon: "👥", label: "Lead a Team" },
  { icon: "🎓", label: "Industry Knowledge" },
];

export function IndustryProjects() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
          Hands-On Industry {" "}
          <span className="relative inline-block">
            Projects
            <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-orange-500" />
          </span>
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
              Build Hands-On Experience with
              <br />
              Enterprise-Level Projects
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
          <span className="font-bold text-orange-500">Important Note:</span> The final program structure, including quizzes, assignments, and discussion sessions, will be confirmed closer to the program start date.{" "}
          <a href="/" className="font-semibold text-blue-600 underline">
             Check your eligibility to learn more.
          </a>
        </p>
      </div>
    </section>
  );
}
