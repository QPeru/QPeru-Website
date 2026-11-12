import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import logo from '../assets/LOGO2 FINAL nav.svg'
import './Navbar.css'

// Estructura del menú: cada ítem puede tener "children" (submenú desplegable).
// Los href "#" son páginas que aún no existen: cámbialos cuando las crees.
// Para secciones de la portada usa "/#id" (funciona desde cualquier página).
// Los submenús se nombran automáticamente "Subíndice 1..n" (ver más abajo).
const MENU = [
  {
    label: 'Acerca de',
    children: [
      { href: '#' },
      { href: '#' },
      { href: '#' },
    ],
  },
  {
    label: 'Eventos',
    children: [
      { href: '/#actividades' },
      { href: '#' },
      { href: '#' },
      { href: '/#actividades' },
      { href: '#' },
    ],
  },
  {
    label: 'Nuestras publicaciones',
    children: [
      { href: '#' },
      { href: '#' },
      { href: '#' },
    ],
  },
  { label: 'Miembros del equipo', href: '/sobre-nosotros#equipo' },
  { label: 'Solicitud', href: '/solicitud' },
]

// Opciones del selector de idioma (esquina superior derecha).
const IDIOMAS = [
  { id: 'es', label: 'Español', corto: 'ES' },
  { id: 'en', label: 'Inglés', corto: 'EN' },
  { id: 'qu', label: 'Quechua', corto: 'QU' },
]

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null) // submenú abierto
  const [mobileOpen, setMobileOpen] = useState(false) // menú hamburguesa
  const [langOpen, setLangOpen] = useState(false) // selector de idioma abierto
  const navRef = useRef(null)
  const { lang, setLang } = useLanguage()

  const idiomaActual = IDIOMAS.find((i) => i.id === lang) || IDIOMAS[0]

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
      <a href="/" className="nav__logo" aria-label="QPerú - inicio" onClick={closeAll}>
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
            aria-label={`Idioma: ${idiomaActual.label}`}
            onClick={() => setLangOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z" />
            </svg>
            <span className="nav__lang-code">{idiomaActual.corto}</span>
            <span className="nav__lang-caret" aria-hidden="true" />
          </button>

          <ul className="nav__lang-menu" role="listbox" aria-label="Elegir idioma">
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
                    <span>{idioma.label}</span>
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
      </div>

      <button
        className="nav__toggle"
        aria-label="Abrir menú"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`nav__menu ${mobileOpen ? 'is-open' : ''}`}
        aria-label="Navegación principal"
      >
        <ul className="nav__list">
          {MENU.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <li
                key={item.label}
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
                      {item.label}
                    </button>
                    <ul className="nav__dropdown">
                      {item.children.map((sub, j) => (
                        <li key={j}>
                          <a href={sub.href} onClick={closeAll}>
                            Subíndice {j + 1}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a href={item.href} className="nav__link" onClick={closeAll}>
                    {item.label}
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