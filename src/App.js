import '../src/assets/css/App.css';
import AboutUs from './components/AboutUs';
import BestExperienceSec from './components/BestExperienceSec';
import ChooseUs from './components/ChooseUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import HeroSec from './components/HeroSec';
import OurClientSec from './components/OurClientSec';
import OurExperienceSec from './components/OurExperienceSec';
import PortfolioSec from './components/PortfolioSec';
import Preloader from './components/Preloader';
import ReviewsSec from './components/ReviewsSec';
import Services from './components/Services';
import TheNewsSec from './components/TheNewsSec';
import { usePreloader } from './components/common/Hooks';
function App() {
  const isLoading = usePreloader();
  return (
    <>
      {isLoading ? (<Preloader />) : (
        <div className='max-w-[1920px] mx-auto'>
          <HeroSec />
          <ChooseUs />
          <AboutUs />
          <Services />
          <BestExperienceSec />
          <TheNewsSec />
          <OurExperienceSec />
          <PortfolioSec />
          <ReviewsSec />
          <OurClientSec />
          <ContactUs />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
