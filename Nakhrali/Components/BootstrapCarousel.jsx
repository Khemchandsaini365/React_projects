import Carousel from 'react-bootstrap/Carousel';
import img3 from "../Images/SareeImg1.png"
import img1 from "../Images/SareeImg2.png"
import img2 from "../Images/SareeImg3.png"
import "./bt.css"
function BootstrapCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default BootstrapCarousel;