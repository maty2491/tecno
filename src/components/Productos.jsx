import planta from "../assets/12.png";

const Productos = () => {
  return (
    <>
      <div className="row text-center">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">          
          <div className="linea" ></div>
          <h1 className="fw-bold">PRODUCTOS</h1>
          <h5 className="fw-bold">PARA ACOMPAÑAR CADA ETAPA</h5>
          <p className="fs-5 p-5 m-1">
            Nuestros bioinsumos reactivan la vida del suelo y evitan el estrés
            de la planta. Su aplicación es especifica según el requerimiento
            nutricional del cultivo en cada etapa ​de su ciclo de desarrollo.
          </p>
        </div>
        <div className="col-lg-2"></div>

      </div>
      <div className="text-center">
        <img src={planta} className="img-fluid" />
      </div>
    </>
  );
};

export default Productos;
