import React, { useState, useEffect } from 'react';
import './carousel.css';
import { BiRupee } from 'react-icons/bi';
import { FaShippingFast } from 'react-icons/fa';
import { BsEye, BsHeart } from 'react-icons/bs';

const ProductDisplaySlide = () => {
  // State for tracking the current index and the number of items per slide
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
  const [totalSlides, setTotalSlides] = useState(0);

  // Function to get the number of items per slide based on the screen width
  function getItemsPerSlide() {
    if (window.innerWidth >= 1200) {
      return 4; // 4 items per slide on large screens
    } else if (window.innerWidth >= 768) {
      return 3; // 3 items per slide on medium screens
    } else {
      return 2; // 2 items per slide on small screens
    }
  }

  // Update the carousel position based on the currentIndex
  const updateCarouselPosition = () => {
    const carousel = document.querySelector('.product-carousel');
    if (carousel) {
      const offset = -currentIndex * (100 / itemsPerSlide); // Calculate the horizontal offset
      carousel.style.transform = `translateX(${offset}%)`; // Apply the transform
    }
  };

  // Adjust the number of items per slide when resizing the window
  const adjustItemsPerSlide = () => {
    const newItemsPerSlide = getItemsPerSlide();
    if (newItemsPerSlide !== itemsPerSlide) {
      setItemsPerSlide(newItemsPerSlide);
    }
  };

  // Update total slides whenever the number of items per slide changes
  useEffect(() => {
    const totalProducts = document.querySelectorAll('.product').length;
    setTotalSlides(Math.ceil(totalProducts / itemsPerSlide));
  }, [itemsPerSlide]);

  // Update carousel position when currentIndex or itemsPerSlide changes
  useEffect(() => {
    updateCarouselPosition();
  }, [currentIndex, itemsPerSlide]);

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  // Listen for window resizing to adjust the items per slide
  useEffect(() => {
    window.addEventListener('resize', adjustItemsPerSlide);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', adjustItemsPerSlide);
    };
  }, [itemsPerSlide]);

  return (
    <div className="product-carousel-container">
      <div className="carousel-btn prev-btn" onClick={prevSlide}>
        ❮
      </div>
      <div className="product-carousel">
        <div className="product">
          <div className="product-image">
            <img
              src="https://cdn.shopaccino.com/nakhrali/products/228-943728_l.png?v=509"
              alt="Product 1"
            />
            <div className="product-overlay">
              <button className="eye-btn"> <BsEye /></button>
              <button className="like-btn"><BsHeart /></button>
            </div>
          </div>
          <div className='d-flex align-items-start flex-column gap-0' >
                <p className='text-muted' >Shab Dark Blue Saree </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><BiRupee/>2999 </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><FaShippingFast/> Ships in 4 days</p>
            </div>
        </div>
        {/* Repeat for additional products */}
        <div className="product">
          <div className="product-image">
            <img
              src="https://cdn.shopaccino.com/nakhrali/products/228-943728_l.png?v=509"
              alt="Product 1"
            />
            <div className="product-overlay">
              <button className="eye-btn"> <BsEye /></button>
              <button className="like-btn"><BsHeart /></button>
            </div>
          </div>
          <div className='d-flex align-items-start flex-column gap-0' >
                <p className='text-muted' >Shab Dark Blue Saree </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><BiRupee/>2999 </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><FaShippingFast/> Ships in 4 days</p>
            </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img
              src="https://cdn.shopaccino.com/nakhrali/products/228-943728_l.png?v=509"
              alt="Product 1"
            />
            <div className="product-overlay">
              <button className="eye-btn"> <BsEye /></button>
              <button className="like-btn"><BsHeart /></button>
            </div>
          </div>
          <div className='d-flex align-items-start flex-column gap-0' >
                <p className='text-muted' >Shab Dark Blue Saree </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><BiRupee/>2999 </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><FaShippingFast/> Ships in 4 days</p>
            </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img
              src="https://cdn.shopaccino.com/nakhrali/products/228-943728_l.png?v=509"
              alt="Product 1"
            />
            <div className="product-overlay">
              <button className="eye-btn"> <BsEye /></button>
              <button className="like-btn"><BsHeart /></button>
            </div>
          </div>
          <div className='d-flex align-items-start flex-column gap-0' >
                <p className='text-muted' >Shab Dark Blue Saree </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><BiRupee/>2999 </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><FaShippingFast/> Ships in 4 days</p>
            </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img
              src="https://cdn.shopaccino.com/nakhrali/products/228-943728_l.png?v=509"
              alt="Product 1"
            />
            <div className="product-overlay">
              <button className="eye-btn"> <BsEye /></button>
              <button className="like-btn"><BsHeart /></button>
            </div>
          </div>
          <div className='d-flex align-items-start flex-column gap-0' >
                <p className='text-muted' >Shab Dark Blue Saree </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><BiRupee/>2999 </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><FaShippingFast/> Ships in 4 days</p>
            </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img
              src="https://cdn.shopaccino.com/nakhrali/products/228-943728_l.png?v=509"
              alt="Product 1"
            />
            <div className="product-overlay">
              <button className="eye-btn"> <BsEye /></button>
              <button className="like-btn"><BsHeart /></button>
            </div>
          </div>
          <div className='d-flex align-items-start flex-column gap-0' >
                <p className='text-muted' >Shab Dark Blue Saree </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><BiRupee/>2999 </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><FaShippingFast/> Ships in 4 days</p>
            </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img
              src="https://cdn.shopaccino.com/nakhrali/products/228-943728_l.png?v=509"
              alt="Product 1"
            />
            <div className="product-overlay">
              <button className="eye-btn"> <BsEye /></button>
              <button className="like-btn"><BsHeart /></button>
            </div>
          </div>
          <div className='d-flex align-items-start flex-column gap-0' >
                <p className='text-muted' >Shab Dark Blue Saree </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><BiRupee/>2999 </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><FaShippingFast/> Ships in 4 days</p>
            </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img
              src="https://cdn.shopaccino.com/nakhrali/products/228-943728_l.png?v=509"
              alt="Product 1"
            />
            <div className="product-overlay">
              <button className="eye-btn"> <BsEye /></button>
              <button className="like-btn"><BsHeart /></button>
            </div>
          </div>
          <div className='d-flex align-items-start flex-column gap-0' >
                <p className='text-muted' >Shab Dark Blue Saree </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><BiRupee/>2999 </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><FaShippingFast/> Ships in 4 days</p>
            </div>
        </div>
        <div className="product">
          <div className="product-image">
            <img
              src="https://cdn.shopaccino.com/nakhrali/products/228-943728_l.png?v=509"
              alt="Product 1"
            />
            <div className="product-overlay">
              <button className="eye-btn"> <BsEye /></button>
              <button className="like-btn"><BsHeart /></button>
            </div>
          </div>
          <div className='d-flex align-items-start flex-column gap-0' >
                <p className='text-muted' >Shab Dark Blue Saree </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><BiRupee/>2999 </p>
                <p className='fw-bold' style={{lineHeight:"0"}}><FaShippingFast/> Ships in 4 days</p>
            </div>
        </div>
        
        {/* Add more products as necessary */}
      </div>
      <div className="carousel-btn next-btn" onClick={nextSlide}>
        ❯
      </div>
    </div>
  );
};

export default ProductDisplaySlide;
