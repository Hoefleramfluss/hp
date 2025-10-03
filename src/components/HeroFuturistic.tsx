import { motion } from 'framer-motion'
import VoxonLogo from '../assets/voxon-logo.png'

const HeroFuturistic = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-dark pt-16 md:pt-20">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-35 animate-videoPulse"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://res.cloudinary.com/dwocywg1b/video/upload/f_auto,q_auto/i_hm1ilc.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/60 via-cyber-dark/40 to-cyber-dark" />
      </div>

      {/* Animated Grid & Lines */}
      <div className="absolute inset-0 mix-blend-screen opacity-30">
        <div className="absolute inset-0 bg-cyber-grid animate-gridPulse" style={{ backgroundSize: '48px 48px' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,_240,_255,_0.12),_transparent_50%)]" />
      </div>

      {/* Neon Capsules */}
      <div className="absolute -left-32 top-24 hidden lg:block">
        <div className="hero-capsule hero-capsule--cyan" />
      </div>
      <div className="absolute right-16 bottom-16 hidden lg:block">
        <div className="hero-capsule hero-capsule--violet" />
      </div>

      {/* Floating Orbs */}
      <div className="hero-orb hero-orb--cyan" />
      <div className="hero-orb hero-orb--pink" style={{ animationDelay: '1.2s' }} />
      <div className="hero-orb hero-orb--violet" style={{ animationDelay: '2.4s' }} />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 md:space-y-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto flex justify-center"
          >
            <div className="relative inline-flex">
              <img
                src={VoxonLogo}
                alt="VoxOn.ai"
                className="h-24 md:h-32 lg:h-40 xl:h-48 w-auto object-contain"
                loading="eager"
                decoding="async"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-3xl opacity-35 bg-sky-500/45"
              />
            </div>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-balance text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05]">
            <span className="block text-white/90 drop-shadow-[0_12px_32px_rgba(15,23,41,0.45)]">
              KI, die wirklich
            </span>
            <span className="relative mx-auto mt-2 inline-flex items-center justify-center">
              <span className="absolute inset-x-6 -bottom-4 h-[60%] rounded-full bg-gradient-to-r from-neon-cyan/20 via-neon-blue/15 to-electric-violet/20 blur-3xl" />
              <span className="relative bg-gradient-to-r from-neon-cyan via-neon-blue to-electric-violet bg-clip-text text-transparent tracking-tight drop-shadow-[0_16px_32px_rgba(0,240,255,0.15)]">
                für dich arbeitet.
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Voice- & Chat-Agenten, die Termine buchen, Daten erfassen und Routineaufgaben übernehmen –
            <span className="text-white font-semibold"> fair, transparent, made in Austria.</span>
          </motion.p>

          {/* Trust Badges with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-sm md:text-base"
          >
            {['Made in Austria', 'DSGVO-konform', 'Autonomie statt Apps'].map((badge) => (
              <div
                key={badge}
                className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-neon-cyan/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan group-hover:shadow-neon-cyan" />
                  <span className="text-gray-300">{badge}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons with Neon Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <a
              href="#demo"
              className="group relative px-12 py-5 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full text-white font-bold text-lg overflow-hidden shadow-neon-cyan hover:shadow-neon-cyan transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-electric-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Jetzt Demo anfragen</span>
            </a>

            <a
              href="#pricing"
              className="group px-12 py-5 rounded-full border-2 border-white/20 text-white font-bold text-lg hover:border-neon-cyan hover:shadow-neon-cyan transition-all duration-300 backdrop-blur-sm bg-white/5"
            >
              <span>Kostenfrei starten</span>
            </a>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="pt-16"
          >
            <div className="inline-block">
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full p-1.5 backdrop-blur-sm">
                  <div className="w-2 h-3 bg-neon-cyan rounded-full mx-auto shadow-neon-cyan" />
                </div>
                <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-dark/50 to-cyber-dark pointer-events-none" />
    </section>
  )
}

export default HeroFuturistic
