import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import LogoCarousel from '../components/LogoCarousel'
import Testimonials from '../components/Testimonials'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -40])

  const [problem, setProblem] = useState<'telefon' | 'admin' | null>(null)

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with stronger parallax via useScroll */}
      <section className="relative" ref={heroRef}>
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div style={{ y: y1 }} className="h-[60vh] sm:h-[70vh] bg-gradient-to-b from-medical-primary/90 to-white" />
          <motion.div style={{ y: y2 }} className="absolute inset-x-0 top-10 mx-auto max-w-5xl h-64 blur-3xl rounded-full bg-gradient-to-r from-events-accent/40 via-medical-accent/40 to-gastro-accent/30" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Schluss mit Chaos. Gewinnen Sie Ihren Fokus zurück.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-6 text-lg text-gray-700">
              Unsere autonomen KI-Agenten managen Ihre Anrufe und Prozesse, damit Sie wieder das tun, was Sie lieben.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 flex flex-wrap gap-3">
              <Link to="/medical-agent" className="px-6 py-3 rounded-md bg-medical-accent text-white font-semibold shadow-sm hover:shadow">
                Für Praxen
              </Link>
              <Link to="/tony" className="px-6 py-3 rounded-md bg-gastro-accent text-white font-semibold shadow-sm hover:shadow">
                Für Gastronomie
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Wo verlieren Sie die meiste Zeit?</h2>
        <div className="mt-4 flex gap-3">
          <button onClick={() => setProblem('telefon')} className={`px-4 py-2 rounded-md border text-sm ${problem === 'telefon' ? 'bg-black text-white' : 'border-gray-200 hover:border-gray-300'}`}>Telefonanrufe</button>
          <button onClick={() => setProblem('admin')} className={`px-4 py-2 rounded-md border text-sm ${problem === 'admin' ? 'bg-black text-white' : 'border-gray-200 hover:border-gray-300'}`}>Administration</button>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {(!problem || problem === 'telefon') && (
            <ProblemCard title="Telefonanrufe" stats="Bis zu 40% der Arbeitszeit am Telefon" quote="Seit dem Agenten sind wir endlich am Patienten, nicht am Hörer." />
          )}
          {(!problem || problem === 'admin') && (
            <ProblemCard title="Administration" stats="20-30% manuelle Erfassung" quote="Der Papierkram ist Geschichte - wir arbeiten wieder." />
          )}
        </div>
      </section>

      {/* Flagship Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Unsere Flaggschiffe</h2>
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <Flagship
            title="Workflow Medical Agent"
            description="Die autonome Praxis: Anrufe, Termine, SMS – alles im Griff."
            to="/medical-agent"
            color="medical"
          />
          <Flagship
            title="Tony – Der unsichtbare Maître d’"
            description="Sichert Reservierungen, reduziert No-Shows, steigert Umsatz."
            to="/tony"
            color="gastro"
          />
        </div>
      </section>

      {/* Philosophie + Social Proof */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold">Agenten, nicht Apps. Autonomie, nicht nur Automation.</h3>
            <p className="mt-4 text-gray-700">
              Wir verkaufen keine Tools, wir liefern Fokus, Umsatz und Kontrolle. Fair, transparent, made in Austria.
            </p>
          </div>
          <LogoCarousel />
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Das sagen unsere Kunden</h2>
        <div className="mt-6">
          <Testimonials />
        </div>
      </section>
    </div>
  )
}

function ProblemCard({ title, stats, quote }: { title: string; stats: string; quote: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all"
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{stats}</p>
      <p className="text-sm text-gray-500 mt-3 italic">{quote}</p>
    </motion.div>
  )
}

function Flagship({ title, description, to, color }: { title: string; description: string; to: string; color: 'medical' | 'gastro' }) {
  const bg = color === 'medical' ? 'from-medical-primary/5 to-white' : 'from-gastro-primary/5 to-white'
  const accent = color === 'medical' ? 'bg-medical-accent' : 'bg-gastro-accent'
  return (
    <motion.div whileHover={{ y: -4 }} className={`rounded-2xl border border-gray-200 p-8 bg-gradient-to-b ${bg}`}>
      <div className={`h-2 w-10 rounded-full ${accent}`} />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-700">{description}</p>
      <Link to={to} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline">
        Mehr erfahren →
      </Link>
    </motion.div>
  )
}
