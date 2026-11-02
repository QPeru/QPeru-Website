import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import fotoMaria from '../assets/team/maria-julia-pareja.webp'
import fotoRenzo from '../assets/team/renzo-cienfuegos.webp'
import fotoKelvin from '../assets/team/kelvin-cahuana.webp'
import fotoLuis from '../assets/team/luis-morales.webp'
import fotoDiego from '../assets/team/diego-valera.webp'
import fotoMarco from '../assets/team/marco-mayta.webp'

const fotos = {
  maria: fotoMaria,
  renzo: fotoRenzo,
  kelvin: fotoKelvin,
  diego: fotoDiego,
  luis: fotoLuis,
  marco: fotoMarco
}

const base = [
  { id: 1, key: 'maria', name: 'María Julia Pareja Abarca', universidad: 'UCSM' },
  { id: 2, key: 'renzo', name: 'Renzo Leonardo Cienfuegos Cardenas', universidad: 'UNMSM' },
  { id: 3, key: 'kelvin', name: 'Kelvin Andrei Cahuana Condori', universidad: 'UTEC' },
  { id: 4, key: 'isabel', name: 'Rocio Isabel Dávila Elías', universidad: 'USIL' },
  { id: 5, key: 'diego', name: 'Diego Alejandro Valera Contreras', universidad: 'UFPE' },
  { id: 6, key: 'marco', name: 'Marco Fidel Mayta Quispe', universidad: 'CMC-USP' },
  { id: 7, key: 'luis', name: 'Luis Fernando Morales Rojas', universidad: 'UAM' }
]

export default function Equipo() {
  const revealRef = useReveal()
  const { t } = useLanguage()
  const eq = t.equipo

  const equipo = base.map((m) => ({
    ...m,
    foto: fotos[m.key],
    role: ['maria', 'renzo', 'kelvin'].includes(m.key)
      ? (m.key === 'maria' ? eq.roleFundadora : eq.roleFundador)
      : eq.roleMiembro,
    bio: ''
  }))

  return (
    <section className="section section-humo" id="equipo">
      <div className="container">
        <p className="eyebrow">{eq.eyebrow}</p>
        <h2>{eq.title}</h2>
        <p className="section-intro">{eq.intro}</p>

        <div className="team-grid reveal-group" ref={revealRef}>
          {equipo.map((member) => (
            <div
              className={member.foto ? 'team-card' : 'team-card team-card-sin-foto'}
              key={member.id}
            >
              {member.foto ? (
                <div className="team-avatar team-avatar-foto">
                  <img src={member.foto} alt={member.name} />
                </div>
              ) : (
                <div className="team-avatar team-avatar-foto" style={{ color: '#000' }}>
                  <svg
                    viewBox="0 0 24 24"
                    width="45%"
                    height="45%"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                  </svg>
                </div>
              )}

              <h3>{member.name}</h3>
              <p className="team-uni">{member.universidad}</p>
              <p className="team-role">{member.role}</p>

              {member.bio && <p className="team-bio">{member.bio}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}