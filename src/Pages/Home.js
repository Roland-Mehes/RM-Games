import '../index.css';
import Hero from '../components/Landing/Hero';
import GamesSection from '../components/Landing/GamesSection';
import Benefits from '../components/Landing/Benefits';
import '../components/Landing/home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <GamesSection />
      <Benefits />
    </div>
  );
};

export default Home;
