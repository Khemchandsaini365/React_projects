import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress, IconButton, Tooltip ,Button} from "@mui/material";
import { base_url } from "../env";
import { BiEdit, BiSearch } from "react-icons/bi";
import { useMemo } from "react";
import {
  MaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ShowHideColumnsButton,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleFullScreenButton,
  useMaterialReactTable,
} from "material-react-table";
import { toast, ToastContainer } from "react-toastify";

const Allclients = () => {
  const [allClients, setAllclients] = useState([]);
  const [loader, setLoader] = useState(true);
  const naviagte = useNavigate();
  const [showSearchInput, setShowSearchInput] = useState(false); // State for toggling search input visibility
  
  const handleEdit = (row) => {
    const id = row.original.LoginID;
    const data = {
      compName: row.original.CompName,
    };
    naviagte(`/editClientLogin/${id}`, { state: data });
  };

  const addNewClient = () => {
    naviagte("/addNewClient");
  };

  const getAllClientsLogins = () => {
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

    fetch(`${base_url}/Admin_LoginList`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAllclients(result.data);
        setLoader(false);
        // console.log(result.data);
      })
      .catch((error) => {
        toast.error(error, {
          autoClose: 1000,
        });
        setLoader(false);
        console.error(error);
      });
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
          accessorKey: "IsDeActive",
          header: "Status",
          filterVariant: 'checkbox',
          Cell: ({ row }) => {
            return row?.original?.IsDeActive ? (
              <div className="btn btn-danger btn-sm m-0 p-0 px-1">
                De-Active
              </div>
            ) : (
              <div className="btn btn-success btn-sm m-0 p-0 px-1">Active</div>
            );
          },
          size: 150,
        },

        {
          header: "Actions", // Custom column for the icon
      // Doesn't need to map to any data field
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
      enableBottomToolbar: false,
      enablePagination: false,
      enableRowNumbers: true, // Data must be memoized or stable
      enableTopToolbar:false,
      initialState: { density: "compact" ,showGlobalFilter:true},
      muiTableHeadCellProps: {
        sx: {
          bgcolor: "#a5d8dd", // Primary color
          color: "black", // Text color for header
          fontWeight: "bold", // Optional: bold header text
        },
      },

    
    });

    return (
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
              All Clients
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
                onClick={addNewClient}
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
    );
  };

  return (
    <>
      <ToastContainer />
      {loader ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "70vh" }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
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
