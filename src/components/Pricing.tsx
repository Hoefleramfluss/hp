import { motion, useInView } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'

type BillingCycle = 'monthly' | 'yearly'
type ProfileKey = 'med' | 'tec' | 'gastro'

type PricingPlan = {
  id: 'small' | 'standard' | 'enterprise'
  name: string
  descriptor: string
  features: string[]
  valueStack: string
  accent: 'neon-cyan' | 'neon-blue' | 'neon-purple'
  highlighted?: boolean
  monthlyPrice?: number
  yearlyTotal?: number
  yearlyMonthlyEquivalent?: number
  yearlyNote?: string
  customPricing?: boolean
  ctaLabel: string
  ctaHref: string
}

type RoiPlan = {
  name: string
  basePrice?: number
  includedMinutes?: number
  overageRate?: number
  custom?: boolean
}

const badgeItems = ['DSGVO-konform', 'EU-Server', 'Klare Preise', 'In Tagen einsatzbereit'] as const

const pricingPlans: PricingPlan[] = [
  {
    id: 'small',
    name: 'VoxOn Small',
    descriptor: 'Für Teams, die schnell starten wollen.',
    features: [
      '300 Minuten Full-Stack inklusive',
      'Überminuten: 0,22 €/Min',
      '2 Standard-Integrationen & Tool-Calls',
      '1 österreichische Supportnummer',
      'E-Mail Support (Antwort < 24 h)',
      'DSGVO-konforme EU-Server',
      'Setup: Einmalig 399 € (inkl. Anpassungen bis es passt)',
    ],
    valueStack: 'Onboarding, Nummer & Integrationen – alles drin. Sofort startklar.',
    accent: 'neon-cyan',
    monthlyPrice: 99,
    yearlyTotal: 1188,
    yearlyNote: 'Kein Jahresrabatt – gleiche Rate wie monatlich.',
    ctaLabel: 'Plan wählen',
    ctaHref: '#demo',
  },
  {
    id: 'standard',
    name: 'VoxOn Standard',
    descriptor: 'Für Performance & Service, wenn es ernst wird.',
    features: [
      '900 Minuten inklusive',
      'Überminuten: 0,20 €/Min',
      'Premium-Integrationen & Webhooks',
      'Telefon- & E-Mail-Support (Antwort < 12 h)',
      'Dedizierter Success Manager',
      'DSGVO-konforme EU-Server',
      'Setup: Einmalig 299 €',
    ],
    valueStack: 'Performance, Integrationen und Support, der mitdenkt.',
    accent: 'neon-blue',
    highlighted: true,
    monthlyPrice: 249,
    yearlyTotal: 2539.8,
    yearlyMonthlyEquivalent: 211.65,
    ctaLabel: 'Plan wählen',
    ctaHref: '#demo',
  },
  {
    id: 'enterprise',
    name: 'VoxOn Enterprise',
    descriptor: 'Für Skalierung, Compliance & individuelle Prozesse.',
    features: [
      'Custom Minutenpakete ab 2.400 Min',
      'Überminuten: ab 0,20 €/Min (nach Vereinbarung; Standard 0,22 €)',
      'Individuelle Integrationen & SLAs',
      'Private Cloud / On-Premise-Optionen',
      'Backup-Server inklusive',
      '24/7 SOS-Nummer & Priority Support',
      'Rollout & Schulungen inklusive',
      'Setup: Kostenlos (im Rahmen des Enterprise-Pakets)',
    ],
    valueStack: 'Maximale Kontrolle & Sicherheit für komplexe Prozesse.',
    accent: 'neon-purple',
    customPricing: true,
    ctaLabel: 'Individuelle Beratung',
    ctaHref: '#demo',
  },
]

const roiPlans: RoiPlan[] = [
  {
    name: 'VoxOn Small',
    basePrice: 99,
    includedMinutes: 300,
    overageRate: 0.22,
  },
  {
    name: 'VoxOn Standard',
    basePrice: 249,
    includedMinutes: 900,
    overageRate: 0.22,
  },
  {
    name: 'VoxOn Enterprise',
    custom: true,
  },
]

const profileSettings: Record<ProfileKey, {
  label: string
  subtitle: string
  avgHandleMinutes: number
  automationRate: number
  humanCostPerHour: number
}> = {
  med: {
    label: 'VoxOn Med',
    subtitle: 'Hausärzte, Fachärzte, MVZ',
    avgHandleMinutes: 3.6,
    automationRate: 0.82,
    humanCostPerHour: 29,
  },
  tec: {
    label: 'VoxOn Tec',
    subtitle: 'Werkstätten & Technikbetriebe',
    avgHandleMinutes: 3.1,
    automationRate: 0.78,
    humanCostPerHour: 27,
  },
  gastro: {
    label: 'VoxOn Gastro',
    subtitle: 'Restaurants & Hospitality',
    avgHandleMinutes: 2.4,
    automationRate: 0.74,
    humanCostPerHour: 24,
  },
}

