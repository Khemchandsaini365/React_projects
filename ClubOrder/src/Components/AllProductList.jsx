import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import SubHeaderForLocations from "./SubHeaderForLocations";
import { BiDownArrow, BiDownload, BiEdit, BiSearch } from "react-icons/bi";
import { MdDelete, MdDeleteForever, MdDownload, MdGridView } from "react-icons/md";
// import AllProductsTable from "./AllProductsTable";
import { base_url } from "../env";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import CardProducts from "./CardProducts";
// import ProductTable from "./ProductTable";
import { mkConfig, generateCsv, download } from "export-to-csv";
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
import { FiDelete } from "react-icons/fi";
import { RiDeleteRow } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import BackButton from "./BackButton";
import { BsViewList } from "react-icons/bs";

import { grey } from "@mui/material/colors";
import GridViewIcon from '@mui/icons-material/GridView';

const AllProductList = ({ heading }) => {
  const { type } = useParams();
  const [products, setProducts] = useState(null); // Initial state is null
  const [loading, setLoading] = useState(true); // Loading state is true initially
  const [viewIcn, setviewIcn] = useState(false);
  const [openDialog, setOpenDialog] = useState(false); // State for Dialog
  const [selectedProduct, setSelectedProduct] = useState(null); // State for the product to be deleted
  const [showSearchInput, setShowSearchInput] = useState(false); // State for toggling search input visibility

  // const LocID = location.state?.;
  // console.log(LocID);
   const LayoutandAddBtn = () => {
        const toggel = () => {
          setviewIcn((prevState) => !prevState);
        };
        return (
          <>
            {/* <a name="" id="" class="btn btn-primary px-4 mx-2" role="button" >
                  Add
                </a> */}
            <div onClick={toggel} >
              {viewIcn ? <MdGridView /> :  <Tooltip title="Change to Grid View">  <GridViewIcon sx={{ color:"grey" ,marginRight:"10px"}} /> </Tooltip>  }
            </div>
          </>
        );
      };
  const getAllProducts = async () => {
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
    


    try {
      const LocID = localStorage.getItem("LocID");
      const response = await fetch(
        `${base_url}/ProductByCategoryAndLocation?MainID=0&LocID=${LocID}&Status=0`,
        requestOptions
      );
      const result = await response.json();
      if (result.status === false || !result.data) {
        // Handle the case where no data is found
        // console.log(result.error); // "No Data Found" message
        setProducts([]); // Set an empty array for no products
      } else {
        // Filter out deactivated products
        const activeProducts = result.data.filter(
          (product) => !product.ProdIsDeactive
        );
        setProducts(activeProducts);
      } // Set the data once the API call is successful
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false); // Set loading to false when done
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []); // Empty dependency array, runs once when the component mounts

  // Start of tabele
  const handleDelete = async () => {
    if (selectedProduct) {
      setLoading(true); // Start loading animation when starting the delete process
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const token = localStorage.getItem("tokken");

      const productData = {
        ProdID: selectedProduct.ProdID,
        ProdCode: selectedProduct.ProdCode,
        ProdName: selectedProduct.ProdName,
        ProdCateID: selectedProduct.ProdCateID,
        ProdCateName: selectedProduct.ProdCateName,
        ProdLocID: selectedProduct.ProdLocID,
        ProdLocName: selectedProduct.ProdLocName,
        ProdFullPrice: selectedProduct.ProdFullPrice,
        ProdHalfPrice: selectedProduct.ProdHalfPrice,
        ProdCGSTPer: selectedProduct.ProdCGSTPer,
        ProdSGSTPer: selectedProduct.ProdSGSTPer,
        ProdIGSTPer: selectedProduct.ProdIGSTPer,
        ProdVATPer: selectedProduct.ProdVATPer,
        ProdCessPer: selectedProduct.ProdCessPer,
        ProdCessValue: selectedProduct.ProdCessValue,
        ProdIsDeactive: true, // Set ProdIsDeactive to true
        ProdIsStockWise: selectedProduct.ProdIsStockWise,
        ProdIsNonHalf: selectedProduct.ProdIsNonHalf,
        ProdIsMLs: selectedProduct.ProdIsMLs,
        ProdType: selectedProduct.ProdType,
        ImageBase64: selectedProduct.ImageBase64,
        Infos: selectedProduct.Infos || [],
      };

      const raw = JSON.stringify({
        tokenData: token,
        Prod: productData,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          `${base_url}/UpdateProduct?MainID=${selectedProduct.ProdID}`,
          requestOptions
        );
        const result = await response.json();
        // console.log(result);

        if (result.status) {
          // Optimistically update the products list
          setProducts((prevProducts) =>
            prevProducts.filter(
              (product) => product.ProdID !== selectedProduct.ProdID
            )
          );
        } else {
          // Handle failure case (e.g., show an error message)
          toast.error("Couldn't Delete The Product", {
            autoClose: 1000,
          });
        }
      } catch (error) {
        console.error("Error deleting product ", error);
      } finally {
        setOpenDialog(false); // Close the dialog after the action
        setLoading(false); // End loading after the action is completed
      }
    }
  };

  // Example data type
  const csvConfig = mkConfig({
    useKeysAsHeaders: true,
    filename: "Products_list",
  });
  const data = products;
  const ProductTable = ({ products }) => {
    // Memoized columns
    const columns = useMemo(
      () => [
        {
          accessorKey: "ProdCode", // Access nested data with dot notation
          header: "Product Code",
        },
        {
          accessorKey: "ProdName",
          header: "Product Name",
          size: 300,
        },
        {
          accessorKey: "ProdCateName", // Normal accessorKey
          header: "Product Category",
        },
        {
          accessorKey: "Unit",
          header: "Unit",
          size: 100,
        },
        {
          accessorKey: "ProdFullPrice",
          header: " Full (Rs)",
          size: 100,
        },
        {
          accessorKey: "ProdHalfPrice",
          header: " Half (Rs)",
          size: 100,
        },
        {
          header: "Remove", // Custom column for the icon
          
          Cell: ({ row }) => (
            <div
              onClick={() => {
                setSelectedProduct(row.original);
                setOpenDialog(true);
              }}
              style={{ fontSize: "15px" }}
            >
              <MdDelete /> {/* Replace with your custom icon */}
            </div>
          ),
          size: 100,
        },
      ],
      []
    );

    const handleExportData = () => {
      let newdata = data?.map((item) => {
        return { ...item, Infos: "" };
      });
      const csv = generateCsv(csvConfig)(newdata);
      const filename = "Products_list.csv";
      download(csvConfig)(csv);
    };

    const table = useMaterialReactTable({
      columns,
      data,
      enableRowNumbers: true,
      enableStickyFooter: true,
      enableStickyHeader: true,
      enableColumnResizing: true,
      enableBottomToolbar: false,
      enablePagination: false,
      enableTopToolbar:false,
      layoutMode: "grid",
      initialState: { density: "compact",showGlobalFilter:true }, // Data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
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
          <div className="heading h4">
          <div className="d-inline p-0 mx-2">
            <BackButton />
          </div>
          {type.charAt(0).toUpperCase() + type.slice(1) + " Products List"}
        </div>
            {/* <SubHeaderForLocations
              Name={
                type.charAt(0).toUpperCase() + type.slice(1) + " Products List"
              }
              setviewIcn={setviewIcn}
              viewIcn={viewIcn}
              hidebtn={false}
            /> */}
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
            <Box> <LayoutandAddBtn/></Box>
            <Box>
              <Button
                color="primary"
                onClick={handleExportData}
                variant="contained"
                size="small"
                >
                  <div className="pe-1">

                <MdDownload/>
                  </div>
              
                Export
              </Button>
            </Box>
          </Box>
        </Box>
        <MaterialReactTable
          table={table}
          renderColumnHeader={(column) => {
            return (
              <div
                style={{
                  backgroundColor: "#4caf50", // Change to your desired color
                  color: "white",
                  padding: "10px",
                }}
                {...column.getHeaderProps()}
              >
                {column.renderHeader()}
              </div>
            );
          }}
        />
      </Box>
    );
  };

  // End of tabele

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

  // Check if no products were found and display a message
  if (products.length === 0) {
    return (
      <>
        <SubHeaderForLocations
          Name={type.charAt(0).toUpperCase() + type.slice(1) + " Products List"}
          setviewIcn={setviewIcn}
          viewIcn={viewIcn}
          hidebtn={false}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <h5>No data found</h5> {/* Display "No Data Found" message */}
        </div>
      </>
    );
  }

  return (
    <>
      <ToastContainer />

      {products && viewIcn ? (
        <CardProducts
          products={products}
          Name={type.charAt(0).toUpperCase() + type.slice(1) + " Products List"}
          setviewIcn={setviewIcn}
          viewIcn={viewIcn}
        />
      ) : (
        // <AllProductsTable products={products} />
        <ProductTable products={products} />
      )}

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogContent>
          <p>Are you sure you want to delete this item?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            No
          </Button>
          <Button
            onClick={handleDelete}
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
};

export default AllProductList;
