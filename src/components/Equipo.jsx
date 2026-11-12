import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { fotos } from '../data/fotos'
import MiembrosEquipo from './Miembrosequipo'

export default function Equipo() {
  const revealRef = useReveal()
  const { t } = useLanguage()
  const eq = t.equipo

  return (
    <>
      {/* 1. Encabezado "Equipo de trabajo" sobre el video.
          "hero-blend" añade el fundido borroso y degradado hacia el fondo sólido. */}
      <section className="section hero-blend" id="equipo">
        <div className="container">
          <p className="eyebrow">{eq.eyebrow}</p>
          <h2>{eq.title}</h2>
        </div>
      </section>

      {/* 2. Lista de integrantes sobre el fondo sólido del sitio */}
      <section className="section section-humo">
        <div className="container">
          <div className="reveal-group" ref={revealRef}>
            <MiembrosEquipo fotos={fotos} tema="oscuro" video="/fondo.mp4" />
          </div>
        </div>
      </section>
    </>
  )
}
