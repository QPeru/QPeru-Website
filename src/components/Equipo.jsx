import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import TeamGraph from './TeamGraph'
import fotoMaria from '../assets/team/maria-julia-pareja.webp'
import fotoRenzo from '../assets/team/renzo-cienfuegos.webp'
import fotoKelvin from '../assets/team/kelvin-cahuana.webp'
import fotoLuis from '../assets/team/luis-morales.webp'
import fotoDiego from '../assets/team/diego-valera.webp'
import fotoMarco from '../assets/team/marco-mayta.webp'

// Las claves deben coincidir con los ids de src/data/team.js
const fotos = {
  maria: fotoMaria,
  renzo: fotoRenzo,
  kelvin: fotoKelvin,
  diego: fotoDiego,
  luis: fotoLuis,
  marco: fotoMarco
}

export default function Equipo() {
  const revealRef = useReveal()
  const { t } = useLanguage()
  const eq = t.equipo

  return (
    <section className="section section-humo" id="equipo">
      <div className="container">
        <p className="eyebrow">{eq.eyebrow}</p>
        <h2>{eq.title}</h2>
        <p className="section-intro">{eq.intro}</p>

        <div className="reveal-group" ref={revealRef}>
          <TeamGraph fotos={fotos} />
        </div>
      </div>
    </section>
  )
}