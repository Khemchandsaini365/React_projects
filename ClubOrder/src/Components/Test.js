import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { base_url } from "../env";

const AddNewClient = ({ heading, btn }) => {
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
    item.compName.toLowerCase().includes(inputValue.toLowerCase())
  );

  const [compNames, setcompNames] = useState([]);

  const SearchableDropdown = ({ options, placeholder }) => {
    // State to store the filtered list of options
    const [filteredOptions, setFilteredOptions] = useState(options);


    // State to control the input field's value
    const [inputValue, setInputValue] = useState("");
    // State to track whether the dropdown is open
    const [isOpen, setIsOpen] = useState(false);

    // Function to handle input changes and filter options
    const handleInputChange = (e) => {
      const value = e.target.value;
      setInputValue(value);

      // Filter the options based on input value
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
    };

    // Function to handle option selection
    const handleOptionSelect = (option) => {
      setInputValue(option); // Set input to selected option
      setIsOpen(false); // Close dropdown
    };

    // Function to toggle the dropdown
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="position-relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onClick={toggleDropdown}
          placeholder={placeholder}
          className="form-control"
        />
        {/* <input
              type="email"
              className="form-control "
              name="ClientCompanyName"
              value={Client.ClientCompanyName}
              onChange={handleChange}
            /> */}
        {isOpen && (
          <ul
            className="list-group position-absolute w-100"
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  className="list-group-item list-group-item-action"
                  onClick={() => handleOptionSelect(option)}
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
    );
  };

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
        setcompNames(allcmpArray.map((item) => item.compName));
        // console.log(compNames);

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
    const formateddate = date.toISOString().slice(0, 19);
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
        LoginDate: formateddate,
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
        // console.log(result)
      })
      .catch((error) => {
        // console.error(error)
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(Client);
    // addclient();
    // navigate('/allclients');
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prevState) => ({
      ...prevState, // Retain previous state values
      [name]: value, // Update the specific key based on input name
    }));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add Client</h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label">User Name</label>
          </div>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
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
            <input
              type="Number"
              className="form-control"
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
            <input
              type="email"
              className="form-control"
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
            <input
              type="email"
              id="compName"
              className="form-control "
              name="ClientCompanyName"
              value={Client.ClientCompanyName}
              onChange={handleChange}
            />
            <SearchableDropdown
              options={compNames}
              placeholder="Search company..."
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label">Password</label>
          </div>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control"
              name="ClientPassword"
              value={Client.ClientPassword}
              onChange={handleChange}
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

export default AddNewClient;
