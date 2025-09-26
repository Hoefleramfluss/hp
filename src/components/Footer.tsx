export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-events-accent to-medical-accent" />
            <span className="font-semibold">VoiceAgents</span>
          </div>
          <p className="text-sm text-gray-600 mt-3">Agenten, nicht Apps. Autonomie, nicht nur Automation.</p>
          <p className="text-xs text-gray-500 mt-2">Made in Austria 🇦🇹</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Produkte</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/medical-agent" className="hover:text-black">Workflow Medical Agent</a></li>
            <li><a href="/tony" className="hover:text-black">Tony – Gastronomie</a></li>
            <li><a href="/werkstatt-manager" className="hover:text-black">Werkstatt-Manager</a></li>
            <li><a href="/ticketing" className="hover:text-black">Ticketing-Plattform</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Ressourcen</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/demos" className="hover:text-black">Interaktive Demos</a></li>
            <li><a href="/pricing" className="hover:text-black">Pricing</a></li>
            <li><a href="#" className="hover:text-black">Datenschutz</a></li>
            <li><a href="#" className="hover:text-black">Impressum</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Kontakt</h4>
          <p className="text-sm text-gray-600">VoiceAgents GmbH</p>
          <p className="text-sm text-gray-600">Wien, Österreich</p>
          <p className="text-sm text-gray-600 mt-2">Socials: <a className="underline" href="#">LinkedIn</a></p>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} VoiceAgents – Alle Rechte vorbehalten.</div>
    </footer>
  )
}
