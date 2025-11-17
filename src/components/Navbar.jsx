import { Link, useLocation } from 'react-router-dom'
import { Info, ShieldAlert, BookOpenCheck, HelpCircle, Users, Link2, Home } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/general', label: 'General Info', icon: Info },
  { to: '/hazards', label: 'Hazard ID', icon: ShieldAlert },
  { to: '/guide', label: 'User Guide', icon: BookOpenCheck },
  { to: '/self-check', label: 'Self-check', icon: HelpCircle },
  { to: '/about', label: 'About', icon: Users },
  { to: '/references', label: 'References', icon: Link2 },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="font-semibold text-slate-800 tracking-tight">ChemSafe</Link>
          <div className="hidden md:flex items-center gap-2">
            {navItems.map(({ to, label, icon: Icon }) => {
              const active = location.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                    active
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              )
            })}
          </div>
          <div className="md:hidden">
            <div className="flex items-center gap-2">
              {navItems.slice(0,4).map(({ to, label, icon: Icon }) => {
                const active = location.pathname === to
                return (
                  <Link
                    key={to}
                    to={to}
                    className={`p-2 rounded-md ${active ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
                    aria-label={label}
                    title={label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
