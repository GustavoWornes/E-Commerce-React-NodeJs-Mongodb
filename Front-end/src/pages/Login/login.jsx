import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/auth";
import { utils } from "../../utils";
import { api, createSession } from "../../Services/services";
import { Redirect } from "react-router";
import {Form,Button,Container,Row,Col} from 'react-bootstrap'
const PageLogin = () => {
  const { authenticated } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email, password) => {

    const response = await createSession(email, password)
    console.log('login Response', response.data)
    const loggedUser = [response.data.email, response.data.password]
    const userId = [response.data._id]
    const token = [response.data.token]
    utils.setIdUser(userId)
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

    console.log("submit", { email, password })
    login(email, password)
  }
  return (
    <main>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>  
            <p>{String(authenticated)}</p>
              <Form.Group className="mb-3" controlId="formBicEmail" id="controlId">
                <Form.Label>Email: *</Form.Label>
                <Form.Control type="email" className="form-control" id="emaillogin" aria-describedby="emailHelp" placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)} />
                <Form.Text className="text-muted">
                  
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password :*</Form.Label>
                <Form.Control type="password" className="form-control" id="senhalogin" placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)} />
              </Form.Group>
              <Form.Text className="text-muted">
                  
                </Form.Text>
              
              <Button type="submit" className="btn btn-primary">
                Submit
              </Button>
            </Form>
            
          </Col>
          <Col>
          <div className="col text-center">
              <div>
                <h3>Não é cliente ainda?</h3>
                <p>Cria sua conta em menos de 5 minutos</p>
                <a href="/cadastro"><button className="btn btn-primary">Criar Conta</button></a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  )
}


export default PageLogin