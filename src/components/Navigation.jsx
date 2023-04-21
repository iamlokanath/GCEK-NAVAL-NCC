import React from 'react'
import './Navigation.css'
const Navigation = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/"><h5>GCEK NAVAL <span>NCC</span></h5></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link text-warning font-weight-bold" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="/">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="/">Achievements</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="/">Activities</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="/">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navigation
