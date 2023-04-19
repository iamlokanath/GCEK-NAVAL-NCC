import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      {/* navigation bar starts */}
      <nav className="navbar navbar-expand-lg navbar-dark lokanathnavbar">
        <a className="navbar-brand text-white font-weight-bold " href="/">GCEK NAVAL NCC</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-white font-weight-bold" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white font-weight-bold" href="/">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white font-weight-bold" href="/">Our Achievements</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white font-weight-bold" href="/">Activities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white font-weight-bold" href="/">Contact Us</a>
            </li>

          </ul>

        </div>
      </nav>
      {/* navigation bar ends */}


    </>
  )
}

export default Navbar