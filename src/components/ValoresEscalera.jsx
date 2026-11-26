import { useState } from 'react'
import './ValoresEscalera.css'

// Escalera de valores: cada escalón sube y se desplaza a la derecha;
// el último termina en flecha dorada. Funciona con cualquier cantidad de items.
//
// Diseño futurista (paneles HUD) con interacción para el público:
//   · hover / foco de teclado: el escalón se eleva, brilla y le cruza un "scan".
//   · clic o Enter/Espacio: fija el escalón (is-active) y atenúa los demás.
//   · Escape suelta el seleccionado.
// Los colores de cada escalón no cambian (rojo / gris / oro).
export default function ValoresEscalera({ items }) {
  const n = items.length
  const ancho = 219 * (n - 1) + 347 // unidades de diseño
  const alto = 46 * (n - 1) + 189
  const [activa, setActiva] = useState(null)

  const alternar = (id) => setActiva((a) => (a === id ? null : id))

  const alTeclear = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      alternar(id)
    } else if (e.key === 'Escape') {
      setActiva(null)
    }
  }

  return (
    <div className="stairs">
      <div
        className={`stairs__track${activa ? ' has-active' : ''}`}
        style={{ '--n': n, '--d': ancho, '--h': alto }}
      >
        {items.map((v, i) => {
          const ultimo = i === n - 1
          const tono = ultimo ? 'stair--oro' : i % 2 === 0 ? 'stair--rojo' : 'stair--gris'
          const act = activa === v.id
          return (
            <article
              key={v.id}
              className={`stair ${tono}${ultimo ? ' stair--last' : ''}${act ? ' is-active' : ''}`}
              style={{ '--i': i }}
              role="button"
              tabIndex={0}
              aria-pressed={act}
              onClick={() => alternar(v.id)}
              onKeyDown={(e) => alTeclear(e, v.id)}
            >
              {/* número de orden, estilo HUD */}
              <span className="stair__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              {/* barrido de escaneo al pasar el cursor / al activarlo */}
              <span className="stair__scan" aria-hidden="true" />
              <h3>{v.title}</h3>
              <p>{v.description}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}
