import React, { useEffect, useMemo, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BiEdit } from "react-icons/bi";
import SubHeader from "./SubHeader";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import CircularProgress from "@mui/material/CircularProgress";
import BackButton from "./BackButton";
import { base_url } from "../env";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import EditCompany from "./EditCompany";
import { Box, Button } from "@mui/material";
import { FiDownload } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";

export default function License() {
  const ApiData = useSelector((state) => state.ApiData.filteredData); // Assuming ApiData contains the filtered licenses.
  const navigate = useNavigate();
  const [licenses, setLicenses] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  console.log(licenses);

  const formattedDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0"); // Ensure 2 digits for day
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    const fetchLicenses = () => {
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

      fetch(`${base_url}/Admin_LicenseList`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status === false) {
            toast.error("Couldn't fetch licences",{autoClose:3000})
          } else {
          if (result?.data) {
            setLicenses(result.data); // Assuming result.data contains the licenses.
          }            
          }

        })
        .catch((error) => {
          toast.error("Couldn't fetch licences",{autoClose:3000})
          console.error(error)})
        .finally(() => setLoading(false)); // Set loading to false after data fetch is complete
    };

    fetchLicenses();
  }, []);

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
    // Memoize columns
    const columns = useMemo(
      () => [
        {
          accessorKey: "LiceNo", // Access nested data with dot notation
          header: "LiceNo",
          size: 150,
        },
        {
          accessorKey: "LiceDeviceID",
          header: "LiceDeviceID",
          size: 150,
        },
        {
          accessorKey: "LiceCompanyName", // Normal accessorKey
          header: "LiceCompanyName",
          size: 200,
        },
        {
          header: "License Date",
          Cell: ({ row }) => {
            // Safe access with optional chaining
            const length=row.original.Details?.length;
            const renewalDate =
              row.original.Details?.[length-1]?.LiceRenewalDate || "No date";
            return (
              <span>
                {renewalDate === "No date"
                  ? renewalDate
                  : formatDate(renewalDate)}
              </span>
            );
          },
        },

        {
          header: "Expiry Date",
          Cell: ({ row }) => {
            // Safe access with optional chaining
            const length=row.original.Details?.length;
            const renewalDate =
              row.original.Details?.[length-1]?.LiceExpiryDate || "No date";
            return (
              <span>
                {renewalDate === "No date"
                  ? renewalDate
                  : formatDate(renewalDate)}
              </span>
            );
          },
        },
        
        {
          header: "Actions", // Custom column for the icon
          id: "actions",
          accessorKey: "actions", // Doesn't need to map to any data field
          Cell: ({ row }) => (
            <div
              onClick={() => handleCustomFunctionality(row)}
              style={{ fontSize: "15px" }}
            >
              <BiEdit /> {/* Replace with your custom icon */}
            </div>
          ),
          size: 100,
        },
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
      enableRowNumbers: true, // Data must be memoized or stable
      renderTopToolbarCustomActions: ({ table }) => (
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            padding: "8px",
            flexWrap: "wrap",
          }}
        >
          {/* <Button
          //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
          onClick={handleExportData}
          startIcon={<FiDownload />}
        >
          Export All Data
        </Button> */}
        </Box>
      ),
    });

    return <MaterialReactTable table={table} />;
  };

  return (
    <>
      <ToastContainer/>
      {/* <SubHeader Name={"License"} newlicense={"newlicense"} /> */}
      <div className="container-fluid p-0 bg-light my-2 d-flex justify-content-between">
        <div className="heading h4">
          <div className="d-inline p-0 mx-2 ">
            <BackButton />
          </div>
          License
        </div>

        <div className="heading">
          <a
            name=""
            id=""
            class="btn btn-primary px-4"
            role="button"
            onClick={handleEdit}
          >
            Add
          </a>
        </div>
      </div>
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
        <h3 className="text-center">No licenses found</h3>
      )}
    </>
  );
}
