import BannerContacto from "./BannerContacto";
import Imas from "./Imas";
import Presentacion from "./Presentacion";
import Sistema from "./Sistema";
import Productos from "./Productos";
import Unicos from "./Unicos";
import BannerFotos from "./BannerFotos";
import { BannerPrincipal } from "./BannerPrincipal";
import { BannerVideo } from "./BannerVideo";
 

const Inicio = () => {
  return (
    <>    
    <BannerVideo/>
    <BannerPrincipal/>   
    <BannerContacto />
    <Presentacion/>
    <Imas /> 
    <Sistema/> 
    <BannerFotos/>
    <Unicos/>
    <Productos/>

    </>
  );
};

export default Inicio;
