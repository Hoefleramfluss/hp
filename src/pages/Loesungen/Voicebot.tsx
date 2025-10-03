import SeoHead from '../../components/SeoHead'
import Breadcrumbs from '../../components/Breadcrumbs'
import { JsonLd, makeBreadcrumbJsonLd } from '../../components/StructuredData'
import { absUrl } from '../../lib/seo'

const Voicebot = () => {
  const breadcrumbJsonLd = makeBreadcrumbJsonLd([
    { name: 'Start', url: absUrl('/') },
    { name: 'Lösungen', url: absUrl('/loesungen/voicebot') },
  ])

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'VoXon.ai Voicebot',
    brand: 'VoXon.ai',
    description:
      'Deutschsprachiger Telefon-Voicebot (DSGVO, EU-Server). Übernimmt Anrufe, Termine, FAQ & Rückrufe für Gastronomie, Medizin und Werkstatt.',
    url: absUrl('/loesungen/voicebot'),
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '0',
      highPrice: '9999',
      offerCount: '3',
    },
  }

  return (
    <>
      <SeoHead
        title="Voicebot Lösung – VoXon.ai (DSGVO, EU-Server)"
        description="Dein deutschsprachiger Telefon-Agent: nimmt Anrufe an, fixiert Termine, beantwortet Fragen und senkt No-Shows."
        url={absUrl('/loesungen/voicebot')}
        canonical={absUrl('/loesungen/voicebot')}
        image={absUrl('/og/voicebot.png')}
      />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Breadcrumbs />

        <header className="max-w-3xl">
          <h1 className="text-4xl font-bold md:text-5xl">Voicebot Lösung für Telefonservice, der begeistert</h1>
          <p className="mt-4 text-lg text-white/80">
            Natürlich klingende Telefon-Assistent:innen, die 24/7 erreichbar sind, Termine buchen, häufige Fragen beantworten
            und dein Team entlasten – made in Austria, DSGVO-sicher. Perfekt für Gastronomie, Medizin und Werkstattbetriebe.
          </p>
        </header>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold">Was dein Voicebot übernimmt</h2>
            <ul className="space-y-2 text-white/80">
              <li>Telefonische Terminvereinbarung inkl. Reminder und Follow-up</li>
              <li>Antworten auf FAQs wie Öffnungszeiten, Behandlungen oder Werkstattkapazitäten</li>
              <li>Intelligente Weiterleitung bei komplexen Fällen oder Notfällen</li>
              <li>Mehrsprachige Dialoge mit natürlicher Stimme (Deutsch/Englisch)</li>
            </ul>

            <h2 className="pt-6 text-2xl font-semibold">Technische Highlights</h2>
            <ul className="space-y-2 text-white/80">
              <li>KI-Dialoge mit GPT-4o Mini & Realtime API, feinjustiert auf deine Branche</li>
              <li>Telefonie via Twilio oder bestehende PBX – inklusive Nummernportierung</li>
              <li>Automation mit Kalender-, CRM- und Ticketsystemen über Integrationen & Webhooks</li>
              <li>Monitoring & Analytics Dashboard für Gesprächsvolumen, NPS und Conversion</li>
            </ul>
          </article>

          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold">Business Impact</h2>
            <p className="mt-3 text-white/80">
              Kunden berichten von bis zu 32 % weniger No-Shows, 40 % geringerer Telefonlast und einer spürbar höheren
              Erreichbarkeit – ohne zusätzliches Personal.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-neon-cyan/40 bg-neon-cyan/10 p-4 text-white">
                <p className="text-sm uppercase tracking-wide text-neon-cyan">DSGVO ready</p>
                <p className="mt-2 text-sm text-white/80">EU-Hosting, verschlüsselte Logs, AV-Vertrag inklusive.</p>
              </div>
              <div className="rounded-2xl border border-electric-violet/40 bg-electric-violet/10 p-4 text-white">
                <p className="text-sm uppercase tracking-wide text-electric-violet">Go-live in Tagen</p>
                <p className="mt-2 text-sm text-white/80">Szenarien-Design, Training und Tests inklusive Perfektions-Garantie.</p>
              </div>
            </div>

            <a
              href="/preise"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-6 py-3 text-center font-semibold text-white shadow-neon-cyan transition hover:shadow-neon-blue"
            >
              Preise ansehen
            </a>
          </aside>
        </div>

        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">FAQ zur Voicebot-Lösung</h2>
          <div className="space-y-4 text-white/80">
            <details className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <summary className="cursor-pointer text-lg font-semibold">Wie lange dauert die Implementierung?</summary>
              <p className="mt-2 text-sm">
                In der Regel 5–10 Werktage. Wir erstellen Gesprächsflows, verbinden Telefonanlage und Tools und testen mit deinem Team,
                bis alles sitzt.
              </p>
            </details>
            <details className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <summary className="cursor-pointer text-lg font-semibold">Welche Integrationen sind möglich?</summary>
              <p className="mt-2 text-sm">
                Standardmäßig unterstützen wir Kalender (Google/Microsoft), Reservierungs-Systeme, CRMs und Zapier. Eigene Integrationen
                realisieren wir über Webhooks und unser Partnernetzwerk.
              </p>
            </details>
            <details className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <summary className="cursor-pointer text-lg font-semibold">Wie sieht das Pricing aus?</summary>
              <p className="mt-2 text-sm">
                Du kombinierst ein Minutenpaket mit optionalen Add-ons. Die Einrichtung ist beim Standard-Plan inklusive – Details findest du
                unter <a className="underline" href="/preise">voxon.app/preise</a>.
              </p>
            </details>
          </div>
        </section>
      </section>
    </>
  )
}

export default Voicebot
