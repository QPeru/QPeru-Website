import { useEffect, useRef } from 'react'

// Fondo de video en bucle "boomerang": el archivo trae la ida y la vuelta
// (10s = 2× los 5.088s de quantum.mp4, mismo 1728x992), así que al terminar
// cae en el mismo frame del inicio y el `loop` no se nota. No hace falta
// invertir la reproducción en JS (haría doble vuelta y se vería raro).
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
      src="/quantum_loop_boomerang.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  )
}