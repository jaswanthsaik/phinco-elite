import { Building2, ShoppingCart, User, Landmark } from "lucide-react";

export function SupportThatMatters() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Your Success Is Our Priority
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            From Your First Class to Your Dream Job, 
            <span className="bg-gradient-to-r from-indigo-800 to-purple-500 bg-clip-text text-transparent">
              We're With You Throughout the Journey.
            </span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Top Companies */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-orange-300/60 bg-gradient-to-br from-orange-50 to-rose-50 p-7">
            <span className="inline-block rounded-full bg-rose-100 px-4 py-1 text-xs font-bold uppercase tracking-wide text-rose-600">
              Where Our Alumni Work
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-amber-900">
              Our Alumni Are Employed at 350+ Companies
            </h3>
            <p className="mt-3 text-sm text-gray-700">
              Set Your Career Preferences and {" "}
              <strong>Unlock Opportunities with Top Tech and </strong> Product-Based Companies  <strong>Hiring </strong>{" "}
              Across Multiple Domains.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">
              <span className="rounded-md bg-white px-3 py-1.5 shadow-sm">zomato</span>
              <span className="rounded-md bg-white px-3 py-1.5 shadow-sm">MorganStanley</span>
              <span className="rounded-md bg-white px-3 py-1.5 shadow-sm">EY</span>
              <span className="rounded-md bg-white px-3 py-1.5 shadow-sm">TITAN</span>
              <span className="rounded-md bg-white px-3 py-1.5 shadow-sm text-rose-600">Meta</span>
              <span className="rounded-md bg-white px-3 py-1.5 shadow-sm">rapido</span>
              <span className="rounded-md bg-white px-3 py-1.5 shadow-sm">OLA</span>
              <span className="rounded-md bg-white px-3 py-1.5 shadow-sm">Amazon</span>
            </div>
          </div>

          {/* Domain Tracks */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-300/60 bg-gradient-to-br from-emerald-50 to-teal-50 p-7">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
              Choose Your Specialization
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-emerald-800">
              SPECIALIZE IN YOUR CHOSEN INDUSTRY
            </h3>
            <p className="mt-3 text-sm text-gray-700">
              Choose from BFSI, Healthcare, Retail, HR, Manufacturing, and more. Build industry-specific expertise that aligns with your career goals.
            </p>
            {/* <div className="pointer-events-none absolute bottom-4 right-4 hidden grid-cols-3 gap-3 opacity-80 lg:grid">
              <div className="h-12 w-12 rounded-full bg-emerald-200/70 flex items-center justify-center"><Landmark className="h-5 w-5 text-emerald-700" /></div>
              <div className="h-14 w-14 rounded-full bg-emerald-300/60 flex items-center justify-center"><ShoppingCart className="h-6 w-6 text-emerald-700" /></div>
              <div className="h-10 w-10 rounded-full bg-emerald-200/60 flex items-center justify-center"><User className="h-4 w-4 text-emerald-700" /></div>
              <div className="h-12 w-12 rounded-full bg-emerald-300/60 flex items-center justify-center"><ShoppingCart className="h-5 w-5 text-emerald-700" /></div>
              <div className="h-16 w-16 rounded-full bg-emerald-300/70 flex items-center justify-center"><Building2 className="h-7 w-7 text-emerald-700" /></div>
            </div> */}
          </div>

          {/* GenAI + Agentic AI */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-indigo-300/60 bg-gradient-to-br from-indigo-50 to-blue-50 p-7">
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-xs font-bold uppercase tracking-wide text-indigo-700">
              Master GenAI & Agentic AI
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-blue-700">
              with Industry-Leading Frameworks
            </h3>
            <p className="mt-3 text-sm text-gray-700">
              Build production-ready AI agents using {" "}
              <strong>LangChain, RAG, AutoGPT, and other cutting-edge technologies </strong> powering next-generation AI applications.
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
              Career Readiness & Interview Success
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-purple-700">
              Build Skills. Gain Confidence. Get Hired.
            </h3>
            <p className="mt-3 max-w-sm text-sm text-gray-700">
              Work on real-world scenarios, refine your technical expertise, and prepare with expert-led mock interviews. Develop the confidence to crack interviews and launch your career in Data Science, AI, and Analytics.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
          href="/contact#contactus"
           className="rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700">
            Start Your Application
          </a>
        </div>
      </div>
    </section>
  );
}
