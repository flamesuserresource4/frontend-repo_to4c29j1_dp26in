export default function GeneralInfo() {
  return (
    <section id="general" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">General Information</h2>
        <p className="mt-2 text-slate-600">Sodium chloride (NaCl), commonly known as table salt, is an ionic compound composed of sodium and chloride ions. It forms colorless cubic crystals and is highly soluble in water.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
          <img src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1000&auto=format&fit=crop" alt="Salt crystals" className="h-40 w-full object-cover rounded-md" />
          <h3 className="mt-4 font-semibold text-slate-800">Names & Composition</h3>
          <p className="text-sm text-slate-600">IUPAC: Sodium chloride • Common: Table salt • Formula: NaCl • Molar mass: 58.44 g/mol</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
          <img src="https://images.unsplash.com/photo-1618513965492-badaf6cbdfed?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEaXNzb2x2aW5nJTIwc2FsdHxlbnwwfDB8fHwxNzYzMzc5NzczfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Dissolving salt" className="h-40 w-full object-cover rounded-md" />
          <h3 className="mt-4 font-semibold text-slate-800">Properties</h3>
          <p className="text-sm text-slate-600">Appearance: white crystalline solid • Melting point: 801°C • Boiling point: 1465°C • Soluble in water</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
          <img src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1000&auto=format&fit=crop" alt="Salt mine" className="h-40 w-full object-cover rounded-md" />
          <h3 className="mt-4 font-semibold text-slate-800">Occurrence & Uses</h3>
          <p className="text-sm text-slate-600">Abundant in seawater and mineral deposits • Used in food, de-icing, water treatment, and laboratory reagents</p>
        </div>
      </div>
    </section>
  )
}
