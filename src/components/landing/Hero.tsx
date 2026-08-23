import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";
// import Sandeep from "@/assets/Sandeep.png";
import sandeep from "@/assets/Sandeep.png";
import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";



function PortraitBadge({
  src,
  tag,
  tagColor,
  className,
  sizeClass,
}: {
  src: string;
  tag: string;
  tagColor: "amber" | "emerald";
  className?: string;
  sizeClass?: string;
}) {
  const ring =
    tagColor === "amber" ? "ring-amber-400/60" : "ring-emerald-400/60";

  const chip =
    tagColor === "amber"
      ? "text-amber-300 border-amber-400/40"
      : "text-emerald-300 border-emerald-400/40";
      
      
        

  return (
    <div className={`absolute ${sizeClass ?? ""} ${className ?? ""}`}>
      <div
        className={`relative h-full w-full overflow-hidden rounded-full ring-3 sm:ring-4 ${ring} shadow-2xl`}
      >
        <img
          src={src}
          alt={tag}
          className="h-full w-full object-cover"
          loading="lazy"
          width={1024}
          height={1024}
        />
      </div>

      <span
        className={`absolute -bottom-3 left-1/2 max-w-[170px] -translate-x-1/2 truncate whitespace-nowrap rounded-full border ${chip} bg-[#030816]/90 px-3 py-1 text-center text-[10px] font-semibold backdrop-blur sm:max-w-none sm:text-[11px]`}
      >
        {tag}
      </span>
    </div>
  );
}
const COURSES = [
  "GenAI & Agentic AI Developer",
  "GenAI & Agentic AI Generalist",
  "Data Science & Analytics OJT",
  "Data Science & Analytics Certification",
  "Services Now for Developer",
  "Services Now for Generalist",
  "Internship for Data Scientists",
  "Masters for Full Stack Developers",
];
const PROFILE_TYPES = [
  "Freshers",
  "Career Gaps & Restarters",
  "IT Working Professionals",
  "Non-IT Working Professionals",
];

export function Hero() {
  const [agreed, setAgreed] = useState(false);
      const [submitting, setSubmitting] = useState(false);
      const EMAILJS_SERVICE_ID = "service_1p7ynrp";
      const EMAILJS_TEMPLATE_ID = "template_0aw959n";
      const EMAILJS_PUBLIC_KEY = "d0BucBhFNX26TUOgd";

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
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(to bottom right, #000, #0b1235 50%, #000)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to bottom left, #3b82f608, transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 pb-8 pt-8 sm:px-6 sm:pb-10 lg:grid-cols-[56%_44%] lg:gap-0 lg:px-8">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[3.2rem] lg:leading-[1.2]">
            Upgrade your Career with{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Learn to Hire Programs
            </span>
            —Because Employers Hire Skills Not Just Degrees 
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm text-white/80 sm:text-lg lg:mx-0">
            Join India’s First{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text font-semibold text-transparent">
              On Job Training Programs
            </span>{" "}
            for any Job Aspirants without Fake Experience
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            
            <Link
                      to="/contact"
                      hash="contactus"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90 sm:w-auto sm:text-base"
                    >
                       <Phone className="h-4 w-4" />
                      Get Expert Callback
            </Link>

             <Link
                      to="/contact"
                      hash="contactus"
                      className="inline-flex w-full items-center justify-center rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:text-base"
                    >
                      Explore Courses
            </Link>
          </div>
        </div>

        {/* <div className="relative mx-auto h-[340px] w-full max-w-[360px] sm:h-[430px] sm:max-w-[480px] lg:h-[480px] lg:max-w-[520px]">
          <PortraitBadge
            src={sandeep}
            tag="Data Scientist at WIPRO"
            tagColor="amber"
            sizeClass="h-[155px] w-[155px] sm:h-[205px] sm:w-[205px] lg:h-[210px] lg:w-[210px]"
            className="left-0 top-10 sm:left-6 sm:top-8 lg:left-2 lg:top-6"
          />

          <PortraitBadge
            src={portrait2}
            tag="Mechanical Engineer to Data analyst"
            tagColor="emerald"
            sizeClass="h-[115px] w-[115px] sm:h-[145px] sm:w-[145px] lg:h-[150px] lg:w-[150px]"
            className="right-0 top-0 sm:right-4 sm:top-0 lg:right-2"
          />

          <PortraitBadge
            src={portrait3}
            tag="From non-tech to a Cloud Engineer"
            tagColor="emerald"
            sizeClass="h-[155px] w-[155px] sm:h-[195px] sm:w-[195px] lg:h-[200px] lg:w-[200px]"
            className="bottom-6 right-4 sm:bottom-8 sm:right-10 lg:bottom-6 lg:right-4"
          />
        </div> */}
        <div className="w-full max-w-md justify-self-center rounded-2xl bg-white p-5 shadow-2xl sm:p-8 lg:justify-self-end">
          <h3 className="text-xl font-bold text-[#0a1e3f] sm:text-2xl">
            Free Counselling with Experts
          </h3>

          <form
            onSubmit={handleSubmit}
            className="mt-5 space-y-4 sm:mt-6 sm:space-y-5"
          >
            <input
              name="full_name"
              type="text"
              required
              maxLength={100}
              placeholder="Enter your Full Name *"
              className={inputClass}
            />

            <input
              name="email"
              type="email"
              required
              maxLength={255}
              placeholder="Enter your Email *"
              className={inputClass}
            />

            <div className="flex items-center gap-3 border-b border-slate-200 py-3">
              <span className="flex shrink-0 items-center gap-1 text-sm">
                 <span className="font-medium text-slate-700">IN</span>
                <span className="text-slate-400">▾</span>
              </span>

              <input
                name="phone"
                type="tel"
                required
                maxLength={20}
                placeholder="+91 XXXXXXXXXX"
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>

            <select
              name="course"
              required
              defaultValue=""
              className={selectClass}
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
              className={selectClass}
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

            <label className="flex items-start gap-3 text-xs leading-relaxed text-slate-400">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#1d6bff]"
              />

              <span>
                By submitting the form, you agree to our{" "}
                <a
                  href="/terms-and-conditions"
                  rel="noreferrer"
                  className="font-medium text-[#1d6bff] underline"
                >
                  Terms and Conditions
                </a>{" "}
                and our{" "}
                <a
                  href="/privacy-policy"
                  rel="noreferrer"
                  className="font-medium text-[#1d6bff] underline"
                >
                  Privacy Policy
                </a>
              </span>
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-[#1d6bff] py-3 text-sm font-semibold text-white shadow-md hover:bg-[#155fd9] disabled:cursor-not-allowed disabled:opacity-60 sm:text-base cursor-pointer"
            >
              {submitting ? "Submitting..." : "Apply For Counselling"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
const inputClass =
  "w-full border-0 border-b border-slate-200 bg-transparent py-3 text-sm outline-none placeholder:text-slate-400 focus:border-[#1d6bff]";

const selectClass =
  "w-full border-0 border-b border-slate-200 bg-transparent py-3 text-sm text-slate-500 outline-none focus:border-[#1d6bff]";