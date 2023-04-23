import React from 'react'
import Photo from './slider.jpg'
import Photo2 from './slider2.jpg'
import Photo3 from './slider4.jpg'
const Home = () => {
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
              <img className="d-block w-100" src={Photo2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Photo3} alt="Third slide" />
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
        </div>
        {/* Slidebar ends */}

    </>
  )
}

export default Home
