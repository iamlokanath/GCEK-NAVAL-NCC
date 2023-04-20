import React from 'react'
import Photo from './new.jpg'
import './Slidebar.css'
const Slidebar = () => {
  return (
    <>
      {/* slidebar starts */}
      <div className="lokanathcontainer my-2">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={Photo} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Photo} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Photo} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* Slidebar ends */}
        <h4 className="text-white mt-3 ml-4">Join The World’s Largest Youth Organization</h4>
        <h4 className="text-white mt-2 ml-4"><span id="lokanathblue">NATIONAL CADET CORPS</span></h4>
        <button type="button" class="btn btn-dark my-2 text-primary font-weight-bold lokanathbtn">Join Us</button>
      </div>
    </>
  )
}

export default Slidebar