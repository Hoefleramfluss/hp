import { useState } from 'react'

export default function LeadCapture() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState<null | 'ok' | 'err'>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setDone('err')
      return
    }
    try {
      setLoading(true)
      // Placeholder demo endpoint (replace with your own)
      await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'homepage-cta' })
      })
      setDone('ok')
      setEmail('')
    } catch (err) {
      console.error(err)
      setDone('err')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="mt-6 flex w-full max-w-lg items-center gap-2">
      <input
        type="email"
        className="flex-1 rounded-md border border-gray-200 px-3 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="E-Mail für Demo-Link"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="E-Mail"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-5 py-3 rounded-md bg-black text-white font-semibold shadow-lg hover:shadow-xl disabled:opacity-60"
      >
        {loading ? 'Sende…' : 'Demo anfordern'}
      </button>
      {done === 'ok' && <span className="text-sm text-green-600">Gesendet ✓</span>}
      {done === 'err' && <span className="text-sm text-red-600">Bitte gültige E-Mail</span>}
    </form>
  )
}
