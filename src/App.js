import './App.css';
import AkacoinSection from './Component/pages/AkacoinSection';
import Banner from './Component/pages/Banner';
import Footer from './Component/pages/Footer';
import HeroSection from './Component/pages/HeroSection';
import NetworkStatistics from './Component/pages/NetworkStatistics';
import QuickStart from './Component/pages/QuickStart';
import YourWallet from './Component/pages/YourWallet';

function App() {
  return (
    <div >
      <HeroSection />
      <AkacoinSection/>
      <YourWallet/>
      <QuickStart/>
      <Banner/>
      <NetworkStatistics/>
      <Footer/>
    </div>
  );
}

export default App;
