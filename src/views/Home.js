import Hero from '../components/Hero';
import CenteredButton from '../components/CenteredButton';
import CardList from '../components/CardList';
import CreditCard from '../components/CreditCard';
import Institutional from '../components/Institutional';
import Faq from '../components/Faq';

import posts from '../data/posts';

const Home = ({ handleClick }) => {
  return (
    <>
      <Hero />
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton onClick={handleClick}>
        Abra a sua conta
      </CenteredButton>
      <Institutional />
      <Faq />
    </>
  )
}

export default Home;