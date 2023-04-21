import About from './About';
import Activities from './Activities';
import './App.css';
import Home from './Home';
import Navigation from './Navigation';
import Achievements from './components/Achievements';
// import Contact from './components/Contact';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import Slidebar from './components/Slidebar';

function App() {
  return (
    <>
    <Navigation/>
    {/* <Navbar /> */}
    <Home/>
    {/* <Slidebar/> */}
    <About/>
    <Achievements/> 
    <Activities/>
    <ContactUs/>
    {/* <Contact/> */}
    <Footer/>
    </>
  );
}

export default App;
