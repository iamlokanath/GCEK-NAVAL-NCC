import About from './components/About';
import Activities from './components/Activities';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Achievements from './components/Achievements';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navigation/>
    <Home/>
    <About/>
    <Achievements/> 
    <Activities/>
    <ContactUs/>
    <Footer/>
    </>
  );
}

export default App;
