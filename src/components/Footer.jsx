import React from 'react'

import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="lokanathfooter w-100 p-4">
                <h4 className="text-left text-dark mt-2 ml-5">Find Us On <span>Social Media</span></h4>
                <h5 className='lokanth ml-5'>Fell free to connect with us</h5>
                <div className="lokanmiddle ml-4">
                    <a className="lokanbtn" href="https://www.facebook.com/profile.php?id=100071480734923">
                        <i className="fa fa-facebook-f"></i>
                    </a>
                    <a className="lokanbtn" href="/">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="lokanbtn" href="/">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a className="lokanbtn" href="/">
                        <i className="fa fa-google-plus"></i>
                    </a>
                </div>
                <p className="lokanathparagraph text-dark">&copy;all copyrights reserved @gceknavalncc2023. Website is designed and developed by  Lokanath Panda, CSE, 2nd Year, GCEK</p>
                
            </div>
        </>
    )
}

export default Footer