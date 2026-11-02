import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../context/LanguageContext'
import logo from '../assets/LOGO2 FINAL.svg'

// Pon aquí las URLs reales. Si dejas una vacía, ese ícono no se muestra.
const SOCIAL = {
  youtube: '',
  instagram: ''
}

// Edita aquí los nombres y destinos del menú.
// path = página, hash = sección dentro de esa página (opcional).
const MENU = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre nosotros', path: '/sobre-nosotros' },
  { label: 'Actividades', path: '/', hash: '#actividades' },
  { label: 'Cursos', path: '/', hash: '#cursos' },
  { label: 'Eventos', path: '/eventos' },
  { label: 'Comunidad', path: '/', hash: '#comunidad' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const isActive = (item) =>
    location.pathname === item.path && (item.hash ? location.hash === item.hash : !location.hash)

  const renderItem = (item) => (
    <Link
      key={item.label}
      to={item.hash ? `${item.path}${item.hash}` : item.path}
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

          {SOCIAL.youtube && (
            <a className="qnav-social" href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
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

        {/* CENTRO: menú */}
        <nav className="qnav-links" aria-label="Navegación principal">
          {MENU.map(renderItem)}
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

          <Link className="qnav-cta" to="/contactanos">{t.nav.unete}</Link>

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
          {MENU.map(renderItem)}
          <Link className="qnav-cta" to="/contactanos">{t.nav.unete}</Link>
        </nav>
      )}
    </header>
  )
}