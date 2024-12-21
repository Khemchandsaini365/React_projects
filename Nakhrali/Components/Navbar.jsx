import React from "react";
// import NakhraliLogo from "../Images/Nakhrali_Logo.png";
import { BiCart, BiHeart, BiSearch, BiUser } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";
import "./hover.css"
import { click } from "@testing-library/user-event/dist/click";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate()
  const handleclick=()=>{
          navigate("/")
  }
  const handleMouseOver=()=>{
    document.getElementById("dropdownMenuButton").addEventListener("click", () => {
      // Your code to handle the click event
      console.log("Dropdown button clicked!");
  });
  }
  return (
    <>
      {/* Top bar with free shipping notice */}
      <div className="top text-center py-1" style={{backgroundColor:"#edd8c0"}}>
        <FaShippingFast /> Free Shipping on domestic orders over 1500 INR
      </div>

      {/* Navbar Container */}
      <div className="mid container-fluid d-flex justify-content-between align-items-center py-1">
        
        {/* Menu icon for mobile */}
        <div className="menu-icon d-lg-none d-flex align-items-center">
          <div style={{ fontSize: "20px" }}>
            <GrMenu />
          </div>
        </div>


        {/* Extra div */}
        <div className="d-none d-md-block d-lg-block col-md-4 col-lg-4 ">
<span></span>
        </div>
        {/* Logo in center */}
        <div className="img  d-flex justify-content-center align-items-center col-md-4 col-lg-4">
          <div style={{maxWidth:"200px"}} onClick={handleclick}>
          Demo Company  
          </div>
        </div>

        {/* Utilities icons on the right */}
        <div className="utilites col-md-4 col-lg-4">
          <ul style={{ listStyle: "none" }} className="d-flex justify-content-end m-0">
            <li style={{ fontSize: "1.4rem" }} className="text-secondary px-2">
              <BiUser />
            </li>
            <li style={{ fontSize: "1.4rem" }} className="text-secondary px-2">
              <BiSearch />
            </li>
            <li style={{ fontSize: "1.4rem" }} className="text-secondary px-2">
              <BiHeart />
            </li>
            <li style={{ fontSize: "1.4rem" }} className="text-secondary px-2">
              <BiCart />
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar for categories */}
      <div className="bottom pt-2 bg-light  d-flex justify-content-center  ">
        <div className=" col-3 d-flex justify-content-between  gap-2">
         
            {/* <ul style={{ listStyle: "none" }} className="d-flex justify-content-between gap-3 m-0 ">
              <li className="dropdown">
                KURTAS <FaAngleDown />
                <ul className="dropdown-menu">
                  <li>Kurta</li>
                  <li>Basic Suits</li>
                  <li>Tops</li>
                  <li>Dresses</li>
                </ul>
              </li>
              <li className="dropdown">
                COLLECTIONS <FaAngleDown />
                <ul className="dropdown-menu">
                
                </ul>
              </li>
            </ul> */}

            <div class="dropdown">
  <div class=" dropdown-toggle main-item" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  onMouseOver={handleMouseOver} >
    Sarees
  </div>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/products" >Saree</a>
    <a class="dropdown-item" href="/products">Basic Suits</a>
    <a class="dropdown-item" href="/products">Tops </a>
    <a class="dropdown-item" href="/products">Dresses</a>
  </div>
</div>
<div class="dropdown">
  <div class=" dropdown-toggle main-item" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  onMouseOver={handleMouseOver} >
    Collections
  </div>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/products">Wedding | Festive '23-24</a>
    <a class="dropdown-item" href="/products">Bestsellers</a>
    <a class="dropdown-item" href="/products">Deal of the day</a>
    <a class="dropdown-item" href="/products">Trending Trousseau</a>
    <a class="dropdown-item" href="/products">Happening Haldi</a>
    <a class="dropdown-item" href="/products">Sensational Sangeet</a>
    <a class="dropdown-item" href="/products">Millennial Mehendi</a>
  </div>
</div>
              
            

          </div>
        </div>
  
    </>
  );
};

export default Navbar;
