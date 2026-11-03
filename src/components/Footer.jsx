import { Link } from 'react-router-dom'
import logo from '../assets/LOGO2 FINAL.svg'

// Completa tus datos. Si dejas un campo vacío, esa parte no se muestra.
const INFO = {
  nombre: 'QPerú · Comunidad cuántica peruana',
  email: '',
  privacidad: '', // ruta o URL de tu política de privacidad
  youtube: '',
  instagram: ''
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="qfoot">
      <div className="qfoot-top">
        {/* IZQUIERDA: datos de contacto */}
        <div className="qfoot-info">
          <p className="qfoot-name">{INFO.nombre}</p>
          {INFO.email && (
            <p>
              <strong>Correo</strong>{' '}
              <a href={`mailto:${INFO.email}`}>{INFO.email}</a>
            </p>
          )}
          <p className="qfoot-copy">© {year} QPerú. Todos los derechos reservados.</p>
        </div>

        {/* DERECHA: logo + enlaces */}
        <div className="qfoot-side">
          <Link className="qfoot-logo" to="/" aria-label="QPerú - inicio">
            <img src={logo} alt="QPerú" />
          </Link>

          <div className="qfoot-links">
            {INFO.privacidad && (
              <Link className="qfoot-privacy" to={INFO.privacidad}>
                Política de privacidad
              </Link>
            )}

            {INFO.youtube && (
              <a className="qfoot-social" href={INFO.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
                </svg>
              </a>
            )}

            {INFO.instagram && (
              <a className="qfoot-social" href={INFO.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Nombre gigante tenue */}
      <div className="qfoot-bottom" aria-hidden="true">
        <span className="qfoot-mark">Quantum Peru 2026</span>
      </div>
    </footer>
  )
}