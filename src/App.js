import '../src/assets/css/App.css';
import AboutUs from './components/AboutUs';
import ChooseUs from './components/ChooseUs';
import HeroSec from './components/HeroSec';

function App() {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <HeroSec />
      <ChooseUs />
      <AboutUs />
    </div>
  );
}

export default App;
