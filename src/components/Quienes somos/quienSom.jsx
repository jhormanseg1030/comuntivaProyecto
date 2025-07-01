import './quienSom.css';

function QuienesSomos() {
  return (
    <>
    <div className='img'>
    <div className="div">
      <div className="div1">
        <h1>Quiénes Somos</h1>
        <p>
          En <strong>COMUCTIVA</strong> trabajamos para conectar directamente a campesinos y consumidores finales.
        Queremos eliminar intermediarios y promover productos sostenibles, auténticos y de calidad, fortaleciendo la economía 
        local y generando oportunidades para las comunidades rurales.
        </p>
      </div>

      <section className="section">
        <h2>Nuestro Propósito</h2>
        <p>
        Impulsar el desarrollo rural y el comercio justo, brindando una plataforma que visibiliza el trabajo de los campesinos
        y acerca sus productos frescos y locales a más personas de forma transparente y directa.
        </p>
      </section>

      <section className="section qs-grid">
        <div className="qs-card">
          <h3>Misión</h3>
          <p>
            Facilitar un canal digital seguro, accesible y transparente que fortalezca la economía de los campesinos,
            permitiéndoles ofrecer sus productos de manera justa y directa.
          </p>
        </div>
        <div className="qs-card">
          <h3>Visión</h3>
          <p>
            Desarrollar una solución digital funcional y accesible que facilite la comercialización directa de productos campesinos,
            fomentando el comercio justo y sirviendo como ejemplo de innovación y compromiso social desde la formación en el SENA.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Valores</h2>
        <ul className="lista">
          <li>Transparencia</li>
          <li>Comercio Justo</li>
          <li>Sostenibilidad</li>
          <li>Inclusión</li>
          <li>Calidad</li>
          <li>Crompromiso</li>
        </ul>
      </section>

      
       <section className="section">
        <h2>Problemática</h2>
        <p>
        Muchos campesinos enfrentan barreras tecnológicas, baja visibilidad y dificultad para acceder a mercados justos.
        Esto limita sus ingresos, perpetúa desigualdades económicas y afecta el crecimiento de sus comunidades.
        </p>
        </section>
        
        <section className="section">
        <h2>Justificación</h2>
        <p>
        COMUCTIVA nace como respuesta a la falta de transparencia y equidad que viven los campesinos en el mercado actual.
        Buscamos ofrecerles un canal directo para mejorar sus ingresos, dignificar su trabajo y motivar a las nuevas generaciones a seguir cultivando la tierra.
        </p>
        </section>
        
    </div>
    </div>
    </>
  );
}

export default QuienesSomos;
