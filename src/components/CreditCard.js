import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import creditCard from '../assets/credit-card.jpg';
import './CreditCard.scss';
import IconText from './IconText';
import { faCreditCard, faMobile, faShoppingCart, faWallet } from '@fortawesome/free-solid-svg-icons';

const CreditCard = () => {
  return (
    <Container className='my-5'>
      <Row>
        <Col xs={12} lg={7} className='mb-5 mb-lg-0 px-5 px-lg-0'>
          <Row>
            <h2 className='my-5 credit-card-title'>Cartão de crédito</h2>
          </Row>

          <Row>
            <Col xs={12} lg={6} className='mb-4'>
              <IconText 
                icon={faCreditCard} 
                color='#f05656' 
                textClassName='h5 text-muted' 
                size={2}>
                Crédito pessoal
              </IconText>
            </Col>
            <Col xs={12} lg={6} className='mb-4'>
              <IconText icon={faShoppingCart} color='#f05656' textClassName='h5 text-muted' size={2}>
                Pagamentos Online
              </IconText>
            </Col>
            <Col xs={12} lg={6} className='mb-4'>
              <IconText icon={faMobile} color='#f05656' textClassName='h5 text-muted' size={2}>
                APP
              </IconText>
            </Col>
            <Col xs={12} lg={6} className='mb-4'>
              <IconText icon={faWallet} color='#f05656' textClassName='h5 text-muted' size={2}>
                Carteira Digital
              </IconText>
            </Col>
          </Row>
        </Col>

        <Col xs={12} lg={5}>
          <Image src={creditCard} alt='Imagem cartão de credito' fluid />
        </Col>
      </Row>
    </Container>
  )
}

export default CreditCard;