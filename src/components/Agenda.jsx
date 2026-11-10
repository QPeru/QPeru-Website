import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Agenda() {
  const { t } = useLanguage()
  const e = t.eventos

  return (
    <section className="section" id="agenda">
      <div className="container">
        <p className="eyebrow">{e.eyebrow}</p>
        <h2>{e.title}</h2>
        <div className="agenda-card">
          <p className="agenda-estado"><span className="pulse-dot" aria-hidden="true"></span>&nbsp; {e.estado}</p>
          <p>{e.texto}</p>
          <Link className="btn btn-linea" to="/contactanos">{e.cta}</Link>
        </div>
      </div>
    </section>
  )
}
