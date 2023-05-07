import About from "./components/About";
import Activities from "./components/Activities";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Achievements from "./components/Achievements";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

// import React, {useEffect} from "react";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/achievements" element={<Achievements />}></Route>
          <Route path="/activities" element={<Activities />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
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
    </div>
  );
}

export default App;
