import img5 from "../assets/5.png";

const Presentacion = () => {
  return (
    <>
      <div className='p-5 mb-4 img-cards mt-5'>
        <div className='container-fluid py-3'>
          <div className='row'>
            <div className="col-lg-6"></div>
            <div className='col-lg-6 text-center'>
              <div className="linea-2"></div>
              <h1 className='display-5 fw-bold text-white text-center'>PRESENTACIÓN EN GEL</h1>
              <p className="fs-4 text-white">
                Vejigas de 1 kg <br /> Vejigas de 5 kg
              </p>
              <p className="fs-4 text-white fw-bold">La gelificación es un desarrollo patentado de Tecnosustrato.</p>
              <p className="fs-4 text-white">
                El proceso de gelificado permite lograr una mayor conservación y disponibilidad del producto,
                asegurando una mayor efectividad del conjunto.</p>
              <p className="fs-4 text-white">
              <span className="fw-bold">Índice de gelificación:</span> 1kg equivale a 20 lt humatos hidrolizados y a 10 kg de humatos granulados.
              </p>
            </div>
            <div className='col-lg-6 text-center'>
              <img src="../assets/sello.png" className='img-fluid' width={350} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Presentacion;
