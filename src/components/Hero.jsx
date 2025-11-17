export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Safe handling of Sodium Chloride (NaCl)
          </h1>
          <p className="mt-4 text-lg opacity-90">
            A concise guide to properties, hazards, handling, and self-check activities for the most common laboratory salt.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#general" className="inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-white/20 hover:bg-white/20">
              Explore General Info
            </a>
            <a href="#self-check" className="inline-flex items-center justify-center rounded-md bg-white bg-opacity-100 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50">
              Take Self-check
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(1000px_400px_at_10%_10%,white,transparent)]" />
    </section>
  )
}
