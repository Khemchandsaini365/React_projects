import React, { useState, useEffect, useRef } from 'react';
import { IoArrowUpCircleOutline } from "react-icons/io5";
import ManagementCommittee from './ManagementCommittee';
import PastCommittee from './PastCommittee';
import Founder from './Founder';

const Tabs = () => {
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
        scrollToTop();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div>
            <div className='container mt-5' style={{ marginTop:'5%' }} >
                <div className='row pt-5'>
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
            <div className='container'>
                <div className='row'>
                    <div className={`content ${activeTab === 'management-committee' ? 'active' : ''}`} id="management--committee">
                        <div className="tab-Scroll p-4 mt-4">
                            <ManagementCommittee />
                        </div>
                    </div>
                    <div className={`content ${activeTab === 'past' ? 'active' : ''}`} id="past">
                        <div className="tab-Scroll p-4 mt-4"><PastCommittee />
                        </div>
                    </div>
                    <div className={`content ${activeTab === 'founder' ? 'active' : ''}`} id="founder">
                        <div className="tab-Scroll p-4 mt-4">
                            <Founder />
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-to-top-button rounded-2" onClick={scrollToTop} style={{ width: 40, height: 40, backgroundColor: "#ff68f0", color: "#fff", alignItems: "center", justifyContent: "center", display: "flex", }}><IoArrowUpCircleOutline style={{ fontSize: 30 }} /></div>
        </div>
    );
};

export default Tabs;
