import { Container, Row, Col, Table } from 'react-bootstrap';

const AccountHistory = ({ data }) => {
  const { history } = data;

  return (
    <Container>
      <Row>
        <Col xs={12} lg={12}>
          <h3>Extrato de conta corrente</h3>
          <Table>
            <tbody>
              {history.map((entry, key) => (
                <tr key={key}>
                  <td><h2>{entry}</h2></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default AccountHistory;