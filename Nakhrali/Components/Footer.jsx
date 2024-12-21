import React from 'react';
import { FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';
// import NakhraliLogo from "../Images/Nakhrali_Logo.png";
import pay1 from "../Images/payments1.png";
import pay2 from "../Images/payments2.svg";
import pay3 from "../Images/payments3.svg";
import pay4 from "../Images/payments4.svg";
import pay5 from "../Images/payments5.png";
import "./footer.css";
import App from "../Images/App.svg"
import Andriod from "../Images/android-app.svg"
const Footer = () => {
  return (
    <>

<div className="my-2">
        <div
          className="heading container-fluid text-center mb-2"
          style={{ color: "black", fontSize: "1.4rem", fontWeight: "400" }}
        >
          Subscribe to our Newsletter:
        </div>
        <div className=" d-flex justify-content-center gap-2">
          <input type="text " className=" col-5" />
          <button className="btn btn-dark"> SUBSCRIBE</button>
        </div>
      </div>


      <div className="downlaod pt-2 " style={{backgroundColor:"#3e3e3e"}}>
      <div
          className=" container-fluid text-center mb-2"
          style={{ color: "white", fontSize: "1.4rem", fontWeight: "400" }}
        >
         Download Our App
        </div>

      <div className="imgs d-flex justify-content-center gap-2 pb-2 " style={{borderBottom:"1px solid white"}}>
        <div className="item">
          <img src={App} alt="" />
        </div>
        <div className="item">
          <img src={Andriod} alt="" />
        </div>
      </div>
      </div>
      <div className="outer py-3" style={{ backgroundColor: "#3e3e3e", color: "white" }}>
        <div className='outer-box d-flex flex-column flex-sm-row'>
          {/* Logo and Social Media */}
          <div className="one col-12 col-sm-5 d-flex flex-column justify-content-center align-items-center">
            <div className="logo">
              <div style={{ maxWidth: "300px" }}>
              Logo
              </div>
              <div className="socil d-flex gap-3 my-4" style={{ fontSize: "1.4rem" }}>
                <FaInstagram />
                <FaPinterest />
                <FaYoutube />
              </div>
            </div>
          </div>

          {/* Information, Company, Customer Service Sections */}
          <div className="two col-12 col-sm-7 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-evenly mt-4 mt-sm-0">
            <div className="box mb-4 mb-sm-0 d-flex flex-column align-items-center">
              <h6 className='h6'>Information</h6>
              <p className="d-none d-sm-block">About Us</p>
            </div>
            <div className="box mb-4 mb-sm-0 d-flex flex-column align-items-center">
              <h6 className='h6'>Our Company</h6>
              <p className="d-none d-sm-block">Photo Gallery</p>
              <p className="d-none d-sm-block">Testimonial</p>
              <p className="d-none d-sm-block">Blog</p>
            </div>
            <div className="box d-flex flex-column align-items-center">
              <h6 className='h6'>Customer Service</h6>
              <p className="d-none d-sm-block">Contact</p>
              <p className="d-none d-sm-block">FAQ</p>
              <p className="d-none d-sm-block">Shipping Policy</p>
              <p className="d-none d-sm-block">Exchange/Refund</p>
              <p className="d-none d-sm-block">Cancellation Policy</p>
              <p className="d-none d-sm-block">Track Order</p>
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="three">
          <div className="payments d-flex justify-content-center gap-2 mt-4">
            <div className="boxs" style={{ width: "50px" }}>
              <img src={pay1} width={"100%"} alt="Payment Method 1" />
            </div>
            <div className="boxs" style={{ width: "50px" }}>
              <img src={pay2} width={"100%"} alt="Payment Method 2" />
            </div>
            <div className="boxs" style={{ width: "50px" }}>
              <img src={pay3} width={"100%"} alt="Payment Method 3" />
            </div>
            <div className="boxs" style={{ width: "50px" }}>
              <img src={pay4} width={"100%"} alt="Payment Method 4" />
            </div>
            <div className="boxs" style={{ width: "50px" }}>
              <img src={pay5} width={"100%"} alt="Payment Method 5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
