export default function Werkstatt() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold">Werkstatt-Manager</h1>
      <p className="mt-3 text-gray-700 max-w-2xl">Der Agent, der Termine koordiniert, damit Ihre Mechaniker schrauben können. Anliegen erfassen, Kalender prüfen, bestätigen.</p>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold">Szenario</h2>
          <ul className="mt-3 text-sm text-gray-700 list-disc list-inside space-y-2">
            <li>Anrufer schildert Problem</li>
            <li>Priorität & Dauer abgeschätzt</li>
            <li>Kalenderabgleich & Termin</li>
            <li>SMS-Bestätigung</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold">Kennzahlen</h2>
          <ul className="mt-3 text-sm text-gray-700 space-y-2">
            <li>Entlastung am Empfang: +50%</li>
            <li>Höhere Auslastung: +15%</li>
            <li>Weniger Fehlbuchungen: -30%</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
