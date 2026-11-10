import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { socialLinks, comunidadLinks } from '../data/socialLinks'
import waQr from '../assets/wa-qr.webp'

export default function Contactanos() {
  const comunidadRef = useReveal()
  const socialRef = useReveal()
  const { t } = useLanguage()
  const co = t.contacto

  const whatsapp = comunidadLinks.find((l) => l.id === 'whatsapp')
  const discord = comunidadLinks.find((l) => l.id === 'discord')

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">{co.eyebrow}</p>
        <h1>{co.title}</h1>
        <p className="lede" style={{ maxWidth: '62ch', marginTop: '1.5rem', marginBottom: '2.5rem' }}>{co.intro}</p>

        <div className="contacto-comunidad reveal-group" ref={comunidadRef}>
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

        <h3 className="activities-subtitulo">{co.redesSociales}</h3>
        <div className="comunidad-links reveal-group" ref={socialRef}>
          {socialLinks.map((link) => (
            <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer" className="comunidad-link">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d={link.path} fill="currentColor" /></svg>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
