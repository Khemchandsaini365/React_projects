import React, { useEffect, useState } from 'react';
import image1 from '../Images/Banner1.jpg';
import image2 from '../Images/BAnner2.png';
import image3 from '../Images/banner3.png';
import './b.css';

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // This will update the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3); // Loop through 0, 1, 2
    }, 5000);
    
    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <div className="w-100 position-relative">

        {/* Slide 1 */}
        <div className={`mySlides fade ${slideIndex === 0 ? 'active' : ''}`}>
          <img src={image1} className="d-block w-100" alt="Banner 1" />
        </div>

        {/* Slide 2 */}
        <div className={`mySlides fade ${slideIndex === 1 ? 'active' : ''}`}>
          <img src={image2} className="d-block w-100" alt="Banner 2" />
        </div>

        {/* Slide 3 */}
        <div className={`mySlides fade ${slideIndex === 2 ? 'active' : ''}`}>
          <img src={image3} className="d-block w-100" alt="Banner 3" />
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
