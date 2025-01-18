import React, { useState } from 'react';
import party from '../Images/JCPIC/IMG_5683.jpg';
import Back2 from '../Images/JCPIC/back2.jpg';
import Back1 from '../Images/back.jpg';

export default function EventTabs() {

    const [activeTab, setActiveTab] = useState('1');

    const tabData = [
        {
            id: '1',
            title: 'Event-1',
            date: '19/06/2024',
            img: party,
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        },
        {
            id: '2',
            title: 'Event-2',
            date: '20/06/2024',
            img: Back2,
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        },
        {
            id: '3',
            title: 'Event-3',
            date: '21/06/2024',
            img: Back1,
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        },
    ];

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            <div className='container'>
                <div className="row g-2">
                    <div className='row'>
                        <div className='text-center mb-5 pt-5' style={{ cursor: "pointer", fontSize: '2.5em', fontWeight: 600, color: "#DC143C", }}> Up Coming Events </div>
                    </div>

                    <div className="col-lg-2 col-md-12 col-sm-12">
                        {/* Tabs nav */}
                        <div className="nav flex-column nav-pills nav-pills-custom rounded-0 m-0" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {tabData.map((tab) => (
                                <a
                                    key={tab.id}
                                    className={`nav-link p-2 ${activeTab === tab.id ? 'active' : ''}`}
                                    id={`${tab.id}-tab`}
                                    onClick={() => handleTabClick(tab.id)}
                                    role="tab"
                                    aria-controls={tab.id}
                                    aria-selected={activeTab === tab.id}
                                >
                                    {/* <i className={`fa ${tab.icon} mr-2`}></i> */}
                                    <span className="small" style={{ cursor: "pointer", fontSize: '3.2em', fontWeight: 300, color: "#45b649", }}>{tab.date.split('/')['0']}</span>
                                    <div className="small" style={{ cursor: "pointer", fontSize: '1.2em', fontWeight: 400, color: "#45b649", }}>{tab.date.split('/')[1]}/{tab.date.split('/')[2]}</div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-10 col-md-12 col-sm-12">
                        {/* Tabs content */}
                        <div className="tab-content" id="v-pills-tabContent" >
                            {tabData.map((tab) => (
                                <div
                                    key={tab.id}
                                    className={`tab-pane fade shadow rounded p-0 ${activeTab === tab.id ? 'show active' : ''}`}
                                    id={tab.id}
                                    role="tabpanel"
                                    aria-labelledby={`${tab.id}-tab`}
                                    style={{ backgroundColor: "#000", }}
                                >
                                    <div className='row'>
                                        <div className='col-md-6 p-0'>
                                            <img src={tab.img} style={{ width: "100%", height: "100%" }} />
                                        </div>
                                        <div className='col-md-6 p-0'>
                                            <div className='p-4' style={{ width: "100%" }} >
                                                <h4 className="font-italic mb-4 text-start" style={{ fontSize: '2em', fontWeight: 400, color: "#45b649" }}>{tab.title}</h4>
                                                <p className="font-italic text-white mb-2 text-start" style={{ fontSize: '1em', fontWeight: 300, color: "#45b649" }}>{tab.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
