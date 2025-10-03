import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const CTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: send to backend API
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="demo" ref={ref} className="relative py-24 sm:py-32 bg-voxon-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-voxon-blue/30 rounded-full blur-3xl animate-glow-pulse" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Bereit für spürbare Entlastung?
          </h2>
          <p className="text-xl text-gray-300">
            Starte mit einer Demo – und erlebe, wie viel dein Team gewinnt.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500 rounded-3xl p-12 text-center"
          >
            <div className="text-6xl mb-6">✓</div>
            <h3 className="text-3xl font-bold text-white mb-4">Vielen Dank!</h3>
            <p className="text-lg text-gray-300">
              Ihre Anfrage wurde erfolgreich übermittelt. Wir werden uns in Kürze bei Ihnen melden, 
              um einen Termin zu vereinbaren.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Name/Unternehmen
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Wie dürfen wir dich ansprechen?"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-voxon-blue focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Für die Terminbestätigung & Unterlagen"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-voxon-blue focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                Telefon <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Für schnelle Rückfragen"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-voxon-blue focus:border-transparent transition-all"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                Nachricht <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Erzähle uns kurz, was dich interessiert..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-voxon-blue focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-voxon-blue text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-voxon-blue/50 hover:-translate-y-1 transition-all duration-300"
            >
              Unverbindlich anfragen
            </button>

            <p className="mt-6 text-center text-sm text-gray-500">
              Wir verarbeiten deine Angaben ausschließlich zur Bearbeitung deiner Anfrage (DSGVO).
            </p>
          </motion.form>
        )}
      </div>
    </section>
  )
}

export default CTA
