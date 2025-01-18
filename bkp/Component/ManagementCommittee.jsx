import React, { useState, useEffect } from 'react';
import { IoArrowUpCircleOutline } from "react-icons/io5";
import Back2 from '../Images/JCPIC/back2.jpg';
import Anil from '../Images/Current/AnilKumarSharmaCA.jpeg';
import Dhiraj from '../Images/Current/DhirajVijayvergia.jpeg';
import Manoj from '../Images/Current/ManojDasot.jpeg';
import RamSharan from '../Images/Current/RamSharanGupta.jpg';

export default function ManagementCommittee() {

    const rowData = [
        {
            name: 'RamSharan Gupta',
            Designation: "President",
            img: RamSharan
        },
        {
            name: 'Manoj Dasot',
            Designation: "Secretry",
            img: Manoj
        },
        {
            name: 'Anil Kumar Sharma CA',
            Designation: "Designation",
            img: Anil
        },
        {
            name: 'Dhiraj Vijayvergia',
            Designation: "Designation",
            img: Dhiraj
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
                    <p className='text-start text-decoration-underline' style={{ fontWeight: 500, fontSize: '1.4em', color: "#154360" }}>Management Committee</p>
                    {
                        rowData.map((item, index) => {
                            return (
                                <div key={index} className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                                    <div className='card rounded-0 border-0' style={{ width: "100%" }} >
                                        <img src={item.img} style={{ width: "100%", height:"30vh", objectFit:"center" }} />
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
