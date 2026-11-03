export default function Intro() {
  return (
    <section className="intro">
      <div className="intro-inner">
        <div className="intro-left">
          <img className="intro-mascota" src="/mascota.png" alt="Mascota de QPerú: un cóndor andino" />
          <h2 className="intro-title">Quantum Peru 2026</h2>
        </div>

        <div className="intro-text">
          <p>
            QPerú nació para acercar la computación cuántica al Perú: una comunidad abierta que organiza talleres, 
            charlas y espacios de estudio para estudiantes, profesionales y curiosos de todo el país.
          </p>
          <a href="#actividades" className="intro-btn">Ver más</a>
        </div>
      </div>
    </section>
  );
}