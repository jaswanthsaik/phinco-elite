import { useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const COURSES = [
  "GenAI & Agentic AI Developer",
  "GenAI & Agentic AI Generalist",
  "Data Science & Analytics OJT",
  "Data Science & Analytics Certification",
  "Services Now for Developer",
  "Services Now for Generalist",
  "Internship for Data Scientists",
  "Internship for Full Stack Developers",
];

const PROFILE_TYPES = [
  "Freshers",
  "Career Gaps & Restarters",
  "IT Working Professionals",
  "Non-IT Working Professionals",
];

const inputClass =
  "w-full border-0 border-b border-slate-200 bg-transparent py-3 text-sm outline-none placeholder:text-slate-400 focus:border-[#1d6bff]";

const selectClass =
  "w-full border-0 border-b border-slate-200 bg-transparent py-3 text-sm text-slate-500 outline-none focus:border-[#1d6bff]";

interface ContactFormModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactFormModal({
  open,
  onClose,
}: ContactFormModalProps) {
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const EMAILJS_SERVICE_ID = "service_1p7ynrp";
  const EMAILJS_TEMPLATE_ID = "template_0aw959n";
  const EMAILJS_PUBLIC_KEY = "d0BucBhFNX26TUOgd";

  if (!open) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!agreed) {
      toast.error(
        "Please agree to the Terms & Conditions and Privacy Policy."
      );
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

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        payload,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      toast.success(
        "Thanks! Our team will reach out to you shortly."
      );

      form.reset();
      setAgreed(false);
      onClose();
    } catch {
      toast.error(
        "Something went wrong. Please try again or call us."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-8">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-slate-600 hover:bg-slate-100"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="text-xl font-bold text-[#0a1e3f] sm:text-2xl">
          Free Counselling with Experts
        </h3>

        <form
          onSubmit={handleSubmit}
          className="mt-5 space-y-4"
        >
          <input
            name="full_name"
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

          <input
            name="phone"
            type="tel"
            required
            maxLength={20}
            placeholder="+91 XXXXXXXXXX"
            className={inputClass}
          />

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

          <label className="flex items-start gap-3 text-xs text-slate-400">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) =>
                setAgreed(e.target.checked)
              }
              className="mt-0.5 h-4 w-4 accent-[#1d6bff]"
            />

            <span>
              By submitting the form, you agree to our{" "}
              <a
                href="/terms-and-conditions"
                className="text-[#1d6bff] underline"
              >
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a
                href="/privacy-policy"
                className="text-[#1d6bff] underline"
              >
                Privacy Policy
              </a>
            </span>
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-[#1d6bff] py-3 text-white disabled:opacity-60"
          >
            {submitting
              ? "Submitting..."
              : "Apply For Counselling"}
          </button>
        </form>
      </div>
    </div>
  );
}