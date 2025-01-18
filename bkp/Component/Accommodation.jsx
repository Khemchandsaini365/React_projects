import React, { useState, useEffect } from 'react';
import { IoArrowUpCircleOutline } from "react-icons/io5";
import Back2 from '../Images/JCPIC/back2.jpg';
import Room from '../Images/JCPIC/guestRoom.png';
import Room2 from '../Images/JCPIC/guestHouse.jpg';
import { useNavigate } from 'react-router-dom';

export default function Accommodation() {

    const navigate = useNavigate();

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
                            <p style={{ fontSize: '4.5em', color: "#fff" }} >A Best Place To Stay</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-4'>
                <div className='row'>
                    <div className='col-lg-10 m-auto'>
                        <div className='card p-4 border-0'>
                                <div className='row'>
                                    <div className='col-lg-3 col-md-6 col-sm-12'>
                                        <div className='text-start' style={{ fontSize: '1em', color: "#DC143C", fontWeight: 400 }} >Check In</div>
                                        <input placeholder="" type="date" class="input-table-book" style={{ width: "100%" }} />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-sm-12'>
                                        <div className='text-start' style={{ fontSize: '1em', color: "#DC143C", fontWeight: 400 }} >Check Out</div>
                                        <input placeholder="" type="date" class="input-table-book" style={{ width: "100%" }} />
                                    </div>
                                    <div className='col-lg-1 col-md-6 col-sm-12 mb-3'>
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
                                    <div className='col-lg-1 col-md-6 col-sm-12'>
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
                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='text-start' style={{ fontSize: '1em', color: "#DC143C", fontWeight: 400 }} >&nbsp;</div>
                                    <button className='btn-reserve'>Check Availability</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div className='container-fluid g-0 mb-5'>
                <div className='row d-fex align-items-center' style={{ backgroundColor: "#f2f4fb", padding: '100px' }} >
                    <div className='col-lg-2'></div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='card rounded-0 border-0 bg-transparent text-start' style={{ width: "100%", }}>
                            <p style={{ fontSize: '2em', color: "#DC143C", fontWeight: 600 }} >Welcome!</p>
                            <p style={{ fontSize: '1em', color: "#6c757d" }} >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='card rounded-0 border-0' style={{ width: "100%", }}>
                            <img src={Room} className="" alt="..." />
                            <div className='p-2' style={{ backgroundColor: "#f2f4fb", width: 160, height: 160, position: "absolute", right: -50, bottom: -60, borderRadius: 100 }} >
                                <img src={Room2} className="" alt="..." style={{ width: "100%", height: "100%", borderRadius: 100, objectFit: "cover" }} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2'></div>
                </div>
            </div>
            <div className='container mb-5'>
                <p style={{ fontSize: '4em', color: "#DC143C", fontWeight: 600 }} >Room & Suites</p>
                <div className='row'>
                    <div className='col-lg-6 m-auto'>
                        <p style={{ fontSize: '1em', color: "#6c757d", fontWeight: 400 }} >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                </div>
                <div className='row px-5'>
                    {
                        rooms.map((item, index) => {
                            return (
                                <div key={index} className='col-lg-4 col-md-6 col-sm-12'>
                                    <div onClick={()=> navigate('/RoomBook')} className='card rounded-0 border-0 bg-transparent' style={{ width: "100%", cursor:"pointer" }}>
                                        <div class="img-hover-zoom">
                                            <img src={item.img} className="" alt="..." style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        </div>
                                        <div className='card-body'>
                                            <div style={{ fontSize: '1.5em', color: "#000", fontWeight: 400 }} >{item.roomCat}</div>
                                            <div style={{ fontSize: '1em', color: "#DC143C", fontWeight: 400 }} >₹ {item.price} / PER DAY</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
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
                    </div>
                </div>
            </div>
            <div className="scroll-to-top-button rounded-2" onClick={scrollToTop} style={{ width: 40, height: 40, backgroundColor: "#ff68f0", color: "#fff", alignItems: "center", justifyContent: "center", display: "flex", }}><IoArrowUpCircleOutline style={{ fontSize: 30 }} /></div>
        </div>
    )
}
