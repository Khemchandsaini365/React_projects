import React from 'react';
import img1 from "../Images/CardQuickview1.jpg";
import img2 from "../Images/CardQuickview2.jpg";
import img3 from "../Images/CardQuickview4.jpg";
import img4 from "../Images/CardQuickview3.jpg";

const CardQuickview = () => {
  return (
    <>
      <div className="container-fluid p-lg-5 ">
        <div className="row justify-content-center">
          
          {/* Card 1 */}
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="box text-center">
              <div className="img zoom-container">
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
          <div className="col-12 col-sm-6 col-md-3 mb-4">
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

          {/* Card 3 */}
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="box text-center">
              <div className="img zoom-container">
                <img
                  src={img3}
                  alt="Quick View 3"
                  className="zoom-image"
                  style={{ width: "100%", maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div>
                <button className="btn btn-outline-dark mt-2">Quick View</button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="box text-center">
              <div className="img zoom-container">
                <img
                  src={img4}
                  alt="Quick View 4"
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

export default CardQuickview;
