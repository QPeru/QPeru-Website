import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import Equipo from '../components/Equipo'

export default function SobreNosotros() {
  const introRef = useReveal()
  const { t } = useLanguage()
  const s = t.sobreNosotros

  return (
    <>
      <section className="section hero-blend">
        <div className="container" ref={introRef}>
          <p className="eyebrow">{s.eyebrow}</p>
          <h1>{s.title}</h1>
          <p className="lede sobre-intro">{s.intro}</p>
        </div>
      </section>

      <Equipo />
    </>
  )
}