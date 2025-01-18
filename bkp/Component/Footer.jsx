import React from 'react';
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import logo from '../Images/jaiclub.png';

import { useNavigate } from 'react-router-dom';

export default function Footer() {

    const navigate = useNavigate();

    return (
        <div>
            <div className='footer p-0 g-0'>
                <footer class="text-center text-lg-start" style={{ backgroundColor: '#1D1D1F' }}>
                    <div class="container-fluid px-5">
                        <div class="row d-flex align-items-center justify-content-between py-3">
                            <div class="col-lg-3 col-md-12 mb-2 mb-md-0">
                                <div className='d-flex align-items-end' >
                                    <img class="" src={logo} alt="" style={{ width: 80 }} />
                                    <div className='ps-3'>
                                        <div className='' style={{ fontSize: '2em', fontWeight: 600, color: "#DC143C" }}>Jai Club</div>
                                        <div className='' style={{ fontSize: '.8em', fontWeight: 400, color: "#fff" }}>THE TRUE SPIRIT OF LIFE</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='d-flex mt-3' style={{ gap: "20px" }}>
                                        <div className='justify-content-center align-items-center d-flex rounded-1 facebook-icon' style={{ width: 30, height: 30, cursor: "pointer" }} ><FaFacebookSquare /> </div>
                                        <div className='justify-content-center align-items-center d-flex rounded-1 insta-icon' style={{ width: 30, height: 30, cursor: "pointer" }} ><GrInstagram /> </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-12">
                                <h5 class="" style={{ color: "#fff" }} >Useful Links</h5>
                                <div className='nav-links-footer' onClick={()=> navigate('/Home')} style={{ cursor: "pointer", fontSize: 14, fontWeight: 400, color: "#DC143C" }}>Home</div>
                                <div className='nav-links-footer' onClick={()=> navigate('/Event')} style={{ cursor: "pointer", fontSize: 14, fontWeight: 400, color: "#DC143C" }}>Event</div>
                                <div className='nav-links-footer' onClick={()=> navigate('/Membership')} style={{ cursor: "pointer", fontSize: 14, fontWeight: 400, color: "#DC143C" }}>Membership</div>
                                <div className='nav-links-footer' onClick={()=> navigate('/Contact')} style={{ cursor: "pointer", fontSize: 14, fontWeight: 400, color: "#DC143C" }}>Contact</div>
                            </div>
                            <div class="col-lg-2 col-md-12">
                                <h5 class="" style={{ color: "#fff" }} >Legel</h5>
                                <div className='nav-links-footer' style={{ cursor: "pointer", fontSize: 14, fontWeight: 400, color: "#DC143C" }}>Term of Use</div>
                                <div className='nav-links-footer' style={{ cursor: "pointer", fontSize: 14, fontWeight: 400, color: "#DC143C" }}>Privacy Policy</div>
                            </div>
                            <div class="col-lg-3 col-md-12">
                                <div className='card border-0'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6432846389807!2d75.81016917514495!3d26.91481386000072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6a945f27e7d%3A0x573bf52c0d5579df!2sJai%20Club!5e0!3m2!1sen!2sin!4v1718616200055!5m2!1sen!2sin" width="100%" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                        <hr style={{ backgroundColor: "#B2BABB", height: "1px", border: "none", margin: 0 }} />
                        <div className='d-flex justify-content-between align-items-center py-3' style={{}} >
                            <div class="" style={{ fontSize: 11, fontWeight: 400, color: "#B2BABB" }}>
                                Copyright © 2024 JaiClub • All rights reserved
                            </div>
                            <div class="" style={{ fontSize: 11, fontWeight: 400, color: "#B2BABB" }}>
                                India
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
