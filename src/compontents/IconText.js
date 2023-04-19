import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconText = ({ icon, children }) => {
  return (
    <Row>
      <Col lg={2}>
        <FontAwesomeIcon icon={icon} />
      </Col>

      <Col>{children}</Col>
    </Row>
  );
};

export default IconText;
