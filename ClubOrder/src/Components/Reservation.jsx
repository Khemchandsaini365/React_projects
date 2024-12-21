import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";
import { base_url } from "../env";
import { BiEdit } from "react-icons/bi";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { IconButton } from "rsuite";
import { logDOM } from "@testing-library/react";

const Reservation = () => {
  //   /company/:type/reservation/newtablereserve
  // /company/:type/reservation/edittablereserve/:reserveID
  const [searchTerm, setSearchTerm] = useState();
  const [allClients, setAllclients] = useState([]);
  const [loader, setLoader] = useState(true);
  const naviagte = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleEdit = (row) => {
    // console.log(row);
    const id = row.original.TbResvID;
    naviagte(`edittablereserve/${id}`, { state: id });
  };

  const addNewClient = () => {
    naviagte("newtablereserve");
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
        console.log(result.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllClientsLogins();
  }, []);

  // Example data
  const data = allClients;

  const Tabel = () => {
    // Memoize columns
    const columns = useMemo(
      () => [
        {
          accessorKey: "TbResvNo", // Access nested data with dot notation actions 
          header: "TbResvNo",
          size: 150,
        },
        {
          Cell: ({ row }) => {
            // Safe access to Tables array and map over each table's TableNo, joining with commas
            const tableNos = row.original.Tables?.map(table => table.TableNo).join(", ") || "No table number";
            return (
              <span>{tableNos}</span>
            );
          },
          header: "TableNo",
          size: 150,
        },        
        {
          accessorKey: "TbResvMemName",
          header: "TbResvMemName",
          size: 150,
        },
        {
          accessorKey: "TbResvGuestCount", // Normal accessorKey
          header: "TbResvGuestCount",
          size: 100,
        },
        {
          header: "TbResvDate",
          size: 150,
          Cell: ({ row }) => {
            // Assuming the date is in the format '2024-12-06T15:51:16'
            const date = new Date(row.original.TbResvDate);

            // Extract day, month, and year
            const day = String(date.getDate()).padStart(2, "0"); // Pad day to 2 digits
            const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month (0-indexed, so add 1)
            const year = date.getFullYear();

            // Format as 'dd-mm-yyyy'
            return `${day}-${month}-${year}`;
          },
        },
      ],
      []
    );

    const table = useMaterialReactTable({
      columns,
      data,
      enableStickyHeader: true,
      enableRowNumbers: true,   // Data must be memoized or stable
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
          <div className="container-fluid p-0 bg-light my-2 d-flex justify-content-between">
            <div className="heading h4">
              <div className="d-inline p-0 mx-2">
                <BackButton />
              </div>
              Reserved Tables
            </div>

            {/* <div className="heading" >
    
                <a name="" id="" class="btn btn-primary px-4" role="button" onClick={addNewClient}>
                  Add
                </a>
           
            </div> */}
          </div>

          {/* Table */}
          <div className="h-50">
            <Tabel />
          </div>
        </>
      )}
    </>
  );
};

export default Reservation;
