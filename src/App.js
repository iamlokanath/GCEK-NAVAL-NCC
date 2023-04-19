import About from './About';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Slidebar from './components/Slidebar';

function App() {
  return (
    <>
    <Navbar />
    <Slidebar/>
    <About />
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
