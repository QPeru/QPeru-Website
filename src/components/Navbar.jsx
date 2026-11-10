import { useState, useRef, useEffect } from 'react'
import logo from '../assets/LOGO2 FINAL.svg'
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
  { label: 'Membresía', href: '#' },
]

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null) // submenú abierto
  const [mobileOpen, setMobileOpen] = useState(false) // menú hamburguesa
  const navRef = useRef(null)

  // Cerrar submenú al hacer clic fuera o presionar Escape
  useEffect(() => {
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenIndex(null)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenIndex(null)
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

  return (
    <header className="nav" ref={navRef}>
      <a href="/" className="nav__logo" aria-label="QPerú - inicio" onClick={closeAll}>
        <img src={logo} alt="QPerú" />
      </a>

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