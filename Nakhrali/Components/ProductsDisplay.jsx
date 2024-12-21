import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import {
  FaAngleDown,
  FaFacebook,
  
  FaLinkedin,
  FaShippingFast,
  FaStar,

} from "react-icons/fa";
import {
  
  BsCurrencyRupee,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";
import { FaX, FaXTwitter } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Sizebuttons from "./SizeBUttons";
import sizeChart from "../Images/Sizechart.svg";
import QuantityInput from "./Quntity";
import "./checkbox.css";

import Footer from "./Footer";
import ProductDisplaySlide from "./DisplayProCarousel";
import Carousel from "./Mobilecarousel";
import BootstrapCarousel from "./BootstrapCarousel";


const ProductsDisplay = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <Navbar />
        <hr />
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item" onClick={handleclick}>
                Home
              </li>
              <li class="breadcrumb-item">Saree</li>
              <li class="breadcrumb-item " aria-current="page">
                Shab Dark Blue Saree
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="item-container d-flex flex-column flex-sm-row justify-content-between p-1">

        <div className="left  col-sm-12 col-md-6 col-lg-6 mb-sm-5">
        <div className="mb-5 me-3 d-none d-md-block">
  {/* Custom Carousel for Tablet and Larger Devices */}
  <Carousel />
</div>

<div className="mb-5 me-3 d-block d-md-none ">
  {/* Bootstrap Carousel for Mobile Devices */}
  <BootstrapCarousel />
</div>

          
          <div className="shareProduct d-flex justify-content-center  align-items-center gap-2 " style={{fontSize:"20px"}}>
            <div style={{fontSize:"15px"}}>Share:</div>

            <FaFacebook />
            <BsInstagram />
            <BsWhatsapp />
            <FaXTwitter />
            <FaLinkedin />
          </div>
        </div>

        <div className="right  col-sm-12 col-md-6 col-lg-6">
          <div className="MainDetails   p-2 p-lg-2">
            <div className="Name">
              <div style={{ fontSize: "1.4rem" }}>Shab Dark Blue Saree </div>
            </div>
            <div
              className="hsncodes d-flex justify-content-between align-items-center p-0 m-0"
              style={{ fontSize: "14px" }}
            >
              <p className="p-0 m-0">SKU: 161v-10684, 1615-9860</p>
              <p className="d-flex justify-content-center align-items-center p-0 m-0">
                <div style={{ fontSize: "22px" }}>
                  <CiHeart />
                </div>
                <div className="pt-2">Add to Wishlist</div>
              </p>
            </div>
            <div
              className="ratings  d-flex justify-content-between align-items-center"
              style={{ marginBottom: "12px" }}
            >
              <div style={{ color: "gold" }} className="py-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div>
                Rating5/5 based on 25 reviews
                <FaAngleDown />
              </div>
            </div>
            <div
              className="d-flex  align-items-center "
              style={{ height: "14px" }}
            >
              <p style={{ fontSize: "14px" }}>
                M.R.P.:<span></span>{" "}
              </p>

              <p style={{ fontSize: "16px", fontWeight: "500" }}>
                <BsCurrencyRupee />
                6,495.00
              </p>
            </div>
            <div style={{ fontSize: "14px", height: "10px" }}>
              {" "}
              <p>(Inclusive of all taxes)</p>
            </div>
            <hr />
            <div style={{ fontSize: "14px" }}>
              Country of Origin: <span className="fw-semibold">India</span>
            </div>
            <hr />
            <div
              className="smallDescription"
              style={{ fontSize: "14px", marginBottom: "10px" }}
            >
              Elevate your elegance with the Shab Dark Blue Saree. This
              exquisite drape features intricate embroidery and a rich hue,
              perfect for any festive occasion
            </div>
            <div className="size">
              <p>Size:</p>
              <div className="sizeboxes">
                <Sizebuttons />
              </div>
            </div>
            <div className="size d-flex gap-2">
              <div style={{ maxWidth: "40px" }}>
                <img src={sizeChart} alt="" width={"100%"} />
              </div>
              <p className="text-body-secondary">Size chart</p>
            </div>
            <div>
              Quantity:
              <div style={{ width: "110px" }}>
                <QuantityInput />
              </div>
            </div>

            <div className="addons d-flex flex-column justify-content-between mb-3">
              <p className="p-0 " style={{ height: "15px" }}>
                Add-ons
              </p>

              <div className="d-flex gap-2" style={{ fontSize: "14px" }}>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <div>
                  Petticoat @{" "}
                  <span>
                    <BsCurrencyRupee />
                    799.00
                  </span>
                </div>
              </div>
              <div className="d-flex gap-2" style={{ fontSize: "14px" }}>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <div>
                  Pre Drape This Saree @{" "}
                  <span>
                    <BsCurrencyRupee />
                    899.00
                  </span>
                </div>
              </div>
              <div className="d-flex gap-2" style={{ fontSize: "14px" }}>
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <div>
                  Fall & Pico. (Its a Free Gift For Our Beloved Customers) @
                  0.00
                </div>
              </div>
            </div>
            <div className="btns  d-flex flex-column justify-content-between  col-sm-12 col-md-12 col-lg-6 gap-3 mb-3">
              <button
                type="button"
                class="btn btn-dark"
                style={{ fontSize: "12px" }}
              >
                ADD TO CART
              </button>
              <button
                type="button"
                class="btn btn-outline-dark"
                style={{ fontSize: "12px" }}
              >
                BUY NOW
              </button>
            </div>
            <div className="btns  d-flex flex-column justify-content-between col-sm-12 col-md-12 col-lg-6 gap-3">
              <button
                type="button"
                class="btn btn-light"
                style={{ fontSize: "14px" }}
              >
                {" "}
                <span style={{ color: "green" }}>
                  <FaShippingFast />
                </span>{" "}
                Ships In <span style={{ color: "green" }}>2</span> Business Days
              </button>
            </div>
            <div className="description">
              <p>Description</p>
              <p style={{ fontSize: "13px" }}>
                SIZES ABOVE M ARE MADE ON ORDER AND MAY TAKE 30 DAYS
              </p>
              <p style={{ fontSize: "14px", fontWeight: "600" }}>STYLE TOUCH</p>
              <p style={{ fontSize: "13px" }}>
                You can always add contemporary influencer-inspired Jewellery,
                Readymade blouse and Juttis separately from our collection!
              </p>
              <p style={{ fontSize: "14px", fontWeight: "600" }}>
                BESPOKE ADVICE
              </p>
                <p style={{ fontSize: "13px" }}>As this product is Dry Clean only, we suggest using the services of professional dry cleaners. Each piece is handcrafted to perfection and needs special care</p>
                <p style={{ fontSize: "13px" }}>Airing the garment after every use keeps them fresh and saves the need to dry clean them every time</p>
                <p style={{ fontSize: "13px" }}>Air dry in shade.</p>
                <p style={{ fontSize: "13px" }}>Due to authenticity, certain fabrics may bleed some colour on the skin</p>
                <p style={{ fontSize: "13px" }}>The hues of the actual product can vary depending on lighting, daylight shot or screen resolution.</p>
            </div>
          </div>
        </div>
      </div>
      <div  className="container ">
        <ProductDisplaySlide/>
      </div>

      <Footer/>
    </>
  );
};

export default ProductsDisplay;
