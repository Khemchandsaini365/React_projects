import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { base_url } from "../env";
import { Box, TextField } from "@mui/material";
import Example from "./TestingComp";
import { CgClose } from "react-icons/cg";

const LicenseForm = ({ heading, btn }) => {

  const { state } = useLocation();
  const { liceID } = useParams();
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [license, setLicense] = useState({
    LiceNo: "",
    LiceDeviceID: "",
    LiceCompanyID: "",
    LiceCompanyName: "",
    LiceExpiryDate:""
  });
  
  // console.log(state);
  const [TableData,setTableData]=useState([]);
  setTimeout(() => {
  setTableData(state.Details)
  // console.log(TableData);
  }, 1000);

  const handleDateChange = (event) => {
    const selectedDateValue = event.target.value;
    const currentDate = new Date();
    
    // Format the current date as YYYY-MM-DD
    const formattedCurrentDate = currentDate.toISOString().split('T')[0];
    
    // Check if the selected date is in the past or today's date
    if (selectedDateValue < formattedCurrentDate) {
      setErrorMessage("You cannot select a past date.");
    } else if (selectedDateValue === formattedCurrentDate) {
      setErrorMessage("You cannot select today's date.");
    } else {
      setErrorMessage(""); // No error if the selected date is valid
      setSelectedDate(selectedDateValue);
      setLicense((prev) => ({
      ...prev,
      LiceExpiryDate: selectedDateValue + "T00:00:00"
    }));
    }

    // Set the selected date state and update the license expiration date
    
    // console.log("Selected Date:", selectedDateValue);
    // console.log("Formatted Current Date:", formattedCurrentDate);

    
  };
  useEffect(() => {
    const fetchCompanies = async () => {
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
      try {
        const response = await fetch(
          `${base_url}/Admin_CompanyList`,
          requestOptions
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setCompanies(result.data); // Assuming result.data contains the companies list
        // console.log(companies);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

 
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const filteredData = companies.filter((item) =>
    item.CompName.toLowerCase().includes(inputValue.toLowerCase())
  );
  const handleSelectItem = (item) => {
    setInputValue(item.CompName); // Set input value to selected item name
    setLicense((prevLicense) => ({
      ...prevLicense,
      LiceCompanyName: item.CompName,
      LiceCompanyID: item.CompID, // Update LiceCompanyName in state
    }));
  };

  // Update the license object on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLicense((prevLicense) => ({
      ...prevLicense,
      [name]: value,
    }));
  };
  // console.log(license);

  const updateLicense = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const date = new Date(); // Example Date object
    const formattedDate = date.toISOString().split("T")[0] + "T00:00:00";
    const adminTokken=localStorage.getItem("userToken")

    const raw = JSON.stringify({
      tokenData:adminTokken,
      License: {
        "LiceID": liceID,
        "LiceNo": license.LiceNo,
        "LiceDeviceID": license.LiceDeviceID,
        "LiceCompanyID": license.LiceCompanyID,
        "LiceCompanyName": license.LiceCompanyName,
        "Details": [
          {
            // LiceDtlID: "1",
            // LiceDtl_MainID: "1",
            liceRenewalDate: formattedDate,
            LiceExpiryDate: license.LiceExpiryDate,
          },
        ],
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${base_url}/Admin_UpdateLicense?MainID=${liceID}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        navigate("/license");
        // console.log(result);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(license);
    await updateLicense();
  };

  const ModalpopOver = ({body}) => {
    return (
      <>
      <div>
    {/* Button trigger modal */}
    <button type="button" className="btn btn-outline-info btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Show History
    </button>
    {/* Modal */}
    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between">
            <h5 className="modal-title" id="exampleModalLabel">License History</h5>
            <button type="button" className="btn btn-outline-dark btn-sm " data-bs-dismiss="modal"><CgClose/></button>
          </div>
          <div className="modal-body">
            <Example data={body} />
          
          </div>
          
        </div>
      </div>
    </div>
  </div>
  
      
      </>
    )
  }
  // Fetch License Info when component mounts
  useEffect(() => {
    if (state) {
      setLicense({
        LiceNo: state.LiceNo,
        LiceDeviceID: state.LiceDeviceID,
        LiceCompanyName: state.LiceCompanyName,
        LiceCompanyID:state.LiceCompanyID
      });
    }
  }, [state]);

  return (
    <div className="container mt-3">
      <h2 className="text-center">Renew License</h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>  
        <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label h6">
              
              LiceNo
            </label>
          </div>
          <div className="col-sm-8">
            <TextField
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
              id="outlined-disabled"
              label=""
              variant="filled"
              sx={{ width: "100%" }}
              size="small"
              type="text"
              name="LiceNo"
              value={license.LiceNo} // Binding with state
              onChange={handleChange}
              
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label h6">
            LiceDeviceID
            </label>
          </div>
          <div className="col-sm-8">
            <TextField
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
              id="outlined-basic"
              label=""
              variant="filled"
              // variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              type="text"
              name="LiceDeviceID"
              value={license.LiceDeviceID} // Binding with state
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label h6">
            LiceCompanyName
            </label>
          </div>
          <div className="col-sm-8">
            <TextField
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
              id="outlined-basic"
              label=""
              variant="filled"
              // variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              type="text"
              name="LiceCompanyName"
              value={license.LiceCompanyName} // Binding with state
              // onChange={handleChange}
              // onFocus={(e) => {
              //   handleInputChange(e);
              //   toggleDropdown();
              // }}
              // onClick={toggleDropdown}
            />
            {isOpen && (
              <ul
                className="list-group position-absolute w-25"
                style={{ maxHeight: "200px", overflowY: "auto", zIndex: "10" }}
              >
                {filteredData.length > 0 ? (
                  filteredData.map((item) => (
                    <li
                      key={item.compID}
                      className="list-group-item list-group-item-action "
                      onClick={() => {
                        handleSelectItem(item);
                        setIsOpen(false);
                      }}
                    >
                      {item.CompName}
                    </li>
                  ))
                ) : (
                  <li className="list-group-item list-group-item-action">
                      No matches found
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label h6">
                Set Expiry Date
            </label>
          </div>
          <div className="col-sm-8">
          <Box display="flex" flexWrap="wrap">
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          required={true}
          size="small"
          id="date"
          label=""
          type="date"
          value={selectedDate} // Bind the input value to the selectedDate state
          onChange={handleDateChange} // Trigger handleDateChange on date change
          sx={{
            marginRight: 1,
            width: 200,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>

      {/* Display error message if there's an error  */}
      {errorMessage && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          {errorMessage}
        </div>
      )}
    </Box>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label h6">
             History
            </label>
          </div>
          <div className="col-sm-8">
            {/* <Example data={TableData} /> */}
            {/* Show History Pop Over */}
            <ModalpopOver body={TableData} />
          </div>
        </div>

        <div className="text-center mb-3">
          <button
            className="btn btn-primary waves-effect waves-light col-3"
            id="btn-submit"
          >
            {btn ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LicenseForm;