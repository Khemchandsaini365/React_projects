import React, { useState, useEffect } from 'react';
import { IoArrowUpCircleOutline } from "react-icons/io5";
import Avtar from '../Images/avtar.png';

export default function Founder() {

    const rowData = [
        {
            name: 'Name-3',
            Designation: "Designation",
            img: Avtar
        },
    ]

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
            <div className='container'>
                <div className='row'>
                    <p className='text-start text-decoration-underline' style={{ fontWeight: 500, fontSize: '1.4em', color: "#154360" }}>Founders</p>
                    {
                        rowData.map((item, index) => {
                            return (
                                <div key={index} className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                                    <div className='card rounded-0 border-0' style={{ width: "100%" }} >
                                        <img src={item.img} style={{ width: "100%", height:"30vh", objectFit:"center"  }} />
                                    </div>
                                    <div style={{ fontWeight: 500, fontSize: '1.2em', color: "#154360" }} >{item.name}</div>
                                    {/* <div style={{ fontWeight: 500, fontSize: '1em', color: "#154360" }} >{item.Designation}</div> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="scroll-to-top-button rounded-2" onClick={scrollToTop} style={{ width: 40, height: 40, backgroundColor: "#ff68f0", color: "#fff", alignItems: "center", justifyContent: "center", display: "flex", }}><IoArrowUpCircleOutline style={{ fontSize: 30 }} /></div>
        </div>
    )
}
