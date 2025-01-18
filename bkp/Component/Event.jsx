import React, { useState, useEffect } from 'react';
import Back1 from '../Images/back.jpg';
import Back2 from '../Images/JCPIC/back2.jpg';
import party from '../Images/JCPIC/IMG_5683.jpg';
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import EventTabs from './EventTabs';

export default function Event() {

    const navigate = useNavigate();

    const evntDtl = [
        {
            name: 'Event-1',
            image: Back1,
            time: '10:00 PM',
            date: '03/07/2024',
            desc: 'Haruki Kurogane is a mysterious and enigmatic character who possesses unparalleled skill in martial arts and a deep connection to the ancient arts of swordsmanship. Despit formidable abilities, Haruki often prefers to keep to themselves, shrouded in secrecy and rarely revealing their true intentions.'
        },
        {
            name: 'Event-2',
            image: Back2,
            time: '10:00 PM',
            date: '03/07/2024',
            desc: 'Haruki Kurogane is a mysterious and enigmatic character who possesses unparalleled skill in martial arts and a deep connection to the ancient arts of swordsmanship. Despit formidable abilities, Haruki often prefers to keep to themselves, shrouded in secrecy and rarely revealing their true intentions.'
        },
        {
            name: 'Event-3',
            image: party,
            time: '10:00 PM',
            date: '03/07/2024',
            desc: 'Haruki Kurogane is a mysterious and enigmatic character who possesses unparalleled skill in martial arts and a deep connection to the ancient arts of swordsmanship. Despit formidable abilities, Haruki often prefers to keep to themselves, shrouded in secrecy and rarely revealing their true intentions.'
        },
    ]

    const images = [
        party, Back2, Back1, party, party
    ];


    // Group images into rows of 3
    const rows = [];
    for (let i = 0; i < images.length; i += 3) {
        rows.push(images.slice(i, i + 3));
    }

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
            <div className='row mt-5'>
                <div className='text-center mb-5 pt-5' style={{ fontSize: '3em', fontWeight: 600, color: "#DC143C", }}> Events </div>
            </div>
            <div className='container'>
                <div className='row'>
                    {
                        evntDtl.map((evnt, index) => (
                            <div key={index} className='col-lg-4 col-md-6 col-sm-12 mb-3' style={{ cursor: 'pointer' }}>
                                <div class="main-box-container">
                                    <div class="box-container">
                                        <img src={evnt.image} className='event-img' />
                                        <div style={{ fontSize: '2em', fontWeight: 600, color: "#fff", }}>{evnt.name}</div>
                                        <div className='d-flex justify-content-between'>
                                            <div style={{ fontSize: '1em', fontWeight: 600, color: "#fff", }}>{evnt.date}</div>
                                            <div style={{ fontSize: '1em', fontWeight: 600, color: "#fff", }}>{evnt.time}</div>
                                        </div>
                                        <p>{evnt.desc}</p>
                                        <h6 className='mb-5' onClick={() => navigate('/EventDetail')}>View Detail</h6>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <EventTabs />
            <div className='container'>
                <div className='row'>
                    <div className='text-center pt-5' style={{ fontSize: '3em', fontWeight: 600, color: "#DC143C", }}>Events Highlights</div>
                </div>
                <div className="gallery-box pb-5">
                    {rows.map((row, rowIndex) => (
                        <div className="row p-0" key={rowIndex}>
                            {row.map((image, index) => (
                                <div className="row-item p-0" key={index}>
                                    <img src={image} alt={`Gallery ${index}`} className='color-eff-evnt' />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="scroll-to-top-button rounded-2" onClick={scrollToTop} style={{ width: 40, height: 40, backgroundColor: "#ff68f0", color: "#fff", alignItems: "center", justifyContent: "center", display: "flex", }}><IoArrowUpCircleOutline style={{ fontSize: 30 }} /></div>
        </div>
    )
}
