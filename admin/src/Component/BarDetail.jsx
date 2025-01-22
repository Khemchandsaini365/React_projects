import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { IoInformation } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { MdProductionQuantityLimits } from "react-icons/md";

export default function BarDetail() {

  const navigate = useNavigate();

  return (
    <>
      <div className='scroll-box'>
        <div className='container mt-3'>
          <div className='pb-2 d-flex justify-content-between'>
            <div className='text-start' style={{ fontFamily: "Poppins", fontSize: "26px", fontWeight: 400, color: '#566573' }}>Detail</div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
              <div onClick={() => navigate('/ProductList')} className='card p-3 border-0 card-location rounded-1' style={{ width: "100%", backgroundColor: '#fff', cursor: "pointer" }}>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex' style={{ backgroundColor: "#03a9f5", width: 80, height: 80, borderRadius: 50, alignItems: "center", justifyContent: "center", }}>
                    <MdProductionQuantityLimits style={{ fontSize: '2.5em', color: "#fff" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "22px", fontWeight: 200, color: '#03a9f5' }}>Product List</div>
                    <div style={{ fontSize: "16px", fontWeight: 300, color: '#000' }}>118</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
              <div onClick={() => navigate('/OrderList')} className='card p-3 border-0 card-location rounded-1' style={{ width: "100%", backgroundColor: '#fff', cursor: "pointer" }}>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex' style={{ backgroundColor: "#1de9b6", width: 80, height: 80, borderRadius: 50, alignItems: "center", justifyContent: "center", }}>
                    <GrDocumentText style={{ fontSize: '2.5em', color: "#fff" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "22px", fontWeight: 200, color: '#1de9b6' }}>List Of Orders</div>
                    <div style={{ fontSize: "16px", fontWeight: 300, color: '#000' }}>1</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
              <div onClick={() => navigate('/Reservation')} className='card p-3 border-0 card-location rounded-1' style={{ width: "100%", backgroundColor: '#fff', cursor: "pointer" }}>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex' style={{ backgroundColor: "#e74c3c", width: 80, height: 80, borderRadius: 50, alignItems: "center", justifyContent: "center", }}>
                    <IoInformation style={{ fontSize: '2.5em', color: "#fff" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "22px", fontWeight: 200, color: '#e74c3c' }}>Reservation</div>
                    <div style={{ fontSize: "16px", fontWeight: 300, color: '#000' }}>0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
