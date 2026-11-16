import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import { nacionales, internacionales } from '../data/colaboraciones'

// Tarjeta de una colaboración: foto (o la inicial si todavía no hay foto),
// nombre y tipo. Si el item trae href, la tarjeta entera es un enlace.
function Tarjeta({ item }) {
  const [falla, setFalla] = useState(false)
  const esEnlace = Boolean(item.href)

  const contenido = (
    <>
      <span className="colab-card__foto">
        {item.foto && !falla ? (
          <img src={item.foto} alt={item.nombre} onError={() => setFalla(true)} />
        ) : (
          <span aria-hidden="true">{item.nombre.slice(0, 1).toUpperCase()}</span>
        )}
      </span>
      <span className="colab-card__texto">
        <strong>{item.nombre}</strong>
        {item.tipo && <small>{item.tipo}</small>}
      </span>
    </>
  )

  if (esEnlace) {
    return (
      <a
        className="colab-card"
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {contenido}
      </a>
    )
  }

  return <div className="colab-card">{contenido}</div>
}

// Bloque "Nacionales" o "Internacionales": título + rejilla de tarjetas.
// Con la lista vacía solo se ve el título (estado actual: las fotos y los
// nombres se cargan después en src/data/colaboraciones.js).
function Bloque({ titulo, items }) {
  return (
    <div className="colab-bloque">
      <h3>{titulo}</h3>
      {items.length > 0 && (
        <div className="colab-grid">
          {items.map((item) => (
            <Tarjeta key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Colaboraciones() {
  const ref = useReveal()
  const { t } = useLanguage()
  const c = t.colaboraciones

  return (
    <section className="section section-humo" id="colaboraciones">
      <div className="container acerca-col reveal-group" ref={ref}>
        <h2>{c.title}</h2>
        {c.texto && <p className="lede">{c.texto}</p>}

        <div className="colab-bloques">
          <Bloque titulo={c.nacionales} items={nacionales} />
          <Bloque titulo={c.internacionales} items={internacionales} />
        </div>
      </div>
    </section>
  )
}
