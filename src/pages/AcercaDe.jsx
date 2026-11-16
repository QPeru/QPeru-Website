import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import logo from '../assets/LOGO2 FINAL nav.svg'

// Página interna del enlace "Acerca de" del navbar.
// Estructura: cabecera con el logo centrado y debajo
// 1) Descripción de QPerú 2) Visión 3) Misión.
// Visión y Misión se reutilizan desde t.sobreNosotros (misma fuente que
// la página /mision) para que el texto no se duplique ni desincronice.
export default function AcercaDe() {
  const headRef = useReveal()
  const descRef = useReveal()
  const visionRef = useReveal()
  const misionRef = useReveal()
  const { t } = useLanguage()

  const a = t.acercaDe
  const { vision, mision } = t.sobreNosotros

  return (
    <>
      {/* Cabecera: logo centrado y, debajo, el párrafo de presentación
          con la misma sangría que el cuerpo de la página.
          El h1 queda oculto visualmente: lo usan buscadores y lectores
          de pantalla para saber de qué trata la página. */}
      <section className="section hero-blend acerca-logo">
        <h1 className="solo-lectores">{t.nav.menu.acercaDe}</h1>
        <div className="container acerca-col reveal-group" ref={headRef}>
          <img className="acerca-logo__img" src={logo} alt="QPerú" />
          <p className="acerca-intro">{a.intro}</p>
        </div>
      </section>

      {/* 1. Descripción de QPerú */}
      <section className="section section-humo" id="descripcion">
        <div className="container acerca-col reveal-group" ref={descRef}>
          <h2>{a.descripcion.title}</h2>
          <p className="lede">{a.descripcion.lede}</p>
          {a.descripcion.parrafos.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* 2. Visión */}
      <section className="section section-humo" id="vision">
        <div className="container acerca-col reveal-group" ref={visionRef}>
          <h2>
            {vision.title1}
            <br />
            {vision.title2}
          </h2>
          <p className="lede">{vision.lede}</p>
          <p>{vision.texto}</p>
        </div>
      </section>

      {/* 3. Misión */}
      <section className="section section-humo" id="mision">
        <div className="container acerca-col reveal-group" ref={misionRef}>
          <h2>
            {mision.title1}
            <br />
            {mision.title2}
          </h2>
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
      </section>
    </>
  )
}
