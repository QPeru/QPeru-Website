import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../context/LanguageContext'
import logo from '../assets/LOGO2 FINAL.svg'

// Pon aquí las URLs reales. Si dejas una vacía, ese ícono no se muestra.
const SOCIAL = {
  linkedin: 'https://www.linkedin.com/company/qperu/posts/?feedView=all',
  instagram: 'https://www.instagram.com/qperu.pe/'
}

// Edita aquí los nombres y destinos del menú.
// path = página, hash = sección dentro de esa página (opcional).
// sub = pestañas que aparecen en la columna desplegable.
const MENU = [
  {
    label: 'Inicio',
    path: '/',
    sub: [
      { label: 'Portada', path: '/' },
      { label: 'Actividades', path: '/', hash: '#actividades' },
      { label: 'Cursos', path: '/', hash: '#cursos' }
    ]
  },
  {
    label: 'Sobre nosotros',
    path: '/sobre-nosotros',
    sub: [
      { label: 'Misión', path: '/sobre-nosotros' },
      { label: 'Equipo', path: '/sobre-nosotros', hash: '#equipo' },
      { label: 'Red global', path: '/sobre-nosotros', hash: '#red' }
    ]
  },
  {
    label: 'Actividades',
    path: '/',
    hash: '#actividades',
    sub: [
      { label: 'Talleres', path: '/', hash: '#actividades' },
      { label: 'Charlas', path: '/', hash: '#actividades' },
      { label: 'Actividades pasadas', path: '/', hash: '#actividades' }
    ]
  },
  {
    label: 'Cursos',
    path: '/',
    hash: '#cursos',
    sub: [
      { label: 'Todos los cursos', path: '/', hash: '#cursos' }
    ]
  },
  {
    label: 'Eventos',
    path: '/eventos',
    sub: [
      { label: 'Próximos eventos', path: '/eventos' },
      { label: 'Eventos anteriores', path: '/eventos', hash: '#anteriores' }
    ]
  },
  {
    label: 'Comunidad',
    path: '/',
    hash: '#comunidad',
    sub: [
      { label: 'Para quién es', path: '/', hash: '#comunidad' },
      { label: 'Contacto', path: '/contactanos' }
    ]
  }
]

const toHref = (item) => (item.hash ? `${item.path}${item.hash}` : item.path)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const navRef = useRef(null)
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // cierra menú móvil y columna al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false)
    setOpenMenu(null)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // cierra la columna al hacer clic fuera o pulsar Esc
  useEffect(() => {
    const onDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null)
    }
    const onKey = (e) => e.key === 'Escape' && setOpenMenu(null)
    document.addEventListener('mousedown', onDown)
    window.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  const isActive = (item) =>
    location.pathname === item.path && (item.hash ? location.hash === item.hash : !location.hash)

  const renderLink = (item) => (
    <Link
      key={item.label}
      to={toHref(item)}
      className={isActive(item) ? 'qnav-active' : undefined}
      aria-current={isActive(item) ? 'page' : undefined}
    >
      {item.label}
    </Link>
  )

  return (
    <header className={`qnav${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <div className="qnav-inner">
        {/* IZQUIERDA: logo + redes */}
        <div className="qnav-left">
          <Link className="qnav-logo" to="/" aria-label="QPerú - inicio">
            <img src={logo} alt="QPerú" />
          </Link>

          {SOCIAL.linkedin && (
            <a className="qnav-social" href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                 <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </a>
          )}

          {SOCIAL.instagram && (
            <a className="qnav-social" href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          )}
        </div>

        {/* CENTRO: menú con columna desplegable animada */}
        <nav className="qnav-links" aria-label="Navegación principal" ref={navRef}>
          {MENU.map((item) => {
            const open = openMenu === item.label
            return (
              <div
                className={`qnav-item${open ? ' open' : ''}`}
                key={item.label}
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  to={toHref(item)}
                  className={isActive(item) ? 'qnav-active' : undefined}
                  aria-haspopup={item.sub ? 'true' : undefined}
                  aria-expanded={item.sub ? open : undefined}
                  onClick={(e) => {
                    // en pantallas táctiles: el primer toque abre la columna
                    if (item.sub && !open) {
                      e.preventDefault()
                      setOpenMenu(item.label)
                    }
                  }}
                >
                  {item.label}
                </Link>

                {item.sub && (
                  <div className="qnav-sub" aria-hidden={!open}>
                    {item.sub.map((s, i) => (
                      <Link key={s.label} to={toHref(s)} style={{ '--i': i }} tabIndex={open ? 0 : -1}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* DERECHA: idioma + tema + CTA + hamburguesa */}
        <div className="qnav-right">
          <div className="qnav-lang" role="group" aria-label="Idioma / Language">
            <button
              type="button"
              className={lang === 'es' ? 'qnav-lang-btn on' : 'qnav-lang-btn'}
              onClick={() => setLang('es')}
            >
              ES
            </button>
          </div>

          <button type="button" className="qnav-theme" onClick={toggleTheme} aria-label={t.nav.themeToggle}>
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M12 4V2m0 20v-2M4 12H2m20 0h-2M5.6 5.6 4.2 4.2m15.6 15.6-1.4-1.4M5.6 18.4 4.2 19.8M18.4 5.6l1.4-1.4M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M20.7 14.8a8.5 8.5 0 0 1-11-11 8.5 8.5 0 1 0 11 11Z"/></svg>
            )}
          </button>


          <button
            type="button"
            className="qnav-burger"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              {menuOpen ? (
                <path fill="currentColor" d="M6.4 4.9 12 10.6l5.6-5.7 1.4 1.5-5.7 5.6 5.7 5.6-1.4 1.5-5.6-5.7-5.6 5.7-1.5-1.5 5.7-5.6-5.7-5.6z"/>
              ) : (
                <path fill="currentColor" d="M3 6h18v2H3zm6 5h12v2H9zm-6 5h18v2H3z"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Panel móvil */}
      {menuOpen && (
        <nav className="qnav-mobile" aria-label="Navegación móvil">
          {MENU.map((item) => (
            <div key={item.label} className="qnav-mobile-group">
              {renderLink(item)}
              {item.sub &&
                item.sub.map((s) => (
                  <Link key={s.label} to={toHref(s)} className="qnav-mobile-sub">
                    {s.label}
                  </Link>
                ))}
            </div>
          ))}
        </nav>
      )}
    </header>
  )
}