import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubHeaderForLocations from "./SubHeaderForLocations";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
// import AllProductsTable from "./AllProductsTable";
import { base_url } from "../env";
import { CircularProgress, createTheme, TextField, ThemeProvider } from "@mui/material";
import { useContext, useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { toast, ToastContainer } from "react-toastify";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "antd";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const AllOrdersList = ({ heading }) => {
  const { type } = useParams();
  const decodedType = decodeURIComponent(type);
  const [orders, setOrders] = useState([]); // Initial state is null
  const [loading, setLoading] = useState(true); // Loading state is true initially
  const [error, setError] = useState(null); // State for error message
  const OrdersData = createContext();
  const [savedType, setSavedType] = useState(decodedType); // Save it in state
  // console.log(decodedType);
  const Theme = { primaryThemeColor: "#1976d2" };

  useEffect(() => {
    if (savedType !== type) {
      const decodedType = decodeURIComponent(type);
      setSavedType(decodedType); // Update the savedType if the URL changes
    }
  }, [type, savedType]);

  useEffect(() => {
    const getAllorders = () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const token = localStorage.getItem("tokken");
      const raw = JSON.stringify({
        tokenData: token,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };


      fetch(
        `${base_url}/OrdersByLocationList/?Location=${type}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.status === false || result.error === "No Data Found") {
            setError("No data available for this location."); // Set error message if no data is found
            setLoading(false);
            setOrders([]); // Ensure no data is displayed
          } else {
            setOrders(result.data);
            setLoading(false);
            setError(null); // Reset error if data is found
          }
        })
        .catch((error) => {
          console.error(error);
          setError("An error occurred while fetching the data."); // Handle fetch errors
        });
    };

    getAllorders();
  }, [type]); // Re-run effect when the location type changes

  const data = orders;
  const Allorderstable = ({ orders }) => {
    // Memoized columns
    const columns = useMemo(
      () => [
        {
          accessorKey: "OrdNo",
          header: "OrdNo",
          size:50
        },
        {
                  accessorFn: (date) => date?.OrdDate,
                  Cell: ({ cell }) => dayjs(cell.getValue()).format("DD/MM/YYYY"),
                  header: "Ord Date",
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
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                          <div style={{ display: "flex", gap: "1rem"}} >
                            <DatePicker
                              style={{minWidth:"115px"}}
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
                              value={column.getFilterValue()?.endDate}
                              style={{minWidth:"115px"}}
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
          accessorFn: (row) => {return row.Details?.map((order) => order.OrdDtl_ProdName).join(" | ") || " "},
          Cell: ({ row }) => {
            const OrderProduct =
              row.original.Details?.map((order) => order.OrdDtl_ProdName).join("<br /> ") ||
              "";
            return <span dangerouslySetInnerHTML={{__html:OrderProduct}} /> 
          },
          header: "Product",
          filterMethod: (rows, columnId, filterValue) => {
            return rows.filter((row) => {
              // Check if any product name in the Details array matches the filter value
              const products = row.values[columnId].toLowerCase();
              return products.includes(filterValue.toLowerCase()); // Case insensitive match
            });
          }
        },
        {
          accessorFn: (row) => (row.Details?.map((order)=> order.OrdDtl_Qty) || 0),
          Cell: ({ row }) => {
            const OrderProductQty =
              row.original.Details?.map((order) => order.OrdDtl_Qty).join("<br />  ") ||
              " ";
            return <span dangerouslySetInnerHTML={{__html:OrderProductQty}} />
          },
          filterMethod: (rows, columnId, filterValue) => {
            return rows.filter((row) => {
              // Check if any product name in the Details array matches the filter value
              const products = row.values[columnId].toLowerCase();
              return products.includes(filterValue.toLowerCase()); // Case insensitive match
            });
          },
          header: "Quantity",
           size:50
        },
        {
          accessorKey: "OrdMemberName", // Normal accessorKey
          header: "OrdMemberName",
           size:100
        },
        {
          accessorKey: "OrdTableNo",
          header: "OrdTableNo",
           size:65
        },
        {
          accessorKey: "OrdLocName",
          header: "OrdLocationName",
          size:100
        },
      ],
      []
    );

    const table = useMaterialReactTable({
      columns,
      data,
      initialState:{density:"compact"},
      layoutMode: "grid",
      muiTableHeadCellProps: {
        sx: {
          bgcolor: '#a5d8dd', // Primary color
          color: 'black', // Text color for header
          fontWeight: 'bold', // Optional: bold header text
        }
      },
      enableRowNumbers:true,
      enableColumnResizing:true,
      enableBottomToolbar:false,
      enableFullScreenToggle:false,
      enablePagination:false,
      enableStickyHeader:true,
      renderTopToolbarCustomActions: ({ table }) => {
        return (
          <>
            <SubHeaderForLocations
          Name={type.charAt(0).toUpperCase() + type.slice(1) + " Orders List"}
          hidebtn={true}
        />
          </>
        );
      },
    });

    return <MaterialReactTable table={table} />;
  };

  // Render a loading spinner while fetching data
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  // Render an error message if no data is found or an error occurred
  if (error) {
    return (
      <>
      <Allorderstable  orders={orders}/>
      </>
    );
  }

  return (
    <>
      <ToastContainer/>
      {orders && <Allorderstable orders={orders} />}
    </>
  );
};

export default AllOrdersList;
