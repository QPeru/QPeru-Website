import { useEffect, useRef } from 'react'

// Revela un bloque al entrar en viewport: agrega la clase .visto al elemento
// que usa el ref (ver .reveal-group.visto en src/index.css).
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      ref.current.classList.add('visto')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visto')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return ref
}
