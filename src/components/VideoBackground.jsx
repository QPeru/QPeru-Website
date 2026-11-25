import { useEffect, useRef } from 'react'

// Fondo de video en bucle: quantum.mp4 (5.088s, 1728x992), mudo y sin
// controles. Donde el navegador admite `playbackRate` negativo (Safari) se
// reproduce "ida y vuelta" para que el reinicio no se note —el mismo
// efecto del archivo boomerang de 17MB que ya no usamos—; el resto
// (Chrome, Firefox…) cae al `loop` nativo. Si la marcha atrás anunciada
// no funciona de verdad, se desactiva sola y manda el loop. Autoplay
// bloqueado → se reintenta en el primer clic o tecla; pestaña oculta →
// se pausa para no gastar CPU.
export default function VideoBackground() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Firefox lanza NotSupportedError y Chrome/-Edge aceptan el valor pero
    // reproducen hacia adelante: solo confiamos en la marcha atrás si el
    // atributo se queda en negativo (y aun así se verifica en marcha).
    let reverseOK = false
    try {
      video.playbackRate = -1
      reverseOK = video.playbackRate === -1
    } catch {
      reverseOK = false
    }
    video.playbackRate = 1

    const BOUNCE = 0.5 // margen (s) en cada extremo antes de invertir
    let forward = true
    let watchdog = 0

    const heal = () => {
      // El navegador anunció marcha atrás pero no la aplica: volver a
      // avance y dejar que mande el `loop` nativo.
      clearTimeout(watchdog)
      reverseOK = false
      forward = true
      video.playbackRate = 1
    }

    // Si tras poner marcha atrás el tiempo no baja (navegador que no la
    // aplica de verdad, o se quedó helado), se revierte el intento. Un
    // corte de buffer no cuenta: si readyState está bajo, se reintenta.
    const armWatchdog = (pos) => {
      clearTimeout(watchdog)
      watchdog = setTimeout(() => {
        if (forward) return
        if (video.currentTime < pos - 0.1) return // sí está retrocediendo
        if (video.paused || video.readyState < video.HAVE_FUTURE_DATA) {
          return armWatchdog(pos) // pausado o cortando buffer: aún no se sabe
        }
        heal()
      }, 800)
    }

    const onTimeUpdate = () => {
      if (!reverseOK || !Number.isFinite(video.duration)) return
      const t = video.currentTime
      if (forward) {
        if (t >= video.duration - BOUNCE) {
          forward = false
          video.playbackRate = -1
          armWatchdog(t)
        }
      } else if (t <= BOUNCE) {
        clearTimeout(watchdog)
        forward = true
        video.playbackRate = 1
      }
    }

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

    // Red de seguridad: si el video se para en un extremo (p. ej. llegando
    // a 0 reproduciendo marcha atrás), se vuelve a avance desde el inicio.
    const onEnded = () => {
      clearTimeout(watchdog)
      forward = true
      video.playbackRate = 1
      video.currentTime = 0
      play()
    }

    const onVisibility = () => (document.hidden ? video.pause() : play())

    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)
    play()
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      clearTimeout(watchdog)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
      document.removeEventListener('visibilitychange', onVisibility)
    }
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
