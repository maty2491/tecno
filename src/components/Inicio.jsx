import BannerContacto from "./BannerContacto";
import Imas from "./Imas";
import Presentacion from "./Presentacion";
import Sistema from "./Sistema";
import Productos from "./Productos";
import Unicos from "./Unicos";
import BannerFotos from "./BannerFotos";
import { BannerPrincipal } from "./BannerPrincipal";
import { BannerVideo } from "./BannerVideo";
import Servicios from "./Servicios";
 

const Inicio = () => {
  return (
    <>
    
    <BannerVideo/>
    <BannerPrincipal/>   
    <BannerContacto />
    <Imas/> 
    {/* <Presentacion/> */}
    <Sistema/> 
    <Unicos/>
    <BannerFotos/> 
    <Productos/> 
    <Servicios/>
  

    </>
  );
};

export default Inicio;
