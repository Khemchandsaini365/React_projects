
import React, { useState, useEffect } from 'react';
import backImg from '../Images/backImg.jpg';
import Back1 from '../Images/back.jpg';
import Back2 from '../Images/JCPIC/back2.jpg';
import party from '../Images/JCPIC/IMG_5683.jpg';
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Facility from './Facility';

export default function Home() {

    const navigate = useNavigate()

    const slides = [
        backImg, Back2, Back1,
    ];

    const [activeSlide, setActiveSlide] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const changeSlides = () => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    useEffect(() => {
        const id = setInterval(changeSlides, 4000);
        setIntervalId(id);
        return () => clearInterval(id);
    }, []);

    const handleControlClick = (index) => {
        setActiveSlide(index);
        clearInterval(intervalId);
        const id = setInterval(changeSlides, 4000);
        setIntervalId(id);
    };

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
            <div className="slider-container">
                {/* <div className='head-text'>
                    <p className='text-center' style={{ fontSize: "1em", fontWeight: 500, color: "#fff" }}>Welcome To The</p>
                    <p className='text-center' style={{ fontSize: ".8em", fontWeight: 500, color: "#DC143C" }}>JAI CLUB</p>
                </div> */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === activeSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide})`, width: "100%", backgroundPosition: "center", backgroundSize: "cover" }}
                    ></div>
                ))}
                <div className="controls-container">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`control ${index === activeSlide ? 'active' : ''}`}
                            onClick={() => handleControlClick(index)}
                        ></div>
                    ))}
                </div>
            </div>
            <div className='container mt-5'>
                <p className='text-start' style={{ fontSize: "1.5em", fontWeight: 600, color: "#DC143C",}}></p>
                <div className='row d-flex justify-content-between'>
                    <div className='col-lg-8 col-md-6 col-sm-12'>
                        <p className='text-start' style={{ fontSize: "1em", fontWeight: 400, color: "#000", }}>Founded in 1947 by Late Shri RN Day, Jai Club is one of the most famous and oldest clubs in Jaipur that is spread across a sprawling area of seven acres. This recreational club offers a wide array of entertainment options and boasts of latest infrastructure and maintains full-fledged facilities for sports like tennis besides a health club. It has developed into a multi-dimensional club offering a multitude of facilities that include gym, swimming facility, and sports and yoga club. A cafe and restaurant are also available within the premises of Jai Club, which has more than 1000 members on roll. It remains open daily from 6 AM to 12 AM and is open to all members.</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='row'>
                            <div className='col-6'><p onClick={()=> navigate('/About')} className='text-start' style={{ fontSize: "1em", fontWeight: 400, color: "#DC143C", cursor:"pointer"}}>&#x2022; Club Information</p></div>
                            <div className='col-6'><p onClick={()=> navigate('/Facility')} className='text-start' style={{ fontSize: "1em", fontWeight: 400, color: "#DC143C", cursor:"pointer"}}>&#x2022; Facilities</p></div>
                        </div>
                        <div className='row'>
                            <div className='col-6'><p onClick={()=> navigate('/Membership')} className='text-start' style={{ fontSize: "1em", fontWeight: 400, color: "#DC143C", cursor:"pointer"}}>&#x2022; Membership</p></div>
                            <div className='col-6'><p onClick={()=> navigate('/Event')} className='text-start' style={{ fontSize: "1em", fontWeight: 400, color: "#DC143C", cursor:"pointer"}}>&#x2022; Events</p></div>
                        </div>
                        <div className='row'>
                            <div className='col-6'><p onClick={()=> navigate('/Affiliation')} className='text-start' style={{ fontSize: "1em", fontWeight: 400, color: "#DC143C", cursor:"pointer"}}>&#x2022; Affiliation</p></div>
                            <div className='col-6'><p onClick={()=> navigate('/Menagament')} className='text-start' style={{ fontSize: "1em", fontWeight: 400, color: "#DC143C", cursor:"pointer"}}>&#x2022; Management</p></div>
                        </div>
                        <div className='row'>
                            <div className='col-6'><p onClick={()=> navigate('/CircularNotice')} className='text-start' style={{ fontSize: "1em", fontWeight: 400, color: "#DC143C", cursor:"pointer"}}>&#x2022; News/Message</p></div>
                            <div className='col-6'><p onClick={()=> navigate('/Contact')} className='text-start' style={{ fontSize: "1em", fontWeight: 400, color: "#DC143C", cursor:"pointer"}}>&#x2022; Contact</p></div>
                        </div>
                        <div className='row'>
                            <div className='col-6'><p onClick={()=> navigate('/Accommodation')} className='text-start' style={{ fontSize: "1em", fontWeight: 400, color: "#DC143C", cursor:"pointer"}}>&#x2022; Accommodation</p></div>
                            <div className='col-6'><p onClick={()=> navigate('/Login')} className='text-start' style={{ fontSize: "1em", fontWeight: 400, color: "#DC143C", cursor:"pointer"}}>&#x2022; Login</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <Facility/>
            <div className="scroll-to-top-button rounded-2" onClick={scrollToTop} style={{ width: 40, height: 40, backgroundColor: "#ff68f0", color: "#fff", alignItems: "center", justifyContent: "center", display: "flex", }}><IoArrowUpCircleOutline style={{ fontSize: 30 }} /></div>
        </div>
    )
}