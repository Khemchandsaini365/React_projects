import React, { useEffect, useState } from "react";
import Dashboard, { ReUsableDashboard } from "./Dashboard";
import SubHeader from "./SubHeader";
import { base_url } from "../env";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ClubLocations from "./ClubLocations";
import BackButton from "./BackButton";

const CompanyDashboard = () => {
  const { companyId } = useParams();
  const [company, setComapnydata] = useState();
  const [companyToken, setComapnyToken] = useState();
  const navigate = useNavigate();
  let companyIdvalue = companyId;

  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const fetchCompany = async () => {
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

      fetch(`${base_url}/Admin_CompanyByID?MainID=${companyId}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setComapnydata(result.data);
          localStorage.setItem("compName", result.data.CompName);
          // console.log(result);
        })
        .catch((error) => console.error(error));
    };

    const getComapanyToken = () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        tokenData:
          "OWdBQUFCK0xDQUFBQUFBQUJBQTlqczBPZ2pBUWhGK2w2ZGtRa0FRU2JpcGUvUW5xdmNKcURLV3R1MFZDakQ2N0xjRm1UN1B6VFdiZWZLTTdJOVM0RXgzd3dpbFZnN0hzQkMycnRPenRReXUrNEpXKzJVRWcvQ25aWDlrZUcwQzJNc2I1RjBEeVpNR1RLUGJuTTRBdndEbEI5NldTM1VoUG1SdEpiVVJROXdnMElaRUNHL2lEUnV2NE5JMno4RHM3Ym03MWF5Y1plRUUwYUd5Y2YweUhyUDJxUEFsbXVaN3J0LzlzS2F6Z254OHFwQWVYOWdBQUFBPT0=",
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        `${base_url}/Admin_GetTokenForCompany?MainID=${companyId}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          getLocationsLIst(result.data);
          if (localStorage.getItem("tokken") !== null) {
            localStorage.removeItem("tokken");
            localStorage.removeItem("compId");
            localStorage.removeItem("compName");
          }
          localStorage.setItem("tokken", result.data);
          localStorage.setItem("compId", companyId);
          localStorage.setItem("compName", company?.CompName);
        })
        .catch((error) => console.error(error));
    };

    const getLocationsLIst = (token) => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      // const encodedToken = btoa(companyToken);
      // const token=companyToken;
      const raw = JSON.stringify({
        tokenData: token,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(`${base_url}/LocationList`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setLocations(result.data);
          // console.log(result.data);
        })
        .catch((error) => console.error(error));
    };

    fetchCompany();
    getComapanyToken();
  }, []); // Empty dependency array means this runs only once when the component mounts

  const hanldeClick = (locationName,LocID) => {
    navigate(`${locationName}`);
    if (localStorage.getItem("LocID")) {
      localStorage.removeItem("LocID");
    }
    localStorage.setItem("LocID", LocID);
  };

  return (
    <>
      {/* <SubHeader Name={company?.compName} showDrop={true} hidebtn={true} loactonData={locations} compId={companyId} /> */}
      <div className="container-fluid p-3 bg-light my-2 d-flex justify-content-between">
        <div className="heading h4">
          <div className="d-inline p-0 mx-2">
            <BackButton />
          </div>
          {company?.CompName}
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            type="button"
            id="dropdownMenuButton"
            aria-expanded="false"
          >
            Locations
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {locations &&
              locations?.map((item, index) => {
                return (
                  <h6
                    className="dropdown-item text-dark text-decoration-none"
                    onClick={() => hanldeClick(item?.LocName, item?.LocID,)}
                    key={index}
                  >
                    {item?.LocName}
                  </h6>
                );
              })}
              {
               !locations && <h5 className="text-center">No Locations</h5>
              }
          </div>
        </div>
      </div>
      <ReUsableDashboard />
      {/* {<ClubLocations companyID={companyId}/>} */}
    </>
  );
};

export default CompanyDashboard;
