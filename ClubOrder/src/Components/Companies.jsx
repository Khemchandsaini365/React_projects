import React, { useState, useEffect } from "react";
import clublogo from "../Images/ClubLogo.png";
import "./companies.css";
import { BiEdit } from "react-icons/bi";
import SubHeader from "./SubHeader";
import { useNavigate } from "react-router-dom";
import { base_url } from "../env";
import { Button, CircularProgress } from "@mui/material";
import { getTokenFromLocalStorage } from "../Secure";
import BackButton from "./BackButton";
import { toast, ToastContainer } from "react-toastify";

const Companies = () => {
  // const token = getTokenFromLocalStorage();
  const [loader, setloader] = useState(true);
  const [companies, setcompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const navigate = useNavigate();

  
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
        if (result.status === false) {
          toast.error("Failed to fetch companies. Please try again.", {
            autoClose: 3000, // Adjust autoClose duration as needed
          });
        } else {
          setcompanies(result.data);
          setFilteredCompanies(result.data); // Initially set all companies to the filtered list
        }
        setloader(false);
      } catch (error) {
        setloader(false);
        console.error("Error fetching companies:", error);
      }
    };
    // CheckUpdates();
    fetchCompanies();

  }, []); // Empty dependency array means this runs only once when the component mounts

  const handleClick = (compID) => {
    navigate(`/companydasboard/${compID}`, {
      state: compID,
    });
  };

  const editCompany = (companyID, companyDetails) => {
    navigate(`/editcompany/${companyID}`, {
      state: companyDetails,
    });
  };

  // Handle search input changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update the search term
  };

  const handleEdit = () => {
    navigate("/newcompany");
  };

  // Filter companies based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCompanies(companies); // If search term is empty, show all companies
    } else {
      const filtered = companies.filter((company) =>
        company.CompName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCompanies(filtered);
    }
  }, [searchTerm, companies]);  // Re-run filtering when searchTerm or companies change

  return (
    <>
      <ToastContainer />
      {/* <SubHeader Name={"Companies"} newcompany={"newcompany"} /> */}
      <div className="container-fluid p-0 bg-light mt-2 d-flex justify-content-between align-items-center">
        <div className="heading h4 d-flex justify-content-between align-items-center">
          <div className="d-inline p-0 mx-2">
            <BackButton />
          </div>
          Companies
        </div>
        <div className="col-4 ">
          <form
            className=" border border-dark rounded"
            id="search"
            role="search"
          >
            <input
              className="form-control me-2 form-control-sm"
              type="search"
              placeholder="Search"
              aria-label="Search"
              autoFocus="on"
              value={searchTerm} // Controlled input with searchTerm
              onChange={handleSearch} // Update state on each keystroke
            />
          </form>
        </div>
        <div className="heading">
        <Button
                color="primary"
                onClick={handleEdit}
                variant="contained"
                size="small"
              >
                ADD
                </Button>
        </div>
      </div>

      {loader ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "70vh" }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((company, index) => (
                <div
                  key={index}
                  className=" d-flex justify-content-center flex-column gap-1 border border-dark rounded align-items-center text-center box m-2"
                  style={{
                    width: "300px",
                    height: "250px",
                    overflow: "hidden",
                    boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
                  }}
                >
                  <div style={{ maxWidth: "150px",  width:"100%", height:"100%", maxHeight:"62%"}}  className="img-container m-2 border border-dark d-flex  justify-content-center align-items-center">
                  <img
                    src={company?.CompImages[0]?.ImageName  || clublogo}
                    style={{width:"100%", height:"auto", maxHeight:"100%", }}
                    alt="Club Logo"
                  />
                  </div>
                  <div
                    className="icon"
                    style={{ fontSize: "18px" }}
                    onClick={() => editCompany(company.CompID, company)}
                  >
                    <BiEdit />
                  </div>
                  <div className="card-body ">
                    <h5 className="card-title">{company.CompName}</h5>
                    {/* <p className="card-text">{company.CompAddress}</p> */}
                    <button
                      onClick={() => handleClick(company.CompID)}
                      className="btn btn-primary rounded-pill mt-2"
                    >
                      Click Here
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="h2">No companies found.</p> // Message if no companies are found
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Companies;
