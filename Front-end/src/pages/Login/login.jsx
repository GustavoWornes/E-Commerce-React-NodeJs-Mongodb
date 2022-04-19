import React from "react";
import { useState,useContext } from "react";
import { CartContext } from "../../contexts/auth";
import { utils } from "../../utils";
import { api, createSession } from "../../Services/services";
import { Redirect } from "react-router";
const PageLogin =() =>{
  const {authenticated} = useContext(CartContext);
  const [email,setEmail]= useState("");
  const [password,setPassword]=useState("");

  const login = async (email,password) =>{ 
     
    const response = await createSession(email,password)
    console.log('login Response',response.data)
    const loggedUser = [response.data.email,response.data.password]
    const token = response.data.token

    utils.setToken(token)
    utils.setUser(loggedUser)
    /* Guardando o usuario no localStore para manter ele logado mesmo recarrecando a pagina 
    e transformando usuario logado em objeto para o localStorre armazenar
    */
    api.defaults.headers.Authorization = `Bearer ${token}`

    return <Redirect to="/" />
}  

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log ("submit",{email,password})
    login(email,password)
  }
    return (
    <main>
        <section className="container container-login">
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <p>{String(authenticated)}</p>
                <div className="form-group">
                  <label htmlFor="Email">Email: *</label>
                  <input type="email" className="form-control" id="emaillogin" aria-describedby="emailHelp" placeholder="Enter email"
                  onChange={(event) =>setEmail(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Password">Senha: *</label>
                  <input type="password" className="form-control" id="senhalogin" placeholder="Password" 
                  onChange={(event) =>setPassword(event.target.value)}
                  />
                </div>
                <small className="form-text text-muted">Campos com * são Obrigatorios</small><br />
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
            <div className="col text-center">
              <div>
                <h3>Não é cliente ainda?</h3>
                <p>Cria sua conta em menos de 5 minutos</p>
                <a href="criarConta.html"><button className="btn btn-primary">Criar Conta</button></a>
              </div>
            </div>
          </div>
        </section>
    </main>
    )
}


export default PageLogin