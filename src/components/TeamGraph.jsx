import { useMemo, useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { PEOPLE, FUNDADORES, AREAS, MIEMBROS_CORE } from '../data/team';
import './TeamGraph.css';

const COL = 210;
const W = COL * 6;
const H = 1130;
const Y = { fundador: 70, hub: 205, area: 335, dir: 480, sub: 655, grupo: 840, miembros: 1020 };
const MITAD = { person: 62, vacant: 62, area: 30, hub: 30, group: 34 };

// Escala: el grafo se ajusta al ancho disponible.
// Sube ESCALA_MAX si quieres que crezca aún más en pantallas grandes.
const ESCALA_MIN = 0.75;
const ESCALA_MAX = 2;

function iniciales(nombre) {
  return nombre
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase();
}

function Avatar({ nombre, foto }) {
  const [falla, setFalla] = useState(false);
  if (!foto || falla) {
    return <span className="tg-avatar tg-avatar--ini">{iniciales(nombre)}</span>;
  }
  return <img className="tg-avatar" src={foto} alt="" onError={() => setFalla(true)} />;
}

// Mascota en la esquina superior izquierda. El archivo vive en /public.
// Prueba primero mascota2.png y, si no existe, mascota2.jpg.
function Mascota() {
  const [src, setSrc] = useState('/mascota2.png');
  if (!src) return null;
  return (
    <img
      className="tg-mascota"
      src={src}
      alt="Mascota de QPerú"
      onError={() => setSrc((actual) => (actual.endsWith('.png') ? '/mascota2.jpg' : null))}
    />
  );
}

// CV en ventana centrada. Se dibuja en <body> (portal) para que no la afecte
// la escala del grafo. Se expande desde la tarjeta que se hizo clic.
function CvModal({ persona, foto, rol, origen, onClose }) {
  const ref = useRef(null);
  const { cv } = persona;
  const vacio = !cv.resumen && !cv.formacion.length && !cv.experiencia.length && !cv.habilidades.length;

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return createPortal(
    <div className="tg-modal-backdrop" onClick={onClose}>
      <div
        className="tg-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`CV de ${persona.nombre}`}
        tabIndex={-1}
        ref={ref}
        style={{ '--ox': `${origen.ox}px`, '--oy': `${origen.oy}px` }}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="tg-modal__close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>

        <header className="tg-modal__head">
          <Avatar nombre={persona.nombre} foto={foto} />
          <div>
            <h3>{persona.nombre}</h3>
            <span className="tg-modal__uni">{persona.universidad}</span>
            <em>{rol}</em>
          </div>
        </header>

        {vacio && <p className="tg-modal__vacio">CV pendiente de completar.</p>}
        {cv.resumen && <p>{cv.resumen}</p>}

        {cv.formacion.length > 0 && (
          <section>
            <h4>Formación</h4>
            <ul>{cv.formacion.map((f) => <li key={f}>{f}</li>)}</ul>
          </section>
        )}
        {cv.experiencia.length > 0 && (
          <section>
            <h4>Experiencia</h4>
            <ul>{cv.experiencia.map((e) => <li key={e}>{e}</li>)}</ul>
          </section>
        )}
        {cv.habilidades.length > 0 && (
          <ul className="tg-modal__chips">{cv.habilidades.map((h) => <li key={h}>{h}</li>)}</ul>
        )}
        {cv.linkedin && (
          <a className="tg-modal__link" href={cv.linkedin} target="_blank" rel="noreferrer">
            Ver LinkedIn
          </a>
        )}
      </div>
    </div>,
    document.body
  );
}

// fotos: objeto { idPersona: urlImportada }, p. ej. { maria: fotoMaria }
export default function TeamGraph({ fotos = {} }) {
  // abierto: { key, ox, oy } -> ox/oy = distancia desde el centro de la pantalla
  // hasta la tarjeta clicada (para animar la expansión desde ahí)
  const [abierto, setAbierto] = useState(null);
  const [escala, setEscala] = useState(1);
  const contRef = useRef(null);

  useEffect(() => {
    const el = contRef.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(([entrada]) => {
      const ancho = entrada.contentRect.width;
      setEscala(Math.min(Math.max(ancho / W, ESCALA_MIN), ESCALA_MAX));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Esc cierra la ventana y se bloquea el scroll de la página mientras está abierta
  useEffect(() => {
    if (!abierto) return undefined;
    const onKey = (e) => e.key === 'Escape' && setAbierto(null);
    const previo = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previo;
    };
  }, [abierto]);

  const { nodos, aristas } = useMemo(() => {
    const nodos = [];
    const aristas = [];
    const add = (n) => nodos.push(n);

    FUNDADORES.forEach((id, i) =>
      add({
        key: `f-${id}`, tipo: 'person', personaId: id,
        x: W / 2 - COL + COL * i, y: Y.fundador,
        rol: `${PEOPLE[id].fundador} · Leadership Board`, color: '#c0272d',
      })
    );
    add({ key: 'hub', tipo: 'hub', x: W / 2, y: Y.hub, titulo: 'Leadership Board', sub: 'Estrategia y coordinación general', color: '#c0272d' });
    FUNDADORES.forEach((id) => aristas.push([`f-${id}`, 'hub']));

    AREAS.forEach((a, i) => {
      const x = COL / 2 + COL * i;
      add({ key: `a-${a.id}`, tipo: 'area', x, y: Y.area, titulo: a.nombre, sub: a.lema, color: a.color });
      aristas.push(['hub', `a-${a.id}`]);

      const mk = (suf, persona, y, rol) =>
        add({
          key: `${suf}-${a.id}`, tipo: persona ? 'person' : 'vacant', personaId: persona, x, y,
          rol: `${rol} de ${a.nombre}`, color: a.color,
        });
      mk('d', a.director, Y.dir, 'Director/a');
      mk('s', a.subdirector, Y.sub, 'Subdirector/a');
      aristas.push([`a-${a.id}`, `d-${a.id}`]);
      aristas.push([`d-${a.id}`, `s-${a.id}`]);
    });

    const xCore = W / 2 - COL;
    add({ key: 'core', tipo: 'group', x: xCore, y: Y.grupo, titulo: 'Miembros core', sub: 'Sin área específica', color: '#5b7cff' });
    add({ key: 'part', tipo: 'group', x: W / 2 + COL, y: Y.grupo, titulo: 'Participantes', sub: 'Talleres, eventos y proyectos', color: '#8b5cf6' });
    AREAS.forEach((a) => aristas.push([`s-${a.id}`, 'core', true]));
    aristas.push(['core', 'part']);

    MIEMBROS_CORE.forEach((id, i) => {
      const k = `m-${id}`;
      add({
        key: k, tipo: 'person', personaId: id,
        x: xCore + COL * (i - 1), y: Y.miembros,
        rol: 'Miembro core', color: '#5b7cff',
      });
      aristas.push(['core', k]);
    });

    return { nodos, aristas };
  }, []);

  const porKey = Object.fromEntries(nodos.map((n) => [n.key, n]));
  const nodoAbierto = abierto ? porKey[abierto.key] : null;

  const abrir = (e, key) => {
    const r = e.currentTarget.getBoundingClientRect();
    setAbierto({
      key,
      ox: r.left + r.width / 2 - window.innerWidth / 2,
      oy: r.top + r.height / 2 - window.innerHeight / 2,
    });
  };

  const camino = ([a, b]) => {
    const n1 = porKey[a];
    const n2 = porKey[b];
    if (n1.y === n2.y) {
      return `M ${n1.x + 90} ${n1.y} L ${n2.x - 90} ${n2.y}`;
    }
    const y1 = n1.y + MITAD[n1.tipo];
    const y2 = n2.y - MITAD[n2.tipo];
    const m = (y1 + y2) / 2;
    return `M ${n1.x} ${y1} C ${n1.x} ${m}, ${n2.x} ${m}, ${n2.x} ${y2}`;
  };

  return (
    <div className="tg" aria-label="Estructura del equipo de QPerú">
      <div className="tg__scroll" ref={contRef}>
        <div className="tg__sizer" style={{ width: W * escala, height: H * escala }}>
          <div className="tg__stage" style={{ width: W, height: H, transform: `scale(${escala})` }}>
            <Mascota />
            <svg className="tg__edges" width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
              {aristas.map((e) => (
                <g key={`${e[0]}>${e[1]}`} style={{ '--c': porKey[e[1]].color }}>
                  <path d={camino(e)} className={e[2] ? 'tg__edge tg__edge--dash' : 'tg__edge'} />
                  {!e[2] && <path d={camino(e)} className="tg__edge tg__edge--led" />}
                </g>
              ))}
            </svg>

            {nodos.map((n) => {
              const persona = n.personaId ? PEOPLE[n.personaId] : null;
              const foto = n.personaId ? fotos[n.personaId] : null;
              return (
                <div
                  key={n.key}
                  className={`tg-node tg-node--${n.tipo}`}
                  style={{ left: n.x, top: n.y, '--c': n.color }}
                >
                  {persona && (
                    <button
                      type="button"
                      className="tg-person"
                      aria-haspopup="dialog"
                      onClick={(e) => abrir(e, n.key)}
                    >
                      <Avatar nombre={persona.nombre} foto={foto} />
                      <strong>{persona.nombre}</strong>
                      <span>{persona.universidad}</span>
                    </button>
                  )}
                  {n.tipo === 'vacant' && (
                    <div className="tg-person tg-person--vacante">
                      <span className="tg-avatar tg-avatar--ini">?</span>
                      <strong>Vacante</strong>
                      <span>{n.rol.split(' de ')[0]}</span>
                    </div>
                  )}
                  {(n.tipo === 'area' || n.tipo === 'hub' || n.tipo === 'group') && (
                    <div className="tg-label">
                      <strong>{n.titulo}</strong>
                      <span>{n.sub}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {nodoAbierto && (
        <CvModal
          persona={PEOPLE[nodoAbierto.personaId]}
          foto={fotos[nodoAbierto.personaId]}
          rol={nodoAbierto.rol}
          origen={abierto}
          onClose={() => setAbierto(null)}
        />
      )}
    </div>
  );
}