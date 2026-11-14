import MiembrosEquipo from '../components/Miembrosequipo'
import { fotos } from '../data/fotos'
import { useLanguage } from '../context/LanguageContext'

export default function Organizacion() {
  const { t } = useLanguage()

  return (
    <section className="section">
      <div className="container">
        <h1>{t.sobreNosotros.title}</h1>
        <MiembrosEquipo fotos={fotos} />
      </div>
    </section>
  )
}