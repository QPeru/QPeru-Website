import './ValoresEscalera.css'

// Escalera de valores: cada escalón sube y se desplaza a la derecha;
// el último termina en flecha dorada. Funciona con cualquier cantidad de items.
export default function ValoresEscalera({ items }) {
  const n = items.length
  const ancho = 219 * (n - 1) + 347 // unidades de diseño
  const alto = 46 * (n - 1) + 189

  return (
    <div className="stairs">
      <div className="stairs__track" style={{ '--n': n, '--d': ancho, '--h': alto }}>
        {items.map((v, i) => {
          const ultimo = i === n - 1
          const tono = ultimo ? 'stair--oro' : i % 2 === 0 ? 'stair--rojo' : 'stair--gris'
          return (
            <article
              key={v.id}
              className={`stair ${tono}${ultimo ? ' stair--last' : ''}`}
              style={{ '--i': i, zIndex: i + 1 }}
            >
              <h3>{v.title}</h3>
              <p>{v.description}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}