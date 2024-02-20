import lateral from "../assets/lat-1.png";
import lateral2 from "../assets/lat-2.png";
import banner from "../assets/3.png";
const Imas = () => {
  return (
    <>
      <div className="row mt-5 mb-5">
        <div className="col-lg-3 text-center">
          <img src={lateral} className="img-fluid mx-auto" alt="lateral" />
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="text-center ">
            <h2 className="fw-bold mt-3">I+D+I</h2>
            <div>
              <p>
                La innovación sucede cuando se unen la biología, la agronomía y
                la ​tecnología, con más de 30 años de experiencia y formación,
                ​comprendiendo los ritmos y ciclos de la naturaleza, sus
                conexiones ​e interrelaciones, para generar soluciones
                sistémicas.
              </p>
              <p>
                El sistema Tecnosustrato es el resultado de un trabajo de
                investigación, desarrollo e innovación que venimos sosteniendo
                desde hace décadas.
              </p>
              <p>Nuestros resultados hablan por sí mismos.</p>
            </div>

            <button className="btn-curvo-secundario mt-4 mb-5">
              CONOCE MÁS
            </button>
          </div>
        </div>

        <div className="col-lg-3 text-center">
          <img src={lateral2} className="img-fluid mx-auto" />
        </div>
      </div>

      <img src={banner} className="img-fluid" alt="" />
      <div class="bg-marron text-center fs-5 p-5 mb-5">
        <p className="text-light fs-5">
          Nos ocupamos de lo que no se ve. <br />
          Lo que está debajo. <br />
          Lo que sostiene.{" "}
        </p>
        <p className="text-light fs-5">
          Cuando pensamos en las plantas, a menudo visualizamos su crecimiento
          sobre la superficie del suelo,
          <br />
          ​pero debajo, el crecimiento de las raíces es igual de significativo e
          intenso.{" "}
        </p>
        <p className="text-light fs-5">
          <span className="fw-bold">El suelo está vivo</span>, en él se
          multiplican miles de formas de vida, la mayoría invisibles para
          nuestros ojos.
        </p>
      </div>      
    </>
  );
};

export default Imas;
