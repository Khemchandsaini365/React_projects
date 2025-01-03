import React, { useEffect, useState, useMemo } from "react";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";
import { CircularProgress, ThemeProvider, TextField } from "@mui/material";
import { base_url } from "../env";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "antd";
import { createTheme } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const Reservation = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [allClients, setAllclients] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate(); // Fixed typo here

  const Theme = { primaryThemeColor: "#1976d2" };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEdit = (row) => {
    const id = row.original.TbResvID;
    navigate(`edittablereserve/${id}`, { state: id }); // Fixed typo here
  };

  const addNewClient = () => {
    navigate("newtablereserve");
  };

  const getAllClientsLogins = () => {
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

    fetch(`${base_url}/TableReservationList`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAllclients(result.data);
        setLoader(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllClientsLogins();
  }, []);

  // Example data
  const data = allClients;

  const TableComponent = () => {
    // Renamed function from `Tabel` to `TableComponent` for better clarity
    const columns = useMemo(
      () => [
        {
          accessorFn: (date) => date?.TbResvDate,
          Cell: ({ cell }) => dayjs(cell.getValue()).format("DD/MM/YYYY"),
          header: "TabRes Date",
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
          accessorKey: "TbResvNo",
          header: "TbResvNo",
          size: 150,
        },
        
        {
          accessorFn: (row) =>
            row?.Tables?.map((table) => table.TableNo).join(", ") ||
            "No table number",
          Cell: ({ row }) => {
            const tableNos =
              row.original.Tables?.map((table) => table.TableNo).join(", ") ||
              "No table number";
            return <span>{tableNos}</span>;
          },
          header: "TableNo",
          size: 150,
          enableColumnFilter: true,
        },
        {
          accessorKey: "TbResvMemName",
          header: "TbResvMemName",
          size: 150,
        },
        {
          accessorKey: "TbResvGuestCount",
          header: "TbResvGuestCount",
          size: 100,
        },

        
        // {
        //   header: "TbResvDate",
        //   size: 150,
        //   Cell: ({ row }) => {
        //     const date = new Date(row.original.TbResvDate);
        //     const day = String(date.getDate()).padStart(2, "0");
        //     const month = String(date.getMonth() + 1).padStart(2, "0");
        //     const year = date.getFullYear();
        //     return `${day}-${month}-${year}`;
        //   },
        //   enableColumnFilter: true,
        //   filterFn: (rows, id, filterValue) => {
        //     return rows.filter(row => {
        //       const date = new Date(row.values[id]);
        //       const filterDate = new Date(filterValue);
        //       return date.toDateString().includes(filterDate.toDateString());
        //     });
        //   },
        // },
      ],
      []
    );

    const table = useMaterialReactTable({
      columns,
      data,
      enableStickyHeader: true,
      enableColumnFilters: true,
      enableRowNumbers: true,
      enableBottomToolbar: false,
      enablePagination: false,
      enableFullScreenToggle:false,
      initialState: { density: "compact" },
      muiTableHeadCellProps: {
        sx: {
          bgcolor: "#a5d8dd", // Primary color
          color: "black", // Text color for header
          fontWeight: "bold", // Optional: bold header text
        },
      },

      renderTopToolbarCustomActions: ({ table }) => {
        return (
          <>
            <div className=" p-0  d-flex justify-content-between">
              <div className="heading h4">
                <div className="d-inline p-0 mx-2">
                  <BackButton />
                </div>
                Reserved Tables
              </div>
            </div>
          </>
        );
      },
    });

    return <MaterialReactTable table={table} />;
  };

  return (
    <>
      {loader ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "70vh" }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          {/* <div className="container-fluid p-0 bg-light my-2 d-flex justify-content-between">
            <div className="heading h4">
              <div className="d-inline p-0 mx-2">
                <BackButton />
              </div>
              Reserved Tables
            </div>
          </div> */}

          {/* Table */}
          <div className="h-50">
            <TableComponent />
          </div>
        </>
      )}
    </>
  );
};

export default Reservation;
