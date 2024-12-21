import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { base_url } from "../env";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const NewResrevTable = ({ heading, btn }) => {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [compNames, setcompNames] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [Client, setClient] = useState({
    ClientName: "",
    ClientMobile: "",
    ClientEmail: "",
    ClientPassword: "",
    ClientCompanyName: "",
  });

  // Handle input change for the dropdown
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle item selection from the dropdown
  const handleSelectItem = (item) => {
    setInputValue(item.compName); // Set input value to selected item name
    setClient((prevLicense) => ({
      ...prevLicense,
    }));
  };

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
        setCompanies(result.data);
        // console.log(result.data);
        let allcmpArray = result.data;
        await setcompNames(allcmpArray.map((item) => item.CompName));
        // console.log(compNames);
        setFilteredOptions(compNames);
        // Assuming result.data contains the companies list
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  // Submit the form to create a new license
  const addclient = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 19);
    const raw = JSON.stringify({
      tokenData:
        "OWdBQUFCK0xDQUFBQUFBQUFBbzlqczBPZ2pBUWhGK2w2ZGtRa0FRU2JpcGUvUW5xdmNKcURLV3R1MFZDakQ2N0xjRm1UN1B6VFdiZWZLTTdJOVM0RXgzd3dpbFZnN0hzQkMycnRPenRReXUrNEpXKzJVRWcvQ25aWDlrZUcwQzJNc2I1RjBEeVpNR1RLUGJuTTRBdndEbEI5NldTM1VoUG1SdEpiVVJROXdnMElaRUNHL2lEUnV2NE5JMno4RHM3Ym03MWF5Y1plRUUwYUd5Y2YweUhyUDJxUEFsbXVaN3J0LzlzS2F6Z254OHFwQWVYOWdBQUFBPT0=",
      Login: {
        LoginUserName: Client.ClientName,
        LoginPassword: Client.ClientPassword,
        LoginMobile: Client.ClientMobile,
        LoginEmailID: Client.ClientEmail,
        LoginIsSuperAdmin: true,
        LoginToken: "",
        IsKDS: true,
        IsWaiter: false,
        CompName: Client.ClientCompanyName,
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

  const handleOptionSelect = (option) => {
    // setInputValue(option);  // Set input to selected option
    setIsOpen(false); // Close dropdown
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(Client);
    await addclient();
  };

  const [age, setAge] = useState("");

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const filtered = compNames.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setClient((prevState) => ({
      ...prevState, // Retain previous state values
      [name]: value, // Update the specific key based on input name
    }));
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">New Table Reservation</h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label">User Name</label>
          </div>
          <div className="col-sm-8">
            <TextField
              variant="outlined"
              size="small"
              className="w-100"
              type="text"
              name="ClientName"
              value={Client.ClientName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label">Mobile</label>
          </div>
          <div className="col-sm-8">
            <TextField
              variant="outlined"
              size="small"
              className="w-100"
              type="Number"
              name="ClientMobile"
              value={Client.ClientMobile}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label">Email</label>
          </div>
          <div className="col-sm-8">
            <TextField
              variant="outlined"
              size="small"
              className="w-100"
              type="email"
              name="ClientEmail"
              value={Client.ClientEmail}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label">Company Name</label>
          </div>
          <div className="col-sm-8">
            {/* <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="compName"
                name="ClientCompanyName"
                value={Client.ClientCompanyName}
                onChange={handleChange}
                label={"age"}
                size="small"
              >
                {isOpen && (
                  <>
                    {filteredOptions.length > 0 ? (
                      filteredOptions.map((option, index) => (
                        <MenuItem
                          key={index}
                          value={option}
                        >
                          {option}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem className="list-group-item" value={"nO rESULT"}>No results found</MenuItem>
                    )}
                  </>
                )}
              </Select>
            </FormControl> */}
            <TextField
              className="form-control "
              type="text"
              id="compName"
              name="ClientCompanyName"
              value={Client.ClientCompanyName}
              onChange={handleChange}
              onFocus={(e) => {
                handleChange(e);
                toggleDropdown();
              }}
              onClick={toggleDropdown}
              size="small"
              variant="outlined"
            />
            {isOpen && (
              <ul
                className="list-group position-absolute w-25"
                style={{ maxHeight: "200px", overflowY: "auto", zIndex: "10" }}
              >
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option, index) => (
                    <li
                      key={index}
                      className="list-group-item list-group-item-action "
                      onClick={() => {
                        setClient((prevState) => {
                          return {
                            ...prevState, // Retain previous state values
                            ClientCompanyName: option, // Update the specific key based on the selected company
                          };
                        });
                        setIsOpen(false); // Close the dropdown after selection
                      }}
                    >
                      {option}
                    </li>
                  ))
                ) : (
                  <li className="list-group-item">No results found</li>
                )}
              </ul>
            )}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label">Password</label>
          </div>
          <div className="col-sm-8">
            <TextField
              type="password"
              className="form-control"
              name="ClientPassword"
              value={Client.ClientPassword}
              onChange={handleChange}
              size="small"
              variant="outlined"
            />
          </div>
        </div>

        <div className="text-center mb-3">
          <button className="btn btn-primary col-3" id="btn-submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewResrevTable;
