import React from 'react';
import img1 from "../Images/Quickview1.png";
import img2 from "../Images/Quickview2.png";

const Quickviewcards = ({img1,img2}) => {
  return (
    <>
      <div className="container-fluid p-lg-5">
        <div className="row justify-content-center">
          
          {/* Card 1 */}
          <div className="col-12 col-md-6 mb-4">
            <div className="box text-center">
              <div className="img zoom-container ">
                <img
                  src={img1}
                  alt="Quick View 1"
                  className="zoom-image"
                  style={{ width: "100%", maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div>
                <button className="btn btn-outline-dark mt-2">Quick View</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 mb-4">
            <div className="box text-center">
              <div className="img zoom-container">
                <img
                  src={img2}
                  alt="Quick View 2"
                  className="zoom-image"
                  style={{ width: "100%", maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div>
                <button className="btn btn-outline-dark mt-2">Quick View</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Quickviewcards;
