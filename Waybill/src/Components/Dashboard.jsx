import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Header from "./Header";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableFooter,
} from "@mui/material";
import {
  LuUsers,
  LuChevronRight,
  LuCheckCheck,
  LuBarChart2,
  LuCpu,
  LuClock,
  LuAlertCircle,
  LuSettings,
  LuInfinity,
  LuRefreshCw,
} from "react-icons/lu";
import { FiDollarSign, FiSend } from "react-icons/fi";
import NimitSir from "../Image/nimitsir.jpg";

import { useNavigate } from "react-router-dom";
import { LineChart } from "@mui/x-charts/LineChart";
import ReactApexChart from "react-apexcharts";
import { FaLastfm } from "react-icons/fa";

export default function Dashboard() {
  const Navigate = useNavigate();

  const [options, setOptions] = useState({
    chart: {
      height: 300,
      type: "line",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#90A4AE",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      show: true,
    },
    xaxis: {
      type: "weekly",
      categories: ["Mon", "Tue", "Wed", "Thus", "Fri", "Sat", "Sun"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series1",
      data: [31, 49, 28, 60, 42, 109, 100],
    },
  ]);

  /////**********************/

  const [usage_history, setUsageHistory] = useState([]);
  const [filter_usage_history, setFilterUsageHistory] = useState([]);

  const [usage_history_dashboard, setUsage_history_dashboard] = useState([]);
  const [filter_Usage_history_dashboard, setFilterUsage_history_dashboard] =
    useState([]);

  const [customers, setCustomers] = useState([]);
  const [filter_customers, setFilterCustomers] = useState([]);

  const [recharge_history, setRechargeHistory] = useState([]);
  const [filter_recharge_history, setFilterRechargeHistory] = useState([]);

  const filterUsageHistory = (toSearch) => {
    setFilterUsageHistory(
      usage_history.filter((el) =>
        el.CompanyName.toLowerCase().includes(toSearch.toLowerCase())
      )
    );
  };

  const getCustomers = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjIiLCJVc2VyTmFtZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoidW5kZWZpbmUiLCJqdGkiOiI4OGZhZGM0Zi0xNjEzLTQ1YzYtYmZjYi1lODNjYmQ2MTY1NmUiLCJleHAiOjE3MjM3MzMzNTYsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzcyIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNzIifQ.YAHtrX3IH2U3EiuA6SUagXuOvg4U0CaZR4q7EwJJxpg"
    );

    const raw = JSON.stringify({
      tokenData:
        "b2dBQUFCK0xDQUFBQUFBQUJBQ3JWZ3BPTFNwTExmSkx6RTFWc2xJcVRqZkt5OG10TEM3TU1TL0lLYzdXSzA1TkxpMUtMUVlyMGN0TExWSFNnYW9QeUM4cUFhbzNOall3ZzR1RkF0VUJ4VUpjZzBNOC9kemp3eDBqblR4OWZCQmFFb3VMeS9PTFVvQktEQlF6RFhOTWlzMEQ0Wkl1VGxBWG9PdXVCUUNEbHRXQ29nQUFBQT09",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://waybillback.eterp.in/CompanyInfo", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setCustomers(result.data);
        setFilterCustomers(result.data);
      })
      .catch((error) => console.error(error));
  };

  const getRechargeDetails = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      tokenData:
        "b2dBQUFCK0xDQUFBQUFBQUJBQ3JWZ3BPTFNwTExmSkx6RTFWc2xJcVRqZkt5OG10TEM3TU1TL0lLYzdXSzA1TkxpMUtMUVlyMGN0TExWSFNnYW9QeUM4cUFhbzNOall3ZzR1RkF0VUJ4VUpjZzBNOC9kemp3eDBqblR4OWZCQmFFb3VMeS9PTFVvQktEQlF6RFhOTWlzMEQ0Wkl1VGxBWG9PdXVCUUNEbHRXQ29nQUFBQT09",
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("https://waybillback.eterp.in/RechargeSystemList", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status) {
          setRechargeHistory(
            result.data?.filter((item) => {
              return (
                item?.Date?.split("T")[0] ==
                new Date().toISOString()?.split("T")[0]
              );
            })
          );
          let data = result.data?.filter((item) => {
            return (
              item?.Date?.split("T")[0] ==
              new Date().toISOString()?.split("T")[0]
            );
          });
          console.log(data);

          setFilterRechargeHistory(result.data);
        }
      })
      .catch((error) => console.error(error));
  };

  const filterRechargeHistory = (toSearch) => {
    setFilterRechargeHistory(
      recharge_history.filter((el) =>
        el.CompanyName.toLowerCase().includes(toSearch.toLowerCase())
      )
    );
  };

  const getRechargeHistory = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      tokenData:
        "b2dBQUFCK0xDQUFBQUFBQUJBQ3JWZ3BPTFNwTExmSkx6RTFWc2xJcVRqZkt5OG10TEM3TU1TL0lLYzdXSzA1TkxpMUtMUVlyMGN0TExWSFNnYW9QeUM4cUFhbzNOall3ZzR1RkF0VUJ4VUpjZzBNOC9kemp3eDBqblR4OWZCQmFFb3VMeS9PTFVvQktEQlF6RFhOTWlzMEQ0Wkl1VGxBWG9PdXVCUUNEbHRXQ29nQUFBQT09",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://waybillback.eterp.in/UsageSystemList", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status) {
          setUsageHistory();
          setFilterUsageHistory(
            result.data?.filter((item) => {
              return (
                item?.Date?.split("T")[0] == new Date("2024-10-19T12:11:00")
                // new Date().toISOString()?.split("T")[0]
              );
            })
          );
          console.log(result.data?.filter((item) => {}));
        }
      })
      .catch((error) => console.error(error));
  };

  const getUsageHistory = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      tokenData:
        "b2dBQUFCK0xDQUFBQUFBQUJBQ3JWZ3BPTFNwTExmSkx6RTFWc2xJcVRqZkt5OG10TEM3TU1TL0lLYzdXSzA1TkxpMUtMUVlyMGN0TExWSFNnYW9QeUM4cUFhbzNOall3ZzR1RkF0VUJ4VUpjZzBNOC9kemp3eDBqblR4OWZCQmFFb3VMeS9PTFVvQktEQlF6RFhOTWlzMEQ0Wkl1VGxBWG9PdXVCUUNEbHRXQ29nQUFBQT09",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://waybillback.eterp.in/UsageSystemList", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status) {
          let a = result.data?.filter((item) => {
            return (
              item?.Date?.split("T")[0] ==
              new Date().toISOString()?.split("T")[0]
            );
          });
          setUsage_history_dashboard(a);
          setFilterUsageHistory(a);
          console.log(a);
        }
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getRechargeHistory();
    getCustomers();
    getRechargeDetails();
    getUsageHistory();
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      Navigate("/login");
    }
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showUsage, setShowUsage] = useState(false);
  const handleCloseUsage = () => setShowUsage(false);
  const handleShowUasge = () => setShowUsage(true);

  const showTodayRecharge = () => {
    return;
  };
  /////**********************/

  return (
    <div className="container-fluid ">
      <div className="mb-3 d-flex ">
        <Header />
        <div>
          <div style={{ fontWeight: 500, fontSize: "2em", color: "black" }}>
            Dashboard
          </div>
          <div style={{ fontWeight: 400, fontSize: "15px", color: "gray" }}>
            Welcome, Easy Trade{" "}
            <span
              className="px-2 rounded-1"
              style={{
                textDecoration: "underline",
                color: "gray",
                fontSize: "13px",
              }}
            >
              E-Way Bill Recharge
            </span>
          </div>
        </div>
      </div>
      <div className="row mb-3 d-flex justify-content-evenly">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <div
            className="card p-3 rounded-4"
            style={{
              width: "100%",
              border: "1px solid #ffffff40",
              backgroundColor: "#f4f3ee",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div
                style={{ fontWeight: 400, fontSize: "18px", color: "black" }}
              >
                Today's Usage
              </div>
              <LuUsers style={{ fontSize: "30px", color: "black" }} />
            </div>
            <div style={{ fontWeight: 600, fontSize: "30px", color: "black" }}>
              {/*             
            {filter_usage_history.reduce((sum=0,it)=>{
              return sum+it.Utility_Amt;
              
            })} */}

              {usage_history_dashboard.reduce((accumulator, current) => {
                return accumulator + current.Utility_Amt;
              }, 0)}
            </div>
            <div
              onClick={handleShowUasge}
              className="text-end"
              style={{
                fontWeight: 500,
                fontSize: "14px",
                color: "gray",
                cursor: "pointer",
              }}
            >
              <NavLink className=" p-1 link-underline-light text-dark">
                View{" "}
                <LuChevronRight style={{ fontSize: "15px", color: "gray" }} />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <div
            className="card p-3 rounded-4"
            style={{
              width: "100%",
              border: "1px solid #ffffff40",
              backgroundColor: "#f4f3ee",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div
                style={{ fontWeight: 400, fontSize: "18px", color: "black" }}
              >
                Total Users
              </div>
              <LuUsers style={{ fontSize: "30px", color: "black" }} />
            </div>
            <div style={{ fontWeight: 600, fontSize: "30px", color: "black" }}>
              {customers.length}
            </div>
            <div
              className="text-end"
              style={{
                fontWeight: 500,
                fontSize: "14px",
                color: "gray",
                cursor: "pointer",
              }}
            >
              <NavLink
                to="/customer"
                activeClassName="active "
                className=" p-1 link-underline-light text-dark"
              >
                View{" "}
                <LuChevronRight style={{ fontSize: "15px", color: "gray" }} />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <div
            className="card p-3 rounded-4"
            style={{
              width: "100%",
              border: "1px solid #ffffff40",
              backgroundColor: "#f4f3ee",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div
                style={{ fontWeight: 400, fontSize: "18px", color: "black" }}
              >
                Today's Recharge
              </div>
              <FiDollarSign style={{ fontSize: "30px", color: "black" }} />
            </div>
            <div style={{ fontWeight: 600, fontSize: "30px", color: "black" }}>
              {recharge_history.reduce((accumulator, current) => {
                return accumulator + current.Recharge_Amt;
              }, 0)}
            </div>
            <div
              onClick={handleShow}
              className="text-end"
              style={{
                fontWeight: 500,
                fontSize: "14px",
                color: "gray",
                cursor: "pointer",
              }}
            >
              <NavLink className=" p-1 link-underline-light text-dark">
                View{" "}
                <LuChevronRight style={{ fontSize: "15px", color: "gray" }} />
              </NavLink>
            </div>
          </div>
        </div>
        
      </div>
      {
      //********* GRAPH */
      }
      <div className="row d-flex justify-content-center">
        <div className="col-lg-10  col-md-6 col-sm-12 mb-3 ">
          <div
            className="p-3"
            style={{ width: "100%", border: "1px solid #ffffff40" }}
          >
            <div id="chart">
              <ReactApexChart
                options={options}
                series={series}
                type="area"
                height={400}
                
              />
            </div>
            <div id="html-dist"></div>
          </div>
        </div>
      
      </div>
      {
      //********* GRAPH */
      }
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Today's Recharge</Modal.Title>
        </Modal.Header>
        <Paper>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "600",
                      minWidth: 50,
                      // fontSi
                      fontSize: "20px",
                    }}
                  >
                    Name
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "600",
                      minWidth: 50,
                      // fontSi
                      fontSize: "20px",
                    }}
                  >
                    Amount
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "600",
                      minWidth: 50,
                      // fontSi
                      fontSize: "20px",
                    }}
                  >
                    Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recharge_history.map((item, index) => {
                  return (
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: "700",
                          minWidth: 50,
                          fontSize: 18,
                        }}
                      >
                        {item.CompanyName}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: "700",
                          minWidth: 50,
                          fontSize: 18,
                        }}
                      >
                        {item.Recharge_Amt}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: "700",
                          minWidth: 50,
                          fontSize: 18,
                        }}
                      >
                        {item.Date?.split("T")[0]
                          ?.split("-")
                          ?.reverse()
                          ?.join("-")}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Modal>

      {/* ***************** */}

      <Modal
        show={showUsage}
        onHide={handleCloseUsage}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Today's Usage</Modal.Title>
        </Modal.Header>
        <Paper>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "600",
                      minWidth: 50,

                      fontSize: "20px",
                    }}
                  >
                    Name
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "600",
                      minWidth: 50,

                      fontSize: "20px",
                    }}
                  >
                    Amount
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "600",
                      minWidth: 50,
                      fontSize: "20px",
                    }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "600",
                      minWidth: 50,
                      fontSize: "20px",
                    }}
                  >
                    Voucher Date
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "600",
                      minWidth: 50,
                      fontSize: "20px",
                    }}
                  >
                    WayBillNo

                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usage_history_dashboard.map((item, index) => {
                  return (
                    <TableRow>
                      <TableCell
                        sx={{
                          fontWeight: "700",
                          minWidth: 50,
                          fontSize: 18,
                        }}
                      >
                        {item.CompanyName}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: "700",
                          minWidth: 50,
                          fontSize: 18,
                        }}
                      >
                        {item.Utility_Amt}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: "700",
                          minWidth: 50,
                          fontSize: 18,
                        }}
                      >
                        {item.Date?.split("T")[0]
                          ?.split("-")
                          ?.reverse()
                          ?.join("-")}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: "700",
                          minWidth: 50,
                          fontSize: 18,
                        }}
                      >
                        {item.VDate?.split("T")[0]
                          ?.split("-")
                          ?.reverse()
                          ?.join("-")}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: "700",
                          minWidth: 50,
                          fontSize: 18,
                        }}
                      >
                        {item.WayBillNo}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Modal>

      {/* ***************** */}
    </div>
  );
}
