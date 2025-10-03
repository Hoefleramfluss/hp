import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Voice AI Excellence',
    description: 'Natürlich klingende Stimmen & realistische Dialoge mit state-of-the-art Technologie',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    gradient: 'from-neon-cyan to-neon-blue',
    borderColor: 'neon-cyan'
  },
  {
    title: 'DSGVO-Konform',
    description: 'Höchste Datenschutzstandards, verantwortungsvoll, Made in Austria',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: 'from-neon-pink to-electric-violet',
    borderColor: 'neon-pink'
  },
  {
    title: 'Smart Intent Recognition',
    description: 'Freie Intenterkennung statt starrer Menüs – verstehe Kundenanliegen natürlich',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: 'from-electric-violet to-neon-purple',
    borderColor: 'electric-violet'
  },
  {
    title: 'Analytics & Insights',
    description: 'Messbar & optimierbar: Reports, Transkripte, Qualitäts-Checks in Echtzeit',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: 'from-neon-blue to-neon-cyan',
    borderColor: 'neon-blue'
  },
  {
    title: 'Rapid Deployment',
    description: 'Schnelles Onboarding – Inhalte von dir, KI macht den Rest. In Tagen live!',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    gradient: 'from-neon-purple to-neon-pink',
    borderColor: 'neon-purple'
  },
  {
    title: 'Transparent Pricing',
    description: 'Fair & transparent: klare Pläne, keine versteckten Gebühren, volle Kostenkontrolle',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: 'from-neon-cyan to-electric-violet',
    borderColor: 'neon-cyan'
  }
]

const FeaturesFuturistic = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 bg-deep-space overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10" style={{ backgroundSize: '50px 50px' }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="px-6 py-2 rounded-full border border-neon-purple/50 bg-neon-purple/10 backdrop-blur-md">
              <span className="text-neon-purple text-sm font-semibold tracking-wider">POWERFUL FEATURES</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Eine Plattform,
            </span>
            <span className="block bg-gradient-to-r from-neon-cyan via-neon-blue to-electric-violet bg-clip-text text-transparent">
              die mitdenkt
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Umfassende Suite von Funktionen für maximale Effizienz
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 hover:border-${feature.borderColor}/50 transition-all duration-300 group-hover:bg-white/10">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-2xl bg-deep-space flex items-center justify-center">
                      <div className="w-10 h-10 text-white">
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Floating Dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-${feature.borderColor} rounded-full animate-pulse shadow-neon-cyan" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${feature.gradient} group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center text-${feature.borderColor} opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                  <span className="text-sm font-semibold mr-2">Mehr erfahren</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <a
            href="#demo"
            className="inline-block px-12 py-5 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full text-white font-bold text-lg shadow-neon-cyan hover:shadow-neon-blue hover:scale-105 transition-all duration-300"
          >
            Kostenlose Demo anfragen
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesFuturistic
