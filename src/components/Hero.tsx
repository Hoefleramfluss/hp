import { motion } from 'framer-motion'

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        >
          <source src="https://res.cloudinary.com/dwocywg1b/video/upload/f_auto,q_auto/i_hm1ilc.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-voxon-dark" />
      </div>

      {/* Aurora Glow Effects */}
      <div className="aurora-glow absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-voxon-blue/20 -z-10" />
      <div className="aurora-glow absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/15 -z-10" style={{ animationDelay: '3s' }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="block mb-2">KI, die wirklich</span>
            <span className="block gradient-text">für dich arbeitet.</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            className="mt-8 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Voice- & Chat-Agenten, die Termine buchen, Daten erfassen und Routine erledigen – 
            <span className="text-white font-semibold"> fair, transparent, made in Austria.</span>
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm md:text-base text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Made in Austria</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>DSGVO-konform</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Autonomie statt Apps</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#demo"
              className="group relative px-8 py-4 bg-voxon-blue text-white text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-voxon-blue/50 hover:-translate-y-1"
            >
              <span className="relative z-10">Jetzt Demo anfragen</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href="#pricing"
              className="px-8 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-full hover:border-white hover:bg-white/5 transition-all duration-300"
            >
              Kostenfrei starten
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="inline-block">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
              >
                <div className="w-1.5 h-3 bg-white rounded-full mx-auto" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
