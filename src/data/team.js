// src/data/team.js
// Datos de la estructura de QPeru. Completa los CVs (resumen, formación, etc.).
// Las fotos se importan en src/data/fotos.js (si no hay foto, se muestran las iniciales).
// Los enlaces de LinkedIn y GitHub activan sus íconos en la tarjeta de cada persona.

// Nombre completo de cada universidad. La clave es la sigla que muestra la tarjeta.
export const UNIVERSIDADES = {
  UNI: 'Universidad Nacional de Ingeniería',
  UNMSM: 'Universidad Nacional Mayor de San Marcos',
  PUCP: 'Pontificia Universidad Católica del Perú',
  UTEC: 'Universidad de Ingeniería y Tecnología',
  UCV: 'Universidad César Vallejo',
  UCSM: 'Universidad Católica de Santa María',
  USP: 'Universidad San Pedro',
  UCSP: 'Universidad Católica de San Pablo',
  ISIL: 'Instituto San Ignacio de Loyola',
  UAM: 'Universidad Autónoma de Madrid',
  UA: 'University of Arizona',
  UPN: 'Universidad Privada del Norte',
  'ICMC-USP': 'Instituto de Ciências Matemáticas e de Computação da Universidade de São Paulo',
};

// Mismo mapa en inglés, para cuando el sitio está en EN.
export const UNIVERSIDADES_EN = {
  UNI: 'National University of Engineering',
  UNMSM: 'National University of San Marcos',
  PUCP: 'Pontifical Catholic University of Peru',
  UTEC: 'University of Engineering and Technology',
  UCV: 'César Vallejo University',
  UCSM: 'Catholic University of Santa María',
  USP: 'San Pedro University',
  UCSP: 'Catholic University of San Pablo',
  ISIL: 'San Ignacio de Loyola Institute',
  UAM: 'Autonomous University of Madrid',
  UA: 'University of Arizona',
  UPN: 'Private University of the North',
  'ICMC-USP': 'Institute of Mathematical and Computer Sciences of the University of São Paulo',
};

export const PEOPLE = {
  maria: {
    nombre: 'María Julia Pareja Abarca',
    universidad: 'UCSM',
    fundador: 'Fundadora',
    cv: {
      resumen: '',
      formacion: [],
      experiencia: [],
      habilidades: [],
      linkedin: 'https://www.linkedin.com/in/mariajpareja/',
      github: 'https://github.com/MariaJuliaPareja',
    },
  },
  renzo: {
    nombre: 'Renzo Leonardo Cienfuegos Cárdenas',
    universidad: 'UNMSM',
    fundador: 'Fundador',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: 'https://www.linkedin.com/in/sudojung/', github: 'https://github.com/Sudojung' },
  },
  kelvin: {
    nombre: 'Kelvin Andrei Cahuana Condori',
    universidad: 'UTEC',
    fundador: 'Fundador',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: 'https://www.linkedin.com/in/kelvin-andrei-cahuana-condori/', github: 'https://github.com/andrewkc' },
  },
  nicole: {
    nombre: 'Nicole Fernández',
    universidad: 'PUCP',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: 'https://www.linkedin.com/in/lely-nicole-fernandez-risco-986aa537a/', github: '' },
  },
  marco: {
    nombre: 'Marco Fidel Mayta Quispe',
    universidad: 'ICMC-USP',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: 'https://www.linkedin.com/in/marco-mayta-835781170/', github: '' },
  },
  marino: {
    nombre: 'Marino Chuquilín',
    universidad: 'UA',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: 'https://www.linkedin.com/in/marinoch/', github: '' },
  },
  jimena: {
    nombre: 'Jimena Rebaza',
    universidad: 'UNMSM',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: 'https://www.linkedin.com/in/jimena-rebaza-carpio-31b884197/', github: '' },
  },
  aaron: {
    nombre: 'Aaron Cornejo',
    universidad: 'UCV',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: 'https://www.linkedin.com/in/cqgabriel/', github: '' },
  },
  adriana: {
    nombre: 'Adriana Justo',
    universidad: 'UCSP',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: 'https://www.linkedin.com/in/adriana-justo-nu%C3%B1ez-b182133a7/', github: '' },
  },
  fabian: {
    nombre: 'Fabian Simón',
    universidad: 'ISIL',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: 'https://www.linkedin.com/in/fabian-gabriel-sim%C3%B3n-quintanilla-163a71340/', github: '' },
  },
  dire: {
    nombre: 'Dire Espinal',
    universidad: 'UNI',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: 'https://www.linkedin.com/in/dire-espinal-pecho-369a70386/', github: 'https://github.com/DireEspinalP' },
  },
  daniel: {
    nombre: 'Daniel Mamani',
    universidad: 'PUCP',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '', github: '' },
  },
  joseph: {
    nombre: 'Joseph Rosales',
    universidad: 'UPN',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '', github: '' },
  },
  rocio: {
    nombre: 'Rocio Isabel Dávila Elías',
    universidad: 'USIL',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '', github: '' },
  },
  diego: {
    nombre: 'Diego Alejandro Valera Contreras',
    universidad: 'UFPE',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '', github: '' },
  },
  luis: {
    nombre: 'Luis Morales',
    universidad: 'UAM',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '', github: '' },
  },
};

