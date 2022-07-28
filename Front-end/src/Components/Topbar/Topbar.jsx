import React, { useContext } from "react";
/* eslint-disable */
import { Link } from "react-router-dom";
import { CartContext, useCart } from "../../contexts/auth";
import perfil from "./perfil.png"
import carinho from "./shopping-cart_icon-icons.com_69460.png"
import { utils } from "../../utils";
const Topbar = () => {
  const userId = utils.getIdUser()
  const { logout } = useContext(CartContext)
/*   const HandleLogout = () => {
    logout()
  }; */
  
  const cart = useCart();
  /* Recebe a função de auth e mudara setUser para null e apagara o user do localstore */
  return (
    <nav className="navbar navbar-expand-lg navbar-dark " id="navbarToggleExternalContent" style={{ backgroundColor: '#171717' }}>
      <Link className="navbar-brand" id="teste2" to={"/"}>Home</Link>
      <div className="collapse navbar-collapse" id="expandirOrMinizar">
        <div className="navbar-nav">
          <div className="nav-link">
            <Link className="nav-link" to={"/"} id="homem" data-bs-toggle="dropdown">Homem</Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <div className="container">
                <div className="row">
                  <div className="col-md-2 mx-auto mb-4" id="tree">
                    <h3>Calçados</h3>
                    <Link to={"/"}>Road Running</Link><br />
                    <Link to={"/"}>Trail Running</Link><br />
                    <Link to={"/"}>Alta Performace</Link><br />
                    <Link to={"/"}>Hiking</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="nav-link">
            <Link className="nav-link" to={"/"} data-bs-toggle="dropdown">Mulher</Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <div className="container">
                <div className="row">
                  <div className="col-md-2 mx-auto mb-4" id="tree">
                    <h3>Calçados</h3>
                    <h3 to={"/"}>Road Running</h3><br />
                    <h3 to={"/"}>Trail Running</h3><br />
                    <h3 to={"/"}>Alta Performace</h3><br />
                    <h3 to={"/"}>Hiking</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-link">
            <Link className="nav-link" to={"/"}>Ofertas</Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <div className="container " style={{ width: '1000px' }}>
                <div className="row">
                  <div className="col-md-2 mx-auto mb-4" id="tree">
                    <h3>Calçados</h3>
                    <Link to={"/"}>Road Running</Link><br />
                    <Link to={"/"}>Trail Running</Link><br />
                    <Link to={"/"}>Alta Performace</Link><br />
                    <Link to={"/"}>Hiking</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to={{pathname: `/perfil/${userId}`}}><button name="Perfil do usuario" className="btn btn-link"><img src={perfil} alt="Perfil" /></button></Link>
      <Link to="/carrinho"><button name="Carrinho de compras" className="btn btn-link"><img src={carinho} alt="Figura de um carrinho de supermercado" /></button></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#expandirOrMinizar" aria-controls="expandirOrMinizar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />

  
      </button>
    </nav>
  )
}

export default Topbar;