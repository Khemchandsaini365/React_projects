import React, { useState, useEffect, useRef } from 'react';
import './Tabs.css';
import AllUser from './AllUser';
import Customer from './Customer';

export default function Users() {

    const [activeTab, setActiveTab] = useState('All-Users');
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
            <div className='container-fluid' >
                <div className='row'>
                    <div className='col-md-4 me-auto'>
                        <div className="navtabs">
                            {['All-Users', 'Coustomer', 'Reseller'].map((tab, index) => (
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
            <div className='container-fluid g-0'>
                <div className='row'>
                    <div className={`content ${activeTab === 'All-Users' ? 'active' : ''}`} id="All-Users">
                        <div className="tab-Scroll py-4">
                            <AllUser />
                        </div>
                    </div>
                    <div className={`content ${activeTab === 'Coustomer' ? 'active' : ''}`} id="Coustomer">
                        <div className="tab-Scroll py-4">
                            <Customer />
                        </div>
                    </div>
                    <div className={`content ${activeTab === 'Reseller' ? 'active' : ''}`} id="Reseller">
                        <div className="tab-Scroll py-4">
                            <p>Retail</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
