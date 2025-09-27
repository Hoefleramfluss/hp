import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Users, Stethoscope, Wrench, Phone, Calendar, Shield, Zap, CheckCircle, Lock, Menu, X } from 'lucide-react'

/* BACKUP - OLD HERO CONTENT:
{/* Hero Section *//*}
<section className="hero-modern" aria-label="Hero">
  <div className="hero-bg"></div>
  <div className="container hero-content">
    <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
      <h1 className="hero-title">Autonomie statt Apps.</h1>
      <p className="hero-subtitle">KI-Agents & Voicebots, die Front-Office-Arbeit erledigen – für Gastronomie, Arztpraxen & Werkstätten.</p>
      <div className="hero-ctas">
        <button onClick={scrollToDemo} className="btn btn-primary">
          <Play className="w-4 h-4" />
          Demo ansehen
        </button>
        <a href="#trial" className="btn btn-secondary">In 60 Sek. testen</a>
      </div>
      <div className="trust-badges">
        <span>🇦🇹 Made in Austria</span>
        <span>•</span>
        <span>DSGVO-konform</span>
        <span>•</span>
        <span>EU-Server</span>
        <span>•</span>
        <span>Ohne App-Zwang</span>
      </div>
    </div>
  </div>
  <div className="hero-scroll">
    <ChevronDown className="w-5 h-5 animate-bounce" />
  </div>
</section>
*/

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Navigation */}
      <nav className="nav-sticky">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img src="/img/logo.png" alt="Workflow AI" className="nav-logo-img" />
            <span className="nav-wordmark">Workflow AI</span>
          </Link>
          <div className="nav-desktop">
            <button onClick={() => scrollToSection('demo')} className="nav-link">Demo</button>
            <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Kontakt</button>
            <button onClick={() => scrollToSection('trial')} className="btn btn-primary btn-sm">In 60 Sek. testen</button>
          </div>
          <button className="nav-mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="nav-mobile-menu">
            <button onClick={() => scrollToSection('demo')} className="nav-mobile-link">Demo</button>
            <button onClick={() => scrollToSection('features')} className="nav-mobile-link">Features</button>
            <button onClick={() => scrollToSection('pricing')} className="nav-mobile-link">Pricing</button>
            <button onClick={() => scrollToSection('contact')} className="nav-mobile-link">Kontakt</button>
            <button onClick={() => scrollToSection('trial')} className="btn btn-primary">In 60 Sek. testen</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-new reveal" aria-label="Hero">
        <div className="hero-bg-new"></div>
        <div className="container">
          <div className="hero-content-new">
            <h1 className="hero-h1">Autonomie statt Apps.</h1>
            <p className="hero-subline">KI-Agents & Voicebots - Technologie die Sinn macht – exklusiv für Gastronomie, Arztpraxen & Werkstätten.</p>
            <div className="hero-ctas-new">
              <button onClick={() => scrollToSection('demo')} className="btn btn-primary btn-lg">
                Demo anhören
              </button>
              <button onClick={() => scrollToSection('trial')} className="btn btn-outline btn-lg">
                In 60 Sek. testen
              </button>
            </div>
            <div className="trust-row">
              <span>Made in Austria</span>
              <span>•</span>
              <span>DSGVO-konform</span>
              <span>•</span>
              <span>EU-Server</span>
              <span>•</span>
              <span>Ab 0€ starten</span>
            </div>
          </div>
        </div>
      </section>

      {/* Target Groups Section */}
      <section className="section-new reveal">
        <div className="container">
          <div className="target-groups-grid">
            {/* Gastronomie */}
            <div className="target-card-new">
              <div className="target-icon-new gastro">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="target-title">Jetzt in schwierigen Zeiten sind wir für Sie da - weniger Telefon mehr Fokus auf Umsatz.</h3>
              <p className="target-description">Dein Voice-Agent nimmt Reservierungen an, klärt Allergene, kennt deine Speisekarte, beantwortet ALLE FAQ's und verhindert No-Shows.</p>
              <ul className="target-bullets">
                <li>10 Jahre Erfahrung in der Gastronomie</li>
                <li>Reservierungen, Erinnerungen & Rückrufe automatisch</li>
                <li>Bewerbermanagement</li>
                <li>Tagesempfehlungen & Allergene auf Zuruf</li>
                <li>No-Show-Reminder & freundliche Nachfassung</li>
              </ul>
              <Link to="/gastro" className="btn btn-outline">Mehr für Gastro →</Link>
            </div>

            {/* Arztpraxis */}
            <div className="target-card-new">
              <div className="target-icon-new medical">
                <Stethoscope className="w-8 h-8" />
              </div>
              <h3 className="target-title">Empfang entlasten, Patienten führen.</h3>
              <p className="target-description">Lassen Sie Aufgaben wie Terminvereinbarungen, Rezeptverlängerungen und Erinnerungen automatisieren – sicher & absolut DSGVO-Konform.</p>
              <ul className="target-bullets">
                <li>Termine prüfen/buchen nach Regeln</li>
                <li>Rezeptverlängerung strukturiert erfassen</li>
                <li>DSGVO & AT-Hosting, kein App-Zwang</li>
                <li>Eigene Web-App mit Anschluss Ihrer Praxissoftware, keine doppelte Arbeit</li>
              </ul>
              <Link to="/arzt" className="btn btn-outline">Mehr für Arztpraxen →</Link>
            </div>

            {/* Werkstatt */}
            <div className="target-card-new">
              <div className="target-icon-new workshop">
                <Wrench className="w-8 h-8" />
              </div>
              <h3 className="target-title">Annahme wie von selbst.</h3>
              <p className="target-description">Der Agent plant Termine, fragt Fahrzeugdaten ab und hält Kunden am Laufenden.</p>
              <ul className="target-bullets">
                <li>Terminierung inkl. Ersatzteil-Check über API Anbindungen Ihrer Partner</li>
                <li>VIN/KM/Fehlerbild sauber erfasst</li>
                <li>Status-SMS & Abhol-Erinnerung</li>
                <li>Automatische tägliche Erinnerungsanrufe inkl. Up-Selling nach Regeln</li>
              </ul>
              <Link to="/werkstatt" className="btn btn-outline">Mehr für Werkstätten →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="section-new demo-new reveal">
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: '2rem', color: 'white'}}>Live Demo</h2>
          <div className="demo-video-new">
            <video 
              controls
              muted 
              playsInline 
              poster="/video/hero-poster.jpg"
              className="demo-video-element"
              style={{
                width: '100%',
                maxWidth: '800px',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
              }}
            >
              <source src="/video/hero-video.mp4" type="video/mp4" />
              <p style={{color: 'white', textAlign: 'center', padding: '2rem'}}>
                Ihr Browser unterstützt das Video-Element nicht. 
                <a href="/video/hero-video.mp4" style={{color: '#33cc66'}}>Video direkt ansehen</a>
              </p>
            </video>
          </div>
          <div className="how-steps-new">
            <div className="step-new">
              <div className="step-icon"><Phone className="w-6 h-6" /></div>
              <h4>Anruf</h4>
              <p>Kunde spricht frei</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-new">
              <div className="step-icon"><Zap className="w-6 h-6" /></div>
              <h4>Verstehen</h4>
              <p>Agent erkennt Intention & fragt gezielt nach</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-new">
              <div className="step-icon"><CheckCircle className="w-6 h-6" /></div>
              <h4>Erledigen</h4>
              <p>Termin/Eintrag/Bestätigung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="section-new features-new reveal">
        <div className="container">
          <div className="features-grid-new">
            <div className="feature-new">
              <div className="feature-icon"><Phone className="w-6 h-6" /></div>
              <h4>Natürliche, warme Stimme</h4>
              <p>Klingt menschlich und vertrauenswürdig</p>
            </div>
            <div className="feature-new">
              <div className="feature-icon"><Zap className="w-6 h-6" /></div>
              <h4>Freie Sprache (Intent-Erkennung)</h4>
              <p>Versteht natürliche Sprache und Dialekt</p>
            </div>
            <div className="feature-new">
              <div className="feature-icon"><Calendar className="w-6 h-6" /></div>
              <h4>Kalender/CRM-Hooks</h4>
              <p>Nahtlose Integration in bestehende Systeme</p>
            </div>
            <div className="feature-new">
              <div className="feature-icon"><Shield className="w-6 h-6" /></div>
              <h4>Sichere Datenhaltung in der EU</h4>
              <p>DSGVO-konform, österreichische Server</p>
            </div>
            <div className="feature-new">
              <div className="feature-icon"><CheckCircle className="w-6 h-6" /></div>
              <h4>In Minuten einsatzbereit</h4>
              <p>Schnelle Einrichtung ohne IT-Aufwand</p>
            </div>
            <div className="feature-new">
              <div className="feature-icon"><Lock className="w-6 h-6" /></div>
              <h4>Kein Vendor-Lock-in</h4>
              <p>Jederzeit kündbar, Ihre Daten bleiben Ihnen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-new pricing-new reveal">
        <div className="container">
          <div className="pricing-content">
            <h2>Transparent & Fair</h2>
            <p className="pricing-text">Pilot gratis. Nur ~€0,23/Min Gesprächsgebühr – 1:1 weiterverrechnet.</p>
            <button onClick={() => scrollToSection('trial')} className="btn btn-primary btn-lg">
              Unverbindlich starten
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-new social-new reveal">
        <div className="container">
          <div className="testimonial-new">
            <blockquote>
              "Seit dem ersten Tag ist das Telefon entlastet – und unsere Patienten verstehen alles auf Anhieb."
            </blockquote>
            <cite>– Praxisleitung, Niederösterreich</cite>
          </div>
          <div className="partners-row">
            <img src="/img/partner-arlsuites.png" alt="ArlSuites" className="partner-logo" loading="lazy" />
            <img src="/img/partner-hoefler.png" alt="Höfler am Fluss" className="partner-logo" loading="lazy" />
            <img src="/img/partner-rakoczi.png" alt="Rákóczi Ferenc" className="partner-logo" loading="lazy" />
            <img src="/img/partner-svs.png" alt="SVS" className="partner-logo" loading="lazy" />
            <img src="/logos/workflowai-mark.svg" alt="Workflow AI" className="partner-logo" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Trial Form Section */}
      <section id="trial" className="section-new trial-new reveal">
        <div className="container">
          <div className="trial-content">
            <h2>In 60 Sekunden startklar</h2>
            <form className="trial-form" action="mailto:hello@workflow-ai.at" method="post" encType="text/plain">
              <div className="form-row">
                <input type="text" name="name" placeholder="Ihr Name" required className="form-input" />
                <input type="email" name="email" placeholder="E-Mail" required className="form-input" />
              </div>
              <input type="tel" name="phone" placeholder="Telefon (optional)" className="form-input" />
              <button type="submit" className="btn btn-primary btn-lg btn-full">
                Kostenlos starten
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer-new" role="contentinfo">
        <div className="container">
          <div className="footer-content-new">
            <div className="footer-brand-new">
              <img src="/img/logo.png" alt="Workflow AI" className="footer-logo" />
              <p>Autonome KI-Agents für Ihr Business</p>
            </div>
            <div className="footer-links-new">
              <Link to="/impressum">Impressum</Link>
              <span>•</span>
              <Link to="/datenschutz">Datenschutz</Link>
              <span>•</span>
              <a href="mailto:hello@workflow-ai.at">E-Mail</a>
              <span>•</span>
              <a href="https://t.me/workflowai" target="_blank" rel="noopener">Telegram</a>
              <span>•</span>
              <span>🇦🇹 Made in Austria</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

/* CHANGELOG:
- Completely rebuilt homepage with new navigation, hero, target groups, demo, features, pricing, social proof, trial form and footer
- Replaced old dark theme with new layout following exact specifications
- Added mobile-responsive navigation with hamburger menu
- Implemented exact copy as provided in requirements
- Added reveal animations and smooth scrolling
- Created placeholder assets for logos, video poster, and partner images
- Maintained all existing routes and functionality
- Secured old content in commented backup section
*/

 