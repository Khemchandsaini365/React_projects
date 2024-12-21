import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

import { FaEdit, FaEllipsisH } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import Modal from "react-bootstrap/Modal";
import Header from "./Header";

import { toast, ToastContainer } from "react-toastify";

const initAddCustomerData = {
  C_Name: "",
  C_GSTName: "",
  C_MobileNo: "",
  C_Email: "",
  C_Password: "",
  C_CreationDate: "2023-12-10 12:11:00",
};

export default function Customer() {
  const navigate = useNavigate();
  const [add_customer_data, setAddCustomerData] = useState(initAddCustomerData);
  const [selected_customer, setSelectedCustomer] = useState("");
  const [edit_customer_data, setEditCustomerData] = useState({});
  const [recharge_history, setRechargeHistory] = useState([]);
  const [usage_history, setUsageHistory] = useState([]);
  const [toSearch, setToSearch] = useState("");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [showSM, setShowSM] = useState(false);
  const [showRH, setShowRH] = useState(false);
  const [showUH, setShowUH] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseRH = () => setShowRH(false);
  const handleShowRH = () => setShowRH(true);

  const handleCloseUH = () => setShowUH(false);
  const handleShowUH = () => setShowUH(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleCloseSM = () => setShowSM(false);
  const handleShowSM = () => setShowSM(true);

  const [customers, setCustomers] = useState([]);
  const [filter_customers, setFilterCustomers] = useState([]);

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
        setCustomers(result.data);
        setFilterCustomers(result.data);
      })
      .catch((error) => console.error(error));
  };

  const searchCustomers = (toSearch) => {
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

    fetch(
      `https://waybillback.eterp.in/CompanyByCharacter?character=${toSearch}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setFilterCustomers(result.data);
      })
      .catch((error) => console.error(error));
  };

  const filterCustomers = (toFilter) => {
    if (toFilter === "") {
      setFilterCustomers(customers);
    } else {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjIiLCJVc2VyTmFtZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoidW5kZWZpbmUiLCJqdGkiOiI4OGZhZGM0Zi0xNjEzLTQ1YzYtYmZjYi1lODNjYmQ2MTY1NmUiLCJleHAiOjE3MjM3MzMzNTYsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzcyIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNzIifQ.YAHtrX3IH2U3EiuA6SUagXuOvg4U0CaZR4q7EwJJxpg"
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

      fetch(
        `https://waybillback.eterp.in/CompanyFilterByBalance?amount=${toFilter}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setFilterCustomers(result.data);
        })
        .catch((error) => console.error(error));
    }
  };

  const handleAddCustomerData = (e) => {
    const { name, value } = e.target;
    setAddCustomerData({ ...add_customer_data, [name]: value });
  };

  const addCustomers = () => {
    console.log(add_customer_data, "add");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjIiLCJVc2VyTmFtZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoidW5kZWZpbmUiLCJqdGkiOiI4OGZhZGM0Zi0xNjEzLTQ1YzYtYmZjYi1lODNjYmQ2MTY1NmUiLCJleHAiOjE3MjM3MzMzNTYsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzcyIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNzIifQ.YAHtrX3IH2U3EiuA6SUagXuOvg4U0CaZR4q7EwJJxpg"
    );

    const raw = JSON.stringify({
      tokenData:
        "b2dBQUFCK0xDQUFBQUFBQUJBQ3JWZ3BPTFNwTExmSkx6RTFWc2xJcVRqZkt5OG10TEM3TU1TL0lLYzdXSzA1TkxpMUtMUVlyMGN0TExWSFNnYW9QeUM4cUFhbzNOall3ZzR1RkF0VUJ4VUpjZzBNOC9kemp3eDBqblR4OWZCQmFFb3VMeS9PTFVvQktEQlF6RFhOTWlzMEQ0Wkl1VGxBWG9PdXVCUUNEbHRXQ29nQUFBQT09",
      Cmp: {
        ...add_customer_data,
        // C_Name: "Ashu Sir",
        // C_GSTName: "dfgfhgth",
        // C_MobileNo: "7080445797",
        // C_Email: "testccc",
        // C_Password: "sdgd2555",
        // C_CreationDate: "2023-12-10 12:11:00",
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://waybillback.eterp.in/InsertCompany", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  const handleEditCustomerData = (e) => {
    const { name, value } = e.target;
    setEditCustomerData({ ...edit_customer_data, [name]: value });
  };

  const editCustomers = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjIiLCJVc2VyTmFtZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoidW5kZWZpbmUiLCJqdGkiOiI4OGZhZGM0Zi0xNjEzLTQ1YzYtYmZjYi1lODNjYmQ2MTY1NmUiLCJleHAiOjE3MjM3MzMzNTYsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzcyIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNzIifQ.YAHtrX3IH2U3EiuA6SUagXuOvg4U0CaZR4q7EwJJxpg"
    );

    const raw = JSON.stringify({
      tokenData:
        "b2dBQUFCK0xDQUFBQUFBQUJBQ3JWZ3BPTFNwTExmSkx6RTFWc2xJcVRqZkt5OG10TEM3TU1TL0lLYzdXSzA1TkxpMUtMUVlyMGN0TExWSFNnYW9QeUM4cUFhbzNOall3ZzR1RkF0VUJ4VUpjZzBNOC9kemp3eDBqblR4OWZCQmFFb3VMeS9PTFVvQktEQlF6RFhOTWlzMEQ0Wkl1VGxBWG9PdXVCUUNEbHRXQ29nQUFBQT09",
      Cmp: {
        // C_Name: "Mohan ji",
        // C_GSTName: "dfgfhgth",
        // C_MobileNo: "7080445797",
        // C_Email: "test",
        // C_Password: "sdgd2555",
        // C_CreationDate: "2023-12-10 12:11:00",
        ...edit_customer_data,
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://waybillback.eterp.in/UpdateCompany?MainID=1", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  const rechargeCustomer = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const RechargeUser = localStorage.getItem("user");
    const raw = JSON.stringify({
      tokenData:
        "b2dBQUFCK0xDQUFBQUFBQUJBQ3JWZ3BPTFNwTExmSkx6RTFWc2xJcVRqZkt5OG10TEM3TU1TL0lLYzdXSzA1TkxpMUtMUVlyMGN0TExWSFNnYW9QeUM4cUFhbzNOall3ZzR1RkF0VUJ4VUpjZzBNOC9kemp3eDBqblR4OWZCQmFFb3VMeS9PTFVvQktEQlF6RFhOTWlzMEQ0Wkl1VGxBWG9PdXVCUUNEbHRXQ29nQUFBQT09",
      RSm: {
        Company_Id: selected_customer,
        ...recharge_data,
        RechargeUser,
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://waybillback.eterp.in/InsertRechargeSystem", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status) {
          toast(result.data);
          handleClose1(false);
        } else {
          toast(result.error);
        }
      })
      .catch((error) => console.error(error));
  };

  const getRechargeHistoryForCustomer = (id) => {
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

    fetch(
      `https://waybillback.eterp.in/RechargeSystemByCompanyID?MainID=${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setRechargeHistory(result.data);
      })
      .catch((error) => console.error(error));
  };

  const getUsageHistoryForCustomer = (id) => {
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

    fetch(
      `https://waybillback.eterp.in/UsageSystemByComp_ID?MainID=${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setUsageHistory(result.data);
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  const [recharge_data, setRechargeData] = useState({});
  const handleRechargeData = (e) => {
    const { name, value } = e.target;
    setRechargeData({ ...recharge_data, [name]: value });
  };

  useEffect(() => {
    getCustomers();
  }, []);

  const Navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      Navigate("/login");
    }
  });

  const data = [
    {
      name: "name-1",
      status: 1,
    },
    {
      name: "name-2",
      status: 0,
    },
  ];

  return (
    <>
      <div className="mt-3">
        <ToastContainer />
        <div className="container-fluid">
          <div className=" d-flex justify-content-between ">
            <div className="col-2 customer-header">
              <Header />
            </div>

            <div className="fw-bolder fs-2">Customers</div>
          </div>
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
              <input
                onKeyDown={(e) => {
                  const { target, key } = e;
                  if (key === "Enter") {
                    searchCustomers(target.value);
                  }
                }}
                className="input-box shadow-none border-1  p-2 rounded-3"
                type="text"
                placeholder="Search..."
                name="name"
                required
                style={{ width: "100%" }}
              />
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
              <input
                onKeyDown={(e) => {
                  const { target, key } = e;
                  if (key === "Enter") {
                    filterCustomers(target.value);
                  }
                }}
                className="input-box shadow-none border-1  p-2 rounded-3"
                type="number"
                placeholder="Filter Balance..."
                name="name"
                required
                style={{ width: "100%" }}
              />
            </div>
            <div
              onClick={handleShow}
              className="col-lg-2 col-md-12 col-sm-12 d-flex justify-content-center align-items-center p-2  me-2 m-2 rounded-3"
              style={{
                backgroundColor: "#f1f1f1",
                width: 100,
                fontWeight: 700,
                color: "#000",
                cursor: "pointer",
              }}
            >
              + Add
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12 m-auto">
              <div className="card-list-box-sr card p-2 border-0">
                <div className="table-responsive">
                  <Paper sx={{ width: "100%", Height: "100vh" }}>
                    <TableContainer sx={{ mt: -1 }}>
                      <Table
                        stickyHeader
                        aria-label="sticky table"
                        size="small"
                      >
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
                              Sr. No.
                            </TableCell>
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
                              Company  ID
                            </TableCell>
                            {/* <TableCell sx={{ fontWeight: "600", minWidth: 50, fontSize: "14px" }}>Designation</TableCell> */}
                            <TableCell
                              sx={{
                                fontWeight: "600",
                                minWidth: 50,
                                fontSize: "20px",
                              }}
                            >
                              GST No
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "600",
                                minWidth: 50,
                                fontSize: "20px",
                              }}
                            >
                              Mobile No
                            </TableCell>

                            <TableCell
                              sx={{
                                fontWeight: "600",
                                minWidth: 50,
                                fontSize: "20px",
                              }}
                            >
                              Balance
                            </TableCell>

                            <TableCell
                              sx={{
                                fontWeight: "600",
                                minWidth: 50,
                                fontSize: "20px",
                              }}
                            >
                              Creation Date
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "600",
                                minWidth: 50,
                                fontSize: "20px",
                              }}
                            >
                              Status
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "600",
                                minWidth: 50,
                                fontSize: "20px",
                              }}
                            >
                              Action
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "600",
                                minWidth: 50,
                                fontSize: "14px",
                              }}
                            ></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {filter_customers.map((item, index) => {
                            return (
                              <TableRow key={index}>
                                <TableCell
                                  sx={{
                                    fontWeight: "700",
                                    minWidth: 50,
                                    fontSize: 18,
                                  }}
                                >
                                  {index + 1}
                                </TableCell>
                                <TableCell
                                  sx={{
                                    fontWeight: "700",
                                    minWidth: 50,
                                    fontSize: 18,
                                  }}
                                >
                                  {item.C_Name}
                                </TableCell>
                                <TableCell
                                  sx={{
                                    fontWeight: "700",
                                    minWidth: 50,
                                    fontSize: 18,
                                  }}
                                >
                                  {item.C_ID}
                                </TableCell>
                                <TableCell
                                  sx={{
                                    fontWeight: "500",
                                    minWidth: 50,
                                    fontSize: "16px",
                                  }}
                                >
                                  {item?.C_GSTName}
                                </TableCell>
                                <TableCell
                                  sx={{
                                    fontWeight: "500",
                                    minWidth: 50,
                                    fontSize: "16px",
                                  }}
                                >
                                  {item?.C_MobileNo}
                                </TableCell>

                                <TableCell
                                  sx={{
                                    fontWeight: "600",
                                    fontSize: 18,
                                    minWidth: 50,
                                    // color: "#239b56",
                                  }}
                                >
                                  {item?.Balance}
                                </TableCell>

                                <TableCell
                                  sx={{
                                    fontWeight: "500",
                                    minWidth: 50,
                                    fontSize: "16px",
                                  }}
                                >
                                  {item?.C_CreationDate?.split("T")[0]
                                    ?.split("-")
                                    ?.reverse()
                                    ?.join("-")}
                                </TableCell>
                                <TableCell
                                  sx={{
                                    fontWeight: "500",
                                    minWidth: 50,
                                    fontSize: "12px",
                                  }}
                                >
                                  {item.Status ? (
                                    <button
                                      className="rounded-1 btn py-1"
                                      style={{
                                        backgroundColor: "#eafaf1 ",
                                        color: "#239b56",
                                        fontSize: "13px",
                                        fontWeight: 500,
                                      }}
                                    >
                                      Active
                                    </button>
                                  ) : (
                                    <button
                                      className="rounded-1 btn py-1"
                                      style={{
                                        backgroundColor: "#fdedec",
                                        color: "#e74c3c",
                                        fontSize: "13px",
                                        fontWeight: 500,
                                      }}
                                    >
                                      De-Active
                                    </button>
                                  )}
                                </TableCell>
                                <TableCell
                                  sx={{ fontWeight: "500", minWidth: 50 }}
                                >
                                  <div
                                    className="d-flex justify-content-between"
                                    style={{ width: 50 }}
                                  >
                                    <FaEdit
                                      onClick={() => {
                                        setEditCustomerData(item);
                                        handleShow2();
                                      }}
                                      style={{
                                        cursor: "pointer",
                                        color: "#000",
                                        fontSize: "18px",
                                      }}
                                    />
                                  </div>
                                </TableCell>

                                <TableCell
                                  sx={{ fontWeight: "500", minWidth: 50 }}
                                >
                                  <div class="dropdown">
                                    <button
                                      class="btn"
                                      type="button"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <FaEllipsisH />
                                    </button>
                                    <ul class="dropdown-menu" style={{}}>
                                      <li>
                                        <a
                                          onClick={() => {
                                            setSelectedCustomer(item.C_ID);
                                            handleShow1();
                                            const today = new Date();
                                            // Format it to YYYY-MM-DD
                                            const formattedDate = today
                                              .toISOString()
                                              .split("T")[0];
                                            setRechargeData({
                                              ...recharge_data,
                                              Date: formattedDate,
                                            });
                                          }}
                                          class="dropdown-item"
                                          href="#"
                                        >
                                          Recharge
                                        </a>
                                      </li>
                                      {/* <li>
                                        <a class="dropdown-item" href="#">
                                          Deactivate
                                        </a>
                                      </li> */}
                                      <li>
                                        <a
                                          onClick={() => {
                                            getRechargeHistoryForCustomer(
                                              item.C_ID
                                            );
                                            handleShowRH();
                                          }}
                                          class="dropdown-item"
                                          href="#"
                                        >
                                          Recharge History
                                        </a>
                                      </li>

                                      <li>
                                        <a
                                          onClick={() => {
                                            getUsageHistoryForCustomer(
                                              item.C_ID
                                            );
                                            handleShowUH();
                                          }}
                                          class="dropdown-item"
                                          href="#"
                                        >
                                          Usage History
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    {/* <TableFooter> */}
                    {/* <TablePagination
                      rowsPerPageOptions={[5, 10, 20]}
                      component="div"
                      // count={bearerData.length}
                      // rowsPerPage={rowsPerPage}
                      // page={page}
                      // onPageChange={handleChangePage}
                      // onRowsPerPageChange={handleChangeRowsPerPage}
                    /> */}
                    {/* </TableFooter> */}
                  </Paper>
                  {/* modal for add customer */}
                  <Modal
                    show={show}
                    onHide={handleClose}
                    size="lg"
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Customers</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div
                              className=""
                              style={{
                                fontSize: "13px",
                                color: "#1f5156",
                                fontWeight: 600,
                              }}
                            >
                              Name
                            </div>
                            <input
                              onChange={handleAddCustomerData}
                              name="C_Name"
                              className="sercc-inpt p-1"
                              type="text"
                              placeholder="Name"
                              autoFocus
                              required
                              style={{ width: "100%" }}
                            />
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div
                              className=""
                              style={{
                                fontSize: "13px",
                                color: "#1f5156",
                                fontWeight: 600,
                              }}
                            >
                              GST No.
                            </div>
                            <input
                              onChange={handleAddCustomerData}
                              name="C_GSTName"
                              className="sercc-inpt p-1"
                              type="text"
                              placeholder="Gst No."
                              autoFocus
                              required
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div
                              className=""
                              style={{
                                fontSize: "13px",
                                color: "#1f5156",
                                fontWeight: 600,
                              }}
                            >
                              Mobile No.
                            </div>
                            <input
                              onChange={handleAddCustomerData}
                              name="C_MobileNo"
                              className="sercc-inpt p-1"
                              type="text"
                              placeholder="Mobile No."
                              autoFocus
                              required
                              style={{ width: "100%" }}
                            />
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div
                              className=""
                              style={{
                                fontSize: "13px",
                                color: "#1f5156",
                                fontWeight: 600,
                              }}
                            >
                              Email
                            </div>
                            <input
                              onChange={handleAddCustomerData}
                              name="C_Email"
                              className="sercc-inpt p-1"
                              type="text"
                              placeholder="Email"
                              autoFocus
                              required
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div
                              className=""
                              style={{
                                fontSize: "13px",
                                color: "#1f5156",
                                fontWeight: 600,
                              }}
                            >
                              Password
                            </div>
                            <input
                              onChange={handleAddCustomerData}
                              name="C_Password"
                              className="sercc-inpt p-1"
                              type="text"
                              placeholder="Password"
                              autoFocus
                              required
                              style={{ width: "100%" }}
                            />
                          </div>
                          {/* <div className="col-lg-6 col-md-6 col-sm-12">
                            <div
                              className=""
                              style={{
                                fontSize: "13px",
                                color: "#1f5156",
                                fontWeight: 600,
                              }}
                            >
                              Date
                            </div>
                            <input
                              className="sercc-inpt p-1"
                              type="text"
                              placeholder="Designation"
                              autoFocus
                              required
                              style={{ width: "100%" }}
                            />
                          </div> */}
                        </div>
                        <div className="row mt-3">
                          <div className="col-4 col-lg-3 m-auto">
                            <div
                              onClick={addCustomers}
                              className="d-flex justify-content-center align-items-center p-1 rounded-1"
                              style={{
                                width: "100%",
                                backgroundColor: "#000",
                                fontWeight: 400,
                                color: "#fff",
                                cursor: "pointer",
                              }}
                            >
                              Save
                            </div>
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                  {/* modal for edit customer */}
                  <Modal
                    show={show2}
                    onHide={handleClose2}
                    size="lg"
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div
                              className=""
                              style={{
                                fontSize: "13px",
                                color: "#1f5156",
                                fontWeight: 600,
                              }}
                            >
                              Name
                            </div>
                            <input
                              onChange={handleEditCustomerData}
                              defaultValue={edit_customer_data.C_Name}
                              name="C_Name"
                              className="sercc-inpt p-1"
                              type="text"
                              placeholder="Name"
                              autoFocus
                              required
                              style={{ width: "100%" }}
                            />
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div
                              className=""
                              style={{
                                fontSize: "13px",
                                color: "#1f5156",
                                fontWeight: 600,
                              }}
                            >
                              GST No.
                            </div>
                            <input
                              onChange={handleEditCustomerData}
                              defaultValue={edit_customer_data.C_GSTName}
                              name="C_GSTName"
                              className="sercc-inpt p-1"
                              type="text"
                              placeholder="GST No."
                              autoFocus
                              required
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div
                              className=""
                              style={{
                                fontSize: "13px",
                                color: "#1f5156",
                                fontWeight: 600,
                              }}
                            >
                              Mobile No.
                            </div>
                            <input
                              onChange={handleEditCustomerData}
                              defaultValue={edit_customer_data.C_MobileNo}
                              name="C_MobileNo"
                              className="sercc-inpt p-1"
                              type="text"
                              placeholder="Mobile No."
                              autoFocus
                              required
                              style={{ width: "100%" }}
                            />
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div
                              className=""
                              style={{
                                fontSize: "13px",
                                color: "#1f5156",
                                fontWeight: 600,
                              }}
                            >
                              Email
                            </div>
                            <input
                              onChange={handleEditCustomerData}
                              defaultValue={edit_customer_data.C_Email}
                              name="C_Email"
                              className="sercc-inpt p-1"
                              type="text"
                              placeholder="Email"
                              autoFocus
                              required
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div
                              className=""
                              style={{
                                fontSize: "13px",
                                color: "#1f5156",
                                fontWeight: 600,
                              }}
                            >
                              Password
                            </div>
                            <input
                              onChange={handleEditCustomerData}
                              defaultValue={edit_customer_data.C_Password}
                              name="C_Password"
                              className="sercc-inpt p-1"
                              type="text"
                              placeholder="Password"
                              autoFocus
                              required
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className=" m-auto col-6 col-lg-3">
                            <div
                              onClick={editCustomers}
                              className="d-flex justify-content-center align-items-center p-1 rounded-1 "
                              style={{
                                width: "100%",
                                backgroundColor: "#000",
                                fontWeight: 400,
                                color: "#fff",
                                cursor: "pointer",
                              }}
                            >
                              Update
                            </div>
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                  {/* modal for show recharge history for particular customer */}
                  <Modal
                    show={showRH}
                    onHide={handleCloseRH}
                    size="lg"
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Recharge History</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="container-fluid">
                        <div className="row mt-2">
                          <div className="col-12 m-auto">
                            <div className="card-list-box-sr card p-2 border-0">
                              <div className="table-responsive">
                                <Paper sx={{ width: "100%" }}>
                                  <TableContainer sx={{ mt: -1 }}>
                                    <Table
                                      stickyHeader
                                      aria-label="sticky table"
                                      size="small"
                                    >
                                      <TableHead>
                                        <TableRow>
                                          <TableCell
                                            sx={{
                                              fontWeight: "600",
                                              minWidth: 50,
                                              fontSize: "14px",
                                            }}
                                          >
                                            Name
                                          </TableCell>

                                          <TableCell
                                            sx={{
                                              fontWeight: "600",
                                              minWidth: 50,
                                              fontSize: "14px",
                                            }}
                                          >
                                            Amount
                                          </TableCell>
                                          <TableCell
                                            sx={{
                                              fontWeight: "600",
                                              minWidth: 50,
                                              fontSize: "14px",
                                            }}
                                          >
                                            Date
                                          </TableCell>
                                          <TableCell
                                            sx={{
                                              fontWeight: "600",
                                              minWidth: 50,
                                              fontSize: "14px",
                                            }}
                                          >
                                            User
                                          </TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {recharge_history.map((item, index) => {
                                          return (
                                            <TableRow key={index}>
                                              <TableCell
                                                sx={{
                                                  fontWeight: "500",
                                                  minWidth: 50,
                                                  fontSize: "12px",
                                                }}
                                              >
                                                {item?.CompanyName}
                                              </TableCell>

                                              <TableCell
                                                sx={{
                                                  fontWeight: "500",
                                                  minWidth: 50,
                                                  fontSize: "12px",
                                                }}
                                              >
                                                {item?.Recharge_Amt}
                                              </TableCell>
                                              <TableCell
                                                sx={{
                                                  fontWeight: "500",
                                                  minWidth: 50,
                                                }}
                                              >
                                                {item?.Date?.split("T")[0]
                                                  .split("-")
                                                  .reverse()
                                                  .join("-")}
                                              </TableCell>
                                              <TableCell
                                                sx={{
                                                  fontWeight: "500",
                                                  minWidth: 50,
                                                }}
                                              >
                                                {item?.RechargeUser}
                                              </TableCell>
                                            </TableRow>
                                          );
                                        })}
                                      </TableBody>
                                    </Table>
                                  </TableContainer>
                                  {/* <TablePagination
                                    rowsPerPageOptions={[5, 10, 20]}
                                    component="div"
                                    // count={bearerData.length}
                                    // rowsPerPage={rowsPerPage}
                                    // page={page}
                                    // onPageChange={handleChangePage}
                                    // onRowsPerPageChange={handleChangeRowsPerPage}
                                  /> */}
                                </Paper>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>

                  {/* modal for show usage history for particular customer */}
                  <Modal
                    show={showUH}
                    onHide={handleCloseUH}
                    size="xl"
                    // fullscreen="xxl-down"
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Usage History</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/* <div className="container-fluid"> */}
                      <div className="row mt-2 ">
                        <div className="col-12 m-auto">
                          {/* <div className="card-list-box-sr card p-2 border-0"> */}
                          <div className="table-responsive">
                            <Paper sx={{ width: "110%" }}>
                              <TableContainer sx={{ mt: -1 }}>
                                <Table
                                  stickyHeader
                                  aria-label="sticky table"
                                  size="small"
                                >
                                  <TableHead>
                                    <TableRow>
                                      {/* <TableCell
                                            sx={{
                                              fontWeight: "600",
                                              minWidth: 100,
                                              fontSize: "14px",
                                            }}
                                          >
                                            Name
                                          </TableCell> */}

                                      <TableCell
                                        sx={{
                                          fontWeight: "600",
                                          minWidth: 50,
                                          fontSize: "14px",
                                        }}
                                      >
                                        Date
                                      </TableCell>

                                      <TableCell
                                        sx={{
                                          fontWeight: "600",
                                          minWidth: 20,
                                          fontSize: "14px",
                                        }}
                                      >
                                        Amount
                                      </TableCell>

                                      <TableCell
                                        sx={{
                                          fontWeight: "600",
                                          minWidth: 50,
                                          fontSize: "14px",
                                        }}
                                      >
                                        Voucher Type
                                      </TableCell>
                                      <TableCell
                                        sx={{
                                          fontWeight: "600",
                                          minWidth: 50,
                                          fontSize: "14px",
                                        }}
                                      >
                                        Voucher No
                                      </TableCell>
                                      <TableCell
                                        sx={{
                                          fontWeight: "600",
                                          minWidth: 50,
                                          fontSize: "14px",
                                        }}
                                      >
                                        Voucher Date
                                      </TableCell>
                                      <TableCell
                                        sx={{
                                          fontWeight: "600",
                                          minWidth: 50,
                                          fontSize: "14px",
                                        }}
                                      >
                                        Way Bill No
                                      </TableCell>
                                      <TableCell
                                        sx={{
                                          fontWeight: "600",
                                          minWidth: 50,
                                          fontSize: "14px",
                                        }}
                                      >
                                        Way Bill Date
                                      </TableCell>
                                      <TableCell
                                        sx={{
                                          fontWeight: "600",
                                          minWidth: 50,
                                          fontSize: "14px",
                                        }}
                                      >
                                        IRN No
                                      </TableCell>
                                      <TableCell
                                        sx={{
                                          fontWeight: "600",
                                          minWidth: 50,
                                          fontSize: "14px",
                                        }}
                                      >
                                        Ack No
                                      </TableCell>
                                      <TableCell
                                        sx={{
                                          fontWeight: "600",
                                          minWidth: 50,
                                          fontSize: "14px",
                                        }}
                                      >
                                        Ack Date
                                      </TableCell>

                                      <TableCell
                                        sx={{
                                          fontWeight: "600",
                                          minWidth: 50,
                                          fontSize: "14px",
                                        }}
                                      >
                                        Remark
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {usage_history.map((item, index) => {
                                      return (
                                        <TableRow key={index}>
                                          {/* <TableCell
                                                sx={{
                                                  fontWeight: "500",
                                                  minWidth: 100,
                                                  fontSize: "12px",
                                                }}
                                              >
                                                {item?.CompanyName}
                                              </TableCell> */}
                                          <TableCell
                                            sx={{
                                              fontWeight: "500",
                                              minWidth: 50,
                                            }}
                                          >
                                            {item?.Date?.split("T")[0]
                                              .split("-")
                                              .reverse()
                                              .join("-")}
                                          </TableCell>
                                          <TableCell
                                            sx={{
                                              fontWeight: "500",
                                              minWidth: 20,
                                              fontSize: "12px",
                                            }}
                                          >
                                            {item?.Utility_Amt}
                                          </TableCell>

                                          <TableCell
                                            sx={{
                                              fontWeight: "500",
                                              minWidth: 50,
                                            }}
                                          >
                                            {item?.Vtype}
                                          </TableCell>
                                          <TableCell
                                            sx={{
                                              fontWeight: "500",
                                              minWidth: 50,
                                            }}
                                          >
                                            {item?.VNo}
                                          </TableCell>
                                          <TableCell
                                            sx={{
                                              fontWeight: "500",
                                              minWidth: 50,
                                            }}
                                          >
                                            {item?.VDate?.split("T")[0]
                                              .split("-")
                                              .reverse()
                                              .join("-")}
                                          </TableCell>
                                          <TableCell
                                            sx={{
                                              fontWeight: "500",
                                              minWidth: 50,
                                            }}
                                          >
                                            {item?.WayBillNo}
                                          </TableCell>
                                          <TableCell
                                            sx={{
                                              fontWeight: "500",
                                              minWidth: 50,
                                            }}
                                          >
                                            {item?.WayBillDate?.split("T")[0]
                                              .split("-")
                                              .reverse()
                                              .join("-")}
                                          </TableCell>
                                          <TableCell
                                            sx={{
                                              fontWeight: "500",
                                              minWidth: 50,
                                            }}
                                          >
                                            {item?.IRNNo}
                                          </TableCell>
                                          <TableCell
                                            sx={{
                                              fontWeight: "500",
                                              minWidth: 50,
                                            }}
                                          >
                                            {item?.AckNo}
                                          </TableCell>
                                          <TableCell
                                            sx={{
                                              fontWeight: "500",
                                              minWidth: 50,
                                            }}
                                          >
                                            {item?.AckDate?.split("T")[0]
                                              .split("-")
                                              .reverse()
                                              .join("-")}
                                          </TableCell>

                                          <TableCell
                                            sx={{
                                              fontWeight: "500",
                                              minWidth: 50,
                                            }}
                                          >
                                            {item?.Remarks}
                                          </TableCell>
                                        </TableRow>
                                      );
                                    })}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                              {/* <TablePagination
                                    rowsPerPageOptions={[5, 10, 20]}
                                    component="div"
                                    // count={bearerData.length}
                                    // rowsPerPage={rowsPerPage}
                                    // page={page}
                                    // onPageChange={handleChangePage}
                                    // onRowsPerPageChange={handleChangeRowsPerPage}
                                  /> */}
                            </Paper>
                          </div>
                          {/* </div> */}
                        </div>
                      </div>
                      {/* </div> */}
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        size="sm"
        show={showSM}
        onHide={() => setShowSM(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <FiAlertTriangle style={{ color: "orangered" }} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="text-center align-items-center"
            style={{ fontSize: "16px", color: "#1f5156", fontWeight: 500 }}
          >
            Are you sure want to Delete ??
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div
              onClick={() => {
                setShowSM(false);
              }}
              className="d-flex justify-content-center align-items-center p-1 rounded-1 me-2"
              style={{
                width: "100%",
                backgroundColor: "#239B56",
                fontWeight: 400,
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Yes
            </div>
            <div
              onClick={() => setShowSM(false)}
              className="d-flex justify-content-center align-items-center p-1 rounded-1"
              style={{
                width: "100%",
                backgroundColor: "#E74C3C",
                fontWeight: 400,
                color: "#fff",
                cursor: "pointer",
              }}
            >
              No
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Recharge</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div
                  className=""
                  style={{
                    fontSize: "13px",
                    color: "#1f5156",
                    fontWeight: 600,
                  }}
                >
                  Date
                </div>
                <input
                  onChange={handleRechargeData}
                  // defaultValue={edit_customer_data.C_GSTName}
                  // value={Date.now().toISOString().split("T")[0]}
                  value={recharge_data?.Date}
                  name="Date"
                  className="sercc-inpt p-1"
                  type="date"
                  placeholder="Date"
                  autoFocus
                  required
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div
                  className=""
                  style={{
                    fontSize: "13px",
                    color: "#1f5156",
                    fontWeight: 600,
                  }}
                >
                  Amount
                </div>
                <input
                  onChange={handleRechargeData}
                  // defaultValue={edit_customer_data.C_Name}
                  name="Recharge_Amt"
                  className="sercc-inpt p-1"
                  type="number"
                  placeholder="Amount"
                  autoFocus
                  required
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-3 m-auto">
                <div
                  onClick={rechargeCustomer}
                  className="d-flex justify-content-center align-items-center p-1 rounded-1"
                  style={{
                    width: "100%",
                    backgroundColor: "#000",
                    fontWeight: 400,
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Recharge
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
