import { useEffect, useRef } from 'react'

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

// Reveal de un solo elemento, con dirección: 'up' | 'left' | 'right' | 'scale'.
// Agrega la clase base (.reveal / .reveal-left / .reveal-right / .reveal-scale)
// y activa .active al entrar en viewport, igual que en el sitio de referencia.
const VARIANT_CLASS = {
  up: 'reveal',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
}

export function useRevealVariant(direction = 'up') {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const cls = VARIANT_CLASS[direction] || 'reveal'
    el.classList.add(cls)

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      el.classList.add('active')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [direction])

  return ref
}
