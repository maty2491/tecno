import img5 from "../assets/5.png";

const Presentacion = () => {
  return (
    <>
    <div className="border border-primary">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <img src={img5} className="img-fluid" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
          <p>
            Nuestros bioinsumos reactivan la vida del suelo y evitan el estrés
            de la planta. Su aplicación es especifica según el requerimiento
            nutricional del cultivo en cada ​etapa de su ciclo de desarrollo.
          </p>
          <hr />
          <h1>PRESENTACIÓN</h1>
          <p>
            Vejigas de 1 kg <br /> Vejigas de 5 kg
          </p>
          <p>La gelificación es un desarrollo patentado de Tecnosustrato.</p>
          <p>
            El proceso de gelificado permite lograr una mayor conservación y
            ​disponibilidad de los subcompuestos que constituyen el producto,
            ​asegurando una mayor disponibilidad y efectividad del conjunto.
          </p>
          <p>
            Índice de gelificación: 1kg equivale a 20 lt humatos hidrolizados y
            a 10 ​kg de humatos granulados.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Presentacion;
