import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconText = ({
  icon,
  children,
  color,
  textClassName = "h5 text-muted",
  size = 2,
}) => {
  return (
    <Row className="d-flex align-items-center">
      <Col xs={size} className="d-flex justify-content-center">
        <FontAwesomeIcon icon={icon} size={`${size}x`} color={color} />
      </Col>

      <Col xs={12 - size} className={`${textClassName}`}>
        {children}
      </Col>
    </Row>
  );
};

export default IconText;
