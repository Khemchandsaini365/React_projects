import React, { useState, useEffect } from 'react';
import backImg from '../Images/backImg.jpg';
import Back1 from '../Images/back.jpg';
import Back2 from '../Images/JCPIC/back2.jpg';
import Restaurant from '../Images/JCPIC/restaurent.png';
import Bar from '../Images/JCPIC/bar.jpg';
import Game from '../Images/JCPIC/BADMINTONHALL-02.jpg';
import Lawn from '../Images/JCPIC/Lawn.jpg';
import Banquet from '../Images/JCPIC/SuraiPartyHall.png';
import Gym from '../Images/JCPIC/GYM-01.jpg';
import Swimming from '../Images/JCPIC/SwimmingPool.jpg';
import Room from '../Images/JCPIC/Room.jpg';
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function Facility() {

    const navigate = useNavigate()

    const facilities = [
        {
            image: Restaurant,
            title: 'Restaurant'
        },
        {
            image: Bar,
            title: 'Bar'
        },
        {
            image: Game,
            title: 'Games'
        },
        {
            image: Room,
            title: 'Accommodation'
        },
        {
            image: Lawn,
            title: 'Lawn'
        },
        {
            image: Banquet,
            title: 'Banquet Hall'
        },
        {
            image: Gym,
            title: 'Gym'
        },
        {
            image: Swimming,
            title: 'Swimming'
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
            <div className='container mt-5'>
                <div className='row pt-5'>
                    <div className='col-lg-12'>
                        <p className='text-start pt-5' style={{ fontSize: "1.5em", fontWeight: 600, color: "#000", }}>Facilities In <span className='text-center' style={{ fontSize: "1em", fontWeight: 600, color: "#DC143C", fontFamily: '"Playwrite FR Moderne", cursive' }}>Jai Club</span> As Follows:</p>
                    </div>
                </div>
                <div className='row mt-5 mb-3'>
                    {facilities.map((facility, index) => (
                        <div key={index} className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                            <article className="card card--1 facility-card border-0" onClick={() => navigate('/Accommodation')} style={{ width: '100%', cursor: "pointer" }}>
                                <div className="card__img"></div>
                                <a href="#" className="card_link">
                                    <div className="card__img--hover" style={{ backgroundImage: `url(${facility.image})`, backgroundPosition: "center", backgroundSize: "cover" }}></div>
                                </a>
                                <div className="card__info">
                                    <h3 className="" style={{ color: "#DC143C", fontSize: '1.5em', fontWeight: 600 }}>{facility.title}</h3>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
            <div className="scroll-to-top-button rounded-2" onClick={scrollToTop} style={{ width: 40, height: 40, backgroundColor: "#ff68f0", color: "#fff", alignItems: "center", justifyContent: "center", display: "flex", }}><IoArrowUpCircleOutline style={{ fontSize: 30 }} /></div>
        </div>
    )
}
