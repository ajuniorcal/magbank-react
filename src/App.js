import "./App.css";

import Navigation from "./compontents/Navigation";
import Hero from "./compontents/Hero";
import CenteredButton from "./compontents/CenteredButton";
import CardList from "./compontents/CardList";
import CreditCard from "./compontents/CreditCard";

import posts from "./data/posts";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton>Abra a sua conta</CenteredButton>
    </div>
  );
}

export default App;
