import React from 'react'
import Navbar from './Navbar'
import Filter from './Filter'
import { BsEye, BsHeart } from 'react-icons/bs';
import './PricecardsProdcts.css'
import { BiRupee } from 'react-icons/bi';
import { FaShippingFast } from 'react-icons/fa';
import img8 from "../Images/PricedCard1.png"
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
const Products = () => {
    const navigate=useNavigate()
    const handleclick=()=>{
            navigate("/")
    }
    const handleProductClick=()=>{
      navigate("/productDisplay")
    }
  return (
    <div>
        <Navbar />
        <hr />
        <div className='ps-3'>
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
    <li class="breadcrumb-item" onClick={handleclick}>Home</li>
    <li class="breadcrumb-item">Saree and Beyond</li>
    <li class="breadcrumb-item " aria-current="page">Saree</li>
  </ol>
</nav>
        </div>
        {/*  */}
        <div className='head text-center' style={{fontSize:"1.3rem"}}>
            Saree
        </div>

        {/*  */}
        <div className='d-flex flex-row-reverse pe-3'>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort By
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Price (Low to High)</a>
    <a class="dropdown-item" href="#">Price (High to Low)</a>
    <a class="dropdown-item" href="#">Name A-Z</a>
    <a class="dropdown-item" href="#">Name Z-A</a>
    <a class="dropdown-item" href="#">Date (Old {"<"} New)</a>
    <a class="dropdown-item" href="#">Date (New {"<"} Old)</a>
  </div>
</div>
        </div>
        <div className='d-flex'>
        <div className='col-2 ms-3 d-none d-md-none d-lg-block' >
        <Filter/>
        </div>
        <div className='d-flex justify-content-center'> 
  <div className="col-10 my-4">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {/* Loop over products (20 cards) */}
      {[...Array(20)].map((_, index) => (
        <div key={index} className="col" onClick={handleProductClick}>
          <div className="card h-100 text-center">
            <div className="">
              <div className="img-wrapper zoom-container iconsonHoverConatiner">
                <div className="main-box">
                  <img
                    src={img8}
                    alt={`Quick View ${index + 1}`}
                    className="zoom-image img-fluid"
                  />
                </div>
                <div className="hidden-box top-0 start-0 end-0 bottom-0 d-flex justify-content-between align-items-center px-4">
                  <div style={{ fontSize: "1.4rem" }}>
                    <BsEye />
                  </div>
                  <div style={{ fontSize: "1.4rem" }}>
                    <BsHeart />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body d-flex flex-column align-items-start">
              <p className="text-muted">Shab Dark Blue Saree</p>
              <p className="fw-bold" style={{ lineHeight: "0" }}>
                <BiRupee /> 2999
              </p>
              <p className="fw-bold" style={{ lineHeight: "0" }}>
                <FaShippingFast /> Ships in 4 days
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


        </div>


        <Footer/>
   
    </div>
  )
}

export default Products