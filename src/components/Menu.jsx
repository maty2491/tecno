import { NavLink } from "react-router-dom"
import logo from '../assets/logo.png'

const Menu = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-logo sticky-top " >
      <div className="container-fluid ">
        <NavLink className="navbar-brand " to="/">
          <img
            src={logo}
            className="d-inline-block align-text-top"            
            width="30"
            height="44"
          />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
          <div className="navbar-nav text-center">
            <NavLink className="nav-link fs-5" to="/">
              Inicio -
            </NavLink>

            <NavLink className="nav-link fs-5" to="/sistema-ts">
              Sistema TS -
            </NavLink>

            <NavLink className="nav-link fs-5" to="/resultados">
              Resultados -
            </NavLink>

            <NavLink className="nav-link fs-5" to="/nosotros">
              Nosotros -
            </NavLink>

            <NavLink className="nav-link fs-5" to="/info">
              +Info -
            </NavLink>

            <NavLink className="nav-link fs-5" to="/contacto">
              Contacto
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
