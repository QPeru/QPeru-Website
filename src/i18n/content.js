// Diccionario de contenido ES/EN. Nombres propios, universidades y enlaces no
// se traducen. El selector de idioma en el navbar cambia `lang` vía contexto.
export const content = {
  es: {
    // Título de la pestaña y meta description (se actualizan al cambiar de idioma)
    meta: {
      titulo: 'QPeru - Comunidad de computación cuántica y áreas afines',
      descripcion: 'QPerú es una comunidad peruana abierta que divulga y democratiza la computación cuántica con talleres, charlas y comunidad activa - en español, inglés y pronto quechua.'
    },
    nav: {
      // Menú hamburguesa, selector de idioma y textos de accesibilidad
      menu: {
        acercaDe: 'Acerca de',
        eventos: 'Eventos',
        publicaciones: 'Nuestras publicaciones',
        equipo: 'Miembros del equipo',
        solicitud: 'Solicitud',
        subindice: 'Subíndice'
      },
      idiomas: { es: 'Español', en: 'Inglés', qu: 'Quechua' },
      aria: {
        idioma: 'Idioma',
        elegirIdioma: 'Elegir idioma',
        temaClaro: 'Cambiar a tema claro',
        temaOscuro: 'Cambiar a tema oscuro',
        abrirMenu: 'Abrir menú',
        navegacion: 'Navegación principal',
        inicio: 'QPerú - inicio',
        redes: 'Redes sociales de QPerú'
      }
    },
    hero: {
      fecha: 'Fecha',
      scroll: 'Scroll down',
      bajar: 'Bajar a la siguiente sección'
    },
    intro: {
      altMascota: 'Mascota de QPerú: un cóndor andino',
      titulo: 'QPeru 2026',
      texto: 'QPerú nació para acercar la computación cuántica al Perú: una comunidad abierta que organiza talleres, charlas y espacios de estudio para estudiantes, profesionales y curiosos de todo el país.',
      cta: 'Ver más'
    },
    origen: {
      title: 'Origen de QPeru',
      cta: 'Conoce más',
      parrafos: [
        'Aquí va la historia de cómo nació QPerú: quiénes lo impulsaron, en qué año y con qué motivación.',
        'Puedes agregar más párrafos a esta lista si lo necesitas.'
      ]
    },
    activities: {
      eyebrow: '|actividades⟩',
      title: 'Actividades',
      subtituloPasadas: 'Actividades pasadas',
      subtituloFuturas: 'Actividades futuras',
      verImagen: 'Ver imagen',
      pasadas: [
        {
          id: 1,
          title: 'Charla de computación cuántica en UCSM, Arequipa',
          description: 'Primera charla presencial de QPerú, en la Universidad Católica de Santa María. Introducción a los principios de la computación cuántica y a la comunidad para estudiantes de Arequipa.'
        },
        {
          id: 2,
          title: 'Workshop: Q-Day - Are You Shor You’re Ready?',
          description: 'Con Leonardo Cienfuegos. Una mirada a la amenaza cuántica para la criptografía actual y a cómo la industria se prepara mediante agilidad criptográfica, migración post-cuántica y casos reales.',
          horario: '12:00 - 13:30',
          cta: 'Ver evento →',
          href: 'https://luma.com/azxbqx8m'
        },
        {
          id: 3,
          title: 'Workshop: Más allá del Hype - Realidades y Estrategias Híbridas para la Ventaja Cuántica',
          description: 'Con María Julia Pareja. IA + HPC + algoritmos cuánticos como QAOA, VQE y Annealing aplicados a logística, finanzas, farmacéutica y ciencia de materiales, con demos en vivo y retos reales.',
          horario: '16:30 - 18:00',
          cta: 'Ver evento →',
          href: 'https://luma.com/tbi68knv'
        }
      ],
      futuras: [
        {
          id: 1,
          title: 'Charla en la CSWeek - Leo',
          description: 'Sábado 15, tema por confirmar.'
        },
        {
          id: 2,
          title: 'Charla en la CSWeek - Maju',
          description: 'Sábado 15, tema por confirmar.'
        },
        {
          id: 3,
          title: 'Qiskit Fall Fest 2026',
          description: 'Próximamente, en colaboración con IEEE Computer Society PUCP y la Sociedad de Físicos de la PUCP.'
        }
      ]
    },

    contacto: {
      whatsappTitulo: 'WhatsApp',
      discordTitulo: 'Discord',
      discordSub: 'Servidor de la comunidad'
    },
    unete: {
      qrSub: 'Grupo de WhatsApp'
    },
    sobreNosotros: {
      title: 'Organización',
      mvv: {
        eyebrow: '|misión-visión-valores⟩',
        title: 'Misión, visión y valores',
        intro: 'Lo que nos mueve, hacia dónde vamos y los principios con los que construimos QPerú.'
      },
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
          { id: 1, title: 'Comunidad', description: 'Unir a las comunidades cuánticas del Perú mediante la colaboración y el conocimiento compartido.' },
          { id: 2, title: 'Identidad', description: 'Dar a las comunidades cuánticas del Perú una voz más fuerte y visibilidad internacional.' },
          { id: 3, title: 'Innovación', description: 'Fomentar la creatividad y la exploración científica.' },
          { id: 4, title: 'Accesibilidad', description: 'Hacer que la educación cuántica sea abierta e inclusiva.' },
          { id: 5, title: 'Rigor científico', description: 'Promover el aprendizaje basado en evidencia, la integridad en la investigación y la excelencia científica.' }
        ]
      }
    },
    equipo: {
      eyebrow: '|equipo⟩',
      title: 'EQUIPO DE TRABAJO'
    },
    eventos: {
      eyebrow: '|agenda⟩',
      title: 'Próximas actividades',
      estado: 'Calendario 2026 en preparación',
      texto: 'Los primeros talleres y charlas se anunciarán pronto. Únete a la comunidad y sé de las primeras personas en enterarte.',
      cta: 'Avísame primero'
    },
    solicitud: {
      title: 'Participantes de QPerú',
      unete: 'Únete a la comunidad',
      // Mensajes que van apareciendo en la burbuja al tocar al oso
      burbujas: [
        '¡Únete a la comunidad y participa con nosotros!',
        'Escanea el QR y entra al grupo de WhatsApp.',
        'Aquí nadie aprende solo: comparte lo que descubres.',
        '¿Tienes una idea? Tráela a nuestros talleres y charlas.',
        'Síguenos en las redes y entérate primero de cada evento.'
      ],
      cambiarMensaje: 'Toca al oso para cambiar el mensaje',
      altMascota: 'Mascota de QPerú'
    },
    footer: {
      nombre: 'QPerú · Comunidad cuántica peruana',
      correo: 'Correo',
      privacidad: 'Política de privacidad',
      derechos: 'Todos los derechos reservados.'
    }
  },
  en: {
    meta: {
      titulo: 'QPeru - Quantum computing and related fields community',
      descripcion: 'QPerú is an open Peruvian community that spreads and democratizes quantum computing through workshops, talks and an active community - in Spanish, English and soon Quechua.'
    },
    nav: {
      // Hamburger menu, language selector and accessibility labels
      menu: {
        acercaDe: 'About',
        eventos: 'Events',
        publicaciones: 'Our publications',
        equipo: 'Team members',
        solicitud: 'Join us',
        subindice: 'Item'
      },
      idiomas: { es: 'Spanish', en: 'English', qu: 'Quechua' },
      aria: {
        idioma: 'Language',
        elegirIdioma: 'Choose language',
        temaClaro: 'Switch to light theme',
        temaOscuro: 'Switch to dark theme',
        abrirMenu: 'Open menu',
        navegacion: 'Main navigation',
        inicio: 'QPerú - home',
        redes: 'QPerú social media'
      }
    },
    hero: {
      fecha: 'Date',
      scroll: 'Scroll down',
      bajar: 'Scroll to the next section'
    },
    intro: {
      altMascota: 'QPerú mascot: an Andean condor',
      titulo: 'QPeru 2026',
      texto: 'QPerú was created to bring quantum computing to Peru: an open community that organizes workshops, talks and study spaces for students, professionals and curious minds across the country.',
      cta: 'Learn more'
    },
    origen: {
      title: 'Origin of QPeru',
      cta: 'Learn more',
      parrafos: [
        'Here goes the story of how QPerú was born: who started it, when, and why.',
        'You can add more paragraphs to this list if needed.'
      ]
    },
    activities: {
      eyebrow: '|activities⟩',
      title: 'Activities',
      subtituloPasadas: 'Past activities',
      subtituloFuturas: 'Upcoming activities',
      verImagen: 'View image',
      pasadas: [
        {
          id: 1,
          title: 'Quantum computing talk at UCSM, Arequipa',
          description: "QPerú's first in-person talk, held at Universidad Católica de Santa María. An introduction to quantum computing principles and our community for students in Arequipa."
        },
        {
          id: 2,
          title: 'Workshop: Q-Day - Are You Shor You’re Ready?',
          description: 'With Leonardo Cienfuegos. A look at the quantum threat to today’s cryptography and how the industry is getting ready through cryptographic agility, post-quantum migration and real-world cases.',
          horario: '12:00 - 13:30',
          cta: 'View event →',
          href: 'https://luma.com/azxbqx8m'
        },
        {
          id: 3,
          title: 'Workshop: Beyond the Hype - Hybrid Realities and Strategies for Quantum Advantage',
          description: 'With María Julia Pareja. AI + HPC + quantum algorithms such as QAOA, VQE and Annealing applied to logistics, finance, pharmaceuticals and materials science, with live demos and real challenges.',
          horario: '16:30 - 18:00',
          cta: 'View event →',
          href: 'https://luma.com/tbi68knv'
        }
      ],
      futuras: [
        {
          id: 1,
          title: 'CSWeek talk - Leo',
          description: 'Saturday 15, topic to be confirmed.'
        },
        {
          id: 2,
          title: 'CSWeek talk - Maju',
          description: 'Saturday 15, topic to be confirmed.'
        },
        {
          id: 3,
          title: 'Qiskit Fall Fest 2026',
          description: 'Coming soon, in collaboration with IEEE Computer Society PUCP and the PUCP Physics Society.'
        }
      ]
    },
    contacto: {
      whatsappTitulo: 'WhatsApp',
      discordTitulo: 'Discord',
      discordSub: 'Community server'
    },
    unete: {
      qrSub: 'WhatsApp group'
    },
    sobreNosotros: {
      title: 'Organization',
      mvv: {
        eyebrow: '|mission-vision-values⟩',
        title: 'Mission, vision and values',
        intro: 'What drives us, where we are headed and the principles we build QPerú on.'
      },
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
        title: 'Our core values',
        items: [
          { id: 1, title: 'Community', description: 'Uniting quantum communities across Peru through collaboration and shared knowledge.' },
          { id: 2, title: 'Identity', description: "Giving Peru's quantum communities a stronger voice and international visibility." },
          { id: 3, title: 'Innovation', description: 'Encouraging creativity and scientific exploration.' },
          { id: 4, title: 'Accessibility', description: 'Making quantum education open and inclusive.' },
          { id: 5, title: 'Scientific Rigor', description: 'Promoting evidence-based learning, research integrity, and scientific excellence.' }
        ]
      }
    },
    equipo: {
      eyebrow: '|team⟩',
      title: 'Our team'
    },
    eventos: {
      eyebrow: '|agenda⟩',
      title: 'Upcoming activities',
      estado: '2026 calendar in the works',
      texto: "Our first workshops and talks will be announced soon. Join the community to be among the first to know.",
      cta: 'Notify me first'
    },
    solicitud: {
      title: 'QPeru Participants',
      unete: 'Join the community',
      // Messages shown in the speech bubble when you tap the bear
      burbujas: [
        'Join the community and take part with us!',
        'Scan the QR code and join the WhatsApp group.',
        'Nobody learns quantum alone: share what you discover.',
        'Got an idea? Bring it to our workshops and talks.',
        'Follow us on social media and hear about every event first.'
      ],
      cambiarMensaje: 'Tap the bear to change the message',
      altMascota: 'QPerú mascot'
    },
    footer: {
      nombre: 'QPerú · Peruvian quantum community',
      correo: 'Email',
      privacidad: 'Privacy policy',
      derechos: 'All rights reserved.'
    }
  }
}