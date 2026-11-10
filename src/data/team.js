// src/data/team.js
// Datos de la estructura de QPeru. Completa los CVs (resumen, formación, etc.).
// Las fotos se importan en src/data/fotos.js (si no hay foto, se muestran las iniciales).
// El enlace de LinkedIn activa el ícono en la tarjeta de cada persona.

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
      linkedin: '',
    },
  },
  renzo: {
    nombre: 'Renzo Leonardo Cienfuegos Cárdenas',
    universidad: 'UNMSM',
    fundador: 'Fundador',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '' },
  },
  kelvin: {
    nombre: 'Kelvin Andrei Cahuana Condori',
    universidad: 'UTEC',
    fundador: 'Fundador',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '' },
  },
  nicole: {
    nombre: 'Nicole Fernández',
    universidad: 'PUCP',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '' },
  },
  marco: {
    nombre: 'Marco Fidel Mayta Quispe',
    universidad: 'CMC-USP',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '' },
  },
  farino: {
    nombre: 'Farino Chuquilin',
    universidad: 'UA',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '' },
  },
  jimena: {
    nombre: 'Jimena Rebaza',
    universidad: 'UNMSM',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '' },
  },
  aaron: {
    nombre: 'Aaron Cornejo',
    universidad: 'UCV',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '' },
  },
  adriana: {
    nombre: 'Adriana Justo',
    universidad: 'UCSP',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '' },
  },
  fabien: {
    nombre: 'Fabien Simón',
    universidad: 'ISIL',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '' },
  },
  dire: {
    nombre: 'Dire Espinal',
    universidad: 'UNI',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '' },
  },
  daniel: {
    nombre: 'Daniel Mamani',
    universidad: 'PUCP',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '' },
  },
  joseph: {
    nombre: 'Joseph Rosales',
    universidad: 'UPN',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '' },
  },
  rocio: {
    nombre: 'Rocio Isabel Dávila Elías',
    universidad: 'USIL',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '' },
  },
  diego: {
    nombre: 'Diego Alejandro Valera Contreras',
    universidad: 'UFPE',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '' },
  },
  luis: {
    nombre: 'Luis Fernando Morales Rojas',
    universidad: 'UAM',
    cv: { resumen: '', formacion: [], experiencia: [], habilidades: [], linkedin: '' },
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
export const AREAS = [
  {
    id: 'academica',
    nombre: 'Asuntos Académicos',
    nombreEn: 'Academic Affairs',
    lema: 'Educación · Formación · Mentoría',
    lemaEn: 'Education · Training · Mentorship',
    color: '#c9a45c',
    director: 'kelvin',
    subdirector: 'nicole',
  },
  {
    id: 'investigacion',
    nombre: 'Investigación',
    nombreEn: 'Research',
    lema: 'Investigación científica · Innovación · Colaboración',
    lemaEn: 'Scientific Research · Innovation · Collaboration',
    color: '#c0272d',
    director: 'marco',
    subdirector: 'farino',
  },
  {
    id: 'relaciones',
    nombre: 'Relaciones Públicas',
    nombreEn: 'Public Relations',
    lema: 'Alianzas · Networking · Relaciones institucionales',
    lemaEn: 'Partnerships · Networking · Institutional Relations',
    color: '#8b5cf6',
    director: 'jimena',
    subdirector: 'aaron',
  },
  {
    id: 'legal',
    nombre: 'Asuntos Legales',
    nombreEn: 'Legal Affairs',
    lema: 'Cumplimiento · Ética · Protección de datos',
    lemaEn: 'Compliance · Ethics · Data Protection',
    color: '#3b82f6',
    director: 'adriana',
    subdirector: null,
  },
  {
    id: 'marketing',
    nombre: 'Marketing',
    nombreEn: 'Marketing',
    lema: 'Comunicaciones · Marca · Difusión',
    lemaEn: 'Communications · Branding · Public Outreach',
    color: '#22a06b',
    director: 'fabien',
    subdirector: null,
  },
  {
    id: 'operaciones',
    nombre: 'Operaciones y Logística',
    nombreEn: 'Operations & Logistics',
    lema: 'Eventos · Infraestructura · Recursos',
    lemaEn: 'Event Management · Infrastructure · Resource Coordination',
    color: '#e0b84a',
    director: 'dire',
    subdirector: null,
  },
];

// Miembros core: sin área específica (junto a los coordinadores en la jerarquía).
// Rocío y Diego siguen en PEOPLE; para mostrarlos de nuevo, agrega 'rocio' / 'diego' aquí.
export const MIEMBROS_CORE = ['luis', 'daniel', 'joseph', 'jimena'];

// 4. Participantes: no se listan personas (es toda la gente que se une a las actividades).