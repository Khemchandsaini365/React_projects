import React from "react";
import { BsEye, BsHeart } from "react-icons/bs";
import "./Pricecards.css";
import { BiRupee } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import img1 from "../Images/Feeds1.jpg";
import img2 from "../Images/Feeds2.jpg";
import img3 from "../Images/Feeds3.jpg";
import img4 from "../Images/Feeds4.jpg";
const Feeds = () => {
  return (
    <>
      <div className="py-5">
        <div className="d-flex  justify-content-evenly">
          <div className="items " >
            <img src={img1} width={"100%"} style={{maxWidth:"250px"}} alt="" />
          </div>
          <div className="items " >
            <img src={img2} width={"100%"} style={{maxWidth:"250px"}} alt="" />
          </div>
          <div className="items " >
            <img src={img3} width={"100%"} style={{maxWidth:"250px"}} alt="" />
          </div>
          <div className="items " >
            <img src={img4} width={"100%"} style={{maxWidth:"250px"}} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feeds;
