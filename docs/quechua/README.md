# Referencia de quechua sureño para QPerú

Material de apoyo para traducir la interfaz del sitio al **quechua sureño unificado**
variante normativa que usaremos como base para el botón **QU** del selector de idioma).

## Fuente

> **URIN QICHWA QILLQAY YACHANA MAYT'U — Manual de escritura quechua sureño**
> Ministerio de Educación del Perú · Dirección de Educación Intercultural Bilingüe (DEIB / Digeibira).
> PDF original: `public/manual-escritura-quechua-sur_comprimido.pdf` (164 páginas).

Los archivos de esta carpeta son **destilados** de ese libro (uno por capítulo), extraídos
con `pdftotext` y revisados contra las páginas del PDF. Cada regla lleva la sección y la
página de origen para poder cotejarla.

## Contenido

| Archivo | Capítulo del libro | Qué contiene |
|---|---|---|
| `01-contexto-y-estandarizacion.md` | I y II | Qué es el quechua sureño, su clasificación, historia de la escritura, alfabeto oficial (RM 4023-75-ED), panalfabeto (RM 1218-85-ED) y los **7 criterios de escritura unificada**. |
| `02-letras-y-fonologia.md` | III | Alfabeto completo, sistema fonológico, vocales, **errores frecuentes de escritura** (§2.4), `<q>` vs `<h>`, letras vetadas y estructura silábica. |
| `03-palabra.md` | IV | Raíz y sufijos, palabras compuestas, **préstamos** (§6), **neologismos** (§7), topónimos y antropónimos. Clave para términos como *coordinador*, *investigación*, *marketing*, *blog*. |
| `04-sufijos-nominal.md` | V (1.ª parte) | Escritura de los sufijos, morfología nominal (persona, número, 12 casos, derivación) e inicio de la verbal. |
| `05-sufijos-verbal.md` | V (2.ª parte) | Flexión verbal y subordinación, derivación deverbativa/denominativa, **sufijos independientes** (validadores y conectores) y su pegado/separación. |
| `06-ortografia.md` | VI | Tilde, mayúsculas/minúsculas, signos de puntuación y auxiliares, **conectores** y un checklist de 12 puntos. |

## Cómo usarlo al traducir

1. **Antes de escribir una traducción**, leer `02-letras-y-fonologia.md` (grafías) y
   `06-ortografia.md` (tilde, mayúsculas, puntuación).
2. Para términos nuevos o del inglés/castellano, ir a `03-palabra.md` §6-§7: el libro da el
   procedimiento (préstamo justificado, acuñación, extensión semántica, rescate léxico).
   **No inventar** una traducción si el libro no la respalda: marcar `// REVISAR`.
3. Para verbos (botones, imperativos, instrucciones) usar `05-sufijos-verbal.md`.
4. Al final, pasar el checklist de `06-ortografia.md` §5.

## Limitaciones (léelas)

- Soy un modelo de lenguaje, **no hablante nativo**: toda traducción publicada debe pasar
  por revisión de un hablante nativo o especialista en quechua.
- El destilado conserva los ejemplos **tal cual** vienen en el libro; si algo se ve raro
  (erratas del original, tablas dañadas por la extracción) está marcado con
  `[tabla ilegible en la extracción]` o `REVISAR`.
- El libro documenta variantes **collao** y **chanca** con algunas grafías distintas
  (`p'unchaw/punchaw`, `qh/q`…). Elegir una convención unificada es una decisión de QPerú;
  anotarla aquí cuando se tome.

## Estado de la traducción (actualizado)

- [x] `glosario.md` — ES ↔ Qhichwa acordado (todas las traducciones usan estas palabras).
- [x] **Bloque `qu` completo en `src/i18n/content.js`** (122 claves, espejo exacto de `es`/`en`).
- [x] **Bloque `qu` completo en `src/data/reglamento.js`** (10 ítems).
- [x] `qu` en los roles y títulos del equipo (`Miembrosequipo.jsx` → `TXT.qu`).
- [x] `nombreQu` / `lemaQu` de cada departamento (`team.js`) → visibles en el submenú
      del navbar (`Navbar.jsx`), en el encabezado del área (`Equipo.jsx`) y en la lista
      (`Miembrosequipo.jsx`).
- [x] El botón **QU** del selector ya funciona (no hace falta tocar `LanguageContext`).

**Verificación automatizada:** un script comprobó que `content.qu` tiene exactamente las
mismas 122 hojas y los mismos arrays/`id` que `es` y `en`, que `reglamento.qu` tiene los
mismos 25 campos y 10 ítems, y que **ninguna frase quedó en español** (0 restos).

**Pendiente — revisión léxica** (aparecen letras vetadas/préstamos, decidir con el equipo
y el revisor nativo; la mayoría son válidos como préstamo §6.1 c, pero conviene confirmar):

`universidad`, `sección`, `sábado`, `grupo`, `imajen`, `servidor`, `directiva`,
`algoritmos`, `annealing`, `blog`, `inglis`, `skenay`… — y **~114 líneas marcadas
`// REVISAR`** en `content.js`, `reglamento.js`, `team.js` y `Miembrosequipo.jsx`.

- [ ] Revisión nativa de todo lo marcado `REVISAR` (y decisión sobre los préstamos de arriba).
- [ ] Quitar los archivos auxiliares `docs/quechua/_qu_*.js` (ya están ensamblados en el código).