const faqs = [
  {
    question: 'Wie schnell sind wir live?',
    answer: 'In der Regel in 2–7 Werktagen, abhängig von Integrationen und Trainingsmaterial.',
  },
  {
    question: 'Was bedeutet „Perfektions-Garantie“?',
    answer: 'Wir iterieren am Prompting, an Integrationen und an der Gesprächsführung – so lange, bis der Bot in deinem Alltag zu 100 % passt.',
  },
  {
    question: 'Was passiert nach den Inklusiv-Minuten?',
    answer: 'Jede weitere Minute wird transparent nach Tarif abgerechnet (0,22 €/Min bzw. Enterprise ab 0,20 €/Min).',
  },
  {
    question: 'Sind die Server DSGVO-konform?',
    answer: 'Ja. Wir hosten in der EU und arbeiten strikt DSGVO-konform.',
  },
  {
    question: 'Kann ich Tarife wechseln?',
    answer: 'Ja, ein Wechsel ist jederzeit möglich – wachse einfach mit deinem Bedarf.',
  },
  {
    question: 'Unterstützt ihr individuelle Integrationen?',
    answer: 'Ja, ab Standard via Webhooks/Premium-Integrationen, Enterprise mit SLA & Private-Cloud/On-Prem.',
  },
]

const formatCurrency = (value: number, fractionDigits = 0) =>
  new Intl.NumberFormat('de-AT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value)

const accentBadge: Record<PricingPlan['accent'], string> = {
  'neon-cyan': 'border-neon-cyan/40 bg-neon-cyan/15 text-neon-cyan',
  'neon-blue': 'border-neon-blue/40 bg-neon-blue/15 text-neon-blue',
  'neon-purple': 'border-neon-purple/40 bg-neon-purple/15 text-neon-purple',
}

const Pricing = () => {
  const ref = useRef<HTMLElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-120px' })

  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly')
  const [callsPerDay, setCallsPerDay] = useState(80)
  const [profile, setProfile] = useState<ProfileKey>('med')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const result = useMemo(() => {
    const settings = profileSettings[profile]
    const workingDays = 22
    const monthlyCalls = callsPerDay * workingDays
    const automatedCalls = Math.round(monthlyCalls * settings.automationRate)
    const minutesNeeded = automatedCalls * settings.avgHandleMinutes

    let recommendedPlanName = 'PAYG (Flex)'
    let recommendedCost = minutesNeeded * 0.24

    roiPlans
      .filter((plan) => !plan.custom && plan.basePrice && plan.includedMinutes && plan.overageRate)
      .forEach((plan) => {
        const cost =
          (plan.basePrice ?? 0) + Math.max(0, minutesNeeded - (plan.includedMinutes ?? 0)) * (plan.overageRate ?? 0)
        if (cost < recommendedCost) {
          recommendedCost = cost
          recommendedPlanName = plan.name
        }
      })

    const humanHours = (monthlyCalls * settings.avgHandleMinutes) / 60
    const humanCost = humanHours * settings.humanCostPerHour
    const freedHours = (automatedCalls * settings.avgHandleMinutes) / 60
    const savings = humanCost - recommendedCost
    const roi = recommendedCost > 0 ? Math.round((savings / recommendedCost) * 100) : 0

    return {
      monthlyCalls,
      automatedCalls,
      minutesNeeded,
      recommendedPlanName,
      recommendedCost,
      humanCost,
      savings,
      roi: Math.max(0, roi),
      freedHours,
      settings,
    }
  }, [callsPerDay, profile])

  const renderPrice = (plan: PricingPlan) => {
    if (plan.customPricing) {
      if (billingCycle === 'yearly') {
        return (
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="text-4xl font-semibold text-white">Jahresrabatte nach Vereinbarung</span>
            <span className="text-xs text-gray-400">Individuelle SLAs & Budgets</span>
          </div>
        )
      }

      return (
        <>
          <span className="text-5xl font-bold text-white">{formatCurrency(499)}</span>
          <span className="text-gray-400">/Monat</span>
        </>
      )
    }

    if (billingCycle === 'yearly') {
      const total = plan.yearlyTotal ?? (plan.monthlyPrice ? plan.monthlyPrice * 12 : undefined)
      if (total) {
        const detail =
          plan.id === 'standard' && plan.yearlyMonthlyEquivalent
            ? `≈ ${formatCurrency(plan.yearlyMonthlyEquivalent, 2)} pro Monat bei jährlicher Zahlung`
            : plan.yearlyNote ?? 'Jährliche Zahlung'
        return (
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="text-4xl font-bold text-white">{`${formatCurrency(total, 2)} / Jahr`}</span>
            <span className="text-sm text-gray-300">{detail}</span>
          </div>
        )
      }
    }

    if (plan.monthlyPrice !== undefined) {
      return (
        <>
          <span className="text-5xl font-bold text-white">{formatCurrency(plan.monthlyPrice)}</span>
          <span className="text-gray-400">/Monat</span>
        </>
      )
    }

    return null
  }

  const handleFaqToggle = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index))
  }

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-space-blue via-cyber-dark to-deep-space py-32"
    >
      <div className="pointer-events-none absolute -top-40 left-10 h-96 w-96 rounded-full bg-neon-cyan/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-neon-purple/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-neon-cyan shadow-neon-cyan" />
            <span className="text-xs font-semibold tracking-[0.35em] text-neon-cyan">PRICING</span>
          </div>
          <h2 className="mt-10 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Plan oder starte mit PAYG.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400 md:text-xl">
            Skalierbare Minuten, Premium-Integrationen, EU-Hosting – ohne Kompromisse.
          </p>

          <div className="mt-10 flex justify-center">
            <div
              role="group"
              aria-label="Abrechnungszeitraum wählen"
              className="relative inline-flex items-center rounded-full border border-white/15 bg-white/10 p-1 text-sm text-white shadow-neon-cyan/10 backdrop-blur-xl"
            >
              {(['monthly', 'yearly'] as BillingCycle[]).map((cycle) => {
                const isActive = billingCycle === cycle
                const label = cycle === 'monthly' ? 'Monatlich' : 'Jährlich (–15 % im Business-Plan)'
                return (
                  <button
                    key={cycle}
                    type="button"
                    onClick={() => setBillingCycle(cycle)}
                    aria-pressed={isActive}
                    className={`relative rounded-full px-5 py-2 transition ${
                      isActive
                        ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-white shadow-neon-cyan'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
            {badgeItems.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" />
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-[28px] p-[1px] transition-transform duration-300 hover:-translate-y-2 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-neon-cyan/60 via-electric-violet/40 to-neon-blue/60 shadow-neon-cyan'
                  : 'bg-gradient-to-br from-white/10 via-white/5 to-transparent'
              }`}
            >
              <div className="relative flex h-full flex-col rounded-[26px] border border-white/10 bg-cyber-dark/90 p-8 backdrop-blur-xl">
                {plan.highlighted && (
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2">
                    <div
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold text-white/90 backdrop-blur-xl"
                      aria-label="Empfohlen von Kund:innen"
                    >
                      <span className="text-base">⭐</span>
                      Empfohlen von Kund:innen
                    </div>
                  </div>
                )}

                {billingCycle === 'yearly' && plan.id === 'standard' && (
                  <span className="absolute right-6 top-6 rounded-full border border-neon-cyan/40 bg-neon-cyan/15 px-3 py-1 text-xs font-semibold text-neon-cyan">
                    –15 % jährlich
                  </span>
                )}

                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm text-gray-400">{plan.descriptor}</p>
                </div>

                <div className="mb-8 flex flex-col items-center gap-2 text-center">
                  {renderPrice(plan)}
                </div>

                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                      <span
                        className={`mt-1 flex h-6 w-6 items-center justify-center rounded-full border ${accentBadge[plan.accent]} backdrop-blur-sm`}
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-white/80">{plan.valueStack}</p>

                <div className="mt-auto space-y-4 pt-6">
                  <a
                    href={plan.ctaHref}
                    aria-label={`${plan.name} – ${plan.ctaLabel}`}
                    className={`block rounded-full py-3 text-center font-semibold transition-all duration-300 ${
                      plan.customPricing
                        ? 'bg-white/10 text-white hover:bg-white/20'
                        : plan.highlighted
                        ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-white shadow-neon-cyan hover:shadow-neon-blue'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {plan.ctaLabel}
                  </a>

                  <p className="text-xs text-slate-300">
                    Perfektions-Garantie: Wir verfeinern deinen Voicebot so lange, bis er zu 100 % für dich passt.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-center text-sm text-gray-300 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-center md:gap-6">
            <span className="font-semibold text-white">PAYG (Flex)</span>
            <span>0,24 €/Minute · Mindestumsatz 29 €/Monat · ideal zum Starten</span>
            <span className="text-white/80">Einrichtung 299 € (im Standard-Plan inklusive)</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2"
        >
          <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/10" />
            <h3 className="text-2xl font-bold text-white">ROI-Rechner</h3>
            <p className="mt-3 text-sm text-gray-400">
              Passe dein tägliches Anrufvolumen an. Wir kalkulieren Minutenbedarf, empfehlenswertes Paket und Einsparungen basierend auf branchenüblichen Kennzahlen.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <div className="mb-2 flex justify-between text-sm text-gray-400">
                  <span>Tägliche Anrufe</span>
                  <strong className="text-white">{callsPerDay} / Tag</strong>
                </div>
                <input
                  type="range"
                  min={20}
                  max={400}
                  step={5}
                  value={callsPerDay}
                  onChange={(event) => setCallsPerDay(Number(event.target.value))}
                  className="h-2 w-full rounded-full bg-white/10 accent-neon-cyan"
                />
                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>20</span>
                  <span>200</span>
                  <span>400+</span>
                </div>
              </div>

              <div>
                <div className="mb-3 text-sm text-gray-400">Branche</div>
                <div className="grid grid-cols-3 gap-3">
                  {Object.entries(profileSettings).map(([key, value]) => (
                    <label key={key} className="relative">
                      <input
                        type="radio"
                        name="profile"
                        value={key}
                        checked={profile === key}
                        onChange={(event) => setProfile(event.target.value as ProfileKey)}
                        className="sr-only"
                      />
                      <div
                        className={`rounded-2xl border p-4 text-center transition-all duration-300 ${
                          profile === key
                            ? 'border-neon-cyan/60 bg-neon-cyan/10 text-white shadow-neon-cyan'
                            : 'border-white/10 bg-white/5 text-gray-300 hover:border-neon-cyan/40 hover:bg-white/10'
                        }`}
                      >
                        <div className="text-sm font-semibold">{value.label}</div>
                        <div className="mt-1 text-xs text-gray-400">Ø {value.avgHandleMinutes.toFixed(1)} Min</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[32px] border border-neon-cyan/30 bg-gradient-to-br from-neon-cyan/10 via-white/5 to-transparent p-8 shadow-neon-cyan/40 backdrop-blur-2xl">
            <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/10" />
            <h3 className="text-2xl font-bold text-white">Dein Ergebnis</h3>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <div className="text-xs uppercase tracking-wide text-neon-cyan">Automatisierte Calls</div>
                <div className="mt-2 text-3xl font-bold text-white">{result.automatedCalls.toLocaleString('de-AT')}</div>
                <div className="mt-1 text-xs text-gray-400">von {result.monthlyCalls.toLocaleString('de-AT')} Calls/Monat</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-neon-blue">Freigesetzte Stunden</div>
                <div className="mt-2 text-3xl font-bold text-white">{Math.round(result.freedHours)}</div>
                <div className="mt-1 text-xs text-gray-400">
                  pro Monat
                  <span className="block text-white/60">≈ {Math.round(result.freedHours / 8)} Arbeitstage</span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <div className="text-xs uppercase tracking-wide text-gray-400">Agenten-Kosten</div>
                <div className="mt-2 text-2xl font-semibold text-white">{formatCurrency(result.recommendedCost, 2)}</div>
                <div className="mt-1 text-xs text-gray-400">Empfohlenes Paket: {result.recommendedPlanName}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <div className="text-xs uppercase tracking-wide text-gray-400">Personalkosten</div>
                <div className="mt-2 text-2xl font-semibold text-white">{formatCurrency(result.humanCost, 2)}</div>
                <div className="mt-1 text-xs text-gray-400">Ø {profileSettings[profile].humanCostPerHour} €/Std · 22 Arbeitstage</div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-neon-cyan/50 bg-neon-cyan/15 p-6 shadow-neon-cyan">
              <div className="text-xs uppercase tracking-[0.3em] text-neon-cyan">Monatliche Einsparung</div>
              <div className="mt-3 text-4xl font-bold text-white">{formatCurrency(result.savings, 2)}</div>
              <div className="mt-1 text-sm text-white/80">ROI {result.roi}% gegenüber vollständiger Telefonannahme durch Personal</div>
            </div>

            <div className="mt-6 text-xs leading-relaxed text-white/60">
              Annahmen: {result.settings.label} ({result.settings.subtitle}), {callsPerDay} Anrufe/Tag, Ø Gesprächsdauer {result.settings.avgHandleMinutes.toFixed(1)} Min, Erfolgsquote {Math.round(result.settings.automationRate * 100)} %, Personalkosten {result.settings.humanCostPerHour} €/Std. Werte können je nach Betrieb variieren.
            </div>
          </div>
        </motion.div>

        <p className="mt-10 text-center text-xs text-white/60">
          Minuten = gesamte Sprachverarbeitungszeit (STT, LLM, TTS). Auslastung je nach Gesprächsdauer und Anrufvolumen.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-center text-3xl font-semibold text-white">Häufige Fragen</h3>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm font-semibold text-white"
                    onClick={() => handleFaqToggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden px-6 pb-6 text-sm text-gray-300">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
