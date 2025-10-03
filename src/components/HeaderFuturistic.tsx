import { useState } from 'react'
import VoxonLogo from '../assets/voxon-logo.png'

const navItems = [
  { label: 'Lösungen', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'Preise', href: '#pricing' },
  { label: 'Kontakt', href: '#demo' },
]

const HeaderFuturistic = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
        <div className="h-16 md:h-20 grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <a href="/" className="flex items-center gap-2 shrink-0">
            <span className="relative inline-flex">
              <img
                src={VoxonLogo}
                alt="VoxOn.ai"
                className="h-11 md:h-14 w-auto object-contain align-middle"
                loading="eager"
                decoding="async"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-3xl opacity-30 bg-sky-500/40"
              />
            </span>
          </a>

          <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-200 hover:text-white/90 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-white shadow transition-colors"
            >
              Demo anfragen
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-90"
                />
              </svg>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white hover:bg-white/10 transition"
            >
              <span className="sr-only">Menü öffnen</span>
              {mobileMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                  <path
                    d="M3 6h18M3 12h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
            <nav className="flex flex-col gap-2 text-sm font-medium">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-slate-200 hover:text-white/90 hover:bg-white/10 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#demo"
                className="mt-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-white shadow transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Demo anfragen
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default HeaderFuturistic
