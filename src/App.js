import { useState } from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import CenteredButton from "./components/CenteredButton";
import CardList from "./components/CardList";
import CreditCard from "./components/CreditCard";
import AccountModal from "./components/AccountModal";
import Institutional from "./components/Institutional";
import Footer from "./components/Footer";

import posts from "./data/posts";
import Faq from "./components/Faq";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Navigation handleCreateAccount={() => setShowModal(true)} />
      <Hero />
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton>Abra a sua conta</CenteredButton>
      <Institutional />
      <Faq />
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
