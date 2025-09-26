import { Link } from 'react-router-dom'

export default function Demos() {
  const demos = [
    { title: 'Medical Agent – Anrufsimulation', to: '/medical-agent' },
    { title: 'Tony – Reservierungsszenario', to: '/tony' },
    { title: 'Werkstatt – Terminannahme', to: '/werkstatt-manager' },
    { title: 'Ticketing – QR & Plätze', to: '/ticketing' },
  ]
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold">Interaktive Demos</h1>
      <p className="mt-3 text-gray-700 max-w-2xl">Ungated, jederzeit klickbar. Tooltips erklären jeden Schritt. Aha-Erlebnis in 60–90 Sekunden. Am Ende: Live-Demo anfordern.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demos.map((d) => (
          <Link key={d.to} to={d.to} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <h3 className="font-semibold">{d.title}</h3>
            <span className="text-sm font-semibold underline mt-4 inline-block">Zur Demo →</span>
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <a href="#" className="px-5 py-2 rounded-md bg-black text-white">Live-Demo anfordern</a>
      </div>
    </div>
  )
}
