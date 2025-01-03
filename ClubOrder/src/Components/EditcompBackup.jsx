import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { base_url } from "../env";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  InputAdornment,
  IconButton,
  Snackbar,
  Tooltip,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import img from "../Images/Food.jpg";
import clublogo from "../Images/ClubLogo.png";
import { BiDownload } from "react-icons/bi";
import ImageUploadComponent from "./AddCompImage";

const EditCompany = ({ heading, btn }) => {
  const { state } = useLocation();
  const { compID } = useParams();
  const navigate = useNavigate();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [stateSearch, setStateSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [readOnly, setReadOnly] = useState(true);
  const [companyInitialState, setCompany] = useState(state);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

    const [showPasswordFTP, setShowPasswordFTP] = useState(false);
    const handleClickShowPasswordFTP = () => setShowPasswordFTP((show) => !show);
    
   const [compFTPDetails,setCompFTPDetails]=useState({
     compFTPaddress:"",
     compFTPport:"",
     compFTPusername:"",
     compFTPpassword:"",
   })
 
   const handleFTPchange=(e)=>{
       const {name,value}=e.target;
       setCompFTPDetails((prev)=>({
         ...prev,
         [name]:value
       }))
   }
  
  // Handle file input change (when user selects an image)


  const handleCopy = async () => {
    const copyText = document.getElementById("compToken");

    try {
      // Use Clipboard API to copy text
      await navigator.clipboard.writeText(copyText.value);
      setSnackbarOpen(true); // Show success message
    } catch (err) {
      console.error("Failed to copy text: ", err);
      alert("Failed to copy text");
    }
  };

  const getStates = (search = "") => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const adminTokken = localStorage.getItem("userToken");

    const raw = JSON.stringify({
      tokenData: adminTokken,
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
        setStates(
          result.data.filter((state) =>
            state.State_Name.toLowerCase().includes(search.toLowerCase())
          )
        );
      })
      .catch((error) => console.error(error));
  };

  const getCities = (stateID, search = "") => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const adminTokken = localStorage.getItem("userToken");
    const raw = JSON.stringify({
      tokenData: adminTokken,
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
        setCities(
          result.data.filter((city) =>
            city.City_Name.toLowerCase().includes(search.toLowerCase())
          )
        );
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getStates();
    getCities();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    let CompStateName = states?.filter((item) => {
      return item?.StateID == value;
    })[0]?.State_Name;

    if (name == "CompStateID") {
      setCompany((prevState) => ({
        ...prevState,
        ["CompStateName"]: CompStateName,
      }));
    }

    let CompCityName = cities?.filter((item) => {
      return item?.CityID == value;
    })[0]?.City_Name;

    if (name == "CompCityID") {
      setCompany((prevState) => ({
        ...prevState,
        ["CompCityName"]: CompCityName,
      }));
    }
  };

  const updateCompany = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const adminTokken = localStorage.getItem("userToken");

    const raw = JSON.stringify({
      tokenData: adminTokken,
      Company: {
        CompName: companyInitialState.CompName,
        CompAddress: companyInitialState.CompAddress,
        CompPincode: companyInitialState.CompPincode,
        CompStateID: companyInitialState.CompStateID,
        CompStateName: "",
        CompCityID: companyInitialState.CompCityID,
        CompCity: "",
        CompGSTNo: companyInitialState.CompGSTNo,
        CompNoOfDevices: companyInitialState.CompNoOfDevices,
        CompServerName: companyInitialState.CompServerName,
        CompServerPort: companyInitialState.CompServerPort,
        CompServerUserName: companyInitialState.CompServerUserName,
        CompServerPassword: companyInitialState.CompServerPassword,
        CompDBName: companyInitialState.CompDBName,
        CompToken: "",
        "Settings": {
           "Set_FTPAddress": compFTPDetails.compFTPaddress,
           "Set_FTPPort": compFTPDetails.compFTPport,
           "Set_FTPUserName": compFTPDetails.compFTPusername,
           "Set_FTPPassword": compFTPDetails.compFTPpassword,
           "Set_ProductsFolder": "Products",
           "Set_MemberFolder": "Members",
           "Set_LocationFolder": "Locations",
           "Set_CompanyFolder": "CompanyData",
           "Set_ProductDisplayMethod": 0,
           "Set_BillingMethod": 0,
           "Set_NotificationFolder": "Notifications",
           "Set_SchemeFolder": "Schemes",
            "Set_EventFolder": "Events"
           }   
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${base_url}/Admin_UpdateCompany?MainID=${compID}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === false) {
          toast.error("Error in updating Company", {
            autoClose: 3000,
          });
        } else {
          navigate("/companies");
        }
      })
      .catch((error) => {
        toast.error("Error while updating Company", {
          autoClose: 3000,
        });
        console.error(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCompany();
  };

  useEffect(() => {
    if (state) {
      setCompany(state);
    }
  }, [state]);
  return (
    <>
      <ToastContainer />
      <div className="container mt-3">
        <h2 className="text-center">{heading}</h2>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          {/* LiceNo / CompID */}
          <div className="form-group row mb-2">
            <div
              className="col-sm-4 "
              style={{ paddingLeft: "10%", fontWeight: 500 }}
            >
              <label className="control-label  ">
                {heading === "License" ? "LiceNo" : "CompID"}
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
                variant="outlined"
                sx={{ width: "100%" }}
                size="small"
                name="CompID"
                value={companyInitialState.CompID}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* LiceDeviceID / CompName */}
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
                name="CompName"
                value={companyInitialState.CompName}
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
                name="CompAddress"
                value={companyInitialState.CompAddress}
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
                name="CompPincode"
                value={companyInitialState.CompPincode}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* code new */}
          <div className="form-group row mb-2">
            <div
              className="col-sm-4"
              style={{ paddingLeft: "10%", fontWeight: 500 }}
            >
              <label className="control-label">CompState</label>
            </div>
            <div className="col-sm-8">
              {states.length > 0 && (
                <FormControl sx={{ width: "100%" }} size="small">
                  <InputLabel>State</InputLabel>
                  <Select
                    label={companyInitialState.CompStateName}
                    name="CompStateID"
                    value={companyInitialState.CompStateID}
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
            <div
              className="col-sm-4"
              style={{ paddingLeft: "10%", fontWeight: 500 }}
            >
              <label className="control-label">CompCity</label>
            </div>
            <div className="col-sm-8">
              {cities.length > 0 && (
                <FormControl sx={{ width: "100%" }} size="small">
                  <InputLabel>City</InputLabel>
                  <Select
                    label={companyInitialState.CompCityName}
                    name="CompCityID"
                    value={companyInitialState.CompCityID}
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
                name="CompGSTNo"
                value={companyInitialState.CompGSTNo}
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
                name="CompNoOfDevices"
                value={companyInitialState.CompNoOfDevices}
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
                name="CompServerName"
                value={companyInitialState.CompServerName}
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
                name="CompServerPort"
                value={companyInitialState.CompServerPort}
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
                name="CompServerUserName"
                value={companyInitialState.CompServerUserName}
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
              {/* <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              type="text"
              name="CompServerPassword"
              value={companyInitialState.CompServerPassword}
              onChange={handleChange}
            /> */}
              <FormControl
                size="small"
                sx={{ width: "100%" }}
                variant="outlined"
              >
                {/* <InputLabel htmlFor="outlined-adornment-password">Passwordsd</InputLabel> */}
                <OutlinedInput
                  id="outlined-adornment-password"
                  name="CompServerPassword"
                  type={showPassword ? "text" : "password"}
                  value={companyInitialState.CompServerPassword}
                  onChange={handleChange}
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
                        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  readOnly={!showPassword}
                />
              </FormControl>
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
                type="text"
                name="CompDBName"
                value={companyInitialState.CompDBName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* CompToken */}
          <div className="form-group row mb-2">
            <div
              className="col-sm-4"
              style={{ paddingLeft: "10%", fontWeight: 500 }}
            >
              <label className="control-label">CompToken</label>
            </div>
            <div className="col-sm-8">
              <div>
                <Tooltip title="Click to Copy" arrow placement="right">
                  <TextField
                    id="compToken"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    size="small"
                    type="text"
                    name="CompToken"
                    value={companyInitialState.CompToken} // Replace with your state value
                    onClick={handleCopy}
                    slotProps={{ readOnly: true }}
                  />
                </Tooltip>

                {/* Snackbar for copy confirmation */}
                <Snackbar
                  open={snackbarOpen}
                  autoHideDuration={2000}
                  onClose={() => setSnackbarOpen(false)}
                  message="Copied Company Token"
                />
              </div>
            </div>
          </div>
                  
            {/* FtP Details ***************************** FtP Details */}
                    <hr/>
                            {/* FTP Address */}
                    <div className="form-group row mb-2">
                      <div
                        className="col-sm-4"
                        style={{ paddingLeft: "10%", fontWeight: 500 }}
                      >
                        <label className="control-label">FTP Address</label>
                      </div>
                      <div className="col-sm-8">
                        <TextField
                          id="outlined-basic"
                          label=""
                          variant="outlined"
                          sx={{ width: "100%" }}
                          size="small"
                          name="compFTPaddress"
                          value={compFTPDetails.compFTPaddress}
                          onChange={handleFTPchange}
                        />
                      </div>
                    </div>
                            {/* FTP PORT */}
                            <div className="form-group row mb-2">
                      <div
                        className="col-sm-4"
                        style={{ paddingLeft: "10%", fontWeight: 500 }}
                      >
                        <label className="control-label">FTP PORT </label>
                      </div>
                      <div className="col-sm-8">
                        <TextField
                          id="outlined-basic"
                          label=""
                          variant="outlined"
                          sx={{ width: "100%" }}
                          size="small"
                          name="compFTPport"
                          value={compFTPDetails.compFTPport}
                          onChange={handleFTPchange}
                        />
                      </div>
                    </div>
                            {/* FTP Useranme */}
                            <div className="form-group row mb-2">
                      <div
                        className="col-sm-4"
                        style={{ paddingLeft: "10%", fontWeight: 500 }}
                      >
                        <label className="control-label">FTP Useranme</label>
                      </div>
                      <div className="col-sm-8">
                        <TextField
                          id="outlined-basic"
                          label=""
                          variant="outlined"
                          sx={{ width: "100%" }}
                          size="small"
                          name="Set_CompanyFolder"
                          value={companyInitialState?.Settings?.Set_CompanyFolder}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                            {/* FTP Password */}
                            <div className="form-group row mb-2">
                      <div
                        className="col-sm-4"
                        style={{ paddingLeft: "10%", fontWeight: 500 }}
                      >
                        <label className="control-label">FTP Password </label>
                      </div>
                      <div className="col-sm-8">
                      <FormControl
                          sx={{ width: "100%" }}
                          size="small"
                          variant="outlined"
                        >
                          <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPasswordFTP ? "text" : "password"}
                            name="compFTPpassword"
                            value={compFTPDetails.compFTPpassword}
                            onChange={handleFTPchange}
                            autoComplete="off"
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label={
                                    showPassword
                                      ? "hide the password"
                                      : "display the password"
                                  }
                                  onClick={handleClickShowPasswordFTP}
                                  edge="end"
                                >
                                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </div>
                    </div>
          

          {/* Photo */}
          {/* CompServerUserName */}
          <div className="form-group row mb-2">
          <ImageUploadComponent imgSrc={companyInitialState?.CompImages[0]?.ImageName} compID={companyInitialState.CompID} compToken={companyInitialState.CompToken} />
          </div>

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

export default EditCompany;
