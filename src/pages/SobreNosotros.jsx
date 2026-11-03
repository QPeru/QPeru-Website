import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import Equipo from '../components/Equipo'

// NOTA: el párrafo de introducción, "Visión" y "Nuestros valores" son copy
// preliminar (placeholder) pendiente de reemplazo con el texto real de los
// slides 10-13 del Canva de referencia (no accesible por el agente, 403).
export default function SobreNosotros() {
  const introRef = useReveal()
  const visionRef = useReveal()
  const valoresRef = useReveal()
  const { t } = useLanguage()
  const s = t.sobreNosotros

  return (
    <>
      <section className="section hero-blend">
        <div className="container" ref={introRef}>
          <p className="eyebrow">{s.eyebrow}</p>
          <h1>{s.title}</h1>
          <p className="lede" style={{ maxWidth: '62ch', marginTop: '1.5rem' }}>{s.intro}</p>
        </div>
      </section>

      <section className="section section-humo" id="vision">
        <div className="container split" ref={visionRef}>
          <div>
            <p className="eyebrow">{s.vision.eyebrow}</p>
            <h2>{s.vision.title1}<br/>{s.vision.title2}</h2>
          </div>
          <div>
            <p className="lede">{s.vision.lede}</p>
            <p>{s.vision.texto}</p>
          </div>
        </div>
      </section>

      <Equipo />
    </>
  )
}