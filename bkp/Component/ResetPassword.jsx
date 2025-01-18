import React, { useState } from 'react';
import logo from '../Images/jaiclub.png';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {

    const navigate = useNavigate()

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className='container-fluid' style={{ backgroundColor: "#000", width:"100%", height:"100%" }} >
                <div className='row p-5'>
                    <div className='col-lg-6 m-auto pb-5'>
                        <div class="wrapper mb-5">
                            <form action="#">
                                <div className='d-flex justify-content-center'>
                                    <img src={logo} style={{ width: "100px" }} />
                                </div>
                                <h2 className='mt-3' style={{ color: "#DC143C" }} >Reset Password</h2>
                                <div class="input-field">
                                    <input type="text" required />
                                    <label>Membership No.</label>
                                </div>
                                <div class="input-field">
                                    <input type="text" required />
                                    <label>Member Name</label>
                                </div>
                                <div class="input-field">
                                    <input type="text" required />
                                    <label>Mobile Number</label>
                                </div>
                                <div className="input-field">
                                    <div className="d-flex align-items-center">
                                        <input
                                            value={password}
                                            type={showPassword ? "text" : "password"}
                                            onChange={handlePasswordChange}
                                            required
                                            className="flex-grow-1"
                                            style={{ marginRight: '10px' }}
                                            placeholder='Enter New password'
                                        />
                                        <span
                                            onClick={togglePasswordVisibility}
                                            className="input-group-text password-toggle border-0 bg-transparent"
                                            id="basic-addon2"
                                            style={{ cursor: "pointer", color: "#fff" }}
                                        >
                                            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                        </span>
                                    </div>
                                    <label></label>
                                </div>
                                <button onClick={()=> navigate('/Thanx')} className='mt-3' type="submit">Reset Password</button>
                                <div class="register">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
