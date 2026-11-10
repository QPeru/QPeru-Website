import MiembrosEquipo from '../components/Miembrosequipo'
import { fotos } from '../data/fotos'

export default function Organizacion() {
  return (
    <section className="section">
      <div className="container">
        <h1>Organización</h1>
        <MiembrosEquipo fotos={fotos} />
      </div>
    </section>
  )
}