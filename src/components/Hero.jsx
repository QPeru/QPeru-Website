import { useRevealVariant } from '../hooks/useReveal'
import { useParallax } from '../hooks/useParallax'
import { useLanguage } from '../context/LanguageContext'
import { WSP_COMUNIDAD } from '../data/socialLinks'
import logo from '../assets/LOGO3 FINAL.svg'

export default function Hero() {
  const copyRef = useRevealVariant('left')
  const visualRef = useRevealVariant('right')
  const parallaxRef = useParallax(0.12)
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy" ref={copyRef}>
          <p className="eyebrow">{h.eyebrow}</p>
          <h1>{h.title1}<span className="rojo">{h.titleRojo}</span>{h.title2}</h1>
          <p className="hero-sub">{h.sub}</p>
          <div className="cta-row">
            <a className="btn btn-rojo" href={WSP_COMUNIDAD} target="_blank" rel="noopener noreferrer">{h.ctaUnete}</a>
            <a className="btn btn-linea" href="#actividades">{h.ctaConoce}</a>
          </div>
        </div>
        <div className="hero-visual" ref={visualRef}>
          <img ref={parallaxRef} src={logo} alt="QPerú" width="1200" height="1219" />
        </div>
      </div>
    </section>
  )
}
