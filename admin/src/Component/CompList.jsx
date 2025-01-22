import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Back2 from '../images/backImg.jpg';
import Modal from 'react-bootstrap/Modal';
import { TextField } from '@mui/material';

import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";


export default function CompList() {

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

    const [fileName, setFileName] = useState('Choose a file');
    const [fileUrl, setFileUrl] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            setFileUrl(URL.createObjectURL(file));
        } else {
            setFileName('Choose a file');
            setFileUrl(null);
        }
    };

    return (
        <>
            <div className='scroll-box'>
                <div className='container'>
                    <div className='row d-flex justify-content-between align-items-center mb-2 g-0 py-2' >
                        <div className='col-4 text-start' style={{ fontSize: "22px", fontWeight: 500, color: '#566573' }}>Company List</div>
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
                </div>
                <div className='container mt-3'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                            <div className='card p-3 border-0 card-location' style={{ width: "100%", backgroundColor: '#fff', }}>
                                <div className='d-flex justify-content-between' >
                                    <div>
                                        <div style={{ fontSize: "20px", fontWeight: 500, color: '#000' }}>Jai Club</div>
                                        <div style={{ fontSize: "16px", fontWeight: 400, color: '#000' }}>JAI_CLUB</div>
                                    </div>
                                    <div>
                                        <img src={Back2} style={{ width: 100, height: 100, borderRadius:10 }} />
                                    </div>
                                </div>
                                <div class="row mt-2 d-flex justify-content-between">
                                    <div className='col-lg-8 col-md-6 mb-2'>
                                        <button onClick={() => navigate('/Dashboard')} class="btn btn-primary w-100" type="button">Click Here</button>
                                    </div>
                                    <div className='col-lg-4 col-md-6'>
                                        <div className='row d-flex justify-content-between px-2'>
                                            <button onClick={() => { handleShow2() }} class="btn col-4" type="button"><FaRegEdit style={{ fontSize: 20 }} /> </button>
                                            <button onClick={() => { setShowSM(true) }} class="btn col-4" type="button"><MdDelete style={{ color: "crimson", fontSize: 20 }} /> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Add Company</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Company Name</div>
                                    <input className='sercc-inpt p-1' placeholder="Company Name" autoFocus required style={{ width: "100%" }} />
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Decsription</div>
                                    <input className='sercc-inpt p-1' placeholder="Decsription" autoFocus required style={{ width: "100%" }} />
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Choose a File</div>
                                    <label className="file-input-label" data-button="blue" autoFocus required style={{ width: "100%" }}>
                                        <input type="file" accept=".jpg,.jpeg,.png" onChange={handleFileChange} />
                                        <span>{fileName}</span>
                                    </label>
                                    {fileUrl && (
                                        <div className="image-preview">
                                            <img src={fileUrl} alt="Selected" style={{ width: "100%" }} />
                                        </div>
                                    )}
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
                        <Modal.Title>Edit Company</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Company Name</div>
                                    <input className='sercc-inpt p-1' placeholder="Company Name" autoFocus required style={{ width: "100%" }} />
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Decsription</div>
                                    <input className='sercc-inpt p-1' placeholder="Decsription" autoFocus required style={{ width: "100%" }} />
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-12'>
                                    <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Choose a File</div>
                                    <label className="file-input-label" data-button="blue" autoFocus required style={{ width: "100%" }}>
                                        <input type="file" accept=".jpg,.jpeg,.png" onChange={handleFileChange} />
                                        <span>{fileName}</span>
                                    </label>
                                    {fileUrl && (
                                        <div className="image-preview">
                                            <img src={fileUrl} alt="Selected" style={{ width: "100%" }} />
                                        </div>
                                    )}
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
            </div>
        </>
    )
}
