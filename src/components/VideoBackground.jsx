import { useEffect, useRef } from 'react'

export default function VideoBackground() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const play = () => {
      video.muted = true
      const p = video.play()
      if (p !== undefined) {
        p.catch(() => {
          const retry = () => video.play().catch(() => {})
          window.addEventListener('pointerdown', retry, { once: true })
          window.addEventListener('keydown', retry, { once: true })
        })
      }
    }

    const onVisibility = () => (document.hidden ? video.pause() : play())

    play()
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  return (
    <video
      ref={videoRef}
      className="video-bg"
      src="/quantum.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  )
}