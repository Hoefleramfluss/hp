import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const showcases = [
  {
    name: 'VoxOn Med',
    subtitle: '„Juna", deine Praxis-Assistenz',
    description: 'Nimmt Anrufe entgegen, triagiert Anliegen und bucht Termine automatisch.',
    features: [
      'Erfasst SV-Nummer & Kontaktdaten sicher',
      'Rezeptverlängerung & Rückruflogik nach deinen Regeln',
      'Anbindung an Kalender/Tools möglich',
      'Natürlich klingende Stimme & realistische Dialoge'
    ],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    icon: '🏥'
  },
  {
    name: 'VoxOn Tec',
    subtitle: 'Der Werkstatt-Operator',
    description: 'Erfasst Schaden, Fahrzeug und Wunschtermin in einem natürlichen Dialog.',
    features: [
      'Verfügbarkeiten & Kostenvoranschlag-Workflow',
      'Status-Updates per SMS/E-Mail',
      'Entlastet Telefon & Tresen',
      'Freie Intenterkennung statt starrer Menüs'
    ],
    gradient: 'from-orange-500/20 to-red-500/20',
    icon: '🔧'
  },
  {
    name: 'VoxOn Gastro',
    subtitle: '„Toni", der Gastgeber',
    description: 'Reservierungen, Anlass & Allergien – charmant, schnell und fehlerfrei.',
    features: [
      'Stammgasterkennung & charmante Beratung',
      'Wetter-/Gastgarten-Logik, Küchenzeiten-Hinweise',
      'Optional: Resmio-/Kassen-Integration',
      'Messbar & optimierbar: Reports, Transkripte, Qualitäts-Checks'
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
    icon: '🍽️'
  },
  {
    name: 'VoxOn Custom Agents',
    subtitle: 'Deine Marke, dein Agent',
    description: 'Sales, Support oder Terminservice – trainiert auf deine Abläufe.',
    features: [
      'In kurzer Zeit live, skalierbar, messbar',
      'Keine Blackbox: nachvollziehbar & kontrollierbar',
      'Schnelles Onboarding – Inhalte von dir, KI macht den Rest',
      'Fair & transparent: klare Pläne, keine versteckten Gebühren'
    ],
    gradient: 'from-green-500/20 to-emerald-500/20',
    icon: '🎯'
  }
]

const Showcases = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="products" ref={ref} className="py-24 sm:py-32 bg-gradient-to-b from-voxon-dark to-voxon-gray">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-voxon-blue mb-2">Maßgeschneiderte Lösungen</h2>
          <p className="text-4xl md:text-5xl font-bold tracking-tight">
            Automatisierung für jeden Anwendungsfall
          </p>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Egal welche Herausforderung, wir entwickeln die passende KI-gestützte Lösung, 
            um Ihre spezifischen Geschäftsprozesse zu optimieren.
          </p>
        </motion.div>

        {/* Showcases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {showcases.map((showcase, index) => (
            <motion.div
              key={showcase.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${showcase.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className="text-5xl mb-4">{showcase.icon}</div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {showcase.name}
                </h3>
                <p className="text-voxon-blue font-medium mb-4">
                  {showcase.subtitle}
                </p>
                
                {/* Description */}
                <p className="text-gray-300 mb-6">
                  {showcase.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3">
                  {showcase.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <a
                  href="#demo"
                  className="mt-8 inline-block text-voxon-blue font-semibold hover:text-blue-400 transition-colors"
                >
                  Mehr erfahren →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcases
