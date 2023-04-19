import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
    <div className="lokanathcontact">
    <h2 className="text-center text-white font-weight-bold">Contact Us</h2>
    <p className="text-center text-white">Any questions or remarks? Just write a message!</p>
    </div>
{/* 
    <div className="lokanathbox bg-dark">
        <h4 className="text-white ml-3 lokanathemail">Email Us</h4>
        <p className="text-white ml-3">email to lokanath@gmail.com</p>
        <button type="button" className="btn btn-secondary my-2 ml-3 text-white font-weight">Email Us</button>
    </div> */}

<div className="d-flex justify-content-center align-items-center text-white text-center">
<div className="row">
  <div className="col-sm-6 mt-5">
    <div className="card bg-dark lokanathcontainer">
      <div className="card-body">
        <h5 className="card-title mt-4">Email Us</h5>
        <p className="card-text mt-4">email to lokanath@gmail.com</p>
        <a href="/" className="btn btn-primary mt-4 mb-4">Click Here</a>
      </div>
    </div>
  </div>
  <div className=" col-sm-6 mt-5">
    <div className="card bg-dark lokanathcontainer">
      <div className="card-body">
        <h5 className="card-title mt-4">Text Us</h5>
        <p className="card-text mt-4">text to<br/> +9190909090909</p>
        <a href="/" className="btn btn-primary mt-4 mb-4">Click Here</a>
      </div>
    </div>
  </div>
</div>

</div>

    </>
  )
}

export default Contact  

