import React, { useEffect } from 'react';
import { FaLinkedin, FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineLocationOn, MdOutlineFax, MdMailOutline } from "react-icons/md";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import Back2 from '../Images/JCPIC/back2.jpg';
import logo from '../Images/jaiclub.png';

export default function Contact() {

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
            <div className='container' style={{ marginTop: "5%" }} >
                <div className='row mt-5'>
                    <div className='text-center mb-5 pt-5' style={{ cursor: "pointer", fontSize: '3em', fontWeight: 600, color: "#DC143C", }}> Contact Us </div>
                </div>
                <div className='row align-items-center mb-5'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='card p-5 border-0'>
                            <div className='d-flex align-items-center mb-2' >
                                <img class="" src={logo} alt="" style={{ width: 100 }} />
                                <div className=''>
                                    <div className='nav-links-footer text-start' style={{ cursor: "pointer", fontSize: '2em', fontWeight: 600, color: "#DC143C", fontFamily: '"Playwrite FR Moderne", cursive' }}>Jai Club</div>
                                    <div className='nav-links-footer text-start' style={{ cursor: "pointer", fontSize: '1em', fontWeight: 600, color: "#000" }}>THE TRUE SPIRIT OF LIFE</div>
                                </div>
                            </div>
                            <div className='d-flex align-items-center mb-1'>
                                <div className='justify-content-center align-items-center d-flex rounded-1' ><MdOutlineLocationOn style={{ fontSize: 16, color: '#DC143C' }} /> </div>
                                <div className='text-start ps-3' style={{ cursor: "pointer", fontSize: '.8em', fontWeight: 400, color: "#000" }}>Mahaveer Marg, C-Scheme, Jaipur - 302001 (Raj.)</div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='justify-content-center align-items-center d-flex rounded-1' ><FaPhoneAlt style={{ fontSize: 10, color: '#DC143C' }} /> </div>
                                <div className='text-start ps-4' style={{ cursor: "pointer", fontSize: '.8em', fontWeight: 400, color: "#000" }}>0141-2372321,2372322</div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='justify-content-center align-items-center d-flex rounded-1' ><MdOutlineFax style={{ fontSize: 16, color: '#DC143C' }} /> </div>
                                <div className='text-start ps-3' style={{ cursor: "pointer", fontSize: '.8em', fontWeight: 400, color: "#000" }}>0141-4004988</div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='justify-content-center align-items-center d-flex rounded-1' ><MdMailOutline style={{ fontSize: 16, color: '#DC143C' }} /> </div>
                                <div className='text-start ps-3' style={{ cursor: "pointer", fontSize: '.8em', fontWeight: 400, color: "#000" }}>jaiclub@hotmail.com</div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='justify-content-center align-items-center d-flex rounded-1' ><CiGlobe style={{ fontSize: 16, color: '#DC143C' }} /> </div>
                                <div className='text-start ps-3' style={{ cursor: "pointer", fontSize: '.8em', fontWeight: 400, color: "#000" }}>www.jaiclub.in</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='card border-0'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6432846389807!2d75.81016917514495!3d26.91481386000072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6a945f27e7d%3A0x573bf52c0d5579df!2sJai%20Club!5e0!3m2!1sen!2sin!4v1718616200055!5m2!1sen!2sin" width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid' >
                <div className='row'>
                    <section id="contact" style={{ backgroundImage: `url(${Back2})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <div class="contact-box">
                            <div class="contact-links">
                                <h2>CONTACT</h2>
                                <div class="links">
                                    <div className='d-flex mt-3' style={{ gap: "20px" }}>
                                        <div className='justify-content-center align-items-center d-flex rounded-1 facebook-icon' style={{ width: 30, height: 30, cursor: "pointer" }} ><FaFacebookSquare /> </div>
                                        <div className='justify-content-center align-items-center d-flex rounded-1 insta-icon' style={{ width: 30, height: 30, cursor: "pointer" }} ><GrInstagram /> </div>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-form-wrapper">
                                <form>
                                    <div class="form-item">
                                        <input type="text" name="sender" required />
                                        <label>Name:</label>
                                    </div>
                                    <div class="form-item">
                                        <input type="number" name="sender" required />
                                        <label>Mobile Number:</label>
                                    </div>
                                    <div class="form-item">
                                        <input type="text" name="email" required />
                                        <label>Email:</label>
                                    </div>
                                    <div class="form-item">
                                        <textarea class="" name="message" required></textarea>
                                        <label>Message:</label>
                                    </div>
                                    <button class="submit-btn">Send</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="scroll-to-top-button rounded-2" onClick={scrollToTop} style={{ width: 40, height: 40, backgroundColor: "#ff68f0", color: "#fff", alignItems: "center", justifyContent: "center", display: "flex", }}><IoArrowUpCircleOutline style={{ fontSize: 30 }} /></div>
        </div>
    )
}
