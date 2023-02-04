import './App.css';
import About from './components/About/About';
import Achievements from './components/Achievements/Achievements';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import Trust from './components/Trust/Trust';
import WorkDone from './components/WorkDone/WorkDone';

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Achievements/>
      <WorkDone/>
      <Trust/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
