import { useLanguage } from '../context/LanguageContext'

export default function Intro() {
  const { t } = useLanguage()
  const i = t.intro

  return (
    <section className="intro">
      <div className="intro-inner">
        <div className="intro-left">
          <img className="intro-mascota" src="/mascota.png" alt={i.altMascota} />
          <h2 className="intro-title">{i.titulo}</h2>
        </div>

        <div className="intro-text">
          <p>{i.texto}</p>
          <a href="#actividades" className="intro-btn">{i.cta}</a>
        </div>
      </div>
    </section>
  );
}
