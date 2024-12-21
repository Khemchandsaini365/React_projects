import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import UserStories from "./UserStories";
import Quickviewcards from "./Quickviewcards";
import img1 from "../Images/Quickview1.png";
import img2 from "../Images/Quickview2.png";
import img3 from "../Images/Quickview3.jpg";
import img4 from "../Images/Quickview4.png";
import img5 from "../Images/Quickview5.png";
import img6 from "../Images/Quickview6.png";
import img7 from "../Images/Quickview7.png";
import img8 from "../Images/Quickview8.png";
import img9 from "../Images/Quickview9.png";
import img10 from "../Images/Quickview10.png";
import pimg1 from "../Images/PricedCard1.png";
import pimg2 from "../Images/PricedCard2.jpg";
import pimg3 from "../Images/PricedCard3.jpg";
import pimg4 from "../Images/PricedCard4.jpg";
import pimg5 from "../Images/PricedCard5.jpg";
import pimg6 from "../Images/PricedCard6.jpg";
import pimg7 from "../Images/PricedCard7.jpg";
import pimg8 from "../Images/PricedCard8.jpg";
import bag1 from "../Images/bags1.jpg";
import bag2 from "../Images/bags2.jpg";
import bag3 from "../Images/bags3.jpg";
import bag4 from "../Images/bags4.jpg";
import bag5 from "../Images/bags5.jpg";
import bag6 from "../Images/bags6.jpg";
import bag7 from "../Images/bags7.jpg";
import bag8 from "../Images/bags8.jpg";
import rituals1 from "../Images/ritulas1.jpg";
import rituals2 from "../Images/ritulas2.png";
import rituals3 from "../Images/ritulas3.jpg";
import rituals4 from "../Images/ritulas4.png";
import blouse1 from "../Images/blouse1.jpg";
import blouse2 from "../Images/blouse2.jpg";
import blouse3 from "../Images/blouse3.jpg";
import blouse4 from "../Images/blouse4.jpg";
import blouse5 from "../Images/blouse5.jpg";
import blouse6 from "../Images/blouse6.jpg";
import blouse7 from "../Images/blouse7.jpg";
import blouse8 from "../Images/blouse8.jpg";

import CardQuickview from "./CardQuickview";
import CardswithPrice from "./CardswithPrice";
import PricedProducts from "./Carousel";
import BagCard from "./BagCard";
import RitulasofLove from "./Ritulasoflove";
import Blouses from "./Blousees";
import Feeds from "./Feeds";
import Kurtas from "./Kurtas";
import Reviews from "./Reviews";
import Customersr from "./Customersr";
import App from "../Images/App.svg"
import Andriod from "../Images/android-app.svg"
import Footer from "./Footer";
import Slider from "./Slider";

const Homepage = () => {
  const imgs = [img1, img2];
  const imgs2 = [img3, img4];
  const imgs3 = [img5, img6];
  const imgs4 = [img7, img8];
  const imgs5 = [img9, img10];
  const imgs6 = [pimg1, pimg2, pimg3, pimg4, pimg5, pimg6, pimg7, pimg8];
  const imgs7 = [bag1, bag2, bag3, bag4, bag5, bag6, bag7, bag8];
  const imgs8 = [rituals1, rituals2, rituals3, rituals4];
  const imgs9 = [
    blouse1,
    blouse2,
    blouse3,
    blouse4,
    blouse5,
    blouse6,
    blouse7,
    blouse8,
  ];
  return (
    <>
      <Navbar />
      
      <Banner />
      <UserStories />
      <hr />
      <Quickviewcards img1={imgs[0]} img2={imgs[1]} />
      <hr />
      <Quickviewcards img1={imgs2[0]} img2={imgs2[1]} />
      <hr />
      <CardQuickview />
      <hr />
      <Quickviewcards img1={imgs3[0]} img2={imgs3[1]} />
      <hr />
      <Quickviewcards img1={imgs4[0]} img2={imgs4[1]} />
      <hr />
      <Quickviewcards img1={imgs5[0]} img2={imgs5[1]} />
      <hr />
      <CardswithPrice
        Heading="Saree Saga"
        img1={imgs6[0]}
        img2={imgs6[1]}
        img3={imgs6[2]}
        img4={imgs6[3]}
        img5={imgs6[4]}
        img6={imgs6[5]}
        img7={imgs6[6]}
        img8={imgs6[7]}
      />
      <hr />
      <BagCard
        img1={imgs7[0]}
        img2={imgs7[1]}
        img3={imgs7[2]}
        img4={imgs7[3]}
        img5={imgs7[4]}
        img6={imgs7[5]}
        img7={imgs7[6]}
        img8={imgs7[7]}
      />
      <hr />
      <RitulasofLove
        Heading="Ritulas Of Love"
        img1={imgs8[0]}
        img2={imgs8[1]}
        img3={imgs8[2]}
        img4={imgs8[3]}
      />
      <hr />
      <Blouses
        Heading="Blouse Bliss"
        img1={imgs9[0]}
        img2={imgs9[1]}
        img3={imgs9[2]}
        img4={imgs9[3]}
        img5={imgs9[4]}
        img6={imgs9[5]}
        img7={imgs9[6]}
        img8={imgs9[7]}
      />
      <hr />
      <Feeds />
      <hr />
      <Kurtas />
      <hr />
      <Reviews />
      <hr />
      <Customersr />
      
      
      <Footer/>
    </>
  );
};

export default Homepage;
