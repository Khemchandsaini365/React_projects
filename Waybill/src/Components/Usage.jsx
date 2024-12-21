import { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
export default function Usage() {
  const [usage_history, setUsageHistory] = useState([]);
  const [filter_usage_history, setFilterUsageHistory] = useState([]);

  const filterUsageHistory = (toSearch) => {
    setFilterUsageHistory(
      usage_history.filter((el) =>
        el.CompanyName.toLowerCase().includes(toSearch.toLowerCase())
      )
    );
  };

  ///****** */
  const initAddusageData = {
    US_ID:"",
    Company_ID:"",
    CompanyName:"",
    Utility_Amt:"",
    Date:"2023-12-10 12:11:00",
    Remarks:"",
    Vtype:"",
    VNo:"",
    VDate:"2023-12-10 12:11:00",
    WayBillNo:"",
    WayBillDate:"2023-12-10 12:11:00",
    IRNNo:"",
    AckNo:"",
    AckDate:"2023-12-10 12:11:00"
  };
  const [add_usage_data, setAddusageData] = useState(initAddusageData);

  const addUsage = () => {
    console.log(add_usage_data, "add");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjIiLCJVc2VyTmFtZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoidW5kZWZpbmUiLCJqdGkiOiI4OGZhZGM0Zi0xNjEzLTQ1YzYtYmZjYi1lODNjYmQ2MTY1NmUiLCJleHAiOjE3MjM3MzMzNTYsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzcyIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNzIifQ.YAHtrX3IH2U3EiuA6SUagXuOvg4U0CaZR4q7EwJJxpg"
    );

    const raw = JSON.stringify({
      tokenData:
        "b2dBQUFCK0xDQUFBQUFBQUJBQ3JWZ3BPTFNwTExmSkx6RTFWc2xJcVRqZkt5OG10TEM3TU1TL0lLYzdXSzA1TkxpMUtMUVlyMGN0TExWSFNnYW9QeUM4cUFhbzNOall3ZzR1RkF0VUJ4VUpjZzBNOC9kemp3eDBqblR4OWZCQmFFb3VMeS9PTFVvQktEQlF6RFhOTWlzMEQ0Wkl1VGxBWG9PdXVCUUNEbHRXQ29nQUFBQT09",
        USm: {
        ...add_usage_data,
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

    fetch("https://waybillback.eterp.in/InsertUsageSystem", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  /////**** */

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
          setUsageHistory(result.data);
          setFilterUsageHistory(result.data);
          console.log(result.data);
          
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getRechargeHistory();
  }, []);

  const Navigate = useNavigate();

  useEffect(()=>{
    const user=localStorage.getItem("user")
    if(!user){
      Navigate("/login")
    }
  })

  return (
    <>
      <div className="mt-3">
        <div className="container-fluid">
          <Header />
          <div className="row d-flex justify-content-between align-items-center">
            <div
              className="col-lg-4 col-md-4 col-sm-12 text-start fw-bolder fs-2"
              style={{ fontSize: "26px", fontWeight: 400, color: "black" }}
            >
              Usage
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
              <input
                onChange={(e) => filterUsageHistory(e.target.value)}
                className="input-box shadow-none border-1  p-2 rounded-3"
                type="text"
                placeholder="Search..."
                name="name"
                required
                style={{ width: "100%" }}
              />
            </div>
            {/* <div
          onClick={handleShow}
          className="col-lg-2 col-md-12 col-sm-12 d-flex justify-content-center align-items-center p-2 rounded-1 me-2 m-2"
          style={{
            backgroundColor: "#f1f1f1",
            width: 100,
            fontWeight: 400,
            color: "#000",
            cursor: "pointer",
          }}
        >
          + Add
        </div> */}
          </div>
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
                                minWidth: 100,
                                fontSize: "20px",
                              }}
                            >
                              Sr. No.
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "600",
                                minWidth: 100,
                                fontSize: "20px",
                              }}
                            >
                              Name
                            </TableCell>

                            <TableCell
                              sx={{
                                fontWeight: "600",
                                minWidth: 20,
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
                              Voucher Type
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "600",
                                minWidth: 50,
                                fontSize: "20px",
                              }}
                            >
                              Voucher No
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
                              Way Bill No
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "600",
                                minWidth: 50,
                                fontSize: "20px",
                              }}
                            >
                              Way Bill Date
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "600",
                                minWidth: 50,
                                fontSize: "20px",
                              }}
                            >
                              IRN No
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "600",
                                minWidth: 50,
                                fontSize: "20px",
                              }}
                            >
                              Ack No
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "600",
                                minWidth: 50,
                                fontSize: "20px",
                              }}
                            >
                              Ack Date
                            </TableCell>

                            <TableCell
                              sx={{
                                fontWeight: "600",
                                minWidth: 50,
                                fontSize: "20px",
                              }}
                            >
                              Remark
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {filter_usage_history.map((item, index) => {
                            return (
                              <TableRow key={index}>
                                <TableCell
                                  sx={{
                                    fontWeight: "700",
                                    minWidth: 100,
                                    fontSize: "16px",
                                  }}
                                >
                                  {index+1}
                                </TableCell>
                                <TableCell
                                  sx={{
                                    fontWeight: "700",
                                    minWidth: "150px",
                                    fontSize: "16px",
                                  }}
                                >
                                  {item?.CompanyName}
                                </TableCell>

                                <TableCell
                                  sx={{
                                    fontWeight: "700",
                                    minWidth: 20,
                                    fontSize: "16px",
                                  }}
                                >
                                  {item?.Utility_Amt}
                                </TableCell>
                                <TableCell
                                  sx={{ fontWeight: "500", minWidth: "120px",fontSize: "16px" }}
                                >
                                  {item?.Date?.split("T")[0]
                                    .split("-")
                                    .reverse()
                                    .join("-")}
                                </TableCell>
                                <TableCell
                                  sx={{ fontWeight: "500", minWidth: 50,fontSize: "16px" }}
                                >
                                  {item?.Vtype}
                                </TableCell>
                                <TableCell
                                  sx={{ fontWeight: "500", minWidth: 50,fontSize: "16px" }}
                                >
                                  {item?.VNo}
                                </TableCell>
                                <TableCell
                                  sx={{ fontWeight: "500", minWidth: 50,fontSize: "16px" }}
                                >
                                  {item?.VDate?.split("T")[0]
                                    .split("-")
                                    .reverse()
                                    .join("-")}
                                </TableCell>
                                <TableCell
                                  sx={{ fontWeight: "500", minWidth: 50,fontSize: "16px" }}
                                >
                                  {item?.WayBillNo}
                                </TableCell>
                                <TableCell
                                  sx={{ fontWeight: "700", minWidth: 50,fontSize:"16px" }}
                                >
                                  {item?.WayBillDate?.split("T")[0]
                                    .split("-")
                                    .reverse()
                                    .join("-")}
                                </TableCell>
                                <TableCell
                                  sx={{ fontWeight: "500", minWidth: 50 ,fontSize: "16px"}}
                                >
                                  {item?.IRNNo}
                                </TableCell>
                                <TableCell
                                  sx={{ fontWeight: "500", minWidth: 50 ,fontSize: "16px"}}
                                >
                                  {item?.AckNo}
                                </TableCell>
                                <TableCell
                                  sx={{ fontWeight: "500", minWidth: "120px" ,fontSize: "16px"}}
                                >
                                  {item?.AckDate?.split("T")[0]
                                    .split("-")
                                    .reverse()
                                    .join("-")}
                                </TableCell>

                                <TableCell
                                  sx={{ fontWeight: "500", minWidth: 50,fontSize: "16px" }}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
