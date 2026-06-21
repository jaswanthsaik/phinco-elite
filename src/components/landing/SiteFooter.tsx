import {
  ArrowDown,
  Mail,
  Phone,
} from "lucide-react";

const COURSES = [
  "Generative AI And Agentic AI Master Program For Working Professionals",
  "GenAI & Agentic AI Course For Managers & Leaders",
  "GenAI And Agentic AI Program For Cloud & DevOps",
  "GenAI & Agentic AI Course For Software Developers",
  "Gen AI And Agentic AI Certification Program",
  "Applied AI Practitioner Program",
  "AI-Powered Cloud And DevOps Engineering Course",
  "Cloud & DevOps Training For Network Professionals",
  "Cloud & DevOps Program For System Administrators",
  "Advanced Cloud And DevOps Training Program",
  "Cloud & DevOps Course For IT Support & Operations",
  "Cloud & DevOps Certification For Database Admins",
  "SDE Master Program For Software Developers",
  "Data Science And GenAI Master Certification Program",
  "Data Science And GenAI Program",
  "Data Analytics & Business Analytics Course With Gen AI",
  "Master Of Science In Computer Science With A Specialisation Certificate In Data Science And AI",
];

const LEARNBAY = ["About Us", "Contact Us", "Demo", "Blogs"];
const TERMS = ["Terms And Conditions", "Refund/Cancellation Policy", "Privacy Policy"];

const LABS = [
  {
    city: "Pune",
    address:
      "Ofc No. 408, 4th Floor, City Space, Opp To Fiserv, Viman Nagar, Pune, Maharashtra 411014",
  },
  {
    city: "Mumbai",
    address:
      "Business Centre, 2nd Floor, Apeejay House, Dinshaw Vacha Road, Churchgate, Mumbai, Maharashtra 400020",
  },
  {
    city: "Delhi (NCR)",
    address:
      "Office Number:3, Ground Floor, Building Number D13, Sector : 3, Noida, Uttar Pradesh 201301",
  },
  {
    city: "Kolkata",
    address:
      "Ambuja Neotia EcoCentre 15th Floor, EM-4, EM-Block, Sector 5 Kolkata 700091",
  },
  {
    city: "Hyderabad",
    address: "C9WH+W92, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081",
  },
  {
    city: "Bangalore",
    address:
      "1090 1st Floor, 18th Cross Road, Above Sangam Sweets, Sector 3, HSR Layout, Bengaluru, Karnataka 560102",
  },
  {
    city: "Chennai",
    address:
      "Apeejay Business Centre, Phone Booth, 1st Floor, Apeejay House, 39/12 Haddows Road, Nungambakkam, Chennai 600 006",
  },
];

const SOCIAL = [
  { label: "X", href: "https://x.com", icon: "𝕏" },
  { label: "Facebook", href: "https://facebook.com", icon: "f" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
  { label: "YouTube", href: "https://youtube.com", icon: "▶" },
  { label: "Instagram", href: "https://instagram.com", icon: "◉" },
];

export function SiteFooter() {
  return (
    <footer
      className="bg-[#1f1f1f] text-white"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_2fr_1fr_1.1fr]">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
                <span className="text-xl font-bold text-white">◧</span>
              </div>
              <span className="text-2xl font-bold text-white">Learnbay</span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-white">
              Enrol Now For <span className="font-semibold text-white">Data Science Courses,</span>
              DSA & System Designing Or Full Stack Development Courses. Master The Most Demanding Skills Of
              Job Market And Experience And Ever Growing And Lucrative Career Transformation.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-md text-white ring-1 ring-white/20"
                >
                  <span className="text-xs font-bold">{s.icon}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 space-y-2 text-sm">
              <a href="mailto:contacts@learnbay.co" className="flex items-center gap-2 text-white">
                <Mail className="h-4 w-4 text-white" />
                contacts@learnbay.co
              </a>

              <a href="tel:+917795687988" className="flex items-center gap-2 text-white">
                <Phone className="h-4 w-4 text-white" />
                (+91) 77956 87988
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-base font-semibold text-white">Courses</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {COURSES.map((c) => (
                <li key={c}>
                  <a href="#" className="block leading-snug text-white">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learnbay + Terms */}
          <div className="space-y-8">
            <div>
              <h4 className="text-base font-semibold text-white">Learnbay</h4>
              <ul className="mt-5 space-y-2.5 text-sm">
                {LEARNBAY.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold text-white">Terms</h4>
              <ul className="mt-5 space-y-2.5 text-sm">
                {TERMS.map((t) => (
                  <li key={t}>
                    <a href="#" className="text-white">{t}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Apps + Address */}
          <div>
            <h4 className="text-base font-semibold text-white">Get Our Apps On</h4>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-3 rounded-md bg-white/5 px-4 py-3 text-white ring-1 ring-white/15"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white">
                🤖
              </span>
              <span className="text-sm font-semibold text-white">Get Our Android App</span>
            </a>

            <h4 className="mt-8 text-base font-semibold text-white">Find Us Here</h4>
            <p className="mt-4 text-sm leading-relaxed text-white">
              #1090, 1st Floor, 18th Cross Road HSR Layout Sector 3, Bangalore - 560102 (Above Sangam Sweets)
            </p>
          </div>
        </div>

        {/* Lab addresses */}
        <div className="mt-12 border-t border-white/10 pt-10">
          <h4 className="text-base font-semibold text-white">Project Innovation Lab Address</h4>

          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {LABS.slice(0, 4).map((lab) => (
              <div key={lab.city}>
                <p className="text-sm font-semibold text-white">{lab.city}</p>
                <p className="mt-2 text-xs leading-relaxed text-white">{lab.address}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {LABS.slice(4).map((lab) => (
              <div key={lab.city}>
                <p className="text-sm font-semibold text-white">{lab.city}</p>
                <p className="mt-2 text-xs leading-relaxed text-white">{lab.address}</p>
              </div>
            ))}

            <div className="flex items-end justify-start lg:justify-end">
              <button className="inline-flex items-center gap-2 rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow ring-1 ring-white/20">
                View More
                <ArrowDown className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white">
          Copyright © 2015 - 2026 Learnbay by Learnvista Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}