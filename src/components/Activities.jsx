import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import imagenActividad1 from '../assets/charla-1/01.jpg'
import imagenActividad2 from '../assets/charla-1/02.webp'
import imagenActividad3 from '../assets/charla-1/03.webp'
import imagenCSWeek from '../assets/cs-week/01.webp'

function ActivitySlideshow({ images, alt }) {
  const [current, setCurrent] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="activity-slideshow">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={alt}
          className={`slideshow-image ${index === current ? 'active' : ''}`}
        />
      ))}

      <div className="slideshow-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === current ? 'active' : ''}
            onClick={() => setCurrent(index)}
            aria-label={`${t.activities.verImagen} ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// --------------------------------------------------------

export default function Activities() {
  const pasadasRef = useReveal()
  const futurasRef = useReveal()
  const { t } = useLanguage()
  const a = t.activities

  return (
    <section className="section section-humo" id="actividades">
      <div className="container">
        <p className="eyebrow">{a.eyebrow}</p>
        <h2>{a.title}</h2>

        {/* ANCLA: Actividades pasadas */}
        <h3 id="pasadas" className="activities-subtitulo">
          {a.subtituloPasadas}
        </h3>

        <div className="cards reveal-group" ref={pasadasRef}>
          {a.pasadas.map((item) => (
            <article className="card card-actividad-pasada" key={item.id}>
              {item.id === 1 ? (
                <ActivitySlideshow
                  images={[imagenActividad1, imagenActividad2, imagenActividad3]}
                  alt={item.title}
                />
              ) : (
                <img
                  src={imagenCSWeek}
                  alt={item.title}
                  className="activity-image"
                />
              )}

              <h3>{item.title}</h3>
              <p>{item.description}</p>

              {item.horario && (
                <p>
                  <strong>{item.horario}</strong>
                </p>
              )}

              {item.href && (
                <a
                  className="link-ext"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.cta}
                </a>
              )}
            </article>
          ))}
        </div>

        {/* ANCLA: Actividades futuras */}
        <h3
          id="futuras"
          className="activities-subtitulo activities-subtitulo-futuras"
        >
          {a.subtituloFuturas}
        </h3>

        <div className="cards reveal-group" ref={futurasRef}>
          {a.futuras.slice(-1).map((item) => (
            <article className="card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}