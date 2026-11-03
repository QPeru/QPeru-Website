import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Mission() {
  const revealRef = useReveal()
  const { t } = useLanguage()
  const m = t.sobreNosotros.mision

  return (
    <section className="section fade-top" id="mision">
      <div className="container split">
        <div>
          <p className="eyebrow">{m.eyebrow}</p>
          <h2>{m.title1}<br/>{m.title2}</h2>
        </div>
        <div ref={revealRef}>
          <p className="lede">{m.lede}</p>
          <p>{m.texto}</p>
          <ul className="facts reveal-group">
            {m.facts.map((fact) => (
              <li key={fact.k}>
                <span className="fact-k">{fact.k}</span>
                <span>{fact.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}