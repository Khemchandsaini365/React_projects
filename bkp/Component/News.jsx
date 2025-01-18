import React, { useState, useEffect } from 'react';
import Back1 from '../Images/back.jpg';
import Back2 from '../Images/JCPIC/back2.jpg';
import party from '../Images/JCPIC/IMG_5683.jpg';
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function News() {

    const navigate = useNavigate();

    const Newsimages = [
        {
            img: party,
            title: 'News-1',
            desc: 'Haruki Kurogane is a mysterious and enigmatic character who possesses unparalleled'
        },
        {
            img: Back1,
            title: 'News-2',
            desc: 'Haruki Kurogane is a mysterious and enigmatic character who possesses unparalleled'
        },
        {
            img: Back2,
            title: 'News-3',
            desc: 'Haruki Kurogane is a mysterious and enigmatic character who possesses unparalleled'
        },
        {
            img: party,
            title: 'News-4',
            desc: 'Haruki Kurogane is a mysterious and enigmatic character who possesses unparalleled'
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
        <div style={{ marginTop: "5%" }}>
            <div className='container'>
                <div className='text-center' style={{ fontSize: '3em', fontWeight: 600, color: "#DC143C", }}>News</div>
                <div className='row p-0'>
                    <div className='col-lg-6 col-md-6 col-sm-12 mb-3 p-0'>
                        <div className='card border-0'>
                            <div className='' style={{ backgroundImage: `url(${party})`, width: "100%", height: "60vh", backgroundPosition: "center", backgroundSize: "cover", objectFit: "cover" }} >
                                <div style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), #000 )", position: "relative", height: "100%", alignItems: "flex-end", display: "flex" }} >
                                    <div className='text-start p-4'>
                                        <p className='' style={{ fontSize: "1.5em", fontWeight: 500, color: "#DC143C" }}>News Title</p>
                                        <p className='' style={{ fontSize: "1em", fontWeight: 500, color: "#fff" }}>Haruki Kurogane is a mysterious and enigmatic character who possesses unparalleled</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 mb-3 p-0'>
                        <div className='row p-0'>
                            {
                                Newsimages.map((item, index) => (
                                    <div className='col-lg-6 col-md-6 col-sm-12 p-0'>
                                        <div key={index} className='card border-0'>
                                            <div className='image-container' style={{ backgroundImage: `url(${item.img})`, width: "100%", height: "30vh", backgroundPosition: "center", backgroundSize: "cover", objectFit: "cover", }} >
                                                <div style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), #000 )", position: "relative", height: "100%", alignItems: "flex-end", display: "flex" }} >
                                                    <div className='text-start p-3'>
                                                        <p className='' style={{ fontSize: "1.2em", fontWeight: 500, color: "#DC143C" }}>{item.title}</p>
                                                        <p className='' style={{ fontSize: ".9em", fontWeight: 500, color: "#fff" }}>{item.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-to-top-button rounded-2" onClick={scrollToTop} style={{ width: 40, height: 40, backgroundColor: "#ff68f0", color: "#fff", alignItems: "center", justifyContent: "center", display: "flex", }}><IoArrowUpCircleOutline style={{ fontSize: 30 }} /></div>
        </div>
    )
}
