import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColumnHeaders, GridToolbar } from "@mui/x-data-grid";

import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Img from "../Images/Add_image.png";
import ImageUpload from "./Addimage";
import BackButton from "./BackButton";
import { Button } from "@mui/material";
import { LiaStreetViewSolid } from "react-icons/lia";
import { MdGridView } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { BsViewList } from "react-icons/bs";

const SubHeaderForLocations = ({
  Name,
  hidebtn,
  newlicense,
  newcompany,
  showDrop,
}) => {
  const navigate = useNavigate();
  const { type } = useParams();
  const handleEdit = () => {
    if (newlicense) {
      navigate(`/${newlicense}`);
    }
    if (newcompany) {
      navigate(`/${newcompany}`);
    }
  };

  const [file, setFile] = useState();

  function handleImageChange(e) {
    const file = e.target.files && e.target.files[0]; // Ensure files exist
    if (file && file.type.startsWith("image/")) {
      // Valid image file
      setFile(URL.createObjectURL(file));
    } else {
      // Show alert or error if the file is not an image
      alert("Please select a valid image file.");
    }
  }
  function handleImageClick() {
    document.getElementById("#fileinput");
  }

  const DropDown = () => {
    return (
      <>
        <SubHeaderForLocations />
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle "
            data-bs-toggle="dropdown"
            type="button"
            id="dropdownMenuButton"
            aria-expanded="false"
          >
            Locations
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              <NavLink
                to="/company/bar"
                className="text-dark text-decoration-none"
              >
                Bar
              </NavLink>
            </a>
            <a className="dropdown-item" href="#">
              <NavLink
                to="/company/restaurent"
                className="text-dark text-decoration-none"
              >
                {" "}
                Restaurant
              </NavLink>
            </a>
          </div>
        </div>
      </>
    );
  };

  const LayoutandAddBtn = () => {
    const [viewIcn, setviewIcn] = useState(true);
    const toggel = () => {
      setviewIcn((prevState) => !prevState);
    };
    return (
      <>
        {/* <a name="" id="" class="btn btn-primary px-4 mx-2" role="button" >
              Add
            </a> */}
        <button className="btn  btn-outline-dark" onClick={toggel}>
          {viewIcn ? <MdGridView /> : <BsViewList />}
        </button>
      </>
    );
  };
  return (
    <>
      {/* This form only visible in smaller screens than laptop */}
      <form
        className="d-flex search  d-lg-none d-xl-none d-xxl-none m-3"
        id="search"
        role="search"
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-primary " type="submit">
          Search
        </button>
      </form>
      {/* Form end */}
      {/* Drop Down for specific Club Locations */}

      {/* Model */}

      {/* Model */}

      <div className="container-fluid p-3 bg-light my-2 d-flex justify-content-between">
        <div className="heading h4">
          <div className="d-inline p-0 mx-2">
            <BackButton />
          </div>
          {Name}
        </div>
        <div className="heading" onClick={handleEdit}>
          {hidebtn ? "" : <LayoutandAddBtn />}
        </div>
        {showDrop && <DropDown />}
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content d-flex justify-content-center align-items-center">
            <div class="modal-header w-100 ">
              <h5 class="modal-title w-100 text-center" id="exampleModalLabel">
                Add New Product
              </h5>
            </div>
            <div class="modal-body " style={{ width: "20em" }}>
              <div className="card w-100">
                <div className="border border-light rounded m-2 p-2">
                  {/* {file?<img src={file} className="card-img mb-2" alt="Selected" onClick={handleImageClick}/>:<input type="file" src="" alt="" id="fileinput" onClick={handleImageChange} />} */}
                  <ImageUpload />
                </div>
                <div className="card-body">
                  <form action="">
                    <label htmlFor="Name" className="mx-2 ">
                      Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      style={{
                        outline: "none",
                        paddingLeft: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </form>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function AllProductsTable({ products }) {
  const columns = [
    { field: "id", headerName: "SR. NO." },
    {
      field: "ProdCode",
      headerName: "Product Code",
    },
    {
      field: "ProdName",
      headerName: "Product Name",
      width: 450,
    },
    {
      field: "ProdCateName",
      headerName: "Product Category",
      width: 150,
    },
    {
      field: "ProdCode",
      headerName: "Unit",
    },
    {
      field: "ProdFullPrice",
      headerName: " Full (Rs)",
      width: 100,
      type: "number",
    },
    {
      field: "ProdHalfPrice",
      headerName: " Half (Rs)",
      type: "number",
    },
  ];

  const AllProducts = products?.map((item) => {
    return { id: item?.ProdID, ...item };
  });

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={AllProducts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        editMode="row"
        pageSizeOptions={[1]}
        disableColumnSelector
        disableVirtualization
        disableColumnFilter
        disableRowSelectionOnClick
        rowHeight={30}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Box>
  );
}
