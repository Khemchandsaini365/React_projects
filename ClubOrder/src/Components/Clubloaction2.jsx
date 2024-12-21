import React, { useEffect, useState } from "react";
import SubHeader from "./SubHeader";
import { MdMenuBook, MdMenuOpen } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { base_url } from "../env";
import BackButton from "./BackButton";

const ClubLocations = ({ heading }) => {
  const { type } = useParams();

  const navigate = useNavigate();
  // console.log(type);

  const { companyId } = useParams();
  const [company, setComapnydata] = useState();
  const [companyToken, setComapnyToken] = useState();
  const [locations, setLocations] = useState();
  const location = useLocation();
  // console.log(location);
  useEffect(async () => {
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
          // console.log({ tokken: result.data });
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

  const GetProductList = () => {
    navigate("productsList");
  };

  const GetOrdersList = () => {
    navigate("orders");
  };

  const GetReservationList = () => {
    navigate("reservation");
  };

  return (
    <>
      <div className="container-fluid p-3 bg-light my-2 d-flex justify-content-between">
        <div className="heading h4">
          <div className="d-inline p-0 mx-2">
            <BackButton />
          </div>
          {company?.compName}
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
            {locations?.map((item, index) => {
              return (
                <h6 className="dropdown-item text-dark text-decoration-none">
                  {item?.locName}
                </h6>
              );
            })}
          </div>
        </div>
      </div>
      {/* <SubHeader Name={type.charAt(0).toUpperCase() + type.slice(1)} hidebtn={true} showDrop={true} loactonData={locations}  /> */}

      <div className="conatiner d-flex justify-content-evenly flex-wrap  p-3">
        <div
          className=" border border-secondary my-3  p-3  col-lg-3  col-10 d-flex justify-content-between bg-light rounded-3"
          style={{ minWidth: "300px" }}
          onClick={GetProductList}
        >
          <div
            style={{
              backgroundColor: "cyan",
              fontSize: "2.5rem",
              width: "100px",
              height: "100px",
            }}
            className="rounded-circle d-flex justify-content-center align-items-center text-dark "
          >
            <MdMenuBook />
          </div>

          <div className="info">
            <p style={{ fontSize: "1.5em", fontWeight: "300" }}>Product List</p>
            <p style={{ fontSize: "1.3rem", fontWeight: "300" }}>40</p>
          </div>
        </div>
        <div
          className=" border border-secondary  my-3 p-3  col-lg-3  col-10 d-flex justify-content-between bg-light rounded-3"
          style={{ minWidth: "300px" }}
          onClick={GetOrdersList}
        >
          <div
            style={{
              backgroundColor: "aquamarine",
              fontSize: "2.5rem",
              width: "100px",
              height: "100px",
            }}
            className="rounded-circle d-flex justify-content-center align-items-center text-dark "
          >
            <MdMenuOpen />
          </div>
          <div className="info">
            <p style={{ fontSize: "1.5em", fontWeight: "300" }}>Order List</p>
            <p style={{ fontSize: "1.3rem", fontWeight: "300" }}>11</p>
          </div>
        </div>
        <div
          className=" border border-secondary my-3 p-3  col-lg-3  col-10 d-flex justify-content-between bg-light rounded-3"
          style={{ minWidth: "300px" }}
          onClick={GetReservationList}
        >
          <div
            style={{
              backgroundColor: "tomato",
              fontSize: "2.5rem",
              width: "100px",
              height: "100px",
            }}
            className="rounded-circle d-flex justify-content-center align-items-center text-dark "
          >
            <RiServiceFill />
          </div>
          <div className="info">
            <p style={{ fontSize: "1.5em", fontWeight: "300" }}>Reservation</p>
            <p style={{ fontSize: "1.3rem", fontWeight: "300" }}>10</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubLocations;
