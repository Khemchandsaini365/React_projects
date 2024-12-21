import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { base_url } from "../env";
import {
  Autocomplete,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const AddNewClient = () => {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [compNames, setcompNames] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  let loginIsSuperAdmin = false;
  let isKDS = false;
  let isWaiter = false;

  if (selectedRole === "SuperAdmin") {
    loginIsSuperAdmin = true;
  } else if (selectedRole === "Kds") {
    isKDS = true;
  } else if (selectedRole === "Waiter") {
    isWaiter = true;
  }
  // Handle radio button change
  const handleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  const [Client, setClient] = useState({
    ClientName: "",
    ClientMobile: "",
    ClientEmail: "",
    ClientPassword: "",
    ClientCompanyName: "", // Default to empty string
    ClientCompanyID:""
  });

  // Handle input change for the dropdown
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addclient = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 19);
    const adminTokken=localStorage.getItem("userToken")

    const raw = JSON.stringify({
      tokenData:adminTokken,
      Login: {
        LoginUserName: Client.ClientName,
        LoginPassword: Client.ClientPassword,
        LoginMobile: Client.ClientMobile,
        LoginEmailID: Client.ClientEmail,
        LoginIsSuperAdmin: loginIsSuperAdmin,
        LoginToken: "",
        IsKDS: isKDS,
        IsWaiter: isWaiter,
        CompName: Client.ClientCompanyName,
        CompID:Client.ClientCompanyID,
        LoginDate: formattedDate,
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${base_url}/Admin_InsertLogin`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        // console.log(result);
        setCompanies((prevState) => [...prevState, Client]);
        navigate("/allclients");
      })
      .catch((error) => console.error(error));
  };

  // Fetch companies from the API
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
        setCompanies(result.data);
        let allcmpArray = result.data;
        setcompNames(allcmpArray.map((item) => item.CompName)); // Populate company names
        setFilteredOptions(allcmpArray.map((item) => item.CompName)); // Set initial filtered options
      } catch (error) {
        console.error("Error fetching companies:", error);
      } finally {
        setLoading(false); // Set loading to false after data fetch completes
      }
    };

    fetchCompanies();
  }, []);

  // Handle the company name input change
  const handleChangeOFCompName = (e) => {
    const { name, value } = e.target;
    const filtered = compNames.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);

    setClient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle the company name selection from the dropdown list
  const handleSelectCompany = (companyName) => {
    setClient((prevState) => ({
      ...prevState,
      ClientCompanyName: companyName, // Update the company name state
    }));
    setIsOpen(false); // Close the dropdown
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(Client, {
    //   SuperAdmins: selectedRole === "SuperAdmin",
    //   Kds: selectedRole === "Kds",
    //   Waitwer: selectedRole === "Waiter",
    // });

    await addclient();
  };

  // Autocomplete selection handler
  const [selectedValue, setSelectedValue] = useState(null); // Set initial value to null
  const handleSelect = (event, value) => {
    setSelectedValue(value);
    setClient((prevState) => ({
      ...prevState,
      ClientCompanyName: value ? value.CompName : "", // Update ClientCompanyName based on selected value
      ClientCompanyID: value ? value.CompID : "", // Update ClientCompanyName based on selected value
    }));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add Client</h2>
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "70vh" }}
        >
          <CircularProgress />
        </div> // Display a loading message or spinner
      ) : (
        <form className="form-horizontal" onSubmit={handleSubmit}>
          {/* Radio options */}
          <div className="row mb-3">
            <div className="col-sm-4">
              <label className="control-label h6">Role</label>
            </div>
            <div className="col-sm-8">
              <FormControl component="fieldset">
                <RadioGroup value={selectedRole} onChange={handleChange} row>
                  <FormControlLabel
                    value="SuperAdmin"
                    control={<Radio />}
                    label="SuperAdmin"
                  />
                  <FormControlLabel
                    value="Kds"
                    control={<Radio />}
                    label="KDS"
                  />
                  <FormControlLabel
                    value="Waiter"
                    control={<Radio />}
                    label="Waiter"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          {/* User Name */}
          <div className="row mb-3">
            <div className="col-sm-4">
              <label className="control-label h6">User Name</label>
            </div>
            <div className="col-sm-8">
              <TextField
                variant="outlined"
                size="small"
                className="w-100"
                type="text"
                name="ClientName"
                value={Client.ClientName}
                onChange={handleChangeOFCompName}
              />
            </div>
          </div>

          {/* Mobile */}
          <div className="row mb-3">
            <div className="col-sm-4">
              <label className="control-label h6">Mobile</label>
            </div>
            <div className="col-sm-8">
              <TextField
                variant="outlined"
                size="small"
                className="w-100"
                type="Number"
                name="ClientMobile"
                value={Client.ClientMobile}
                onChange={handleChangeOFCompName}
              />
            </div>
          </div>

          {/* Email */}
          <div className="row mb-3">
            <div className="col-sm-4">
              <label className="control-label h6">Email</label>
            </div>
            <div className="col-sm-8">
              <TextField
                variant="outlined"
                size="small"
                className="w-100"
                type="email"
                name="ClientEmail"
                value={Client.ClientEmail}
                onChange={handleChangeOFCompName}
              />
            </div>
          </div>

          {/* Company Name */}
          <div className="row mb-3">
            <div className="col-sm-4">
              <label className="control-label h6">Company Name</label>
            </div>
            <div className="col-sm-8">
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
                // Limit the visible items and enable scrolling in the dropdown
                ListboxProps={{
                  style: {
                    maxHeight: "200px", // Limit the dropdown height to 200px
                    overflowY: "auto", // Enable vertical scrolling
                  },
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div className="row mb-3">
            <div className="col-sm-4">
              <label className="control-label h6">Password</label>
            </div>
            <div className="col-sm-8">
              <TextField
                type="password"
                className="form-control"
                name="ClientPassword"
                value={Client.ClientPassword}
                onChange={handleChangeOFCompName}
                size="small"
                variant="outlined"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mb-3">
            <button className="btn btn-primary col-3" id="btn-submit">
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddNewClient;
