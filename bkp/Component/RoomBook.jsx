import React, { useState, useEffect } from 'react';
import { IoArrowUpCircleOutline } from "react-icons/io5";
import Back2 from '../Images/JCPIC/back2.jpg';
import Room from '../Images/JCPIC/guestRoom.png';
import Room2 from '../Images/JCPIC/guestHouse.jpg';
import logo from '../Images/jaiclub.png';
import { CiGlobe } from "react-icons/ci";
import { MdOutlineLocationOn, MdOutlineFax, MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


export default function RoomBook() {

    useEffect(() => {
        scrollToTop();
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const rooms = [
        {
            img: Room,
            roomCat: 'Single Room',
            price: 999
        },
        {
            img: Room2,
            roomCat: 'Family Room',
            price: 1999
        },
        {
            img: Room,
            roomCat: 'President Room',
            price: 2999
        },
    ]

    const slides = [
        Room, Room2, Room,
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

    return (
        <div>
            <div className='container-fluid g-0'>
                <div style={{ backgroundImage: `url(${Back2})`, width: "100%", height: "100vh", backgroundPosition: "center", backgroundSize: "cover", backgroundAttachment: "fixed", marginTop: "0%" }} >
                    <div style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), #000 )", position: "relative", height: "100%", borderRadius: 5, alignItems: "center", display: "flex", justifyContent: "center" }} >
                        <div className='p-5'>
                            <p style={{ fontSize: '4.5em', color: "#fff" }} >Reservation Form</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <div className='text-center py-4' style={{ fontSize: '3em', color: "#212121", fontWeight: 600 }} >Reservation Form</div>
                <div className='row'>
                    <div className='col-lg-8 m-auto'>
                        <div className='row g-5'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='card border-0'>
                                    <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div>
                                                <div className='text-start' style={{ fontSize: '1em', color: "#DC143C", fontWeight: 400 }} >Name</div>
                                                <input placeholder="Name" type="text" class="input-table-book" style={{ width: "100%" }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12'>
                                            <div>
                                                <div className='text-start' style={{ fontSize: '1em', color: "#DC143C", fontWeight: 400 }} >Mobile Number</div>
                                                <input placeholder="Mobile Number" type="text" class="input-table-book" style={{ width: "100%" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='text-start' style={{ fontSize: '1em', color: "#DC143C", fontWeight: 400 }} >Guest Name</div>
                                        <input placeholder="Guest Name" type="text" class="input-table-book" style={{ width: "100%" }} />
                                    </div>
                                    <div>
                                        <div className='text-start' style={{ fontSize: '1em', color: "#DC143C", fontWeight: 400 }} >Email</div>
                                        <input placeholder="Email" type="text" class="input-table-book" style={{ width: "100%" }} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6 col-sm-12 mb-3'>
                                        <div className='text-start' style={{ fontSize: '1em', color: "#DC143C", fontWeight: 400 }} >Adult</div>
                                        <div class="select">
                                            <select name="format" id="format">
                                                <option selected disabled>1</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <div className='text-start' style={{ fontSize: '1em', color: "#DC143C", fontWeight: 400 }} >Children</div>
                                        <div class="select">
                                            <select name="format" id="format">
                                                <option selected disabled>1</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-check d-flex align-items-center">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <p class="form-check-label ps-4" for="flexCheckDefault">
                                        If Him Self
                                    </p>
                                </div>
                                <button className='btn-reserve mt-0' style={{ width: "100%" }} >Reserve Room</button>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='card border-0'>
                                    <div className='d-flex align-items-center mb-2' >
                                        <img class="" src={logo} alt="" style={{ width: 60 }} />
                                        <div className=''>
                                            <div className='nav-links-footer text-start' style={{ cursor: "pointer", fontSize: '1.9em', fontWeight: 600, color: "#DC143C", fontFamily: '"Playwrite FR Moderne", cursive' }}>Jai Club</div>
                                            <div className='nav-links-footer text-start ps-1' style={{ cursor: "pointer", fontSize: '.9em', fontWeight: 600, color: "#000" }}>THE TRUE SPIRIT OF LIFE</div>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center mb-1'>
                                        <div className='justify-content-center align-items-center d-flex rounded-1' ><MdOutlineLocationOn style={{ fontSize: 16, color: '#DC143C' }} /> </div>
                                        <div className='text-start ps-3' style={{ cursor: "pointer", fontSize: '.8em', fontWeight: 400, color: "#000" }}>Mahaveer Marg, C-Scheme, Jaipur - 302001 (Raj.)</div>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <div className='justify-content-center align-items-center d-flex rounded-1' ><FaPhoneAlt style={{ fontSize: 10, color: '#DC143C' }} /> </div>
                                        <div className='text-start ps-4' style={{ cursor: "pointer", fontSize: '.8em', fontWeight: 400, color: "#000" }}>0141-2372321,2372322</div>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <div className='justify-content-center align-items-center d-flex rounded-1' ><MdOutlineFax style={{ fontSize: 16, color: '#DC143C' }} /> </div>
                                        <div className='text-start ps-3' style={{ cursor: "pointer", fontSize: '.8em', fontWeight: 400, color: "#000" }}>0141-4004988</div>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <div className='justify-content-center align-items-center d-flex rounded-1' ><MdMailOutline style={{ fontSize: 16, color: '#DC143C' }} /> </div>
                                        <div className='text-start ps-3' style={{ cursor: "pointer", fontSize: '.8em', fontWeight: 400, color: "#000" }}>jaiclub@hotmail.com</div>
                                    </div>
                                    <div className='d-flex align-items-center mb-3'>
                                        <div className='justify-content-center align-items-center d-flex rounded-1' ><CiGlobe style={{ fontSize: 16, color: '#DC143C' }} /> </div>
                                        <div className='text-start ps-3' style={{ cursor: "pointer", fontSize: '.8em', fontWeight: 400, color: "#000" }}>www.jaiclub.in</div>
                                    </div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6432846389807!2d75.81016917514495!3d26.91481386000072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6a945f27e7d%3A0x573bf52c0d5579df!2sJai%20Club!5e0!3m2!1sen!2sin!4v1718616200055!5m2!1sen!2sin" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid g-0'>
                <div className='row' style={{ backgroundColor: "#f2f4fb", padding: '100px' }}>
                    <p style={{ fontSize: '4em', color: "#DC143C", fontWeight: 600 }} >Photos</p>
                    <div className='col-lg-6 m-auto'>
                        <p style={{ fontSize: '1em', color: "#6c757d", fontWeight: 400 }} >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                    <div className='col-lg-10 m-auto'>
                        <div className="slider-container">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`slide ${index === activeSlide ? 'active' : ''}`}
                                    style={{ backgroundImage: `url(${slide})`, width: "100%", height: "100%", backgroundPosition: "center", backgroundSize: "cover" }}
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
                    </div>
                </div>
            </div>
            <div className="scroll-to-top-button rounded-2" onClick={scrollToTop} style={{ width: 40, height: 40, backgroundColor: "#ff68f0", color: "#fff", alignItems: "center", justifyContent: "center", display: "flex", }}><IoArrowUpCircleOutline style={{ fontSize: 30 }} /></div>
        </div>
    )
}
