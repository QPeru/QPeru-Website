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
        publicaciones: 'Blog',
        equipo: 'Equipo',
        solicitud: 'Únete',
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
    acercaDe: {
      intro: 'Inspirado en las Líneas de Nazca, QPerú nació con el fin de conectar a estudiantes, investigadores, educadores y profesionales para dar forma al futuro cuántico del país.',
      descripcion: {
        title: 'Descripción de QPerú',
        lede: 'QPerú es una comunidad peruana abierta que divulga y democratiza la computación cuántica con talleres, charlas y comunidad activa.',
        parrafos: [
          'Nació para acercar la computación cuántica al Perú: una comunidad abierta que organiza talleres, charlas y espacios de estudio para estudiantes, profesionales y curiosos de todo el país.',
          'Trabajamos en español, inglés y —pronto— quechua, porque creemos que el conocimiento cuántico no debería estar reservado a unos pocos laboratorios ni a quienes hablan un solo idioma.',
          'Aquí nadie viene solo a mirar: cada actividad está pensada para que participes, preguntes y compartas lo que descubres.'
        ]
      }
    },
    colaboraciones: {
      title: 'Colaboraciones',
      texto: 'Colaboramos con universidades, organizaciones y comunidades tanto dentro como fuera del Perú.',
      nacionales: 'Colaboraciones nacionales',
      internacionales: 'Colaboraciones internacionales'
    },
    sobreNosotros: {
      title: 'Organización',
      mvv: {
        title: 'Misión, visión y valores',
        intro: 'Lo que nos mueve, hacia dónde vamos y los principios con los que construimos QPerú.'
      },
      mision: {
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
        title1: 'Hacia dónde',
        title2: 'vamos.',
        lede: 'Ser la comunidad de referencia en computación cuántica del Perú.',
        texto: 'Buscamos formar una nueva generación de talento peruano capaz de participar como estudiantes, investigadores o profesionales en la segunda revolución cuántica, dentro y fuera del país.'
      },
      valores: {
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
      title: 'EQUIPO DE TRABAJO'
    },
    eventos: {
      title: 'Próximas actividades',
      estado: 'Calendario 2026 en preparación',
      texto: 'Los primeros talleres y charlas se anunciarán pronto. Únete a la comunidad y sé de las primeras personas en enterarte.',
      cta: 'Avísame primero'
    },
    solicitud: {
      title: 'Participantes de QPerú',
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
        publicaciones: 'Blog',
        equipo: 'Team',
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
    acercaDe: {
      intro: 'Inspired by the Nazca Lines, QPerú was born to connect students, researchers, educators and professionals to shape the quantum future of the country.',
      descripcion: {
        title: 'Description of QPerú',
        lede: 'QPerú is an open Peruvian community that spreads and democratizes quantum computing through workshops, talks and an active community.',
        parrafos: [
          'It was born to bring quantum computing closer to Peru: an open community that runs workshops, talks and study spaces for students, professionals and the curious from all over the country.',
          'We work in Spanish, English and —soon— Quechua, because we believe quantum knowledge should not be reserved for a few labs or for those who speak a single language.',
          'Nobody here just watches: every activity is designed for you to take part, ask questions and share what you discover.'
        ]
      }
    },
    colaboraciones: {
      title: 'Collaborations',
      texto: 'We collaborate with universities, organizations and communities both inside and outside Peru.',
      nacionales: 'National collaborations',
      internacionales: 'International collaborations'
    },
    sobreNosotros: {
      title: 'Organization',
      mvv: {
        title: 'Mission, vision and values',
        intro: 'What drives us, where we are headed and the principles we build QPerú on.'
      },
      mision: {
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
        title1: 'Where we’re',
        title2: 'headed.',
        lede: "To be Peru's leading community in quantum computing.",
        texto: 'We want to build a new generation of Peruvian talent able to take part - as students, researchers or professionals - in the second quantum revolution, in Peru and abroad.'
      },
      valores: {
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
      title: 'Our team'
    },
    eventos: {
      title: 'Upcoming activities',
      estado: '2026 calendar in the works',
      texto: "Our first workshops and talks will be announced soon. Join the community to be among the first to know.",
      cta: 'Notify me first'
    },
    solicitud: {
      title: 'QPeru Participants',
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
  },
  qu: {
    // BORRADOR en quechua sureño unificado (Qhichwa) — primer bloque del sitio QPerú.
    // Traduce solo textos visibles; claves, id, horario y href se conservan tal cual.
    // Requiere REVISIÓN POR UN HABLANTE NATIVO antes de publicarse: siguiendo
    // docs/quechua/glosario.md, lo dudoso lleva el comentario `// REVISAR` en su línea.
    meta: {
      titulo: 'QPeru - Kuantika yupay llaqta, sinami hukkunawan', // REVISAR
      descripcion: 'QPerú kichasqa Piruw llaqtam, kuantika yupayta chaninchan hina llapanraykuchin: tallerwan, rimanakuykunawan, llaqta kallpanwan - Kastillapi, Inglispi ñawpaqta Qhichwapi.' // REVISAR
    },
    nav: {
      // Menú hamburguesa, selector de idioma y textos de accesibilidad
      menu: {
        acercaDe: 'Ñuqanchikmanta', // REVISAR
        eventos: 'Llamkanakuykuna', // REVISAR
        publicaciones: 'Blog',
        equipo: 'Llamkakuna',
        solicitud: 'Ayninkuy', // REVISAR
        subindice: 'Siku' // REVISAR
      },
      idiomas: { es: 'Kastilla', en: 'Inglis', qu: 'Qhichwa' },
      aria: {
        idioma: 'Simi',
        elegirIdioma: 'Simi akllay',
        temaClaro: 'Wachkay', // REVISAR
        temaOscuro: 'Yana tikray', // REVISAR
        abrirMenu: 'Menuta kichay',
        navegacion: 'Ñawpaq puriy', // REVISAR
        inicio: 'QPerú - qallapi', // REVISAR
        redes: 'QPerú rimanakuykuna' // REVISAR
      }
    },
    hero: {
      fecha: 'Pacha',
      scroll: 'Urayman puriy', // REVISAR
      bajar: 'Qhipa secciónman awiy' // REVISAR (glosario §3)
    },
    intro: {
      altMascota: 'QPerú ruwaycham: huk kuntur', // REVISAR
      titulo: 'QPeru 2026',
      texto: 'QPerúqa kuantika yupayta Piruwman hukllachiypaq qallarirqan: kichasqa llaqta, tallerwan, rimanakuykunawan, yachay wasikunata kamachisqan, yachakuqkunapaq, llamkakunapaq, yachay munakuqkunapaq, tukuy Piruwpi.', // REVISAR
      cta: 'Aswan rikuy'
    },
    origen: {
      title: 'QPeru qallariy', // REVISAR
      cta: 'Aswan yachay',
      parrafos: [
        'Kaypi QPeru imayna qallarirqan willakuyta: piykuna apaykurqanku, hayk\'a watapi, ima yuyaywan.', // REVISAR
        'Kay listaman aswan yuyaykuna taqiyta munankichu, chayta kamachinankapas.' // REVISAR
      ]
    },
    activities: {
      title: 'Llamkanakuykuna', // REVISAR
      subtituloPasadas: 'Kanraq llamkanakuykuna', // REVISAR
      subtituloFuturas: 'Ñawpaq llamkanakuykuna',
      verImagen: 'Imajen rikuy',
      pasadas: [
        {
          id: 1,
          title: 'Kuantika yupay rimanakuy UCSMpi, Arequipapi', // REVISAR
          description: 'QPerúpaq ñawpaq rimanakuy, Universidad Católica de Santa Maríapi. Kuantika yupay qallariy kikin, Arequipa yachakuqkunapaq llaqtan rikuchiy.' // REVISAR
        },
        {
          id: 2,
          title: 'Workshop: Q-Day - Are You Shor You’re Ready?', // REVISAR: juego de palabras en inglés, se conserva tal cual
          description: 'Leonardo Cienfuegoswan. Kuantika manchaykunata rikuy kunan qillqanakuypi, llamkaypi imayna utqaylla chaninchay: qillqanakuy utqaylla, kuantikamanta qhipa kutiy, kanraq ruraykunapi.', // REVISAR
          horario: '12:00 - 13:30',
          cta: 'Llamkanakuyta rikuy →',
          href: 'https://luma.com/azxbqx8m'
        },
        {
          id: 3,
          title: 'Workshop: Kanraq yuyaykunamanta aswan - Hinas ruraykuna, kamachiykuna hukllakuy kuantika hukllaypaq', // REVISAR
          description: 'María Julia Parejawan. IA + HPC + kuantika algoritmos — QAOA, VQE, Annealing — apaypi, qullqipi, mikhuykunapi, rumikuna yachaypi churanspa, kallpan rikuykunawan, kanraq ruraykunapi.', // REVISAR
          horario: '16:30 - 18:00',
          cta: 'Llamkanakuyta rikuy →',
          href: 'https://luma.com/tbi68knv'
        }
      ],
      futuras: [
        {
          id: 1,
          title: 'CSWeekpi rimanakuy - Leo',
          description: 'Sábado 15, yuyayta manaraq chaninchanqa.' // REVISAR
        },
        {
          id: 2,
          title: 'CSWeekpi rimanakuy - Maju',
          description: 'Sábado 15, yuyayta manaraq chaninchanqa.' // REVISAR
        },
        {
          id: 3,
          title: 'Qiskit Fall Fest 2026',
          description: 'Ñawpaqta, IEEE Computer Society PUCP hukllakuywan, PUCP Yachay Llaqtawan.' // REVISAR
        }
      ]
    },

    contacto: {
      whatsappTitulo: 'WhatsApp',
      discordTitulo: 'Discord',
      discordSub: 'Llaqtan servidor' // REVISAR
    },
    unete: {
      qrSub: 'WhatsApp grupo'
    },
    acercaDe: {
      intro: 'Líneas de Nazca kiksimuspa, QPerú yachakuqkuna, yachay churakuqkuna, yachachiqkuna, llamkakunata hukllachiykarqan: Piruw kuantika ñawpaqta ruraypaq.', // REVISAR
      descripcion: {
        title: 'QPerú willakuy', // REVISAR
        lede: 'QPerú kichasqa Piruw llaqtam, kuantika yupayta chaninchan hina llapanraykuchin: tallerwan, rimanakuykunawan, llaqta kallpanwan.', // REVISAR
        parrafos: [
          'QPerúqa kuantika yupayta Piruwman hukllachiypaq qallarirqan: kichasqa llaqta, tallerwan, rimanakuykunawan, yachay wasikunata kamachisqan, yachakuqkunapaq, llamkakunapaq, yachay munakuqkunapaq, tukuy Piruwpi.', // REVISAR
          'Kastillapi, Inglispi ñawpaqta Qhichwapi llamkanchik, ichaqa chaninchanchik: kuantika yachayqa yachay wasikuna hukllakunapi, huk simi rimakuqkunallapas, mana apaychakuyta kanqachu.', // REVISAR
          'Kaypi huklla rikuyta qamtaq hamuychu: tukuy llamkanakuykuna qampaq kanqa kiknay, tapuy, yachakusqaykita yupaychay.' // REVISAR
        ]
      }
    },
    colaboraciones: {
      title: 'Ayninkuykuna',
      texto: 'Yachay wasikuna, kamachiykuna, llaqtakunawan ayninkuyku: Piruw ukupi hawapipas.', // REVISAR
      nacionales: 'Piruw ayninkuykuna', // REVISAR
      internacionales: 'Huk suyu ayninkuykuna' // REVISAR
    },
    sobreNosotros: {
      title: 'Kamachiy',
      mvv: {
        title: 'Kamachiy, ñawpaq, yupaychaykuna', // REVISAR
        intro: 'Ñuqanchikta makisqan, maykaman risunchik, QPerúta rurasunpaq yuyaykuna.' // REVISAR
      },
      mision: {
        title1: 'Chaninchay',
        title2: 'llapanraykuy.', // REVISAR
        lede: 'Ñuqanchik kamachiyqa kuantika yupayta Piruwpi chaninchaymi llapanraykuy, tallerkunawan, rimanakuykunawan kanan llaqtawan.', // REVISAR
        texto: 'Ñuqanchik yuyaychanchikmi kuantikaqa manam uchillakuna yachay wasikunaman churakusqachu: huk yachaymi kay suyuqa, chayta yachayta, rimanakuyta, rurayta munan. Chayrayku tukuy ñuqanchik llamkanakuykunapi kanan kikunakuyta munanchik. Kaypimqa mana hukllapachu rikuyta hamuchkan.', // REVISAR
        facts: [
          { k: 'Kichasqa', v: 'Tukuy llaqtakunaman kichasqa llamkanakuykuna' }, // REVISAR
          { k: 'Llaqta', v: 'Piruw llaqtakunan kawsaypi kanan' }, // REVISAR
          { k: 'Kimsa simiyuq', v: 'Hispana simi · English · Qhichwa chayamusqan' } // REVISAR
        ]
      },
      vision: {
        title1: 'Maykaman',
        title2: 'risunchik.',
        lede: 'Piruw kuantika yupaypi ñawpaq llaqta kankay.', // REVISAR
        texto: 'Ñuqanchik musuq piruw kallpay runakuna, yachakuqkuna, yachachiqkuna, llamkakunahina iskay kuantika tikraypi kikunakuyta munanchik, kay suyupi karupipas.' // REVISAR
      },
      valores: {
        title: 'Ñuqanchik yupaychaykuna', // REVISAR
        items: [
          { id: 1, title: 'Llaqta', description: 'Piruwpa kuantika llaqtakunata ayninkuywan yupanchasqan yachaywan huñuy.' }, // REVISAR
          { id: 2, title: 'Kikin', description: 'Piruwpa kuantika llaqtakunaman hatun siminta churay, tukuy suyukunapi rikuchiykunawan.' }, // REVISAR
          { id: 3, title: 'Musuqyachiy', description: 'Musuq yuyaykunata, yachay qhawaykunata kallpachay.' }, // REVISAR
          { id: 4, title: 'Kichasqay', description: 'Kuantika yachachiyta kichasqay, tukuykunaman llapanchiywan.' }, // REVISAR
          { id: 5, title: 'Yachay chiqap', description: 'Chiqapmanta yachakuyta, yachaypi chiqapkanata, yachay sumakta kallpachay.' } // REVISAR
        ]
      }
    },
    equipo: {
      title: 'LLAMKAKUNA'
    },
    eventos: {
      title: 'Qhipa llamkanakuykuna', // REVISAR
      estado: '2026 pachakuna churakusqan', // REVISAR
      texto: 'Ñawpaq tallerkunata, rimanakuykunata utqaylla chaninchakunqa. Llaqtaman ayninkuy, chaypaq ñawpaq yachanqayki.', // REVISAR
      cta: 'Ñawpaq chaninchay' // REVISAR
    },
    solicitud: {
      title: 'QPerú kikinkuna', // REVISAR
      // Mensajes que van apareciendo en la burbuja al tocar al oso
      burbujas: [
        '¡Llaqtaman ayninkuy, ñuqanchikwan kikunakuy!', // REVISAR
        'QR-ta skenay, WhatsApp grupo-man yayki.', // REVISAR
        'Kaypimqa mana hukllapachu yachan: imata rikusqaykita yupanchay.', // REVISAR
        '¿Huk yuyaykiyuqkanki? Chayta apamuy ñuqanchik tallerkunaman, rimanakuykunaman.', // REVISAR
        'Ñuqanchikta rimanakuykunapi qhawakuy, tukuy llamkanakuykunata ñawpaq yuyaychayki.' // REVISAR
      ],
      cambiarMensaje: 'Willakuyta tikraypaq Ursota makuy.', // REVISAR
      altMascota: 'QPerú michuq' // REVISAR
    },
    footer: {
      nombre: 'QPerú · Piruw kuantika llaqta',
      correo: 'Qillqanakuy', // REVISAR
      privacidad: 'Mana rikukuy política', // REVISAR
      derechos: 'Tukuy hakuchiykuna churakusqan.' // REVISAR
    }
  }
}
