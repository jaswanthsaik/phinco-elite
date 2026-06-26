import emailjs from "@emailjs/browser";
import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

/**
 * EmailJS configuration.
 * Add your real keys here later (or via env vars). The form flow is ready —
 * once these are filled in, submissions will be emailed automatically.
 */
const EMAILJS_SERVICE_ID = "service_1p7ynrp";
const EMAILJS_TEMPLATE_ID = "template_0aw959n";
const EMAILJS_PUBLIC_KEY = "d0BucBhFNX26TUOgd";

const TERMS_URL = "https://phincoelite.com/Terms%20&%20Conditions";
const PRIVACY_URL = "https://phincoelite.com/Privacy-Policy";

const BENEFITS = [
  "Personalized Career Counselling",
  "Online & Offline Modes",
  "Real-World Projects & Mentorship",
  "1-Year Placement Support",
];

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

export function CounsellingForm() {
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
    <section id="contactus" className="bg-background px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left brand panel */}
          <div className="flex flex-col justify-center bg-brand px-8 py-10 text-center text-primary-foreground sm:px-10">
            <h3 className="text-2xl font-extrabold sm:text-3xl">PHINCO</h3>
            <p className="mt-4 text-sm sm:text-base">
              Start your journey into <span className="font-bold">Data Science &amp; Analytics</span>{" "}
              with our job-assured programs.
            </p>
            <ul className="mt-6 space-y-3 text-left">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm sm:text-base">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right form panel */}
          <div className="bg-card px-6 py-8 sm:px-8 sm:py-10">
            <h2 className="text-xl font-extrabold text-brand sm:text-2xl">
              Apply for Free Counselling
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <Field label="Full Name" required>
                <input
                  name="full_name"
                  required
                  maxLength={100}
                  placeholder="Enter your name"
                  className={inputClass}
                />
              </Field>

              <Field label="Email" required>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  placeholder="Enter your email"
                  className={inputClass}
                />
              </Field>

              <Field label="Phone Number" required>
                <input
                  name="phone"
                  type="tel"
                  required
                  maxLength={20}
                  placeholder="+91 XXXXXXXXXX"
                  className={inputClass}
                />
              </Field>

              <Field label="Select Course" required>
                <select name="course" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select a course
                  </option>
                  {COURSES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Profile Type" required>
                <select name="profile_type" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select
                  </option>
                  {PROFILE_TYPES.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </Field>

              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-brand cursor-pointer"
                />
                <span>
                  By providing your contact details, you agree to our{" "}
                  <a
                    href={TERMS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-brand underline"
                  >
                    Terms &amp; Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href={PRIVACY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-brand underline"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-md bg-brand py-3.5 text-sm font-bold text-primary-foreground transition hover:opacity-90 disabled:opacity-60 cursor-pointer"
              >
                {submitting ? "Submitting…" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-brand">*</span>}
      </span>
      {children}
    </label>
  );
}
