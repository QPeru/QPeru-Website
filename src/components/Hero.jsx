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

        <h1 className="qhero-title">
          Quantum <span>Peru</span> 2026
        </h1>

        <p className="qhero-sub">
         Fecha
        </p>

        
      </div>

      <button type="button" className="qhero-scroll" onClick={bajar} aria-label="Bajar a la siguiente sección">
        <span>Scroll down</span>
        <i aria-hidden="true" />
      </button>
    </section>
  )
}