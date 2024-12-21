import React, { useState } from 'react';
import './new.css'; // Import the external CSS file
import img1 from "../Images/SareeImg1.png"
import img2 from "../Images/SareeImg2.png"
import img3 from "../Images/SareeImg3.png"
const Carousel = () => {
  // State to hold the current main image source
  const [mainImage, setMainImage] = useState(img1);

  // Array of small image URLs
  const smallImages = [
    img1,
    img2,
    img3,
    img1,
    img2
  ];

  // Function to handle clicking on small images
  const handleSmallImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  return (
    <div className="carousel-container ">
      {/* Small image carousel for scrolling */}
      <div className="small-images-container">
        {smallImages.map((image, index) => (
          <img
            key={index}
            className="small-image"
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => handleSmallImageClick(image)} // Update main image on click
          />
        ))}
      </div>

      {/* Main image display */}
      <div className="main-image-container">
        <img src={mainImage} alt="Main Image" />
      </div>
    </div>
  );
};

export default Carousel;
