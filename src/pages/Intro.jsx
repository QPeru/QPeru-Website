import { Link } from 'react-router-dom'

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro-inner">
        <h2 className="intro-title">QPeru 2026</h2>

        <div className="intro-text">
          <p>
            Un año clave para la ciencia y la tecnología cuántica. QPerú reúne a
            estudiantes, profesionales y comunidades para explorar el futuro de
            la computación cuántica desde el Perú.
          </p>
          <Link to="/actividades" className="intro-btn">Ver más</Link>
        </div>
      </div>
    </section>
  )
}