import { Col, Container, Image, Row } from "react-bootstrap";
import { faFacebookSquare, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/MAGbank.png";
import applestore from "../assets/applestore.png";
import googlestore from "../assets/googleplay.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center py-5">
          <Col xs={12} lg={6} className="text-lg-start">
            <Image src={logo} />
          </Col>

          <Col xs={12} lg={4} className="">
            <Image src={applestore} />
            <Image src={googlestore} className="ms-3 my-3 my-lg-0" />
          </Col>

           <Col xs={12} lg={2}>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebookSquare} color="#7c7c7c" size="2x"/>
            </a> 
            <FontAwesomeIcon icon={faTwitter} color="#7c7c7c" size="2x" className="ms-2"/>
            <FontAwesomeIcon icon={faYoutube} color="#7c7c7c" size="2x" className="ms-2"/>
          </Col>
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;