import { useEffect, useRef } from 'react'

const logos = [
  '/logos/workflow-ai.svg',
  '/logos/jose-cuervo.svg',
  '/logos/ai-systems.svg',
  '/logos/workflow-ai.svg',
  '/logos/ai-systems.svg'
]

export default function LogoMarquee() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const step = () => {
      el.scrollLeft += 0.6
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) el.scrollLeft = 0
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])
  return (
    <div className="relative">
      <div ref={ref} className="flex gap-10 overflow-x-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {logos.concat(logos).map((src, idx) => (
          <img
            key={idx}
            src={src}
            height={24}
            width={120}
            alt="Partner logo"
            className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  )
}
