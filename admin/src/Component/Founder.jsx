
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TextField } from '@mui/material';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import Modal from 'react-bootstrap/Modal';

export default function Founder() {

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

    return (
        <>
            <div className=''>
                <div className='container-fluid'>
                    <div className='row d-flex justify-content-between align-items-center' >
                        <div className='col-4 text-start' style={{ fontSize: "26px", fontWeight: 400, color: '#566573' }}>Founder</div>
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
                        <div onClick={handleShow} className='col-2 d-flex justify-content-center align-items-center p-2 rounded-1 me-3' style={{ backgroundColor: "#000", fontWeight: 400, color: "#fff", cursor: "pointer" }}>+ Add</div>
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
                                                        <TableCell sx={{ fontWeight: "600", minWidth: 50, fontSize: "14px" }}>Name</TableCell>
                                                        <TableCell sx={{ fontWeight: "600", minWidth: 50, fontSize: "14px" }}>Designation</TableCell>
                                                        <TableCell sx={{ fontWeight: "600", minWidth: 50, fontSize: "14px" }}>Action</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell sx={{ fontWeight: "500", minWidth: 50, fontSize: "12px" }}>Name</TableCell>
                                                        <TableCell sx={{ fontWeight: "500", minWidth: 50, fontSize: "12px" }}>Designation</TableCell>
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
                                            <Modal.Title>Founder</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Name</div>
                                                        <input className='sercc-inpt p-1' type='text' placeholder="Name" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Designation</div>
                                                        <input className='sercc-inpt p-1' type='text' placeholder="Designation" autoFocus required style={{ width: "100%" }} />
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
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Name</div>
                                                        <input className='sercc-inpt p-1' type='text' placeholder="Name" autoFocus required style={{ width: "100%" }} />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                                        <div className='' style={{ fontSize: "13px", color: '#1f5156', fontWeight: 600 }}>Designation</div>
                                                        <input className='sercc-inpt p-1' type='text' placeholder="Designation" autoFocus required style={{ width: "100%" }} />
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
