import { useRevealVariant } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Cursos() {
  const revealRef = useRevealVariant('scale')
  const { t } = useLanguage()
  const c = t.cursos

  return (
    <section className="section" id="cursos">
      <div className="container">
        <p className="eyebrow">{c.eyebrow}</p>
        <h2>{c.title}</h2>
        <div className="agenda-card" ref={revealRef}>
          <p className="agenda-estado"><span className="pulse-dot" aria-hidden="true"></span>&nbsp; {c.estado}</p>
          <p>{c.texto}</p>
        </div>
      </div>
    </section>
  )
}
