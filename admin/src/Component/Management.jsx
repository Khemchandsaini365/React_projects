import React, { useState, useEffect, useRef } from 'react';
import ManagementCommittee from './MangCommittee';
import PastCommmittee from './PastCommmittee';
import Founder from './Founder';

export default function Management() {

    const [activeTab, setActiveTab] = useState('management-committee');
    const underlineRef = useRef(null);
    const navTabsRef = useRef([]);

    const handleTabClick = (target) => {
        setActiveTab(target);
    };

    const updateUnderline = () => {
        const activeTabElement = navTabsRef.current.find(tab => tab.dataset.target === activeTab);
        if (activeTabElement && underlineRef.current) {
            underlineRef.current.style.width = `${activeTabElement.offsetWidth}px`;
            underlineRef.current.style.left = `${activeTabElement.offsetLeft}px`;
        }
    };

    useEffect(() => {
        updateUnderline();
        window.addEventListener('resize', updateUnderline);
        return () => {
            window.removeEventListener('resize', updateUnderline);
        };
    }, [activeTab]);

    useEffect(() => {
        updateUnderline();
    }, []);

    return (
        <div>
            <div className='scroll-box'>
                <div className='p-2 pe-2 d-flex justify-content-between'>
                    <div className='text-start' style={{ fontFamily: "Poppins", fontSize: "26px", fontWeight: 500, color: '#566573' }}>Management</div>
                </div>
                <div className='container' >
                    <div className='row'>
                        <div className='col-md-6 me-auto'>
                            <div className="navtabs">
                                {['management-committee', 'past', 'founder'].map((tab, index) => (
                                    <div
                                        key={tab}
                                        ref={el => navTabsRef.current[index] = el}
                                        className={`navtab ${activeTab === tab ? 'active' : ''}`}
                                        data-target={tab}
                                        onClick={() => handleTabClick(tab)}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </div>
                                ))}
                                <div className="underline" ref={underlineRef}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container g-0'>
                    <div className='row'>
                        <div className={`content ${activeTab === 'management-committee' ? 'active' : ''}`} id="management--committee">
                            <div className="tab-Scroll py-4">
                                <ManagementCommittee />
                            </div>
                        </div>
                        <div className={`content ${activeTab === 'past' ? 'active' : ''}`} id="past">
                            <div className="tab-Scroll py-4">
                                <PastCommmittee />
                            </div>
                        </div>
                        <div className={`content ${activeTab === 'founder' ? 'active' : ''}`} id="founder">
                            <div className="tab-Scroll py-4">
                                <Founder />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
