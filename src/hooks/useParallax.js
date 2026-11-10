import { useEffect, useRef } from 'react'

// Traslada verticalmente el elemento según su posición en el viewport al hacer
// scroll, igual que el patrón data-parallax/data-parallax-speed del sitio de
// referencia. speed típico: 0.1 a 0.2. Clamp de ±60px.
export function useParallax(speed = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let ticking = false

    const update = () => {
      const viewportH = window.innerHeight
      const rect = el.parentElement?.getBoundingClientRect() ?? el.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > viewportH) {
        ticking = false
        return
      }
      const offset = (rect.top - viewportH / 2) * speed
      el.style.transform = `translateY(${Math.max(Math.min(offset, 60), -60)}px)`
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [speed])

  return ref
}
