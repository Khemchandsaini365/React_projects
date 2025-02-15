import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { base_url } from "../env";
import {  ShimmerTitle } from "react-shimmer-effects";
import {
  Autocomplete,
  CircularProgress,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { token } from "../Secure";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const EditClient = ({ heading, btn }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  const [compNames, setcompNames] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state to manage API fetch status
  const location = useLocation();
  const { compName } = location.state || {}; // Get company name from location state
  const [selectedValue, setSelectedValue] = useState(""); // Set initial value to null
  const [showPassword, setShowPassword] = useState(false);
  const [disableinputs, setDisableinputs] = useState(true);
  const [IsDeActive, setIsDeActive] = useState(); // Default state is checked

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [Client, setClient] = useState({
    ClientName: "",
    ClientMobile: "",
    ClientEmail: "",
    ClientPassword: "",
    ClientCompanyName: "",
    ClientCompID: "",
    IsDeActive:""
  });

  const handleCheck = (event) => {
    setIsDeActive(event.target.checked); // Update the state when switch is toggled
    // setDisableinputs(!disableinputs);

    setClient((prevData) => ({
      ...prevData,
      ["IsDeActive"]: event.target.checked, // Update ClientCompanyName in state
    }));
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const filteredData = companies.filter((item) =>
    item.CompName.toLowerCase().includes(inputValue.toLowerCase())
  );

  // Update the license object on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    const filtered = compNames.filter((option) =>
      option?.CompName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    if (Client.IsDeActive === false) {
      setClient((prevData) => ({
        ...prevData,
        ["IsDeActive"]: "", // Update ClientCompanyName in state
      }));
    }
    setClient((prevData) => ({
      ...prevData,
      [name]: value, // Update ClientCompanyName in state
    }));
  };

  const getcompName = (id) => {
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

    fetch(`${base_url}/Admin_CompanyByID?MainID=${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        return result?.data?.CompName;
      })
      .catch((error) => console.error(error));
  };

  const editClient = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const token = localStorage.getItem("userToken");
    const tokken = token;
    const raw = JSON.stringify({
      tokenData: tokken,
      Login: {
        LoginUserName: Client.ClientName,
        LoginPassword: Client.ClientPassword,
        LoginEmailID: Client.ClientEmail,
        LoginMobile: Client.ClientMobile,
        CompID: Client.ClientCompID,
        IsDeActive: IsDeActive,
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${base_url}/Admin_UpdateLogin?MainID=${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status) {
          navigate("/allclients");
        } else {
          toast.error(result.error);
        }
      })
      .catch((error) => console.error(error));
  };

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
      setCompanies(result.data);
      setcompNames(result.data);
      setFilteredOptions(result.data);

      if (compName) {
        const initialCompany = result.data.find(
          (company) => company.CompName === compName
        );
        setSelectedValue(initialCompany);
      }

      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error("Error fetching companies:", error);
      setLoading(false);
    }
  };

  const getClientbyId = () => {
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

    fetch(`${base_url}/Admin_LoginByID?MainID=${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const clientData = result.data;
        setClient({
          ClientName: clientData.LoginUserName,
          ClientMobile: clientData.LoginMobile,
          ClientEmail: clientData.LoginEmailID,
          ClientPassword: clientData.LoginPassword,
          ClientCompID: clientData.CompID,
          
          // Or set the correct company name here
        });
        setIsDeActive(clientData.IsDeActive)

        setLoading(false); // Set loading to false when client data is fetched
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    setSelectedValue(compName);
    fetchCompanies();
    getClientbyId();
  }, []);

  const handleSelect = (event, value) => {
    setSelectedValue(value);
    setClient((prevState) => ({
      ...prevState,
      ClientCompID: value ? value.CompID : "",

      // Update ClientCompanyName based on selected value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Client.ClientName) {
      toast.error("Username is required");
      return;
    }
    if (!Client.ClientMobile) {
      toast.error("Mobile is required");
      return;
    }
    if (Client.ClientMobile.length !== 10) {
      toast.error("Mobile number must be 10 digits");
      return;
    }

    if (!Client.ClientPassword) {
      toast.error("Password is required");
      return;
    }
    if (!Client.ClientPassword) {
      toast.error("CompanyName is required");
      return;
    }
    await editClient();
  };

  if (loading) {
    return (
      <div className="container mt-3">
        <h2 className="text-center">Edit Client</h2>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "70vh" }}
        >
          <CircularProgress />
        </div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      <div className="container mt-3">
        <h2 className="text-center">Edit Client</h2>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-sm-4">
              <label className="control-label h6"> User Name</label>
            </div>
            <div className="col-sm-8">
              {loading ? (
                <ShimmerTitle line={1} />
              ) : (
                <TextField
                  type="text"
                  className="w-100"
                  variant="outlined"
                  name="ClientName"
                  value={Client.ClientName} // Binding with state
                  onChange={handleChange} // On change, it updates the license state
                  size="small"
                  disabled={IsDeActive}
                />
              )}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-4">
              <label className="control-label h6">Mobile</label>
            </div>
            <div className="col-sm-8">
              {loading ? (
                <ShimmerTitle line={1} />
              ) : (
                <TextField
                  type="number"
                  className="w-100"
                  size="small"
                  variant="outlined"
                  name="ClientMobile"
                  value={Client.ClientMobile} // Binding with state
                  onChange={handleChange}     // On change, it updates the license state
                  disabled={IsDeActive}
                />
              )}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-4">
              <label className="control-label h6">Email</label>
            </div>
            <div className="col-sm-8">
              {loading ? (
                <ShimmerTitle line={1} />
              ) : (
                <TextField
                  type="email"
                  className="w-100"
                  size="small"
                  variant="outlined"
                  name="ClientEmail"
                  value={Client.ClientEmail} // Binding with state
                  onChange={handleChange} // On change, it updates the license state
                  disabled={IsDeActive}
                />
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-4">
              <label className="control-label h6">Company Name</label>
            </div>
            <div className="col-sm-8">
              {loading ? (
                <ShimmerTitle line={1} />
              ) : (
                <Autocomplete
                  readOnly
                  value={selectedValue}
                  size="small"
                  onChange={handleSelect}
                  options={companies}
                  getOptionLabel={(option) => option.CompName}
                  renderInput={(params) => <TextField {...params} label="" />}
                  disableClearable
                  ListboxProps={{
                    style: {
                      maxHeight: "200px",
                      overflowY: "auto",
                    },
                  }}
                  disabled={IsDeActive}
                />
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-4">
              <label className="control-label h6 ">Password</label>
            </div>
            <div className="col-sm-8">
              {loading ? (
                <ShimmerTitle line={1} />
              ) : (
                // <TextField
                //   type="password"
                //   className="w-100"
                //   size="small"
                //   name="ClientPassword"
                //   value={Client.ClientPassword} // Binding with state
                //   onChange={handleChange} // On change, it updates the license state
                // />
                <FormControl
                  size="small"
                  sx={{ width: "100%" }}
                  variant="outlined"
                >
                  <OutlinedInput
                    id="outlined-adornment-password"
                    name="ClientPassword"
                    type={showPassword ? "text" : "password"}
                    value={Client.ClientPassword}
                    onChange={handleChange}
                    disabled={IsDeActive}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <MdVisibilityOff />
                          ) : (
                            <MdVisibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    readOnly={!showPassword}
                  />
                </FormControl>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-4">
              <label className="control-label h6"></label>
            </div>
            <div className="col-sm-8">
              {loading ? (
                <ShimmerTitle line={1} />
              ) : (
                <FormControlLabel
                  control={
                    <Switch checked={IsDeActive} onChange={handleCheck} />
                  }
                  label={
                    <Typography sx={{ color: "red", fontWeight: "600" }}>
                      De-Active
                    </Typography>
                  } // Change label based on the state **** name="IsDeActive" value={Client.IsDeActive}
                />
              )}
            </div>
          </div>

          <div className="text-center mb-3">
            <button
              className="btn btn-primary waves-effect waves-light col-lg-2"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditClient;
