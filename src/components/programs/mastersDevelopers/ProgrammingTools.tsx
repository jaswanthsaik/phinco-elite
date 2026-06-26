const TOOLS = [
  { name: "TensorFlow", color: "text-orange-500" },
  { name: "Jupyter", color: "text-orange-400" },
  { name: "Excel", color: "text-emerald-600" },
  { name: "PyTorch", color: "text-red-500" },
  { name: "Keras", color: "text-red-600" },
  { name: "NumPy", color: "text-blue-700" },
  { name: "pandas", color: "text-indigo-800" },
  { name: "ChatGPT", color: "text-teal-600" },
  { name: "Midjourney", color: "text-slate-700" },
  { name: "matplotlib", color: "text-blue-600" },
  { name: "mongoDB", color: "text-emerald-700" },
  { name: "seaborn", color: "text-slate-500" },
  { name: "hadoop", color: "text-yellow-500" },
  { name: "amazon web services", color: "text-orange-500" },
  { name: "Azure", color: "text-sky-600" },
];

export function ProgrammingTools() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-4xl">
          Programming Languages &amp; Tools Covered
        </h2>

        <div className="mt-12 rounded-2xl bg-slate-50 p-6 sm:p-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
            {TOOLS.map((t) => (
              <div
                key={t.name}
                className="flex h-20 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 shadow-sm transition hover:shadow-md sm:h-24"
              >
                <span className={`text-base font-bold sm:text-lg ${t.color}`}>
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
