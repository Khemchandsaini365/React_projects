import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { base_url } from "../env";
import { ShimmerText, ShimmerTitle } from "react-shimmer-effects";
import { TextField } from "@mui/material";
const EditReservTable = ({ heading, btn }) => {
  const { reserveID } = useParams();

  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  const [shimmer, setShimmer] = useState(true);
  const [Client, setClient] = useState({
    ClientName: "",
    ClientMobile: "",
    ClientEmail: "",
    ClientPassword: "",
    ClientCompID: "",
  });
  // Update the license object on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prevData) => ({
      ...prevData,
      [name]: value, // Update LiceCompanyName in state
    }));
  };

  const editClient = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      tokenData:
        "OWdBQUFCK0xDQUFBQUFBQUFBbzlqczBPZ2pBUWhGK2w2ZGtRa0FRU2JpcGUvUW5xdmNKcURLV3R1MFZDakQ2N0xjRm1UN1B6VFdiZWZLTTdJOVM0RXgzd3dpbFZnN0hzQkMycnRPenRReXUrNEpXKzJVRWcvQ25aWDlrZUcwQzJNc2I1RjBEeVpNR1RLUGJuTTRBdndEbEI5NldTM1VoUG1SdEpiVVJROXdnMElaRUNHL2lEUnV2NE5JMno4RHM3Ym03MWF5Y1plRUUwYUd5Y2YweUhyUDJxUEFsbXVaN3J0LzlzS2F6Z254OHFwQWVYOWdBQUFBPT0=",
      Login: {
        LoginUserName: Client.ClientName,
        LoginPassword: Client.ClientPassword,
        LoginEmailID: Client.ClientEmail,
        LoginMobile: Client.ClientMobile,
        CompID: Client.ClientCompID,
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${base_url}/Admin_UpdateLogin?MainID=${reserveID}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        
        navigate("/allclients");
      })
      .catch((error) => console.error(error));
  };
  const getClientbyId = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      tokenData:
        "RGdFQUFCK0xDQUFBQUFBQUJBQTlqODBPZ2pBUWhGK0Y3TmtRa0FRU2Jpb2V2UGdUMUh1RjFaaVd0bTZMaEJCOGRnc0JzcWZaK1NhejI0RlZIQ1drSGV4VXBabHNqNnhDU0oyU0JXcnJYWkY3dVJLMWZTc0pLOGpWMHphTWNLWkUvZkJPVkNKNUc2MmRmMGN5QTVsQzZBZkREQm1rTDlLVU1LKzFGRlZyUGlMUnduRGZZRkVUbWhIeEpkcUZQeXV5am8raUlGNTJOOGROcmNPMW8xeDRaa3lqcUhUK0pXcGkvcE5KdUpqWmRxcmZ6OW1NV1FiOWF2NzZrRUVhOW4rQnZ0WkFEZ0VBQUE9PQ==",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
      
    fetch(
      `${base_url}/TableReservationByID?MainID=${reserveID}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        // console.log(result.data);
      })

      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getClientbyId();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(Client);

    await editClient();
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Edit Client</h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label">User Name</label>
          </div>
          <div className="col-sm-8">
            {shimmer ? (
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
              />
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label">Mobile</label>
          </div>
          <div className="col-sm-8">
            {shimmer ? (
              <ShimmerTitle line={1} />
            ) : (
              <TextField
                type="number"
                className="w-100"
                size="small"
                variant="outlined"
                name="ClientMobile"
                value={Client.ClientMobile} // Binding with state
                onChange={handleChange} // On change, it updates the license state
              />
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label">Email</label>
          </div>
          <div className="col-sm-8">
            {shimmer ? (
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
              />
            )}
          </div>
        </div>
        {/* <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label">
                Login Token
            </label>
          </div>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              name="LoginToken"
              
              disabled readonly
              placeholder='Token read only'
              onChange={handleChange} // On change, it updates the license state
            />
          </div>
        </div> */}
        <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label">Company Id</label>
          </div>
          <div className="col-sm-8">
            {shimmer ? (
              <ShimmerTitle line={1} />
            ) : (
              <TextField
                type="number"
                className="w-100"
                size="small"
                variant="outlined"
                name="ClientCompID"
                value={Client.ClientCompID}
                // Binding with state
                onChange={handleChange} // On change, it updates the license state
              />
            )}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-4">
            <label className="control-label">Password</label>
          </div>
          <div className="col-sm-8">
            {shimmer ? (
              <ShimmerTitle line={1} />
            ) : (
              <TextField
                type="password"
                className="w-100"
                size="small"
                name="ClientPassword"
                value={Client.ClientPassword} // Binding with state
                onChange={handleChange} // On change, it updates the license state
              />
            )}
          </div>
        </div>

        <div className="text-center mb-3">
          <button
            className="btn btn-primary waves-effect waves-light col-3"
            id="btn-submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditReservTable;
