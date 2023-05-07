import React from "react";
// import Photo from "./lokanath.jpg";
import Ashok from "./Image/Ashok.jpeg";
import Akash from "./Image/Akash.jpeg";
import Prabin from "./Image/prabin.jpeg";
import Tushar from "./Image/tushar.jpg";
import Ghana from "./Image/ghana.png";
import Suhkla from './Image/SUHKLA.png'
import "./Acheiviements.css";
const Achievements = () => {
  return (
    <>
      <div>
        {/* <!-- Team --> */}
        <div className="site-heading text-center" id="achievements">
          <h2>
            Our <span>Achivements</span>
          </h2>
          <h4>
            Celebrating Our Accomplishments: A Showcase of Our Achievements
          </h4>
        </div>

        <section id="team" className="pb-5">
          <div className="container">
            <div className="row">
              {/* <!-- Team member --> */}
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div
                  className="image-flip"
                  ontouchstart="this.classNameList.toggle('hover');"
                >
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p>
                            <img
                              className=" img-fluid"
                              src={Ashok}
                              alt="lokana"
                            />
                          </p>
                          <h4 className="card-title">Ashok Kumar Panda</h4>
                          <p className="card-text">
                            Senior Cadet Captain Ashok Kumar Panda attended
                            Republic Day Camp 2022.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">RDC 2022</h4>
                          <p className="card-text">
                            The first RDC Return of GCEK Naval NCC,
                            Bhawanipatna, SCC Ashok Kumar Panda. He represented
                            NCC Directorate Odisha in RDC2022 New Delhi as Best
                            Cadet(SD Navy)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ./Team member --> */}

              {/* <!-- Team member --> */}
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div
                  className="image-flip"
                  ontouchstart="this.classNameList.toggle('hover');"
                >
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p>
                            <img
                              className=" img-fluid"
                              src={Akash}
                              alt="lokana"
                            />
                          </p>
                          <h4 className="card-title">Akash Samantaray</h4>
                          <p className="card-text">
                            Senior Cadet Akash Samantaray <br />
                            attended the Republic Day Camp 2023.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">RDC 2023</h4>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quo laudantium similique beatae fugit
                            voluptatibus quam? Veritatis officia enim
                            voluptatibus iste. In voluptate alias nulla modi
                            tempore qui a perferendis porro...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ./Team member --> */}

              {/* <!-- Team member --> */}
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div
                  className="image-flip"
                  ontouchstart="this.classNameList.toggle('hover');"
                >
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p>
                            <img
                              className=" img-fluid"
                              src={Prabin}
                              alt="lokana"
                            />
                          </p>
                          <h4 className="card-title">Prabin Tripathy</h4>
                          <p className="card-text">
                            Senior Cadet Prabin Tripathy attended All India Nau
                            Sainik Camp 2023.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">AINSC 2023</h4>
                          <p className="card-text">
                            Attended All India Nau Sainik Camp. It is the most
                            prestigious Naval NCC camp, where 612 selected NCC
                            cadets from all states and union territories compete
                            on aspect of Seamanship,Boat Pulling, Boat
                            Rigging,Drill,Ship Modeling,Best cadet and many more
                            during the camp.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ./Team member --> */}

              {/* <!-- Team member --> */}
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div
                  className="image-flip"
                  ontouchstart="this.classNameList.toggle('hover');"
                >
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p>
                            <img
                              className=" img-fluid"
                              src={Tushar}
                              alt="lokana"
                            />
                          </p>
                          <h4 className="card-title">Tushar Ranjan Vati</h4>
                          <p className="card-text">
                            Cadet Captain Tushar Ranjan Vati attended SYTC,
                            Mumbai, 2022
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">SYTC, 2022</h4>
                          <p className="card-text">
                            Cadet Captain Tushar Ranjan Vati was selected from
                            4(O) Naval Unit, NCC, Bhawanipatna for National
                            Cadet Corps Special Yatching Training Canp, Mumbai,
                            2022
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ./Team member --> */}


              {/* <!-- Team member --> */}
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div
                  className="image-flip"
                  ontouchstart="this.classNameList.toggle('hover');"
                >
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p>
                            <img
                              className=" img-fluid"
                              src={Suhkla}
                              alt="lokana"
                            />
                          </p>
                          <h4 className="card-title">Sanjay Prasad Shukla</h4>
                          <p className="card-text">
                          Cadet Sanjay Prasad Shukla have attended the All India Ship Attachment Camp Vizag
                          </p>
                          {/* <a href="/" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a> */}
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">AISAC</h4>
                          <p className="card-text">
                          Cadets of Naval Wing embark on Indian Naval Ships at Mumbai, Kochi and Visakhapatnam twice a year for Sea Training and Attachment for a period of 12 days.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ./Team member --> */}

              
              {/* <!-- Team member --> */}
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div
                  className="image-flip"
                  ontouchstart="this.classNameList.toggle('hover');"
                >
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p>
                            <img
                              className=" img-fluid"
                              src={Ghana}
                              alt="lokana"
                            />
                          </p>
                          {/* <h4 className="card-title">Ghana Satnami</h4> */}
                          <p className="card-text">
                            Three Cadets Of GCEK Naval NCC, Bhawanipatna have
                            submitted Dayara Bugyal,Uttrakhand on 24 Jan 2021.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          {/* <h4 className="card-title">RDC</h4> */}
                          <p className="card-text">
                            Cadet Baidyanath Sinha,Cadet Siddhartha Kesharee
                            Pradhan,Cadet Ghana Satnami scaled at the height of
                            12,500 ft from sea level , hoisted the National Flag
                            having extreme cold of -5° to -10°C and dedicated
                            crown to the our Covid Warriors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ./Team member --> */}
            </div>
          </div>
        </section>
        {/* <!-- Team --> */}
      </div>
    </>
  );
};

export default Achievements;
