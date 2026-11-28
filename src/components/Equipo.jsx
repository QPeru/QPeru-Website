import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { content } from '../i18n/content'
import { fotos } from '../data/fotos'
import { AREAS } from '../data/team'
import MiembrosEquipo from './Miembrosequipo'
import './Equipo.css'

// Área activa según el hash (#area-academica, #area-investigacion…).
// Se escucha "hashchange" porque los enlaces del navbar son <a> nativos y no
// pasan por react-router: sin esto, cambiar de área no re-renderizaría.
// OJO: los enlaces de la tabla de contenido NO cambian el hash (usan
// scrollIntoView), para no borrar el área activa.
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

// Título de sección formal: número dorado + título + filete (formato informe)
function Titulo({ n, children }) {
  return (
    <h3 className="area-h">
      <span className="area-h__num" aria-hidden="true">
        {String(n).padStart(2, '0')}
      </span>
      <span>{children}</span>
      <span className="area-h__linea" aria-hidden="true" />
    </h3>
  )
}

export default function Equipo() {
  const revealRef = useReveal()
  const { t, lang } = useLanguage()
  const eq = t.equipo
  const area = useAreaPorHash()
  const areaId = area ? area.id : null
  const [activa, setActiva] = useState('rol') // sección marcada en la tabla

  // Al entrar a un área, el encabezado (con su título y su fondeado) queda
  // arriba del todo y a la vista. Los <a> del área no tienen ancla destino,
  // así que nada más compite con este desplazamiento.
  useEffect(() => {
    if (areaId) window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [areaId])

  // Título del encabezado: el del área si vino de un subíndice, si no el
  // "Equipo de trabajo" de siempre. Cada departamento lleva su símbolo a
  // la derecha del nombre (λ, ∇, ∪, §, ∝, ⊗ → src/data/team.js).
  // En quechua se usa area.nombreQu (docs/quechua/glosario.md §4).
  const titulo = area
    ? (lang === 'qu' && area.nombreQu) ||
      (lang === 'en' ? area.nombreEn || area.nombre : area.nombre)
    : eq.title

  // Contenido de la página del área: por ahora solo "Operaciones y Logística".
  // Traducido SOLO al español (EN/QU pendientes) → respaldo con content.es.
  const detalle =
    areaId === 'operaciones' ? t.areaOperaciones || content.es.areaOperaciones : null

  // Secciones de la tabla de contenido: el MISMO orden que el cuerpo.
  const secciones = detalle
    ? [
        { id: 'rol', label: detalle.rolTitulo },
        { id: 'areas', label: detalle.areasTitulo },
        { id: 'como-trabajamos', label: detalle.comoTrabajamosTitulo },
        { id: 'logros', label: detalle.logrosTitulo },
        { id: 'equipo-area', label: detalle.equipoTitulo },
        { id: 'aliados', label: detalle.aliadosTitulo },
        { id: 'unete', label: detalle.uneteTitulo },
        { id: 'contacto', label: detalle.contactoTitulo }
      ]
    : []

  // Resalta la sección que se está leyendo (mismo efecto que la referencia).
  useEffect(() => {
    if (!secciones.length) return
    const els = secciones
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)
    if (!els.length) return

    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) setActiva(e.target.id)
        })
      },
      { rootMargin: '-25% 0px -65% 0px' }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
    // secciones es un array nuevo en cada render: se depende de su tamaño
    // y del área activa, que es cuando cambia de verdad.
  }, [secciones.length, areaId])

  // Salto a la sección SIN tocar el hash (si no, se perdería el área).
  const irA = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiva(id)
  }

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
          <h2>
            {titulo}
            {area && (
              <span className="tm-simbolo" aria-hidden="true">
                {area.simbolo}
              </span>
            )}
          </h2>
        </div>
      </section>

      {/* 2. Cuerpo: en el área, tabla de contenido + secciones ordenadas;
          sin área, la lista oficial completa de la jerarquía. */}
      <section
        className={`section section-humo ${detalle ? 'area-pagina' : 'equipo-lista'}`}
        style={detalle ? { '--c': area.color } : undefined}
      >
        <div className={detalle ? 'container area-layout' : 'container'}>
          {/* ── Tabla de contenido (solo en el área) ── */}
          {detalle && (
            <aside className="area-toc" aria-label={detalle.tocTitulo}>
              <div className="area-toc__inner">
                <span className="area-toc__linea" aria-hidden="true" />
                <p className="area-toc__titulo">{detalle.tocTitulo}</p>
                <ul>
                  {secciones.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={activa === s.id ? 'is-active' : ''}
                        onClick={(e) => irA(e, s.id)}
                      >
                        <span className="area-toc__num" aria-hidden="true">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{s.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}

          <div className="area-main">
            {/* 1. Nuestro rol */}
            {detalle && (
              <section className="area-seccion" id="rol">
                <Titulo n={1}>{detalle.rolTitulo}</Titulo>
                {/* bloque jerárquico: nivel 1 la frase, nivel 2 el apoyo */}
                <div className="area-rol">
                  <p className="area-rol__frase">{detalle.rol}</p>
                  <p className="area-rol__apoyo">{detalle.rolTexto}</p>
                </div>
              </section>
            )}

            {/* 2. Áreas de trabajo */}
            {detalle && (
              <section className="area-seccion" id="areas">
                <Titulo n={2}>{detalle.areasTitulo}</Titulo>
                <div className="area-detalle__grid">
                  {detalle.areas.map((a) => (
                    <article className="area-card" key={a.titulo}>
                      <h4>{a.titulo}</h4>
                      <p>{a.desc}</p>
                      {/* dato de impacto: si sigue en null, no se muestra */}
                      {a.dato && <span className="area-card__dato">{a.dato}</span>}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* 3. Cómo trabajamos */}
            {detalle && (
              <section className="area-seccion" id="como-trabajamos">
                <Titulo n={3}>{detalle.comoTrabajamosTitulo}</Titulo>
                <p className="area-texto">{detalle.comoTrabajamos}</p>
              </section>
            )}

            {/* 4. Qué hemos logrado */}
            {detalle && (
              <section className="area-seccion" id="logros">
                <Titulo n={4}>{detalle.logrosTitulo}</Titulo>
                <ul className="area-lista">
                  {detalle.logros.map((l) => (
                    <li key={l.t}>
                      <h4>{l.t}</h4>
                      <p>{l.d}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 5. Nuestro equipo: las tarjetas que ya existen */}
            <section className="area-seccion" id="equipo-area">
              <div className="reveal-group" ref={revealRef}>
                {detalle && <Titulo n={5}>{detalle.equipoTitulo}</Titulo>}
                <MiembrosEquipo fotos={fotos} tema="oscuro" area={area} />
              </div>
            </section>

            {/* 6. Aliados y colaboradores */}
            {detalle && (
              <section className="area-seccion" id="aliados">
                <Titulo n={6}>{detalle.aliadosTitulo}</Titulo>
                <ul className="area-lista">
                  {detalle.aliados.map((al) => (
                    <li key={al.t}>
                      <h4>{al.t}</h4>
                      <p>{al.d}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 7. Únete al área */}
            {detalle && (
              <section className="area-seccion" id="unete">
                <Titulo n={7}>{detalle.uneteTitulo}</Titulo>
                <p className="area-unete__texto">{detalle.unete.texto}</p>
                <div className="area-unete__btns">
                  <Link className="btn area-btn area-btn--solido" to="/solicitud">
                    {detalle.unete.voluntariado}
                  </Link>
                  <Link className="btn area-btn" to="/solicitud">
                    {detalle.unete.colaboracion}
                  </Link>
                </div>
              </section>
            )}

            {/* 8. Contacto del área */}
            {detalle && (
              <section className="area-seccion" id="contacto">
                <Titulo n={8}>{detalle.contactoTitulo}</Titulo>
                <p className="area-texto">{detalle.contacto}</p>
              </section>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
