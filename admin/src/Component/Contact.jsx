import React, { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, TextField } from '@mui/material';

export default function Contact() {

    return (
        <>
            <div className='scroll-box'>
                <div className='container-fluid g-0 mt-3'>
                    <div className='row d-flex justify-content-between align-items-center mb-2 g-0 py-2' >
                        <div className='col-4 text-start' style={{ fontSize: "26px", fontWeight: 500, color: '#566573' }}>Contact</div>
                        <div className='col-2'>
                            <TextField
                                label="Search"
                                //    value={}
                                variant="outlined"
                                size="small"
                                fullWidth
                                sx={{ mb: 0 }}
                            />
                        </div>
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
                                                        <TableCell sx={{ fontWeight: "600", minWidth: 50, fontSize: "14px" }}>Mobile Number</TableCell>
                                                        <TableCell sx={{ fontWeight: "600", minWidth: 50, fontSize: "14px" }}>Email</TableCell>
                                                        <TableCell sx={{ fontWeight: "600", minWidth: 50, fontSize: "14px" }}>Message</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell sx={{ fontWeight: "500", minWidth: 50, fontSize: "12px" }}>Name</TableCell>
                                                        <TableCell sx={{ fontWeight: "500", minWidth: 50, fontSize: "12px" }}>Mobile Number</TableCell>
                                                        <TableCell sx={{ fontWeight: "500", minWidth: 50, fontSize: "12px" }}>Email</TableCell>
                                                        <TableCell sx={{ fontWeight: "500", minWidth: 50, fontSize: "12px" }}>Message</TableCell>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
