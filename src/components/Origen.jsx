import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Origen() {
  const { t } = useLanguage()
  const o = t.origen

  return (
    <section className="intro" id="origen">
      <div className="intro-inner">
        <h2 className="intro-title">{o.title}</h2>

        <div className="intro-text">
          {o.parrafos.map((texto, i) => (
            <p key={i}>{texto}</p>
          ))}
          <Link to="/sobre-nosotros" className="intro-btn">{o.cta}</Link>
        </div>
      </div>
    </section>
  )
}