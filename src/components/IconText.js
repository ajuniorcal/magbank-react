import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconText = ({ 
  icon, 
  children, 
  color = '#fff',
  className,  
  textClassName = '',
  size = 1,
  onClick
}) => {
  return (
    <Row className={`d-flex align-items-center ${className}`} onClick={onClick}>
      <Col xs={size} className='d-flex justify-content-center'>
        <FontAwesomeIcon icon={icon} size={`${size}x`} color={color} />
      </Col>
        
      <Col xs={12 - size} className={`${textClassName} m-0`}>
        {children}
      </Col>
    </Row>
  )
};

export default IconText;