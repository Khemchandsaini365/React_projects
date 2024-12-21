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

export default function RechargeHistory() {
  const [recharge_history, setRechargeHistory] = useState([]);
  const [filter_recharge_history, setFilterRechargeHistory] = useState([]);

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
    fetch("https://waybillback.eterp.in/RechargeSystemList", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status) {
          setRechargeHistory(result.data);
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
              Recharge History
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
              <input
                onChange={(e) => filterRechargeHistory(e.target.value)}
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
                                minWidth: 50,
                                fontSize: "20px",
                              }}
                            >
                              Sr. No.
                            </TableCell>
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
                              User
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {filter_recharge_history.map((item, index) => {
                            return (
                              <TableRow key={index}>
                                <TableCell
                                  sx={{
                                    fontWeight: "700",
                                    minWidth: 50,
                                    fontSize: 18,
                                  }}
                                >
                                  {index+1}
                                </TableCell>
                                <TableCell
                                  sx={{
                                    fontWeight: "700",
                                    minWidth: 50,
                                    fontSize: 18,
                                  }}
                                >
                                  {item?.CompanyName}
                                </TableCell>

                                <TableCell
                                  sx={{
                                    fontWeight: "500",
                                    minWidth: 50,
                                    fontSize: 18,
                                  }}
                                >
                                  {item?.Recharge_Amt}
                                </TableCell>
                                <TableCell
                                  sx={{  fontWeight: "400",
                                    minWidth: 50,
                                    fontSize: 18,}}
                                >
                                  {item?.Date?.split("T")[0]
                                    .split("-")
                                    .reverse()
                                    .join("-")}
                                </TableCell>
                                <TableCell
                                  sx={{  fontWeight: "700",
                                    minWidth: 50,
                                    fontSize: 18, }}
                                >
                                  {item?.RechargeUser}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                 
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
