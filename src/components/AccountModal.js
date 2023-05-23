import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

const AccountModal = ({ show, handleClose }) => {
  return  (
    <Modal show={show} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Abra sua conta</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Seu Nome</Form.Label>
            <Form.Control type='text' placeholder='Digite seu nome' />
          </Form.Group>

          <Form.Group>
            <Form.Label>Seu E-mail</Form.Label>
            <Form.Control type='email' placeholder='Digite seu e-mail' />
          </Form.Group>

          <Form.Group>
            <Form.Label>Sua cidade</Form.Label>
            <Form.Select>
              <option value='0'>São Paulo - SP</option>
              <option value='1'>Curitiba - PR</option>
              <option value='2'>Florianópolis - SC</option>
              <option value='3'>Rio de Janeiro - RJ</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>Cancelar</Button>

        <Button variant="primary" onClick={() => handleClose()}>Criar conta</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default AccountModal;