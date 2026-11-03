// src/data/team.js
// Datos de la estructura de QPeru. Completa los CVs (resumen, formación, etc.).
// Las fotos van en public/team/<id>.jpg (si no existe, se muestran las iniciales).

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

// Miembros sin área específica (aparecen bajo "Miembros core")
export const MIEMBROS_CORE = ['rocio', 'diego', 'luis'];

// Fundadores = Leadership Board
export const FUNDADORES = ['maria', 'renzo', 'kelvin'];

// director / subdirector: id de PEOPLE o null (vacante)
export const AREAS = [
  {
    id: 'academica',
    nombre: 'Asuntos Académicos',
    lema: 'Educación · Formación · Mentoría',
    color: '#c9a45c',
    director: 'kelvin',
    subdirector: 'nicole',
  },
  {
    id: 'investigacion',
    nombre: 'Investigación',
    lema: 'Investigación científica · Innovación',
    color: '#c0272d',
    director: 'marco',
    subdirector: 'farino',
  },
  {
    id: 'relaciones',
    nombre: 'Relaciones Públicas',
    lema: 'Alianzas · Networking · Relaciones institucionales',
    color: '#8b5cf6',
    director: null,
    subdirector: 'aaron',
  },
  {
    id: 'legal',
    nombre: 'Asuntos Legales',
    lema: 'Cumplimiento · Ética · Protección de datos',
    color: '#3b82f6',
    director: 'adriana',
    subdirector: null,
  },
  {
    id: 'marketing',
    nombre: 'Marketing',
    lema: 'Comunicaciones · Marca · Difusión',
    color: '#22a06b',
    director: 'fabien',
    subdirector: null,
  },
  {
    id: 'operaciones',
    nombre: 'Operaciones y Logística',
    lema: 'Eventos · Infraestructura · Recursos',
    color: '#e0b84a',
    director: 'dire',
    subdirector: null,
  },
];