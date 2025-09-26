export default function Tony() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold">Tony – Der unsichtbare Maître d’</h1>
      <p className="mt-3 text-gray-700 max-w-2xl">Ihr Telefon ist jetzt Ihr bester Verkäufer. Nach Feierabend anrufen? Ausgebucht? Tony schlägt Alternativen vor, nimmt Anzahlungen und sichert Reservierungen.</p>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold">Demo (Szenario)</h2>
          <ul className="mt-3 text-sm text-gray-700 list-disc list-inside space-y-2">
            <li>Anruf nach Feierabend</li>
            <li>Vorschlag Alternative (Zeit/Datum)</li>
            <li>Anzahlung angeboten</li>
            <li>Reservierung gesichert</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold">Beweise</h2>
          <ul className="mt-3 text-sm text-gray-700 space-y-2">
            <li>Umsatzsteigerung: +18–25%</li>
            <li>No-Show-Reduktion: -45%</li>
            <li>Gästezufriedenheit: 4.7/5</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
