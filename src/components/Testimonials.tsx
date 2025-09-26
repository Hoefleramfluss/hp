type Testimonial = {
  quote: string
  author: string
  role?: string
}

const items: Testimonial[] = [
  {
    quote:
      'Seit dem Agenten sind wir endlich bei den Patienten, nicht am Telefon. Die Stimmung im Team ist spürbar besser.',
    author: 'Dr. M. Huber',
    role: 'Allgemeinmedizin, Wien',
  },
  {
    quote:
      'Tony füllt auch nach Feierabend die Tische. No-Shows runter, Umsatz rauf – und weniger Stress.',
    author: 'Restaurant L., Graz',
  },
  {
    quote:
      'Am Empfang ist es ruhiger. Der Agent nimmt Vorabinfos auf und verteilt sauber in die Werkstatt.',
    author: 'KFZ Meisterbetrieb S.',
  },
]

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((t, i) => (
        <figure key={i} className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
          <blockquote className="text-sm text-gray-700">“{t.quote}”</blockquote>
          <figcaption className="mt-4 text-sm font-semibold">{t.author}</figcaption>
          {t.role && <div className="text-xs text-gray-500">{t.role}</div>}
        </figure>
      ))}
    </div>
  )
}
