export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: 'Pay-as-you-go',
      features: ['Minutenbasierte Abrechnung', 'Standard-Stimmen', 'E-Mail-Support'],
      cta: 'Loslegen',
    },
    {
      name: 'Pro',
      price: 'Auf Anfrage',
      features: ['Premium-Stimmen', 'Rückruf-Features', 'Priorisierter Support'],
      cta: 'Angebot anfordern',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Vollintegration', 'On-Prem', 'SLA & DPA'],
      cta: 'Kontakt aufnehmen',
    },
  ]
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <p className="mt-3 text-gray-700 max-w-2xl">Fair, transparent, skalierbar – so wie Ihre Anforderungen.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.name} className={`rounded-2xl border p-6 ${t.highlight ? 'border-black shadow-lg' : 'border-gray-200 shadow-sm'}`}>
            <h3 className="font-semibold">{t.name}</h3>
            <div className="mt-2 text-2xl font-bold">{t.price}</div>
            <ul className="mt-4 text-sm text-gray-700 space-y-2 list-disc list-inside">
              {t.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className={`mt-6 w-full px-4 py-2 rounded-md ${t.highlight ? 'bg-black text-white' : 'bg-gray-900 text-white'}`}>{t.cta}</button>
          </div>
        ))}
      </div>
    </div>
  )
}
