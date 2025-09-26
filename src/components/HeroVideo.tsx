import { useEffect, useMemo, useRef } from 'react'

/**
 * Background hero video with sensible fallbacks.
 * - Respects prefers-reduced-motion
 * - Uses env URLs when provided to avoid bundling large binaries
 * - Plays muted/inline for mobile
 */
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const srcMp4 = import.meta.env.VITE_HERO_VIDEO_URL_MP4 as string | undefined
  const srcWebm = import.meta.env.VITE_HERO_VIDEO_URL_WEBM as string | undefined

  // Demo fallback: abstract tech loop
  const fallbackMp4 = 'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_25fps.mp4'

  const shouldReduce = useMemo(
    () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  )

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (shouldReduce) {
      el.pause()
      return
    }
    const onVisibility = () => {
      if (document.visibilityState === 'visible') el.play().catch(() => {})
      else el.pause()
    }
    document.addEventListener('visibilitychange', onVisibility)
    el.play().catch(() => {})
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [shouldReduce])

  // Temporarily disable video to avoid any visual artifacts in the hero background
  return null

  // Old implementation preserved below for easy re-enable
  // return (
  //   <video
  //     ref={videoRef}
  //     className="absolute inset-0 -z-10 h-full w-full object-cover opacity-65 mix-blend-soft-light"
  //     autoPlay
  //     muted
  //     loop
  //     playsInline
  //     preload="metadata"
  //     aria-hidden="true"
  //     poster="/vite.svg"
  //   >
  //     {srcWebm && <source src={srcWebm} type="video/webm" />}
  //     <source src={srcMp4 || fallbackMp4} type="video/mp4" />
  //   </video>
  // )
}
