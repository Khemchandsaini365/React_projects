import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { PiSignpostThin } from "react-icons/pi";
import { SlEvent } from "react-icons/sl";
import { PiNewspaperThin } from "react-icons/pi";

export default function Dashboard() {

  const navigate = useNavigate();

  return (
    <>
      <div className='scroll-box'>
        <div className='container mt-3'>
          <div className='pb-2 d-flex justify-content-between'>
            <div className='text-start' style={{ fontFamily: "Poppins", fontSize: "26px", fontWeight: 500, color: '#566573' }}>Dashboard</div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
              <div onClick={() => navigate('/Location')} className='card p-4 border-0 card-location' style={{ width: "100%", backgroundColor: '#fff', cursor: "pointer" }}>
                <div className='d-flex justify-content-between' >
                  <div className='d-flex' style={{ backgroundColor: "#03a9f5", width: 80, height: 80, borderRadius: 50, alignItems: "center", justifyContent: "center", }}>
                    <PiSignpostThin style={{ fontSize: '2.5em', color: "#fff" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "22px", fontWeight: 300, color: '#000' }}>Location</div>
                    <div style={{ fontSize: "16px", fontWeight: 400, color: '#000' }}>4</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
              <div className='card p-4 border-0 card-location' style={{ width: "100%", backgroundColor: '#fff', cursor: "pointer" }}>
                <div className='d-flex justify-content-between' >
                  <div className='d-flex' style={{ backgroundColor: "#03a9f5", width: 80, height: 80, borderRadius: 50, alignItems: "center", justifyContent: "center", }}>
                    <SlEvent style={{ fontSize: '2em', color: "#fff" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "22px", fontWeight: 300, color: '#000' }}>Event's</div>
                    <div style={{ fontSize: "16px", fontWeight: 400, color: '#000' }}>6</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
              <div className='card p-4 border-0 card-location' style={{ width: "100%", backgroundColor: '#fff', cursor: "pointer" }}>
                <div className='d-flex justify-content-between' >
                  <div className='d-flex' style={{ backgroundColor: "#03a9f5", width: 80, height: 80, borderRadius: 50, alignItems: "center", justifyContent: "center", }}>
                    <PiNewspaperThin style={{ fontSize: '2.5em', color: "#fff" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "22px", fontWeight: 300, color: '#000' }}>News</div>
                    <div style={{ fontSize: "16px", fontWeight: 400, color: '#000' }}>8</div>
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
