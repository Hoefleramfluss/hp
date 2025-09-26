import { Link } from 'react-router-dom'

export default function Products() {
  const items = [
    { title: 'Workflow Medical Agent', to: '/medical-agent', desc: 'Die autonome Praxis – Anrufe, Termine, SMS.' },
    { title: 'Tony (Gastronomie)', to: '/tony', desc: 'Reservierungen sichern, No-Shows reduzieren, Umsatz steigern.' },
    { title: 'Werkstatt-Manager', to: '/werkstatt-manager', desc: 'Termine koordinieren, Annahme entlasten.' },
    { title: 'Ticketing-Plattform', to: '/ticketing', desc: 'QR-Einlass, Sitzplätze, Payment & Statistiken.' },
    { title: 'Personalisierte Agenten', to: '/custom-agents', desc: 'Ihr digitaler Mitarbeiter – auf Marke & Aufgaben trainiert.' },
  ]
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold">Produkte & Lösungen</h1>
      <p className="mt-3 text-gray-700">Ein Agent für jede Herausforderung – modular vernetzt.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <Link key={it.to} to={it.to} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{it.desc}</p>
            <span className="text-sm font-semibold underline mt-4 inline-block">Mehr erfahren →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
