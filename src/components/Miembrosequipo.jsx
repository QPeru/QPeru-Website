import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PEOPLE, FUNDADORES, LEADERSHIP_BOARD, AREAS, MIEMBROS_CORE } from '../data/team'
import { useLanguage } from '../context/LanguageContext'
import './Miembrosequipo.css'

// Colores de cada nivel de la jerarquía (los mismos de la pirámide)
const COLOR = {
  fundadores: '#c0a46e',
  board: '#8b0e0e',
  coord: '#3b6dff',
  core: '#5470ff',
  part: '#8b4dff',
}

const TXT = {
  es: {
    fundadores: { t: 'Co-Fundadores de QPerú', s: 'Creación y visión de QPerú' },
    board: { t: 'Leadership Board de QPerú', s: 'Dirección estratégica y coordinación general' },
    coord: { t: 'Coordinadores de Área', s: 'Líderes y miembros de cada área' },
    core: { t: 'Miembros Core', s: 'Miembros sin un área específica' },
    part: {
      t: 'Participantes de QPerú',
      s: 'Personas que participan en las actividades, talleres, eventos y proyectos de QPerú',
    },
    partTexto:
      'Los participantes son todas las personas que se suman a nuestros talleres, charlas, eventos y proyectos. Cualquiera puede serlo: solo tienes que unirte a la comunidad.',
    unete: 'Únete a la comunidad',
    vacante: 'Vacante',
    rolFund: 'Co-fundador/a',
    rolBoard: 'Leadership Board',
    rolDir: 'Director/a',
    rolSub: 'Subdirector/a',
    rolCore: 'Miembro core',
    linkedin: 'LinkedIn de',
  },
  en: {
    fundadores: { t: 'QPeru Co-Founders', s: 'Creation and vision of QPeru' },
    board: { t: 'QPeru Leadership Board', s: 'Strategic direction and general coordination' },
    coord: { t: 'Area Coordinators', s: 'Leaders and members of each area' },
    core: { t: 'Core Members', s: 'Members without a specific area' },
    part: {
      t: 'QPeru Participants',
      s: 'People who participate in QPeru’s activities, workshops, events, and projects',
    },
    partTexto:
      'Participants are everyone who joins our workshops, talks, events and projects. Anyone can be one: you just have to join the community.',
    unete: 'Join the community',
    vacante: 'Vacant',
    rolFund: 'Co-founder',
    rolBoard: 'Leadership Board',
    rolDir: 'Director',
    rolSub: 'Deputy director',
    rolCore: 'Core member',
    linkedin: 'LinkedIn of',
  },
}

function iniciales(nombre) {
  return nombre
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
}

// Tarjeta de persona. Si no hay id, es un puesto vacante.
function Tarjeta({ id, rol, foto, L }) {
  const [falla, setFalla] = useState(false)

  if (!id) {
    return (
      <article className="tm-card tm-card--vacante">
        <div className="tm-foto">
          <span aria-hidden="true">?</span>
        </div>
        <h3 className="tm-nombre">{L.vacante}</h3>
        <p className="tm-rol">{rol}</p>
      </article>
    )
  }

  const p = PEOPLE[id]

  return (
    <article className="tm-card">
      <div className="tm-foto">
        {foto && !falla ? (
          <img src={foto} alt={p.nombre} onError={() => setFalla(true)} />
        ) : (
          <span aria-hidden="true">{iniciales(p.nombre)}</span>
        )}
      </div>

      <h3 className="tm-nombre">{p.nombre}</h3>
      <p className="tm-rol">{rol}</p>
      <p className="tm-uni">{p.universidad}</p>

      {p.cv.linkedin && (
        <a
          className="tm-social"
          href={p.cv.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${L.linkedin} ${p.nombre}`}
        >
          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
            <path
              fill="currentColor"
              d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"
            />
          </svg>
        </a>
      )}
    </article>
  )
}

// Un nivel de la jerarquía: título, subtítulo y una barra con el color del nivel
function Nivel({ id, color, titulo, sub, children }) {
  return (
    <section className="tm-nivel" style={{ '--nivel': color }} aria-labelledby={`tm-${id}`}>
      <header className="tm-nivel__head">
        <h2 id={`tm-${id}`}>{titulo}</h2>
        <p>{sub}</p>
        <span className="tm-nivel__bar" aria-hidden="true" />
      </header>
      {children}
    </section>
  )
}

// fotos: objeto { idPersona: urlImportada }, p. ej. { maria: fotoMaria }
// tema:  'claro' (fondo blanco, como la referencia) o 'oscuro' (fondo del sitio)
export default function MiembrosEquipo({ fotos = {}, tema = 'claro' }) {
  const { lang } = useLanguage()
  const L = TXT[lang] || TXT.es
  const en = lang === 'en'

  // En español el rol sale de PEOPLE ("Fundadora" -> "Co-fundadora")
  const rolFundador = (id) =>
    !en && PEOPLE[id].fundador ? `Co-${PEOPLE[id].fundador.toLowerCase()}` : L.rolFund

  const fila = (items) => (
    <div className="tm-fila">
      {items.map((it) => (
        <Tarjeta key={it.key} id={it.id} rol={it.rol} foto={it.id ? fotos[it.id] : null} L={L} />
      ))}
    </div>
  )

  return (
    <div className={`tm-wrap tm-wrap--${tema}`}>
      {/* 1. Co-fundadores */}
      <Nivel id="fundadores" color={COLOR.fundadores} titulo={L.fundadores.t} sub={L.fundadores.s}>
        {fila(FUNDADORES.map((id) => ({ key: `f-${id}`, id, rol: rolFundador(id) })))}
      </Nivel>

      {/* 2. Leadership Board (bloque distinto al de co-fundadores) */}
      <Nivel id="board" color={COLOR.board} titulo={L.board.t} sub={L.board.s}>
        {fila(LEADERSHIP_BOARD.map((id) => ({ key: `b-${id}`, id, rol: L.rolBoard })))}
      </Nivel>

      {/* 3. Coordinadores de Área: rejilla de 2 x 3, una celda por área */}
      <Nivel id="coord" color={COLOR.coord} titulo={L.coord.t} sub={L.coord.s}>
        <div className="tm-areas">
          {AREAS.map((a) => (
            <div className="tm-area" key={a.id} style={{ '--c': a.color }}>
              <h3>{en ? a.nombreEn || a.nombre : a.nombre}</h3>
              <p>{en ? a.lemaEn || a.lema : a.lema}</p>
              {fila([
                { key: `d-${a.id}`, id: a.director, rol: L.rolDir },
                { key: `s-${a.id}`, id: a.subdirector, rol: L.rolSub },
              ])}
            </div>
          ))}
        </div>
      </Nivel>

      {/* Miembros core (junto a los coordinadores en la jerarquía) */}
      <Nivel id="core" color={COLOR.core} titulo={L.core.t} sub={L.core.s}>
        {fila(MIEMBROS_CORE.map((id) => ({ key: `c-${id}`, id, rol: L.rolCore })))}
      </Nivel>

      {/* 4. Participantes: no se listan personas */}
      <Nivel id="part" color={COLOR.part} titulo={L.part.t} sub={L.part.s}>
        <div className="tm-part">
          <p>{L.partTexto}</p>
          <Link className="tm-btn" to="/contactanos">
            {L.unete}
          </Link>
        </div>
      </Nivel>
    </div>
  )
}