import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

export default function Comunidad() {
  const revealRef = useReveal()
  const { t } = useLanguage()
  const c = t.comunidad

  return (
    <section className="section section-humo" id="comunidad">
      <div className="container">
        <p className="eyebrow">{c.eyebrow}</p>
        <h2>{c.title}</h2>
        <div className="rows reveal-group" ref={revealRef}>
          {c.audiencias.map((audiencia) => (
            <div className="row" key={audiencia.id}>
              <h3>{audiencia.title}</h3>
              <p>{audiencia.description}</p>
            </div>
          ))}
        </div>

        <div className="idiomas">
          <p className="idiomas-titulo">{c.idiomasTitulo}</p>
          <div className="chips">
            <span className="chip chip-on">{c.chipEs}</span>
            <span className="chip chip-on">{c.chipEn}</span>
            <span className="chip">{c.chipQu}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
