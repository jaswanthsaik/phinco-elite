import {
  BarChart3,
  BrainCircuit,
  Briefcase,
  Building2,
  Car,
  CheckCircle2,
  Cloud,
  CloudCog,
  Code2,
  Database,
  Factory,
  Film,
  GraduationCap,
  HeartPulse,
  Landmark,
  Megaphone,
  Package,
  PieChart,
  Pill as PillIcon,
  Plane,
  RadioTower,
  Rocket,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Truck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { ComponentType } from "react";

type ChipColor = "blue" | "violet" | "amber" | "emerald" | "rose" | "sky" | "orange";

const colorMap: Record<ChipColor, { bg: string; fg: string }> = {
  blue: { bg: "bg-chip-blue", fg: "text-blue-600" },
  violet: { bg: "bg-chip-violet", fg: "text-violet-600" },
  amber: { bg: "bg-chip-amber", fg: "text-amber-600" },
  emerald: { bg: "bg-chip-emerald", fg: "text-emerald-600" },
  rose: { bg: "bg-chip-rose", fg: "text-rose-600" },
  sky: { bg: "bg-chip-sky", fg: "text-sky-600" },
  orange: { bg: "bg-chip-orange", fg: "text-orange-600" },
};

type Item = { label: string; Icon: ComponentType<{ className?: string }>; color: ChipColor };

const row1: Item[] = [
  { label: "Data Analyst", Icon: BarChart3, color: "blue" },
  { label: "Business Analyst", Icon: Briefcase, color: "sky" },
  { label: "HR Analyst", Icon: Users, color: "violet" },
  { label: "Operations Analyst", Icon: PieChart, color: "emerald" },
  { label: "Risk Analyst", Icon: ShieldCheck, color: "rose" },
  { label: "Business Intelligence Analyst", Icon: Database, color: "blue" },
  { label: "Software Developer", Icon: Code2, color: "orange" },
  { label: "MEAN Developer", Icon: Code2, color: "emerald" },
  { label: "MERN Developer", Icon: Code2, color: "sky" },
  { label: "Automation Engineer", Icon: Settings, color: "violet" },
  { label: "Data Scientist", Icon: BrainCircuit, color: "blue" },
  { label: "Quality Analyst", Icon: CheckCircle2, color: "emerald" },
  { label: "Cyber Analyst", Icon: ShieldCheck, color: "rose" },
  { label: "Digital Marketer", Icon: Megaphone, color: "orange" },
  { label: "DevOps Engineer", Icon: CloudCog, color: "sky" },
  { label: "SAP", Icon: Database, color: "violet" },
  { label: "Salesforce", Icon: Sparkles, color: "blue" },
  { label: "ServiceNow", Icon: Workflow, color: "emerald" },
];

const row2: Item[] = [
  { label: "IT Services", Icon: Cloud, color: "sky" },
  { label: "Healthcare", Icon: HeartPulse, color: "blue" },
  { label: "BFSI", Icon: Landmark, color: "violet" },
  { label: "Retail & E-Commerce", Icon: ShoppingCart, color: "orange" },
  { label: "Manufacturing", Icon: Factory, color: "emerald" },
  { label: "Sales & Marketing", Icon: Megaphone, color: "rose" },
  { label: "Human Resources & Recruitment", Icon: Users, color: "violet" },
  { label: "Supply Chain & Logistics", Icon: Truck, color: "sky" },
  { label: "Education & EdTech", Icon: GraduationCap, color: "blue" },
  { label: "Telecommunications", Icon: RadioTower, color: "emerald" },
  { label: "Real Estate", Icon: Building2, color: "orange" },
  { label: "Travel & Hospitality", Icon: Plane, color: "sky" },
  { label: "Pharmaceutical", Icon: PillIcon, color: "rose" },
  { label: "FMCG", Icon: Package, color: "amber" },
  { label: "Energy & Utilities", Icon: Zap, color: "emerald" },
  { label: "Automobile", Icon: Car, color: "blue" },
  { label: "Aviation & Aerospace", Icon: Rocket, color: "violet" },
  { label: "Media & Entertainment", Icon: Film, color: "orange" },
  { label: "Artificial Intelligence & Data Analytics", Icon: BrainCircuit, color: "blue" },
  { label: "Government & Public Sector", Icon: Landmark, color: "violet" },
];

function Pill({ item }: { item: Item }) {
  const c = colorMap[item.color];
  return (
    <div className="mx-2 inline-flex shrink-0 items-center gap-3 rounded-2xl bg-card px-5 py-3 shadow-sm ring-1 ring-black/5">
      <span className={`grid h-10 w-10 place-items-center rounded-full ${c.bg}`}>
        <item.Icon className={`h-5 w-5 ${c.fg}`} />
      </span>
      <span className="whitespace-nowrap text-sm font-semibold text-foreground">{item.label}</span>
    </div>
  );
}

function Row({ items, direction }: { items: Item[]; direction: "left" | "right" }) {
  const doubled = [...items, ...items];
  return (
    <div className="group overflow-hidden">
      <div
        // className={`flex w-max ${direction === "left" ? "marquee-track-left" : "marquee-track-right"} group-hover:[animation-play-state:paused]`}
        className={`flex w-max ${direction === "left" ? "marquee-track-left" : "marquee-track-right"}`}
      >
        {doubled.map((it, i) => (
          <Pill key={`${it.label}-${i}`} item={it} />
        ))}
      </div>
    </div>
  );
}

export function DomainsStrip() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-panel px-4 py-12 sm:px-8 sm:py-16">
          <h2 className="text-center text-2xl font-extrabold leading-tight text-foreground sm:text-3xl lg:text-4xl">
            Upskill and transform your career in latest
            <br className="hidden sm:block" />{" "}
            <span className="text-brand">technologies</span> and <span className="text-brand">domains</span>
          </h2>

          <div className="mt-10 space-y-5">
            <Row items={row1} direction="left" />
            <Row items={row2} direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
}
