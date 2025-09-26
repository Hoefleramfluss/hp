import { useEffect, useRef } from 'react'

const logos = new Array(10).fill(0).map((_, i) => ({ id: i }))

export default function LogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let anim: number
    const step = () => {
      el.scrollLeft += 0.5
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0
      }
      anim = requestAnimationFrame(step)
    }
    anim = requestAnimationFrame(step)
    return () => cancelAnimationFrame(anim)
  }, [])

  return (
    <div className="relative">
      <div ref={containerRef} className="flex gap-8 overflow-x-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {logos.concat(logos).map((_, idx) => (
          <div key={idx} className="h-10 w-28 rounded bg-gray-100 flex items-center justify-center text-xs text-gray-500">
            LOGO
          </div>
        ))}
      </div>
    </div>
  )
}
