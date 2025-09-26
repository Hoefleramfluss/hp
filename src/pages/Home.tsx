import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" aria-label="Hero">
        <video autoPlay muted loop playsInline onError={(e) => e.currentTarget.remove()}>
          <source src="/assets/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="container inner">
          <div className="badge fade-in">🇦🇹 Made in Austria • DSGVO-konform • Ö-Server</div>
          <h1 className="fade-in delay-1">VoiceAgents, die wirklich Arbeit abnehmen.</h1>
          <p className="lead fade-in delay-2">Telefonate lösen, Termine buchen, Daten sauber erfassen – DSGVO-konform, ohne App-Zwang. In &lt;60 Min startklar.</p>
          <div className="fade-in delay-3" style={{marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
            <a href="#start" className="btn btn-primary">Kostenlos starten</a>
            <a href="#demo" className="btn btn-secondary">Live-Demo ansehen</a>
          </div>
          <div className="trust small" style={{marginTop: '14px'}}>
            <span>Keine App nötig</span><span>•</span><span>Kündbar jederzeit</span><span>•</span><span>Minuten 1:1 verrechnet</span>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section" aria-labelledby="benefits-title">
        <div className="container">
          <h2 id="benefits-title" className="center">Für wen es sofort wirkt</h2>
          <div className="grid-3" style={{marginTop: 'var(--s-4)'}}>
            <div className="card"><h3>Arztpraxis</h3><p className="muted">−40 % Telefonlast, Rezepte & Termine 24/7, saubere Dokumentation.</p></div>
            <div className="card"><h3>Gastronomie</h3><p className="muted">Reservierungen & No-Show-Flow, Stammgast-Erkennung, Menü-Beratung.</p></div>
            <div className="card"><h3>Werkstatt</h3><p className="muted">Teile-/Kennzeichen-Erfassung, Rückruf, Kostenvoranschlag-Vorbereitung.</p></div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-sm" aria-labelledby="how-title">
        <div className="container">
          <h2 id="how-title" className="center">So funktioniert's</h2>
          <div className="grid-3" style={{marginTop: 'var(--s-4)'}}>
            <div className="card"><h3>1) Anrufe rein</h3><p className="muted">Der Agent versteht frei gesprochen.</p></div>
            <div className="card"><h3>2) Workflows</h3><p className="muted">Termin/Reservierung in eurer Software.</p></div>
            <div className="card"><h3>3) Belege &amp; DSGVO</h3><p className="muted">Alles protokolliert, nachvollziehbar, sicher.</p></div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="section" aria-labelledby="security-title">
        <div className="container">
          <h2 id="security-title" className="center">Sicherheit &amp; Vertrauen</h2>
          <div className="grid-3" style={{marginTop: 'var(--s-4)'}}>
            <div className="card"><h3>🇦🇹 Made in Austria</h3><p className="muted">Lokale Jurisdiktion & kurze Wege.</p></div>
            <div className="card"><h3>🔒 DSGVO-konform</h3><p className="muted">Datenminimierung, Protokolle, Betroffenenrechte.</p></div>
            <div className="card"><h3>🌐 Österreichische Server</h3><p className="muted">Geringe Latenz, Rechtssicherheit.</p></div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section" id="start" aria-labelledby="pricing-title">
        <div className="container">
          <h2 id="pricing-title" className="center">Preise, die fair sind</h2>
          <div className="pricing" style={{marginTop: 'var(--s-4)'}}>
            <div className="card plan">
              <h3>Start</h3>
              <div className="price">0 € / Monat</div>
              <p className="muted">Gesprächsminuten werden 1:1 weiterverrechnet (kein Aufschlag).</p>
              <Link to="/medical-agent" className="btn btn-primary">Kostenlos starten</Link>
            </div>
            <div className="card plan">
              <h3>Pro</h3>
              <div className="price">Individuell</div>
              <p className="muted">Fixpreis + reduzierte Minuten – für Volumen & Teams.</p>
              <a className="btn btn-secondary" href="#contact">Anfragen</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq" aria-labelledby="faq-title">
        <div className="container">
          <h2 id="faq-title" className="center">FAQ</h2>
          <details><summary>Kündigung jederzeit?</summary><p>Ja, monatlich kündbar.</p></details>
          <details><summary>Installation?</summary><p>In der Regel &lt; 60 Minuten bis zur ersten Live-Nummer.</p></details>
          <details><summary>Kosten?</summary><p>Minuten werden 1:1 weiterverrechnet – ohne Aufschlag.</p></details>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div>© Workflow AI – <Link to="/datenschutz">Datenschutz</Link> • <Link to="/impressum">Impressum</Link></div>
        </div>
      </footer>
    </>
  )
}

 