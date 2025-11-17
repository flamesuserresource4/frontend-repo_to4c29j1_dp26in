export default function References() {
  return (
    <section id="references" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">References & Sources</h2>
      <p className="text-slate-600 mb-6">Organized by page/section. Replace with your exact sources and order of appearance.</p>

      <ol className="space-y-6">
        <li>
          <h3 className="font-semibold text-slate-800">Home & General Information</h3>
          <ul className="list-decimal list-inside ml-4 space-y-1 text-sm text-blue-700">
            <li><a href="https://pubchem.ncbi.nlm.nih.gov/compound/Sodium-chloride" target="_blank" rel="noreferrer" className="underline">PubChem: Sodium chloride</a>
              <ul className="list-[lower-alpha] ml-6 text-slate-600">
                <li>Properties and identifiers</li>
              </ul>
            </li>
            <li><a href="https://en.wikipedia.org/wiki/Sodium_chloride" target="_blank" rel="noreferrer" className="underline">Wikipedia: Sodium chloride</a>
              <ul className="list-[lower-alpha] ml-6 text-slate-600">
                <li>General overview and uses</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-semibold text-slate-800">Hazard Identification</h3>
          <ul className="list-decimal list-inside ml-4 space-y-1 text-sm text-blue-700">
            <li><a href="https://www.osha.gov/chemicaldata/na-cl" target="_blank" rel="noreferrer" className="underline">OSHA: Sodium chloride safety</a></li>
            <li><a href="https://www.sigmaaldrich.com/PH/en/sds/usp/7757-82-6" target="_blank" rel="noreferrer" className="underline">Safety Data Sheet (example)</a></li>
          </ul>
        </li>
        <li>
          <h3 className="font-semibold text-slate-800">User Guide</h3>
          <ul className="list-decimal list-inside ml-4 space-y-1 text-sm text-blue-700">
            <li><a href="https://www.cdc.gov/niosh/docs/2005-149/" target="_blank" rel="noreferrer" className="underline">NIOSH Laboratory Safety</a></li>
            <li><a href="https://www.epa.gov/hazardous-waste" target="_blank" rel="noreferrer" className="underline">EPA Hazardous Waste Basics</a></li>
          </ul>
        </li>
        <li>
          <h3 className="font-semibold text-slate-800">Media</h3>
          <ul className="list-decimal list-inside ml-4 space-y-1 text-sm text-blue-700">
            <li>Images from Unsplash used under their license</li>
            <li>YouTube videos embedded for educational purposes</li>
          </ul>
        </li>
      </ol>
    </section>
  )
}
