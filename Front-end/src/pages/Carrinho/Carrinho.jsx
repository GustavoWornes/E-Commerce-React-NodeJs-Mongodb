import React from "react"
import { useCart } from "../../contexts/auth"

import teste from "../Home/img/Produto 1.png"
const CarrinhoUser = () => {
 const cart = useCart()
  return (
    <main>
    <section className="container-fluid">
      <div className="container container-carrinho">
        <h5>Carrinho de compras</h5>
        <div className="row">
          <div className="col-md-9">
            <div>
            </div><table className="table table-hover">
              <thead>
                <tr>
                  <th className="item">
                    <span>Item</span>
                  </th>
                  <th />
                  <th className="qtd">
                    <span>Qtd</span>
                  </th>
                  <th className="preco">
                    <span>Preço</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(cart.cart).map(key =>{
                 const product = cart.cart[key]
                  return(
                <tr key={key}>
                  <th className="item">
                    <img src={product.img_um} alt="Imagem da lateral do tenis sonic 4 balance m da cor vermelha " width="150px" height="auto" />
                    
                  </th>
                  <th>
                    <h5 style={{ textTransform: 'uppercase' }}>{product.name}</h5>
                  </th>
                  <th className="qtd">
                    <input type="number" defaultValue={1} style={{ width: '35px' }} />
                  </th>
                  <th className="preco">
                    <span>{product.precoProduto}</span>
                  </th>
                </tr>
                  )
                })}
                <tr>
                </tr><tr>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-3">
            <form>
              <div className="form-group">
                <h5>Resumo da compra</h5>
              </div>
              <div>
                <h5>CEP</h5>
                <input />
              </div>
              <div>
                <h5>Correios</h5>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    <p> Sedex - entrega em 5 dias uteis. </p><span>R$30,23</span>
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                  <label className="form-check-label" htmlFor="exampleRadios2">
                    <p>PAC - entrega em 15 dias uteis. </p><span>R$17,90</span>
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option2" />
                  <label className="form-check-label" htmlFor="exampleRadios3">
                    <p>Frete Gratis</p>
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-9">
                    <p>Sub-total</p>
                  </div>
                  <div className="col-sm-3">
                    <span>R$1.299,90</span>
                  </div>
                  <div className="col-md-9">
                    <p>Frete (Correios - Sedex - entrega em 5 dias úteis.)</p>
                  </div>
                  {/* <div class="col-sm-3">
                                        <span>R$30,23</span>
                                    </div> */}
                </div>
                <div className="divisao" />
                <h2>Total: <span>R$1.299,90</span></h2>
                <button className="btn btn-primary">Finalizar pedido</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section></main>
  )
}



export default CarrinhoUser