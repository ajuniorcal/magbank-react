import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';

import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState();
  const [account, setAccount] = useState();
  const isLogged = name && account;
  const fakeAuth = {
    login: (name, account, cb) => {
      setName(name);
      setAccount(account);
      setTimeout(cb, 100);
    },
    logout: (cb) => {
      setName();
      setAccount();
      setTimeout(cb, 100);
    }
  };

  const PrivateRoute = ({ Component, logged}) => {
    return logged ? <Component name={name} account={account} /> : <Navigate to='/login' />
  }

  return (
    <div className="App">
      <Navigation handleCreateAccount={() => setShowModal(true)} logged={isLogged} auth={fakeAuth} />
      <Routes>
        <Route path='/' element={<Home handleClick={() => setShowModal(true)} />}></Route>
        <Route path='/login' element={<Login auth={fakeAuth} />}></Route>
        <Route path='/dashboard/*' element={<PrivateRoute Component={Dashboard} logged={isLogged} />} />
      </Routes>
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
