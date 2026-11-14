import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  const bajar = () => {
    const siguiente = document.querySelector('#actividades') || document.querySelector('main > section:nth-of-type(2)')
    if (siguiente) siguiente.scrollIntoView({ behavior: 'smooth', block: 'start' })
    else window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="qhero" id="inicio">
      <div className="qhero-inner">

        <h1 className="qhero-title">
        <span className="qhero-line1"><span>Q</span>Peru</span>
        <span className="qhero-line2">2026</span>
        </h1>

        <p className="qhero-sub">
         {h.fecha}
        </p>

        
      </div>

      <button type="button" className="qhero-scroll" onClick={bajar} aria-label={h.bajar}>
        <span>{h.scroll}</span>
        <i aria-hidden="true" />
      </button>
    </section>
  )
}