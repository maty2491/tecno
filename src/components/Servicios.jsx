import iconoA from '../assets/satelite.png'
import iconoB from '../assets/sistematizacion.png'
import iconoC from '../assets/teles.png'
import iconoD from '../assets/lupa.png'

const Servicios = () => {
  return (
    <>
      <div className='row text-center mt-5 mb-3 p-5'>
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>
          <div className='linea'></div>
          <h1 className='fw-bold'>SERVICIOS</h1>
          <h5>PARA LA TOMA DE DECISIONES BASADAS EN EVIDENCIA</h5>
          <p>Detectamos problemas, diseñamos soluciones a medida y ​optimizamos toda la cadena de valor.</p>
        </div>
        {/* <div className='col-lg-2'></div> */}
      </div>
      <div className='container'>

      
      <div className='row row-cols-1 row-cols-md-3 g-4 text-center'>
        {/* <div className='col-lg-2 col-md-12'></div> */}
        <div className='col'>
          <img src={iconoA} className='f-circular  mb-4' alt="" />
          <div className='card'>
            <div class="card-body">
              <p class="card-text fs-5">Gabinete <span className='fw-bold'>GIS</span></p>
              <hr />
              <p className='card-text '>Seguimiento satelital ​con algortimo propio. </p>
          </div>
          </div>
        </div>
        <div className='col'>
          <img src={iconoB} className='f-circular mb-4' alt="" />
          <div className='card'>
            <div class="card-body">
              <p class="card-text fs-5">Sistematización <span className='fw-bold '>​de suelos </span></p>
              <hr />
              <p className='card-text'>Curvas de nivel</p>
          </div>
          </div>
        </div>
        <div className='col'>
          <img src={iconoC} className='f-circular mb-4' alt="" />
          <div className='card'>
            <div class="card-body ">
              <p class="card-text fs-5">Laboratorio <span className='fw-bold '>​cualitativo</span></p>
              <hr />
              <p className='card-text'>Análisis físico, químico y ​biológico de suelo y planta</p>
          </div>
          </div>
        </div>
        <div className='col'>
          <img src={iconoD} className='f-circular mb-4' alt="" />
          <div className='card'>
            <div class="card-body">
              <p class="card-text">Smart  <span className='fw-bold fs-4'>​soil</span></p>
              <hr />
              <p class="card-text">Sensor de precisión ​en tiempo real</p>
          </div>
          </div>
        </div>
        {/* <div className='col-lg-2 col-md-12'></div> */}
        </div>
      </div>
    </>
  )
}

export default Servicios