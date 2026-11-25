import { useLanguage } from '../context/LanguageContext'

// Página "Organización": por ahora solo el encabezado — el título sobre
// el video con el fundido negro (hero-blend), sin subtítulo y sin la
// lista de equipo. El equipo completo vive en /sobre-nosotros#equipo
// (componente Equipo), que es a donde apunta el navbar.
export default function Organizacion() {
  const { t } = useLanguage()

  return (
    <section className="section hero-blend">
      <div className="container">
        <h1>{t.sobreNosotros.title}</h1>
      </div>
    </section>
  )
}
