import '../src/assets/css/App.css';
import AboutUs from './components/AboutUs';
import BestExperienceSec from './components/BestExperienceSec';
import ChooseUs from './components/ChooseUs';
import HeroSec from './components/HeroSec';
import OurExperienceSec from './components/OurExperienceSec';
import PortfolioSec from './components/PortfolioSec';
import Services from './components/Services';
import TheNewsSec from './components/TheNewsSec';

function App() {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <HeroSec />
      <ChooseUs />
      <AboutUs />
      <Services />
      <BestExperienceSec />
      <TheNewsSec />
      <OurExperienceSec />
      <PortfolioSec />
    </div>
  );
}

export default App;
