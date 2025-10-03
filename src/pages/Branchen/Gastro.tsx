import SeoHead from '../../components/SeoHead'
import Breadcrumbs from '../../components/Breadcrumbs'
import { JsonLd, makeBreadcrumbJsonLd } from '../../components/StructuredData'
import { absUrl } from '../../lib/seo'

const Gastro = () => {
  const breadcrumbJsonLd = makeBreadcrumbJsonLd([
    { name: 'Start', url: absUrl('/') },
    { name: 'Branchen', url: absUrl('/branchen/gastro') },
  ])

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Voicebot in der Gastronomie: No-Shows senken & Telefon entlasten',
    author: { '@type': 'Organization', name: 'VoXon.ai' },
    mainEntityOfPage: absUrl('/branchen/gastro'),
    publisher: { '@type': 'Organization', name: 'VoXon.ai' },
  }

  return (
    <>
      <SeoHead
        title="Gastronomie-Voicebot – Reservierungen & No-Shows | VoXon.ai"
        description="Telefon entlasten, Reservierungen sichern, No-Shows senken. Gastro-Voicebot made in Austria."
        url={absUrl('/branchen/gastro')}
        canonical={absUrl('/branchen/gastro')}
        image={absUrl('/og/gastro.png')}
      />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Breadcrumbs />

        <header className="max-w-3xl">
          <h1 className="text-4xl font-bold md:text-5xl">Gastronomie: Voicebot für stressfreie Reservierungen</h1>
          <p className="mt-4 text-lg text-white/80">
            Dein VoXon.ai Voicebot nimmt Reservierungen entgegen, bestätigt Gäste automatisch und informiert bei Änderungen der Küchenzeiten.
            Weniger No-Shows, mehr Zeit für Service – ohne die persönliche Note zu verlieren.
          </p>
        </header>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold">Telefonservice, der mitdenkt</h2>
            <ul className="space-y-2 text-white/80">
              <li>Reservierungen inklusive Personenzahl, Allergien und Anlass</li>
              <li>Bestätigungen via SMS oder E-Mail samt Kalendereintrag</li>
              <li>Automatisierte Reminder & No-Show-Prävention mit Rückfrage</li>
              <li>Upselling von Menü-Empfehlungen und Spezialevents per Follow-up</li>
            </ul>

            <h2 className="pt-6 text-2xl font-semibold">Integration in deinen Betrieb</h2>
            <ul className="space-y-2 text-white/80">
              <li>Anbindung an Reservierungssysteme (z. B. resmio, OpenTable)</li>
              <li>POS- und CRM-Schnittstellen via Webhooks</li>
              <li>Sprachmodelle trainiert auf österreichische Dialekte</li>
              <li>Compliance: AV-Vertrag, EU-Hosting, revisionsfähige Protokolle</li>
            </ul>
          </article>

          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold">Kennzahlen aus der Gastronomie</h2>
            <p className="mt-3 text-white/80">
              Betriebe berichten von 28 % weniger verpassten Anrufen und 18 % höherem Reservierungsvolumen in Spitzenzeiten –
              bei gleichbleibender Teamgröße.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-neon-cyan/40 bg-neon-cyan/10 p-4 text-white">
                <p className="text-sm uppercase tracking-wide text-neon-cyan">Gäste fokussiert</p>
                <p className="mt-2 text-sm text-white/80">Voicebot informiert proaktiv über Specials, Allergene & Öffnungszeiten.</p>
              </div>
              <div className="rounded-2xl border border-electric-violet/40 bg-electric-violet/10 p-4 text-white">
                <p className="text-sm uppercase tracking-wide text-electric-violet">Küche & Service im Flow</p>
                <p className="mt-2 text-sm text-white/80">Telefonlast sinkt, Team konzentriert sich auf Gäste vor Ort.</p>
              </div>
            </div>

            <a
              href="/kontakt"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-6 py-3 text-center font-semibold text-white shadow-neon-cyan transition hover:shadow-neon-blue"
            >
              Beratung anfragen
            </a>
          </aside>
        </div>

        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">FAQ für Gastronomie-Betriebe</h2>
          <div className="space-y-4 text-white/80">
            <details className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <summary className="cursor-pointer text-lg font-semibold">Kann der Voicebot Dialekte verstehen?</summary>
              <p className="mt-2 text-sm">
                Ja – wir trainieren auf österreichische Aussprache und passen Antworten an dein Corporate Wording an.
              </p>
            </details>
            <details className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <summary className="cursor-pointer text-lg font-semibold">Wie läuft die Integration ab?</summary>
              <p className="mt-2 text-sm">
                Wir clonen deine bestehende Nummer oder stellen eine neue bereit, verbinden Reservierungstools und richten den Flow anhand
                deiner Vorgaben ein. Go-live meist in unter 7 Tagen.
              </p>
            </details>
            <details className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <summary className="cursor-pointer text-lg font-semibold">Was kostet das?</summary>
              <p className="mt-2 text-sm">
                Unsere Pakete starten bei 99 € monatlich inkl. Minutenkontingent, Einrichtung nach Bedarf. Details erhältst du unter
                <a href="/preise" className="underline">voxon.app/preise</a>.
              </p>
            </details>
          </div>
        </section>
      </section>
    </>
  )
}

export default Gastro
