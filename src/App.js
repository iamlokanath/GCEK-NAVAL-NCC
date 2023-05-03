import About from "./components/About";
import Activities from "./components/Activities";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Achievements from "./components/Achievements";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      {/* <Router>
        <Routes> */}
          {/* <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<About />}></Route>
          <Route path="/" element={<Achievements />}></Route>
          <Route path="/" element={<Activities />}></Route>
          <Route path="/" element={<ContactUs />}></Route>
          <Route path="/" element={<Footer />}></Route>
          <Route
            path="*"
            element={<div className="NoPage">No Page Found</div>}
          ></Route> */}
          <Home />
          <About />
          <Achievements />
          <Activities />
          <ContactUs />
          <Footer />
        {/* </Routes>
      </Router> */}
    </>
  );
}

export default App;