// ── Jerarquía (de arriba hacia abajo) ──────────────────────────
// 1. Co-fundadores
export const FUNDADORES = ['maria', 'renzo', 'kelvin'];

// 2. Leadership Board: es un bloque distinto al de co-fundadores.
//    Hoy lo integran las mismas tres personas; si cambia, edita esta lista.
export const LEADERSHIP_BOARD = ['maria', 'renzo', 'kelvin'];

// 3. Coordinadores de Área: una sección por área.
//    director / subdirector: id de PEOPLE o null (se muestra como "Vacante").
//    simbolo: signo de identificación del departamento; se muestra a la
//    derecha de su nombre en los subíndices del navbar y en su página.
export const AREAS = [
  {
    id: 'academica',
    nombre: 'Asuntos Académicos',
    nombreEn: 'Academic Affairs',
    nombreQu: 'Yachachiy masiy', // REVISAR
    simbolo: 'λ',
    lema: 'Educación · Formación · Mentoría',
    lemaEn: 'Education · Training · Mentorship',
    lemaQu: 'Yachachiy · Yachakuy · Yanapay', // REVISAR
    color: '#c1a370',
    director: 'kelvin',
    subdirector: 'nicole',
  },
  {
    id: 'investigacion',
    nombre: 'Investigación',
    nombreEn: 'Research',
    nombreQu: 'Yachay', // REVISAR
    simbolo: '∇',
    lema: 'Investigación científica · Innovación · Colaboración',
    lemaEn: 'Scientific Research · Innovation · Collaboration',
    lemaQu: 'Yachay · Musuqchay · Ayninkuy', // REVISAR
    color: '#810000',
    director: 'marco',
    subdirector: 'marino',
  },
  {
    id: 'relaciones',
    nombre: 'Relaciones Públicas',
    nombreEn: 'Public Relations',
    nombreQu: 'Rimanakuykuna', // REVISAR
    simbolo: '∪',
    lema: 'Alianzas · Networking · Relaciones institucionales',
    lemaEn: 'Partnerships · Networking · Institutional Relations',
    lemaQu: 'Ayni · Rimanakuy · Kamachiy', // REVISAR
    color: '#8c52ff',
    director: 'jimena',
    subdirector: 'aaron',
  },
  {
    id: 'legal',
    nombre: 'Asuntos Legales',
    nombreEn: 'Legal Affairs',
    nombreQu: 'Yupaychay masiy', // REVISAR
    simbolo: '§',
    lema: 'Cumplimiento · Ética · Protección de datos',
    lemaEn: 'Compliance · Ethics · Data Protection',
    lemaQu: 'Kamachiy · Yupaychay · Yachay rikuchiy', // REVISAR
    color: '#3876ff',
    director: 'adriana',
    subdirector: null,
  },
  {
    id: 'marketing',
    nombre: 'Marketing',
    nombreEn: 'Marketing',
    nombreQu: 'Marketing', // préstamo (Cap. IV §6.1 c)
    simbolo: '∝',
    lema: 'Comunicaciones · Marca · Difusión',
    lemaEn: 'Communications · Branding · Public Outreach',
    lemaQu: 'Chaninchay · Suti · Rimanchik', // REVISAR
    color: '#226646',
    director: 'fabian',
    subdirector: null,
  },
  {
    id: 'operaciones',
    nombre: 'Operaciones y Logística',
    nombreEn: 'Operations & Logistics',
    nombreQu: 'Ruray chakiy', // REVISAR
    simbolo: '⊗',
    lema: 'Eventos · Infraestructura · Recursos',
    lemaEn: 'Event Management · Infrastructure · Resource Coordination',
    lemaQu: 'Llamkanakuy · Wasikuna · Apachiy', // REVISAR
    color: '#cda630',
    director: 'dire',
    subdirector: null,
  },
];

// Símbolo del Leadership Board (mismo uso que los de AREAS).
export const SIMBOLO_BOARD = 'Ψ';

// Miembros core: sin área específica (junto a los coordinadores en la jerarquía).
// Rocío y Diego siguen en PEOPLE; para mostrarlos de nuevo, agrega 'rocio' / 'diego' aquí.
export const MIEMBROS_CORE = ['luis', 'joseph'];

// 4. Participantes: no se listan personas (es toda la gente que se une a las actividades).