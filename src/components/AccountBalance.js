import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const AccountBalance = ({ data }) => {
  const { latestBalance, futureBalance } = data;

  return (
    <Container>
      <Row>
        <Col xs={12} lg={3}>
          <h3 className='mb-5' id="conta-corrente">Conta Corrente</h3>
          <h6>
            <small>
              <strong>Saldo em conta corrente</strong>
            </small>
          </h6>
          <h4 className='text-success mb-4'>
            <small>R$ </small>3.500<small>,00</small>
          </h4>
          <h6>
            <small>
              <strong>Cheque especial</strong>
            </small>
          </h6>
          <p className='mb-0'>Limite disponível</p>
          <p className='mb-4'>R$ 5.000,00</p>
          <Button variant='secondary'>Ver extrato</Button>
        </Col>
        <Col xs={12} lg={9}>
          <Tabs className='mt-sm-5 pt-sm-5 mt-lg-0 pt-lg-0' defaultActiveKey='latest'>
            <Tab eventKey='latest' title='Últimos Lançamentos'>
              <Table striped borderless>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {latestBalance.map(({ date, description, value }, key) => (
                    <tr key={key}>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey='future' title='Lançamentos Futuros'>
              <Table striped borderless>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {futureBalance.map(({ date, description, value }, key) => (
                    <tr key={key}>
                      <td>{date}</td>
                      <td>{description}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

export default AccountBalance;