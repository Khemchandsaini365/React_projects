import React, { useState, useEffect } from 'react';
import './prodct.css'; // External CSS file for styles

const PricedProducts = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const [slidesPerPage, setSlidesPerPage] = useState(4);

  const slides = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  useEffect(() => {
    // Resize event listener to adjust the number of slides per page
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Adjust number of slides per page based on container width
  useEffect(() => {
    if (containerWidth < 551) {
      setSlidesPerPage(1);
    } else if (containerWidth < 901) {
      setSlidesPerPage(2);
    } else if (containerWidth < 1101) {
      setSlidesPerPage(3);
    } else {
      setSlidesPerPage(4);
    }
  }, [containerWidth]);

  // Calculate the margin for sliding effect
  const marginLeft = -(currentPosition * (100 / slidesPerPage));

  // Handle right slider button click (Infinite loop behavior)
  const slideRight = () => {
    setCurrentPosition(prevPosition => {
      if (prevPosition === slides.length - slidesPerPage) {
        return 0; // Loop back to the first slide
      }
      return prevPosition + 1;
    });
  };

  // Handle left slider button click (Infinite loop behavior)
  const slideLeft = () => {
    setCurrentPosition(prevPosition => {
      if (prevPosition === 0) {
        return slides.length - slidesPerPage; // Loop back to the last slide
      }
      return prevPosition - 1;
    });
  };

  return (
    <div id="container">
      <div id="slider-container">
        {/* Left Arrow Button */}
        <span
          onClick={slideLeft}
          className={`btn ${currentPosition === 0 ? 'inactive' : ''}`}
        >
          {"<"}
        </span>

        {/* Slider */}
        <div
          id="slider"
          style={{ transform: `translateX(${marginLeft}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <span>{slide}</span>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <span
          onClick={slideRight}
          className={`btn ${currentPosition === slides.length - slidesPerPage ? 'inactive' : ''}`}
        >
          {">"}
        </span>
      </div>
    </div>
  );
};

export default PricedProducts;
