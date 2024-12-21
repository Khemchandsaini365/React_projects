import { useEffect, useState } from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import logo from "../Image/EasyTrade.png";
import { LuDollarSign, LuLayoutDashboard, LuLogOut, LuPieChart, LuUsers } from "react-icons/lu";


import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";

export default function Sidebar() {
const Navigate=useNavigate()

  const Logout = () => {
    // Redirect to the login page
    // Update the URL as needed
    Navigate("/")
    localStorage.removeItem("user")
};

  return (
    <div>
      <div className="sidebar">
        <Box
          sx={{
            height: "100vh",
            color: "#fff",
            backgroundColor: "#f8f9fa",
            overflowY: "scroll",
            borderRight: "1px solid #fffffc",
          }}
          role="presentation"
        >
          <Stack
            direction="row"
            sx={{
              padding: "5px 5px 5px 5px",
              borderBottom: "1px solid #fffffc",
            }}
          >
            <NavLink
              to="/dashboard"
              className="text-decoration-none text-center p-4"
            >
              <img src={logo} alt="EasyTrade" style={{ width: "90%" }} />
            </NavLink>
          </Stack>
          <List >
            <ul className="text-start  py-5 " style={{listStyle:"none", lineHeight:"3", fontSize:"20px" }}>
              <li className="" >
                <NavLink
                  to="/dashboard"
                  activeClassName="active "
                  className=" p-1 link-underline-light"
               
                >
                  <LuLayoutDashboard className="me-2" />
                  Dashboard
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/Customer"
                  activeClassName="active"
                  className=" p-1 link-underline-light"
                  
                >
                  <LuUsers className="me-2" />
                  Customers
                </NavLink>
              </li>

              <li className=" ">
                <NavLink
                  to="/rechargehistory"
                  activeClassName="active"
                  className=" p-1 link-underline-light"
                >
                  <LuDollarSign className="me-2" />
                  Recharge
                </NavLink>
              </li>

              <li className=" ">
                <NavLink
                  to="/usage"
                  activeClassName="active"
                  className=" p-1 link-underline-light"
                  
                >
                  <LuPieChart className="me-2" />
                  Usage
                </NavLink>
              </li>
              <li className=" d-inline py-3 px-0 ">
                <div
                  onClick={Logout}
                  to="#"
                  activeClassName="active"
                  className=" p-1 link-underline-light text-primary "
                  
                  
                >
                  <LuLogOut className="me-2" />
                  Logout
                </div>
              </li>
            </ul>
          </List>
        </Box>
      </div>
    </div>
  );
}
