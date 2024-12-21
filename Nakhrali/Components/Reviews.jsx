import React from 'react';
import { BsEye, BsHeart } from 'react-icons/bs';
import './Pricecards.css'
import { BiRupee } from 'react-icons/bi';
import { FaShippingFast } from 'react-icons/fa';
import img1 from "../Images/review.jpg"
import img2 from "../Images/review2.jpg"
import img3 from "../Images/review3.jpg"
import img4 from "../Images/review2.jpg"
const Reviews = () => {
  return (
    <>
    <div className="heading container-fluid text-center " style={{color:"black",fontSize:"1.4rem",fontWeight:"400"}}>
    From Their Hearts To Ours
    </div>
    <div
      id="cardCarousel7"
      className="carousel slide container-fluid p-lg-5"
      data-bs-ride="carousel"
      data-bs-touch="true"  // Enable touch gestures
    >
      <div className="carousel-inner">
    {/* First Slide */}
    <div className="carousel-item active">
      <div className="row">
        {/* Card 1 */}
        <div className="col-4  mb-4">
          <div className="box text-center">
            <div className="img wrapper zoom-container iconsonHoverConatiner">
              <div className="main-box">
                <img
                  src={img1}
                  alt="Quick View 1"
                  className="zoom-image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              
            </div>
            
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-4  mb-4">
          <div className="box text-center">
            <div className="img wrapper zoom-container iconsonHoverConatiner">
              <div className="main-box">
                <img
                  src={img2}
                  alt="Quick View 2"
                  className="zoom-image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              
            </div>
          
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-4  mb-4">
          <div className="box text-center">
            <div className="img wrapper zoom-container iconsonHoverConatiner">
              <div className="main-box">
                <img
                  src={img3}
                  alt="Quick View 3"
                  className="zoom-image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
             
            </div>
            
            
          </div>
        </div>

       
        
      </div>
    </div>

    {/* Second Slide */}
    <div className="carousel-item">
      <div className="row">
        {/* Card 1 */}
        <div className="col-4  mb-4">
          <div className="box text-center">
            <div className="img wrapper zoom-container iconsonHoverConatiner">
              <div className="main-box">
                <img
                  src={img4}
                  alt="Quick View 1"
                  className="zoom-image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
             
            </div>
           
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-4  mb-4">
          <div className="box text-center">
            <div className="img wrapper zoom-container iconsonHoverConatiner">
              <div className="main-box">
                <img
                  src={img1}
                  alt="Quick View 2"
                  className="zoom-image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
             
            </div>
            
            
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-4  mb-4">
          <div className="box text-center">
            <div className="img wrapper zoom-container iconsonHoverConatiner">
              <div className="main-box">
                <img
                  src={img3}
                  alt="Quick View 3"
                  className="zoom-image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              
            </div>
           
           
          </div>
        </div>

       
      </div>
      
    </div>
  </div>

      {/* Carousel controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#cardCarousel7"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#cardCarousel7"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  );
};

export default Reviews;
