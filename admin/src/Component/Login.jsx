import React, { useState } from 'react';
import logo from '../images/POSLogo.png';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate()

    const [userId, setuserId] = useState('');
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const Login = () => {
        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "tokenData": "OWdBQUFCK0xDQUFBQUFBQUJBQTlqczBPZ2pBUWhGK2w2ZGtRa0FRU2JpcGUvUW5xdmNKcURLV3R1MFZDakQ2N0xjRm1UN1B6VFdiZWZLTTdJOVM0RXgzd3dpbFZnN0hzQkMycnRPenRReXUrNEpXKzJVRWcvQ25aWDlrZUcwQzJNc2I1RjBEeVpNR1RLUGJuTTRBdndEbEI5NldTM1VoUG1SdEpiVVJROXdnMElaRUNHL2lEUnV2NE5JMno4RHM3Ym03MWF5Y1plRUUwYUd5Y2YweUhyUDJxUEFsbXVaN3J0LzlzS2F6Z254OHFwQWVYOWdBQUFBPT0=",
                "user": "admin",
                "pwd": "aa"
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("https://cluborder.eterp.in/Admin_VerifyLogin", requestOptions)
                .then((response) => response.json())
                .then((result) => console.log(result))
                .catch((error) => console.error(error));
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div className='container-fluid' style={{ backgroundColor: "#000", width: "100%", height: "100vh" }} >
                <div className='row p-5'>
                    <div className='col-lg-6 m-auto mt-5 pb-5'>
                        <div class="wrapper mb-5">
                            {/* <form action="#"> */}
                            <div className='d-flex justify-content-center'>
                                <img src={logo} style={{ width: "50%" }} />
                            </div>
                            <h2 className='mt-3' style={{ color: "#DC143C" }} >Login</h2>
                            <div class="input-field">
                                <input type="text" value={userId} onChange={(e) => setuserId(e.target.value)} required />
                                <label>User Id</label>
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
                                        style={{ cursor: "pointer", color: "#DC143C" }}
                                    >
                                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                    </span>
                                </div>
                                <label></label>
                            </div>
                            <div class="forget">
                                <a href="#" className='text-end'>Forgot password?</a>
                            </div>
                            <button onClick={()=> navigate('/CompList')}>Log In</button>
                            <div class="register">
                                <p>Don't have an account? <a href="#">Register</a></p>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
