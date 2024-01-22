import Video from "./Video";
import logVideo from "../assets/logo-vid.mp4";
import img2 from "../assets/2.png";
import logoPri from "../assets/logo-pri.png";
import BannerContacto from "./BannerContacto";
import Imas from "./Imas";
import Presentacion from "./Presentacion";
import Sistema from "./Sistema";
import Productos from "./Productos";

const Inicio = () => {
  return (
    <>    
    <div className="bg-video">
        <Video src={logVideo} />

    </div>
    
      {/* 1 COMPONENTE */}
      <div className="container-fluid bg-banner">
        <div className="row">
          <div className="col-lg-2 col-sm-0"></div>
          <div className="col-lg-8 col-sm-12 text-white">
            <div>
              <h4 className="text-center text-white">
                Desarrollamos un sistema integral de productos y servicios para
                la bioregeneración del suelo y el manejo biológico de los
                cultivos.
              </h4>
              <div className="text-center mt-5">
                <button className="btn-curvo">VER PRODUCTOS Y SERVICIOS</button>
              </div>
            </div>
            <div className="col-lg-2 col-sm-0"></div>
          </div>
        </div>
      </div>
      {/* 2 COMPONENTE */}

      <div className="">
        <img src={img2} className="img-fluid" alt="Fondo" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 20 1410 310"><path fill="#3D281B" fill-opacity="1" d="M0,160L16,138.7C32,117,64,75,96,74.7C128,75,160,117,192,128C224,139,256,117,288,122.7C320,128,352,160,384,176C416,192,448,192,480,176C512,160,544,128,576,101.3C608,75,640,53,672,85.3C704,117,736,203,768,224C800,245,832,203,864,186.7C896,171,928,181,960,165.3C992,149,1024,107,1056,96C1088,85,1120,107,1152,122.7C1184,139,1216,149,1248,165.3C1280,181,1312,203,1344,213.3C1376,224,1408,224,1424,224L1440,224L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"></path></svg>
      </div>

      {/* 3 COMPONENTE */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <h5 className="text-center">
              Sabemos que el suelo es el capital de máximo valor: todo lo demás es
              sustituíble, el suelo no.
            </h5>
            <h5 className="text-center fw-bold mt-5">
              Lo que pase con la semilla será consecuencia del estado del suelo.
            </h5>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
      {/* 4 COMPONENTE */}
      <BannerContacto />
      <Imas />
      <Presentacion/>
      <Sistema/>
      <Productos/>
    </>
  );
};

export default Inicio;
