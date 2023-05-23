import { useState } from "react";
import { Link, Routes, Route } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import './Dashboard.scss';
import AccountBalance from "../components/AccountBalance";
import AccountPayments from "../components/AccountPayments";
import AccountHistory from "../components/AccountHistory";

const Dashboard = ({ className, name, account }) => {
  const [activeLink, setActiveLink] = useState(0);

  const links = [
    { text: 'Minha Conta', path: '' },
    { text: 'Pagamentos', path: 'payments' },
    { text: 'Extrato', path: 'history' },
  ];

  const data = {
    latestBalance: [
      { date: '22/07', description: 'SAQUE 24h 012345', value: '300,00' },
      { date: '21/07', description: 'SUPERMERCADO 02323626', value: '275,00' },
      { date: '20/07', description: 'NETFLIX 235236', value: '30,00' },
      { date: '15/07', description: 'FARMÁCIA 12125', value: '350,00' },
      { date: '15/07', description: 'FARMÁCIA 12125', value: '350,00' },
    ],
    futureBalance: [
      { date: '22/08', description: 'SALÁRIO 012345', value: '3000,00' },
      { date: '21/08', description: 'IMAGINE 02323626', value: '275,00' },
      { date: '20/08', description: 'NETFLIX 235236', value: '30,00' },
      { date: '15/08', description: 'FARMÁCIA 12125', value: '350,00' },
    ],
    history: ['histórico 1', 'histórico 2'],
  };

  return (
    <Container className={`dashboard py-5 ${className ? className : ''}`}>
      <Row className='align-items-center mb-5'>
        <Col xs={1}>
          <span className='dashboard__user-avatar'>
            <FontAwesomeIcon icon={faCircle} size='5x' color='#f8f9fa' />
            <FontAwesomeIcon
              className='dashboard__user-icon'
              icon={faUser}
              size='3x'
              color='#7c7d7d'
            />
          </span>
        </Col>
        <Col xs={11}>
          <h4>{name}</h4>
          <p className='text-muted'>{account}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={2}>
          {links.map(({ text, path }, key) => (
            <Link className='dashboard__link' to={path} key={key}>
              <Button
                className={`dashboard__button text-left ${key === activeLink ? 'dashboard__button--active' : ''
                  }`}
                variant='link'
                size='lg'
                block="true"
                onClick={() => setActiveLink(key)}
              >
                {text}
              </Button>
            </Link>
          ))}
        </Col>

        <Col xs={12} lg={10}>
          <Routes>
            <Route path='/payments' element={<AccountPayments />} />
            <Route path='/history' element={<AccountHistory data={data} />} />
            <Route path='/' element={<AccountBalance data={data} />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;