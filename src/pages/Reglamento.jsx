import { useState } from 'react'
import { reglamento } from '../data/reglamento'

export default function Reglamento() {
  const [abierto, setAbierto] = useState(null)
  const alternar = (i) => setAbierto((actual) => (actual === i ? null : i))

  return (
    <>
      {/* Franja del título: fondo sólido, el video queda debajo */}
      <section className="reglamento-top">
        <div className="container">
          <p className="eyebrow">{reglamento.eyebrow}</p>
          <h2>{reglamento.title[0]} {reglamento.title[1]}</h2>
        </div>
      </section>

      {/* Tarjetas sobre el video */}
      <section className="section reglamento" id="reglamento">
        <div className="container">
          <ol className="reglas">
            {reglamento.items.map((regla, i) => {
              const open = abierto === i
              return (
                <li key={i}>
                  <span className="regla-n">{String(i + 1).padStart(2, '0')}</span>

                  <div className="regla-body">
                    <p>{regla.t}</p>

                    <button
                      type="button"
                      className="regla-btn"
                      onClick={() => alternar(i)}
                      aria-expanded={open}
                      aria-controls={`regla-mas-${i}`}
                    >
                      {open ? 'Ver menos' : 'Ver más'}
                    </button>

                    <div id={`regla-mas-${i}`} className={`regla-mas${open ? ' open' : ''}`}>
                      <div>
                        <p className="regla-mas-texto">{regla.mas}</p>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>
    </>
  )
}