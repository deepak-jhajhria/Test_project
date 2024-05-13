import '../src/assets/css/App.css';
import AboutUs from './components/AboutUs';
import BestExperienceSec from './components/BestExperienceSec';
import ChooseUs from './components/ChooseUs';
import HeroSec from './components/HeroSec';
import Services from './components/Services';

function App() {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <HeroSec />
      <ChooseUs />
      <AboutUs />
      <Services />
      <BestExperienceSec />
    </div>
  );
}

export default App;
