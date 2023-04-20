import React from 'react'
import './About.css'
import './test1.css'
// import Photo from 'E:/Code with Lokanath/Project/@2023/React/gcek-ncc/src/components/lokanath.jpg'
const About = () => {
    return (
        <>
            <div className="site-heading text-center">
                <h2>About <span>Us</span></h2>
                <h4>GCEK Naval NCC, Bhawanipatna</h4>
            </div>
            

            <div className="section section-margin">
                <div className="container">
                    <div className="row m-b-n30 align-items-center">
                        <div className="col-lg-6 m-b-30 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1100">
                            <div className="about-content mw-100">
                                <h2 className="title">Fast Service, Talented People <br /> Secure Payment</h2>
                                <span></span>
                                <p>Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur mag ni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisq uam est, qui dolorem ipsum quia dolor sit amet, consectetur some of the main Problems some of the main need more imporvement to solve the business policy</p>
                                <p>Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur mag ni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisq uam est, qui dolorem ipsum quia dolor sit amet, consectetur some of the main Problems some of the main need more imporvement to solve the business policy</p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-first order-lg-last m-b-30 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1500">
                            <div className="about-image service-layer-image ms-auto">
                                <img className="about-image-1 img-fluid" src="https://template.hasthemes.com/triball/triball/assets/images/about/about-2.png" alt="About" />
                                <img className="about-image-2 img-fluid" src="https://template.hasthemes.com/triball/triball/assets/images/about/about-3.png" alt="About" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About