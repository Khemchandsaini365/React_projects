import React from 'react';
import { BsEye, BsHeart } from 'react-icons/bs';
import './Pricecards.css'
import { BiRupee } from 'react-icons/bi';
import { FaShippingFast } from 'react-icons/fa';
const BagCard = ({ img1, img2, img3, img4,img5,img6,img7,img8 }) => {
  return (
    <div
      id="cardCarousel"
      className="carousel slide container-fluid p-lg-5"
      data-bs-ride="carousel"
      data-bs-touch="true"  // Enable touch gestures
    >
      <div className="carousel-inner">
    {/* First Slide */}
    <div className="carousel-item active">
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-3  mb-4">
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
              <div className="hidden-box d-flex justify-content-between align-items-center px-4">
                <div style={{ fontSize: "1.4rem" }}>
                  <BsEye />
                </div>
                <div style={{ fontSize: "1.4rem" }}>
                  <BsHeart />
                </div>
              </div>
            </div>
            <div className='d-flex align-items-start flex-column gap-0' >
                <p className='text-muted' >Pepper Yellow Clutch </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><BiRupee/>2999 </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><FaShippingFast/> Ships in 4 days</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3  mb-4">
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
              <div className="hidden-box d-flex justify-content-between align-items-center px-4">
                <div style={{ fontSize: "1.4rem" }}>
                  <BsEye />
                </div>
                <div style={{ fontSize: "1.4rem" }}>
                  <BsHeart />
                </div>
              </div>
            </div>
          
            <div className='d-flex align-items-start flex-column gap-0' >
                <p className='text-muted' >Golden Glitz Clutch</p>
                <p className='fw-bold' style={{lineHeight:"0"}}><BiRupee/>2999 </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><FaShippingFast/> Ships in 4 days</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3  mb-4">
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
              <div className="hidden-box d-flex justify-content-between align-items-center px-4">
                <div style={{ fontSize: "1.4rem" }}>
                  <BsEye />
                </div>
                <div style={{ fontSize: "1.4rem" }}>
                  <BsHeart />
                </div>
              </div>
            </div>
            
            <div className='d-flex align-items-start flex-column gap-0' >
                <p className='text-muted' > Golden Dusk Potli </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><BiRupee/>2999 </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><FaShippingFast/> Ships in 4 days</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3  mb-4">
          <div className="box text-center">
            <div className="img wrapper zoom-container iconsonHoverConatiner">
              <div className="main-box">
                <img
                  src={img4}
                  alt="Quick View 4"
                  className="zoom-image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="hidden-box d-flex justify-content-between align-items-center px-4">
                <div style={{ fontSize: "1.4rem" }}>
                  <BsEye />
                </div>
                <div style={{ fontSize: "1.4rem" }}>
                  <BsHeart />
                </div>
              </div>
            </div>
            
            <div className='d-flex align-items-start flex-column gap-0' >
                <p className='text-muted' > Ruby Candy Clutch </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><BiRupee/>2999 </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><FaShippingFast/> Ships in 4 days</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    {/* Second Slide */}
    <div className="carousel-item">
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-3  mb-4">
          <div className="box text-center">
            <div className="img wrapper zoom-container iconsonHoverConatiner">
              <div className="main-box">
                <img
                  src={img5}
                  alt="Quick View 1"
                  className="zoom-image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="hidden-box d-flex justify-content-between align-items-center px-4">
                <div style={{ fontSize: "1.4rem" }}>
                  <BsEye />
                </div>
                <div style={{ fontSize: "1.4rem" }}>
                  <BsHeart />
                </div>
              </div>
            </div>
           
            <div className='d-flex align-items-start flex-column gap-0' >
                <p className='text-muted' >Cobalt Charm Chanderi  </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><BiRupee/>2999 </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><FaShippingFast/> Ships in 4 days</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3  mb-4">
          <div className="box text-center">
            <div className="img wrapper zoom-container iconsonHoverConatiner">
              <div className="main-box">
                <img
                  src={img6}
                  alt="Quick View 2"
                  className="zoom-image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="hidden-box d-flex justify-content-between align-items-center px-4">
                <div style={{ fontSize: "1.4rem" }}>
                  <BsEye />
                </div>
                <div style={{ fontSize: "1.4rem" }}>
                  <BsHeart />
                </div>
              </div>
            </div>
            
            <div className='d-flex align-items-start flex-column gap-0' >
                <p className='text-muted' > Forest Fiesta  </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><BiRupee/>2999 </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><FaShippingFast/> Ships in 4 days</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3  mb-4">
          <div className="box text-center">
            <div className="img wrapper zoom-container iconsonHoverConatiner">
              <div className="main-box">
                <img
                  src={img7}
                  alt="Quick View 3"
                  className="zoom-image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="hidden-box d-flex justify-content-between align-items-center px-4">
                <div style={{ fontSize: "1.4rem" }}>
                  <BsEye />
                </div>
                <div style={{ fontSize: "1.4rem" }}>
                  <BsHeart />
                </div>
              </div>
            </div>
           
            <div className='d-flex align-items-start flex-column gap-0' >
                <p className='text-muted' >Silver Mist </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><BiRupee/>2999 </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><FaShippingFast/> Ships in 4 days</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3  mb-4">
          <div className="box text-center">
            <div className="img wrapper zoom-container iconsonHoverConatiner">
              <div className="main-box">
                <img
                  src={img8}
                  alt="Quick View 4"
                  className="zoom-image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="hidden-box d-flex justify-content-between align-items-center px-4">
                <div style={{ fontSize: "1.4rem" }}>
                  <BsEye />
                </div>
                <div style={{ fontSize: "1.4rem" }}>
                  <BsHeart />
                </div>
              </div>
            </div>
            <div className='d-flex align-items-start flex-column gap-0' >
                <p className='text-muted' >Shab Dark Blue </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><BiRupee/>2999 </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><FaShippingFast/> Ships in 4 days</p>
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
        data-bs-target="#cardCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#cardCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default BagCard;
