import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { fotos } from '../data/fotos'
import { AREAS } from '../data/team'
import MiembrosEquipo from './Miembrosequipo'

// Área activa según el hash (#area-academica, #area-investigacion…).
// Se escucha "hashchange" porque los enlaces del navbar son <a> nativos y no
// pasan por react-router: sin esto, cambiar de área no re-renderizaría.
function useAreaPorHash() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  if (!hash.startsWith('#area-')) return null
  const id = hash.slice('#area-'.length)
  return AREAS.find((a) => a.id === id) || null
}

export default function Equipo() {
  const revealRef = useReveal()
  const { t, lang } = useLanguage()
  const eq = t.equipo
  const area = useAreaPorHash()
  const areaId = area ? area.id : null

  // Al entrar a un área, el encabezado (con su título y su fondeado) queda
  // arriba del todo y a la vista. Los <a> del área no tienen ancla destino,
  // así que nada más compite con este desplazamiento.
  useEffect(() => {
    if (areaId) window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [areaId])

  // Título del encabezado: el del área si vino de un subíndice, si no el
  // "Equipo de trabajo" de siempre.
  const titulo = area
    ? (lang === 'en' ? area.nombreEn || area.nombre : area.nombre)
    : eq.title

  return (
    <>
      {/* 1. Encabezado sobre el video. "hero-blend" añade el fundido borroso
          y el degradado hacia el fondo sólido. Al elegir un área se le monta
          encima un fondeado con su color (--area-color). */}
      <section
        className="section hero-blend"
        id="equipo"
        style={area ? { '--area-color': area.color } : undefined}
      >
        {area && <span className="area-wash" aria-hidden="true" />}
        <div className="container">
          <h2>{titulo}</h2>
        </div>
      </section>

      {/* 2. Integrantes sobre el fondo sólido: si vino de un subíndice se
          muestra solo ese área (director y subdirector); sin área, la
          lista oficial completa de la jerarquía. */}
      <section className="section section-humo equipo-lista">
        <div className="container">
          <div className="reveal-group" ref={revealRef}>
            <MiembrosEquipo fotos={fotos} tema="oscuro" area={area} />
          </div>
        </div>
      </section>
    </>
  )
}
