import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TextField } from '@mui/material';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import Modal from 'react-bootstrap/Modal';

export default function Event() {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [showSM, setShowSM] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const handleCloseSM = () => setShowSM(false);
    const handleShowSM = () => setShowSM(true);

    return (
        <>
            <div className='scroll-box'>
                <div className='container-fluid g-0 mt-3'>
                    <div className='row d-flex justify-content-between align-items-center mb-2 g-0 py-2' >
                        <div className='col-4 text-start' style={{ fontSize: "20px", fontWeight: 600, color: '#566573' }}>Event</div>
                        <div className='col-4'>
                            <TextField
                                label="Search"
                                //    value={}
                                variant="outlined"
                                size="small"
                                fullWidth
                                sx={{ mb: 0 }}
                            />
                        </div>
                        <div onClick={handleShow} className='col-2 d-flex justify-content-center align-items-center p-2 rounded-1' style={{ backgroundColor: "#000", fontWeight: 400, color: "#fff", cursor: "pointer" }}>+ Add</div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12 m-auto">
                            <div className='card-list-box-sr card p-2 border-0'>
                                <div className="table-responsive">
                                    <Paper sx={{ width: '100%' }}>
                                        <TableContainer sx={{ mt: -1 }}>
                                            <Table stickyHeader aria-label="sticky table" size="small">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell sx={{ fontWeight: "600", minWidth: 50, fontSize: "14px" }}>Event Title</TableCell>
                                                        <TableCell sx={{ fontWeight: "600", minWidth: 50, fontSize: "14px" }}>Description</TableCell>
                                                        <TableCell sx={{ fontWeight: "600", minWidth: 50, fontSize: "14px" }}>Profile</TableCell>
                                                        <TableCell sx={{ fontWeight: "600", minWidth: 50, fontSize: "14px" }}>Action</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell sx={{ fontWeight: "500", minWidth: 50, fontSize: "12px" }}>Event Title</TableCell>
                                                        <TableCell sx={{ fontWeight: "500", minWidth: 50, fontSize: "12px" }}>Description</TableCell>
                                                        <TableCell sx={{ fontWeight: "500", minWidth: 50, fontSize: "12px" }}>Profile</TableCell>
                                                        <TableCell sx={{ fontWeight: "500", minWidth: 50, }}>
                                                            <div className='d-flex justify-content-between' style={{ width: 50, }}>
                                                                <FaEdit onClick={() => { handleShow2() }} style={{ cursor: "pointer", color: "#000" }} />
                                                                <MdDelete onClick={() => { setShowSM(true) }} style={{ cursor: "pointer", color: "#E74C3C" }} />
                                                            </div>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <TablePagination
                                            rowsPerPageOptions={[5, 10, 20]}
                                            component="div"
                                        // count={bearerData.length}
                                        // rowsPerPage={rowsPerPage}
                                        // page={page}
                                        // onPageChange={handleChangePage}
                                        // onRowsPerPageChange={handleChangeRowsPerPage}
                                        />
                                    </Paper>
                                    <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg">
                                        <Modal.Header closeButton>
                                            <Modal.Title>Event</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Event Title</div>
                                                        <input className='sercc-inpt p-1' type='text' placeholder="Event Title" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Description</div>
                                                        <input className='sercc-inpt p-1' type='text' placeholder="Description" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Event Organiser</div>
                                                        <input className='sercc-inpt p-1' type='text' placeholder="Event Organiser" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>From Date</div>
                                                        <input className='sercc-inpt p-1' type='date' placeholder="Event Title" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Till Date</div>
                                                        <input className='sercc-inpt p-1' type='date' placeholder="date" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Time :</div>
                                                        <input className='sercc-inpt p-1' type='time' placeholder="Event Organiser" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Event Brochure</div>
                                                        <input className='sercc-inpt p-1' type='text' placeholder="Event Brochure" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Event Sponsor</div>
                                                        <input className='sercc-inpt p-1' type='text' placeholder="Event Sponsorate" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Title</div>
                                                        <input className='sercc-inpt p-1' type='text' placeholder="Title" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                </div>
                                                <div className='row mt-3'>
                                                    <div className='col-2 m-auto'>
                                                        <div className='d-flex justify-content-center align-items-center p-1 rounded-1' style={{ width: '100%', backgroundColor: "#000", fontWeight: 400, color: "#fff", cursor: "pointer" }}>Save</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <Modal show={show2} onHide={handleClose2} size="lg" aria-labelledby="example-modal-sizes-title-lg">
                                        <Modal.Header closeButton>
                                            <Modal.Title>Edit</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Event Title</div>
                                                        <input className='sercc-inpt p-1' type='text' placeholder="Event Title" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Description</div>
                                                        <input className='sercc-inpt p-1' type='text' placeholder="Description" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Event Organiser</div>
                                                        <input className='sercc-inpt p-1' type='text' placeholder="Event Organiser" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>From Date</div>
                                                        <input className='sercc-inpt p-1' type='date' placeholder="Event Title" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Till Date</div>
                                                        <input className='sercc-inpt p-1' type='date' placeholder="date" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Time :</div>
                                                        <input className='sercc-inpt p-1' type='time' placeholder="Event Organiser" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Event Brochure</div>
                                                        <input className='sercc-inpt p-1' type='text' placeholder="Event Brochure" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Event Sponsor</div>
                                                        <input className='sercc-inpt p-1' type='text' placeholder="Event Sponsorate" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Title</div>
                                                        <input className='sercc-inpt p-1' type='text' placeholder="Title" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                </div>
                                                <div className='row mt-3'>
                                                    <div className='col-3 m-auto'>
                                                        <div className='d-flex justify-content-center align-items-center p-1 rounded-1' style={{ width: '100%', backgroundColor: "#000", fontWeight: 400, color: "#fff", cursor: "pointer" }}>Update</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                size="sm"
                show={showSM}
                onHide={() => setShowSM(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        <FiAlertTriangle style={{ color: "orangered" }} />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center align-items-center" style={{ fontSize: "16px", color: '#1f5156', fontWeight: 500 }}>Are you sure want to Delete ??</div>
                    <div className='d-flex justify-content-between mt-3'>
                        <div onClick={() => { setShowSM(false) }} className='d-flex justify-content-center align-items-center p-1 rounded-1 me-2' style={{ width: '100%', backgroundColor: "#239B56", fontWeight: 400, color: "#fff", cursor: "pointer" }}>Yes</div>
                        <div onClick={() => setShowSM(false)} className='d-flex justify-content-center align-items-center p-1 rounded-1' style={{ width: '100%', backgroundColor: "#E74C3C", fontWeight: 400, color: "#fff", cursor: "pointer" }}>No</div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
