import { useReveal } from '../hooks/useReveal'

export default function Contacto() {
  const revealRef = useReveal()

  const contactos = [
    {
      id: 1,
      title: 'Email',
      contact: 'info@qperu.net',
      link: 'mailto:info@qperu.net',
      description: 'Para preguntas, propuestas o colaboraciones.'
    },
    {
      id: 2,
      title: 'Redes Sociales',
      contact: '@QPeru',
      link: '#',
      description: 'Síguenos para actualizaciones y noticias.'
    }
  ]

  return (
    <section className="section section-humo" id="contacto">
      <div className="container">
        <p className="eyebrow">|contacto⟩</p>
        <h2>Mantengamos contacto</h2>
        <div className="contacto-grid" ref={revealRef}>
          {contactos.map((contacto) => (
            <div className="contacto-card" key={contacto.id}>
              <h3>{contacto.title}</h3>
              <p><a href={contacto.link}>{contacto.contact}</a></p>
              <p className="contacto-desc">{contacto.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
