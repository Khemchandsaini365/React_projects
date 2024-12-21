import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import foodImg from "../Images/Food.jpg"; // Placeholder image
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
} from "@mui/material";
import { base_url } from "../env";

const CardProducts = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const itemsPerPage = 10;

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // This is the handleSearch function that filters the products
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const isNumberQuery = !isNaN(query) && query !== "";
    setSearchTerm(query);

    // Filter products based on the search query
    const results = products.filter((product) => {
      const textMatch =
        product.ProdName.toLowerCase().includes(query) ||
        product.ProdCode.toLowerCase().includes(query) ||
        product.ProdCateName.toLowerCase().includes(query) ||
        product.Infos.some((info) => info.Info.toLowerCase().includes(query));

      const priceMatch =
        isNumberQuery &&
        (product.ProdFullPrice.toString().includes(query) ||
          product.ProdHalfPrice.toString().includes(query));

      return textMatch || priceMatch;
    });

    setFilteredProducts(results);
    setCurrentPage(1); // Reset to the first page when new search is made
  };

  // Handle deletion
  const handleDelete = async () => {
    if (selectedProduct) {
      setLoading(true);
      // Make the delete request here (you can replace the logic with your actual API call)
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
        tokenData:
          "RGdFQUFCK0xDQUFBQUFBQUJBQTlqODBPZ2pBUWhGK0Y3TmtRa0FRU2Jpb2V2UGdUMUh1RjFaaVd0bTZMaEJCOGRnc0JzcWZaK1NhejI0RlZIQ1drSGV4VXBabHNqNnhDU0oyU0JXcnJYWkY3dVJLMWZTc0pLOGpWMHphTWNLWkUvZkJPVkNKNUc2MmRmMGN5QTVsQzZBZkREQm1rTDlLVU1LKzFGRlZyUGlMUnduRGZZRkVUbWhIeEpkcUZQeXV5am8raUlGNTJOOGROcmNPMW8xeDRaa3lqcUhUK0pXcGkvcE5KdUpqWmRxcmZ6OW1NV1FiOWF2NzZrRUVhOW4rQnZ0WkFEZ0VBQUE9PQ==",
        Prod: productData,
      });

      try {
        const response = await fetch(
          `${base_url}/UpdateProduct?MainID=${selectedProduct.ProdID}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: raw,
          }
        );

        const result = await response.json();
        if (result.status) {
          // Remove the deleted product from the filteredProducts list
          setFilteredProducts((prevProducts) =>
            prevProducts.filter(
              (product) => product.ProdID !== selectedProduct.ProdID
            )
          );
        } else {
          alert("Failed to delete the product.");
        }
      } catch (error) {
        console.error("Error deleting product: ", error);
      } finally {
        setLoading(false);
        setOpenDialog(false);
      }
    }
  };

  // Calculate the index of the last and first product to show
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

  // Slice the filteredProducts array to show only the items for the current page
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <>
      <div className="main d-flex justify-content-center flex-wrap align-items-center p-2 gap-3">
        <div className="w-100 w-sm-auto d-flex justify-content-center">
          <input
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={handleSearch}
            className="form-control-sm border border-dark w-25"
          />
        </div>

        {/* Map through the current page's products */}
        {currentProducts.map((product) => (
          <div
            className="card"
            style={{ width: "300px", minHeight: "400px", overflow: "hidden" }}
            key={product.ProdID}
          >
            <div>
              <img
                className="card-img-top"
                src="" // Fallback image
                alt=""
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
              <div className="d-flex justify-content-between">
                <div
                  className="overflow-auto"
                  style={{
                    width: "15rem",
                    textAlign: "center",
                    fontWeight: 500,
                    color: "blue",
                  }}
                >
                  <p className="m-0 p-0">{product.ProdName}</p>{" "}
                  {/* Show full product name */}
                </div>
              </div>
              <div className="d-flex">
                <h6 className="col-4">Category</h6>
                <div className="overflow-auto w-100">
                  <p className="m-0 p-0 ">{product.ProdCateName}</p>
                </div>
              </div>
              <div className="d-flex">
                <h6 className="col-4">Code</h6>
                <div className="w-100">
                  <p className="m-0 p-0">{product.ProdCode}</p>
                </div>
              </div>
              <div className="d-flex">
                <h6 className="col-4">
                  Price (<BiRupee />)
                </h6>
                <div className="w-100">
                  <p className="m-0 p-0">
                    <strong>F</strong>: {product.ProdFullPrice}
                    <span> </span>
                    <strong>H</strong>: {product.ProdHalfPrice}
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => {
                      setSelectedProduct(product);
                      setOpenDialog(true);
                    }}
                  >
                    Remove <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-3">
        <nav>
          <ul className="pagination">
            {/* Previous Button */}
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => paginate(currentPage - 1)}
              >
                Previous
              </button>
            </li>

            {/* Page Numbers */}
            {[...Array(Math.min(10, totalPages))].map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                } d-none d-md-block`}
              >
                <button
                  className="page-link"
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            {/* Next Button */}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => paginate(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to delete this product?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Yes"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CardProducts;
