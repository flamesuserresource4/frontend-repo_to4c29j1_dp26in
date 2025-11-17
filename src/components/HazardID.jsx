export default function HazardID() {
  return (
    <section id="hazards" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 bg-slate-50">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Hazard Identification</h2>
        <p className="mt-2 text-slate-600">Sodium chloride is generally recognized as safe, but concentrated solutions or large quantities can pose hazards.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
          <img src="https://images.unsplash.com/photo-1565357254165-dd9710e26f82?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjMzNzk3NzR8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="GHS Exclamation" className="h-24 w-24" />
          <h3 className="mt-4 font-semibold text-slate-800">GHS Symbol</h3>
          <p className="text-sm text-slate-600">Exclamation mark (for irritation in high concentrations).</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
          <img src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=1000&auto=format&fit=crop" alt="Irritation" className="h-40 w-full object-cover rounded-md" />
          <h3 className="mt-4 font-semibold text-slate-800">Hazards</h3>
          <p className="text-sm text-slate-600">May cause eye/skin irritation • Inhalation of dust may irritate respiratory tract • Ingestion of excessive amounts may affect health.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
          <div className="aspect-video w-full overflow-hidden rounded-md">
            <iframe className="h-full w-full" src="https://www.youtube.com/embed/Z1Urw0Yv6Yk" title="Salt safety" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <h3 className="mt-4 font-semibold text-slate-800">Potential Effects</h3>
          <p className="text-sm text-slate-600">High sodium intake can impact cardiovascular health; environmental impacts minimal at typical concentrations.</p>
        </div>
      </div>
    </section>
  )
}
