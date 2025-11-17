export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 bg-slate-50">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">About the Team</h2>
      <p className="text-slate-600 mb-8">Roles may overlap; one person can own multiple areas. Replace avatars and names with your actual team.</p>

      <div className="grid gap-6 md:grid-cols-3">
        {[{
          name: 'Alex Rivera', roles: ['Content Specialist', 'Presenter'], avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Alex'
        },{
          name: 'Jamie Lee', roles: ['Web Developer'], avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Jamie'
        },{
          name: 'Morgan Chen', roles: ['Web Designer', 'Content Specialist'], avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Morgan'
        }].map(member => (
          <div key={member.name} className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
            <img src={member.avatar} alt={member.name} className="h-24 w-24 rounded-full" />
            <h3 className="mt-4 font-semibold text-slate-800">{member.name}</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-slate-700">
              {member.roles.map(r => <li key={r}>{r}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
        <h3 className="font-semibold text-slate-800 mb-2">Role Descriptions</h3>
        <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
          <li><span className="font-medium">Content Specialist</span> - approves the content, helps design the layout, and presents the final output.</li>
          <li><span className="font-medium">Web Developer</span> - displays the approved content using HTML and interactivity.</li>
          <li><span className="font-medium">Web Designer</span> - curates images, color palettes, and layouts with CSS.</li>
        </ul>
      </div>
    </section>
  )
}
