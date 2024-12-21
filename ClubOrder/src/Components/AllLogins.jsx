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

const Allclients = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [allClients, setAllclients] = useState([]);
  const [loader, setLoader] = useState(true);
  const naviagte = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleEdit = (row) => {
    // console.log(row);

    const id = row.original.LoginID;

    const data={
      compName:row.original.CompName
    }
    naviagte(`/editClientLogin/${id}`, { state: data,});
  };

  const addNewClient = () => {
    naviagte("/addNewClient");
  };

  const getAllClientsLogins = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const adminTokken=localStorage.getItem("userToken")

    const raw = JSON.stringify({
      tokenData:adminTokken,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${base_url}/Admin_LoginList`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAllclients(result.data);
        setLoader(false);
        // console.log(result.data);
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
          accessorKey: "LoginUserName", // Access nested data with dot notation
          header: "LoginUserName",
          size: 150,
        },
        {
          accessorKey: "LoginMobile",
          header: "LoginMobile",
          size: 150,
        },
        {
          accessorKey: "LoginEmailID", // Normal accessorKey
          header: "LoginEmailID",
          size: 200,
        },
        {
          accessorKey: "CompName",
          header: "CompName",
          size: 150,
        },

        {
          header: "Actions", // Custom column for the icon
          id: "actions",
          accessorKey: "actions", // Doesn't need to map to any data field
          Cell: ({ row }) => (
            <div onClick={() => handleEdit(row)} style={{ fontSize: "15px" }}>
              <BiEdit /> {/* Replace with your custom icon */}
            </div>
          ),
          size: 100,
        },
      ],
      []
    );

    const table = useMaterialReactTable({
      columns,
      data,
      enableStickyHeader: true,

      enableRowNumbers: true, // Data must be memoized or stable
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
              All Clients
            </div>

            <div className="heading">
              <a
                name=""
                id=""
                class="btn btn-primary px-4"
                role="button"
                onClick={addNewClient}
              >
                Add
              </a>
            </div>
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

export default Allclients;
