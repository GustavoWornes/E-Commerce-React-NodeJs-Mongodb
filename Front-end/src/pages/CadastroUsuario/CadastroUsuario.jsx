
import React from "react";
import { Link } from "react-router-dom";

const NewUser = () =>(
        <main>
        <section className="container containerCriarConta">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="nome">Nome</label>
                <input type="text" className="form-control" placeholder="First name" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="sobrenome">Sobrenome</label>
                <input type="text" className="form-control" placeholder="Last name" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email" />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="cep">CEP</label>
              <input type="text" className="form-control" id="cep" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="logradouro">Logradouro</label>
              <input type="text" className="form-control" id="logradouro" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="bairro">Bairro</label>
              <input type="text" className="form-control" id="bairro" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="localidade">Localidade</label>
              <input type="text" className="form-control" id="localidade" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="uf">UF</label>
              <input type="text" className="form-control" id="uf" />
            </div>
          </form><br />
          <Link><button className="btn btn-primary">Criar Conta</button></Link>
        </section></main>
    )


export default NewUser