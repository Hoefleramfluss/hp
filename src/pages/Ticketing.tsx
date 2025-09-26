export default function Ticketing() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold">Ticketing-Plattform</h1>
      <p className="mt-3 text-gray-700 max-w-2xl">Jedes Ticket zählt – volle Kontrolle über Plätze, QR-Einlass & Einnahmen.</p>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold">Features</h2>
          <ul className="mt-3 text-sm text-gray-700 space-y-2 list-disc list-inside">
            <li>QR-Prüfung am Einlass</li>
            <li>Sitzplatzzuweisung</li>
            <li>Payment-Integration</li>
            <li>Statistiken & Abrechnung</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold">Szenario</h2>
          <p className="mt-3 text-sm text-gray-700">Echtzeit-Übersicht, sichere Kontrolle und zufriedene Besucher.</p>
        </div>
      </div>
    </div>
  )
}
