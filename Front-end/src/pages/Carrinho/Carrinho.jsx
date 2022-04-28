import React from "react"
import { useCart } from "../../contexts/auth"
const CarrinhoUser = () => {
  const cart = useCart()



  const remove = id => () => {
    cart.removeToCart(id)
  }
  const changeQtd = (id) => (event) => {
    cart.changeQtd(id, event.target.value)

  }
  /* 
    usar onchange no subtotal para toda vez que ouver mudança alterar e atualizar valor total
  */
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
                    <th className="total">
                      <span>Sub-Total</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(cart.cart).map(key => {
                    const product = cart.cart[key].product
                   /*  let Somas = cart.cart[key].product.precoProduto * cart.cart[key].quantity */
                    const SomaTotal = cart.cart[key].product.precoProduto * cart.cart[key].quantity
             
                    return (
                      <tr key={key}>
                        <th className="item">
                          <img src={product.img_um} alt={product.descricao}
                            width="150px" height="auto" />
                          <pre>{JSON.stringify(cart.cart[key].product.name, null, 2)}</pre>

                        </th>
                        <th>
                          <h5 style={{ textTransform: 'uppercase' }}>{product.name}</h5>
                          <button type="submit" className="btn btn-primary" onClick={remove(key)}>Remover</button>
                        </th>
                        <th className="qtd">
                          <input onBlur={changeQtd(key)} type="number" defaultValue={cart.cart[key].quantity} alt={product.name} style={{ width: '35px' }} />
                        </th>
                        <th className="preco">
                         <p> <span>{product.precoProduto}</span></p>

                        </th>
                        <th className="total">
                          <span>{SomaTotal}</span>
                         
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

                  <h2>Total: </h2>
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


