// src/data/colaboraciones.js
// Colaboraciones de QPerú, en dos bloques: nacionales e internacionales.
//
// FORMATO DE CADA ÍTEM
//   id:         clave única (para React)
//   nombre:     nombre de la organización / universidad
//   tipo:       corto, p. ej. "Universidad", "Sociedad", "Empresa"
//   href:       opcional. Si se pone, la tarjeta entera es un enlace
//   foto:       opcional. Import de la imagen (ver ejemplo más abajo)
//
// PARA AGREGAR UNA COLABORACIÓN
//   1. Sube la foto a src/assets/colab/
//   2. Importala arriba del bloque correspondiente
//   3. Agrega el objeto al array (nacionales o internacionales)
//
// Ejemplo (descomentar cuando lleguen las fotos):
//
//   import unmsm from '../assets/colab/unmsm.png'
//   ...
//   export const nacionales = [
//     {
//       id: 'unmsm',
//       nombre: 'Universidad Nacional Mayor de San Marcos',
//       tipo: 'Universidad',
//       href: 'https://www.unmsm.edu.pe',
//       foto: unmsm,
//     },
//   ]

export const nacionales = []

export const internacionales = []
