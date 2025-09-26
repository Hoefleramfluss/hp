import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function MedicalAgent() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold">Workflow Medical Agent</h1>
      <p className="mt-3 text-gray-700 max-w-2xl">Das Telefon klingelt nicht mehr – es wird intelligent beantwortet. Interaktive Demo, Kalenderintegration und DSGVO-konform.</p>

      <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-gray-200 p-6">
          <h2 className="font-semibold">Demo (Simulation)</h2>
          <ol className="mt-4 space-y-3 text-sm text-gray-700 list-decimal list-inside">
            <li>Anruf eingeht</li>
            <li>Anliegen wird erkannt (Termin, Rezept, Info)</li>
            <li>Kalender wird geprüft</li>
            <li>Bestätigung per SMS</li>
          </ol>
          <button className="mt-6 px-4 py-2 rounded-md bg-medical-accent text-white">Simulation starten</button>
        </motion.div>
        <div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Metric label="No-Show-Reduktion" value="-35%" />
            <Metric label="Zeitersparnis am Telefon" value="+40%" />
            <Metric label="Patientenzufriedenheit" value="4.8/5" />
            <Metric label="DSGVO" value="✔︎" />
          </div>
          <div className="mt-8">
            <Link to="/pricing" className="px-5 py-2 rounded-md bg-black text-white">ROI berechnen</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-200 p-4">
      <div className="text-sm text-gray-600">{label}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
  )
}
