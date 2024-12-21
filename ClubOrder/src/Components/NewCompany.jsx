import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { base_url } from "../env";
import { TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";

const NewCompany = ({ heading, btn }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [companyInitialState, setCompany] = useState({
    compName: "",
    compAddress: "",
    compPincode: "",
    compStateID: "",
    compCityID: "",
    compGSTNo: "",
    compNoOfDevices: "",
    compServerName: "",
    compServerPort: "",
    compServerUserName: "",
    compServerPassword: "",
    compDBName: "",
  });
  const [stateSearch, setStateSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getStates = (search = "") => {
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

    fetch(`${base_url}/Admin_StateList`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setStates(result.data.filter(state => state.State_Name.toLowerCase().includes(search.toLowerCase())));
      })
      .catch((error) => console.error(error));
  };

  const getCities = (stateID, search = "") => {
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

    fetch(`${base_url}/Admin_CityList`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCities(result.data.filter(city => city.City_Name.toLowerCase().includes(search.toLowerCase())));
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getStates();
    getCities()
  }, []);

  const newCompany = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const adminTokken=localStorage.getItem("userToken")
    const raw = JSON.stringify({
      tokenData:adminTokken,
      Company: {
        CompName: companyInitialState.compName,
        CompAddress: companyInitialState.compAddress,
        CompPincode: companyInitialState.compPincode,
        CompStateID: companyInitialState.compStateID,
        CompStateName: "",
        CompCityID: companyInitialState.compCityID,
        CompCityName: "",
        CompGSTNo: companyInitialState.compGSTNo,
        CompNoOfDevices: companyInitialState.compNoOfDevices,
        CompServerName: companyInitialState.compServerName,
        CompServerPort: companyInitialState.compServerPort,
        CompServerUserName: companyInitialState.compServerUserName,
        CompServerPassword: companyInitialState.compServerPassword,
        CompDBName: companyInitialState.compDBName,
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${base_url}/Admin_InsertCompany`, requestOptions)
      .then((response) => response.json())
      .then((result) => {

        if (result.status===false) {
          toast.error("Error in Creating Company",{
            autoClose:3000
          })
        }else{

          navigate("/companies");
          console.log(result);
        }
      })
      .catch((error) => {
        toast.error("Error in Creating Company",{
          autoClose:3000
        })
        console.error(error)});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(companyInitialState);
    
    await newCompany();
  };

  useEffect(() => {
    if (state) {
      setCompany({
        compName: state.compName,
        compAddress: state.compAddress,
        compPincode: state.compPincode,
        compStateID: state.compStateID,
        compCityID: state.compCityID,
        compGSTNo: state.compGSTNo,
        compNoOfDevices: state.compNoOfDevices,
        compServerName: state.compServerName,
        compServerPort: state.compServerPort,
        compServerUserName: state.compServerUserName,
        compServerPassword: state.compServerPassword,
        compDBName: state.compDBName,
      });
    }
  }, [state]);

  return (
    <>
    <ToastContainer/>
    <div className="container mt-3">
      <h2 className="text-center">{heading}</h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        {/* CompState */}
       

        {/* Other fields */}
        <div className="form-group row mb-2">
          <div
            className="col-sm-4"
            style={{ paddingLeft: "10%", fontWeight: 500 }}
          >
            <label className="control-label">
              {heading === "License" ? "LiceDeviceID" : "CompName"}
            </label>
          </div>
          <div className="col-sm-8">
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              name="compName"
              value={companyInitialState.compName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* LiceCompanyName / CompAddress */}
        <div className="form-group row mb-2">
          <div
            className="col-sm-4"
            style={{ paddingLeft: "10%", fontWeight: 500 }}
          >
            <label className="control-label">
              {heading === "License" ? "LiceCompanyName" : "CompAddress"}
            </label>
          </div>
          <div className="col-sm-8">
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              name="compAddress"
              value={companyInitialState.compAddress}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* CompPincode */}
        <div className="form-group row mb-2">
          <div
            className="col-sm-4"
            style={{ paddingLeft: "10%", fontWeight: 500 }}
          >
            <label className="control-label">CompPincode</label>
          </div>
          <div className="col-sm-8">
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              name="compPincode"
              value={companyInitialState.compPincode}
              onChange={handleChange}
            />
          </div>
        </div>


        <div className="form-group row mb-2">
          <div className="col-sm-4" style={{ paddingLeft: "10%", fontWeight: 500 }}>
            <label className="control-label">CompState</label>
          </div>
          <div className="col-sm-8">
          
            {states.length > 0 && (
              <FormControl sx={{ width: "100%" }} size="small">
                <InputLabel>State</InputLabel>
                <Select
                  label="State"
                  name="compStateID"
                  value={companyInitialState.compStateID}
                  onChange={handleChange}
                >
                  {states.map((state) => (
                    <MenuItem key={state.StateID} value={state.StateID}>
                      {state.State_Name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </div>
        </div>

        {/* CompCity */}
        <div className="form-group row mb-2">
          <div className="col-sm-4" style={{ paddingLeft: "10%", fontWeight: 500 }}>
            <label className="control-label">CompCity</label>
          </div>
          <div className="col-sm-8">
         
            {cities.length > 0 && (
              <FormControl sx={{ width: "100%" }} size="small">
                <InputLabel>City</InputLabel>
                <Select
                  label="City"
                  name="compCityID"
                  value={companyInitialState.compCityID}
                  onChange={handleChange}
                >
                  {cities.map((city) => (
                    <MenuItem key={city.CityID} value={city.CityID}>
                      {city.City_Name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </div>
        </div>
      

        {/* CompGSTNo */}
        <div className="form-group row mb-2">
          <div
            className="col-sm-4"
            style={{ paddingLeft: "10%", fontWeight: 500 }}
          >
            <label className="control-label">CompGSTNo</label>
          </div>
          <div className="col-sm-8">
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              name="compGSTNo"
              value={companyInitialState.compGSTNo}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* CompNoOfDevices */}
        <div className="form-group row mb-2">
          <div
            className="col-sm-4"
            style={{ paddingLeft: "10%", fontWeight: 500 }}
          >
            <label className="control-label">CompNoOfDevices</label>
          </div>
          <div className="col-sm-8">
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              name="compNoOfDevices"
              value={companyInitialState.compNoOfDevices}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* CompServerName */}
        <div className="form-group row mb-2">
          <div
            className="col-sm-4"
            style={{ paddingLeft: "10%", fontWeight: 500 }}
          >
            <label className="control-label">CompServerName</label>
          </div>
          <div className="col-sm-8">
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              name="compServerName"
              value={companyInitialState.compServerName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* CompServerPort */}
        <div className="form-group row mb-2">
          <div
            className="col-sm-4"
            style={{ paddingLeft: "10%", fontWeight: 500 }}
          >
            <label className="control-label">CompServerPort</label>
          </div>
          <div className="col-sm-8">
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              name="compServerPort"
              value={companyInitialState.compServerPort}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* CompServerUserName */}
        <div className="form-group row mb-2">
          <div
            className="col-sm-4"
            style={{ paddingLeft: "10%", fontWeight: 500 }}
          >
            <label className="control-label">CompServerUserName</label>
          </div>
          <div className="col-sm-8">
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              name="compServerUserName"
              value={companyInitialState.compServerUserName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* CompServerPassword */}
        <div className="form-group row mb-2">
          <div
            className="col-sm-4"
            style={{ paddingLeft: "10%", fontWeight: 500 }}
          >
            <label className="control-label">CompServerPassword</label>
          </div>
          <div className="col-sm-8">
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              name="compServerPassword"
              value={companyInitialState.compServerPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* CompDBName */}
        <div className="form-group row mb-2">
          <div
            className="col-sm-4"
            style={{ paddingLeft: "10%", fontWeight: 500 }}
          >
            <label className="control-label">CompDBName</label>
          </div>
          <div className="col-sm-8">
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              name="compDBName"
              value={companyInitialState.compDBName}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Add your other fields like compName, compAddress, etc. here */}

        {/* Submit Button */}
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

export default NewCompany;

