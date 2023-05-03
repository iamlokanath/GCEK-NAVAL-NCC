import React from 'react'

import Iframe from 'react-iframe';
import './ContactUs.css'
const ContactUs = () => {
    return (
        <>
            <div className="site-heading text-center">
                <h2>Contact <span>Us</span></h2>
                <h4>Get In Touch With Us: Contact Our Team For Any Queries or Support</h4>
            </div>

            <div className="slide" id="slide5" data-slide="5" data-stellar-background-ratio="0.5">
                <div className="container clearfix">


                    <div className="content grid_12 contactmap" id="contact-map">
                        <div className="grid_4">
                            <h2>CONTACT</h2>
                            <p className="information"><span className="icon-location"> ADRESS: </span>Government College Of Engineering, Kalahandi, Bhawanipatna</p>
                            <p className="information"><span className="icon-phone-2"> TELEPHONE: </span>90 90 90 90 90 90</p>
                            <a className="btn" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gceknavalncc@gmail.com&su=Welcome%20to%20GCEK%20,NAVAL%20NCC%20,%20BHAWANIPATNA&body=">Send Email</a>
                            <div className="clear"></div>
                        </div>
                        <div className="grid_8 omega">
                            <div id="map_canvas"></div>
                            <Iframe
                                url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15004.951181141167!2d83.1063048!3d19.9143817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a24ef3382020aa3%3A0x6720328dfbfd451a!2sGovernment%20College%20Of%20Engineering%2CKalahandi(Autonomous)!5e0!3m2!1sen!2sin!4v1682068344935!5m2!1sen!2sin"
                                width="800"
                                height="600"
                                frameBorder="0"
                                allowFullScreen=""
                            />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default ContactUs
