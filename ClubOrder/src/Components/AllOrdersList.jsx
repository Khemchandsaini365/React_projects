import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubHeaderForLocations from "./SubHeaderForLocations";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import AllProductsTable from "./AllProductsTable";
import { base_url } from "../env";
import { CircularProgress } from "@mui/material";
import { useContext, useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { toast, ToastContainer } from "react-toastify";

const AllOrdersList = ({ heading }) => {
  const { type } = useParams();
  const decodedType = decodeURIComponent(type);
  const [orders, setOrders] = useState(null); // Initial state is null
  const [loading, setLoading] = useState(true); // Loading state is true initially
  const [error, setError] = useState(null); // State for error message
  const OrdersData = createContext();
  const [savedType, setSavedType] = useState(decodedType); // Save it in state
  // console.log(decodedType);

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
      // console.log(decodedType);

      fetch(
        `${base_url}/OrdersByLocationList/?Location=${type}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.status === false || result.error === "No Data Found") {
            setError("No data available for this location."); // Set error message if no data is found
            setLoading(false);
            toast.error("Couldn't fetch Orders Data",{autoClose:3000})
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

  const handleEdit = ({ row }) => {
    const data = row;
    // console.log(data);
  };

  const Allorderstable = ({ orders }) => {
    // Memoized columns
    const columns = useMemo(
      () => [
        {
          accessorKey: "OrdID", // Access nested data with dot notation
          header: "Sr. NO.",
        },
        {
          accessorKey: "OrdNo",
          header: "OrdNo",
        },
        {
          accessorFn: (row) =>
            row.Details?.[0]?.OrdDtl_ProdName || "No Product",
          header: "Product",
        },
        {
          accessorFn: (row) => row.Details?.[0]?.OrdDtl_Qty || 0,
          header: "Quantity",
        },
        {
          accessorKey: "OrdMemberName", // Normal accessorKey
          header: "OrdMemberName",
        },
        {
          accessorKey: "OrdTableNo",
          header: "OrdTableNo",
        },
        {
          accessorKey: "OrdLocName",
          header: "OrdLocationName",
        },
      ],
      []
    );

    const table = useMaterialReactTable({
      columns,
      data,
      initialState: { density: "compact" }, // Data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
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
        
      <ToastContainer/>
        <SubHeaderForLocations
          Name={type.charAt(0).toUpperCase() + type.slice(1) + " Orders List"}
          hidebtn={true}
        />

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h2>{error}</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <ToastContainer/>
      <SubHeaderForLocations
        Name={type.charAt(0).toUpperCase() + type.slice(1) + " Orders List"}
        hidebtn={true}
      />
      {orders && <Allorderstable orders={orders} />}
    </>
  );
};

export default AllOrdersList;
