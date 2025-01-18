import React, { useState, useEffect } from 'react';
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TextField } from '@mui/material';
import News from './News';

export default function CircularNotice() {

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
                <div className='row pt-5 g-0'>
                <News />
                    <p className='text-center pt-5' style={{ fontWeight: 600, fontSize: '2em', color: "#DC143C" }}>Circular Notice</p>
                    <Paper className='mt-2' sx={{ width: '100%' }}>
                        <TableContainer sx={{ mt: -1 }}>
                            <Table stickyHeader aria-label="sticky table" size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: "600", minWidth: 50, fontSize: "15px" }} style={{ backgroundColor: "#DC143C", color: "#fff" }}>#</TableCell>
                                        <TableCell sx={{ fontWeight: "600", minWidth: 50, fontSize: "15px" }} style={{ backgroundColor: "#DC143C", color: "#fff" }}>Name</TableCell>
                                        <TableCell sx={{ fontWeight: "600", minWidth: 50, fontSize: "15px" }} style={{ backgroundColor: "#DC143C", color: "#fff" }}>File</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: "500", minWidth: 50, fontSize: "12px" }}>1</TableCell>
                                        <TableCell sx={{ fontWeight: "500", minWidth: 50, fontSize: "12px" }}>Name</TableCell>
                                        <TableCell sx={{ fontWeight: "500", minWidth: 50, fontSize: "12px", cursor: "pointer", color: "#3498DB" }}>File</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </div>
            </div>
            <div className="scroll-to-top-button rounded-2" onClick={scrollToTop} style={{ width: 40, height: 40, backgroundColor: "#ff68f0", color: "#fff", alignItems: "center", justifyContent: "center", display: "flex", }}><IoArrowUpCircleOutline style={{ fontSize: 30 }} /></div>
        </div>
    )
}
