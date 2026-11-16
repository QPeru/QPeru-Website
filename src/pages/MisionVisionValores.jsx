import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import ValoresEscalera from '../components/ValoresEscalera'
export default function MisionVisionValores() {
  const headRef = useReveal()
  const misionRef = useReveal()
  const visionRef = useReveal()
  const valoresRef = useReveal()
  const { t } = useLanguage()

  const s = t.sobreNosotros
  const { mvv, mision, vision, valores } = s

  return (
    <>
      {/* Cabecera */}
      <section className="section hero-blend">
        <div className="container reveal-group" ref={headRef}>
          <h1>{mvv.title}</h1>
          <p className="lede" style={{ maxWidth: '62ch', marginTop: '1.5rem' }}>
            {mvv.intro}
          </p>
        </div>
      </section>

      {/* 1. Misión */}
      <section className="section section-humo" id="mision">
        <div className="container split reveal-group" ref={misionRef}>
          <div>
            <h2>
              {mision.title1}
              <br />
              {mision.title2}
            </h2>
          </div>
          <div>
            <p className="lede">{mision.lede}</p>
            <p>{mision.texto}</p>
            <ul className="facts">
              {mision.facts.map((f) => (
                <li key={f.k}>
                  <span className="fact-k">{f.k}</span>
                  <span>{f.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Visión */}
      <section className="section section-humo" id="vision">
        <div className="container split reveal-group" ref={visionRef}>
          <div>
            <h2>
              {vision.title1}
              <br />
              {vision.title2}
            </h2>
          </div>
          <div>
            <p className="lede">{vision.lede}</p>
            <p>{vision.texto}</p>
          </div>
        </div>
      </section>

      {/* 3. Valores */}
      <section className="section section-humo" id="valores">
        <div className="container">
          <h2>{valores.title}</h2>

          <div className="reveal-group" ref={valoresRef}>
            <ValoresEscalera items={valores.items} />
          </div>
        </div>
      </section>
    </>
  )
}