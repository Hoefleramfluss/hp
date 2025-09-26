import { Link, NavLink } from 'react-router-dom'

const navClasses = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'text-black' : 'text-gray-600 hover:text-black'
  }`

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-events-accent to-medical-accent shadow-glow" />
          <span className="font-extrabold tracking-tight">VoiceAgents</span>
          <span className="hidden sm:inline text-xs text-gray-500">Made in Austria 🇦🇹</span>
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/produkte" className={navClasses}>Produkte</NavLink>
          <NavLink to="/demos" className={navClasses}>Demos</NavLink>
          <NavLink to="/pricing" className={navClasses}>Pricing</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/medical-agent" className="hidden sm:inline px-4 py-2 rounded-md border border-gray-200 hover:border-gray-300 text-sm">Für Praxen</Link>
          <Link to="/tony" className="px-4 py-2 rounded-md bg-black text-white text-sm shadow-sm hover:shadow">Für Gastronomie</Link>
        </div>
      </div>
    </header>
  )
}
