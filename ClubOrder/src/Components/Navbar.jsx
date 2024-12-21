import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";

import { RiSettings2Fill, RiShutDownLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { searchApiData } from "../Redux/ApiData/ApiDataSlice";
import { removeTokenFromLocalStorage } from "../Secure";
import logo from "../Images/EasyPOSLogo.png";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchVal(value);
    dispatch(searchApiData(value)); // Dispatch the action with the search term
  };

  const handleLogout = () => {
    removeTokenFromLocalStorage();
  };

  // "https://cluborder.eterp.in/Content/images/POS%20Logo%20copy2.png";
  return (
    <nav
      className="navbar navbar-expand-lg p-0 mainNav"
      style={{
        backgroundColor: "#a5d8dd",
      }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand col-md-4 col-lg-2 col-xl-2 p-0"
          href="/dashboard"
        >
          <img src={logo} alt="" width="100%" style={{ maxWidth: "150px" }} />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2  w-75 mb-lg-0 d-flex justify-content-evenly ">
            <li className="nav-item  h6">
              <NavLink
                to="/dashboard"
                activeClassName="active "
                className=" p-1 link-underline-info text-dark "
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item  h6">
              <NavLink
                to="/companies"
                activeClassName="active "
                className=" p-1 link-underline-info text-dark "
              >
                Companies
              </NavLink>
            </li>
            <li className="nav-item  h6">
              <NavLink
                to="/license"
                activeClassName="active "
                className=" p-1 link-underline-info text-dark "
              >
                License
              </NavLink>
            </li>
            <li className="nav-item  h6">
              <NavLink
                to="/api"
                activeClassName="active "
                className=" p-1 link-underline-info text-dark "
              >
                Api
              </NavLink>
            </li>
            <li className="nav-item  h6">
              <NavLink
                to="/allclients"
                activeClassName="active "
                className=" p-1 link-underline-info text-dark "
              >
                Login
              </NavLink>
            </li>
          </ul>

          <div className="  dropdown mx-5 profile ">
            <a
              href="#"
              className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle "
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <p style={{ fontSize: "25px" }} className=" align-top">
                <FaUserCircle />
              </p>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow dropdown-menu-end">
              {/* <li classname="">
                <a className="d-flex justify-content-between dropdown-item " href="#">
                  Profiles
                  <div className="px-2">
                    <CgProfile />
                  </div>
                </a>
              </li> */}
              <li>
                <a
                  className="d-flex justify-content-between dropdown-item "
                  href="#"
                >
                  Settings
                  <div className="px-2">
                    <RiSettings2Fill />
                  </div>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="" onClick={handleLogout}>
                <a
                  className="d-flex justify-content-between dropdown-item "
                  href="/"
                >
                  Log out
                  <div className="px-2">
                    <RiShutDownLine />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
