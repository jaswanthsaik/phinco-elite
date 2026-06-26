import { Building2, ShoppingCart, User, Landmark } from "lucide-react";

export function SupportThatMatters() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Support That Matters
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            From Day One to Dream Role—
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              We're with you
            </span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Top Companies */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-orange-300/60 bg-gradient-to-br from-orange-50 to-rose-50 p-7">
            <span className="inline-block rounded-full bg-rose-100 px-4 py-1 text-xs font-bold uppercase tracking-wide text-rose-600">
              Top Companies
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-amber-900">
              ALUMNI WORKING IN 350+ COMPANIES
            </h3>
            <p className="mt-3 text-sm text-gray-700">
              Set your preferences and unlock access to top tech and{" "}
              <strong>product-based</strong> companies <strong>hiring</strong>{" "}
              across domains.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">
              <span className="rounded-md bg-white px-3 py-1.5 shadow-sm">∞ Meta</span>
              <span className="rounded-md bg-white px-3 py-1.5 shadow-sm">● OLA</span>
              <span className="rounded-md bg-white px-3 py-1.5 shadow-sm">amazon</span>
              <span className="rounded-md bg-white px-3 py-1.5 shadow-sm">TITAN</span>
              <span className="rounded-md bg-white px-3 py-1.5 shadow-sm text-rose-600">zomato</span>
              <span className="rounded-md bg-white px-3 py-1.5 shadow-sm">rapido</span>
              <span className="rounded-md bg-white px-3 py-1.5 shadow-sm">MorganStanley</span>
              <span className="rounded-md bg-white px-3 py-1.5 shadow-sm">EY</span>
            </div>
          </div>

          {/* Domain Tracks */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-300/60 bg-gradient-to-br from-emerald-50 to-teal-50 p-7">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
              Domain Tracks
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-emerald-800">
              SPECIALIZE IN THE INDUSTRY YOU WANT
            </h3>
            <p className="mt-3 text-sm text-gray-700">
              Choose from BFSI, Healthcare, Retail, HR, and more. Build expertise
              that matches your career goals.
            </p>
            <div className="pointer-events-none absolute bottom-4 right-4 grid grid-cols-3 gap-3 opacity-80">
              <div className="h-12 w-12 rounded-full bg-emerald-200/70 flex items-center justify-center"><Landmark className="h-5 w-5 text-emerald-700" /></div>
              <div className="h-14 w-14 rounded-full bg-emerald-300/60 flex items-center justify-center"><ShoppingCart className="h-6 w-6 text-emerald-700" /></div>
              <div className="h-10 w-10 rounded-full bg-emerald-200/50" />
              <div className="h-10 w-10 rounded-full bg-emerald-200/60 flex items-center justify-center"><User className="h-4 w-4 text-emerald-700" /></div>
              <div className="h-12 w-12 rounded-full bg-emerald-300/60 flex items-center justify-center"><ShoppingCart className="h-5 w-5 text-emerald-700" /></div>
              <div className="h-16 w-16 rounded-full bg-emerald-300/70 flex items-center justify-center"><Building2 className="h-7 w-7 text-emerald-700" /></div>
            </div>
          </div>

          {/* GenAI + Agentic AI */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-indigo-300/60 bg-gradient-to-br from-indigo-50 to-blue-50 p-7">
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-xs font-bold uppercase tracking-wide text-indigo-700">
              GenAI + Agentic AI
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-blue-700">
              BUILD WITH LANGCHAIN, RAG &amp; AUTOGPT
            </h3>
            <p className="mt-3 text-sm text-gray-700">
              Work hands-on with cutting-edge GenAI tools and frameworks used in{" "}
              <strong>real-world enterprise</strong> applications.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
              <span className="rounded-md border bg-white px-3 py-1.5 shadow-sm">AutoGPT</span>
              <span className="rounded-md border bg-white px-3 py-1.5 shadow-sm">🦜 LangChain</span>
              <span className="rounded-md border border-rose-300 bg-white px-3 py-1.5 shadow-sm text-rose-500">Agentic AI</span>
              <span className="rounded-md border bg-white px-3 py-1.5 shadow-sm text-gray-600">and many more...</span>
            </div>
          </div>

          {/* Job Readiness */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-purple-300/60 bg-gradient-to-br from-purple-50 to-fuchsia-50 p-7">
            <span className="inline-block rounded-full bg-purple-100 px-4 py-1 text-xs font-bold uppercase tracking-wide text-purple-700">
              Job Readiness &amp; Interview Confidence
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-purple-700">
              BECOME JOB-READY WITH PRACTICAL EXPERIENCE
            </h3>
            <p className="mt-3 max-w-sm text-sm text-gray-700">
              Practice real infrastructure and automation scenarios. Get expert
              feedback to confidently clear Data Science interviews.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700">
            Start Your Application
          </button>
        </div>
      </div>
    </section>
  );
}
