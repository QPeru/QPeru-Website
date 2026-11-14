import { useState } from 'react'
import { PEOPLE, FUNDADORES, LEADERSHIP_BOARD, AREAS, MIEMBROS_CORE, UNIVERSIDADES, UNIVERSIDADES_EN } from '../data/team'
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
    vacante: 'Vacante',
    rolFund: 'Co-fundador/a',
    rolBoard: 'Leadership Board',
    rolDir: 'Director/a',
    rolSub: 'Subdirector/a',
    rolCore: 'Miembro core',
    linkedin: 'LinkedIn de',
    github: 'GitHub de',
  },
  en: {
    fundadores: { t: 'QPeru Co-Founders', s: 'Creation and vision of QPeru' },
    board: { t: 'QPeru Leadership Board', s: 'Strategic direction and general coordination' },
    coord: { t: 'Area Coordinators', s: 'Leaders and members of each area' },
    core: { t: 'Core Members', s: 'Members without a specific area' },
    vacante: 'Vacant',
    rolFund: 'Co-founder',
    rolBoard: 'Leadership Board',
    rolDir: 'Director',
    rolSub: 'Deputy director',
    rolCore: 'Core member',
    linkedin: 'LinkedIn of',
    github: 'GitHub of',
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

// Nombre completo de la universidad junto a su sigla: "UNI (…)"
function universidad(siglas, en) {
  const nombre = (en ? UNIVERSIDADES_EN : UNIVERSIDADES)[siglas]
  return nombre ? `${nombre} (${siglas})` : siglas
}

// Tarjeta de persona. Si no hay id, es un puesto vacante.
function Tarjeta({ id, rol, foto, L, en }) {
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
      <p className="tm-uni">{universidad(p.universidad, en)}</p>

      {(p.cv.linkedin || p.cv.github) && (
        <div className="tm-social-row">
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
          {p.cv.github && (
            <a
              className="tm-social"
              href={p.cv.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${L.github} ${p.nombre}`}
            >
              <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>
          )}
        </div>
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
        <Tarjeta key={it.key} id={it.id} rol={it.rol} foto={it.id ? fotos[it.id] : null} L={L} en={en} />
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
    </div>
  )
}