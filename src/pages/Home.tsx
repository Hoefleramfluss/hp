import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ChevronDown, Play, Users, Stethoscope, Wrench, Phone, Calendar, Shield, Zap, CheckCircle, Lock } from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero Section */}
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

      {/* Target Groups Section */}
      <section className="section target-groups" aria-labelledby="groups-title">
        <div className="container">
          <h2 id="groups-title" className="section-title center">Für wen es sofort wirkt</h2>
          <div className="target-grid">
            <div className="target-card">
              <div className="target-icon gastro">
                <Users className="w-6 h-6" />
              </div>
              <h3>Gastronomie</h3>
              <ul className="target-benefits">
                <li>Telefon entlasten</li>
                <li>No-Show-Handling</li>
                <li>Menü/Allergene smart</li>
              </ul>
              <Link to="/tony" className="btn btn-outline">Für Gastro →</Link>
            </div>
            <div className="target-card">
              <div className="target-icon medical">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3>Arztpraxis</h3>
              <ul className="target-benefits">
                <li>Termine & Rezeptverlängerung</li>
                <li>Anamnese-Vorerfassung</li>
                <li>KV-freundliche Abläufe</li>
              </ul>
              <Link to="/medical-agent" className="btn btn-outline">Für Praxen →</Link>
            </div>
            <div className="target-card">
              <div className="target-icon workshop">
                <Wrench className="w-6 h-6" />
              </div>
              <h3>Werkstatt</h3>
              <ul className="target-benefits">
                <li>Annahme & Terminierung</li>
                <li>Ersatzteile-Abfrage</li>
                <li>Status-Updates per SMS</li>
              </ul>
              <a href="#trial" className="btn btn-outline">Für Werkstätten →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="section demo-section" aria-labelledby="demo-title">
        <div className="container">
          <h2 id="demo-title" className="section-title center">Live-Demo</h2>
          <div className="demo-video">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              poster="/assets/demo-poster.jpg"
              onError={(e) => {
                const fallback = document.createElement('div')
                fallback.className = 'demo-fallback'
                fallback.innerHTML = '<div class="demo-placeholder"><Play class="w-12 h-12" /><p>Demo-Video wird geladen...</p></div>'
                e.currentTarget.parentNode?.replaceChild(fallback, e.currentTarget)
              }}
            >
              <source src="/assets/demo-loop.mp4" type="video/mp4" />
              <source src="/assets/demo-loop.webm" type="video/webm" />
            </video>
          </div>
          <div className="how-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Anruf</h3>
              <p>Kunde ruft an</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Agent versteht</h3>
              <p>KI erfasst Anliegen</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Termin/Eintrag</h3>
              <p>Automatisch in System</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section social-proof" aria-labelledby="proof-title">
        <div className="container">
          <div className="testimonial">
            <blockquote>
              "Seit dem VoiceAgent haben wir 40% weniger Telefonzeit und trotzdem zufriedenere Patienten."
            </blockquote>
            <cite>— Dr. Maria Huber, Hausarztpraxis Wien</cite>
          </div>
          <div className="logo-row">
            <div className="logo-placeholder">Partner 1</div>
            <div className="logo-placeholder">Partner 2</div>
            <div className="logo-placeholder">Partner 3</div>
            <div className="logo-placeholder">Partner 4</div>
            <div className="logo-placeholder">Partner 5</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section features" aria-labelledby="features-title">
        <div className="container">
          <h2 id="features-title" className="section-title center">Warum VoiceAgents?</h2>
          <div className="features-grid">
            <div className="feature">
              <Phone className="w-5 h-5" />
              <h3>Natürliche Stimme</h3>
              <p>Klingt menschlich, reagiert intelligent</p>
            </div>
            <div className="feature">
              <Zap className="w-5 h-5" />
              <h3>Frei sprechbar</h3>
              <p>Intent-Erkennung versteht Dialekt</p>
            </div>
            <div className="feature">
              <Calendar className="w-5 h-5" />
              <h3>Kalender-Integration</h3>
              <p>Direkt in bestehende Systeme</p>
            </div>
            <div className="feature">
              <Shield className="w-5 h-5" />
              <h3>Sichere Datenhaltung</h3>
              <p>EU-Server, DSGVO-konform</p>
            </div>
            <div className="feature">
              <CheckCircle className="w-5 h-5" />
              <h3>Sofort einsatzbereit</h3>
              <p>Setup in unter 60 Minuten</p>
            </div>
            <div className="feature">
              <Lock className="w-5 h-5" />
              <h3>Kein Vendor-Lock-in</h3>
              <p>Jederzeit kündbar, Daten portabel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section pricing-section" id="trial" aria-labelledby="pricing-title">
        <div className="container">
          <div className="pricing-card">
            <h2 id="pricing-title">Transparent & Fair</h2>
            <div className="pricing-highlight">
              <p className="pricing-text">Pilot gratis. Nur ~€0,12/Min Gesprächsgebühr – 1:1 weiterverrechnet.</p>
              <p className="pricing-detail">Keine Setup-Kosten, keine Mindestlaufzeit, keine versteckten Gebühren.</p>
            </div>
            <Link to="/medical-agent" className="btn btn-primary btn-large">
              Unverbindlich starten
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-modern" role="contentinfo">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Workflow AI 🇦🇹</h3>
              <p>Autonome KI-Agents für Ihr Business</p>
            </div>
            <div className="footer-links">
              <Link to="/impressum">Impressum</Link>
              <Link to="/datenschutz">Datenschutz</Link>
              <a href="mailto:hello@workflow-ai.at">hello@workflow-ai.at</a>
              <a href="https://t.me/workflowai" target="_blank" rel="noopener">Telegram</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Workflow AI – Made in Austria 🇦🇹</p>
          </div>
        </div>
      </footer>
    </>
  )
}

 