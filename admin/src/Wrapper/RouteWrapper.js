import React from 'react';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import Login from '../Component/Login';
import { useLocation } from 'react-router-dom';

export default function RouteWrapper({ childComponent }) {

    const location = useLocation();

    return (
        location.pathname !== '/' && location.pathname !== '/Login' ?
            <div className='container-fluid g-0'>
                <div className='row g-0'>
                    <div className='col-2 side'>
                        <Sidebar />
                    </div>
                    <div className='col-10 side2'>
                        <Header />
                        {childComponent}
                    </div>
                </div>
            </div>
            :
            <Login />
    )
}