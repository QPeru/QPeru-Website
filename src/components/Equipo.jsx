import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { fotos } from '../data/fotos'
import MiembrosEquipo from './Miembrosequipo'

export default function Equipo() {
  const revealRef = useReveal()
  const { t } = useLanguage()
  const eq = t.equipo

  return (
    <section className="section section-humo" id="equipo">
      <div className="container">
        <p className="eyebrow">{eq.eyebrow}</p>
        <h2>{eq.title}</h2>
        <p className="section-intro">{eq.intro}</p>

        <div className="reveal-group" ref={revealRef}>
          <MiembrosEquipo fotos={fotos} tema="oscuro" video="/fondo.mp4" />
        </div>
      </div>
    </section>
  )
}