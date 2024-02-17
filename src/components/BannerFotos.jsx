import bannerFot from "../assets/14.png";

const BannerFotos = () => {
  return (
    <>
    <div className="border border-primary">
    <div className="row mb-2 text-center">
      <div className="col-lg-3">
        <img src={bannerFot} className="img-fluid" />
        <p>Por el alto grado de ​concentración en el formulado, ​se necesitan dosis mínimas de ​aplicación.</p>
      </div>
      <div className="col-lg-3">
        <img src={bannerFot} className="img-fluid" />
        <p>Con la presentación en gel, ​se ahorra en transporte, ​almacenamiento, y ​logística.</p>
      </div>
      <div className="col-lg-3">
        <img src={bannerFot} className="img-fluid" />
        <p>Además, al ser 100% ​biológico, es fácil y seguro ​para manipular, sin poner en ​riesgo la salud.</p>
      </div>
      <div className="col-lg-3">
        <img src={bannerFot} className="img-fluid" />
        <p>La aplicación es 100% ​mecanizada con ​cualquier método de ​pulverización.</p>
      </div>
    </div>
    </div>
    </>
  );
};

export default BannerFotos;
