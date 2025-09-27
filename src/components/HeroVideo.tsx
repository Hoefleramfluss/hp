import { useEffect, useRef, useState } from 'react'

const HERO_VIDEO_SRC = '/video/hero-video.mp4'
const HERO_VIDEO_POSTER = '/video/hero-poster.jpg'

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [allowMotion, setAllowMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => {
      setAllowMotion(!mediaQuery.matches)
    }

    updateMotionPreference()
    mediaQuery.addEventListener?.('change', updateMotionPreference)
    mediaQuery.addListener?.(updateMotionPreference)

    return () => {
      mediaQuery.removeEventListener?.('change', updateMotionPreference)
      mediaQuery.removeListener?.(updateMotionPreference)
    }
  }, [])

  useEffect(() => {
    const node = videoRef.current
    if (!node) return

    if (allowMotion) {
      node.play().catch(() => {
        /* Autoplay might be blocked; ignore silently */
      })
    } else {
      node.pause()
      node.currentTime = 0
    }
  }, [allowMotion])

  return (
    <div className="hero-video-layer" aria-hidden={!allowMotion}>
      <video
        ref={videoRef}
        className="hero-video"
        poster={HERO_VIDEO_POSTER}
        playsInline
        muted
        loop
        preload="metadata"
        autoPlay
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="hero-video-overlay" />
    </div>
  )
}
