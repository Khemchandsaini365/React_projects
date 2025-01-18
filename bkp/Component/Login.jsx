import React, { useState } from 'react';
import logo from '../Images/jaiclub.png';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';

export default function Login() {

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
                    <div className='col-lg-6 m-auto mt-5 pb-5'>
                        <div class="wrapper mb-5">
                            <form action="#">
                                <div className='d-flex justify-content-center'>
                                    <img src={logo} style={{ width: "100px" }} />
                                </div>
                                <h2 className='mt-3' style={{ color: "#DC143C" }} >Member Login</h2>
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
                                            placeholder='Enter your password'
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
                                <div class="forget" onClick={()=> navigate('/ResetPassword')} >
                                    <a href="#" className='text-end'>Reset password?</a>
                                </div>
                                <button type="submit" onClick={() => navigate('/Home')}>Login</button>
                                <div class="register mb-5">
                                    {/* <p>Don't have an account? <a href="#">Register</a></p> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
