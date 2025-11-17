export default function UserGuide() {
  return (
    <section id="guide" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">User Guide</h2>
        <p className="mt-2 text-slate-600">Follow these recommendations for safe handling, storage, and disposal of sodium chloride in lab and classroom settings.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-3">Handling</h3>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
            <li>Wear basic PPE: lab coat, safety glasses, gloves when handling large quantities.</li>
            <li>Avoid generating dust; use scoopulas and add slowly to water.</li>
            <li>Wash hands after use and avoid contact with eyes.</li>
          </ul>
          <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop" alt="Lab handling" className="mt-4 h-32 w-full object-cover rounded" />
        </div>

        <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-3">Storage</h3>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
            <li>Keep container tightly closed; store in a cool, dry place.</li>
            <li>Segregate from strong acids where corrosion may be a concern.</li>
            <li>Label containers clearly with contents and date.</li>
          </ul>
          <div className="aspect-video mt-4 rounded overflow-hidden">
            <iframe className="h-full w-full" src="https://www.youtube.com/embed/r9D-uvKih_k" title="Storage tips" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-3">Disposal</h3>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
            <li>Small quantities may be diluted with plenty of water and disposed via sink if permitted by local regulations.</li>
            <li>For large quantities, follow institutional waste procedures; avoid release to soil in bulk.</li>
            <li>Recycle or reuse uncontaminated salt when possible.</li>
          </ul>
          <img src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXYXN0ZSUyMGRpc3Bvc2FsfGVufDB8MHx8fDE3NjMzNzk3NzR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Waste disposal" className="mt-4 h-32 w-full object-cover rounded" />
        </div>
      </div>
    </section>
  )
}
