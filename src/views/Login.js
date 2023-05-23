import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import logo from '../assets/MAGbank.png';
import './Login.scss';


const Login = ({ auth }) => {
  const [name, setName] = useState();
  const [account, setAccount] = useState(); 
  const nagivate = useNavigate();

  const handleSubmit = () => {
    auth.login(name, account, nagivate('/dashboard'))
  }

  return (
    <section className='login'>
      <div className='login__container'>
        <Row>
          <Col className='text-center text-light'>
            <Image src={logo} className='mb-5' />
            <Form>
              <Form.Group controlId='formBasicName'>
                <Form.Label className='lead'>
                  <strong>Nome e Sobrenome</strong>
                </Form.Label>
                <Form.Control
                  type='text'
                  value={name || ''}
                  onChange={(event) => setName(event.currentTarget.value)}
                />
              </Form.Group>

              <Form.Group controlId='formBasicAccount'>
                <Form.Label className='lead'>
                  <strong>Número da Conta</strong>
                </Form.Label>
                <Form.Control
                  type='number'
                  value={account || ''}
                  onChange={(e) => setAccount(e.currentTarget.value)}
                />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label className='lead'>
                  <strong>Senha</strong>
                </Form.Label>
                <Form.Control type='password' />
              </Form.Group>

              <Button
                className='mt-3'
                variant='success'
                type='submit'
                onClick={() => handleSubmit()}
              >
                Entrar
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Login;