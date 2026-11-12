import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useReveal } from '../hooks/useReveal'

// Color del nivel "Participantes" (el mismo de Miembrosequipo.jsx)
const COLOR_PART = '#8b4dff'

export default function Solicitud() {
  const revealRef = useReveal()
  const { t } = useLanguage()
  const s = t.solicitud

  return (
    <section className="section section-humo" id="solicitud">
      <div className="container">
        <div className="split sol-grid reveal-group" ref={revealRef}>
          {/* Izquierda: la misma estructura que el nivel "Participantes" de
              Miembros de Equipo (título, subtítulo, barra, texto y botón). */}
          <div className="sol-part" style={{ '--nivel': COLOR_PART }}>
            <h2>{s.title}</h2>
            <p className="sol-sub">{s.subtitulo}</p>
            <span className="sol-bar" aria-hidden="true" />

            <p className="sol-texto">{s.texto}</p>

            {/* Botón píldora: el mismo diseño del botón "Únete a la
                comunidad" de Participantes en Miembros de Equipo. */}
            <Link className="sol-btn" to="/contactanos">
              {s.unete}
            </Link>
          </div>

          {/* Derecha: espacio reservado para la mascota.
              Cuando tengas la imagen, reemplaza este div por:
              <img className="sol-mascota-img" src={tuMascota} alt="Mascota de QPerú" /> */}
          <div className="sol-mascota" aria-hidden="true">
            <span>{s.mascota}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
