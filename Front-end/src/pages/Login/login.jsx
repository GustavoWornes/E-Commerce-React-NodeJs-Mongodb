import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/auth";
import { utils } from "../../utils";
import { createSession } from "../../Services/services";
import { message } from 'antd';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import "./style.css"
const PageLogin = () => {
  const { authenticated } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email, password) => {

    try {
      // Faça aqui sua requisição
      const response = await createSession(email, password)
      console.log('login Response', response.data)
      console.log(response)
      const loggedUser = [response.data.email, response.data.password]
      const userId = [response.data._id]
      const token = [response.data.token]
      utils.setIdUser(userId)
      utils.setToken(token)
      utils.setUser(loggedUser)
      /* Guardando o usuario no localStore para manter ele logado mesmo recarrecando a pagina 
      e transformando usuario logado em objeto para o localStorre armazenar
      */
      openMessage()
    } catch (error) {
      // Caso a requisição dentro do try falhe
      // este bloco captará o erro
      const mensagem = error.response
      console.log(mensagem)
      utils.loginError()
      // Aqui você acessa o objeto que retornou do backend
      // Faça o que quiser com ele
    }

    return

  }

  const key = 'updatable';

  const openMessage = () => {
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      message.success({ content: 'Loaded!', key, duration: 2 });
      window.location.href = "http://maratonistas.s3-website-us-east-1.amazonaws.com/"
    }, 1000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submit", { email, password })

    login(email, password)
  }
  return (
    <main>
      <Container id={Container}>
        <Row>
          <elemento className="Container"></elemento>
          <Col>
            <Form onSubmit={handleSubmit}>

              <Form.Group className="mb-3" controlId="formBicEmail" id="controlId">
                <Form.Label>Email: *</Form.Label>
                <Form.Control type="email" className="form-control" id="emaillogin" aria-describedby="emailHelp" placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)} required="True" />
                <Form.Text className="text-muted">

                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password :*</Form.Label>
                <Form.Control type="password" className="form-control" id="senhalogin" placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)} required="True" />
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