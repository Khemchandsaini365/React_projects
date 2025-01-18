import React, { useState, useEffect } from 'react';
import backImg from '../Images/backImg.jpg';
import Back1 from '../Images/back.jpg';
import Back2 from '../Images/JCPIC/back2.jpg';
import party from '../Images/JCPIC/IMG_5683.jpg';
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Facility from './Facility';

export default function About() {

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

    const events = [
        {
            image: party,
            title: 'Current Events'
        },
        {
            image: party,
            title: 'Upcomming Events'
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
            <div className='container'>
                <p className='text-center p-4' style={{ fontSize: "2em", fontWeight: 600, color: "#DC143C", fontFamily: '"Playwrite FR Moderne", cursive' }}>About Jai Club     </p>
                <div className='row'>
                    <div className='col-lg-12'>
                        <p className='text-center' style={{ fontSize: "1em", fontWeight: 400, color: "#000", }}>Set in 7 acres of land, Jai Club is a famous social club in Jaipur in Rajasthan. Founded in 1947, it has facilities for recreation / sports, dining and lodging. The gymnasium has facilities well suited for body fitness. Indoor and outdoor games such as badminton, billiards, cards, tennis and cricket can be played. There is a children's pool and a swimming pool with adjoining dressing rooms.</p>
                        <p className='text-center' style={{ fontSize: "1em", fontWeight: 400, color: "#000", }}>Founded in 1947 by Late Shri RN Day, Jai Club is one of the most famous and oldest clubs in Jaipur that is spread across a sprawling area of seven acres. This recreational club offers a wide array of entertainment options and boasts of latest infrastructure and maintains full-fledged facilities for sports like tennis besides a health club. It has developed into a multi-dimensional club offering a multitude of facilities that include gym, swimming facility, and sports and yoga club. A cafe and restaurant are also available within the premises of Jai Club, which has more than 1000 members on roll. It remains open daily from 6 AM to 12 AM and is open to all members.</p>
                    </div>
                </div>
                <div className='row mt-4'>
                    {
                        events.map((item, index) => {
                            return (
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div key={index} className='card border-0' style={{ width: "100%" }} >
                                        <figure>
                                            <div onClick={() => navigate('/Event')} class="thumbnail">
                                                <div>{item.title}</div>
                                                <img src={item.image} />
                                            </div>
                                            <figcaption style={{ fontSize: "1.5em", fontWeight: 400, color: "#000", }}>{item.title}</figcaption>
                                        </figure>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='row mb-3'>
                    <Facility />
                </div>
                {/* <div className='row'>
                    <p className='text-start' style={{ fontSize: "1.5em", fontWeight: 600, color: "#000", }}><span className='text-center' style={{ fontWeight: 600, color: "#DC143C", fontFamily: '"Playwrite FR Moderne", cursive' }}>Club</span> Rules :</p>
                    <p className='text-start' style={{ fontSize: "1.5em", fontWeight: 600, color: "#000", }}><span className='text-center' style={{ fontWeight: 600, color: "#DC143C", fontFamily: '"Playwrite FR Moderne", cursive' }}>Dress</span> Code :</p>
                    <p className='text-start' style={{ fontSize: "1.5em", fontWeight: 600, color: "#000", }}>Message From<span className='text-center' style={{ fontWeight: 600, color: "#DC143C", fontFamily: '"Playwrite FR Moderne", cursive' }}>President</span> :</p>
                </div> */}
            </div>
            <div className="scroll-to-top-button rounded-2" onClick={scrollToTop} style={{ width: 40, height: 40, backgroundColor: "#ff68f0", color: "#fff", alignItems: "center", justifyContent: "center", display: "flex", }}><IoArrowUpCircleOutline style={{ fontSize: 30 }} /></div>
        </div>
    )
}