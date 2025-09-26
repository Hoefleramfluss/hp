import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { CheckCircle2, QrCode, CreditCard, Users2, BarChart3, ShieldCheck } from 'lucide-react'

export default function Ticketing() {
  return (
    <div className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-indigo-50 to-white">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <OrganicGlow />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Ticketing, das Umsatz liebt.</h1>
            <p className="mt-5 text-lg text-gray-700">Sitzplätze, QR-Einlass, dynamische Preise – alles orchestriert von Ihrem Agenten. Weniger No‑Shows, mehr Begeisterung.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#roi" className="px-6 py-3 rounded-md bg-black text-white font-semibold shadow-lg hover:shadow-xl">ROI ansehen</a>
              <a href="#szenarien" className="px-6 py-3 rounded-md border border-gray-200 hover:border-gray-300 font-semibold">Szenarien</a>
            </div>
          </div>
        </div>
      </section>

      {/* SZENARIEN */}
      <section id="szenarien" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Szenarien</h2>
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <Scenario title="Vorverkauf mit Sitzplänen" points={["Block-/Reihen-Logik", "Dynamische Preise nach Nachfrage", "Automatische Bestätigungen"]} />
          <Scenario title="Einlasskontrolle" points={["Offline-fähige QR-Checks", "Doppel-Scan-Schutz", "Live-Auslastung"]} />
          <Scenario title="VIP & Partner" points={["Kontingente & Promo-Codes", "Whitelist/Blacklist", "Zonen & Backstage"]} />
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature icon={<QrCode className="h-5 w-5"/>} title="QR-Einlass" desc="Blitzschnell, offline-fähig, fälschungssicher."/>
          <Feature icon={<Users2 className="h-5 w-5"/>} title="Sitzplätze" desc="Sitzplan, Blöcke, Dynamik – alles im Griff."/>
          <Feature icon={<CreditCard className="h-5 w-5"/>} title="Payments" desc="Stripe/PSP integriert inkl. Refund-Flows."/>
          <Feature icon={<BarChart3 className="h-5 w-5"/>} title="Dashboards" desc="Live KPIs: Conversion, Auslastung, Umsatz."/>
          <Feature icon={<ShieldCheck className="h-5 w-5"/>} title="Sicherheit" desc="DSGVO, Rollen, Audit-Logs, EU-Region."/>
          <Feature icon={<CheckCircle2 className="h-5 w-5"/>} title="Automation" desc="Bestätigungen, Erinnerungen, Upsells."/>
        </div>
      </section>

      {/* ROI */}
      <section id="roi" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">ROI in Wochen, nicht Monaten</h2>
        <p className="mt-2 text-gray-700 max-w-2xl">Weniger No-Shows, höhere Auslastung, intelligenter Upsell – Ihr Agent verhandelt mit der Nachfrage, nicht mit dem Zufall.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <Counter value={35} label="weniger No‑Shows" suffix="%" />
          <Counter value={18} label="mehr Umsatz" suffix="%" />
          <Counter value={22} label="schnellerer Einlass" suffix="%" />
          <Counter value={4.8} label="Kundenzufriedenheit" suffix="/5" />
        </div>
      </section>
    </div>
  )
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div whileHover={{ y: -3 }} className="rounded-xl glass p-6 shadow-lg hover:shadow-xl">
      <div className="h-10 w-10 rounded-lg bg-white grid place-items-center shadow-sm border border-gray-100">{icon}</div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </motion.div>
  )
}

function Scenario({ title, points }: { title: string; points: string[] }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-b from-white to-gray-50/40">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-3 text-sm text-gray-700 space-y-2 list-disc list-inside">
        {points.map((p, i) => (<li key={i}>{p}</li>))}
      </ul>
    </motion.div>
  )
}

function Counter({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const [d, setD] = useState(0)
  useEffect(() => {
    const start = performance.now()
    const dur = 1100
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      const e = 1 - Math.pow(1 - p, 3)
      setD(Number((value * e).toFixed(1)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value])
  return (
    <div className="rounded-xl glass p-5 text-center shadow-md">
      <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">{d}{suffix ?? ''}</div>
      <div className="text-xs sm:text-sm text-gray-600 mt-1">{label}</div>
    </div>
  )
}

function OrganicGlow() {
  return (
    <div className="absolute inset-0">
      <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(168,85,247,0.4), transparent 60%)' }} />
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(23,178,106,0.35), transparent 60%)' }} />
      <div className="absolute bottom-10 left-1/3 h-80 w-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(197,157,95,0.35), transparent 60%)' }} />
    </div>
  )
}
