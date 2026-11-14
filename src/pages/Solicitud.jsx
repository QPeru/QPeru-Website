import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useReveal } from '../hooks/useReveal'
import { comunidadLinks, FORM_URL } from '../data/socialLinks'
import waQr from '../assets/wa-qr.webp'

// Color del nivel "Participantes" (el mismo de Miembrosequipo.jsx)
const COLOR_PART = '#8b4dff'

export default function Solicitud() {
  const revealRef = useReveal()
  const { t } = useLanguage()
  const s = t.solicitud
  const co = t.contacto

  // Cada toque en el oso avanza al siguiente mensaje de la burbuja
  const mensajes = s.burbujas
  const [paso, setPaso] = useState(0)
  const i = paso % mensajes.length // por si cambia el idioma
  const cambiarMensaje = () => setPaso((v) => v + 1)
  const alTeclear = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      cambiarMensaje()
    }
  }

  const whatsapp = comunidadLinks.find((l) => l.id === 'whatsapp')
  const discord = comunidadLinks.find((l) => l.id === 'discord')

  return (
    <section className="section section-humo" id="solicitud">
      <div className="container">
        <div className="split sol-grid reveal-group" ref={revealRef}>
          {/* Izquierda: mascota de QPerú (public/oso.png) con burbuja */}
          <div className="sol-mascota">
            <img
              className="sol-mascota-img"
              src="/oso.png"
              alt={s.altMascota}
              role="button"
              tabIndex={0}
              aria-label={s.cambiarMensaje}
              title={s.cambiarMensaje}
              onClick={cambiarMensaje}
              onKeyDown={alTeclear}
            />
            {/* key vuelve a montar la burbuja: repite la animación de entrada */}
            <p
              className="sol-burbuja"
              key={i}
              style={paso > 0 ? { animationDelay: '0s' } : undefined}
            >
              {mensajes[i]}
            </p>
          </div>

          {/* Derecha: título, barra, tarjetas de la comunidad y botón al form */}
          <div className="sol-part" style={{ '--nivel': COLOR_PART }}>
            <h2>{s.title}</h2>
            <span className="sol-bar" aria-hidden="true" />

            {/* WhatsApp + Discord (antes estaban en /contactanos) */}
            <div className="sol-cards">
              <a className="contacto-card" href={whatsapp.href} target="_blank" rel="noopener noreferrer">
                <img className="contacto-qr" src={waQr} alt={co.whatsappTitulo} width="120" height="120" />
                <div className="contacto-card-texto">
                  <h3>{co.whatsappTitulo}</h3>
                  <p>{t.unete.qrSub}</p>
                </div>
              </a>

              <a className="contacto-card" href={discord.href} target="_blank" rel="noopener noreferrer">
                <span className="contacto-icon">
                  <svg viewBox="0 0 24 24" width="44" height="44" aria-hidden="true"><path d={discord.path} fill="currentColor" /></svg>
                </span>
                <div className="contacto-card-texto">
                  <h3>{co.discordTitulo}</h3>
                  <p>{co.discordSub}</p>
                </div>
              </a>
            </div>

            {/* Botón píldora: abre el formulario de inscripción */}
            <a
              className="sol-btn"
              href={FORM_URL || undefined}
              target={FORM_URL ? '_blank' : undefined}
              rel={FORM_URL ? 'noopener noreferrer' : undefined}
            >
              {s.unete}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
