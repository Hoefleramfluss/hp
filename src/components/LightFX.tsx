import { useEffect, useRef } from 'react'

// Lightweight animated light FX background rendered to canvas.
// Uses scroll position to shift gradients subtly.
export default function LightFX() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })!

    let width = 0, height = 0
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    let raf = 0
    const start = performance.now()

    const render = () => {
      const t = (performance.now() - start) / 1000
      ctx.clearRect(0, 0, width, height)

      // Three moving radial gradients with brand hues (blue/green/teal)
      for (let i = 0; i < 3; i++) {
        const x = (Math.sin(t * (0.25 + i * 0.1) + i) * 0.35 + 0.5) * width
        const y = (Math.cos(t * (0.3 + i * 0.12) + i) * 0.35 + 0.5) * height
        const r = Math.max(width, height) * 0.55
        const g = ctx.createRadialGradient(x, y, 0, x, y, r)
        const a = 0.10
        if (i === 0) {
          g.addColorStop(0, `rgba(30,136,229,${a})`) // blue
        } else if (i === 1) {
          g.addColorStop(0, `rgba(23,178,106,${a})`) // green
        } else {
          g.addColorStop(0, `rgba(17,94,89,${a})`) // teal
        }
        g.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    const onResize = () => resize()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas ref={ref} className="absolute inset-0 -z-10 opacity-80 mix-blend-screen" aria-hidden="true" />
  )
}
