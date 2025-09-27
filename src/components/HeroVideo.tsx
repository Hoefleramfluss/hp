import { useEffect, useRef, useState } from 'react'

const HERO_VIDEO_SRC = '/video/hero-video.mp4'
const HERO_VIDEO_POSTER = '/video/hero-poster.jpg'

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldAutoplay, setShouldAutoplay] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReducedMotion.matches) return
    setShouldAutoplay(true)
  }, [])

  useEffect(() => {
    if (!shouldAutoplay) return
    const node = videoRef.current
    node?.play().catch(() => {
      /* Autoplay might be blocked; ignore silently */
    })
  }, [shouldAutoplay])

  return (
    <div className="hero-video-layer" aria-hidden="true">
      <video
        ref={videoRef}
        className="hero-video"
        poster={HERO_VIDEO_POSTER}
        playsInline
        muted
        loop
        preload="metadata"
        autoPlay={shouldAutoplay}
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="hero-video-overlay" />
    </div>
  )
}
