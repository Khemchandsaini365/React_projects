import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backImg from '../images/backImg.jpg';
import Modal from 'react-bootstrap/Modal';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { FiAlertTriangle } from "react-icons/fi";

export default function Location() {

    const navigate = useNavigate();

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

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [showSM, setShowSM] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const handleCloseSM = () => setShowSM(false);
    const handleShowSM = () => setShowSM(true);

    const location = [
        {
            name: 'Bar',
            img: backImg
        },
        {
            name: 'Restaurent',
            img: backImg
        },
        {
            name: 'Roof Top',
            img: backImg
        },
        {
            name: 'Swimming Pool',
            img: backImg
        },
    ]   

    return (
        <div>
            <div className='scroll-box'>
                <div className='container mt-3'>
                    <div className='row d-flex justify-content-between align-items-center mb-2 g-0 py-2' >
                        <div className='col-4 text-start' style={{ fontSize: "26px", fontWeight: 500, color: '#566573' }}>Location</div>
                        <div onClick={handleShow} className='col-2 d-flex justify-content-center align-items-center p-2 rounded-1' style={{ backgroundColor: "#000", fontWeight: 400, color: "#fff", cursor: "pointer" }}>+Add</div>
                    </div>
                    <div className='row mb-3'>
                        {
                            location.map((item, index) => (
                                <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                                    <div key={index} className='card p-0 border-0 card-location-back' style={{ backgroundImage: `url(${item.img})`, backgroundPosition: "center" }}>
                                        <div className='card border-0 card-location text-center p-0'>
                                            <div className='row px-4 g-0'>
                                                <div className='col-2 ms-auto p-2'>
                                                    <div className='d-flex justify-content-between' style={{ gap: "10px" }}>
                                                        <div onClick={() => { handleShow2() }} className='' style={{ cursor: "pointer" }} ><FaEdit style={{ color: "#03a9f5", fontSize: '1.1em' }} /></div>
                                                        <div onClick={() => { setShowSM(true) }} className='' style={{ cursor: "pointer" }} ><MdDelete style={{ color: "crimson", fontSize: '1.2em' }} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='p-5' >
                                                <div onClick={() => navigate('/BarDetail')} style={{ fontSize: "18px", fontWeight: 500, color: '#fff', cursor: "pointer" }}>{item.name}</div>
                                                <div style={{ fontSize: "14px", fontWeight: 500, color: '#fff' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Location</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Location Name</div>
                                        <input className='sercc-inpt p-1' type='text' placeholder="Location Name" autoFocus required style={{ width: "100%" }} />
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
                            <Modal.Title>Edit</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Location Name</div>
                                        <input className='sercc-inpt p-1' type='text' placeholder="Location Name" autoFocus required style={{ width: "100%" }} />
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Image</div>
                                        {fileUrl && (
                                            <div className="image-preview">
                                                <img src={fileUrl} alt="Selected" style={{ width: "100%" }} />
                                            </div>
                                        )}
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
    )
}
