import React, { useState, useEffect } from 'react';
import { IoArrowUpCircleOutline } from "react-icons/io5";
import Back2 from '../Images/JCPIC/back2.jpg';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TextField } from '@mui/material';
import AffiliationTabs from './AffiliationTabs';

export default function Affiliation() {

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
            <div className='container-fluid g-0'>
            <div  style={{ backgroundImage: `url(${Back2})`, width: "100%", height: "auto", backgroundPosition: "center", backgroundSize: "cover", backgroundAttachment: "fixed", marginTop:"0%" }} >
                    <div style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), #000 )", position: "relative", height: "100%", borderRadius: 5, alignItems: "center", display: "flex", justifyContent: "center" }} >
                        <div className='p-5'>
                            <AffiliationTabs />
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-to-top-button rounded-2" onClick={scrollToTop} style={{ width: 40, height: 40, backgroundColor: "#ff68f0", color: "#fff", alignItems: "center", justifyContent: "center", display: "flex", }}><IoArrowUpCircleOutline style={{ fontSize: 30 }} /></div>
        </div>
    )
}
