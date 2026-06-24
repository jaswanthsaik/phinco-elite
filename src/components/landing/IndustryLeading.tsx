import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";
import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

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
  "Masters for Developer",
  "Masters for Generalist",
];

const PROFILE_TYPES = [
  "Freshers",
  "Career Gaps & Restarters",
  "IT Working Professionals",
  "Non-IT Working Professionals",
];

const logos = [
  { name: "J.P.Morgan", img: portrait1 },
  { name: "KPMG", img: portrait2 },
  { name: "J.P.Morgan", img: portrait1 },
  { name: "AXA", img: portrait3 },
  { name: "general motors", img: portrait1 },
  { name: "KPMG", img: portrait2 },
  { name: "J.P.Morgan", img: portrait1 },
  { name: "AXA", img: portrait3 },
  { name: "DATA POEM", img: portrait2 },
];

export function IndustryLeading() {
  const scrollingLogos = [...logos, ...logos];

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
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0a2540] via-[#0f1a2a] to-[#3a1a0a] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_420px]">
        {/* Left Content */}
        <div className="min-w-0">
          <h2 className="inline-block max-w-full px-3 py-2 text-2xl font-bold leading-tight text-white sm:px-4 sm:text-1xl md:text-1xl">
            Get Ahead with Industry-Leading Courses
          </h2>

          <div className="mt-6 font-serif text-4xl leading-none text-[#1d6bff] sm:mt-8 sm:text-5xl">
            &ldquo;
          </div>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base">
            I had a great learning experience at Learnbay. The faculties here
            are top notch. Right from enrollment to getting a good job, they
            keep putting enormous efforts for each and every candidate. Thanks
            to all the trainers, backend team.
          </p>

          <div className="mt-5 flex items-center gap-3 sm:mt-6">
            <img
              src={portrait1}
              alt="Shravanthi"
              className="h-11 w-11 rounded-full object-cover sm:h-12 sm:w-12"
            />

            <div>
              <div className="text-sm font-semibold text-orange-400 sm:text-base">
                Shravanth A.
              </div>
              <div className="text-xs font-semibold text-[#1d6bff] sm:text-sm">
                Data Scientist @TCS
              </div>
            </div>
          </div>

          {/* Logo Marquee */}
          <div className="mt-8 w-full overflow-hidden sm:mt-10 lg:w-[90%]">
            <div className="logo-marquee flex w-max gap-3 sm:gap-4">
              {scrollingLogos.map((l, i) => (
                <div
                  key={i}
                  className="flex h-[120px] w-[95px] shrink-0 flex-col overflow-hidden rounded-xl bg-[#0a3a6b] ring-1 ring-white/10 sm:h-[150px] sm:w-[120px] lg:h-[168px] lg:w-[140px]"
                >
                  <div className="flex-1 overflow-hidden">
                    <img
                      src={l.img}
                      alt={l.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="bg-[#0a3a6b] px-1 py-1 text-center text-[9px] font-bold uppercase text-white sm:text-[10px]">
                    {l.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Form */}
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
                <span className="text-lg">🇮🇳</span>
                <span className="text-slate-400">▾</span>
              </span>

              <input
                name="phone"
                type="tel"
                required
                maxLength={20}
                placeholder="+91 XXXXXXXXXX"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none"
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
                  href={TERMS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[#1d6bff] underline"
                >
                  Terms and Conditions
                </a>{" "}
                and our{" "}
                <a
                  href={PRIVACY_URL}
                  target="_blank"
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

      <style>
        {`
          @keyframes logoMarquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .logo-marquee {
            animation: logoMarquee 18s linear infinite;
          }

          .logo-marquee:hover {
            animation-play-state: paused;
          }

          @media (max-width: 640px) {
            .logo-marquee {
              animation-duration: 14s;
            }
          }
        `}
      </style>
    </section>
  );
}

const inputClass =
  "w-full border-0 border-b border-slate-200 bg-transparent py-3 text-sm outline-none placeholder:text-slate-400 focus:border-[#1d6bff]";

const selectClass =
  "w-full border-0 border-b border-slate-200 bg-transparent py-3 text-sm text-slate-500 outline-none focus:border-[#1d6bff]";