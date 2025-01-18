import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { RiMenu2Fill } from "react-icons/ri";
import logo from '../Images/jaiclub.png';

// import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

export default function Navbar() {

  const navigate = useNavigate()
  const [click, setClick] = useState(false);

  const handleClick = () => { setClick(!click); setShow(false) };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <nav class="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#fff", overflow: "hidden" }}>
        <div class="container-fluid ">
          <div className="w-100 d-flex justify-content-between align-items-center">
          <span 
  className="me-4 d-block d-lg-none" 
  onClick={handleShow} 
  style={{ cursor: "pointer", color: "#000" }}
>
  <RiMenu2Fill style={{ fontSize: 30 }} />
</span>


            <div class="navbar-brand" onClick={() => navigate('/Home')} style={{ color: '#E2DFD0', fontFamily: "Poppins", cursor: "pointer" }} ><img src={logo} style={{ width: "60%", objectFit: "cover" }} /></div>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/Home"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/About"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/Event"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/Facility"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Facility
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/Membership"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Membership
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/Management"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Management
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/Affiliation"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Affiliation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/CircularNotice"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  News/Message
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/Contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/Login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Sidebar -->  */}
      <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-dark">
            <div className="d-flex align-items-end ">
              <img src={logo} style={{ width: 60, objectFit: "cover" }} />
              <div className='ps-3'>
                <div className='' style={{ cursor: "pointer", fontSize: '2em', fontWeight: 600, color: "#DC143C", fontFamily: '"Playwrite FR Moderne", cursive' }}>Jai Club</div>
                <div className='' style={{ cursor: "pointer", fontSize: '.7em', fontWeight: 600, color: "#000" }}>THE TRUE SPIRIT OF LIFE</div>
              </div>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                exact
                to="/Home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/About"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Facility"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Facility
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Membership"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Membership
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Management"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Management
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Affiliation"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Affiliation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/CircularNotice"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                News/Message
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/Login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

