import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../hooks/useTheme'
import logo from '../assets/LOGO2 FINAL nav.svg'
import './Navbar.css'

// Estructura del menú: cada ítem puede tener "children" (submenú desplegable).
// Los href "#" son páginas que aún no existen: cámbialos cuando las crees.
// Para secciones de la portada usa "/#id" (funciona desde cualquier página).
// Las etiquetas visibles vienen de t.nav.menu (ver src/i18n/content.js).
// Los submenús se nombran automáticamente "Subíndice 1..n" (ver más abajo).
const MENU = [
  {
    key: 'acercaDe',
    children: [
      { href: '#' },
      { href: '#' },
      { href: '#' },
    ],
  },
  {
    key: 'eventos',
    children: [
      { href: '/#actividades' },
      { href: '#' },
      { href: '#' },
      { href: '/#actividades' },
      { href: '#' },
    ],
  },
  {
    key: 'publicaciones',
    children: [
      { href: '#' },
      { href: '#' },
      { href: '#' },
    ],
  },
  { key: 'equipo', href: '/sobre-nosotros#equipo' },
  { key: 'solicitud', href: '/solicitud' },
]

// Opciones del selector de idioma (esquina superior derecha).
// El nombre visible se traduce con t.nav.idiomas[id].
const IDIOMAS = [
  { id: 'es', corto: 'ES' },
  { id: 'en', corto: 'EN' },
  { id: 'qu', corto: 'QU' },
]

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null) // submenú abierto
  const [mobileOpen, setMobileOpen] = useState(false) // menú hamburguesa
  const [langOpen, setLangOpen] = useState(false) // selector de idioma abierto
  const navRef = useRef(null)
  const { lang, setLang, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const nav = t.nav
  const idiomaActual = IDIOMAS.find((i) => i.id === lang) || IDIOMAS[0]
  const nombreIdioma = nav.idiomas[idiomaActual.id] || idiomaActual.corto
  const temaOscuro = theme !== 'light'

  // Cerrar submenú al hacer clic fuera o presionar Escape
  useEffect(() => {
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenIndex(null)
        setLangOpen(false)
      }
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenIndex(null)
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const closeAll = () => {
    setOpenIndex(null)
    setMobileOpen(false)
  }

  const elegirIdioma = (id) => {
    setLang(id)
    setLangOpen(false)
  }

  return (
    <header className="nav" ref={navRef}>
      <a href="/" className="nav__logo" aria-label={nav.aria.inicio} onClick={closeAll}>
        <img src={logo} alt="QPerú" />
      </a>

      {/* Selector de idioma: botón redondeado con menú desplegable */}
      <div className="nav__actions">
        <div className={`nav__lang ${langOpen ? 'is-open' : ''}`}>
          <button
            type="button"
            className="nav__lang-btn"
            aria-haspopup="listbox"
            aria-expanded={langOpen}
            aria-label={`${nav.aria.idioma}: ${nombreIdioma}`}
            onClick={() => setLangOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z" />
            </svg>
            <span className="nav__lang-code">{idiomaActual.corto}</span>
            <span className="nav__lang-caret" aria-hidden="true" />
          </button>

          <ul className="nav__lang-menu" role="listbox" aria-label={nav.aria.elegirIdioma}>
            {IDIOMAS.map((idioma) => {
              const activo = idioma.id === lang
              return (
                <li key={idioma.id} role="presentation">
                  <button
                    type="button"
                    role="option"
                    aria-selected={activo}
                    onClick={() => elegirIdioma(idioma.id)}
                  >
                    <span>{nav.idiomas[idioma.id] || idioma.corto}</span>
                    {activo && (
                      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="m5 12.5 4.5 4.5L19 7" />
                      </svg>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Cambio de tema (oscuro / claro): mismo estilo que el selector de idioma */}
        <button
          type="button"
          className="nav__theme-btn"
          aria-label={temaOscuro ? nav.aria.temaClaro : nav.aria.temaOscuro}
          title={temaOscuro ? nav.aria.temaClaro : nav.aria.temaOscuro}
          onClick={toggleTheme}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          >
            {temaOscuro ? (
              /* sol: al estar en oscuro, el clic pasa a claro */
              <>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
              </>
            ) : (
              /* luna: al estar en claro, el clic pasa a oscuro */
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
            )}
          </svg>
        </button>
      </div>

      <button
        className="nav__toggle"
        aria-label={nav.aria.abrirMenu}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`nav__menu ${mobileOpen ? 'is-open' : ''}`}
        aria-label={nav.aria.navegacion}
      >
        <ul className="nav__list">
          {MENU.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <li
                key={item.key}
                className={`nav__item ${isOpen ? 'is-open' : ''}`}
                onMouseEnter={() => item.children && setOpenIndex(i)}
                onMouseLeave={() => item.children && setOpenIndex(null)}
              >
                {item.children ? (
                  <>
                    <button
                      className="nav__link"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      {nav.menu[item.key]}
                    </button>
                    <ul className="nav__dropdown">
                      {item.children.map((sub, j) => (
                        <li key={j}>
                          <a href={sub.href} onClick={closeAll}>
                            {nav.menu.subindice} {j + 1}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a href={item.href} className="nav__link" onClick={closeAll}>
                    {nav.menu[item.key]}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}