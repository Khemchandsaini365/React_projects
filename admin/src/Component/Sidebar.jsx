
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/POSLogo.png';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';

import { LuLayoutDashboard, LuActivity } from "react-icons/lu";
import { MdOutlineLeaderboard, MdOutlineStickyNote2, MdGroups } from "react-icons/md";
import { RiLogoutCircleRLine, RiNewspaperLine } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";

const Sidebar = () => {

  return (
    <>
      <div className='sidebar'>
        <Box sx={{ height: "100vh", color: "#fff", backgroundColor: "#000", overflowY: "scroll" }} role="presentation">
          <Stack direction="row" sx={{ padding: "5px 10px 5px 10px" }}>
            <NavLink className="text-decoration-none text-center" >
              <div className='d-flex align-items-end' >
                <img class="" src={logo} alt="" style={{ width: '100%' }} />
              </div>
            </NavLink>
          </Stack>
          <List>
            <ul className="text-start p-0" style={{ listStyle: "none" }} >
              <li className="nav-item">
                <NavLink
                  to="/CompList"
                  activeClassName="active"
                  className="nav-links"
                >
                  <LuLayoutDashboard className='me-2' />
                  Compinies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/HomeData"
                  activeClassName="active"
                  className="nav-links"
                >
                  <LuActivity className='me-2' />
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  to="/Location"
                  activeClassName="active"
                  className="nav-links"
                >
                  <FaMapLocationDot className='me-2' />
                  Location
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  to="/Event"
                  activeClassName="active"
                  className="nav-links"
                >
                  <MdOutlineLeaderboard className='me-2' />
                  Event
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/News"
                  activeClassName="active"
                  className="nav-links"
                >
                  <RiNewspaperLine className='me-2' />
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Affiliation"
                  activeClassName="active"
                  className="nav-links"
                >
                  <MdOutlineLeaderboard className='me-2' />
                  Affiliation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/CircularNotice"
                  activeClassName="active"
                  className="nav-links"
                >
                  <MdOutlineStickyNote2 className='me-2' />
                  Circular Notice
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Management"
                  activeClassName="active"
                  className="nav-links"
                >
                  <MdGroups className='me-2' />
                  Management
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Contact"
                  activeClassName="active"
                  className="nav-links"
                >
                  <IoMdContact className='me-2' />
                  Enquiry
                </NavLink>
              </li>
            </ul>
            <ul className="text-start mb-3 p-0 fixed-bottom" style={{ listStyle: "none" }} >
              <li className="">
                <NavLink
                  to="/Login"
                  activeClassName="active"
                  className="nav-links"
                >
                  <RiLogoutCircleRLine className='me-2' />
                  Logout
                </NavLink>
              </li>
            </ul>
          </List>
        </Box >
      </div>
    </>
  );
};

export default Sidebar;