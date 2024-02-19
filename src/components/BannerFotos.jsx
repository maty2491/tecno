import cardA from "../assets/card-a.png";
import cardB from "../assets/card-b.png";
import cardC from "../assets/card-c.png";
import cardD from "../assets/card-d.png";

const BannerFotos = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
        <div className="col-lg-3">
          <div class="card h-100">
            <img src={cardA} className="card-img-top" />
            <div class="card-body">
              <p>
                Por el alto grado de ​concentración en el formulado, ​se
                necesitan dosis mínimas de ​aplicación.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div class="card h-100">
            <img src={cardB} className="card-img-top" />
            <div class="card-body">
              <p>
                Con la presentación en gel, ​se ahorra en transporte,
                ​almacenamiento, y ​logística.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div class="card h-100">
            <img src={cardC} className="card-img-top" />
            <div class="card-body">
              <p>
                Además, al ser 100% ​biológico, es fácil y seguro ​para
                manipular, sin poner en ​riesgo la salud.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div class="card h-100">
            <img src={cardD} className="card-img-top" />
            <div class="card-body">
              <p>
                La aplicación es 100% ​mecanizada con ​cualquier método de
                ​pulverización.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerFotos;
