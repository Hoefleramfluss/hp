import VoxonLogo from '../assets/voxon-logo.png'

const navigation = {
  solutions: [
    { name: 'VoxOn Med', href: '#products' },
    { name: 'VoxOn Tec', href: '#products' },
    { name: 'VoxOn Gastro', href: '#products' },
    { name: 'VoxOn Custom Agents', href: '#products' },
  ],
  company: [
    { name: 'Über uns', href: '#' },
    { name: 'Preise', href: '#pricing' },
    { name: 'Features', href: '#features' },
  ],
  legal: [
    { name: 'Datenschutz', href: '/datenschutz.html' },
    { name: 'Impressum', href: '/impressum.html' },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-white/5" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neon-cyan/40 to-electric-violet/30 blur-lg opacity-60" />
                <img src={VoxonLogo} alt="VoxOn.ai" className="relative h-12 w-auto" loading="lazy" />
              </div>
              <span className="text-2xl font-bold text-white">VoxOn.ai</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Voice & Chat Agents, die deine Teams entlasten. Echtzeit-Assistenz, nahtlose Integrationen, volle Kontrolle.
            </p>
            <div className="text-sm text-gray-500">
              Made with ❤️ in Austria · DSGVO-konform
            </div>
          </div>

          {/* Links Grid */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Lösungen</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-white">Unternehmen</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Rechtliches</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="text-sm font-semibold text-white mb-4">Kontakt</h3>
                <a
                  href="mailto:hello@voxon.ai"
                  className="text-sm text-neon-cyan hover:text-white transition-colors"
                >
                  hello@voxon.ai
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} VoxOn.ai. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
