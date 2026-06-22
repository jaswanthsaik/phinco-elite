import { BriefcaseBusiness, Contact, IdCard, Users } from "lucide-react";

const ITEMS = [
  {
    title: "Placement Support",
    body: "Unlock access to job opportunities, with personalized support to enhance interview readiness and optimize professional profile.",
    icon: BriefcaseBusiness,
    iconColor: "text-blue-600",
  },
  {
    title: "Mock Interviews",
    body: "Sharpen interview skills with tailored mock sessions that simulate real-world scenarios, giving the experience to excel in job interviews.",
    icon: Contact,
    iconColor: "text-emerald-600",
  },
  {
    title: "Resume BuildUp",
    body: "Craft a compelling resume with expert guidance, ensuring your profile stands out in a competitive job market.",
    icon: IdCard,
    iconColor: "text-amber-600",
  },
  {
    title: "Interview Calls",
    body: "Maximize chances of landing the perfect job with interview opportunities, backed by continuous support and feedback.",
    icon: Users,
    iconColor: "text-purple-600",
  },
];

export function PlacementSupport() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Achieve career goals with Placement Support
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl bg-white p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
              >
                <h3 className="text-xl font-bold text-blue-600">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {item.body}
                </p>
                <div className="mt-6 flex justify-end">
                  <Icon className={`h-10 w-10 ${item.iconColor}`} strokeWidth={1.75} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
