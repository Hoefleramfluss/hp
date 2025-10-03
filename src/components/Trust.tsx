import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Trust = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-voxon-dark/50 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-gray-400 mb-8">
            Vertraut von Teams in Praxis, Werkstatt & Gastronomie
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
            {/* Placeholder for customer logos or metrics */}
            <div className="text-center">
              <div className="text-4xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-400 mt-1">Aktive Kunden</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">10k+</div>
              <div className="text-sm text-gray-400 mt-1">Calls/Monat</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400 mt-1">Verfügbar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">98%</div>
              <div className="text-sm text-gray-400 mt-1">Zufriedenheit</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Trust
