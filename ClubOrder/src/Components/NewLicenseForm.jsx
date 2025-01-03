import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { base_url } from "../env";
import { Autocomplete, Box, TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
const NewLicenseForm = ({ heading, btn }) => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const [license, setLicense] = useState({
    LiceNo: "",
    LiceDeviceID: "",
    LiceCompanyID: "",
    LiceCompanyName: "",
    LiceExpiryDate: "",
  });
  // Handle the form submit

  // Handle date change
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
      LiceExpiryDate: selectedDateValue + "T00:00:00Z"
    }));
    }

    // Set the selected date state and update the license expiration date
    
    // console.log("Selected Date:", selectedDateValue);
    // console.log("Formatted Current Date:", formattedCurrentDate);

    
  };

  // Handle input change for the dropdown
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (event, value) => {
    setSelectedValue(value);
    const CompName = value.CompName;
    const CompID = value.CompID;
    setLicense((prev) => ({
      ...prev,
      LiceCompanyID: CompID,
      LiceCompanyName: CompName,
    }));
  };
  // Handle item selection from the dropdown
  const handleSelectItem = (item) => {
    setInputValue(item.CompName); // Set input value to selected item name
    setLicense((prevLicense) => ({
      ...prevLicense,
      LiceCompanyID: item.CompID, // Update LiceCompanyName in state
    }));
  };

   const notify = () =>
      toast("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: "Bounce",
      });

  // Filter companies based on input value
  const filteredData = companies.filter((item) =>
    item.CompName.toLowerCase().includes(inputValue.toLowerCase())
  );

  // Fetch companies from the API
  useEffect(() => {
    const fetchCompanies = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        tokenData:
          "OWdBQUFCK0xDQUFBQUFBQUFBbzlqczBPZ2pBUWhGK2w2ZGtRa0FRU2JpcGUvUW5xdmNKcURLV3R1MFZDakQ2N0xjRm1UN1B6VFdiZWZLTTdJOVM0RXgzd3dpbFZnN0hzQkMycnRPenRReXUrNEpXKzJVRWcvQ25aWDlrZUcwQzJNc2I1RjBEeVpNR1RLUGJuTTRBdndEbEI5NldTM1VoUG1SdEpiVVJROXdnMElaRUNHL2lEUnV2NE5JMno4RHM3Ym03MWF5Y1plRUUwYUd5Y2YweUhyUDJxUEFsbXVaN3J0LzlzS2F6Z254OHFwQWVYOWdBQUFBPT0=",
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

  // Submit the form to create a new license
  const newLicense = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const date = new Date();
    const LiceRenewalDate = date.toISOString().slice(0, -5) + "" + "Z";
    // console.log(LiceRenewalDate);
    const adminTokken=localStorage.getItem("userToken")

    const raw = JSON.stringify({
      tokenData:adminTokken,
      License: {
        // LiceNo: "1",
        LiceDeviceID: license.LiceDeviceID,
        LiceCompanyID: license.LiceCompanyID,
        LiceCompanyName: license.LiceCompanyName,
        // dt: LiceRenewalDate, // Include current timestamp in ISO 8601 format
        Details: [
          {
            // LiceDtlID: "0",
            // LiceDtl_MainID: "1",
            LiceRenewalDate: LiceRenewalDate, // Ensure valid ISO 8601 format
            LiceExpiryDate: license.LiceExpiryDate, // Ensure valid ISO 8601 format
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

    fetch(`${base_url}/Admin_InsertLicense`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === true) {
          navigate("/license");
        }else if(result.error=== "Limit is over "){
          toast.error("License "+result.error, {
            autoClose: 1000,
          })
        }else{
          toast.error("Please Fill required fileds", {
            autoClose: 1000,
          })
        }
      })
      .catch((error) => {
        toast.error("Error creating license", {
          autoClose: 1000,
        })
        console.error("Error creating license", error)
        
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(license.LiceCompanyName==""){
      return toast.error("Select Company")
    }
    await newLicense();
   
  };

  return (
    <>
    
    <ToastContainer/>
    <div className="container mt-3">
      <h2 className="text-center">Create {heading}</h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div
            className="col-sm-4"
            style={{ paddingLeft: "10%", fontWeight: 500 }}
          >
            <label className="control-label">LiceNo</label>
          </div>
          <div className="col-sm-8">
            <TextField
              id="outlined-disabled"
              label=""
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              type="text"
              name="LiceNo"
              placeholder="Auto Genrated NO"
              disabled
              value={license.LiceNo}
              onChange={(e) =>
                setLicense({ ...license, LiceNo: e.target.value })
              }
            />
          </div>
        </div>

        {/* <div className="row mb-3">
          <div
            className="col-sm-4"
            style={{ paddingLeft: "10%", fontWeight: 500 }}
          >
            <label className="control-label">LiceDeviceID</label>
          </div>
          <div className="col-sm-8">
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              type="text"
              name="LiceDeviceID"
              value={license.LiceDeviceID}
              onChange={(e) =>
                setLicense({ ...license, LiceDeviceID: e.target.value })
              }
            />
          </div>
        </div> */}

        <div className="row mb-3">
          <div
            className="col-sm-4"
            style={{ paddingLeft: "10%", fontWeight: 500 }}
          >
            <label className="control-label">LiceCompanyName</label>
          </div>
          <div className="col-sm-8">
            {/* Type-based input dropdown */}
            <Autocomplete
              value={selectedValue}
              size="small"
              onChange={handleSelect}
              options={companies}
              getOptionLabel={(option) => option.CompName}
              renderInput={(params) => (
                <TextField {...params} label="Select Company" />
              )}
              disableClearable
              ListboxProps={{
                style: {
                  maxHeight: "200px",
                  overflowY: "auto",
                },
              }}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div
            className="col-sm-4"
            style={{ paddingLeft: "10%", fontWeight: 500 }}
          >
            <label className="control-label">Expiry Date</label>
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

      {/* Display error message if there's an error */}
      {errorMessage && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          {errorMessage}
        </div>
      )}
    </Box>
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
    </>
  );
};

export default NewLicenseForm;
