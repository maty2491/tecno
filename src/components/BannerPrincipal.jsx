import img2 from "../assets/2.png";

export const BannerPrincipal = () => {
  return (
    <>
      <div className="bg-banner">
        <div className="row ">
          <div className="col-lg-2 col-sm-0 "></div>
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
      
      <div className="bg-banner-2 text-center">
        <img src={img2} className="img-fluid" alt="Fondo" />        
      </div>
      
      <div className="mx-auto p-1 mt-4">           
            <h4 className="text-center">
              Sabemos que el suelo es el capital de máximo valor: todo lo demás es
              sustituíble, el suelo no.
            </h4>
            <h4 className="text-center fw-bold">
              Lo que pase con la semilla será consecuencia del estado del suelo.
            </h4>
          </div>
        
    </>
  );
};
