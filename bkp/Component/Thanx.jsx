import React from 'react';
import { FaCheck } from "react-icons/fa";

export default function Thanx() {
    return (
        <div>
            <div className='container mt-5'>
                <div className='row pt-5'>
                    <div className='col-lg-8 col-md-6 col-sm-12 m-auto'>
                        <div className='card border-0'>
                            <header class="site-header" id="header">
                                <p style={{ fontSize: "4em", fontWeight: 800 }} >THANK YOU!</p>
                            </header>
                            <div class="main-content">
                                <FaCheck style={{ fontSize: '8em', color: "#58D68D " }} />
                                <p style={{ fontSize: "2em", fontWeight: 400 }}>Your Password Reset Successfully</p>
                            </div>
                            <footer class="site-footer" id="footer">
                                <p style={{ fontSize: "10px", fontWeight: 400 }}>Copyright © 2024 JaiClub • All rights reserved</p>
                            </footer>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-4 m-auto'>
                                <a href="/Home" className='btn btn-warning rounded-0'>Back to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
