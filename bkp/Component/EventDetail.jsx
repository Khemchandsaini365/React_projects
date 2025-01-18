import React, { useState, useEffect } from 'react';
import backImg from '../Images/backImg.jpg';
import Back1 from '../Images/back.jpg';
import Back2 from '../Images/JCPIC/back2.jpg';
import party from '../Images/JCPIC/IMG_5683.jpg';

import { FaMapMarkerAlt } from "react-icons/fa";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function EventDetail() {

    const navigate = useNavigate();

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
                <div className='head-text'>
                    <p className='text-center' style={{ fontSize: "1em", fontWeight: 500, color: "#fff" }}>Event Detail</p>
                    <p className='text-center' style={{ fontSize: ".2em", fontWeight: 600, color: "#45b649" }}>Date: 26/06/2024</p>
                </div>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === activeSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide})` }}
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
                <div className='row mb-4'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='text-start' style={{ fontSize: '1em', fontWeight: 500, color: "#000" }}>Event Detail</div>
                        <div className='text-start' style={{ fontSize: '2em', fontWeight: 500, color: "#DC143C" }}>NYE PARTY OF THE YEAR</div>
                        <div className='text-start' style={{ fontSize: '1em', fontWeight: 500, color: "#000" }}>Date: <span className='text-start' style={{ fontSize: '1em', fontWeight: 500, color: "#000" }}>19/06/2024</span></div>
                        <div className='text-start' style={{ fontSize: '1em', fontWeight: 500, color: "#000" }}>Time: <span className='text-start' style={{ fontSize: '1em', fontWeight: 500, color: "#000" }}>08 : 00 PM</span></div>
                        <div className='text-start' style={{ fontSize: '1em', fontWeight: 500, color: "#000" }}>Address: <span className='text-start' style={{ fontSize: '1em', fontWeight: 500, color: "#000" }}>Mahaveer Marg, C-Scheme, Jaipur - 302001 (Raj.)</span></div>
                        <div className='text-start' style={{ fontSize: '1em', fontWeight: 500, color: "#000" }}>Ticket: <span className='text-start' style={{ fontSize: '1em', fontWeight: 500, color: "#000" }}>jaiclub@hotmail.com</span></div>
                        <div className='text-start' style={{ fontSize: '1em', fontWeight: 500, color: "#000" }}>Contact: <span className='text-start' style={{ fontSize: '1em', fontWeight: 500, color: "#000" }}>0141-2372321, 2372322</span></div>
                        <div className='text-start' style={{ fontSize: '1em', fontWeight: 500, color: "#000" }}>Categories: <span className='text-start' style={{ fontSize: '1em', fontWeight: 500, color: "#000" }}>Festival</span></div>
                        <div className='mt-3'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6432846389807!2d75.81016917514495!3d26.91481386000072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6a945f27e7d%3A0x573bf52c0d5579df!2sJai%20Club!5e0!3m2!1sen!2sin!4v1718616200055!5m2!1sen!2sin" width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className='col-lg-7 col-md-6 col-sm-12'>
                        <div className='card' >
                            <img src={party} className='color-eff-evnt' />
                        </div>
                        <div className='mt-4'>
                            <p className='text-start' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed totam rerum at consequuntur et! Incidunt sed exercitationem iste similique aut, illum maiores aspernatur eius tempore distinctio eaque, corrupti alias quidem.</p>
                            <p className='text-start' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed totam rerum at consequuntur et! Incidunt sed exercitationem iste similique aut, illum maiores aspernatur eius tempore distinctio eaque, corrupti alias quidem.</p>
                            <p className='text-start' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed totam rerum at consequuntur et! Incidunt sed exercitationem iste similique aut, illum maiores aspernatur eius tempore distinctio eaque, corrupti alias quidem.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mb-5'>
            <p className='text-center p-4' style={{ fontSize: "3em", fontWeight: 400, color: "#DC143C", }}>Enquiry</p>
                <div className='row'>
                    <div className='col-lg-10 col-md-6 col-sm-12 m-auto'>
                        <div className='card p-4 border-0'>
                            <div className='col-lg-12'>
                                <div className="row">
                                    <div className='col-lg-6 col-md-6 col-sm-12 m-auto'>
                                        <input placeholder="Your Name" type="text" class="input-table-book" style={{ width: "100%" }} />
                                        <input placeholder="Your Number" type="number" class="input-table-book" style={{ width: "100%" }} />
                                        <input placeholder="Your Email" type="email" class="input-table-book" style={{ width: "100%" }} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-6 col-sm-12 m-auto '>
                                    <button className='book-table' > <span>Submit</span>
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid g-0'>
                <div style={{ backgroundImage: `url(${backImg})`, width: "100%", height: "50vh", backgroundPosition: "center", backgroundSize: "cover", backgroundAttachment: "fixed" }} >
                    <div style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), #000 )", position: "relative", height: "100%", borderRadius: 5, alignItems: "center", display: "flex", justifyContent: "center" }} >
                        <div className=''>
                            <p className='text-center' style={{ fontSize: "2em", fontWeight: 500, color: "#fff" }}>GET IN TOUCH</p>
                            <button class="animated-button ms-4" onClick={() => navigate('/Contact')}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
                                    <FaMapMarkerAlt className='' />
                                </svg>
                                <span class="text">Locate us on Map</span>
                                <span class="circle"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-to-top-button rounded-2" onClick={scrollToTop} style={{ width: 40, height: 40, backgroundColor: "#ff68f0", color: "#fff", alignItems: "center", justifyContent: "center", display: "flex", }}><IoArrowUpCircleOutline style={{ fontSize: 30 }} /></div>
        </div>
    )
}
