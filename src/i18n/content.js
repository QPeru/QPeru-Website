// Diccionario de contenido ES/EN. Nombres propios, universidades y enlaces no
// se traducen. El selector de idioma en el navbar cambia `lang` vía contexto.
export const content = {
  es: {
    nav: {
      tabs: { inicio: 'Inicio', sobreNosotros: 'Sobre nosotros', eventos: 'Eventos' },
      unete: 'Contáctanos',
      themeToggle: 'Cambiar tema claro/oscuro'
    },
    hero: {
      eyebrow: 'Comunidad cuántica peruana',
      title1: 'Democratizamos la computación ',
      titleRojo: 'cuántica',
      title2: ' en el Perú.',
      sub: 'Una comunidad abierta que acerca la cuántica a estudiantes, profesionales y comunidades de todo el país con talleres, eventos, recursos y colaboración global.',
      ctaUnete: 'Únete a la comunidad',
      ctaConoce: 'Conoce más'
    },
    activities: {
      eyebrow: '|actividades⟩',
      title: 'Actividades',
      subtituloPasadas: 'Actividades pasadas',
      subtituloFuturas: 'Actividades futuras',
      imgPendiente: 'Imagen pendiente',
      pasadas: [
        {
          id: 1,
          title: 'Charla de computación cuántica en UCSM, Arequipa',
          description: 'Primera charla presencial de QPerú, en la Universidad Católica de Santa María. Introducción a los principios de la computación cuántica y a la comunidad para estudiantes de Arequipa.'
        }
      ],
      futuras: [
        {
          id: 1,
          title: 'Charla en la CSWeek - Leo',
          description: 'Sábado 15, tema por confirmar.',
          linkLabel: 'Ver agenda de CSWeek 2026'
        },
        {
          id: 2,
          title: 'Charla en la CSWeek - Maju',
          description: 'Sábado 15, tema por confirmar.',
          linkLabel: 'Ver agenda de CSWeek 2026'
        },
        {
          id: 3,
          title: 'Qiskit Fall Fest',
          description: 'Próximamente, en colaboración con IEEE Computer Society PUCP y la Sociedad de Físicos de la PUCP.'
        }
      ]
    },
    cursos: {
      eyebrow: '|cursos⟩',
      title: 'Formación en computación cuántica',
      estado: 'Próximamente',
      texto: 'Estamos diseñando nuestros primeros cursos de computación cuántica. Únete a la comunidad para enterarte apenas se abran las inscripciones.'
    },
    comunidad: {
      eyebrow: '|comunidad⟩',
      title: 'Hecha para el ecosistema peruano',
      audiencias: [
        { id: 1, title: 'Estudiantes', description: 'Universitarios que quieren ir más allá del sílabo y explorar lo que viene.' },
        { id: 2, title: 'Profesionales', description: 'De tecnología, ciencia, seguridad y más, que necesitan entender el impacto real de la cuántica.' },
        { id: 3, title: 'Comunidades', description: 'Clubes, grupos técnicos y organizaciones que quieren llevar la cuántica a su gente.' }
      ],
      idiomasTitulo: 'La divulgación también es una decisión de idioma:',
      chipEs: 'ES · Español',
      chipEn: 'EN · English',
      chipQu: 'QU · Quechua - en camino'
    },
    contacto: {
      eyebrow: '|contáctanos⟩',
      title: 'Contáctanos',
      intro: 'Encuéntranos en nuestras redes sociales o únete directo a la comunidad.',
      whatsappTitulo: 'WhatsApp',
      discordTitulo: 'Discord',
      discordSub: 'Servidor de la comunidad',
      redesSociales: 'Redes sociales'
    },
    recursos: {
      eyebrow: '|recursos⟩',
      title: 'Recursos gratuitos',
      intro: 'Acceso a materiales, tutoriales y herramientas para aprender computación cuántica.',
      items: [
        { id: 1, icon: '📚', title: 'Documentación', description: 'Guías y referencias completas sobre computación cuántica y Qiskit.' },
        { id: 2, icon: '🎥', title: 'Video Tutoriales', description: 'Serie de vídeos educativos en español sobre fundamentos cuánticos.' },
        { id: 3, icon: '💻', title: 'Repositorio GitHub', description: 'Código, ejercicios y proyectos disponibles para descargar y aprender.' },
        { id: 4, icon: '🔗', title: 'Enlaces Útiles', description: 'Herramientas online, simuladores y plataformas para experimentar.' },
        { id: 5, icon: '🔐', title: 'Quantum CyberSec Community', description: 'Canal de WhatsApp sobre criptografía y ciberseguridad cuántica.' },
        { id: 6, icon: '🌐', title: 'QWorld', description: 'Recursos y cursos abiertos de la red educativa global QWorld.' },
        { id: 7, icon: '🖥️', title: 'IBM Quantum Learning', description: 'Plataforma oficial de IBM para aprender computación cuántica y Qiskit.' }
      ]
    },
    unete: {
      titulo: 'Únete a la comunidad de QPerú',
      texto: 'Sigue de más cerca las actualizaciones, talleres, charlas y todo lo que viene en nuestra comunidad. Escanea el QR o toca para unirte al grupo de WhatsApp.',
      qrTitulo: 'QPerú · Init',
      qrSub: 'Grupo de WhatsApp'
    },
    sobreNosotros: {
      eyebrow: '|sobre-nosotros⟩',
      title: 'Quiénes somos',
      intro: 'QPerú nació para acercar la computación cuántica al Perú: una comunidad abierta que organiza talleres, charlas y espacios de estudio para estudiantes, profesionales y curiosos de todo el país.',
      mision: {
        eyebrow: '|misión⟩',
        title1: 'Divulgar y',
        title2: 'democratizar.',
        lede: 'Nuestra misión es divulgar y democratizar la computación cuántica en el Perú a través de talleres, charlas y una comunidad activa.',
        texto: 'Creemos que la cuántica no es un tema reservado a unos pocos laboratorios: es una tecnología que el país necesita entender, discutir y construir. Por eso todas nuestras actividades ponen el énfasis en la participación activa. Aquí nadie viene solo a mirar.',
        facts: [
          { k: 'Abierta', v: 'Actividades accesibles para todo el ecosistema' },
          { k: 'Local', v: 'Enfocada en el ecosistema peruano' },
          { k: 'Trilingüe', v: 'Español · English · Quechua en camino' }
        ]
      },
      vision: {
        eyebrow: '|visión⟩',
        title1: 'Hacia dónde',
        title2: 'vamos.',
        lede: 'Ser la comunidad de referencia en computación cuántica del Perú.',
        texto: 'Buscamos formar una nueva generación de talento peruano capaz de participar como estudiantes, investigadores o profesionales en la segunda revolución cuántica, dentro y fuera del país.'
      },
      valores: {
        eyebrow: '|valores⟩',
        title: 'Nuestros valores',
        items: [
          { id: 1, title: 'Apertura', description: 'Todo el conocimiento que generamos es accesible: sin costo, sin requisitos previos rígidos.' },
          { id: 2, title: 'Colaboración', description: 'Construimos junto a universidades, comunidades técnicas y voluntariado activo, no en solitario.' },
          { id: 3, title: 'Rigor', description: 'Divulgamos con precisión: explicamos qué es real, y qué no, en la cuántica de hoy.' },
          { id: 4, title: 'Impacto local', description: 'Priorizamos que el conocimiento cuántico eche raíces en el ecosistema peruano.' }
        ]
      }
    },
    equipo: {
      eyebrow: '|equipo⟩',
      title: 'Nuestro equipo',
      intro: 'Profesionales y entusiastas dedicados a democratizar la computación cuántica en el Perú.',
      roleFundadora: 'Fundadora',
      roleFundador: 'Fundador',
      roleMiembro: 'Miembro del equipo',
      bioMaria: 'Apasionada por democratizar la computación cuántica y crear oportunidades en educación tecnológica para el Perú. Lidera la visión y las alianzas de QPerú.',
      bioRenzo: 'Experto en computación cuántica comprometido con impulsar innovación en el Perú. Diseña el contenido técnico de talleres y charlas.'
    },
    eventos: {
      eyebrow: '|agenda⟩',
      title: 'Próximas actividades',
      estado: 'Calendario 2026 en preparación',
      texto: 'Los primeros talleres y charlas se anunciarán pronto. Únete a la comunidad y sé de las primeras personas en enterarte.',
      cta: 'Avísame primero'
    },
    footer: {
      copy: '© 2026 QPeru. Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      tabs: { inicio: 'Home', sobreNosotros: 'About us', eventos: 'Events' },
      unete: 'Contact us',
      themeToggle: 'Toggle light/dark theme'
    },
    hero: {
      eyebrow: 'Peruvian quantum community',
      title1: 'We are democratizing ',
      titleRojo: 'quantum computing',
      title2: ' in Peru.',
      sub: 'An open community bringing quantum computing to students, professionals and communities across the country - through workshops, events, resources and global collaboration.',
      ctaUnete: 'Join the community',
      ctaConoce: 'Learn more'
    },
    activities: {
      eyebrow: '|activities⟩',
      title: 'Activities',
      subtituloPasadas: 'Past activities',
      subtituloFuturas: 'Upcoming activities',
      imgPendiente: 'Image pending',
      pasadas: [
        {
          id: 1,
          title: 'Quantum computing talk at UCSM, Arequipa',
          description: "QPerú's first in-person talk, held at Universidad Católica de Santa María. An introduction to quantum computing principles and our community for students in Arequipa."
        }
      ],
      futuras: [
        {
          id: 1,
          title: 'CSWeek talk - Leo',
          description: 'Saturday 15, topic to be confirmed.',
          linkLabel: 'See CSWeek 2026 agenda'
        },
        {
          id: 2,
          title: 'CSWeek talk - Maju',
          description: 'Saturday 15, topic to be confirmed.',
          linkLabel: 'See CSWeek 2026 agenda'
        },
        {
          id: 3,
          title: 'Qiskit Fall Fest',
          description: 'Coming soon, in collaboration with IEEE Computer Society PUCP and the PUCP Physics Society.'
        }
      ]
    },
    cursos: {
      eyebrow: '|courses⟩',
      title: 'Quantum computing courses',
      estado: 'Coming soon',
      texto: "We're designing our first quantum computing courses. Join the community to find out as soon as enrollment opens."
    },
    comunidad: {
      eyebrow: '|community⟩',
      title: 'Built for the Peruvian ecosystem',
      audiencias: [
        { id: 1, title: 'Students', description: 'University students who want to go beyond the syllabus and explore what comes next.' },
        { id: 2, title: 'Professionals', description: 'From tech, science, security and beyond, who need to understand the real impact of quantum computing.' },
        { id: 3, title: 'Communities', description: 'Clubs, tech groups and organizations that want to bring quantum computing to their people.' }
      ],
      idiomasTitulo: 'Outreach is also a language decision:',
      chipEs: 'ES · Spanish',
      chipEn: 'EN · English',
      chipQu: 'QU · Quechua - coming soon'
    },
    contacto: {
      eyebrow: '|contact-us⟩',
      title: 'Contact us',
      intro: 'Find us on our social networks or join the community directly.',
      whatsappTitulo: 'WhatsApp',
      discordTitulo: 'Discord',
      discordSub: 'Community server',
      redesSociales: 'Social media'
    },
    recursos: {
      eyebrow: '|resources⟩',
      title: 'Free resources',
      intro: 'Access to materials, tutorials and tools to learn quantum computing.',
      items: [
        { id: 1, icon: '📚', title: 'Documentation', description: 'Complete guides and references on quantum computing and Qiskit.' },
        { id: 2, icon: '🎥', title: 'Video Tutorials', description: 'A series of educational videos on quantum fundamentals.' },
        { id: 3, icon: '💻', title: 'GitHub Repository', description: 'Code, exercises and projects available to download and learn from.' },
        { id: 4, icon: '🔗', title: 'Useful Links', description: 'Online tools, simulators and platforms to experiment with.' },
        { id: 5, icon: '🔐', title: 'Quantum CyberSec Community', description: 'WhatsApp channel about cryptography and quantum cybersecurity.' },
        { id: 6, icon: '🌐', title: 'QWorld', description: 'Open resources and courses from the global QWorld education network.' },
        { id: 7, icon: '🖥️', title: 'IBM Quantum Learning', description: "IBM's official platform for learning quantum computing and Qiskit." }
      ]
    },
    unete: {
      titulo: 'Join the QPerú community',
      texto: 'Keep up with updates, workshops, talks and everything coming up in our community. Scan the QR code or tap to join the WhatsApp group.',
      qrTitulo: 'QPerú · Init',
      qrSub: 'WhatsApp group'
    },
    sobreNosotros: {
      eyebrow: '|about-us⟩',
      title: 'Who we are',
      intro: 'QPerú was created to bring quantum computing to Peru: an open community that organizes workshops, talks and study spaces for students, professionals and curious minds across the country.',
      mision: {
        eyebrow: '|mission⟩',
        title1: 'Spread and',
        title2: 'democratize.',
        lede: 'Our mission is to spread and democratize quantum computing in Peru through workshops, talks and an active community.',
        texto: "We believe quantum computing isn't a topic reserved for a few labs: it's a technology the country needs to understand, discuss and build. That's why all our activities emphasize active participation - nobody just watches here.",
        facts: [
          { k: 'Open', v: 'Activities accessible to the whole ecosystem' },
          { k: 'Local', v: 'Focused on the Peruvian ecosystem' },
          { k: 'Trilingual', v: 'Spanish · English · Quechua coming soon' }
        ]
      },
      vision: {
        eyebrow: '|vision⟩',
        title1: 'Where we’re',
        title2: 'headed.',
        lede: "To be Peru's leading community in quantum computing.",
        texto: 'We want to build a new generation of Peruvian talent able to take part - as students, researchers or professionals - in the second quantum revolution, in Peru and abroad.'
      },
      valores: {
        eyebrow: '|values⟩',
        title: 'Our values',
        items: [
          { id: 1, title: 'Openness', description: 'All the knowledge we produce is accessible: free of charge, without rigid prerequisites.' },
          { id: 2, title: 'Collaboration', description: 'We build together with universities, technical communities and active volunteers, not alone.' },
          { id: 3, title: 'Rigor', description: "We communicate with precision: explaining what's real - and what isn't - in quantum computing today." },
          { id: 4, title: 'Local impact', description: 'We prioritize quantum knowledge taking root in the Peruvian ecosystem.' }
        ]
      }
    },
    equipo: {
      eyebrow: '|team⟩',
      title: 'Our team',
      intro: 'Professionals and enthusiasts dedicated to democratizing quantum computing in Peru.',
      roleFundadora: 'Founder',
      roleFundador: 'Founder',
      roleMiembro: 'Team member',
      bioMaria: "Passionate about democratizing quantum computing and creating opportunities in tech education for Peru. Leads QPerú's vision and partnerships.",
      bioRenzo: 'Quantum computing expert committed to driving innovation in Peru. Designs the technical content for workshops and talks.'
    },
    eventos: {
      eyebrow: '|agenda⟩',
      title: 'Upcoming activities',
      estado: '2026 calendar in the works',
      texto: "Our first workshops and talks will be announced soon. Join the community to be among the first to know.",
      cta: 'Notify me first'
    },
    footer: {
      copy: '© 2026 QPeru. All rights reserved.'
    }
  }
}
