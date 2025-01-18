import React, { useState } from 'react';
import FeildClub from '../Images/JCPIC/unnamed.jpg';
import Karnavati from '../Images/JCPIC/karnavati.jpeg';

export default function AffiliationTabs() {

    const [activeTab, setActiveTab] = useState('1');

    const tabData = [
        {
            id: '1',
            cityName: 'AHMEDABAD',
            clubName: 'Karnavati Club Ltd',
            pincode: 380058,
            clubAddress: 'Gandhinagar Sarkhej Highway, Ahmedabad',
            phonNo: '079-26926060',
            fax: '079-26929748',
            email: 'club@karnavaticlub.com',
            webSite: 'www.karnavaticlub.com',
            mobNo: 9829123333,
            img: Karnavati
        },
        {
            id: '2',
            cityName: 'UDAIPUR',
            clubName: 'Field Club',
            clubAddress: 'Fatehpura, Udaipur',
            pincode: 313001,
            phonNo: "0294-2524816",
            fax: "0294-2526317",
            email: 'info@fieldclubindia.com',
            webSite: 'www.fieldclubindia.com',
            mobNo: 92140-66632,
            img: FeildClub
        },
    ];

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className='row'>
                        <div className='text-center mb-5 pt-5' style={{ cursor: "pointer", fontSize: '2.5em', fontWeight: 600, color: "#DC143C", }}>Affiliation</div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        {/* Tabs nav */}
                        <div className='Affiliation-scroll' >
                            <div className="nav flex-column nav-pills nav-pills-custom-Affiliation rounded-0 m-0" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                {tabData.map((tab) => (
                                    <a
                                        key={tab.id}
                                        className={`nav-link p-2 mb-2 mx-2 ${activeTab === tab.id ? 'active' : ''}`}
                                        id={`${tab.id}-tab`}
                                        onClick={() => handleTabClick(tab.id)}
                                        role="tab"
                                        aria-controls={tab.id}
                                        aria-selected={activeTab === tab.id}
                                    >
                                        {/* <i className={`fa ${tab.icon} mr-2`}></i> */}
                                        <div className="text-start" style={{ cursor: "pointer", fontSize: '1em', fontWeight: 600, }}>{tab.clubName}</div>
                                        <div className="text-start" style={{ cursor: "pointer", fontSize: '.9em', fontWeight: 400, }}>{tab.cityName}, {tab.state} | {tab.clubAddress}, {tab.pincode}</div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        {/* Tabs content */}
                        <div className="tab-content" id="v-pills-tabContent" >
                            {tabData.map((tab) => (
                                <div
                                    key={tab.id}
                                    className={`tab-pane fade shadow rounded p-0 ${activeTab === tab.id ? 'show active' : ''}`}
                                    id={tab.id}
                                    role="tabpanel"
                                    aria-labelledby={`${tab.id}-tab`}
                                    style={{ backgroundColor: "#fff", }}
                                >
                                    <div className='row'>
                                        <div className='col-lg-12 col-md-6 col-sm-12 p-0'>
                                            <div className='card border-0 rounded-0' style={{ width: "100%" }} >
                                                <img className='card-img-top' src={tab.img} style={{ width: "100%", height: '25vh', objectFit: "cover" }} />
                                                <div className='card-body Affiliation-fullDtl'>
                                                    <div className="font-italic mb-4 text-start" style={{ fontSize: '1.5em', fontWeight: 400, color: "#DC143C" }}>{tab.clubName}</div>
                                                    <div className="font-italic text-start" style={{ fontSize: '1em', fontWeight: 400, color: "#DC143C" }}>Closed</div>
                                                    <p className="font-italic text-start" style={{ fontSize: '.8em', fontWeight: 600, color: "#000" }}>N/A</p>
                                                    {/* <div className="font-italic text-start" style={{ fontSize: '1em', fontWeight: 400, color: "#DC143C" }}>Accomodation</div>
                                                    <p className="font-italic text-start" style={{ fontSize: '.8em', fontWeight: 600, color: "#000" }}>Yes, 06 residential rooms</p> */}
                                                    <div className="font-italic text-start" style={{ fontSize: '1em', fontWeight: 400, color: "#DC143C" }}>Mobile No.</div>
                                                    <p className="font-italic text-start" style={{ fontSize: '.8em', fontWeight: 600, color: "#000" }}>{tab.mobNo}</p>
                                                    <div className="font-italic text-start" style={{ fontSize: '1em', fontWeight: 400, color: "#DC143C" }}>Phone No.</div>
                                                    <p className="font-italic text-start" style={{ fontSize: '.8em', fontWeight: 600, color: "#000" }}>{tab.phonNo}</p>
                                                    <div className="font-italic text-start" style={{ fontSize: '1em', fontWeight: 400, color: "#DC143C" }}>Fax No.</div>
                                                    <p className="font-italic text-start" style={{ fontSize: '.8em', fontWeight: 600, color: "#000" }}>{tab.fax}</p>
                                                    <div className="font-italic text-start" style={{ fontSize: '1em', fontWeight: 400, color: "#DC143C" }}>Email</div>
                                                    <p className="font-italic text-start" style={{ fontSize: '.8em', fontWeight: 600, color: "#000" }}>{tab.email}</p>
                                                    <div className="font-italic text-start" style={{ fontSize: '1em', fontWeight: 400, color: "#DC143C" }}>Website</div>
                                                    <p className="font-italic text-start" style={{ fontSize: '.8em', fontWeight: 600, color: "#000" }}>{tab.webSite}</p>
                                                </div>
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
