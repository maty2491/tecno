import lateral from "../assets/lat.png";
import banner from "../assets/3.png";
const Imas = () => {
  return (
    <>
      <div className="border border-primary mb-5 mt-5">
        <div className="row">
          {/* Imagen a la izquierda */}
          <div className="col-lg-3 col-md-3 col-sm-12 text-center">
            <img src={lateral} className="img-fluid mx-auto" alt="Imagen Izquierda" />
          </div>

          {/* Texto centrado */}
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
            <div className="text-center mt-4">
              <h2 className="fw-bold">I+D+I</h2>
              <div>
              <p>
                La innovación sucede cuando se unen la biología, la agronomía y
                la tecnología, con más de 30 años de experiencia y formación,
                comprendiendo los ritmos y ciclos de la naturaleza, sus
                conexiones e interrelaciones, para generar soluciones
                sistémicas.
              </p>
              <p>
                El sistema Tecnosustrato es el resultado de un trabajo de
                investigación, desarrollo e innovación que venimos sosteniendo
                desde hace décadas.
              </p>
              <p>Nuestros resultados hablan por sí mismos.</p>

              </div>
             
              <button className='btn-curvo-secundario mt-4 mb-5'>CONOCE MÁS</button>
            </div>
          </div>

          {/* Imagen a la derecha */}
          <div className="col-lg-3 col-md-3 col-sm-12 text-center">
            <img src={lateral} className="img-fluid mx-auto" alt="Imagen Derecha" />
          </div>
        </div>
      </div>
            
      <img src={banner} className="img-fluid border border-primary" alt="" />
      <div class="bg-marron border border-primary ">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12 ">
              <h5 className="text-light">
                Nos ocupamos de lo que no se ve. <br />
                Lo que está debajo. Lo que sostiene.{" "}
              </h5>
              <h5 className="text-light">
                Cuando pensamos en las plantas, a menudo visualizamos su
                crecimiento sobre la superficie del suelo, <br /> ​pero debajo, el
                crecimiento de las raíces es igual de significativo e intenso.{" "}
              </h5>
              <h5 className="text-light">
                <span className="fw-bold">El suelo está vivo</span>, en él se multiplican miles de formas de
                vida, la mayoría invisibles para nuestros ojos.
              </h5>
              
            </div>
          </div>
        </div>
        
      </div>
      <svg className="border border-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 20 1420 320"><path fill="#3D281B" fill-opacity="1" d="M0,160L16,138.7C32,117,64,75,96,74.7C128,75,160,117,192,128C224,139,256,117,288,122.7C320,128,352,160,384,176C416,192,448,192,480,176C512,160,544,128,576,101.3C608,75,640,53,672,85.3C704,117,736,203,768,224C800,245,832,203,864,186.7C896,171,928,181,960,165.3C992,149,1024,107,1056,96C1088,85,1120,107,1152,122.7C1184,139,1216,149,1248,165.3C1280,181,1312,203,1344,213.3C1376,224,1408,224,1424,224L1440,224L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"></path></svg>
    </>
  );
};

export default Imas;
