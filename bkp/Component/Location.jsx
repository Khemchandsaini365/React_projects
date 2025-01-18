import React, { useEffect } from 'react'
import Jcprime from '../Images/JCPIC/jcrestaurant.png';
import jcRoofTop from '../Images/JCPIC/jcrooftop.png';
import Noir from '../Images/JCPIC/noir.png';
import RoofTop from '../Images/JCPIC/rooftop.png';
import Beverage from '../Images/JCPIC/Beverage.png';
import jcRest from '../Images/JCPIC/jcRest.png';
import GuestHome from '../Images/JCPIC/guestRoom.png';
import fastFood from '../Images/JCPIC/fastFood.png';
import { IoArrowUpCircleOutline } from "react-icons/io5";

export default function Locations() {

  const facilities = [
    {
      image: jcRest,
      title: 'Restaurant',
      time1: '10:00',
      time2: '11:11'
    },
    {
      image: Beverage,
      title: 'Beverage Garden',
      time1: '10:00',
      time2: '11:11'
    },
    {
      image: RoofTop,
      title: 'Roof Top',
      time1: '10:00',
      time2: '11:11'
    },
    {
      image: Jcprime,
      title: 'JC Prime',
      time1: '10:00',
      time2: '11:11'
    },
    {
      image: GuestHome,
      title: 'Guest House',
      time1: '10:00',
      time2: '11:11'
    },
    {
      image: fastFood,
      title: 'Fast Food',
      time1: '10:00',
      time2: '11:11'
    },
    {
      image: Noir,
      title: 'Noir',
      time1: '10:00',
      time2: '11:11'
    },
    {
      image: jcRoofTop,
      title: 'JC Prime Roof Top',
      time1: '10:00',
      time2: '11:11'
    },
  ];

  useEffect(() => {
    scrollToTop();
}, [])

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

  return (
    <div>
      <div className='container' style={{ marginTop: "5%" }} >
      <div className='text-center my-5 ' style={{ cursor: "pointer", fontSize: '3em', fontWeight: 600, color: "#DC143C", }}>Restaurants</div>
        <div className='row'>
          {
            facilities.map((item, index) => (
              <div key={index} className='col-lg-3 col-md-6 col-sm-12 mb-5'>
                <div class="card-location p-0">
                  <div class="card-image"> <img src={item.image} alt="" style={{ width: "100%" }} /> </div>
                  <div class="card-content d-flex flex-column align-items-center">
                    <h4 class="pt-2">{item.title}</h4>
                    <div className='d-flex' >
                    <p class="pt-2" style={{ cursor: "pointer", fontSize: '.8em', fontWeight: 400, color: "#fff", }}>Time: {item.time1} T0 {item.time2}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="scroll-to-top-button rounded-2" onClick={scrollToTop} style={{ width: 40, height: 40, backgroundColor: "#ff68f0", color: "#fff", alignItems: "center", justifyContent: "center", display: "flex", }}><IoArrowUpCircleOutline style={{ fontSize: 30 }} /></div>
    </div>
  )
}
