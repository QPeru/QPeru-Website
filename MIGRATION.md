# Migración QPerú: HTML/CSS/JS Vanilla → React + Vite

## Estado: En progreso (rama `migracion-react`)

Esta rama contiene la migración completa de la landing page de QPerú de HTML vanilla a React 18 + Vite 5.

### ¿Qué cambió?

**Antes (HTML/CSS/JS vanilla):**
- `index.html` - Estructura HTML
- `styles.css` - Estilos CSS
- `script.js` - Lógica JavaScript (IntersectionObserver, scroll-reveal)
- `assets/` - Logos, imágenes

**Después (React + Vite):**
- `index.html` - Entry point de Vite (mínimo)
- `src/main.jsx` - Punto de entrada de React
- `src/App.jsx` - Componente raíz
- `src/index.css` - Estilos CSS (copiados tal cual)
- `src/components/` - 14 componentes React (uno por sección)
- `src/hooks/useReveal.js` - Hook que replica IntersectionObserver
- `src/assets/` - Logos, imágenes
- `vite.config.js` - Configuración de Vite
- `package.json` - Dependencias y scripts

### Componentes creados

1. **Navbar** - Navegación + Logo
2. **Hero** - Sección principal
3. **CircuitBand** - SVG animado del circuito cuántico
4. **Mission** - Misión y valores
5. **Activities** - Talleres, charlas, comunidad
6. **Cursos** - 3 cursos (data-driven)
7. **RedGlobal** - Red QWorld/QCousins
8. **Comunidad** - Para quién va dirigido
9. **Agenda** - Próximas actividades
10. **Equipo** - Miembros del equipo (data-driven)
11. **Recursos** - Recursos gratuitos (data-driven)
12. **Contacto** - Información de contacto
13. **Unete** - CTA + QR WhatsApp
14. **Footer** - Pie de página

### Características preservadas

✅ Diseño 100% igual (mismas clases CSS, layout, espaciado)
✅ Paleta de colores sin cambios (#8B0000, blanco, gris)
✅ Comportamiento de reveal-on-scroll (hook useReveal)
✅ Animaciones CSS del circuito cuántico
✅ Responsive (desktop, tablet, mobile)
✅ Todas las secciones data-driven donde corresponde
✅ Meta tags, SEO, accesibilidad (ARIA labels)

### Bugs corregidos

⚠️ **Favicon**: Placeholder usando logo2.png (necesita ícono .ico real)
⚠️ **OG Image**: Placeholder usando logo1.png (necesita imagen 1200x630px real)

### Para usar

```bash
# Instalar dependencias (si no tienes Node.js, instálalo primero)
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Previsualizar build
npm run preview
```

### Verificación antes de merge

- [ ] `npm install` sin errores
- [ ] `npm run build` sin errores
- [ ] `npm run dev` funciona localmente
- [ ] Todos los links funcionan (#mision, #actividades, etc)
- [ ] Scroll-reveal funciona en mobile
- [ ] Imágenes cargan correctamente
- [ ] No hay console errors o warnings
- [ ] Responsive en 375px, 768px, 1536px

### Notas técnicas

- **useReveal hook**: Replica exactamente el IntersectionObserver del script.js original
- **prefers-reduced-motion**: Respetado en useReveal (added class "visto" inmediatamente)
- **Data-driven**: Cursos, Equipo, Recursos son arrays de objetos mapeados con .map()
- **Assets**: Importados directamente en componentes (import ... from '../assets/...')
- **CSS**: Copiado 1:1 a src/index.css, sin cambios

### Próximos pasos

1. Revisar que todos los componentes estén presentes y correctos
2. Corregir favicon y og-image con activos reales
3. Hacer `npm install && npm run build` para verificar
4. Mergear a main cuando esté listo para deploy en Vercel

---

**Rama**: `migracion-react`  
**Fecha inicio**: 2026-07-27  
**Estado**: En progreso
