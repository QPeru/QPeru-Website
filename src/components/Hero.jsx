import { Link } from 'react-router-dom'

export default function Hero() {
  const bajar = () => {
    const siguiente = document.querySelector('#actividades') || document.querySelector('main > section:nth-of-type(2)')
    if (siguiente) siguiente.scrollIntoView({ behavior: 'smooth', block: 'start' })
    else window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="qhero" id="inicio">
      <div className="qhero-inner">
        <p className="qhero-kicker">Comunidad cuántica peruana</p>

        <h1 className="qhero-title">
          Democratizamos la computación <span>cuántica</span> en el Perú.
        </h1>

        <p className="qhero-sub">
          Una comunidad abierta que acerca la cuántica a estudiantes,
          profesionales y comunidades de todo el país con talleres, eventos,
          recursos y colaboración global.
        </p>

        <div className="qhero-actions">
          <Link to="/contactanos" className="qhero-btn qhero-btn-primary">
            Únete a la comunidad
          </Link>
          <Link to="/sobre-nosotros" className="qhero-btn qhero-btn-ghost">
            Conoce más
          </Link>
        </div>
      </div>

      <button type="button" className="qhero-scroll" onClick={bajar} aria-label="Bajar a la siguiente sección">
        <span>Scroll down</span>
        <i aria-hidden="true" />
      </button>
    </section>
  )
}