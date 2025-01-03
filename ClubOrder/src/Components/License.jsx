import React, { useEffect, useMemo, useState } from "react";
import { BiBlock, BiEdit, BiPrinter, BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import BackButton from "./BackButton";
import { base_url } from "../env";
import {
  MaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ShowHideColumnsButton,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleFullScreenButton,
  useMaterialReactTable,
} from "material-react-table";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  ThemeProvider,
  Tooltip,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "antd";
import { createTheme } from "@mui/material/styles";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  MdDelete,
  MdGridView,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { BsLockFill, BsViewList } from "react-icons/bs";
export default function License() {
  const ApiData = useSelector((state) => state.ApiData.filteredData); // Assuming ApiData contains the filtered licenses.
  const navigate = useNavigate();
  const [licenses, setLicenses] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [openDialog, setOpenDialog] = useState(false); // State for Dialog
  const [selectedProduct, setSelectedProduct] = useState(null); // State for the product to be deleted
  const [Render, setRender] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false); // State for toggling search input visibility
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const Theme = { primaryThemeColor: "#1976d2" };
  const formattedDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0"); // Ensure 2 digits for day
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleSurrenderLicense = () => {
    const LiceNO = selectedProduct.LiceNo;

    setOpenDialog(false);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const adminToken = localStorage.getItem("userToken");
    const raw = JSON.stringify({
      tokenData: adminToken,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${base_url}/LicenseSurrendered?Lice_No=${LiceNO}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status) {
          toast.success("Surrednder Success");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
          // setRender(true)
        } else {
          toast.error("Error in Surrednder License");
        }
      })
      .catch((error) => toast.error("Error in Surrednder License"));
  };
  const verifyPassword = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const adminName = localStorage.getItem("username");
    const raw = JSON.stringify({
      tokenData:
        "OWdBQUFCK0xDQUFBQUFBQUFBbzlqczBPZ2pBUWhGK2w2ZGtRa0FRU2JpcGUvUW5xdmNKcURLV3R1MFZDakQ2N0xjRm1UN1B6VFdiZWZLTTdJOVM0RXgzd3dpbFZnN0hzQkMycnRPenRReXUrNEpXKzJVRWcvQ25aWDlrZUcwQzJNc2I1RjBEeVpNR1RLUGJuTTRBdndEbEI5NldTM1VoUG1SdEpiVVJROXdnMElaRUNHL2lEUnV2NE5JMno4RHM3Ym03MWF5Y1plRUUwYUd5Y2YweUhyUDJxUEFsbXVaN3J0LzlzS2F6Z254OHFwQWVYOWdBQUFBPT0=",
      user: adminName,
      pwd: Password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${base_url}/Admin_VerifyLogin`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === true) {
          handleSurrenderLicense();
        } else {
          toast.error("Password Incorrect");
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const fetchLicenses = () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const adminTokken = localStorage.getItem("userToken");

      const raw = JSON.stringify({
        tokenData: adminTokken,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(`${base_url}/Admin_LicenseList`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status === false) {
          } else {
            if (result?.data) {
              setLicenses(result.data); // Assuming result.data contains the licenses.
            }
          }
        })
        .catch((error) => {
          // toast.error("Couldn't fetch licences", { autoClose: 3000 });
          console.error(error);
        })
        .finally(() => setLoading(false)); // Set loading to false after data fetch is complete
    };

    fetchLicenses();
  }, []);

  const handleSurrenderClick = async () => {
    verifyPassword();
  };
  const handlepassword = (e) => {
    const { name, value } = e.target;
    setPassword(value);
  };

  useEffect(() => {}, []);
  const editLicense = (licenseId, item) => {
    navigate(`/editlicense/${licenseId}`, {
      state: item,
    });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update the search term
  };

  const handleEdit = () => {
    navigate("/newlicense");
  };

  const data = licenses;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const Tabel = () => {
    const columns = useMemo(
      () => [
        // Define your columns here...
        {
          accessorKey: "LiceNo",
          header: "LiceNo",
          size: 150,
        },
        {
          accessorKey: "LiceDeviceID",
          header: "LiceDeviceID",
          size: 150,
        },
        {
          accessorKey: "LiceCompanyName",
          header: "LiceCompanyName",
          size: 200,
        },
        {
          accessorFn: (date) => date?.Details[0]?.LiceRenewalDate,
          Cell: ({ cell }) => dayjs(cell.getValue()).format("DD/MM/YYYY"),
          header: "License Date",
          size:150,
          filterFn: (row, columnId, filterValue) => {
            const { startDate, endDate } = filterValue;
            const date = dayjs(row.getValue(columnId));
            if (startDate && endDate) {
              return date.isBetween(startDate, endDate, "day", "[]");
            }
            return true;
          },
          Filter: ({ column, table }) => {
            const handleFilterChange = (startDate, endDate) => {
              table.setColumnFilters([
                {
                  id: column.id,
                  value: {
                    startDate: startDate
                      ? dayjs(startDate, "DD-MM-YYYY")
                      : null,
                    endDate: endDate ? dayjs(endDate, "DD-MM-YYYY") : null,
                  },
                },
              ]);
            };
            return (
              <ThemeProvider
                theme={createTheme({
                  palette: { primary: { main: Theme.primaryThemeColor } },
                })}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <DatePicker
                      style={{ minWidth: "115px" }}
                      value={column.getFilterValue()?.startDate}
                      format="DD-MM-YYYY"
                      onChange={(newValue) =>
                        handleFilterChange(
                          newValue?.format("DD-MM-YYYY"),
                          column.getFilterValue()?.endDate
                        )
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          value={
                            column.getFilterValue()?.startDate
                              ? dayjs(
                                  column.getFilterValue()?.startDate
                                ).format("DD-MM-YYYY")
                              : ""
                          }
                        />
                      )}
                    />
                    <DatePicker
                      style={{ minWidth: "115px" }}
                      value={column.getFilterValue()?.endDate}
                      format="DD-MM-YYYY"
                      onChange={(newValue) =>
                        handleFilterChange(
                          column.getFilterValue()?.startDate,
                          newValue?.format("DD-MM-YYYY")
                        )
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          value={
                            column.getFilterValue()?.endDate
                              ? dayjs(column.getFilterValue()?.endDate).format(
                                  "DD-MM-YYYY"
                                )
                              : ""
                          }
                        />
                      )}
                    />
                  </div>
                </LocalizationProvider>
              </ThemeProvider>
            );
          },
        },
        {
          accessorFn: (date) => {
            const length = date?.Details.length;
            return date?.Details[length - 1]?.LiceExpiryDate;
          },
          Cell: ({ cell }) => dayjs(cell.getValue()).format("DD/MM/YYYY"),
          header: "Expiry Date",
          size:150,
          filterFn: (row, columnId, filterValue) => {
            const { startDate, endDate } = filterValue;
            const date = dayjs(row.getValue(columnId));
            if (startDate && endDate) {
              return date.isBetween(startDate, endDate, "day", "[]");
            }
            return true;
          },
          Filter: ({ column, table }) => {
            const handleFilterChange = (startDate, endDate) => {
              table.setColumnFilters([
                {
                  id: column.id,
                  value: {
                    startDate: startDate
                      ? dayjs(startDate, "DD-MM-YYYY")
                      : null,
                    endDate: endDate ? dayjs(endDate, "DD-MM-YYYY") : null,
                  },
                },
              ]);
            };
            return (
              <ThemeProvider
                theme={createTheme({
                  palette: { primary: { main: Theme.primaryThemeColor } },
                })}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <DatePicker
                      style={{ minWidth: "115px" }}
                      value={column.getFilterValue()?.startDate}
                      format="DD-MM-YYYY"
                      onChange={(newValue) =>
                        handleFilterChange(
                          newValue?.format("DD-MM-YYYY"),
                          column.getFilterValue()?.endDate
                        )
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          value={
                            column.getFilterValue()?.startDate
                              ? dayjs(
                                  column.getFilterValue()?.startDate
                                ).format("DD-MM-YYYY")
                              : ""
                          }
                        />
                      )}
                    />
                    <DatePicker
                      style={{ minWidth: "115px" }}
                      value={column.getFilterValue()?.endDate}
                      format="DD-MM-YYYY"
                      onChange={(newValue) =>
                        handleFilterChange(
                          column.getFilterValue()?.startDate,
                          newValue?.format("DD-MM-YYYY")
                        )
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          value={
                            column.getFilterValue()?.endDate
                              ? dayjs(column.getFilterValue()?.endDate).format(
                                  "DD-MM/YYYY"
                                )
                              : ""
                          }
                        />
                      )}
                    />
                  </div>
                </LocalizationProvider>
              </ThemeProvider>
            );
          },
        },
        {
          accessorFn: (date) => {
            const length = date?.Details.length;
            return date?.Details[length - 1]?.LiceExpiryDate;
          },
          Cell: ({ cell }) => {
            const expiryDate = dayjs(cell.getValue());
            const currentDate = dayjs();
            const daysLeft = expiryDate.diff(currentDate, "days");
        
            let status = ""; // Default status is empty
            let badgeColor = ""; // Badge color

            // Determine status and badge color based on remaining days
            if (daysLeft > 15) {
              status = "Active";
              badgeColor = "green";   // Green for more than 15 days
            } else if (daysLeft <= 15 && daysLeft > 0) {
              status = "Expiring Soon";
              badgeColor = "orange";  // Yellow for between 1 to 15 days
            } else {
              status = "Expired";
              badgeColor = "gray";    // Gray for already expired
            }
        
            return (
              <div
                style={{
                  display: "inline-block",
                  padding: "5px 10px",
                  borderRadius: "12px",
                  backgroundColor: badgeColor === "green" ? "#4caf50" : badgeColor === "orange" ? "#FFA500" : "#0a0a0a",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                 {status === "Active" || status === "Expired"?<>{status} </>: <>{status} ({daysLeft+1} days left)</>}
                {/* {status} ({daysLeft} days left) */}
              </div>
            );
          },
          header: "Status",
          size:150,
          filterFn: (row, columnId, filterValue) => {
            const { statusFilter } = filterValue; // The status selected by the user
            const expiryDate = dayjs(row.getValue(columnId));
            const currentDate = dayjs();
            const daysLeft = expiryDate.diff(currentDate, "days");
        
            let status = ""; // Default status is empty
            if (daysLeft > 15) {
              status = "Active";
            } else if (daysLeft <= 15 && daysLeft > 0) {
              status = "Expiring Soon";
            } else {
              status = "Expired";
            }
            if(statusFilter==="All"){
              return true;
            }
            // Apply filter based on selected status
            if (statusFilter) {
              return status === statusFilter;
            }
            
            return true; // If no filter is applied, show all rows
          },
          Filter: ({ column, table }) => {
            const handleStatusFilterChange = (event) => {
              const status = event.target.value;
              table.setColumnFilters([
                {
                  id: column.id,
                  value: { statusFilter: status },
                },
              ]);
            };
        
            return (
              <ThemeProvider
                theme={createTheme({
                  palette: { primary: { main: Theme.primaryThemeColor } },
                })}
              >
               
                 <FormControl sx={{minWidth:"60%",padding:"0",margin:'0',height:"15px"}} size="small" variant="standard">
                 {/* <InputLabel id="demo-simple-select-label" sx={{height:"3px"}}>Status</InputLabel> */}
                <Select onChange={handleStatusFilterChange} >
                  <MenuItem value="All" >All</MenuItem>
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Expiring Soon">Expiring Soon</MenuItem>
                  <MenuItem value="Expired">Expired</MenuItem>
                </Select>
                </FormControl>
              </ThemeProvider>
            );
          },
        },
        
        
        {
          header: "Actions", // Custom column for the icon

          Cell: ({ row }) => (
            <div style={{ fontSize: "15px" }}>
              <BiEdit onClick={() => handleCustomFunctionality(row)} />{" "}
              {/* Replace with your custom icon */}
            </div>
          ),
          size: 100,
        },
        {
          header: "Surrender", // Custom column for the icon
          Cell: ({ row }) => {
            const liceDeviceID = row.original.LiceDeviceID;
            return (
              <div
                style={{
                  fontSize: "15px",
                  color: liceDeviceID ? "red" : "gray",
                  cursor: liceDeviceID ? "pointer" : "not-allowed",
                }}
                onClick={() => {
                  if (liceDeviceID) {
                    setSelectedProduct(row.original);
                    setOpenDialog(true);
                  }
                }}
              >
                <BiBlock />
              </div>
            );
          },
          size: 100,
        },
        // Additional column definitions here...
      ],
      []
    );

    const handleCustomFunctionality = (row) => {
      const item = row.original;
      const licenseId = row.original.LiceID;

      navigate(`/editlicense/${licenseId}`, {
        state: item,
      });
    };

    const table = useMaterialReactTable({
      columns,
      data,
      enableStickyHeader: true,
      enableBottomToolbar: false,
      enablePagination: false,
      enableRowNumbers: true,
      initialState: { density: "compact", showGlobalFilter: true },
      enableTopToolbar: false,
      enableKeyboardShortcuts: true,
      muiTableHeadCellProps: {
        sx: {
          bgcolor: "#a5d8dd",
          color: "black",
          fontWeight: "bold",
        },
      },
    });

    return (
      <div>
        <Box>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "inherit",
              borderRadius: "4px",
              flexDirection: "row",
              justifyContent: "space-between",
              "@media max-width: 768px": {
                flexDirection: "column",
              },
            }}
          >
            <Box>
              <div className="heading h4 d-flex align-items-center">
                <div className="d-inline p-0 mx-2 ">
                  <BackButton />
                </div>
                License
              </div>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    overflow: "hidden",
                    width: showSearchInput ? "250px" : "0px",
                    opacity: showSearchInput ? 1 : 0,
                    transition: "width 0.3s ease, opacity 0.3s ease",
                  }}
                >
                  {showSearchInput && (
                    <MRT_GlobalFilterTextField table={table} autoFocus={true} />
                  )}
                </Box>

                <Tooltip title="Search">
                  <IconButton
                    onClick={() => setShowSearchInput(!showSearchInput)}
                  >
                    <BiSearch />
                  </IconButton>
                </Tooltip>
              </Box>
              <MRT_ToggleFiltersButton table={table} />
              <MRT_ShowHideColumnsButton table={table} />
              <MRT_ToggleDensePaddingButton table={table} />
              {/* <MRT_ToggleFullScreenButton table={table} /> */}
              <Box>
                <Button
                  color="primary"
                  onClick={handleEdit}
                  variant="contained"
                  size="small"
                >
                  Add
                </Button>
              </Box>
            </Box>
          </Box>

          <MaterialReactTable table={table} />
        </Box>
      </div>
    );
  };

  return (
    <>
      <ToastContainer />
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "70vh" }}
        >
          <CircularProgress />
        </div>
      ) : licenses.length > 0 ? (
        <Tabel />
      ) : (
        <>
        <Tabel/>
        </>
        
      )}

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogContent sx={{ padding: "10px" }}>
          {/* <TextField aria-label="Enter Admin Password" placeholder="Enter Admin Password" sx={{width:"100%"}} name="password" onChange={handlepassword} /> */}
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handlepassword}
              placeholder="Enter Admin Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </DialogContent>
        <DialogContent>
          <p>Are you sure you want Surrender License?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            No
          </Button>
          <Button
            onClick={handleSurrenderClick}
            color="secondary"
            disabled={loading} // Disable the button while deleting
          >
            {loading ? <CircularProgress size={24} /> : "Yes"}{" "}
            {/* Show loading spinner while deleting */}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
