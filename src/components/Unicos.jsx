import React from "react";

const Unicos = () => {
  return (
    <div className="p-3">
      <div className="row text-center">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="linea"></div>
          <h1 className="fw-bold mb-4">ÚNICOS</h1>
          <h3 className="fw-bold mb-4">EN EL MERCADO</h3>
          <p className="">
            Formulados con la mayor concentración de carbono disponible al 90,1%
            y ​con el proceso de gelificado patentado de Tecnosustrato, nuestros
            ​productos son diferentes a todos los que existen.
          </p>
          <h5 className="text-center bg-tabla">Tabla de equivalencias</h5>
          <table className="tabla">
            <tbody className="text-center">
              <tr>
                <td className="bg-tabla">1 kg de gel</td>
                <td className="bg-tabla">20 lt de líquido Tecnosustrato</td>
                <td className="bg-tabla"> 50 lt de líquido de otras marcas</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-2 col-md-1 col-sm-1"></div>
      </div>
    </div>
  );
};

export default Unicos;
