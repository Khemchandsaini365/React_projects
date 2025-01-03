import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { base_url } from "../env";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OrbitProgress } from "react-loading-indicators";
import { useDispatch } from "react-redux";
import EasyPosLogo from "../Images/EasyPOSLogo.png";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUserName] = useState({
    username: "",
    pwd: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserName((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };

  const notify = () =>
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: "Bounce",
    });
  // Api Login calling
  const [loader, setLoader] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const showHidePassword = (event) => {
    event.preventDefault();
    setIsPasswordVisible((prev) => !prev);
  };
  // const navigate = useNavigate();
  const navigate = useNavigate();

  const logo = EasyPosLogo;
  const CheckUpdates = () => {
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          const adminToken=localStorage.getItem("userToken")
          const raw = JSON.stringify({
            tokenData:"RGdFQUFCK0xDQUFBQUFBQUJBQTlqODBPZ2pBUWhGK0Y3SmtRRUFNSk54VVBYdndKNnIzQ2FneWxyZHNpSVFTZjNVS0E3R2wydnNuc2RtQmtpUUtTRG5heVVreTBSMVloSkZhSkhKVnhybGc2bWVTMWVVc0JMbVR5YVJwR09GTzhmamduS3BDY2pWTFd2eVBwZ1V3ZzhQeGhoZ3pTRjJsSzZOZEs4S3JWSHg0cnJrdFBZMTRUNmhIeEJKcUZQMHN5bGc5RFAxcDJOOHROcmNPMW8xeDRwblVqcWJEK0pXeWk4aWZpWURIVDdWUy9uN01wTXd4NmQvNzZrRUt5N3YvRVNxRTlEZ0VBQUE9PQ=="
          });
  
          const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };
  
          fetch(`${base_url}/CheckUpdates`, requestOptions)
            .then((response) => response.json())
            .then((result) => {console.log(result.status)} )
            .catch((error) => console.error(error));
    };

  const handelLogin = (e) => {
    e.preventDefault();
    setLoader(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const token =
      "OWdBQUFCK0xDQUFBQUFBQUFBbzlqczBPZ2pBUWhGK2w2ZGtRa0FRU2JpcGUvUW5xdmNKcURLV3R1MFZDakQ2N0xjRm1UN1B6VFdiZWZLTTdJOVM0RXgzd3dpbFZnN0hzQkMycnRPenRReXUrNEpXKzJVRWcvQ25aWDlrZUcwQzJNc2I1RjBEeVpNR1RLUGJuTTRBdndEbEI5NldTM1VoUG1SdEpiVVJROXdnMElaRUNHL2lEUnV2NE5JMno4RHM3Ym03MWF5Y1plRUUwYUd5Y2YweUhyUDJxUEFsbXVaN3J0LzlzS2F6Z254OHFwQWVYOWdBQUFBPT0=";

    const raw = JSON.stringify({
      tokenData: token,
      user: user?.username,
      pwd: user?.pwd,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${base_url}/Admin_VerifyLogin`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status) {
          localStorage.setItem("userToken", token);
          localStorage.setItem("username", user?.username);
          setLoader(false);
          navigate("/companies");
          CheckUpdates()
        } else {
          toast.error(result.error, {
            autoClose: 1000,
          });
          setLoader(false);
        }
      })
      .catch((error) => {
        toast.error("API Failed", {
          autoClose: 1000,
        });
        setLoader(false);
        console.error(error)});
  };
  const [loading, setLoading] = useState(false);
  return loader ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OrbitProgress color="#" size="medium" text="E Club" textColor="" />
    </div>
  ) : (
    <>
      <ToastContainer />
      <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center col-lg-5">
        <div className="card px-1 py-4 d-flex justify-content-center align-items-center">
          <div className="col-10">
            <img src={logo} alt="" width="100%" />
          </div>
          <div className="card-body w-100">
            <form action="">
              <h3 className="information mt-4 text-center">
                Administrator Login
              </h3>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="name">User</label>
                    <input
                      className="form-control border border-black"
                      type="text"
                      placeholder="User Name"
                      spellCheck="false"
                      onChange={handleChange}
                      value={user.username}
                      name="username"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group ">
                    <label htmlFor="password">Password</label>
                    <div className="input-group  border border-black rounded ">
                      <input
                        className="form-control"
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Password"
                        onChange={handleChange}
                        value={user.pwd}
                        name="pwd"
                      />
                      <div className="input-group-addon card p-2">
                        <a href="#" onClick={showHidePassword}>
                          {isPasswordVisible ? <BsEye /> : <BsEyeSlash />}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column text-center px-5 mt-3 mb-3">
                <small className="agree-text">
                  Go to the EPOS Admin Dashboard
                </small>
              </div>
              <button
                className="btn btn-primary btn-block confirm-button w-100"
                onClick={handelLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
