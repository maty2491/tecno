import iconoA from '../assets/icono_satelite.png'

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
    <div className='col-lg-2'></div>
    </div>
    <div className='row text-center'>
      <div className='col-lg-3 col-md-3 col-sm-3 mb-4'>
        <img src={iconoA} className='f-circular' alt="" />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-3 mb-4'>
      <img src={iconoA} className='f-circular' alt="" />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-3 mb-4'>
      <img src={iconoA} className='f-circular' alt="" />
      </div>
      <div className='col-lg-3 col-md-3 col-sm-3 mb-4'>
      <img src={iconoA} className='f-circular' alt="" />
      </div>

    </div>
    </>
  )
}

export default Servicios