export default function CustomAgents() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold">Personalisierte Agenten</h1>
      <p className="mt-3 text-gray-700 max-w-2xl">Ihr eigener digitaler Mitarbeiter – trainiert auf Ihre Marke, Ihre Sprache, Ihre Aufgaben. Multi-Channel (Telefon, WhatsApp, E-Mail), Branding, individuelle Workflows.</p>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold">Beispiele</h2>
          <ul className="mt-3 text-sm text-gray-700 space-y-2 list-disc list-inside">
            <li>Brand Voice & Begrüßung</li>
            <li>Spezifische Prozesse & Eskalation</li>
            <li>Datenschutz & DSGVO</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold">Integration</h2>
          <ul className="mt-3 text-sm text-gray-700 space-y-2 list-disc list-inside">
            <li>Telefon, WhatsApp, E-Mail</li>
            <li>Kalender, CRM, Payment</li>
            <li>On-Prem & SLA (Enterprise)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
