import React from "react";
import banner from "./img/banner.jpg"
import ProdutoDestaque from "./img/Produto 1.png"
import ProdutoDestaque2 from "./img/L41685200_d6bc585b5b760987b732b7bfe2b5c6c5.jpeg"
import card1 from "./img/tv.jpeg"
import card2 from "./img/Road Running.jpg"
import card3 from "./img/Trail Running.jpeg"
import { Link } from "react-router-dom";

const BodyPage = () => {
 
  return (
    <main>
        <div>
          <img src={banner} className="img-fluid mb-5" alt="Casal correndo na praia" />
          {/* Mb = margem bottom */}
        </div>
        <div className="container-fluid text-center">
          <h1>Produtos Destaque</h1>
        <Link to="/product/6257c0db5cbb58dd34b74d07"><img src={ProdutoDestaque} className="img-fluid" alt="CasalCorrendo Na praia"/></Link> 
       
        <Link to="/product/625b355e32217471a43796d5"><img src={ProdutoDestaque2} className="img-fluid" alt="CasalCorrendo Na praia"/></Link> 
        
        </div>
        
        <section className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src={card1} className="img-fluid" alt="Foto de tres pessoas numa montanha num por to sol" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Alta Performace</h5>
                  <p className="card-text">Conheça sua zona de conforto</p>                       
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src={card2} className="img-fluid" alt="Foto de tres pessoas numa montanha num por to sol" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Road Running</h5>
                  <p className="card-text">Impossivel imaginar <strong>viver sem correr</strong>.</p>                       
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={card3} className="img-fluid" alt="Foto de tres pessoas numa montanha num por to sol" /> 
                </div>
                <div className="card-body">
                  <h5 className="card-title">Trail Running</h5>
                  <p className="card-text">A vitória é certa quando se tem <strong>foco, determinação e paciência</strong>.</p>                       
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      );

  
}

        

export default BodyPage;