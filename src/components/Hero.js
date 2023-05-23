import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import logo from "../assets/logo__magic-pay--mobile.png";
import logoDesktop from "../assets/logo__magic-pay.png";
import './Hero.scss';

const Hero = () => {
  return (
    <Card className="text-center text-light hero">
      <Container>
        <Row>
          <Col lg className="text-lg-end mt-5">
            <Image className="d-lg-none" src={logo} alt="logo"/>
            <Image className="d-none d-lg-inline-block" src={logoDesktop} alt="logo" />
          </Col>

          <Col lg className="text-lg-start my-5">
            <p>Pague suas contas pelo nosso APP</p>
            <Button variant="outline-light">Abra sua conta</Button>
          </Col>
        </Row>
      </Container>
    </Card>
  )
}

export default Hero;