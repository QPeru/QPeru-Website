import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import imagenActividad1 from '../assets/charla-1/01.webp'
import imagenActividad2 from '../assets/charla-1/02.webp'
import imagenActividad3 from '../assets/charla-1/03.webp'
import imagenCSWeek from '../assets/cs-week/01.webp'
import { useEffect, useState } from 'react'

//const links = {
//  1: 'https://www.csweek2026.com/agenda',
//  2: 'https://www.csweek2026.com/agenda'
//}

const links = {
  1: 'https://luma.com/azxbqx8m',
  2: 'https://luma.com/tbi68knv'
}

const imagenesPasadas = {
  1: imagenActividad1,
  2: imagenActividad2,
  3: imagenActividad3,
  4: imagenCSWeek,
  5: imagenCSWeek
}

function ActivitySlideshow({ images, alt }) {
  const [current, setCurrent] = useState(0)

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
          className={`slideshow-image ${
            index === current ? 'active' : ''
          }`}
        />
      ))}

      <div className="slideshow-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === current ? 'active' : ''}
            onClick={() => setCurrent(index)}
            aria-label={`Ver imagen ${index + 1}`}
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

        <h3 className="activities-subtitulo">{a.subtituloPasadas}</h3>

        <div className="cards reveal-group" ref={pasadasRef}>

          {a.pasadas.map((item) => (
            <article className="card card-actividad-pasada" key={item.id}>

              {item.id === 1 ? (
                <ActivitySlideshow
                  images={[
                    imagenActividad1,
                    imagenActividad2,
                    imagenActividad3
                  ]}
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

            </article>
          ))}


          {/* CSWeek - Workshop 1 */}
          <article className="card card-actividad-pasada">

            <img
              src={imagenCSWeek}
              alt="CSWeek Perú 2026"
              className="activity-image"
            />

            <h3>
              Workshop: Q-Day - Are You Shor You're Ready?
            </h3>

            <p>
              Con Leonardo Cienfuegos. Una mirada a la amenaza cuántica para la
              criptografía actual y a cómo la industria se prepara mediante
              agilidad criptográfica, migración post-cuántica y casos reales.
            </p>

            <p>
              <strong>12:00 - 13:30</strong>
            </p>

            <a
              className="link-ext"
              href="https://luma.com/azxbqx8m"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver evento →
            </a>

          </article>


          {/* CSWeek - Workshop 2 */}
          <article className="card card-actividad-pasada">

            <img
              src={imagenCSWeek}
              alt="CSWeek Perú 2026"
              className="activity-image"
            />

            <h3>
              Workshop: Más allá del Hype - Realidades y Estrategias Híbridas para la Ventaja Cuántica
            </h3>

            <p>
              Con María Julia Pareja. IA + HPC + algoritmos cuánticos como QAOA,
              VQE y Annealing aplicados a logística, finanzas, farmacéutica y
              ciencia de materiales, con demos en vivo y retos reales.
            </p>

            <p>
              <strong>16:30 - 18:00</strong>
            </p>

            <a
              className="link-ext"
              href="https://luma.com/tbi68knv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver evento →
            </a>

          </article>

        </div>
        

<h3 className="activities-subtitulo activities-subtitulo-futuras">
  Actividades Futuras
</h3>

<div className="cards reveal-group" ref={futurasRef}>
  <article className="card" key="3">
    <h3>Qiskit Fall Fest 2026</h3>
    <p>
      Próximamente, en colaboración con IEEE Computer Society PUCP y la
      Sociedad de Físicos de la PUCP.
    </p>
  </article>
</div>
    </div>
    </section>
  )
}